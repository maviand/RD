import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function ImagingAsAServiceChart() {
  const [iaasAdoption, setIaasAdoption] = useState(0); // 0 to 100%

  const calculateData = (year: number, adoption: number) => {
    const baseDowntime = 40; // 40% downtime for public MRI/CT machines
    const minDowntime = 2;
    const baseScans = 1000; // Successful scans per month
    const maxScans = 5000;
    
    const impactFactor = (adoption / 100) * (year / 5);
    
    return {
      year: `202${4 + year}`,
      downtime: Math.max(minDowntime, baseDowntime - ((baseDowntime - minDowntime) * impactFactor)),
      scans: Math.min(maxScans, baseScans + ((maxScans - baseScans) * impactFactor)),
    };
  };

  const data = [
    calculateData(0, iaasAdoption),
    calculateData(1, iaasAdoption),
    calculateData(2, iaasAdoption),
    calculateData(3, iaasAdoption),
    calculateData(4, iaasAdoption),
    calculateData(5, iaasAdoption),
  ];

  const finalDowntime = data[data.length - 1].downtime;
  const finalScans = data[data.length - 1].scans;

  return (
    <div className="bg-[#111827] border border-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Imágenes como Servicio (IaaS)</h3>
          <p className="text-sm text-gray-400">Impacto de penalizar el tiempo de inactividad de equipos MRI/CT</p>
        </div>
        <div className="bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700">
          <div className="text-sm text-gray-400">Tiempo de Inactividad (2029)</div>
          <div className="text-2xl font-bold text-orange-400">{finalDowntime.toFixed(1)}%</div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400">Transición a Modelo IaaS (Pago por Escaneo Exitoso)</span>
          <span className="text-orange-400 font-bold">{iaasAdoption}%</span>
        </div>
        <input 
          type="range" 
          min="0" 
          max="100" 
          step="10"
          value={iaasAdoption} 
          onChange={(e) => setIaasAdoption(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0% (Compra Tradicional)</span>
          <span>100% (IaaS con Penalizaciones)</span>
        </div>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="year" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} />
            <YAxis yAxisId="left" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} tickFormatter={(value) => `${value}%`} />
            <YAxis yAxisId="right" orientation="right" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#f3f4f6' }}
              itemStyle={{ color: '#e5e7eb' }}
              formatter={(value: number, name: string) => [
                name === 'Tiempo de Inactividad (MRI/CT)' ? `${value.toFixed(1)}%` : value.toLocaleString(undefined, { maximumFractionDigits: 0 }), 
                name
              ]}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            <Line yAxisId="left" type="monotone" dataKey="downtime" name="Tiempo de Inactividad (MRI/CT)" stroke="#f97316" strokeWidth={4} dot={{ r: 6, fill: '#f97316', strokeWidth: 2, stroke: '#111827' }} />
            <Line yAxisId="right" type="monotone" dataKey="scans" name="Escaneos Exitosos por Mes" stroke="#14b8a6" strokeWidth={3} strokeDasharray="5 5" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
        <h4 className="text-sm font-bold text-gray-300 mb-2">Impacto en Diagnóstico</h4>
        <p className="text-sm text-gray-400">
          Al cambiar el <span className="text-white font-semibold">{iaasAdoption}%</span> de las adquisiciones a un modelo IaaS, donde los proveedores privados asumen el costo del mantenimiento y son penalizados por fallas, el tiempo de inactividad de los equipos cae del 40% a un <span className="text-orange-400 font-bold">{finalDowntime.toFixed(1)}%</span>. Esto elimina los cuellos de botella en el diagnóstico, aumentando los escaneos exitosos a <span className="text-teal-400 font-semibold">{finalScans.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span> por mes.
        </p>
      </div>
    </div>
  );
}
