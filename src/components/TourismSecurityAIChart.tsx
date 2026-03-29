import React, { useState } from 'react';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function TourismSecurityAIChart() {
  const [cctvCoverage, setCctvCoverage] = useState(0); // Percentage of AI CCTV coverage

  // Base crime rate is 100
  // As coverage goes from 0 to 100%, crime rate drops to 20%
  // High-net-worth tourist arrivals increase as crime drops
  const calculateData = (year: number, coverage: number) => {
    const baseCrime = 100;
    const minCrime = 20;
    const reductionFactor = (coverage / 100) * (year / 5);
    
    const currentCrime = baseCrime - ((baseCrime - minCrime) * reductionFactor);
    const touristArrivals = 5 + ((12 - 5) * reductionFactor); // Millions of tourists

    return {
      year: `202${4 + year}`,
      crime: Math.max(minCrime, currentCrime),
      tourists: touristArrivals
    };
  };

  const data = [
    calculateData(0, cctvCoverage),
    calculateData(1, cctvCoverage),
    calculateData(2, cctvCoverage),
    calculateData(3, cctvCoverage),
    calculateData(4, cctvCoverage),
    calculateData(5, cctvCoverage),
  ];

  const finalCrime = data[data.length - 1].crime;
  const finalTourists = data[data.length - 1].tourists;

  return (
    <div className="bg-[#111827] border border-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Red de Seguridad Aumentada por IA (Corea del Sur)</h3>
          <p className="text-sm text-gray-400">Impacto del CCTV biométrico en la reducción del crimen y el turismo de alto patrimonio</p>
        </div>
        <div className="bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700">
          <div className="text-sm text-gray-400">Turistas Anuales (2029)</div>
          <div className="text-2xl font-bold text-cyan-400">{finalTourists.toFixed(1)}M</div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400">Cobertura de Red CCTV Biométrico en Zonas Turísticas</span>
          <span className="text-cyan-400 font-bold">{cctvCoverage}%</span>
        </div>
        <input 
          type="range" 
          min="0" 
          max="100" 
          step="10"
          value={cctvCoverage} 
          onChange={(e) => setCctvCoverage(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0% (Sin Red IA)</span>
          <span>100% (Cobertura Total)</span>
        </div>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="year" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} />
            <YAxis yAxisId="left" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} tickFormatter={(value) => `${value}`} />
            <YAxis yAxisId="right" orientation="right" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} tickFormatter={(value) => `${value}M`} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#f3f4f6' }}
              itemStyle={{ color: '#e5e7eb' }}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            <Bar yAxisId="right" dataKey="tourists" name="Llegadas de Turistas (Millones)" fill="#06b6d4" radius={[4, 4, 0, 0]} barSize={30} />
            <Line yAxisId="left" type="monotone" dataKey="crime" name="Índice de Crimen Violento" stroke="#ef4444" strokeWidth={3} dot={{ r: 4, fill: '#ef4444', strokeWidth: 2 }} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
        <h4 className="text-sm font-bold text-gray-300 mb-2">Impacto Turístico Estimado</h4>
        <p className="text-sm text-gray-400">
          Al desplegar una red de seguridad aumentada por IA con un <span className="text-white font-semibold">{cctvCoverage}%</span> de cobertura en zonas turísticas, el índice de crimen violento caería drásticamente a <span className="text-red-400 font-semibold">{finalCrime.toFixed(0)}</span> para 2029. Esta mejora radical en la seguridad, regida por estrictas leyes de transparencia danesas, eliminaría la advertencia de viaje de Nivel 2, atrayendo a <span className="text-cyan-400 font-bold">{finalTourists.toFixed(1)} Millones</span> de turistas anuales, impulsando el turismo de alto patrimonio.
        </p>
      </div>
    </div>
  );
}
