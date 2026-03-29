import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

export default function HealthcareFundingChart() {
  const [digitalBackendAdoption, setDigitalBackendAdoption] = useState(0); // Percentage of Taiwan model adoption

  // Base out-of-pocket is 45%, Public is 30%, Private is 25%
  // As adoption goes to 100%, out-of-pocket drops to 15%, Public/MediSave increases to 65%
  const calculateData = (year: number, adoption: number) => {
    const baseOOP = 45;
    const minOOP = 15;
    const reductionFactor = (adoption / 100) * (year / 5);
    
    const currentOOP = baseOOP - ((baseOOP - minOOP) * reductionFactor);
    const currentPublic = 30 + ((65 - 30) * reductionFactor);
    const currentPrivate = 100 - currentOOP - currentPublic;

    return {
      year: `202${4 + year}`,
      oop: Math.max(minOOP, currentOOP),
      public: currentPublic,
      private: currentPrivate,
      adminCost: 15 - (14 * reductionFactor) // Admin cost drops from 15% to 1%
    };
  };

  const data = [
    calculateData(0, digitalBackendAdoption),
    calculateData(1, digitalBackendAdoption),
    calculateData(2, digitalBackendAdoption),
    calculateData(3, digitalBackendAdoption),
    calculateData(4, digitalBackendAdoption),
    calculateData(5, digitalBackendAdoption),
  ];

  const finalOOP = data[data.length - 1].oop;
  const finalAdminCost = data[data.length - 1].adminCost;

  return (
    <div className="bg-[#111827] border border-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Backend Digital de Pagador Único (Taiwán)</h3>
          <p className="text-sm text-gray-400">Impacto en el gasto de bolsillo y costos administrativos al unificar fondos</p>
        </div>
        <div className="bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700">
          <div className="text-sm text-gray-400">Gasto de Bolsillo (2029)</div>
          <div className="text-2xl font-bold text-teal-400">{finalOOP.toFixed(1)}%</div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400">Adopción del Backend Digital Unificado (Modelo Taiwán)</span>
          <span className="text-teal-400 font-bold">{digitalBackendAdoption}%</span>
        </div>
        <input 
          type="range" 
          min="0" 
          max="100" 
          step="10"
          value={digitalBackendAdoption} 
          onChange={(e) => setDigitalBackendAdoption(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-teal-500"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0% (Sistema Fragmentado)</span>
          <span>100% (Unificación Total)</span>
        </div>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="year" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} />
            <YAxis stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} tickFormatter={(value) => `${value}%`} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#f3f4f6' }}
              itemStyle={{ color: '#e5e7eb' }}
              formatter={(value: number) => [`${value.toFixed(1)}%`, '']}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            <Bar dataKey="oop" name="Gasto de Bolsillo" stackId="a" fill="#ef4444" />
            <Bar dataKey="private" name="Seguro Privado" stackId="a" fill="#f59e0b" />
            <Bar dataKey="public" name="Fondo Unificado / MediSave" stackId="a" fill="#14b8a6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
        <h4 className="text-sm font-bold text-gray-300 mb-2">Impacto Financiero en Salud</h4>
        <p className="text-sm text-gray-400">
          Al implementar un <span className="text-white font-semibold">{digitalBackendAdoption}%</span> del modelo de backend digital de pagador único de Taiwán, financiado a través de cuentas MediSave de Singapur, el gasto de bolsillo de los ciudadanos más pobres se reduciría drásticamente del 45% al <span className="text-teal-400 font-semibold">{finalOOP.toFixed(1)}%</span>. Simultáneamente, los costos administrativos del sistema caerían del 15% a apenas el <span className="text-emerald-400 font-bold">{finalAdminCost.toFixed(1)}%</span>, liberando recursos masivos para atención directa.
        </p>
      </div>
    </div>
  );
}
