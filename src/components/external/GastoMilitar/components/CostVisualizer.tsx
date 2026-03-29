import { useState, ReactNode, useEffect, useRef } from 'react';
import { motion, animate } from 'motion/react';
import { Calculator, Crosshair, Eye, Radar, Car, Shield, TrendingUp } from 'lucide-react';

const COST_PER_GENERAL = 6000000; // RD$
const DRONE_COST = 3000000; // RD$
const NVG_COST = 1000000; // RD$
const RADAR_COST = 3000000; // RD$
const PATROL_TRUCK_COST = 2500000; // RD$
const SOLDIER_BONUS_COST = 120000; // RD$ (10k/month for a year)

function AnimatedNumber({ value }: { value: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (node) {
      const controls = animate(parseInt(node.textContent?.replace(/,/g, '') || '0', 10), value, {
        duration: 0.8,
        ease: "easeOut",
        onUpdate(val) {
          node.textContent = Math.round(val).toLocaleString();
        }
      });
      return controls.stop;
    }
  }, [value]);

  return <span ref={nodeRef}>{value}</span>;
}

export function CostVisualizer() {
  const [generalsRemoved, setGeneralsRemoved] = useState(1);

  const totalSavings = generalsRemoved * COST_PER_GENERAL;
  const drones = Math.floor(totalSavings / DRONE_COST);
  const nvgs = Math.floor(totalSavings / NVG_COST);
  const radars = Math.floor(totalSavings / RADAR_COST);
  const trucks = Math.floor(totalSavings / PATROL_TRUCK_COST);
  const bonuses = Math.floor(totalSavings / SOLDIER_BONUS_COST);

  return (
    <section>
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-green-100 rounded-lg text-green-700">
          <Calculator size={24} />
        </div>
        <h3 className="text-2xl font-bold text-[#0B1B3D]">
          La Economía Unitaria: El Costo Real del Exceso
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <h4 className="text-lg font-bold text-gray-900 mb-4">Desglose del Gasto Anual por General</h4>
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">
            Un alto mando militar no solo consume un sueldo base. El gasto real del Estado contabiliza un paquete de beneficios que drena el presupuesto operativo:
          </p>
          
          <div className="space-y-3 mb-8">
            <div className="flex justify-between items-center text-sm border-b border-gray-200 pb-2">
              <span className="text-gray-600">Sueldo y compensaciones</span>
              <span className="font-bold text-gray-900">RD$ 2.0M</span>
            </div>
            <div className="flex justify-between items-center text-sm border-b border-gray-200 pb-2">
              <span className="text-gray-600">Vehículo oficial (Depreciación/Mantenimiento)</span>
              <span className="font-bold text-gray-900">RD$ 1.5M</span>
            </div>
            <div className="flex justify-between items-center text-sm border-b border-gray-200 pb-2">
              <span className="text-gray-600">Asignación de combustible</span>
              <span className="font-bold text-gray-900">RD$ 0.5M</span>
            </div>
            <div className="flex justify-between items-center text-sm border-b border-gray-200 pb-2">
              <span className="text-gray-600">Personal de escolta (3-4 soldados desviados)</span>
              <span className="font-bold text-gray-900">RD$ 1.5M</span>
            </div>
            <div className="flex justify-between items-center text-sm pb-2">
              <span className="text-gray-600">Dietas y gastos de representación</span>
              <span className="font-bold text-gray-900">RD$ 0.5M</span>
            </div>
          </div>

          <div className="bg-[#0B1B3D] text-white p-5 rounded-lg shadow-inner">
            <div className="text-sm text-gray-300 uppercase tracking-wider font-semibold mb-1">Costo Operativo Estimado</div>
            <div className="text-3xl font-bold text-[#FBBF24]">~RD$ 6,000,000 <span className="text-lg font-normal text-gray-300">/ año</span></div>
            <div className="text-sm text-gray-400 mt-1">Equivalente a ~$100,000 USD anuales por cada general redundante.</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border-2 border-blue-100 shadow-sm flex flex-col">
          <h4 className="text-lg font-bold text-[#0B1B3D] mb-2">Simulador de Optimización</h4>
          <p className="text-sm text-gray-500 mb-8">Ajusta el control deslizante para ver el impacto de reducir la cúpula militar.</p>
          
          <div className="flex-1 flex flex-col justify-center mb-8">
            <div className="flex justify-between items-end mb-4">
              <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                Generales Removidos
              </label>
              <div className="text-5xl font-black text-blue-600 tabular-nums">
                <AnimatedNumber value={generalsRemoved} />
              </div>
            </div>
            
            <input 
              type="range" 
              min="1" 
              max="134" 
              value={generalsRemoved} 
              onChange={(e) => setGeneralsRemoved(parseInt(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
              <span>1</span>
              <span>134 (Total Actual)</span>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 p-5 rounded-lg text-center">
            <div className="text-sm text-green-800 font-bold uppercase tracking-wider mb-1">Presupuesto Recuperado Anual</div>
            <div className="text-3xl font-black text-green-600 tabular-nums">
              RD$ <AnimatedNumber value={totalSavings / 1000000} /> Millones
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0B1B3D] rounded-xl p-8 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        
        <div className="relative z-10">
          <h4 className="text-2xl font-bold mb-3 text-center">La Métrica de Equivalencia</h4>
          <p className="text-gray-300 text-center mb-10 max-w-3xl mx-auto text-lg">
            Con el presupuesto recuperado de <strong>{generalsRemoved} {generalsRemoved === 1 ? 'general' : 'generales'}</strong> (RD$ {(totalSavings / 1000000).toFixed(1)}M), el Estado podría adquirir <strong>anualmente</strong> cualquiera de los siguientes paquetes de capacidad operativa:
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            <EquivalenceCard 
              icon={<Crosshair size={28} />}
              count={drones}
              title="Drones Tácticos"
              color="text-blue-400"
              delay={0.1}
            />
            <EquivalenceCard 
              icon={<Eye size={28} />}
              count={nvgs}
              title="Kits Visión Nocturna"
              color="text-green-400"
              delay={0.2}
            />
            <EquivalenceCard 
              icon={<Radar size={28} />}
              count={radars}
              title="Radares Fronterizos"
              color="text-yellow-400"
              delay={0.3}
            />
            <EquivalenceCard 
              icon={<Car size={28} />}
              count={trucks}
              title="Camionetas Patrulla"
              color="text-red-400"
              delay={0.4}
            />
            <EquivalenceCard 
              icon={<TrendingUp size={28} />}
              count={bonuses}
              title="Bonos Salariales (Rasos)"
              color="text-purple-400"
              delay={0.5}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function EquivalenceCard({ icon, count, title, color, delay = 0 }: { icon: ReactNode, count: number, title: string, color: string, delay?: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 flex flex-col items-center text-center hover:bg-white/15 transition-colors"
    >
      <div className={`mb-3 ${color}`}>
        {icon}
      </div>
      <motion.div 
        key={count}
        initial={{ scale: 1.2, color: '#FBBF24' }}
        animate={{ scale: 1, color: '#FFFFFF' }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="text-3xl font-black mb-2 tabular-nums"
      >
        <AnimatedNumber value={count} />
      </motion.div>
      <div className="text-xs text-gray-300 font-bold uppercase tracking-wider leading-tight">
        {title}
      </div>
    </motion.div>
  );
}
