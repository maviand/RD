import React, { useState } from 'react';
import { Building } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export default function MinistryConsolidationChart() {
  const [ministries, setMinistries] = useState(24);

  const BASELINE_MINISTRIES = 24;
  const TARGET_MINISTRIES = 8;
  const COST_PER_MINISTRY = 5.2; // RD$ Billions (example)

  const baselineCost = BASELINE_MINISTRIES * COST_PER_MINISTRY;
  const currentCost = ministries * COST_PER_MINISTRY;

  const data = [
    {
      name: `Línea Base (24)`,
      cost: Number(baselineCost.toFixed(2)),
      fill: '#9ca3af'
    },
    {
      name: 'Propuesta Actual',
      cost: Number(currentCost.toFixed(2)),
      fill: '#3b82f6'
    }
  ];

  const renderIcons = (count: number, baseline: number) => {
    const icons = [];
    for (let i = 0; i < baseline; i++) {
      const isActive = i < count;
      icons.push(
        <div 
          key={i} 
          className={`w-8 h-8 rounded-md flex items-center justify-center transition-colors ${isActive ? 'bg-blue-500 text-white' : 'bg-red-400 text-white opacity-80'}`}
          title={isActive ? `Ministerio Activo` : 'Ministerio Consolidado'}
        >
          <Building className="w-4 h-4" />
        </div>
      );
    }
    return icons;
  };

  return (
    <div className="bg-[#111827] text-white p-8 rounded-xl border border-gray-800 shadow-2xl mt-6 font-sans">
      <div className="mb-8">
        <h4 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider">Ministerios ({ministries}/{BASELINE_MINISTRIES})</h4>
        <div className="flex flex-wrap gap-2">
          {renderIcons(ministries, BASELINE_MINISTRIES)}
        </div>
      </div>

      <div className="h-64 w-full mb-12 relative">
        <div className="absolute top-0 left-0 text-xs text-gray-400 font-bold z-10">↑ RD$ Billones (Gasto Administrativo)</div>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 30, right: 20, bottom: 0, left: -20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} domain={[0, 150]} />
            <Tooltip 
              cursor={{ fill: 'transparent' }}
              contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }}
              formatter={(value: number) => [`RD$ ${value.toFixed(2)}B`, 'Costo Administrativo']}
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
          <span className="text-sm font-bold text-gray-400 w-32">Nivel de Consolidación</span>
          <input 
            type="range" 
            min={TARGET_MINISTRIES} 
            max={BASELINE_MINISTRIES} 
            value={ministries} 
            onChange={(e) => setMinistries(parseInt(e.target.value))}
            className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
          <span className="bg-gray-800 px-3 py-1 rounded-md text-sm font-bold w-12 text-center">{ministries}</span>
        </div>
        
        <div className="pt-6 border-t border-gray-800 flex justify-between items-center">
          <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Ahorro Anual Estimado</span>
          <span className="text-3xl font-black text-green-400">RD$ {(baselineCost - currentCost).toFixed(2)}B</span>
        </div>
      </div>
    </div>
  );
}
