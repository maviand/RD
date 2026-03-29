import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

export default function EducationMeritSystemChart() {
  const [meritStrictness, setMeritStrictness] = useState(0); // 0 to 100%

  // Base PISA Math score is 339
  // As merit strictness goes from 0 to 100%, PISA score rises to ~450 over 5 years
  const calculatePisaScore = (year: number, strictness: number) => {
    const baseScore = 339;
    const maxScore = 450;
    const improvementFactor = (strictness / 100) * (year / 5);
    
    return Math.round(baseScore + ((maxScore - baseScore) * improvementFactor));
  };

  const data = [
    { year: '2024', score: calculatePisaScore(0, meritStrictness) },
    { year: '2025', score: calculatePisaScore(1, meritStrictness) },
    { year: '2026', score: calculatePisaScore(2, meritStrictness) },
    { year: '2027', score: calculatePisaScore(3, meritStrictness) },
    { year: '2028', score: calculatePisaScore(4, meritStrictness) },
    { year: '2029', score: calculatePisaScore(5, meritStrictness) },
  ];

  const finalScore = data[data.length - 1].score;

  return (
    <div className="bg-[#111827] border border-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Modelo de Excelencia Escolar (Singapur)</h3>
          <p className="text-sm text-gray-400">Impacto de la evaluación docente basada en el mérito sobre los resultados PISA</p>
        </div>
        <div className="bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700">
          <div className="text-sm text-gray-400">Puntaje PISA Matemáticas (2029)</div>
          <div className="text-2xl font-bold text-purple-400">{finalScore}</div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400">Rigor del Sistema Basado en el Mérito (Vinculación de Permanencia a Resultados)</span>
          <span className="text-purple-400 font-bold">{meritStrictness}%</span>
        </div>
        <input 
          type="range" 
          min="0" 
          max="100" 
          step="10"
          value={meritStrictness} 
          onChange={(e) => setMeritStrictness(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0% (Sistema Actual)</span>
          <span>100% (Modelo Singapur)</span>
        </div>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="year" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} />
            <YAxis stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} domain={[300, 500]} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#f3f4f6' }}
              itemStyle={{ color: '#e5e7eb' }}
            />
            <ReferenceLine y={472} stroke="#10b981" strokeDasharray="3 3" label={{ position: 'insideTopLeft', value: 'Promedio OCDE (472)', fill: '#10b981', fontSize: 12 }} />
            <Line type="monotone" dataKey="score" name="Puntaje PISA" stroke="#a855f7" strokeWidth={4} dot={{ r: 6, fill: '#a855f7', strokeWidth: 2, stroke: '#111827' }} activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
        <h4 className="text-sm font-bold text-gray-300 mb-2">Impacto Cognitivo Estimado</h4>
        <p className="text-sm text-gray-400">
          Al implementar el "Modelo de Excelencia Escolar" con un rigor del <span className="text-white font-semibold">{meritStrictness}%</span>, eliminando la inflación de calificaciones y vinculando la permanencia docente al crecimiento cognitivo real de los estudiantes, la República Dominicana podría elevar su puntaje PISA en matemáticas de 339 a <span className="text-purple-400 font-bold">{finalScore}</span> en 5 años, acercándose significativamente al promedio de la OCDE.
        </p>
      </div>
    </div>
  );
}
