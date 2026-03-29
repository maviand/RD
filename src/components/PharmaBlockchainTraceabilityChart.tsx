import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function PharmaBlockchainTraceabilityChart() {
  const [blockchainCoverage, setBlockchainCoverage] = useState(0); // 0 to 100%

  const calculateData = (year: number, coverage: number) => {
    const baseCounterfeit = 30; // 30% counterfeit/smuggled drugs
    const minCounterfeit = 0.5; // Less than 1%
    const baseConfidence = 40; // Patient confidence index
    const maxConfidence = 98;
    
    const impactFactor = (coverage / 100) * (year / 5);
    
    return {
      year: `202${4 + year}`,
      counterfeit: Math.max(minCounterfeit, baseCounterfeit - ((baseCounterfeit - minCounterfeit) * impactFactor)),
      confidence: Math.min(maxConfidence, baseConfidence + ((maxConfidence - baseConfidence) * impactFactor)),
    };
  };

  const data = [
    calculateData(0, blockchainCoverage),
    calculateData(1, blockchainCoverage),
    calculateData(2, blockchainCoverage),
    calculateData(3, blockchainCoverage),
    calculateData(4, blockchainCoverage),
    calculateData(5, blockchainCoverage),
  ];

  const finalCounterfeit = data[data.length - 1].counterfeit;
  const finalConfidence = data[data.length - 1].confidence;

  return (
    <div className="bg-[#111827] border border-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Trazabilidad Blockchain y Penas de Prisión</h3>
          <p className="text-sm text-gray-400">Impacto del seguimiento nacional en la erradicación de medicamentos falsificados</p>
        </div>
        <div className="bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700">
          <div className="text-sm text-gray-400">Falsificaciones (2029)</div>
          <div className="text-2xl font-bold text-blue-400">{finalCounterfeit.toFixed(1)}%</div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400">Cobertura del Sistema de Trazabilidad Blockchain</span>
          <span className="text-blue-400 font-bold">{blockchainCoverage}%</span>
        </div>
        <input 
          type="range" 
          min="0" 
          max="100" 
          step="10"
          value={blockchainCoverage} 
          onChange={(e) => setBlockchainCoverage(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0% (Mercado Opaco)</span>
          <span>100% (Trazabilidad Total)</span>
        </div>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorCounterfeit" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorConfidence" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="year" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} />
            <YAxis stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} tickFormatter={(value) => `${value}%`} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#f3f4f6' }}
              itemStyle={{ color: '#e5e7eb' }}
              formatter={(value: number) => [`${value.toFixed(1)}%`, '']}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            <Area type="monotone" dataKey="counterfeit" name="Medicamentos Falsificados/Contrabando" stroke="#ef4444" strokeWidth={3} fillOpacity={1} fill="url(#colorCounterfeit)" />
            <Area type="monotone" dataKey="confidence" name="Índice de Confianza del Paciente" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorConfidence)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
        <h4 className="text-sm font-bold text-gray-300 mb-2">Impacto en Salud Pública</h4>
        <p className="text-sm text-gray-400">
          Al alcanzar una cobertura del <span className="text-white font-semibold">{blockchainCoverage}%</span> en el sistema blockchain de seguimiento desde el puerto hasta el paciente, combinado con penas de prisión obligatorias, la circulación de medicamentos falsificados y de contrabando se desploma del 30% a <span className="text-blue-400 font-bold">{finalCounterfeit.toFixed(1)}%</span>. Esto restaura la confianza del paciente al <span className="text-emerald-400 font-semibold">{finalConfidence.toFixed(0)}%</span> y garantiza la eficacia de los tratamientos médicos.
        </p>
      </div>
    </div>
  );
}
