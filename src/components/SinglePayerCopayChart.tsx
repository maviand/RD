import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function SinglePayerCopayChart() {
  const [senasaPower, setSenasaPower] = useState(0); // 0 to 100%

  const calculateData = (year: number, power: number) => {
    const baseOOP = 45; // Out of pocket %
    const minOOP = 10;
    const baseTariff = 100; // Private clinic tariff index
    const minTariff = 60;
    
    const impactFactor = (power / 100) * (year / 5);
    
    return {
      year: `202${4 + year}`,
      oop: Math.max(minOOP, baseOOP - ((baseOOP - minOOP) * impactFactor)),
      tariff: Math.max(minTariff, baseTariff - ((baseTariff - minTariff) * impactFactor)),
    };
  };

  const data = [
    calculateData(0, senasaPower),
    calculateData(1, senasaPower),
    calculateData(2, senasaPower),
    calculateData(3, senasaPower),
    calculateData(4, senasaPower),
    calculateData(5, senasaPower),
  ];

  const finalOOP = data[data.length - 1].oop;

  return (
    <div className="bg-[#111827] border border-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Pagador Único y Control de Tarifas (Taiwán)</h3>
          <p className="text-sm text-gray-400">Impacto del poder adquisitivo de SENASA sobre los copagos y tarifas privadas</p>
        </div>
        <div className="bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700">
          <div className="text-sm text-gray-400">Gasto de Bolsillo (2029)</div>
          <div className="text-2xl font-bold text-rose-400">{finalOOP.toFixed(1)}%</div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400">Poder de Negociación y Control Tarifario de SENASA</span>
          <span className="text-rose-400 font-bold">{senasaPower}%</span>
        </div>
        <input 
          type="range" 
          min="0" 
          max="100" 
          step="10"
          value={senasaPower} 
          onChange={(e) => setSenasaPower(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-rose-500"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0% (Mercado Desregulado)</span>
          <span>100% (Control Estricto Taiwán)</span>
        </div>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="year" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} />
            <YAxis stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#f3f4f6' }}
              itemStyle={{ color: '#e5e7eb' }}
              formatter={(value: any, name: any) => [
                name === 'Gasto de Bolsillo (%)' ? `${value.toFixed(1)}%` : value.toFixed(1), 
                name
              ]}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            <Line type="monotone" dataKey="oop" name="Gasto de Bolsillo (%)" stroke="#fb7185" strokeWidth={4} dot={{ r: 6, fill: '#fb7185', strokeWidth: 2, stroke: '#111827' }} />
            <Line type="monotone" dataKey="tariff" name="Índice de Tarifas Privadas" stroke="#94a3b8" strokeWidth={3} strokeDasharray="5 5" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
        <h4 className="text-sm font-bold text-gray-300 mb-2">Impacto Financiero</h4>
        <p className="text-sm text-gray-400">
          Al ejercer un <span className="text-white font-semibold">{senasaPower}%</span> de control como pagador único, SENASA obliga a las clínicas privadas a limitar sus tarifas. Esto reduce directamente el gasto médico de bolsillo de los ciudadanos del 45% a un <span className="text-rose-400 font-bold">{finalOOP.toFixed(1)}%</span>, protegiendo a las familias de la bancarrota médica a pesar de usar servicios privados.
        </p>
      </div>
    </div>
  );
}
