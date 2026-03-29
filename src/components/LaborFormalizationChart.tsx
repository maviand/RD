import React, { useState } from 'react';
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function LaborFormalizationChart() {
  const [cciAdoption, setCciAdoption] = useState(0); // Percentage of CCI adoption

  // Base formal employment is 50%
  // As CCI adoption goes from 0 to 100%, formal employment rises to 85%
  // Severance liability drops from 100% to 0%
  const calculateData = (year: number, adoption: number) => {
    const baseFormal = 50;
    const maxFormal = 85;
    const increaseFactor = (adoption / 100) * (year / 5);
    
    const currentFormal = baseFormal + ((maxFormal - baseFormal) * increaseFactor);
    const severanceLiability = 100 - (adoption * (year / 5)); // Percentage of old liability remaining

    return {
      year: `202${4 + year}`,
      formal: Math.min(maxFormal, currentFormal),
      liability: Math.max(0, severanceLiability)
    };
  };

  const data = [
    calculateData(0, cciAdoption),
    calculateData(1, cciAdoption),
    calculateData(2, cciAdoption),
    calculateData(3, cciAdoption),
    calculateData(4, cciAdoption),
    calculateData(5, cciAdoption),
  ];

  const finalFormal = data[data.length - 1].formal;
  const finalLiability = data[data.length - 1].liability;

  return (
    <div className="bg-[#111827] border border-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Formalización Laboral y Cesantía</h3>
          <p className="text-sm text-gray-400">Impacto de las Cuentas de Capitalización Individual (CCI) en el empleo formal</p>
        </div>
        <div className="bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700">
          <div className="text-sm text-gray-400">Empleo Formal (2029)</div>
          <div className="text-2xl font-bold text-indigo-400">{finalFormal.toFixed(1)}%</div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400">Adopción del Sistema de CCI (Reemplazo de Cesantía Retroactiva)</span>
          <span className="text-indigo-400 font-bold">{cciAdoption}%</span>
        </div>
        <input 
          type="range" 
          min="0" 
          max="100" 
          step="10"
          value={cciAdoption} 
          onChange={(e) => setCciAdoption(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0% (Sistema Actual)</span>
          <span>100% (Transición Completa)</span>
        </div>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="year" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} />
            <YAxis yAxisId="left" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} tickFormatter={(value) => `${value}%`} />
            <YAxis yAxisId="right" orientation="right" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} tickFormatter={(value) => `${value}%`} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#f3f4f6' }}
              itemStyle={{ color: '#e5e7eb' }}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            <Bar yAxisId="left" dataKey="formal" name="Tasa de Empleo Formal" fill="#6366f1" radius={[4, 4, 0, 0]} barSize={30} />
            <Line yAxisId="right" type="monotone" dataKey="liability" name="Pasivo Laboral Retroactivo" stroke="#ef4444" strokeWidth={3} dot={{ r: 4, fill: '#ef4444', strokeWidth: 2 }} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
        <h4 className="text-sm font-bold text-gray-300 mb-2">Impacto Laboral Estimado</h4>
        <p className="text-sm text-gray-400">
          Implementar un <span className="text-white font-semibold">{cciAdoption}%</span> de adopción del sistema de Cuentas de Capitalización Individual (CCI) aumentaría el empleo formal al <span className="text-indigo-400 font-semibold">{finalFormal.toFixed(1)}%</span> para 2029, mientras reduce el pasivo laboral retroactivo al <span className="text-red-400 font-bold">{finalLiability.toFixed(0)}%</span>. Esto elimina el riesgo de quiebra para las MIPYMES y fomenta la contratación formal mediante contribuciones predecibles del 2%.
        </p>
      </div>
    </div>
  );
}
