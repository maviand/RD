import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function TourismLeakageChart() {
  const [localQuota, setLocalQuota] = useState(20); // Local sourcing percentage

  const TOTAL_TOURISM_REVENUE = 10; // USD Billions

  const generateData = () => {
    const data = [];
    let currentQuota = 20; // Starts at 20%
    
    for (let year = 1; year <= 5; year++) {
      // Simulate gradual adoption of the quota
      const adoptedQuota = currentQuota + ((localQuota - currentQuota) * (year / 5));
      
      const retained = (adoptedQuota / 100) * TOTAL_TOURISM_REVENUE;
      const leaked = TOTAL_TOURISM_REVENUE - retained;

      data.push({
        year: `Año ${year}`,
        retenido: Number(retained.toFixed(2)),
        fuga: Number(leaked.toFixed(2))
      });
    }
    return data;
  };

  const data = generateData();

  return (
    <div className="bg-[#111827] text-white p-8 rounded-xl border border-gray-800 shadow-2xl mt-6 font-sans">
      <div className="mb-8">
        <h4 className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">Fuga Económica vs Retención (Turismo)</h4>
        <p className="text-xs text-gray-500">Impacto de la Cuota de Abastecimiento Local en Ingresos (USD Billones)</p>
      </div>

      <div className="h-64 w-full mb-8 relative">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="year" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }}
              formatter={(value: any, name: any) => [`$${value}B`, name === 'retenido' ? 'Valor Retenido (Local)' : 'Fuga Económica (Importaciones)']}
            />
            <Legend wrapperStyle={{ fontSize: '12px', color: '#9ca3af' }} />
            <Bar dataKey="retenido" stackId="a" fill="#10b981" name="retenido" radius={[0, 0, 4, 4]} />
            <Bar dataKey="fuga" stackId="a" fill="#ef4444" name="fuga" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-8 bg-gray-900 p-6 rounded-lg border border-gray-800">
        <div className="flex items-center gap-4">
          <span className="text-sm font-bold text-gray-400 w-48">Cuota de Abastecimiento Local (%)</span>
          <input 
            type="range" 
            min="20" 
            max="80" 
            step="5"
            value={localQuota} 
            onChange={(e) => setLocalQuota(parseInt(e.target.value))}
            className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-500"
          />
          <span className="bg-gray-800 px-3 py-1 rounded-md text-sm font-bold w-16 text-center">{localQuota}%</span>
        </div>
        
        <div className="pt-6 border-t border-gray-800 flex justify-between items-center">
          <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Valor Retenido (Año 5)</span>
          <span className="text-3xl font-black text-green-400">
            ${data[4].retenido}B USD
          </span>
        </div>
      </div>
    </div>
  );
}
