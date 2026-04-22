import React, { useState } from 'react';
import { Building2, Users } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';

export default function TerritorialSavingsChart() {
  const [regions, setRegions] = useState(24);
  const [senators, setSenators] = useState(24);

  // Constants
  const BASELINE_REGIONS = 31;
  const BASELINE_SENATORS = 32;
  const COST_PER_REGION = 0.2; // RD$ Billions
  const COST_PER_SENATOR = 0.096875; // RD$ Billions

  const baselineCost = (BASELINE_REGIONS * COST_PER_REGION) + (BASELINE_SENATORS * COST_PER_SENATOR);
  const currentCost = (regions * COST_PER_REGION) + (senators * COST_PER_SENATOR);

  const data = [
    {
      name: `Línea Base (31)`,
      cost: Number(baselineCost.toFixed(2)),
      fill: '#ef4444' // red-500
    },
    {
      name: 'Propuesta Actual',
      cost: Number(currentCost.toFixed(2)),
      fill: '#10b981' // emerald-500
    }
  ];

  const renderIcons = (count: number, baseline: number, type: 'region' | 'senator') => {
    const icons = [];
    for (let i = 0; i < baseline; i++) {
      const isActive = i < count;
      icons.push(
        <div 
          key={i} 
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isActive ? 'bg-blue-500 text-white' : 'bg-red-400 text-white opacity-80'}`}
          title={isActive ? `${type === 'region' ? 'Región' : 'Senador'} Activo` : 'Eliminado'}
        >
          {type === 'region' ? <Building2 className="w-4 h-4" /> : <Users className="w-4 h-4" />}
        </div>
      );
    }
    return icons;
  };

  return (
    <div className="bg-[#111827] text-white p-8 rounded-xl border border-gray-800 shadow-2xl mt-6 font-sans">
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="flex-1">
          <h4 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider">Macro-Regiones ({regions}/{BASELINE_REGIONS})</h4>
          <div className="flex flex-wrap gap-2 max-w-[300px]">
            {renderIcons(regions, BASELINE_REGIONS, 'region')}
          </div>
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider">Senadores ({senators}/{BASELINE_SENATORS})</h4>
          <div className="flex flex-wrap gap-2 max-w-[300px]">
            {renderIcons(senators, BASELINE_SENATORS, 'senator')}
          </div>
        </div>
      </div>

      <div className="h-64 w-full mb-12 relative">
        <div className="absolute top-0 left-0 text-xs text-gray-400 font-bold z-10">↑ RD$ Billones</div>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 30, right: 20, bottom: 0, left: -20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} domain={[0, 11]} />
            <Tooltip 
              cursor={{ fill: 'transparent' }}
              contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }}
              formatter={(value: any) => [`RD$ ${value.toFixed(2)}B`, 'Costo']}
            />
            <Bar dataKey="cost" radius={[8, 8, 0, 0]} maxBarSize={150}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
              <LabelList 
                dataKey="cost" 
                position="top" 
                formatter={(val: any) => `RD$ ${val.toFixed(2)}B`} 
                fill="#ffffff" 
                fontSize={14} 
                fontWeight="bold" 
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-8 bg-gray-900 p-6 rounded-lg border border-gray-800">
        <div className="flex items-center gap-4">
          <span className="text-sm font-bold text-gray-400 w-32">Macro-Regiones</span>
          <input 
            type="range" 
            min="7" 
            max={BASELINE_REGIONS} 
            value={regions} 
            onChange={(e) => setRegions(parseInt(e.target.value))}
            className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
          <span className="bg-gray-800 px-3 py-1 rounded-md text-sm font-bold w-12 text-center">{regions}</span>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-sm font-bold text-gray-400 w-32">Senadores</span>
          <input 
            type="range" 
            min="14" 
            max={BASELINE_SENATORS} 
            value={senators} 
            onChange={(e) => setSenators(parseInt(e.target.value))}
            className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
          <span className="bg-gray-800 px-3 py-1 rounded-md text-sm font-bold w-12 text-center">{senators}</span>
        </div>
        
        <div className="pt-6 border-t border-gray-800 flex justify-between items-center">
          <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Ahorro Total Estimado</span>
          <span className="text-3xl font-black text-green-400">RD$ {(baselineCost - currentCost).toFixed(2)}B</span>
        </div>
      </div>
    </div>
  );
}
