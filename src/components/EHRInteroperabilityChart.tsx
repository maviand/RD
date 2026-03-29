import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function EHRInteroperabilityChart() {
  const [ehrAdoption, setEhrAdoption] = useState(0); // 0 to 100%

  const calculateData = (year: number, adoption: number) => {
    const baseDuplication = 45; // 45% of tests are duplicated due to lack of records
    const minDuplication = 2;
    const baseAccessTime = 120; // Minutes to retrieve full history
    const minAccessTime = 1; // Instant access
    
    const impactFactor = (adoption / 100) * (year / 5);
    
    return {
      year: `202${4 + year}`,
      duplication: Math.max(minDuplication, baseDuplication - ((baseDuplication - minDuplication) * impactFactor)),
      accessTime: Math.max(minAccessTime, baseAccessTime - ((baseAccessTime - minAccessTime) * impactFactor)),
    };
  };

  const data = [
    calculateData(0, ehrAdoption),
    calculateData(1, ehrAdoption),
    calculateData(2, ehrAdoption),
    calculateData(3, ehrAdoption),
    calculateData(4, ehrAdoption),
    calculateData(5, ehrAdoption),
  ];

  const finalDuplication = data[data.length - 1].duplication;
  const finalAccessTime = data[data.length - 1].accessTime;

  return (
    <div className="bg-[#111827] border border-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Expediente Único de Salud Encriptado (Estonia)</h3>
          <p className="text-sm text-gray-400">Impacto de la interoperabilidad en la duplicación de pruebas y tiempos de acceso</p>
        </div>
        <div className="bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700">
          <div className="text-sm text-gray-400">Duplicación de Pruebas (2029)</div>
          <div className="text-2xl font-bold text-violet-400">{finalDuplication.toFixed(1)}%</div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400">Adopción del Registro Médico Electrónico (EHR) Unificado</span>
          <span className="text-violet-400 font-bold">{ehrAdoption}%</span>
        </div>
        <input 
          type="range" 
          min="0" 
          max="100" 
          step="10"
          value={ehrAdoption} 
          onChange={(e) => setEhrAdoption(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-violet-500"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0% (Sistemas Fragmentados)</span>
          <span>100% (Interoperabilidad Total)</span>
        </div>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="year" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} />
            <YAxis yAxisId="left" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} tickFormatter={(value) => `${value}%`} />
            <YAxis yAxisId="right" orientation="right" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} tickFormatter={(value) => `${value}m`} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#f3f4f6' }}
              itemStyle={{ color: '#e5e7eb' }}
              formatter={(value: number, name: string) => [
                name === 'Duplicación de Pruebas' ? `${value.toFixed(1)}%` : `${value.toFixed(0)} min`, 
                name
              ]}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            <Line yAxisId="left" type="monotone" dataKey="duplication" name="Duplicación de Pruebas" stroke="#8b5cf6" strokeWidth={4} dot={{ r: 6, fill: '#8b5cf6', strokeWidth: 2, stroke: '#111827' }} />
            <Line yAxisId="right" type="monotone" dataKey="accessTime" name="Tiempo de Acceso a Historial" stroke="#64748b" strokeWidth={3} strokeDasharray="5 5" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
        <h4 className="text-sm font-bold text-gray-300 mb-2">Impacto en Eficiencia Clínica</h4>
        <p className="text-sm text-gray-400">
          Al exigir un <span className="text-white font-semibold">{ehrAdoption}%</span> de adopción del EHR nacional unificado y vinculado a la Cédula, el tiempo para acceder al historial completo de un paciente se reduce de 120 minutos a <span className="text-gray-300 font-semibold">{finalAccessTime.toFixed(0)} minutos</span>. Esto elimina la redundancia, reduciendo la duplicación innecesaria de pruebas médicas del 45% a un <span className="text-violet-400 font-bold">{finalDuplication.toFixed(1)}%</span>, ahorrando millones al sistema.
        </p>
      </div>
    </div>
  );
}
