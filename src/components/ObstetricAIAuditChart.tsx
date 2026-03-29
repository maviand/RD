import React, { useState } from 'react';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function ObstetricAIAuditChart() {
  const [aiAdoption, setAiAdoption] = useState(0); // 0 to 100%

  const calculateData = (year: number, adoption: number) => {
    const baseMortality = 107; // Maternal mortality ratio per 100k
    const minMortality = 20;
    const baseCompliance = 30; // Protocol compliance %
    const maxCompliance = 99;
    
    const impactFactor = (adoption / 100) * (year / 5);
    
    return {
      year: `202${4 + year}`,
      mortality: Math.max(minMortality, baseMortality - ((baseMortality - minMortality) * impactFactor)),
      compliance: Math.min(maxCompliance, baseCompliance + ((maxCompliance - baseCompliance) * impactFactor)),
    };
  };

  const data = [
    calculateData(0, aiAdoption),
    calculateData(1, aiAdoption),
    calculateData(2, aiAdoption),
    calculateData(3, aiAdoption),
    calculateData(4, aiAdoption),
    calculateData(5, aiAdoption),
  ];

  const finalMortality = data[data.length - 1].mortality;
  const finalCompliance = data[data.length - 1].compliance;

  return (
    <div className="bg-[#111827] border border-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Protocolos Clínicos Monitoreados por IA</h3>
          <p className="text-sm text-gray-400">Impacto de la auditoría estricta en la mortalidad materna y neonatal</p>
        </div>
        <div className="bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700">
          <div className="text-sm text-gray-400">Mortalidad Materna (2029)</div>
          <div className="text-2xl font-bold text-fuchsia-400">{finalMortality.toFixed(0)} <span className="text-xs font-normal text-gray-500">/100k</span></div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400">Adopción de Monitoreo IA y Revocación de Licencias</span>
          <span className="text-fuchsia-400 font-bold">{aiAdoption}%</span>
        </div>
        <input 
          type="range" 
          min="0" 
          max="100" 
          step="10"
          value={aiAdoption} 
          onChange={(e) => setAiAdoption(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-fuchsia-500"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0% (Sin Auditoría)</span>
          <span>100% (Tolerancia Cero)</span>
        </div>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="year" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} />
            <YAxis yAxisId="left" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} />
            <YAxis yAxisId="right" orientation="right" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} tickFormatter={(value) => `${value}%`} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#f3f4f6' }}
              itemStyle={{ color: '#e5e7eb' }}
              formatter={(value: number, name: string) => [
                name === 'Cumplimiento de Protocolos' ? `${value.toFixed(1)}%` : value.toFixed(0), 
                name
              ]}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            <Bar yAxisId="right" dataKey="compliance" name="Cumplimiento de Protocolos" fill="#10b981" opacity={0.2} radius={[4, 4, 0, 0]} />
            <Line yAxisId="left" type="monotone" dataKey="mortality" name="Mortalidad Materna (por 100k)" stroke="#d946ef" strokeWidth={4} dot={{ r: 6, fill: '#d946ef', strokeWidth: 2, stroke: '#111827' }} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
        <h4 className="text-sm font-bold text-gray-300 mb-2">Impacto en Salud Materna</h4>
        <p className="text-sm text-gray-400">
          Con una adopción del <span className="text-white font-semibold">{aiAdoption}%</span> del monitoreo por IA y consecuencias estrictas (revocación de licencias), el cumplimiento de los protocolos obstétricos sube al <span className="text-emerald-400 font-semibold">{finalCompliance.toFixed(1)}%</span>. Esto erradica la negligencia sistémica, reduciendo la mortalidad materna de 107 a <span className="text-fuchsia-400 font-bold">{finalMortality.toFixed(0)}</span> por cada 100,000 nacidos vivos.
        </p>
      </div>
    </div>
  );
}
