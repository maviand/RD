import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function AmbulanceDispatchAIChart() {
  const [aiIntegration, setAiIntegration] = useState(0); // 0 to 100%

  const calculateData = (year: number, integration: number) => {
    const baseResponseTime = 45; // Minutes
    const minResponseTime = 8; // International standard
    const baseSurvival = 60; // Pre-hospital survival rate %
    const maxSurvival = 92;
    
    const impactFactor = (integration / 100) * (year / 5);
    
    return {
      year: `202${4 + year}`,
      responseTime: Math.max(minResponseTime, baseResponseTime - ((baseResponseTime - minResponseTime) * impactFactor)),
      survival: Math.min(maxSurvival, baseSurvival + ((maxSurvival - baseSurvival) * impactFactor)),
    };
  };

  const data = [
    calculateData(0, aiIntegration),
    calculateData(1, aiIntegration),
    calculateData(2, aiIntegration),
    calculateData(3, aiIntegration),
    calculateData(4, aiIntegration),
    calculateData(5, aiIntegration),
  ];

  const finalResponseTime = data[data.length - 1].responseTime;
  const finalSurvival = data[data.length - 1].survival;

  return (
    <div className="bg-[#111827] border border-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Despacho Descentralizado por IA (911)</h3>
          <p className="text-sm text-gray-400">Impacto del enrutamiento dinámico en tiempos de respuesta y supervivencia</p>
        </div>
        <div className="bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700">
          <div className="text-sm text-gray-400">Tiempo de Respuesta (2029)</div>
          <div className="text-2xl font-bold text-indigo-400">{finalResponseTime.toFixed(1)} min</div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400">Integración de Ambulancias (Públicas/Privadas) vía IA</span>
          <span className="text-indigo-400 font-bold">{aiIntegration}%</span>
        </div>
        <input 
          type="range" 
          min="0" 
          max="100" 
          step="10"
          value={aiIntegration} 
          onChange={(e) => setAiIntegration(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0% (Despacho Manual Fragmentado)</span>
          <span>100% (Enrutamiento Dinámico Total)</span>
        </div>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="year" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} />
            <YAxis yAxisId="left" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} tickFormatter={(value) => `${value}m`} />
            <YAxis yAxisId="right" orientation="right" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} tickFormatter={(value) => `${value}%`} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#f3f4f6' }}
              itemStyle={{ color: '#e5e7eb' }}
              formatter={(value: any, name: any) => [
                name === 'Tiempo de Respuesta Promedio' ? `${value.toFixed(1)} min` : `${value.toFixed(1)}%`, 
                name
              ]}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            <Line yAxisId="left" type="monotone" dataKey="responseTime" name="Tiempo de Respuesta Promedio" stroke="#6366f1" strokeWidth={4} dot={{ r: 6, fill: '#6366f1', strokeWidth: 2, stroke: '#111827' }} />
            <Line yAxisId="right" type="monotone" dataKey="survival" name="Tasa de Supervivencia Prehospitalaria" stroke="#10b981" strokeWidth={3} strokeDasharray="5 5" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
        <h4 className="text-sm font-bold text-gray-300 mb-2">Impacto en Emergencias</h4>
        <p className="text-sm text-gray-400">
          Al integrar el <span className="text-white font-semibold">{aiIntegration}%</span> de la flota de ambulancias (públicas y privadas) bajo un algoritmo de despacho descentralizado por IA, el tiempo de respuesta promedio cae de 45 minutos a <span className="text-indigo-400 font-bold">{finalResponseTime.toFixed(1)} minutos</span>. Esta eficiencia algorítmica salva vidas críticas, elevando la tasa de supervivencia prehospitalaria del 60% al <span className="text-emerald-400 font-semibold">{finalSurvival.toFixed(1)}%</span>.
        </p>
      </div>
    </div>
  );
}
