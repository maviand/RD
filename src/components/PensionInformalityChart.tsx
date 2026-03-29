import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function PensionInformalityChart() {
  const [adoptionRate, setAdoptionRate] = useState(50);

  const data = Array.from({ length: 10 }, (_, i) => {
    const year = i + 1;
    const baseGrowth = 5 * year; // Slow growth without microcontributions
    const microContributionGrowth = (adoptionRate / 100) * 15 * year * (1 + (year * 0.1)); // Exponential growth with adoption
    
    return {
      year: `Año ${year}`,
      fondoTradicional: Math.round(baseGrowth),
      fondoMicroaportes: Math.round(baseGrowth + microContributionGrowth),
    };
  });

  return (
    <div className="bg-[#111827] p-6 rounded-xl border border-gray-800">
      <h3 className="text-xl font-bold text-white mb-4">Crecimiento del Fondo de Pensiones (Microaportes Móviles)</h3>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-400 mb-2">
          Tasa de Adopción de Microaportes Móviles: {adoptionRate}%
        </label>
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={adoptionRate} 
          onChange={(e) => setAdoptionRate(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0% (Status Quo)</span>
          <span>100% (Adopción Total)</span>
        </div>
      </div>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="year" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" label={{ value: 'Fondo (Millones USD)', angle: -90, position: 'insideLeft', fill: '#9CA3AF' }} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', color: '#F3F4F6' }}
              itemStyle={{ color: '#E5E7EB' }}
            />
            <Legend />
            <Line type="monotone" dataKey="fondoTradicional" name="Trayectoria Actual" stroke="#EF4444" strokeWidth={2} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="fondoMicroaportes" name="Con Microaportes" stroke="#10B981" strokeWidth={3} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 p-4 bg-blue-900/20 rounded-lg border border-blue-800/30">
        <p className="text-sm text-blue-200">
          <strong>Impacto:</strong> Al vincular microaportes fraccionarios a transacciones digitales (modelo Singapur CPF), el fondo de pensiones crece exponencialmente, rescatando a los trabajadores informales de la pobreza en la vejez.
        </p>
      </div>
    </div>
  );
}
