import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function PoliceAccountabilityChart() {
  const [camCoverage, setCamCoverage] = useState(30);

  const data = Array.from({ length: 5 }, (_, i) => {
    const year = i + 1;
    const baseComplaints = 1200;
    
    // Higher coverage = fewer complaints due to deterrence and accountability
    const reduction = (camCoverage / 100) * 0.8 * baseComplaints * (year / 5);
    const currentComplaints = Math.max(100, baseComplaints - reduction);

    return {
      year: `Año ${year}`,
      denuncias: Math.round(currentComplaints),
      casosResueltos: Math.round(currentComplaints * (0.2 + (camCoverage / 100) * 0.7)), // More coverage = higher resolution rate
    };
  });

  return (
    <div className="bg-[#111827] p-6 rounded-xl border border-gray-800">
      <h3 className="text-xl font-bold text-white mb-4">Rendición de Cuentas Policial (Cámaras Corporales + Blockchain)</h3>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-400 mb-2">
          Cobertura de Cámaras Corporales: {camCoverage}%
        </label>
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={camCoverage} 
          onChange={(e) => setCamCoverage(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0%</span>
          <span>100% (Fuerza Total)</span>
        </div>
      </div>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="year" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" label={{ value: 'Casos Anuales', angle: -90, position: 'insideLeft', fill: '#9CA3AF' }} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', color: '#F3F4F6' }}
              itemStyle={{ color: '#E5E7EB' }}
            />
            <Legend />
            <Area type="monotone" dataKey="denuncias" name="Denuncias de Abuso" stroke="#EF4444" fill="#EF4444" fillOpacity={0.3} />
            <Area type="monotone" dataKey="casosResueltos" name="Casos Resueltos (Evidencia Inmutable)" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 p-4 bg-blue-900/20 rounded-lg border border-blue-800/30">
        <p className="text-sm text-blue-200">
          <strong>Impacto:</strong> Las cámaras corporales cargadas inmutablemente a una nube blockchain disuaden la brutalidad policial y proporcionan evidencia irrefutable, aumentando drásticamente la tasa de resolución de quejas.
        </p>
      </div>
    </div>
  );
}
