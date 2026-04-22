import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export default function MilitaryEfficiencyChart() {
  const [generals, setGenerals] = useState(171);

  const BASELINE_GENERALS = 171;
  const TARGET_GENERALS = 40;
  const COST_PER_GENERAL = 0.015; // RD$ Billions (Salary, pensions, perks, security details)

  const baselineCost = BASELINE_GENERALS * COST_PER_GENERAL;
  const currentCost = generals * COST_PER_GENERAL;

  const data = [
    {
      name: `Línea Base (${BASELINE_GENERALS})`,
      cost: Number(baselineCost.toFixed(2)),
      fill: '#9ca3af'
    },
    {
      name: 'Propuesta Actual',
      cost: Number(currentCost.toFixed(2)),
      fill: '#3b82f6'
    }
  ];

  return (
    <div className="bg-[#111827] text-white p-8 rounded-xl border border-gray-800 shadow-2xl mt-6 font-sans">
      <div className="mb-8">
        <h4 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider">Cantidad de Generales Activos ({generals}/{BASELINE_GENERALS})</h4>
        <div className="w-full bg-gray-800 rounded-full h-4 mb-2 overflow-hidden flex">
           <div className="bg-blue-500 h-full transition-all" style={{ width: `${(generals / BASELINE_GENERALS) * 100}%` }}></div>
           <div className="bg-red-400 h-full transition-all" style={{ width: `${((BASELINE_GENERALS - generals) / BASELINE_GENERALS) * 100}%` }}></div>
        </div>
        <div className="flex justify-between text-xs text-gray-500">
            <span>Objetivo: {TARGET_GENERALS}</span>
            <span>Actual: {BASELINE_GENERALS}</span>
        </div>
      </div>

      <div className="h-64 w-full mb-12 relative">
        <div className="absolute top-0 left-0 text-xs text-gray-400 font-bold z-10">↑ RD$ Billones (Costo Anual)</div>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 30, right: 20, bottom: 0, left: -20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} domain={[0, 5]} />
            <Tooltip 
              cursor={{ fill: 'transparent' }}
              contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }}
              formatter={(value: any) => [`RD$ ${value.toFixed(2)}B`, 'Costo Anual']}
            />
            <Bar dataKey="cost" radius={[8, 8, 0, 0]} maxBarSize={150}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-8 bg-gray-900 p-6 rounded-lg border border-gray-800">
        <div className="flex items-center gap-4">
          <span className="text-sm font-bold text-gray-400 w-32">Reducción de Generales</span>
          <input 
            type="range" 
            min={TARGET_GENERALS} 
            max={BASELINE_GENERALS} 
            value={generals} 
            onChange={(e) => setGenerals(parseInt(e.target.value))}
            className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
          <span className="bg-gray-800 px-3 py-1 rounded-md text-sm font-bold w-12 text-center">{generals}</span>
        </div>
        
        <div className="pt-6 border-t border-gray-800 flex justify-between items-center">
          <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Ahorro Anual Estimado</span>
          <span className="text-3xl font-black text-green-400">RD$ {(baselineCost - currentCost).toFixed(2)}B</span>
        </div>
      </div>
    </div>
  );
}
