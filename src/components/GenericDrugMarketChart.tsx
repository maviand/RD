import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function GenericDrugMarketChart() {
  const [marketOpenness, setMarketOpenness] = useState(0); // 0 to 100%

  const calculateData = (year: number, openness: number) => {
    const baseCost = 100; // Index 100
    const minCost = 30; // 70% reduction
    const baseAccess = 40; // 40% access to chronic meds
    const maxAccess = 95;
    
    const impactFactor = (openness / 100) * (year / 5);
    
    return {
      year: `202${4 + year}`,
      cost: Math.max(minCost, baseCost - ((baseCost - minCost) * impactFactor)),
      access: Math.min(maxAccess, baseAccess + ((maxAccess - baseAccess) * impactFactor)),
    };
  };

  const data = [
    calculateData(0, marketOpenness),
    calculateData(1, marketOpenness),
    calculateData(2, marketOpenness),
    calculateData(3, marketOpenness),
    calculateData(4, marketOpenness),
    calculateData(5, marketOpenness),
  ];

  const finalCost = data[data.length - 1].cost;
  const finalAccess = data[data.length - 1].access;

  return (
    <div className="bg-[#111827] border border-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Mercado Abierto de Genéricos (India)</h3>
          <p className="text-sm text-gray-400">Impacto de la importación paralela en el costo de medicamentos de especialidad</p>
        </div>
        <div className="bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700">
          <div className="text-sm text-gray-400">Reducción de Costos (2029)</div>
          <div className="text-2xl font-bold text-indigo-400">-{(100 - finalCost).toFixed(0)}%</div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400">Apertura del Mercado (Eliminación de Monopolios)</span>
          <span className="text-indigo-400 font-bold">{marketOpenness}%</span>
        </div>
        <input 
          type="range" 
          min="0" 
          max="100" 
          step="10"
          value={marketOpenness} 
          onChange={(e) => setMarketOpenness(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0% (Monopolio Actual)</span>
          <span>100% (Libre Importación FDA/EMA)</span>
        </div>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorAccess" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="year" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} />
            <YAxis stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#f3f4f6' }}
              itemStyle={{ color: '#e5e7eb' }}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            <Area type="monotone" dataKey="cost" name="Índice de Costo de Medicamentos" stroke="#ef4444" strokeWidth={3} fillOpacity={1} fill="url(#colorCost)" />
            <Area type="monotone" dataKey="access" name="Acceso a Tratamientos Crónicos (%)" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorAccess)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
        <h4 className="text-sm font-bold text-gray-300 mb-2">Impacto en el Paciente</h4>
        <p className="text-sm text-gray-400">
          Al abrir el mercado en un <span className="text-white font-semibold">{marketOpenness}%</span> permitiendo la importación paralela de genéricos certificados, el costo promedio de los medicamentos de especialidad cae un <span className="text-indigo-400 font-bold">{(100 - finalCost).toFixed(0)}%</span>. Esto elimina la barrera financiera artificial, aumentando el acceso a tratamientos para enfermedades crónicas al <span className="text-blue-400 font-semibold">{finalAccess.toFixed(1)}%</span> de la población que los necesita.
        </p>
      </div>
    </div>
  );
}
