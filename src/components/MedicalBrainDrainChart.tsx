import React, { useState } from 'react';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function MedicalBrainDrainChart() {
  const [incentiveLevel, setIncentiveLevel] = useState(0); // 0 to 100%

  const calculateData = (year: number, incentive: number) => {
    const baseBrainDrain = 80; // 80% of top specialists leave for capital/abroad
    const minBrainDrain = 15;
    const baseRuralSpecialists = 20; // Index of specialists in rural/border areas
    const maxRuralSpecialists = 100;
    
    const impactFactor = (incentive / 100) * (year / 5);
    
    return {
      year: `202${4 + year}`,
      brainDrain: Math.max(minBrainDrain, baseBrainDrain - ((baseBrainDrain - minBrainDrain) * impactFactor)),
      ruralSpecialists: Math.min(maxRuralSpecialists, baseRuralSpecialists + ((maxRuralSpecialists - baseRuralSpecialists) * impactFactor)),
    };
  };

  const data = [
    calculateData(0, incentiveLevel),
    calculateData(1, incentiveLevel),
    calculateData(2, incentiveLevel),
    calculateData(3, incentiveLevel),
    calculateData(4, incentiveLevel),
    calculateData(5, incentiveLevel),
  ];

  const finalBrainDrain = data[data.length - 1].brainDrain;
  const finalRuralSpecialists = data[data.length - 1].ruralSpecialists;

  return (
    <div className="bg-[#111827] border border-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Incentivos Fiscales para Provincias Fronterizas</h3>
          <p className="text-sm text-gray-400">Impacto de la exención de impuestos en la retención de especialistas médicos</p>
        </div>
        <div className="bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700">
          <div className="text-sm text-gray-400">Fuga de Cerebros (2029)</div>
          <div className="text-2xl font-bold text-indigo-400">{finalBrainDrain.toFixed(1)}%</div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400">Nivel de Exención de Impuestos y Subsidios de Vivienda</span>
          <span className="text-indigo-400 font-bold">{incentiveLevel}%</span>
        </div>
        <input 
          type="range" 
          min="0" 
          max="100" 
          step="10"
          value={incentiveLevel} 
          onChange={(e) => setIncentiveLevel(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0% (Sin Incentivos)</span>
          <span>100% (0% ISR + Vivienda)</span>
        </div>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="year" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} />
            <YAxis yAxisId="left" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} tickFormatter={(value) => `${value}%`} />
            <YAxis yAxisId="right" orientation="right" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#f3f4f6' }}
              itemStyle={{ color: '#e5e7eb' }}
              formatter={(value: any, name: any) => [
                name === 'Fuga de Cerebros Médicos' ? `${value.toFixed(1)}%` : value.toFixed(0), 
                name
              ]}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            <Bar yAxisId="right" dataKey="ruralSpecialists" name="Especialistas en Provincias (Índice)" fill="#6366f1" opacity={0.3} radius={[4, 4, 0, 0]} />
            <Line yAxisId="left" type="monotone" dataKey="brainDrain" name="Fuga de Cerebros Médicos" stroke="#f43f5e" strokeWidth={4} dot={{ r: 6, fill: '#f43f5e', strokeWidth: 2, stroke: '#111827' }} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
        <h4 className="text-sm font-bold text-gray-300 mb-2">Impacto en Distribución Médica</h4>
        <p className="text-sm text-gray-400">
          Al ofrecer un <span className="text-white font-semibold">{incentiveLevel}%</span> del paquete de incentivos (eliminación del ISR y vivienda subsidiada) a especialistas que se comprometan por una década, la fuga de cerebros hacia la capital o el extranjero se reduce del 80% al <span className="text-indigo-400 font-bold">{finalBrainDrain.toFixed(1)}%</span>. Esto multiplica la disponibilidad de especialistas de alto nivel en provincias fronterizas desatendidas.
        </p>
      </div>
    </div>
  );
}
