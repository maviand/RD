import { useEffect, useRef, useState, useMemo } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import { Card, CardContent, CardHeader, CardTitle } from '../../../ui/card';
import { Slider } from '../../../ui/slider';
import { X } from 'lucide-react';

// Using the Highcharts topojson map data for Dominican Republic
const MAP_DATA_URL = 'https://code.highcharts.com/mapdata/countries/do/do-all.topo.json';

const MEGA_REGIONS = [
  {
    id: 1,
    name: "Gran Metrópolis",
    provinces: ["Distrito Nacional", "Santo Domingo", "Monte Plata"],
    color: "#CE1126", // Dominican Red
    focus: "Logística minorista de alta densidad, arquitectura urbana, servicios financieros y redes digitales principales.",
    priority: "Nivel 1 (Optimización)"
  },
  {
    id: 2,
    name: "Cibao Centro",
    provinces: ["Santiago", "La Vega", "Monseñor Nouel", "Espaillat", "Hermanas Mirabal"],
    color: "#002D62", // Dominican Blue
    focus: "Agroindustria, manufactura y distribución centralizada de atención médica.",
    priority: "Nivel 1 (Optimización)"
  },
  {
    id: 3,
    name: "Punta Cana - Este",
    provinces: ["La Altagracia", "La Romana", "San Pedro de Macorís", "El Seibo", "Hato Mayor"],
    color: "#0ea5e9", // Caribbean Sea
    focus: "Turismo, logística hotelera, bienes raíces costeros y operaciones portuarias principales.",
    priority: "Nivel 1 (Optimización)"
  },
  {
    id: 4,
    name: "Cibao Norte",
    provinces: ["Puerto Plata", "Monte Cristi", "Valverde", "Santiago Rodríguez", "Dajabón"],
    color: "#f59e0b", // Amber
    focus: "Comercio transfronterizo, turismo secundario y exportaciones agrícolas.",
    priority: "Nivel 2 (Crecimiento)"
  },
  {
    id: 5,
    name: "Cibao Nordeste",
    provinces: ["Duarte", "María Trinidad Sánchez", "Samaná", "Sánchez Ramírez"],
    color: "#10b981", // Tropical Green
    focus: "Minería (Cotuí), ecoturismo y producción agrícola (arroz/cacao).",
    priority: "Nivel 2 (Crecimiento)"
  },
  {
    id: 6,
    name: "Sur Central",
    provinces: ["San Cristóbal", "Peravia", "Azua", "San José de Ocoa"],
    color: "#f97316", // Mango Orange
    focus: "Corredores de tránsito, agricultura regional y zonificación industrial pesada.",
    priority: "Nivel 2 (Integración)"
  },
  {
    id: 7,
    name: "Sur Profundo",
    provinces: ["Barahona", "San Juan", "Elías Piña", "Bahoruco", "Independencia", "Pedernales"],
    color: "#8b5cf6", // Flamboyán Purple
    focus: "Turismo inexplorado (Cabo Rojo), arquitectura verde sostenible y establecimiento de conexiones fundamentales de suministro/venta minorista.",
    priority: "Nivel 3 (Emergente)"
  }
];

interface Province {
  id: string;
  name: string;
  cluster: number;
}

export default function DominicanRepublicMap() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [numClusters, setNumClusters] = useState<number>(32);
  const [mapData, setMapData] = useState<any>(null);
  const [tooltip, setTooltip] = useState<{ show: boolean, x: number, y: number, name: string, region: string } | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<any | null>(null);

  useEffect(() => {
    // Fetch map data
    d3.json(MAP_DATA_URL).then((data: any) => {
      setMapData(data);
    });
  }, []);

  // Memoize the base features and centroids so we don't re-parse topojson on every slide
  const { features, centroids, neighbors } = useMemo(() => {
    if (!mapData) return { features: [], centroids: [], neighbors: [] };

    const geometries = mapData.objects.default.geometries;
    const neighbors = topojson.neighbors(geometries);
    
    const features = (topojson.feature(mapData, mapData.objects.default) as any).features.map((f: any, i: number) => {
      f.id = f.id || `feature-${i}`;
      return f;
    });

    const centroids = features.map((f: any) => {
      const bounds = d3.geoBounds(f);
      return {
        id: f.id,
        name: f.properties.name,
        x: (bounds[0][0] + bounds[1][0]) / 2 || 0,
        y: (bounds[0][1] + bounds[1][1]) / 2 || 0
      };
    });

    return { features, centroids, neighbors };
  }, [mapData]);

  // Memoize the clustering logic
  const { clusterMap, clusterDisplayIdMap, clusterRegionNameMap, clusterColorMap } = useMemo(() => {
    if (centroids.length === 0) return { clusterMap: new Map(), clusterDisplayIdMap: new Map(), clusterRegionNameMap: new Map(), clusterColorMap: new Map() };

    const getTargetRegion = (provinceName: string) => {
      const normalized = (provinceName || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
      for (const region of MEGA_REGIONS) {
        for (const p of region.provinces) {
          const pNorm = p.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
          if (normalized.includes(pNorm) || pNorm.includes(normalized)) {
            return region;
          }
        }
      }
      return MEGA_REGIONS[0]; // Fallback
    };

    const clusters = centroids.map((c: any, i: number) => {
      const targetRegion = getTargetRegion(c.name);
      return {
        id: i,
        provinces: [i], // Store indices for neighbor lookup
        provinceIds: [c.id],
        x: c.x,
        y: c.y,
        count: 1,
        targetRegionId: targetRegion.id,
        targetRegionName: targetRegion.name,
        targetRegionColor: targetRegion.color
      };
    });

    const targetK = Math.max(10, Number(numClusters) || 10);
    const mergesNeeded = Math.max(0, centroids.length - targetK);
    let mergesDone = 0;

    for (const region of MEGA_REGIONS) {
      if (mergesDone >= mergesNeeded) break;

      // Keep merging within this region until it's 1 cluster or we hit mergesNeeded
      while (mergesDone < mergesNeeded) {
        let minDist = Infinity;
        let mergeA = -1;
        let mergeB = -1;

        for (let i = 0; i < clusters.length; i++) {
          if (clusters[i].targetRegionId !== region.id) continue;

          for (let j = i + 1; j < clusters.length; j++) {
            if (clusters[j].targetRegionId !== region.id) continue;

            // Check adjacency
            let isAdjacent = false;
            for (const p1 of clusters[i].provinces) {
              for (const p2 of clusters[j].provinces) {
                if (neighbors[p1] && neighbors[p1].includes(p2)) {
                  isAdjacent = true;
                  break;
                }
              }
              if (isAdjacent) break;
            }

            if (isAdjacent) {
              const dist = Math.sqrt(
                Math.pow(clusters[i].x - clusters[j].x, 2) + 
                Math.pow(clusters[i].y - clusters[j].y, 2)
              );
              if (dist < minDist) {
                minDist = dist;
                mergeA = i;
                mergeB = j;
              }
            }
          }
        }

        // Fallback if no adjacent clusters found in the same region
        if (mergeA === -1 || mergeB === -1) {
          for (let i = 0; i < clusters.length; i++) {
            if (clusters[i].targetRegionId !== region.id) continue;
            for (let j = i + 1; j < clusters.length; j++) {
              if (clusters[j].targetRegionId !== region.id) continue;
              const dist = Math.sqrt(
                Math.pow(clusters[i].x - clusters[j].x, 2) + 
                Math.pow(clusters[i].y - clusters[j].y, 2)
              );
              if (dist < minDist) {
                minDist = dist;
                mergeA = i;
                mergeB = j;
              }
            }
          }
        }

        if (mergeA !== -1 && mergeB !== -1) {
          const a = clusters[mergeA];
          const b = clusters[mergeB];
          
          const newCount = a.count + b.count;
          const newX = (a.x * a.count + b.x * b.count) / newCount;
          const newY = (a.y * a.count + b.y * b.count) / newCount;

          clusters[mergeA] = {
            id: a.id,
            provinces: [...a.provinces, ...b.provinces],
            provinceIds: [...a.provinceIds, ...b.provinceIds],
            x: newX,
            y: newY,
            count: newCount,
            targetRegionId: a.targetRegionId,
            targetRegionName: a.targetRegionName,
            targetRegionColor: a.targetRegionColor
          };

          clusters.splice(mergeB, 1);
          mergesDone++;
        } else {
          // No more merges possible for this region
          break;
        }
      }
    }

    const clusterMap = new Map();
    const clusterDisplayIdMap = new Map();
    const clusterRegionNameMap = new Map();
    const clusterColorMap = new Map();
    
    clusters.forEach((cluster, index) => {
      clusterDisplayIdMap.set(cluster.id, index + 1);
      clusterRegionNameMap.set(cluster.id, cluster.targetRegionName);
      clusterColorMap.set(cluster.id, cluster.targetRegionColor);
      cluster.provinceIds.forEach((provinceId: string) => {
        clusterMap.set(provinceId, cluster.id);
      });
    });

    return { clusterMap, clusterDisplayIdMap, clusterRegionNameMap, clusterColorMap };
  }, [centroids, neighbors, numClusters]);

  // Draw map once
  useEffect(() => {
    if (!mapData || !svgRef.current || features.length === 0) return;

    const svg = d3.select(svgRef.current);
    if (!svg.select('g').empty()) return; // Already drawn

    const width = 800;
    const height = 600;

    svg
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('preserveAspectRatio', 'xMidYMid meet');

    const projection = d3.geoMercator()
      .fitSize([width, height], { type: 'FeatureCollection', features });

    const path = d3.geoPath().projection(projection);

    const gPaths = svg.append('g').attr('id', 'paths-group');
    const gLabels = svg.append('g').attr('id', 'labels-group');

    gPaths.selectAll('path')
      .data(features)
      .enter()
      .append('path')
      .attr('d', path as any)
      .attr('id', (d: any) => `province-${d.id}`)
      .attr('stroke', '#fff')
      .attr('stroke-width', 1)
      .style('transition', 'fill 0.3s ease, transform 0.2s ease')
      .append('title')
      .text((d: any) => `Provincia: ${d.properties.name}`); // Accessibility title

    gLabels.selectAll('text.province-label')
      .data(features)
      .enter()
      .append('text')
      .attr('class', 'province-label')
      .attr('transform', (d: any) => {
        const centroid = path.centroid(d);
        if (isNaN(centroid[0]) || isNaN(centroid[1])) return 'translate(-1000,-1000)';
        return `translate(${centroid[0]},${centroid[1]})`;
      })
      .attr('text-anchor', 'middle')
      .attr('dy', '.35em')
      .text((d: any) => {
        // Shorten long names for better fit
        const name = d.properties.name;
        if (name === "Distrito Nacional") return "D.N.";
        if (name === "San Pedro de Macorís") return "S.P.M.";
        if (name === "María Trinidad Sánchez") return "M.T.S.";
        return name;
      })
      .attr('font-size', '8px')
      .attr('font-weight', '600')
      .attr('fill', '#1e293b')
      .style('pointer-events', 'none')
      .style('text-shadow', '1px 1px 0 rgba(255,255,255,0.8), -1px -1px 0 rgba(255,255,255,0.8), 1px -1px 0 rgba(255,255,255,0.8), -1px 1px 0 rgba(255,255,255,0.8)');

  }, [mapData, features]);

  // Update colors and tooltips when clusters change
  useEffect(() => {
    if (!svgRef.current || clusterMap.size === 0) return;

    const svg = d3.select(svgRef.current);
    
    const getColor = (clusterId: number | undefined, provinceId: string) => {
      const baseColor = clusterId !== undefined ? (clusterColorMap.get(clusterId) || '#ccc') : '#ccc';
      if (numClusters === 10 || clusterId === undefined) return baseColor;
      
      try {
        const color = d3.hsl(baseColor);
        
        // Calculate how "divided" the map is (0 = fully fused at 10, 1 = fully divided at 32)
        const divisionFactor = (numClusters - 10) / 22;
        
        // Use provinceId to create a deterministic hash for distinct colors
        let hash = 0;
        for (let i = 0; i < provinceId.length; i++) {
          hash = provinceId.charCodeAt(i) + ((hash << 5) - hash);
        }
        
        // Hue shift: up to +/- 120 degrees to ensure strong differentiation when divided
        const hueShift = ((Math.abs(hash) % 240) - 120) * divisionFactor;
        
        // Lightness shift: up to +/- 0.25 to ensure adjacent provinces have contrast
        const lightShift = (((Math.abs(hash) % 50) - 25) / 100) * divisionFactor;
        
        color.h = (color.h + hueShift + 360) % 360;
        color.l = Math.max(0.25, Math.min(0.85, color.l + lightShift));
        
        return color.formatHex();
      } catch (e) {
        return baseColor;
      }
    };

    svg.select('#paths-group').selectAll('path')
      .style('transition', 'fill 0.3s ease, opacity 0.3s ease, stroke-width 0.3s ease, stroke 0.3s ease')
      .attr('stroke', (d: any) => {
        if (!selectedRegion) return '#fff';
        const clusterId = clusterMap.get(d.id);
        const regionName = clusterRegionNameMap.get(clusterId);
        return regionName === selectedRegion.name ? '#002855' : '#fff';
      })
      .attr('stroke-width', (d: any) => {
        if (!selectedRegion) return 1;
        const clusterId = clusterMap.get(d.id);
        const regionName = clusterRegionNameMap.get(clusterId);
        return regionName === selectedRegion.name ? 2 : 1;
      })
      .attr('opacity', (d: any) => {
        if (!selectedRegion) return 1;
        const clusterId = clusterMap.get(d.id);
        const regionName = clusterRegionNameMap.get(clusterId);
        return regionName === selectedRegion.name ? 1 : 0.3;
      })
      .attr('fill', (d: any) => {
        const clusterId = clusterMap.get(d.id);
        return getColor(clusterId, d.id);
      })
      .on('mouseover', function(event, d: any) {
        d3.select(this)
          .attr('stroke', '#002855')
          .attr('stroke-width', 2)
          .attr('opacity', 0.9)
          .style('cursor', 'pointer');
          
        const clusterId = clusterMap.get(d.id);
        const regionName = clusterRegionNameMap.get(clusterId);
        
        setTooltip({
          show: true,
          x: event.clientX,
          y: event.clientY,
          name: d.properties.name,
          region: `Mega-Región: ${regionName || 'Desconocida'}`
        });
      })
      .on('mousemove', function(event) {
        setTooltip(prev => prev ? { ...prev, x: event.clientX, y: event.clientY } : null);
      })
      .on('mouseout', function(event, d: any) {
        const clusterId = clusterMap.get(d.id);
        const regionName = clusterRegionNameMap.get(clusterId);
        const isSelected = selectedRegion && regionName === selectedRegion.name;
        
        d3.select(this)
          .attr('stroke', isSelected ? '#002855' : '#fff')
          .attr('stroke-width', isSelected ? 2 : 1)
          .attr('opacity', selectedRegion ? (isSelected ? 1 : 0.3) : 1);
          
        setTooltip(null);
      })
      .on('click', function(event, d: any) {
        const clusterId = clusterMap.get(d.id);
        const regionName = clusterRegionNameMap.get(clusterId);
        const region = MEGA_REGIONS.find(r => r.name === regionName);
        if (region) {
          setSelectedRegion(region);
        }
      });

  }, [clusterMap, clusterDisplayIdMap, clusterRegionNameMap, clusterColorMap, numClusters, selectedRegion]);

  return (
    <div className="relative w-full">
      <div className="flex flex-col items-center gap-6 w-full">
        <div className="w-full max-w-md space-y-4">
          <div className="flex justify-between text-sm text-slate-600">
            <span>10 Mega Provincias</span>
            <span className="font-bold text-slate-900">{numClusters} {numClusters === 32 ? 'Provincias' : 'Regiones'}</span>
            <span>31 Provincias + D.N.</span>
          </div>
          <Slider
            value={numClusters}
            min={10}
            max={32}
            step={1}
            onValueChange={(val) => setNumClusters(Array.isArray(val) ? val[0] : val)}
          />
        </div>
        
        <div className="w-full border rounded-lg overflow-hidden bg-slate-50 relative">
          <svg ref={svgRef} className="w-full h-auto min-h-[400px] cursor-pointer" />
        </div>

        {numClusters < 32 && (
          <div className="w-full mt-4">
            <h3 className="text-sm font-bold text-slate-900 mb-3 text-center uppercase tracking-wider">Leyenda de Mega Regiones</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {MEGA_REGIONS.map(region => (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegion(region)}
                  className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-full shadow-sm hover:bg-slate-50 transition-colors text-sm"
                >
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: region.color }} />
                  <span className="font-medium text-slate-700">{region.name}</span>
                </button>
              ))}
            </div>
            <p className="text-xs text-slate-500 text-center mt-3">Haz clic en una región en el mapa o en la leyenda para ver los detalles</p>
          </div>
        )}
      </div>

      {/* HTML Tooltip */}
      {tooltip && tooltip.show && (
        <div 
          className="fixed z-50 pointer-events-none bg-slate-900 text-white px-3 py-2 rounded-lg shadow-lg text-sm transform -translate-x-1/2 -translate-y-full mt-[-15px] transition-none"
          style={{ left: tooltip.x, top: tooltip.y, transition: 'none' }}
        >
          <div className="font-bold">{tooltip.name}</div>
          <div className="text-slate-300 text-xs">{tooltip.region}</div>
          <div className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
        </div>
      )}

      {/* Region Details Section */}
      {selectedRegion && (
        <div className="w-full mt-6 bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 animate-in fade-in slide-in-from-bottom-4">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: selectedRegion.color }}>
                {selectedRegion.name}
              </h3>
              <span className="inline-block px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full border border-slate-200">
                {selectedRegion.priority}
              </span>
            </div>
            <button 
              onClick={() => setSelectedRegion(null)}
              className="text-slate-400 hover:text-slate-600 transition-colors bg-slate-50 hover:bg-slate-100 p-2 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-sm text-slate-900 mb-2 uppercase tracking-wide">Enfoque Económico Principal</h4>
              <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-lg border border-slate-100 h-full">
                {selectedRegion.focus}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-slate-900 mb-3 uppercase tracking-wide">Provincias Incluidas</h4>
              <div className="flex flex-wrap gap-2">
                {selectedRegion.provinces.map((p: string) => (
                  <span key={p} className="px-3 py-1.5 bg-white border border-slate-200 text-slate-700 text-xs font-medium rounded-md shadow-sm">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
