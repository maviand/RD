import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface BudgetItem {
  id: string;
  name: string;
  current: number;
  proposed: number;
  description: string;
  color: string;
}

const initialBudget: BudgetItem[] = [
  { id: 'bureaucracy', name: 'Burocracia y Nómina Política', current: 40, proposed: 15, description: 'Sueldos de 24 ministerios, clientelismo y botellas.', color: 'bg-red-500' },
  { id: 'infrastructure', name: 'Infraestructura', current: 15, proposed: 30, description: 'Inversión en Metro, Trenes y Energía.', color: 'bg-[var(--color-gov-gold)]' },
  { id: 'health_education', name: 'Salud y Educación (IA)', current: 20, proposed: 35, description: 'Telemedicina, infraestructura hospitalaria y Tutores de IA.', color: 'bg-[var(--color-gov-blue)]' },
  { id: 'debt_payment', name: 'Pago de Deuda', current: 25, proposed: 20, description: 'Servicio de la deuda reducida al consolidar el estado.', color: 'bg-green-500' }
];

export default function BudgetSimulator() {
  const [allocations, setAllocations] = useState<Record<string, number>>(
    initialBudget.reduce((acc, item) => ({ ...acc, [item.id]: item.current }), {})
  );

  const totalAllocation = Object.values(allocations).reduce((acc, val) => acc + val, 0);
  const deficit = totalAllocation - 100;
  
  const handleSliderChange = (id: string, value: number) => {
    setAllocations(prev => ({ ...prev, [id]: value }));
  };

  const setZeroBased = () => {
    const zeroBased = initialBudget.reduce((acc, item) => ({ ...acc, [item.id]: item.proposed }), {});
    setAllocations(zeroBased);
  };

  return (
    <div className="bg-white rounded-md border border-gray-200 shadow-sm overflow-hidden mt-8">
      <div className="bg-[var(--color-gov-blue)] p-6 text-white flex justify-between items-center">
        <div>
          <h3 className="text-xl font-heading font-bold uppercase tracking-wider flex items-center gap-2">
            <Calculator className="w-6 h-6 text-[var(--color-gov-gold)]" />
            Simulador de Presupuesto Base Cero (ZBB)
          </h3>
          <p className="text-sm text-gray-300 font-sans mt-1">Ajusta los sliders para redistribuir el Gasto Público (%)</p>
        </div>
        <button 
          onClick={setZeroBased}
          className="px-4 py-2 bg-[var(--color-gov-gold)] text-[var(--color-gov-blue)] font-bold uppercase tracking-wider text-xs rounded-sm hover:bg-[#F59E0B] transition-colors shadow-sm"
        >
          Aplicar ZBB Automático
        </button>
      </div>

      <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Sliders */}
        <div className="space-y-6">
          {initialBudget.map(item => (
            <div key={item.id}>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">{item.name}</label>
                <span className={`text-sm font-bold px-2 py-0.5 rounded-sm text-white ${item.color}`}>
                  {allocations[item.id]}%
                </span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="60" 
                value={allocations[item.id]} 
                onChange={(e) => handleSliderChange(item.id, parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--color-gov-blue)]"
              />
              <p className="text-xs text-gray-500 mt-1 font-sans">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Results */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 flex flex-col items-center justify-center text-center">
          <div className="mb-6 relative w-48 h-48 rounded-full border-8 border-gray-100 flex items-center justify-center overflow-hidden">
            {/* Simple Pie Chart background representation based on allocations */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                background: `conic-gradient(
                  #ef4444 0% ${allocations['bureaucracy']}%,
                  var(--color-gov-gold) ${allocations['bureaucracy']}% ${allocations['bureaucracy'] + allocations['infrastructure']}%,
                  var(--color-gov-blue) ${allocations['bureaucracy'] + allocations['infrastructure']}% ${allocations['bureaucracy'] + allocations['infrastructure'] + allocations['health_education']}%,
                  #22c55e ${allocations['bureaucracy'] + allocations['infrastructure'] + allocations['health_education']}% 100%
                )`
              }}
            />
            <div className="relative z-10 flex flex-col items-center">
              <span className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Gasto Total</span>
              <span className={`text-4xl font-heading font-extrabold ${totalAllocation > 100 ? 'text-red-500' : 'text-[var(--color-gov-blue)]'}`}>
                {totalAllocation}%
              </span>
            </div>
          </div>
          
          {deficit > 0 ? (
            <div className="bg-red-50 text-red-700 p-4 rounded-md border border-red-200 w-full flex items-start gap-3 text-left">
              <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm uppercase">Déficit Presupuestario</h4>
                <p className="text-xs font-sans mt-1">El estado está gastando un {deficit}% más de lo que ingresa. Esto requiere nueva deuda internacional o impresión monetaria (inflación).</p>
              </div>
            </div>
          ) : deficit < 0 ? (
            <div className="bg-green-50 text-green-700 p-4 rounded-md border border-green-200 w-full flex items-start gap-3 text-left">
              <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm uppercase">Superávit Fiscal</h4>
                <p className="text-xs font-sans mt-1">Has salvado un {Math.abs(deficit)}% del presupuesto. Este excedente se inyectará a un Fondo Soberano o reducirá la base imponible.</p>
              </div>
            </div>
          ) : (
            <div className="bg-blue-50 text-blue-700 p-4 rounded-md border border-blue-200 w-full flex items-start gap-3 text-left">
              <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm uppercase">Presupuesto Equilibrado</h4>
                <p className="text-xs font-sans mt-1">El estado gasta exactamente el 100% de lo que recauda. Cero déficit, cero inflación impulsada por el Estado.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
