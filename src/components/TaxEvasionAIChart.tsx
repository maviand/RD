import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

export default function TaxEvasionAIChart() {
  const [ecfAdoption, setEcfAdoption] = useState(10); // Percentage of eCF adoption

  // Base evasion is 44%
  // As eCF adoption goes from 10% to 100%, evasion drops from 44% to ~10%
  const calculateEvasion = (year: number, adoption: number) => {
    const baseEvasion = 44;
    const minEvasion = 10;
    const reductionFactor = (adoption / 100) * (year / 5); // Gradual effect over 5 years
    
    const currentEvasion = baseEvasion - ((baseEvasion - minEvasion) * reductionFactor);
    return Math.max(minEvasion, currentEvasion);
  };

  const data = [
    { year: '2024', evasion: calculateEvasion(0, ecfAdoption), target: 15 },
    { year: '2025', evasion: calculateEvasion(1, ecfAdoption), target: 15 },
    { year: '2026', evasion: calculateEvasion(2, ecfAdoption), target: 15 },
    { year: '2027', evasion: calculateEvasion(3, ecfAdoption), target: 15 },
    { year: '2028', evasion: calculateEvasion(4, ecfAdoption), target: 15 },
    { year: '2029', evasion: calculateEvasion(5, ecfAdoption), target: 15 },
  ];

  const currentEvasionRate = data[data.length - 1].evasion;
  const revenueRecovered = ((44 - currentEvasionRate) / 100) * 15000; // Assuming 15000 MM base VAT revenue

  return (
    <div className="bg-[#111827] border border-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Evasión del ITBIS vs Adopción eCF</h3>
          <p className="text-sm text-gray-400">Proyección de reducción de evasión fiscal mediante Facturación Electrónica (eCF) e IA</p>
        </div>
        <div className="bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700">
          <div className="text-sm text-gray-400">Evasión Proyectada (2029)</div>
          <div className="text-2xl font-bold text-emerald-400">{currentEvasionRate.toFixed(1)}%</div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400">Adopción de Facturación Electrónica (eCF)</span>
          <span className="text-emerald-400 font-bold">{ecfAdoption}%</span>
        </div>
        <input 
          type="range" 
          min="10" 
          max="100" 
          step="5"
          value={ecfAdoption} 
          onChange={(e) => setEcfAdoption(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>10% (Actual)</span>
          <span>100% (Universal)</span>
        </div>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorEvasion" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="year" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} />
            <YAxis stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} tickFormatter={(value) => `${value}%`} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#f3f4f6' }}
              itemStyle={{ color: '#e5e7eb' }}
              formatter={(value: any) => [`${value.toFixed(1)}%`, 'Evasión ITBIS']}
            />
            <ReferenceLine y={15} stroke="#10b981" strokeDasharray="3 3" label={{ position: 'insideTopLeft', value: 'Meta Regional (15%)', fill: '#10b981', fontSize: 12 }} />
            <Area type="monotone" dataKey="evasion" stroke="#ef4444" strokeWidth={3} fillOpacity={1} fill="url(#colorEvasion)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
        <h4 className="text-sm font-bold text-gray-300 mb-2">Impacto Fiscal Estimado</h4>
        <p className="text-sm text-gray-400">
          Al alcanzar una adopción del <span className="text-white font-semibold">{ecfAdoption}%</span> de eCF, la evasión del ITBIS se reduciría al <span className="text-emerald-400 font-semibold">{currentEvasionRate.toFixed(1)}%</span> para 2029. Esto representa una recuperación estimada de <span className="text-emerald-400 font-bold">RD$ {revenueRecovered.toFixed(0)} Millones</span> anuales sin necesidad de aumentar las tasas impositivas, cerrando la brecha fiscal de forma autónoma.
        </p>
      </div>
    </div>
  );
}
