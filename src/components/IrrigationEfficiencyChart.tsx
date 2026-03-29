import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function IrrigationEfficiencyChart() {
  const [investment, setInvestment] = useState(10); // RD$ Billions

  // Generate data based on investment
  const generateData = () => {
    const data = [];
    let waterLoss = 60; // 60% loss baseline
    let yieldIncrease = 0;
    
    for (let year = 0; year <= 5; year++) {
      data.push({
        year: `Año ${year}`,
        perdida: Math.max(15, waterLoss), // Minimum 15% loss
        rendimiento: yieldIncrease
      });
      
      // Calculate improvements based on investment
      // 10B investment = 5% less loss per year
      // 50B investment = 15% less loss per year
      const improvementRate = 2 + (investment / 50) * 10;
      waterLoss -= improvementRate;
      yieldIncrease += (improvementRate * 0.8); // Yield increases as loss decreases
    }
    return data;
  };

  const data = generateData();

  return (
    <div className="bg-[#111827] text-white p-8 rounded-xl border border-gray-800 shadow-2xl mt-6 font-sans">
      <div className="mb-8">
        <h4 className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">Impacto de Inversión en Riego Presurizado</h4>
        <p className="text-xs text-gray-500">Reducción de pérdida de agua vs Aumento de rendimiento agrícola</p>
      </div>

      <div className="h-64 w-full mb-8 relative">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorPerdida" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorRendimiento" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="year" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }}
              formatter={(value: number, name: string) => [`${value.toFixed(1)}%`, name === 'perdida' ? 'Pérdida de Agua' : 'Aumento Rendimiento']}
            />
            <Area type="monotone" dataKey="perdida" stroke="#ef4444" fillOpacity={1} fill="url(#colorPerdida)" name="perdida" />
            <Area type="monotone" dataKey="rendimiento" stroke="#10b981" fillOpacity={1} fill="url(#colorRendimiento)" name="rendimiento" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-8 bg-gray-900 p-6 rounded-lg border border-gray-800">
        <div className="flex items-center gap-4">
          <span className="text-sm font-bold text-gray-400 w-48">Inversión en Infraestructura (RD$ Billones)</span>
          <input 
            type="range" 
            min="5" 
            max="50" 
            step="5"
            value={investment} 
            onChange={(e) => setInvestment(parseInt(e.target.value))}
            className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
          <span className="bg-gray-800 px-3 py-1 rounded-md text-sm font-bold w-16 text-center">RD$ {investment}B</span>
        </div>
        
        <div className="pt-6 border-t border-gray-800 flex justify-between items-center">
          <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Pérdida de Agua al Año 5</span>
          <span className="text-3xl font-black text-red-400">
            {data[5].perdida.toFixed(1)}%
          </span>
        </div>
      </div>
    </div>
  );
}
