import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

export default function GovernmentMinistryConsolidationChart() {
  const [ministriesConsolidated, setMinistriesConsolidated] = useState(0); // Number of ministries consolidated (0 to 16)

  // Base operational cost is 100%
  // As ministries consolidated goes from 0 to 16, operational cost drops to 60%
  const calculateOperationalCost = (year: number, consolidated: number) => {
    const baseCost = 100;
    const minCost = 60;
    const reductionFactor = (consolidated / 16) * (year / 5); // Gradual effect over 5 years
    
    const currentCost = baseCost - ((baseCost - minCost) * reductionFactor);
    return Math.max(minCost, currentCost);
  };

  const data = [
    { year: '2024', cost: calculateOperationalCost(0, ministriesConsolidated), target: 60 },
    { year: '2025', cost: calculateOperationalCost(1, ministriesConsolidated), target: 60 },
    { year: '2026', cost: calculateOperationalCost(2, ministriesConsolidated), target: 60 },
    { year: '2027', cost: calculateOperationalCost(3, ministriesConsolidated), target: 60 },
    { year: '2028', cost: calculateOperationalCost(4, ministriesConsolidated), target: 60 },
    { year: '2029', cost: calculateOperationalCost(5, ministriesConsolidated), target: 60 },
  ];

  const currentCostRate = data[data.length - 1].cost;
  const costReduction = 100 - currentCostRate; // Percentage reduction in operational cost

  return (
    <div className="bg-[#111827] border border-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Gobierno Minimalista y Fusión Funcional</h3>
          <p className="text-sm text-gray-400">Proyección de reducción de gastos operativos al consolidar ministerios</p>
        </div>
        <div className="bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700">
          <div className="text-sm text-gray-400">Ahorro Operativo (2029)</div>
          <div className="text-2xl font-bold text-orange-400">-{costReduction.toFixed(0)}%</div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400">Ministerios Consolidados (de 24 a 8 carteras esenciales)</span>
          <span className="text-orange-400 font-bold">{ministriesConsolidated}</span>
        </div>
        <input 
          type="range" 
          min="0" 
          max="16" 
          step="1"
          value={ministriesConsolidated} 
          onChange={(e) => setMinistriesConsolidated(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0 (24 Ministerios Actuales)</span>
          <span>16 (8 Carteras Esenciales)</span>
        </div>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f97316" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="year" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} />
            <YAxis stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} tickFormatter={(value) => `${value}%`} domain={[40, 100]} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#f3f4f6' }}
              itemStyle={{ color: '#e5e7eb' }}
              formatter={(value: any) => [`${value.toFixed(1)}%`, 'Gasto Operativo Relativo']}
            />
            <ReferenceLine y={60} stroke="#10b981" strokeDasharray="3 3" label={{ position: 'insideTopLeft', value: 'Meta de Fusión (60%)', fill: '#10b981', fontSize: 12 }} />
            <Area type="monotone" dataKey="cost" stroke="#f97316" strokeWidth={3} fillOpacity={1} fill="url(#colorCost)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
        <h4 className="text-sm font-bold text-gray-300 mb-2">Impacto Fiscal Estimado</h4>
        <p className="text-sm text-gray-400">
          Al consolidar <span className="text-white font-semibold">{ministriesConsolidated}</span> ministerios, fusionando plataformas tecnológicas, sistemas de compras y reubicando personal esencial, el gasto operativo relativo del gobierno se reduciría al <span className="text-orange-400 font-semibold">{currentCostRate.toFixed(1)}%</span> para 2029. Esto representa un ahorro masivo del <span className="text-orange-400 font-bold">{costReduction.toFixed(0)}%</span> en nómina administrativa, alquileres y mantenimiento, permitiendo redirigir fondos hacia inversión de capital e infraestructura crítica.
        </p>
      </div>
    </div>
  );
}
