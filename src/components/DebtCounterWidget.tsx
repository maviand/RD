import React, { useState, useEffect } from 'react';
import { TrendingUp, AlertOctagon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function DebtCounterWidget() {
  // Start with a large base number and increment it fast
  const [debt, setDebt] = useState(74830125430.50);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    // Increase debt by ~$150 every 100ms
    const interval = setInterval(() => {
      setDebt(prev => prev + 147.25);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const formattedDebt = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(debt);

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 bg-[var(--color-gov-blue)] text-white shadow-[0_-4px_15px_rgba(0,0,0,0.2)] z-40 cursor-pointer overflow-hidden"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-gov-red)] shadow-[0_0_10px_var(--color-gov-red)] bg-[length:200%_100%] animate-pulse" />
      
      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <AlertOctagon className="w-5 h-5 text-[var(--color-gov-red)] animate-pulse hidden sm:block" />
          <span className="font-heading font-bold uppercase tracking-wider text-xs md:text-sm text-gray-300">
            Reloj de Deuda Nacional (Costo de Inacción):
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="font-mono font-bold text-lg md:text-2xl text-[var(--color-gov-gold)] tracking-tight">
            {formattedDebt}
          </span>
          <TrendingUp className="w-5 h-5 text-[var(--color-gov-red)]" />
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-white/10 bg-[#001f44]"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 text-sm text-gray-300 font-sans leading-relaxed">
              <p className="mb-2">
                <strong className="text-white">¿Qué significa esto?</strong> Cada segundo que posponemos la Reforma Total, el estado incurre en déficits acumulativos pagaderos con más deuda externa, hipotecando el futuro de las próximas generaciones.
              </p>
              <p>
                Este contador estima el crecimiento de la deuda basada en la ineficiencia estructural, la evasión y la dependencia de subsidios no sostenibles. La implementación del Presupuesto Base Cero (ZBB) detendría esta hemorragia fiscal.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
