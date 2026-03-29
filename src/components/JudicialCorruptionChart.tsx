import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Line, ComposedChart } from 'recharts';

export default function JudicialCorruptionChart() {
  const [salaryMultiplier, setSalaryMultiplier] = useState(2);

  const data = Array.from({ length: 5 }, (_, i) => {
    const year = i + 1;
    // Base corruption index is high (e.g., 85/100)
    const baseCorruption = 85;
    
    // Higher salary reduces corruption incentive
    const reduction = (salaryMultiplier - 1) * 15 * (year * 0.4);
    const currentCorruption = Math.max(10, baseCorruption - reduction);

    return {
      year: `Año ${year}`,
      indiceCorrupcion: Number(currentCorruption.toFixed(1)),
      salarioJuez: salaryMultiplier * 2000, // Base salary $2000
    };
  });

  return (
    <div className="bg-[#111827] p-6 rounded-xl border border-gray-800">
      <h3 className="text-xl font-bold text-white mb-4">Impacto de Remuneración Meritocrática (Modelo Singapur)</h3>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-400 mb-2">
          Multiplicador Salarial Judicial: {salaryMultiplier}x
        </label>
        <input 
          type="range" 
          min="1" 
          max="5" 
          step="0.5"
          value={salaryMultiplier} 
          onChange={(e) => setSalaryMultiplier(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>1x (Status Quo)</span>
          <span>5x (Alta Competitividad)</span>
        </div>
      </div>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="year" stroke="#9CA3AF" />
            <YAxis yAxisId="left" stroke="#9CA3AF" label={{ value: 'Índice de Corrupción', angle: -90, position: 'insideLeft', fill: '#9CA3AF' }} />
            <YAxis yAxisId="right" orientation="right" stroke="#818CF8" label={{ value: 'Salario (USD)', angle: 90, position: 'insideRight', fill: '#818CF8' }} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', color: '#F3F4F6' }}
              itemStyle={{ color: '#E5E7EB' }}
            />
            <Legend />
            <Bar yAxisId="left" dataKey="indiceCorrupcion" name="Índice de Corrupción (Menor es mejor)" fill="#EF4444" radius={[4, 4, 0, 0]} />
            <Line yAxisId="right" type="monotone" dataKey="salarioJuez" name="Salario Promedio" stroke="#818CF8" strokeWidth={3} dot={{ r: 6 }} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 p-4 bg-indigo-900/20 rounded-lg border border-indigo-800/30">
        <p className="text-sm text-indigo-200">
          <strong>Impacto:</strong> Al aumentar masivamente los salarios judiciales (financiados por activos incautados), se neutralizan matemáticamente los incentivos de soborno, atrayendo al mejor talento legal y reduciendo la impunidad.
        </p>
      </div>
    </div>
  );
}
