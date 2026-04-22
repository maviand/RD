import React, { useState } from 'react';
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function SargassumEconomyChart() {
  const [concessions, setConcessions] = useState(2); // Number of private concessions

  const generateData = () => {
    const data = [];
    for (let year = 1; year <= 5; year++) {
      const collectedTons = concessions * 40000 * (year * 0.6); // Tons
      const revenue = (collectedTons * 180) / 1000000; // $180/ton for bio-stimulants, in Millions USD
      const hotelSavings = (collectedTons * 60) / 1000000; // $60/ton saved in cleaning
      
      data.push({
        year: `Año ${year}`,
        ingresosExportacion: Number(revenue.toFixed(1)),
        ahorroHoteles: Number(hotelSavings.toFixed(1))
      });
    }
    return data;
  };

  const data = generateData();

  return (
    <div className="bg-[#111827] text-white p-8 rounded-xl border border-gray-800 shadow-2xl mt-6 font-sans">
      <div className="mb-8">
        <h4 className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">Economía del Sargazo</h4>
        <p className="text-xs text-gray-500">Conversión de Riesgo Biológico a Exportación de Bioestimulantes (Millones USD)</p>
      </div>

      <div className="h-64 w-full mb-8 relative">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="year" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }}
              formatter={(value: any, name: any) => [`$${value}M`, name === 'ingresosExportacion' ? 'Ingresos por Exportación' : 'Ahorro en Limpieza (Hoteles)']}
            />
            <Legend wrapperStyle={{ fontSize: '12px', color: '#9ca3af' }} />
            <Bar dataKey="ingresosExportacion" fill="#10b981" name="ingresosExportacion" radius={[4, 4, 0, 0]} barSize={40} />
            <Line type="monotone" dataKey="ahorroHoteles" stroke="#3b82f6" strokeWidth={3} name="ahorroHoteles" dot={{ r: 4 }} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-8 bg-gray-900 p-6 rounded-lg border border-gray-800">
        <div className="flex items-center gap-4">
          <span className="text-sm font-bold text-gray-400 w-48">Concesiones Privadas Otorgadas</span>
          <input 
            type="range" 
            min="1" 
            max="10" 
            step="1"
            value={concessions} 
            onChange={(e) => setConcessions(parseInt(e.target.value))}
            className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-500"
          />
          <span className="bg-gray-800 px-3 py-1 rounded-md text-sm font-bold w-16 text-center">{concessions}</span>
        </div>
        
        <div className="pt-6 border-t border-gray-800 flex justify-between items-center">
          <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Impacto Económico Total (Año 5)</span>
          <span className="text-3xl font-black text-green-400">
            ${(data[4].ingresosExportacion + data[4].ahorroHoteles).toFixed(1)}M USD
          </span>
        </div>
      </div>
    </div>
  );
}
