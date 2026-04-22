import React, { useState } from 'react';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function MentalHealthDecentralizationChart() {
  const [wingCoverage, setWingCoverage] = useState(0); // 0 to 100%

  const calculateData = (year: number, coverage: number) => {
    const baseBeds = 500; // National psychiatric beds
    const targetBeds = 3500;
    const baseHomeless = 100; // Index of homeless with severe mental illness
    const minHomeless = 20;
    
    const impactFactor = (coverage / 100) * (year / 5);
    
    return {
      year: `202${4 + year}`,
      beds: baseBeds + ((targetBeds - baseBeds) * impactFactor),
      homeless: Math.max(minHomeless, baseHomeless - ((baseHomeless - minHomeless) * impactFactor)),
    };
  };

  const data = [
    calculateData(0, wingCoverage),
    calculateData(1, wingCoverage),
    calculateData(2, wingCoverage),
    calculateData(3, wingCoverage),
    calculateData(4, wingCoverage),
    calculateData(5, wingCoverage),
  ];

  const finalBeds = data[data.length - 1].beds;
  const finalHomeless = data[data.length - 1].homeless;

  return (
    <div className="bg-[#111827] border border-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Alas de Estabilización Psiquiátrica Descentralizadas</h3>
          <p className="text-sm text-gray-400">Impacto de la descentralización en la capacidad de atención y la indigencia</p>
        </div>
        <div className="bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700">
          <div className="text-sm text-gray-400">Camas Psiquiátricas (2029)</div>
          <div className="text-2xl font-bold text-teal-400">{finalBeds.toFixed(0)}</div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400">Hospitales Regionales con Alas Psiquiátricas Seguras</span>
          <span className="text-teal-400 font-bold">{wingCoverage}%</span>
        </div>
        <input 
          type="range" 
          min="0" 
          max="100" 
          step="10"
          value={wingCoverage} 
          onChange={(e) => setWingCoverage(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-teal-500"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0% (Centralización Asilar)</span>
          <span>100% (Descentralización Total)</span>
        </div>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="year" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} />
            <YAxis yAxisId="left" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} />
            <YAxis yAxisId="right" orientation="right" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#f3f4f6' }}
              itemStyle={{ color: '#e5e7eb' }}
              formatter={(value: any, name: any) => [
                name === 'Camas Psiquiátricas Disponibles' ? value.toFixed(0) : `${value.toFixed(0)}%`, 
                name
              ]}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            <Bar yAxisId="left" dataKey="beds" name="Camas Psiquiátricas Disponibles" fill="#14b8a6" radius={[4, 4, 0, 0]} />
            <Line yAxisId="right" type="monotone" dataKey="homeless" name="Índice de Indigencia por Salud Mental" stroke="#f59e0b" strokeWidth={4} dot={{ r: 6, fill: '#f59e0b', strokeWidth: 2, stroke: '#111827' }} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
        <h4 className="text-sm font-bold text-gray-300 mb-2">Impacto Social y Sanitario</h4>
        <p className="text-sm text-gray-400">
          Al exigir que el <span className="text-white font-semibold">{wingCoverage}%</span> de los hospitales regionales construyan alas de estabilización psiquiátrica (financiadas por impuestos al lujo), la capacidad nacional aumenta de 500 a <span className="text-teal-400 font-bold">{finalBeds.toFixed(0)} camas</span>. Esto descentraliza la atención, reduciendo drásticamente el hacinamiento en prisiones y disminuyendo el índice de indigencia severa por salud mental en un <span className="text-amber-400 font-semibold">{(100 - finalHomeless).toFixed(0)}%</span>.
        </p>
      </div>
    </div>
  );
}
