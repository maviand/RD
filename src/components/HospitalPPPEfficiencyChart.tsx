import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function HospitalPPPEfficiencyChart() {
  const [pppAdoption, setPppAdoption] = useState(0); // 0 to 100%

  const calculateData = (year: number, adoption: number) => {
    const baseEfficiency = 30; // 30% operational efficiency
    const maxEfficiency = 95;
    const baseSurvival = 75; // 75% baseline survival/recovery rate for complex cases
    const maxSurvival = 98;
    
    const impactFactor = (adoption / 100) * (year / 5);
    
    return {
      year: `202${4 + year}`,
      efficiency: Math.min(maxEfficiency, baseEfficiency + ((maxEfficiency - baseEfficiency) * impactFactor)),
      survival: Math.min(maxSurvival, baseSurvival + ((maxSurvival - baseSurvival) * impactFactor)),
    };
  };

  const data = [
    calculateData(0, pppAdoption),
    calculateData(1, pppAdoption),
    calculateData(2, pppAdoption),
    calculateData(3, pppAdoption),
    calculateData(4, pppAdoption),
    calculateData(5, pppAdoption),
  ];

  const finalEfficiency = data[data.length - 1].efficiency;
  const finalSurvival = data[data.length - 1].survival;

  return (
    <div className="bg-[#111827] border border-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Administración Privada por Resultados (APP)</h3>
          <p className="text-sm text-gray-400">Impacto de vincular la compensación corporativa a métricas de supervivencia</p>
        </div>
        <div className="bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700">
          <div className="text-sm text-gray-400">Eficiencia Operativa (2029)</div>
          <div className="text-2xl font-bold text-sky-400">{finalEfficiency.toFixed(1)}%</div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400">Hospitales Públicos bajo Administración APP</span>
          <span className="text-sky-400 font-bold">{pppAdoption}%</span>
        </div>
        <input 
          type="range" 
          min="0" 
          max="100" 
          step="10"
          value={pppAdoption} 
          onChange={(e) => setPppAdoption(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-sky-500"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0% (Gestión Política)</span>
          <span>100% (Gestión por Resultados)</span>
        </div>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorEfficiency" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#38bdf8" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorSurvival" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="year" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} />
            <YAxis stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} tickFormatter={(value) => `${value}%`} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#f3f4f6' }}
              itemStyle={{ color: '#e5e7eb' }}
              formatter={(value: number) => [`${value.toFixed(1)}%`, '']}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            <Area type="monotone" dataKey="efficiency" name="Eficiencia Operativa" stroke="#38bdf8" strokeWidth={3} fillOpacity={1} fill="url(#colorEfficiency)" />
            <Area type="monotone" dataKey="survival" name="Tasa de Supervivencia/Recuperación" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorSurvival)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
        <h4 className="text-sm font-bold text-gray-300 mb-2">Impacto en Calidad y Eficiencia</h4>
        <p className="text-sm text-gray-400">
          Al transferir el <span className="text-white font-semibold">{pppAdoption}%</span> de los hospitales públicos a una administración privada estricta (APP), donde las ganancias dependen de los resultados del paciente, la eficiencia operativa se dispara del 30% al <span className="text-sky-400 font-bold">{finalEfficiency.toFixed(1)}%</span>. Simultáneamente, la calidad de la atención mejora, elevando las tasas de supervivencia y recuperación al <span className="text-emerald-400 font-semibold">{finalSurvival.toFixed(1)}%</span>.
        </p>
      </div>
    </div>
  );
}
