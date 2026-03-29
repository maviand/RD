import React, { useState } from 'react';
import { ComposedChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function GridStorageStabilizationChart() {
  const [bessCapacity, setBessCapacity] = useState(1000);

  const data = Array.from({ length: 24 }, (_, i) => {
    const hour = i;
    // Typical demand curve (peaks in evening)
    const baseDemand = 2000 + Math.sin((hour - 8) * Math.PI / 12) * 500 + (hour > 18 && hour < 22 ? 800 : 0);
    
    // Solar generation (peaks at noon)
    const solarGen = hour > 7 && hour < 18 ? Math.sin((hour - 7) * Math.PI / 11) * 1500 : 0;
    
    // Thermal generation (baseload)
    const thermalGen = 2200;

    // Total supply without BESS
    const supplyWithoutBess = thermalGen + solarGen;
    
    // BESS Logic: Charge when supply > demand, discharge when demand > supply
    let bessDischarge = 0;
    if (baseDemand > supplyWithoutBess) {
      // Deficit (Blackout risk)
      const deficit = baseDemand - supplyWithoutBess;
      // Discharge up to BESS capacity (simplified per hour)
      bessDischarge = Math.min(deficit, bessCapacity / 4); // Assuming 4-hour duration batteries
    }

    const finalSupply = supplyWithoutBess + bessDischarge;
    const deficitRemaining = Math.max(0, baseDemand - finalSupply);

    return {
      hora: `${hour}:00`,
      demanda: Math.round(baseDemand),
      generacionBase: Math.round(supplyWithoutBess),
      suministroFinal: Math.round(finalSupply),
      deficit: Math.round(deficitRemaining),
    };
  });

  return (
    <div className="bg-[#111827] p-6 rounded-xl border border-gray-800">
      <h3 className="text-xl font-bold text-white mb-4">Estabilización de Red con Baterías (BESS)</h3>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-400 mb-2">
          Capacidad BESS Instalada (MWh): {bessCapacity}
        </label>
        <input 
          type="range" 
          min="0" 
          max="4000" 
          step="500"
          value={bessCapacity} 
          onChange={(e) => setBessCapacity(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0 (Apagones)</span>
          <span>4000 (Red Estable)</span>
        </div>
      </div>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="hora" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" label={{ value: 'MW', angle: -90, position: 'insideLeft', fill: '#9CA3AF' }} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', color: '#F3F4F6' }}
              itemStyle={{ color: '#E5E7EB' }}
            />
            <Legend />
            <Area type="monotone" dataKey="generacionBase" name="Generación (Térmica + Solar)" fill="#4B5563" stroke="#6B7280" fillOpacity={0.5} />
            <Line type="monotone" dataKey="demanda" name="Demanda Total" stroke="#EF4444" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="suministroFinal" name="Suministro con BESS" stroke="#06B6D4" strokeWidth={3} dot={false} />
            <Area type="monotone" dataKey="deficit" name="Déficit (Apagón)" fill="#DC2626" stroke="none" fillOpacity={0.8} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 p-4 bg-cyan-900/20 rounded-lg border border-cyan-800/30">
        <p className="text-sm text-cyan-200">
          <strong>Impacto:</strong> Las baterías (BESS) almacenan el exceso de energía solar al mediodía y la despachan durante el pico nocturno (18:00-22:00), eliminando los apagones crónicos sin encender plantas de combustibles fósiles adicionales.
        </p>
      </div>
    </div>
  );
}
