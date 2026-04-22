import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function TeenPregnancyClinicChart() {
  const [clinicCoverage, setClinicCoverage] = useState(0); // 0 to 100%

  const calculateData = (year: number, coverage: number) => {
    const basePregnancyRate = 20; // 20% teen pregnancy rate
    const minPregnancyRate = 5;
    const baseRetention = 60; // 60% female high school retention
    const maxRetention = 95;
    
    const impactFactor = (coverage / 100) * (year / 5);
    
    return {
      year: `202${4 + year}`,
      pregnancy: Math.max(minPregnancyRate, basePregnancyRate - ((basePregnancyRate - minPregnancyRate) * impactFactor)),
      retention: Math.min(maxRetention, baseRetention + ((maxRetention - baseRetention) * impactFactor)),
    };
  };

  const data = [
    calculateData(0, clinicCoverage),
    calculateData(1, clinicCoverage),
    calculateData(2, clinicCoverage),
    calculateData(3, clinicCoverage),
    calculateData(4, clinicCoverage),
    calculateData(5, clinicCoverage),
  ];

  const finalPregnancy = data[data.length - 1].pregnancy;
  const finalRetention = data[data.length - 1].retention;

  return (
    <div className="bg-[#111827] border border-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Clínicas Reproductivas en Escuelas Secundarias</h3>
          <p className="text-sm text-gray-400">Impacto del acceso confidencial en el embarazo adolescente y la retención escolar</p>
        </div>
        <div className="bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700">
          <div className="text-sm text-gray-400">Tasa de Embarazo (2029)</div>
          <div className="text-2xl font-bold text-pink-400">{finalPregnancy.toFixed(1)}%</div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400">Escuelas Públicas con Clínicas Reproductivas Integradas</span>
          <span className="text-pink-400 font-bold">{clinicCoverage}%</span>
        </div>
        <input 
          type="range" 
          min="0" 
          max="100" 
          step="10"
          value={clinicCoverage} 
          onChange={(e) => setClinicCoverage(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-pink-500"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0% (Sin Acceso Escolar)</span>
          <span>100% (Cobertura Nacional)</span>
        </div>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorPregnancy" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ec4899" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#ec4899" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorRetention" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="year" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} />
            <YAxis stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} tickFormatter={(value) => `${value}%`} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#f3f4f6' }}
              itemStyle={{ color: '#e5e7eb' }}
              formatter={(value: any) => [`${value.toFixed(1)}%`, '']}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            <Area type="monotone" dataKey="pregnancy" name="Tasa de Embarazo Adolescente" stroke="#ec4899" strokeWidth={3} fillOpacity={1} fill="url(#colorPregnancy)" />
            <Area type="monotone" dataKey="retention" name="Retención Escolar Femenina" stroke="#8b5cf6" strokeWidth={3} fillOpacity={1} fill="url(#colorRetention)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
        <h4 className="text-sm font-bold text-gray-300 mb-2">Impacto Generacional</h4>
        <p className="text-sm text-gray-400">
          Al integrar clínicas reproductivas confidenciales en el <span className="text-white font-semibold">{clinicCoverage}%</span> de las escuelas secundarias públicas, eludiendo barreras parentales, la tasa de embarazo adolescente se desploma del 20% al <span className="text-pink-400 font-bold">{finalPregnancy.toFixed(1)}%</span>. Esto rompe el ciclo de pobreza generacional, elevando la retención escolar femenina al <span className="text-violet-400 font-semibold">{finalRetention.toFixed(1)}%</span> y garantizando mejores oportunidades económicas.
        </p>
      </div>
    </div>
  );
}
