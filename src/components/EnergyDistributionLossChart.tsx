import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, ReferenceLine } from 'recharts';

export default function EnergyDistributionLossChart() {
  const [amiDeployment, setAmiDeployment] = useState(50);

  const data = Array.from({ length: 5 }, (_, i) => {
    const year = i + 1;
    const initialLoss = 41.7;
    
    // Higher deployment = faster reduction in losses
    const reduction = (amiDeployment / 100) * 6 * year;
    const currentLoss = Math.max(12, initialLoss - reduction); // 12% is a realistic minimum technical loss

    return {
      year: `Año ${year}`,
      perdidas: Number(currentLoss.toFixed(1)),
    };
  });

  return (
    <div className="bg-[#111827] p-6 rounded-xl border border-gray-800">
      <h3 className="text-xl font-bold text-white mb-4">Reducción de Pérdidas de Distribución (AMI + IA)</h3>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-400 mb-2">
          Despliegue de Medidores Inteligentes (AMI): {amiDeployment}%
        </label>
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={amiDeployment} 
          onChange={(e) => setAmiDeployment(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-yellow-500"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0% (Sin cambios)</span>
          <span>100% (Cobertura Total)</span>
        </div>
      </div>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="year" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" domain={[0, 50]} label={{ value: 'Pérdidas (%)', angle: -90, position: 'insideLeft', fill: '#9CA3AF' }} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', color: '#F3F4F6' }}
              itemStyle={{ color: '#E5E7EB' }}
            />
            <Legend />
            <ReferenceLine y={12} label="Pérdida Técnica Aceptable (12%)" stroke="#10B981" strokeDasharray="3 3" />
            <Line type="monotone" dataKey="perdidas" name="Pérdidas Totales (Técnicas + Robo)" stroke="#F59E0B" strokeWidth={3} dot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 p-4 bg-yellow-900/20 rounded-lg border border-yellow-800/30">
        <p className="text-sm text-yellow-200">
          <strong>Impacto:</strong> La infraestructura AMI combinada con tribunales de energía especializados reduce drásticamente el robo de energía (pérdidas no técnicas), acercando el sistema a estándares internacionales.
        </p>
      </div>
    </div>
  );
}
