import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Line } from 'recharts';

export default function SchoolInfrastructureChart() {
  const [modularPercent, setModularPercent] = useState(50);

  const generateData = () => {
    const data = [];
    let totalRenovated = 0;
    for (let year = 1; year <= 5; year++) {
      // Traditional: 50/yr at 100% traditional
      // Modular: 400/yr at 100% modular
      const traditionalBuilt = Math.round(50 * ((100 - modularPercent) / 100));
      const modularBuilt = Math.round(400 * (modularPercent / 100));
      const yearlyTotal = traditionalBuilt + modularBuilt;
      totalRenovated += yearlyTotal;

      data.push({
        year: `Año ${year}`,
        tradicional: traditionalBuilt,
        modular: modularBuilt,
        acumulado: totalRenovated
      });
    }
    return data;
  };

  const data = generateData();

  return (
    <div className="bg-[#111827] text-white p-8 rounded-xl border border-gray-800 shadow-2xl mt-6 font-sans">
      <div className="mb-8">
        <h4 className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">Velocidad de Renovación Escolar</h4>
        <p className="text-xs text-gray-500">Construcción Tradicional vs. Diseños Modulares Estandarizados</p>
      </div>

      <div className="h-64 w-full mb-8 relative">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="year" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }}
              formatter={(value: number, name: string) => [value, name === 'tradicional' ? 'Escuelas (Tradicional)' : name === 'modular' ? 'Escuelas (Modular)' : 'Total Acumulado']}
            />
            <Legend wrapperStyle={{ fontSize: '12px', color: '#9ca3af' }} />
            <Bar dataKey="tradicional" stackId="a" fill="#f59e0b" name="tradicional" radius={[0, 0, 4, 4]} />
            <Bar dataKey="modular" stackId="a" fill="#3b82f6" name="modular" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-8 bg-gray-900 p-6 rounded-lg border border-gray-800">
        <div className="flex items-center gap-4">
          <span className="text-sm font-bold text-gray-400 w-48">Adopción de Modelo Modular (%)</span>
          <input 
            type="range" 
            min="0" 
            max="100" 
            step="10"
            value={modularPercent} 
            onChange={(e) => setModularPercent(parseInt(e.target.value))}
            className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
          <span className="bg-gray-800 px-3 py-1 rounded-md text-sm font-bold w-16 text-center">{modularPercent}%</span>
        </div>
        
        <div className="pt-6 border-t border-gray-800 flex justify-between items-center">
          <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Escuelas Renovadas (5 Años)</span>
          <span className="text-3xl font-black text-blue-400">
            {data[4].acumulado}
          </span>
        </div>
      </div>
    </div>
  );
}
