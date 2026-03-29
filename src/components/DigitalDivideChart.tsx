import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

export default function DigitalDivideChart() {
  const [terminals, setTerminals] = useState(1000); // Starlink terminals

  const generateData = () => {
    const data = [];
    let coverage = 15; // Base 15% rural coverage
    for (let year = 1; year <= 5; year++) {
      // 5000 terminals roughly equals 100% coverage by year 3-4
      const addedCoverage = (terminals / 5000) * 25; 
      coverage = Math.min(100, coverage + addedCoverage);
      data.push({
        year: `Año ${year}`,
        cobertura: Number(coverage.toFixed(1))
      });
    }
    return data;
  };

  const data = generateData();

  return (
    <div className="bg-[#111827] text-white p-8 rounded-xl border border-gray-800 shadow-2xl mt-6 font-sans">
      <div className="mb-8">
        <h4 className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">Cierre de Brecha Digital (Zonas Rurales)</h4>
        <p className="text-xs text-gray-500">Impacto del Despliegue de Internet Satelital (ej. Starlink)</p>
      </div>

      <div className="h-64 w-full mb-8 relative">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="year" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} domain={[0, 100]} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }}
              formatter={(value: number) => [`${value}%`, 'Cobertura Rural de Alta Velocidad']}
            />
            <ReferenceLine y={100} stroke="#10b981" strokeDasharray="3 3" label={{ position: 'top', value: 'Cobertura Universal', fill: '#10b981', fontSize: 12 }} />
            <Line type="monotone" dataKey="cobertura" stroke="#10b981" strokeWidth={3} dot={{ r: 4, fill: '#10b981', strokeWidth: 2, stroke: '#111827' }} activeDot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-8 bg-gray-900 p-6 rounded-lg border border-gray-800">
        <div className="flex items-center gap-4">
          <span className="text-sm font-bold text-gray-400 w-48">Terminales Satelitales Desplegadas</span>
          <input 
            type="range" 
            min="500" 
            max="5000" 
            step="500"
            value={terminals} 
            onChange={(e) => setTerminals(parseInt(e.target.value))}
            className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-500"
          />
          <span className="bg-gray-800 px-3 py-1 rounded-md text-sm font-bold w-16 text-center">{terminals}</span>
        </div>
        
        <div className="pt-6 border-t border-gray-800 flex justify-between items-center">
          <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Cobertura Rural (Año 5)</span>
          <span className="text-3xl font-black text-green-400">
            {data[4].cobertura}%
          </span>
        </div>
      </div>
    </div>
  );
}
