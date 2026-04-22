import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function JudicialBacklogChart() {
  const [automationLevel, setAutomationLevel] = useState(0); // 0 to 100%

  // Generate data based on automation level
  const generateData = () => {
    const data = [];
    let backlog = 500000; // 500k cases
    
    for (let year = 0; year <= 5; year++) {
      data.push({
        year: `Año ${year}`,
        casos: Math.round(backlog)
      });
      
      // Calculate reduction based on automation
      // 0% automation = 5% reduction per year
      // 100% automation = 40% reduction per year
      const reductionRate = 0.05 + (automationLevel / 100) * 0.35;
      backlog = backlog * (1 - reductionRate);
    }
    return data;
  };

  const data = generateData();

  return (
    <div className="bg-[#111827] text-white p-8 rounded-xl border border-gray-800 shadow-2xl mt-6 font-sans">
      <div className="mb-8">
        <h4 className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">Proyección de Mora Judicial (Casos Pendientes)</h4>
        <p className="text-xs text-gray-500">Impacto de la automatización y plazos estrictos</p>
      </div>

      <div className="h-64 w-full mb-8 relative">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorCasos" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="year" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }}
              formatter={(value: any) => [new Intl.NumberFormat('es-DO').format(value), 'Casos Pendientes']}
            />
            <Area type="monotone" dataKey="casos" stroke="#f59e0b" fillOpacity={1} fill="url(#colorCasos)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-8 bg-gray-900 p-6 rounded-lg border border-gray-800">
        <div className="flex items-center gap-4">
          <span className="text-sm font-bold text-gray-400 w-48">Nivel de Automatización de Procesos</span>
          <input 
            type="range" 
            min="0" 
            max="100" 
            step="10"
            value={automationLevel} 
            onChange={(e) => setAutomationLevel(parseInt(e.target.value))}
            className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
          />
          <span className="bg-gray-800 px-3 py-1 rounded-md text-sm font-bold w-16 text-center">{automationLevel}%</span>
        </div>
        
        <div className="pt-6 border-t border-gray-800 flex justify-between items-center">
          <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Casos Resueltos al Año 5</span>
          <span className="text-3xl font-black text-amber-400">
            {new Intl.NumberFormat('es-DO').format(500000 - data[5].casos)}
          </span>
        </div>
      </div>
    </div>
  );
}
