import React, { useState } from 'react';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function UltraProcessedTaxChart() {
  const [taxRate, setTaxRate] = useState(0); // 0 to 100%

  const calculateData = (year: number, rate: number) => {
    const baseDisease = 25; // 25% incidence of preventable chronic diseases
    const minDisease = 12;
    const baseFreshFood = 30; // Index of fresh food consumption
    const maxFreshFood = 100;
    
    const impactFactor = (rate / 100) * (year / 5);
    
    return {
      year: `202${4 + year}`,
      disease: Math.max(minDisease, baseDisease - ((baseDisease - minDisease) * impactFactor)),
      freshFood: Math.min(maxFreshFood, baseFreshFood + ((maxFreshFood - baseFreshFood) * impactFactor)),
    };
  };

  const data = [
    calculateData(0, taxRate),
    calculateData(1, taxRate),
    calculateData(2, taxRate),
    calculateData(3, taxRate),
    calculateData(4, taxRate),
    calculateData(5, taxRate),
  ];

  const finalDisease = data[data.length - 1].disease;
  const finalFreshFood = data[data.length - 1].freshFood;

  return (
    <div className="bg-[#111827] border border-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Impuestos Agresivos a Ultraprocesados</h3>
          <p className="text-sm text-gray-400">Impacto de gravar el azúcar para subsidiar alimentos frescos y diagnósticos</p>
        </div>
        <div className="bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700">
          <div className="text-sm text-gray-400">Incidencia Crónica (2029)</div>
          <div className="text-2xl font-bold text-emerald-400">{finalDisease.toFixed(1)}%</div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400">Tasa de Impuesto a Ultraprocesados y Bebidas Azucaradas</span>
          <span className="text-emerald-400 font-bold">{taxRate}%</span>
        </div>
        <input 
          type="range" 
          min="0" 
          max="100" 
          step="10"
          value={taxRate} 
          onChange={(e) => setTaxRate(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0% (Mercado Libre)</span>
          <span>100% (Impuesto Agresivo Bloomberg)</span>
        </div>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="year" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} />
            <YAxis yAxisId="left" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} tickFormatter={(value) => `${value}%`} />
            <YAxis yAxisId="right" orientation="right" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#f3f4f6' }}
              itemStyle={{ color: '#e5e7eb' }}
              formatter={(value: any, name: any) => [
                name === 'Incidencia de Diabetes/Hipertensión' ? `${value.toFixed(1)}%` : value.toFixed(0), 
                name
              ]}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            <Bar yAxisId="right" dataKey="freshFood" name="Índice de Consumo de Productos Frescos" fill="#10b981" opacity={0.3} radius={[4, 4, 0, 0]} />
            <Line yAxisId="left" type="monotone" dataKey="disease" name="Incidencia de Diabetes/Hipertensión" stroke="#ef4444" strokeWidth={4} dot={{ r: 6, fill: '#ef4444', strokeWidth: 2, stroke: '#111827' }} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
        <h4 className="text-sm font-bold text-gray-300 mb-2">Impacto en Salud Pública</h4>
        <p className="text-sm text-gray-400">
          Al aplicar un <span className="text-white font-semibold">{taxRate}%</span> de impuesto agresivo a los ultraprocesados y usar el 100% de los ingresos para subsidiar productos frescos, el índice de consumo saludable sube a <span className="text-emerald-400 font-bold">{finalFreshFood.toFixed(0)}</span>. Esto reduce drásticamente la incidencia de enfermedades crónicas prevenibles (diabetes, hipertensión) del 25% al <span className="text-red-400 font-semibold">{finalDisease.toFixed(1)}%</span>, salvando el presupuesto del sistema de salud a largo plazo.
        </p>
      </div>
    </div>
  );
}
