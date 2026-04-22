import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function TourismSecurityChart() {
  const [cameraDensity, setCameraDensity] = useState(20); // cameras per km2

  const generateData = () => {
    const data = [];
    let crimeRate = 100; // Baseline index 100
    for (let year = 1; year <= 5; year++) {
      // Higher density = faster drop in crime index
      const drop = 5 + (cameraDensity / 100) * 25;
      crimeRate = Math.max(10, crimeRate - drop);
      data.push({
        year: `Año ${year}`,
        indiceCriminalidad: Number(crimeRate.toFixed(1))
      });
    }
    return data;
  };

  const data = generateData();

  return (
    <div className="bg-[#111827] text-white p-8 rounded-xl border border-gray-800 shadow-2xl mt-6 font-sans">
      <div className="mb-8">
        <h4 className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">Seguridad en Zonas Turísticas</h4>
        <p className="text-xs text-gray-500">Reducción del Índice de Criminalidad mediante Red CCTV con IA</p>
      </div>

      <div className="h-64 w-full mb-8 relative">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorCrime" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="year" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} domain={[0, 100]} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }}
              formatter={(value: any) => [`${value} pts`, 'Índice de Criminalidad (Base 100)']}
            />
            <Area 
              type="monotone" 
              dataKey="indiceCriminalidad" 
              stroke="#ef4444" 
              fillOpacity={1} 
              fill="url(#colorCrime)" 
              name="indiceCriminalidad" 
              isAnimationActive={true}
              animationDuration={1500}
              animationEasing="ease-in-out"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-8 bg-gray-900 p-6 rounded-lg border border-gray-800">
        <div className="flex items-center gap-4">
          <span className="text-sm font-bold text-gray-400 w-48">Densidad de Cámaras IA (por km²)</span>
          <input 
            type="range" 
            min="10" 
            max="150" 
            step="10"
            value={cameraDensity} 
            onChange={(e) => setCameraDensity(parseInt(e.target.value))}
            className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-red-500 focus:outline-none focus:ring-4 focus:ring-red-500/40 transition-shadow"
          />
          <span className="bg-gray-800 px-3 py-1 rounded-md text-sm font-bold w-16 text-center">{cameraDensity}</span>
        </div>
        
        <div className="pt-6 border-t border-gray-800 flex justify-between items-center">
          <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Reducción del Crimen (Año 5)</span>
          <span className="text-3xl font-black text-red-aaa text-red-400">
            -{((100 - data[4].indiceCriminalidad)).toFixed(1)}%
          </span>
        </div>
      </div>
    </div>
  );
}
