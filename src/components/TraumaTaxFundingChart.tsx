import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

export default function TraumaTaxFundingChart() {
  const [taxImplementation, setTaxImplementation] = useState(0); // 0 to 100%

  const calculateData = (year: number, implementation: number) => {
    const baseFunding = 10; // Millions USD
    const maxFunding = 150; 
    const baseMortality = 65; // Deaths per 100k
    const minMortality = 15;
    
    const impactFactor = (implementation / 100) * (year / 5);
    
    return {
      year: `202${4 + year}`,
      funding: baseFunding + ((maxFunding - baseFunding) * impactFactor),
      mortality: Math.max(minMortality, baseMortality - ((baseMortality - minMortality) * impactFactor)),
    };
  };

  const data = [
    calculateData(0, taxImplementation),
    calculateData(1, taxImplementation),
    calculateData(2, taxImplementation),
    calculateData(3, taxImplementation),
    calculateData(4, taxImplementation),
    calculateData(5, taxImplementation),
  ];

  const finalFunding = data[data.length - 1].funding;
  const finalMortality = data[data.length - 1].mortality;

  return (
    <div className="bg-[#111827] border border-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Impuesto al Trauma y Centros Regionales (Modelo Nórdico)</h3>
          <p className="text-sm text-gray-400">Impacto del impuesto a motocicletas y alcohol en el financiamiento de trauma</p>
        </div>
        <div className="bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700">
          <div className="text-sm text-gray-400">Mortalidad Vial (2029)</div>
          <div className="text-2xl font-bold text-amber-400">{finalMortality.toFixed(0)} <span className="text-xs font-normal text-gray-500">/100k</span></div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400">Implementación del Impuesto al Riesgo (Motos/Alcohol)</span>
          <span className="text-amber-400 font-bold">{taxImplementation}%</span>
        </div>
        <input 
          type="range" 
          min="0" 
          max="100" 
          step="10"
          value={taxImplementation} 
          onChange={(e) => setTaxImplementation(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0% (Sin Financiamiento)</span>
          <span>100% (Centros Nivel 1 Financiados)</span>
        </div>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="year" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} />
            <YAxis yAxisId="left" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} tickFormatter={(value) => `$${value}M`} />
            <YAxis yAxisId="right" orientation="right" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#f3f4f6' }}
              itemStyle={{ color: '#e5e7eb' }}
              formatter={(value: any, name: any) => [
                name === 'Financiamiento (Millones USD)' ? `$${value.toFixed(1)}M` : value.toFixed(0), 
                name
              ]}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            <Bar yAxisId="left" dataKey="funding" name="Financiamiento (Millones USD)" fill="#f59e0b" radius={[4, 4, 0, 0]} />
            <Bar yAxisId="right" dataKey="mortality" name="Mortalidad Vial (por 100k)" fill="#ef4444" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
        <h4 className="text-sm font-bold text-gray-300 mb-2">Impacto en la Red de Trauma</h4>
        <p className="text-sm text-gray-400">
          Al implementar el <span className="text-white font-semibold">{taxImplementation}%</span> del impuesto universal al riesgo, se generan <span className="text-amber-400 font-bold">${finalFunding.toFixed(0)} Millones USD</span> anuales para financiar centros regionales de trauma de Nivel 1. Esto asegura atención inmediata de alta calidad, reduciendo la mortalidad por accidentes de tránsito de 65 a <span className="text-red-400 font-semibold">{finalMortality.toFixed(0)}</span> por cada 100,000 habitantes, salvando miles de vidas y evitando la bancarrota del sistema ortopédico.
        </p>
      </div>
    </div>
  );
}
