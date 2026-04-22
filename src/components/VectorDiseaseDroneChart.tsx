import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

export default function VectorDiseaseDroneChart() {
  const [droneDeployment, setDroneDeployment] = useState(0); // 0 to 100%

  const calculateData = (year: number, deployment: number) => {
    const baseCases = 15000; // Annual cases of Dengue/Malaria
    const minCases = 500;
    
    const impactFactor = (deployment / 100) * (year / 5);
    
    return {
      year: `202${4 + year}`,
      cases: Math.max(minCases, baseCases - ((baseCases - minCases) * impactFactor)),
    };
  };

  const data = [
    calculateData(0, droneDeployment),
    calculateData(1, droneDeployment),
    calculateData(2, droneDeployment),
    calculateData(3, droneDeployment),
    calculateData(4, droneDeployment),
    calculateData(5, droneDeployment),
  ];

  const finalCases = data[data.length - 1].cases;

  return (
    <div className="bg-[#111827] border border-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Drones Autónomos y Mosquitos CRISPR</h3>
          <p className="text-sm text-gray-400">Impacto de la erradicación de vectores en casos de Dengue y Malaria</p>
        </div>
        <div className="bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700">
          <div className="text-sm text-gray-400">Casos Anuales (2029)</div>
          <div className="text-2xl font-bold text-lime-400">{finalCases.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400">Despliegue de Drones Fumigadores y CRISPR</span>
          <span className="text-lime-400 font-bold">{droneDeployment}%</span>
        </div>
        <input 
          type="range" 
          min="0" 
          max="100" 
          step="10"
          value={droneDeployment} 
          onChange={(e) => setDroneDeployment(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-lime-500"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0% (Fumigación Manual)</span>
          <span>100% (Erradicación Autónoma)</span>
        </div>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorCases" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#84cc16" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#84cc16" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="year" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} />
            <YAxis stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} tickFormatter={(value) => `${value / 1000}k`} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#f3f4f6' }}
              itemStyle={{ color: '#e5e7eb' }}
              formatter={(value: any) => [value.toLocaleString(undefined, { maximumFractionDigits: 0 }), 'Casos de Dengue/Malaria']}
            />
            <ReferenceLine y={1000} stroke="#10b981" strokeDasharray="3 3" label={{ position: 'insideTopLeft', value: 'Umbral de Control Endémico', fill: '#10b981', fontSize: 12 }} />
            <Area type="monotone" dataKey="cases" name="Casos Anuales" stroke="#84cc16" strokeWidth={3} fillOpacity={1} fill="url(#colorCases)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
        <h4 className="text-sm font-bold text-gray-300 mb-2">Impacto Epidemiológico</h4>
        <p className="text-sm text-gray-400">
          Al desplegar un <span className="text-white font-semibold">{droneDeployment}%</span> de la red de drones autónomos y mosquitos estériles CRISPR en puntos críticos urbanos, la población de vectores transmisores se colapsa. Esto reduce los casos anuales de enfermedades cíclicas como el dengue y la malaria de 15,000 a apenas <span className="text-lime-400 font-bold">{finalCases.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>, aliviando masivamente la carga sobre el sistema hospitalario.
        </p>
      </div>
    </div>
  );
}
