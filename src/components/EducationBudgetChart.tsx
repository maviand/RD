import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function EducationBudgetChart() {
  const [adminPercent, setAdminPercent] = useState(40); // Baseline 40% admin, 60% instruction
  
  const TOTAL_BUDGET = 300; // RD$ Billions (4% of GDP approx)
  
  const adminCost = (adminPercent / 100) * TOTAL_BUDGET;
  const instructionCost = TOTAL_BUDGET - adminCost;

  const data = [
    { name: 'Gasto Administrativo / Ineficiente', value: adminCost, fill: '#ef4444' }, // red-500
    { name: 'Inversión Directa en Aprendizaje', value: instructionCost, fill: '#3b82f6' } // blue-500
  ];

  return (
    <div className="bg-[#111827] text-white p-8 rounded-xl border border-gray-800 shadow-2xl mt-6 font-sans">
      <div className="mb-8">
        <h4 className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">Distribución del Presupuesto Educativo (4% PIB)</h4>
        <p className="text-xs text-gray-500">Total estimado: RD$ {TOTAL_BUDGET} Billones</p>
      </div>

      <div className="h-64 w-full mb-8 relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value: number) => [`RD$ ${value.toFixed(2)}B`, 'Presupuesto']}
              contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }}
            />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-8 bg-gray-900 p-6 rounded-lg border border-gray-800">
        <div className="flex items-center gap-4">
          <span className="text-sm font-bold text-gray-400 w-48">Reducción de Gasto Administrativo</span>
          <input 
            type="range" 
            min="10" 
            max="40" 
            value={adminPercent} 
            onChange={(e) => setAdminPercent(parseInt(e.target.value))}
            className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
          <span className="bg-gray-800 px-3 py-1 rounded-md text-sm font-bold w-16 text-center">{adminPercent}%</span>
        </div>
        
        <div className="pt-6 border-t border-gray-800 flex justify-between items-center">
          <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Fondos Recuperados para Aulas</span>
          <span className="text-3xl font-black text-blue-400">+RD$ {((40 - adminPercent) / 100 * TOTAL_BUDGET).toFixed(2)}B</span>
        </div>
      </div>
    </div>
  );
}
