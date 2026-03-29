import React, { useState } from 'react';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function TrafficCongestionERPChart() {
  const [erpCoverage, setErpCoverage] = useState(0); // ERP coverage percentage

  // Base congestion index is 100
  // As ERP coverage goes from 0 to 100%, congestion drops to 40%
  // Public transit funding increases as ERP coverage increases
  const calculateData = (year: number, coverage: number) => {
    const baseCongestion = 100;
    const minCongestion = 40;
    const reductionFactor = (coverage / 100) * (year / 5);
    
    const currentCongestion = baseCongestion - ((baseCongestion - minCongestion) * reductionFactor);
    const transitFunding = (coverage / 100) * (year / 5) * 500; // Millions of USD

    return {
      year: `202${4 + year}`,
      congestion: Math.max(minCongestion, currentCongestion),
      funding: transitFunding
    };
  };

  const data = [
    calculateData(0, erpCoverage),
    calculateData(1, erpCoverage),
    calculateData(2, erpCoverage),
    calculateData(3, erpCoverage),
    calculateData(4, erpCoverage),
    calculateData(5, erpCoverage),
  ];

  const finalCongestion = data[data.length - 1].congestion;
  const finalFunding = data[data.length - 1].funding;

  return (
    <div className="bg-[#111827] border border-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Tarificación Vial Electrónica (ERP)</h3>
          <p className="text-sm text-gray-400">Impacto del cargo por congestión en el tráfico y financiamiento del transporte público</p>
        </div>
        <div className="bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700">
          <div className="text-sm text-gray-400">Fondos Recaudados (2029)</div>
          <div className="text-2xl font-bold text-blue-400">${finalFunding.toFixed(0)}M</div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400">Cobertura del Sistema ERP en Zonas de Alta Congestión</span>
          <span className="text-blue-400 font-bold">{erpCoverage}%</span>
        </div>
        <input 
          type="range" 
          min="0" 
          max="100" 
          step="10"
          value={erpCoverage} 
          onChange={(e) => setErpCoverage(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0% (Sin ERP)</span>
          <span>100% (Cobertura Total)</span>
        </div>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="year" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} />
            <YAxis yAxisId="left" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} tickFormatter={(value) => `${value}`} />
            <YAxis yAxisId="right" orientation="right" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} tickFormatter={(value) => `$${value}M`} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#f3f4f6' }}
              itemStyle={{ color: '#e5e7eb' }}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            <Bar yAxisId="right" dataKey="funding" name="Fondos Transporte Público (USD)" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={30} />
            <Line yAxisId="left" type="monotone" dataKey="congestion" name="Índice de Congestión" stroke="#ef4444" strokeWidth={3} dot={{ r: 4, fill: '#ef4444', strokeWidth: 2 }} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
        <h4 className="text-sm font-bold text-gray-300 mb-2">Impacto Urbano Estimado</h4>
        <p className="text-sm text-gray-400">
          Implementar un <span className="text-white font-semibold">{erpCoverage}%</span> de cobertura ERP reduciría el índice de congestión a <span className="text-red-400 font-semibold">{finalCongestion.toFixed(0)}</span> para 2029, mientras genera <span className="text-blue-400 font-bold">${finalFunding.toFixed(0)} Millones</span> anuales. Estos fondos se destinarían exclusivamente a la expansión de líneas de metro, teleféricos y corredores de autobuses, creando un círculo virtuoso de movilidad urbana.
        </p>
      </div>
    </div>
  );
}
