import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function CosmeticSurgeryRegulationChart() {
  const [auditIntensity, setAuditIntensity] = useState(0); // 0 to 100%

  const calculateData = (year: number, intensity: number) => {
    const baseClinics = 100; // Index of clandestine clinics operating
    const minClinics = 5;
    const baseComplications = 100; // Index of surgical complications/deaths
    const minComplications = 10;
    
    const impactFactor = (intensity / 100) * (year / 5);
    
    return {
      year: `202${4 + year}`,
      clinics: Math.max(minClinics, baseClinics - ((baseClinics - minClinics) * impactFactor)),
      complications: Math.max(minComplications, baseComplications - ((baseComplications - minComplications) * impactFactor)),
    };
  };

  const data = [
    calculateData(0, auditIntensity),
    calculateData(1, auditIntensity),
    calculateData(2, auditIntensity),
    calculateData(3, auditIntensity),
    calculateData(4, auditIntensity),
    calculateData(5, auditIntensity),
  ];

  const finalClinics = data[data.length - 1].clinics;
  const finalComplications = data[data.length - 1].complications;

  return (
    <div className="bg-[#111827] border border-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Acreditación Internacional de Tolerancia Cero</h3>
          <p className="text-sm text-gray-400">Impacto de auditorías encubiertas y decomisos en la cirugía estética clandestina</p>
        </div>
        <div className="bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700">
          <div className="text-sm text-gray-400">Reducción de Complicaciones</div>
          <div className="text-2xl font-bold text-red-400">-{(100 - finalComplications).toFixed(0)}%</div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400">Intensidad de Auditorías Encubiertas y Decomiso de Activos</span>
          <span className="text-red-400 font-bold">{auditIntensity}%</span>
        </div>
        <input 
          type="range" 
          min="0" 
          max="100" 
          step="10"
          value={auditIntensity} 
          onChange={(e) => setAuditIntensity(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-red-500"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0% (Impunidad Actual)</span>
          <span>100% (Tolerancia Cero)</span>
        </div>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorClinics" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorComplications" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f97316" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis dataKey="year" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} />
            <YAxis stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#f3f4f6' }}
              itemStyle={{ color: '#e5e7eb' }}
              formatter={(value: number) => [`${value.toFixed(1)} (Índice)`, '']}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            <Area type="monotone" dataKey="clinics" name="Clínicas Clandestinas Operando" stroke="#ef4444" strokeWidth={3} fillOpacity={1} fill="url(#colorClinics)" />
            <Area type="monotone" dataKey="complications" name="Complicaciones/Mortalidad Quirúrgica" stroke="#f97316" strokeWidth={3} fillOpacity={1} fill="url(#colorComplications)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
        <h4 className="text-sm font-bold text-gray-300 mb-2">Impacto en Turismo de Salud</h4>
        <p className="text-sm text-gray-400">
          Al aplicar un <span className="text-white font-semibold">{auditIntensity}%</span> de intensidad en auditorías encubiertas y decomiso inmediato de activos por violaciones, el índice de clínicas clandestinas cae un <span className="text-red-400 font-bold">{(100 - finalClinics).toFixed(0)}%</span>. Esto limpia la industria, reduciendo las complicaciones quirúrgicas y la mortalidad asociada en un <span className="text-orange-400 font-semibold">{(100 - finalComplications).toFixed(0)}%</span>, protegiendo la reputación del país como destino de turismo médico seguro.
        </p>
      </div>
    </div>
  );
}
