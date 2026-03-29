import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function TourismDiversificationChart() {
  const [diversification, setDiversification] = useState(10); // % of investment in diversification

  const generateData = () => {
    const data = [];
    let allInclusiveShare = 90; // Starts at 90%
    let diversifiedShare = 10;
    
    for (let year = 1; year <= 10; year += 2) {
      data.push({
        year: `Año ${year}`,
        todoIncluido: Math.max(30, allInclusiveShare), // Minimum 30% all-inclusive
        diversificado: diversifiedShare
      });
      
      // The higher the investment, the faster the shift
      const shiftRate = 2 + (diversification / 50) * 8;
      allInclusiveShare -= shiftRate;
      diversifiedShare += shiftRate;
    }
    return data;
  };

  const data = generateData();

  return (
    <div className="bg-[#111827] text-white p-8 rounded-xl border border-gray-800 shadow-2xl mt-6 font-sans">
      <div className="mb-8">
        <h4 className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">Diversificación del Modelo Turístico</h4>
        <p className="text-xs text-gray-500">Transición de "Todo Incluido" a Turismo Médico, Ecológico y Cultural</p>
      </div>

      <div className="h-64 w-full mb-8 relative">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorTodoIncluido" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorDiversificado" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="year" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} domain={[0, 100]} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }}
              formatter={(value: number, name: string) => [`${value.toFixed(1)}%`, name === 'todoIncluido' ? 'Todo Incluido' : 'Turismo Diversificado']}
            />
            <Area type="monotone" dataKey="todoIncluido" stackId="1" stroke="#f59e0b" fillOpacity={1} fill="url(#colorTodoIncluido)" name="todoIncluido" />
            <Area type="monotone" dataKey="diversificado" stackId="1" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorDiversificado)" name="diversificado" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-8 bg-gray-900 p-6 rounded-lg border border-gray-800">
        <div className="flex items-center gap-4">
          <span className="text-sm font-bold text-gray-400 w-48">Inversión en Diversificación (%)</span>
          <input 
            type="range" 
            min="10" 
            max="50" 
            step="5"
            value={diversification} 
            onChange={(e) => setDiversification(parseInt(e.target.value))}
            className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
          />
          <span className="bg-gray-800 px-3 py-1 rounded-md text-sm font-bold w-16 text-center">{diversification}%</span>
        </div>
        
        <div className="pt-6 border-t border-gray-800 flex justify-between items-center">
          <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Turismo Diversificado (Año 10)</span>
          <span className="text-3xl font-black text-purple-400">
            {data[4].diversificado.toFixed(1)}%
          </span>
        </div>
      </div>
    </div>
  );
}
