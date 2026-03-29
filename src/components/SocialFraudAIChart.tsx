import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function SocialFraudAIChart() {
  const [aiSensitivity, setAiSensitivity] = useState(70);

  const data = Array.from({ length: 5 }, (_, i) => {
    const year = i + 1;
    // Base fraud is high
    const baseFraud = 150; 
    
    // AI detection reduces fraud over time, more sensitivity = faster reduction
    const reductionFactor = Math.min(1, (aiSensitivity / 100) * (year * 0.3));
    const remainingFraud = Math.round(baseFraud * (1 - reductionFactor));
    const savings = baseFraud - remainingFraud;

    return {
      year: `Año ${year}`,
      fraudeRestante: remainingFraud,
      ahorroAcumulado: savings,
    };
  });

  return (
    <div className="bg-[#111827] p-6 rounded-xl border border-gray-800">
      <h3 className="text-xl font-bold text-white mb-4">Detección de Fraude Social por IA (Modelo Corea del Sur)</h3>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-400 mb-2">
          Sensibilidad del Algoritmo de IA: {aiSensitivity}%
        </label>
        <input 
          type="range" 
          min="10" 
          max="100" 
          step="10"
          value={aiSensitivity} 
          onChange={(e) => setAiSensitivity(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>Baja (10%)</span>
          <span>Alta (100%)</span>
        </div>
      </div>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="year" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" label={{ value: 'Millones USD', angle: -90, position: 'insideLeft', fill: '#9CA3AF' }} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', color: '#F3F4F6' }}
              itemStyle={{ color: '#E5E7EB' }}
            />
            <Legend />
            <Area type="monotone" dataKey="fraudeRestante" name="Fugas por Fraude" stackId="1" stroke="#EF4444" fill="#EF4444" fillOpacity={0.6} />
            <Area type="monotone" dataKey="ahorroAcumulado" name="Ahorros Recuperados" stackId="2" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 p-4 bg-purple-900/20 rounded-lg border border-purple-800/30">
        <p className="text-sm text-purple-200">
          <strong>Impacto:</strong> El aprendizaje automático centralizado detecta patrones irregulares instantáneamente. A mayor sensibilidad, más rápido se erradica el clientelismo y se recuperan fondos para quienes realmente los necesitan.
        </p>
      </div>
    </div>
  );
}
