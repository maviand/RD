import React, { useState } from 'react';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function NursingSubsidiesChart() {
  const [subsidyRedirection, setSubsidyRedirection] = useState(0); // 0 to 100%

  const calculateData = (year: number, redirection: number) => {
    const baseNurses = 1.5; // Nurses per doctor (current deficit)
    const targetNurses = 4.0; // Target ratio
    const baseDeficit = 100; // Index of nursing deficit
    const minDeficit = 10;
    
    const impactFactor = (redirection / 100) * (year / 5);
    
    return {
      year: `202${4 + year}`,
      ratio: baseNurses + ((targetNurses - baseNurses) * impactFactor),
      deficit: Math.max(minDeficit, baseDeficit - ((baseDeficit - minDeficit) * impactFactor)),
    };
  };

  const data = [
    calculateData(0, subsidyRedirection),
    calculateData(1, subsidyRedirection),
    calculateData(2, subsidyRedirection),
    calculateData(3, subsidyRedirection),
    calculateData(4, subsidyRedirection),
    calculateData(5, subsidyRedirection),
  ];

  const finalRatio = data[data.length - 1].ratio;
  const finalDeficit = data[data.length - 1].deficit;

  return (
    <div className="bg-[#111827] border border-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Redirección de Subsidios Médicos</h3>
          <p className="text-sm text-gray-400">Impacto de priorizar enfermería de alta tecnología sobre medicina general</p>
        </div>
        <div className="bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700">
          <div className="text-sm text-gray-400">Ratio Enfermera/Médico (2029)</div>
          <div className="text-2xl font-bold text-pink-400">{finalRatio.toFixed(1)} : 1</div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400">Subsidios Redirigidos a Programas de Enfermería Especializada</span>
          <span className="text-pink-400 font-bold">{subsidyRedirection}%</span>
        </div>
        <input 
          type="range" 
          min="0" 
          max="100" 
          step="10"
          value={subsidyRedirection} 
          onChange={(e) => setSubsidyRedirection(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-pink-500"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0% (Exceso de Médicos)</span>
          <span>100% (Enfoque en Enfermería)</span>
        </div>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="year" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} />
            <YAxis yAxisId="left" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} />
            <YAxis yAxisId="right" orientation="right" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#f3f4f6' }}
              itemStyle={{ color: '#e5e7eb' }}
              formatter={(value: any, name: any) => [
                name === 'Ratio Enfermera/Médico' ? `${value.toFixed(1)}:1` : `${value.toFixed(0)}%`, 
                name
              ]}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            <Bar yAxisId="right" dataKey="deficit" name="Índice de Déficit de Enfermería" fill="#f43f5e" opacity={0.5} radius={[4, 4, 0, 0]} />
            <Line yAxisId="left" type="monotone" dataKey="ratio" name="Ratio Enfermera/Médico" stroke="#ec4899" strokeWidth={4} dot={{ r: 6, fill: '#ec4899', strokeWidth: 2, stroke: '#111827' }} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
        <h4 className="text-sm font-bold text-gray-300 mb-2">Impacto en Recursos Humanos</h4>
        <p className="text-sm text-gray-400">
          Al redirigir el <span className="text-white font-semibold">{subsidyRedirection}%</span> de los subsidios desde facultades de medicina general hacia programas de enfermería de alta tecnología, el ratio de enfermeras por médico mejora de 1.5:1 a <span className="text-pink-400 font-bold">{finalRatio.toFixed(1)}:1</span>. Esto resuelve la grave escasez de personal de cuidado directo, reduciendo el déficit de enfermería en un <span className="text-rose-400 font-semibold">{(100 - finalDeficit).toFixed(0)}%</span> y mejorando drásticamente la atención al paciente.
        </p>
      </div>
    </div>
  );
}
