import React, { useState } from 'react';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function PrimaryCareNetworkChart() {
  const [budgetRedirected, setBudgetRedirected] = useState(0); // 0 to 40%

  // Base emergency saturation is 100%
  // Base preventive coverage is 20%
  const calculateData = (year: number, budget: number) => {
    const baseSaturation = 100;
    const minSaturation = 30;
    const baseCoverage = 20;
    const maxCoverage = 90;
    
    const impactFactor = (budget / 40) * (year / 5);
    
    return {
      year: `202${4 + year}`,
      saturation: Math.max(minSaturation, baseSaturation - ((baseSaturation - minSaturation) * impactFactor)),
      coverage: Math.min(maxCoverage, baseCoverage + ((maxCoverage - baseCoverage) * impactFactor)),
      budget: budget * (year / 5) // Gradual redirection
    };
  };

  const data = [
    calculateData(0, budgetRedirected),
    calculateData(1, budgetRedirected),
    calculateData(2, budgetRedirected),
    calculateData(3, budgetRedirected),
    calculateData(4, budgetRedirected),
    calculateData(5, budgetRedirected),
  ];

  const finalSaturation = data[data.length - 1].saturation;
  const finalCoverage = data[data.length - 1].coverage;

  return (
    <div className="bg-[#111827] border border-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Red de Clínicas de Atención Primaria (Taiwán)</h3>
          <p className="text-sm text-gray-400">Impacto de redirigir el presupuesto hospitalario a clínicas hiper-locales</p>
        </div>
        <div className="bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700">
          <div className="text-sm text-gray-400">Saturación de Emergencias (2029)</div>
          <div className="text-2xl font-bold text-emerald-400">{finalSaturation.toFixed(1)}%</div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400">Presupuesto Hospitalario Redirigido a Atención Primaria</span>
          <span className="text-emerald-400 font-bold">{budgetRedirected}%</span>
        </div>
        <input 
          type="range" 
          min="0" 
          max="40" 
          step="5"
          value={budgetRedirected} 
          onChange={(e) => setBudgetRedirected(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0% (Modelo Actual)</span>
          <span>40% (Modelo Taiwán)</span>
        </div>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="year" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} />
            <YAxis yAxisId="left" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} tickFormatter={(value) => `${value}%`} />
            <YAxis yAxisId="right" orientation="right" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} tickFormatter={(value) => `${value}%`} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#f3f4f6' }}
              itemStyle={{ color: '#e5e7eb' }}
              formatter={(value: number) => [`${value.toFixed(1)}%`, '']}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            <Bar yAxisId="left" dataKey="budget" name="Presupuesto Redirigido" fill="#10b981" opacity={0.3} radius={[4, 4, 0, 0]} />
            <Line yAxisId="right" type="monotone" dataKey="coverage" name="Cobertura Preventiva" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4 }} />
            <Line yAxisId="left" type="monotone" dataKey="saturation" name="Saturación de Emergencias" stroke="#ef4444" strokeWidth={3} dot={{ r: 4 }} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
        <h4 className="text-sm font-bold text-gray-300 mb-2">Impacto en el Sistema de Salud</h4>
        <p className="text-sm text-gray-400">
          Al redirigir el <span className="text-white font-semibold">{budgetRedirected}%</span> del presupuesto hacia una red hiper-local, la cobertura preventiva aumenta al <span className="text-blue-400 font-semibold">{finalCoverage.toFixed(1)}%</span>. Esto descongestiona los hospitales de tercer nivel, reduciendo la saturación de emergencias por casos no urgentes al <span className="text-emerald-400 font-bold">{finalSaturation.toFixed(1)}%</span>, optimizando los recursos para traumas reales y enfermedades complejas.
        </p>
      </div>
    </div>
  );
}
