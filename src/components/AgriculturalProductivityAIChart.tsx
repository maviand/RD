import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

export default function AgriculturalProductivityAIChart() {
  const [aiAdoption, setAiAdoption] = useState(10); // Percentage of AI adoption

  // Base yield gap is 83%
  // As AI adoption goes from 10% to 100%, yield gap drops from 83% to ~15%
  const calculateYieldGap = (year: number, adoption: number) => {
    const baseGap = 83;
    const minGap = 15;
    const reductionFactor = (adoption / 100) * (year / 5); // Gradual effect over 5 years
    
    const currentGap = baseGap - ((baseGap - minGap) * reductionFactor);
    return Math.max(minGap, currentGap);
  };

  const data = [
    { year: '2024', gap: calculateYieldGap(0, aiAdoption), target: 20 },
    { year: '2025', gap: calculateYieldGap(1, aiAdoption), target: 20 },
    { year: '2026', gap: calculateYieldGap(2, aiAdoption), target: 20 },
    { year: '2027', gap: calculateYieldGap(3, aiAdoption), target: 20 },
    { year: '2028', gap: calculateYieldGap(4, aiAdoption), target: 20 },
    { year: '2029', gap: calculateYieldGap(5, aiAdoption), target: 20 },
  ];

  const currentGapRate = data[data.length - 1].gap;
  const productivityIncrease = ((83 - currentGapRate) / 83) * 100; // Percentage increase in productivity

  return (
    <div className="bg-[#111827] border border-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Brecha de Rendimiento Agrícola</h3>
          <p className="text-sm text-gray-400">Proyección de reducción de la brecha de rendimiento mediante drones e IA predictiva ("NEXT Farm")</p>
        </div>
        <div className="bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700">
          <div className="text-sm text-gray-400">Aumento Productividad (2029)</div>
          <div className="text-2xl font-bold text-green-400">+{productivityIncrease.toFixed(0)}%</div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400">Adopción del Protocolo de IA "NEXT Farm"</span>
          <span className="text-green-400 font-bold">{aiAdoption}%</span>
        </div>
        <input 
          type="range" 
          min="10" 
          max="100" 
          step="5"
          value={aiAdoption} 
          onChange={(e) => setAiAdoption(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-500"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>10% (Actual)</span>
          <span>100% (Cobertura Total)</span>
        </div>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorGap" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="year" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} />
            <YAxis stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} tickFormatter={(value) => `${value}%`} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#f3f4f6' }}
              itemStyle={{ color: '#e5e7eb' }}
              formatter={(value: number) => [`${value.toFixed(1)}%`, 'Brecha de Rendimiento']}
            />
            <ReferenceLine y={20} stroke="#10b981" strokeDasharray="3 3" label={{ position: 'insideTopLeft', value: 'Meta Regional (20%)', fill: '#10b981', fontSize: 12 }} />
            <Area type="monotone" dataKey="gap" stroke="#f59e0b" strokeWidth={3} fillOpacity={1} fill="url(#colorGap)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
        <h4 className="text-sm font-bold text-gray-300 mb-2">Impacto Agrícola Estimado</h4>
        <p className="text-sm text-gray-400">
          Alcanzar una adopción del <span className="text-white font-semibold">{aiAdoption}%</span> en el protocolo "NEXT Farm" reduciría la brecha de rendimiento al <span className="text-amber-400 font-semibold">{currentGapRate.toFixed(1)}%</span> para 2029. Esto representa un aumento de productividad estimado del <span className="text-green-400 font-bold">{productivityIncrease.toFixed(0)}%</span>, optimizando tiempos de siembra y fertilización mediante drones autónomos y modelos predictivos de IA.
        </p>
      </div>
    </div>
  );
}
