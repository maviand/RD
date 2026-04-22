import React, { useState } from 'react';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function FuelTaxReformChart() {
  const [reformProgress, setReformProgress] = useState(0); // 0 to 100%

  const calculateData = (year: number, progress: number) => {
    // Base values (in millions USD)
    const baseGeneralizedSubsidies = 800;
    const baseTargetedSubsidies = 50;
    const baseFiscalSavings = 0;
    
    // Target values at 100% reform
    const targetGeneralizedSubsidies = 0;
    const targetTargetedSubsidies = 300; // More efficient, focused on vulnerable sectors
    const targetFiscalSavings = 500; // 800 - 300 = 500 savings
    
    // Calculate current values based on reform progress and time
    const impactFactor = (progress / 100) * (year / 5);
    
    return {
      year: `202${4 + year}`,
      generalizedSubsidies: baseGeneralizedSubsidies - ((baseGeneralizedSubsidies - targetGeneralizedSubsidies) * impactFactor),
      targetedSubsidies: baseTargetedSubsidies + ((targetTargetedSubsidies - baseTargetedSubsidies) * impactFactor),
      fiscalSavings: baseFiscalSavings + ((targetFiscalSavings - baseFiscalSavings) * impactFactor),
    };
  };

  const data = [
    calculateData(0, reformProgress),
    calculateData(1, reformProgress),
    calculateData(2, reformProgress),
    calculateData(3, reformProgress),
    calculateData(4, reformProgress),
    calculateData(5, reformProgress),
  ];

  const finalSavings = data[data.length - 1].fiscalSavings;
  const finalGeneralized = data[data.length - 1].generalizedSubsidies;

  return (
    <div className="bg-[#111827] border border-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Reforma de Tributación de Combustibles</h3>
          <p className="text-sm text-gray-400">Transición de subsidios generalizados a apoyo focalizado e impuesto variable</p>
        </div>
        <div className="bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700">
          <div className="text-sm text-gray-400">Ahorro Fiscal Neto (2029)</div>
          <div className="text-2xl font-bold text-emerald-400">${finalSavings.toFixed(0)}M USD</div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400">Progreso de la Reforma (Eliminación de Subsidios Generalizados)</span>
          <span className="text-emerald-400 font-bold">{reformProgress}%</span>
        </div>
        <input 
          type="range" 
          min="0" 
          max="100" 
          step="10"
          value={reformProgress} 
          onChange={(e) => setReformProgress(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0% (Status Quo)</span>
          <span>100% (Reforma Completa)</span>
        </div>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="year" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} />
            <YAxis yAxisId="left" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} tickFormatter={(value) => `$${value}M`} />
            <YAxis yAxisId="right" orientation="right" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} tickFormatter={(value) => `$${value}M`} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#f3f4f6' }}
              itemStyle={{ color: '#e5e7eb' }}
              formatter={(value: any, name: any) => [
                `$${value.toFixed(0)}M USD`, 
                name
              ]}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            <Bar yAxisId="left" stackId="a" dataKey="generalizedSubsidies" name="Subsidios Generalizados (Ineficientes)" fill="#ef4444" opacity={0.8} radius={[0, 0, 4, 4]} />
            <Bar yAxisId="left" stackId="a" dataKey="targetedSubsidies" name="Apoyo Focalizado (Eficiente)" fill="#3b82f6" opacity={0.8} radius={[4, 4, 0, 0]} />
            <Line yAxisId="right" type="monotone" dataKey="fiscalSavings" name="Ahorro Fiscal Neto" stroke="#10b981" strokeWidth={4} dot={{ r: 6, fill: '#10b981', strokeWidth: 2, stroke: '#111827' }} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
        <h4 className="text-sm font-bold text-gray-300 mb-2">Impacto Fiscal y Social</h4>
        <p className="text-sm text-gray-400">
          Al avanzar la reforma en un <span className="text-white font-semibold">{reformProgress}%</span>, los subsidios generalizados se reducen a <span className="text-red-400 font-semibold">${finalGeneralized.toFixed(0)}M</span>, siendo reemplazados por un programa de apoyo energético focalizado. Esto elimina la contradicción fiscal del sistema actual y genera un ahorro neto de <span className="text-emerald-400 font-bold">${finalSavings.toFixed(0)}M USD</span> anuales, que pueden ser reinvertidos en transporte público e infraestructura mediante el esquema de <em>ring-fencing</em>.
        </p>
      </div>
    </div>
  );
}
