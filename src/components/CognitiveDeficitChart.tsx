import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

export default function CognitiveDeficitChart() {
  const [meritPassRate, setMeritPassRate] = useState(30); // Percentage of teachers passing

  const CURRENT_PISA_SCORE = 339;
  const OECD_AVERAGE = 489;

  const generateData = () => {
    const data = [];
    let currentScore = CURRENT_PISA_SCORE;
    
    for (let year = 0; year <= 10; year += 2) {
      data.push({
        year: `Año ${year}`,
        puntaje: Math.round(currentScore),
        promedioOCDE: OECD_AVERAGE
      });
      
      // The higher the pass rate, the faster the score improves
      // Base improvement + (pass rate factor)
      const improvement = 2 + (meritPassRate / 100) * 15;
      currentScore += improvement;
    }
    return data;
  };

  const data = generateData();

  return (
    <div className="bg-[#111827] text-white p-8 rounded-xl border border-gray-800 shadow-2xl mt-6 font-sans">
      <div className="mb-8">
        <h4 className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">Proyección de Puntaje PISA (Matemáticas)</h4>
        <p className="text-xs text-gray-500">Impacto del Modelo de Excelencia Escolar y Evaluación Docente</p>
      </div>

      <div className="h-64 w-full mb-8 relative">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="year" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} domain={[300, 550]} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }}
              formatter={(value: number, name: string) => [value, name === 'puntaje' ? 'Puntaje Proyectado' : 'Promedio OCDE']}
            />
            <ReferenceLine y={OECD_AVERAGE} stroke="#10b981" strokeDasharray="3 3" label={{ position: 'top', value: 'Promedio OCDE', fill: '#10b981', fontSize: 12 }} />
            <Line type="monotone" dataKey="puntaje" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4, fill: '#3b82f6', strokeWidth: 2, stroke: '#111827' }} activeDot={{ r: 6 }} name="puntaje" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-8 bg-gray-900 p-6 rounded-lg border border-gray-800">
        <div className="flex items-center gap-4">
          <span className="text-sm font-bold text-gray-400 w-48">Docentes que superan evaluación (%)</span>
          <input 
            type="range" 
            min="10" 
            max="100" 
            step="5"
            value={meritPassRate} 
            onChange={(e) => setMeritPassRate(parseInt(e.target.value))}
            className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
          <span className="bg-gray-800 px-3 py-1 rounded-md text-sm font-bold w-16 text-center">{meritPassRate}%</span>
        </div>
        
        <div className="pt-6 border-t border-gray-800 flex justify-between items-center">
          <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Puntaje Proyectado (Año 10)</span>
          <div className="flex items-baseline gap-2">
             <span className="text-3xl font-black text-blue-400">
               {data[5].puntaje}
             </span>
             <span className="text-sm text-gray-500 font-bold">/ {OECD_AVERAGE} OCDE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
