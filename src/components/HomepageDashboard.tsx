import React from 'react';
import { motion } from 'motion/react';
import { Activity, DollarSign, Users, AlertOctagon } from 'lucide-react';
import BudgetSimulator from './BudgetSimulator';
import MacroRegionMap from './MacroRegionMap';
import ElectoralSimulator from './ElectoralSimulator';

export default function HomepageDashboard() {
  return (
    <div className="bg-white rounded-md border border-gray-200 shadow-sm p-6 md:p-8 mt-12 mb-12 border-t-4 border-t-[var(--color-gov-blue)]">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-heading font-extrabold text-[var(--color-gov-blue)] uppercase tracking-wider">
            Dashboard Macro-Económico
          </h2>
          <p className="text-sm text-gray-500 font-sans mt-1">Impacto nacional proyectado de la Reforma Total RD</p>
        </div>
        <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-bold border border-green-200">
          <Activity className="w-4 h-4" /> En tiempo real
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1 */}
        <div className="p-5 bg-gray-50 rounded-md border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Ahorro Fiscal Anual</h3>
            <DollarSign className="w-4 h-4 text-[var(--color-gov-gold)]" />
          </div>
          <p className="text-2xl font-bold font-heading text-[var(--color-gov-blue)]">$2.4B USD</p>
          <div className="mt-2 text-[10px] text-green-600 font-bold flex items-center gap-1">
            <span className="text-green-500">↑ 15%</span> vs presupuesto base
          </div>
        </div>

        {/* Metric 2 */}
        <div className="p-5 bg-gray-50 rounded-md border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Empleos Formales</h3>
            <Users className="w-4 h-4 text-[var(--color-gov-blue)]" />
          </div>
          <p className="text-2xl font-bold font-heading text-[var(--color-gov-blue)]">+450,000</p>
          <div className="mt-2 text-[10px] text-gray-500 font-bold">
            Proyectados directos en 5 años
          </div>
        </div>

        {/* Metric 3 */}
        <div className="p-5 bg-red-50 rounded-md border border-red-100">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-bold text-red-600 uppercase tracking-widest">Costo de Inacción</h3>
            <AlertOctagon className="w-4 h-4 text-red-500" />
          </div>
          <p className="text-2xl font-bold font-heading text-red-600">-$8.2B USD</p>
          <div className="mt-2 text-[10px] text-red-500 font-bold italic">
            Deuda proyectada sin reforma
          </div>
        </div>

        {/* Metric 4 */}
        <div className="p-5 bg-gray-50 rounded-md border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Macro-Regiones</h3>
            <Activity className="w-4 h-4 text-[var(--color-gov-blue)]" />
          </div>
          <p className="text-2xl font-bold font-heading text-[var(--color-gov-blue)]">7</p>
          <div className="mt-2 text-[10px] text-green-600 font-bold flex items-center gap-1">
            Sustituyendo 31 provincias
          </div>
        </div>
      </div>
      <div className="mt-8">
        <BudgetSimulator />
        <MacroRegionMap />
        <ElectoralSimulator />
      </div>
    </div>
  );
}
