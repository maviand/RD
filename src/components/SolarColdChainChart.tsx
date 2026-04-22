import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function SolarColdChainChart() {
  const [iotCoverage, setIotCoverage] = useState(0); // 0 to 100%

  const calculateData = (year: number, coverage: number) => {
    const baseLoss = 35; // 35% vaccine spoilage rate
    const minLoss = 1;
    const baseImmunization = 60; // 60% rural immunization rate
    const maxImmunization = 98;
    
    const impactFactor = (coverage / 100) * (year / 5);
    
    return {
      year: `202${4 + year}`,
      loss: Math.max(minLoss, baseLoss - ((baseLoss - minLoss) * impactFactor)),
      immunization: Math.min(maxImmunization, baseImmunization + ((maxImmunization - baseImmunization) * impactFactor)),
    };
  };

  const data = [
    calculateData(0, iotCoverage),
    calculateData(1, iotCoverage),
    calculateData(2, iotCoverage),
    calculateData(3, iotCoverage),
    calculateData(4, iotCoverage),
    calculateData(5, iotCoverage),
  ];

  const finalLoss = data[data.length - 1].loss;
  const finalImmunization = data[data.length - 1].immunization;

  return (
    <div className="bg-[#111827] border border-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Micro-Refrigeración Solar IoT (Ruanda)</h3>
          <p className="text-sm text-gray-400">Impacto de la cadena de frío autónoma en la pérdida de vacunas</p>
        </div>
        <div className="bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700">
          <div className="text-sm text-gray-400">Pérdida de Vacunas (2029)</div>
          <div className="text-2xl font-bold text-cyan-400">{finalLoss.toFixed(1)}%</div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400">Cobertura de Micro-Refrigeración Solar con Monitoreo IoT</span>
          <span className="text-cyan-400 font-bold">{iotCoverage}%</span>
        </div>
        <input 
          type="range" 
          min="0" 
          max="100" 
          step="10"
          value={iotCoverage} 
          onChange={(e) => setIotCoverage(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0% (Refrigeración Tradicional)</span>
          <span>100% (Red Solar IoT Total)</span>
        </div>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorLoss" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorImmunization" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="year" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} />
            <YAxis stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} tickFormatter={(value) => `${value}%`} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#f3f4f6' }}
              itemStyle={{ color: '#e5e7eb' }}
              formatter={(value: any) => [`${value.toFixed(1)}%`, '']}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            <Area type="monotone" dataKey="loss" name="Tasa de Deterioro de Vacunas" stroke="#ef4444" strokeWidth={3} fillOpacity={1} fill="url(#colorLoss)" />
            <Area type="monotone" dataKey="immunization" name="Tasa de Inmunización Rural" stroke="#06b6d4" strokeWidth={3} fillOpacity={1} fill="url(#colorImmunization)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
        <h4 className="text-sm font-bold text-gray-300 mb-2">Impacto en Inmunización</h4>
        <p className="text-sm text-gray-400">
          Al exigir que el <span className="text-white font-semibold">{iotCoverage}%</span> de las clínicas rurales utilicen unidades de microrrefrigeración solar monitoreadas por IoT, la tasa de deterioro de vacunas por ruptura de la cadena de frío cae del 35% a un <span className="text-cyan-400 font-bold">{finalLoss.toFixed(1)}%</span>. Esto garantiza la eficacia de los biológicos, elevando la tasa de inmunización rural al <span className="text-blue-400 font-semibold">{finalImmunization.toFixed(1)}%</span>.
        </p>
      </div>
    </div>
  );
}
