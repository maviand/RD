import { useState } from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, Users, Info, ChevronRight, ShieldAlert } from 'lucide-react';

const data = [
  {
    id: 'generals',
    name: 'Cúpula (Generales / Almirantes)',
    DR: 134,
    NATO: 45,
    anomaly: '+89 Generales. Casi el triple del límite máximo táctico recomendado.',
    drLabel: '134 activos',
    natoLabel: '~40 a 50',
    isSignificant: true,
    description: 'La cúpula estratégica. En ejércitos modernos, los generales son escasos y dirigen grandes divisiones. En RD, la proliferación crea "generales de escritorio" sin tropas a su mando, inflando la nómina y burocratizando las decisiones operativas.',
    max: 150
  },
  {
    id: 'superiors',
    name: 'Oficiales Superiores',
    DR: 12000,
    NATO: 3000,
    anomaly: '+9,000 Oficiales. Un exceso burocrático masivo en posiciones de escritorio.',
    drLabel: '~12,000',
    natoLabel: '~3,000',
    isSignificant: true,
    description: 'Coroneles y Mayores. Este es el estrato con mayor inflación. Se utilizan los ascensos como recompensa política o por antigüedad, sin correlación con las necesidades tácticas reales de las Fuerzas Armadas.',
    max: 15000
  },
  {
    id: 'subalterns',
    name: 'Oficiales Subalternos',
    DR: 13500,
    NATO: 6800,
    anomaly: '+6,700 Oficiales. Demasiados mandos intermedios para la cantidad de soldados.',
    drLabel: '~13,500',
    natoLabel: '~6,800',
    isSignificant: true,
    description: 'Capitanes y Tenientes. Aunque la brecha es menor que en los rangos superiores, sigue habiendo una desproporción que genera cuellos de botella en la cadena de mando y diluye la responsabilidad.',
    max: 15000
  },
  {
    id: 'troops',
    name: 'Tropa Operativa',
    DR: 35900,
    NATO: 51650,
    anomaly: 'Déficit de ~15,750 soldados operacionales.',
    drLabel: '~35,900 (58%)',
    natoLabel: '~51,650 (84%)',
    isSignificant: true,
    description: 'Sargentos, Cabos y Rasos. La base de la pirámide. Mientras sobran jefes, faltan los soldados que realmente patrullan la frontera, realizan rescates y ejecutan las misiones tácticas.',
    max: 60000
  },
];

function MiniGraph({ dr, nato, max, drLabel, natoLabel }: { dr: number, nato: number, max: number, drLabel: string, natoLabel: string }) {
  const [showDR, setShowDR] = useState(true);
  const [showNATO, setShowNATO] = useState(true);

  const drPercent = (dr / max) * 100;
  const natoPercent = (nato / max) * 100;

  return (
    <div className="mt-6 space-y-4">
      <div>
        <div 
          className={`flex justify-between text-sm font-bold mb-1.5 cursor-pointer transition-opacity select-none ${!showDR ? 'opacity-50' : 'opacity-100'}`}
          onClick={(e) => { e.stopPropagation(); setShowDR(!showDR); }}
        >
          <span className="text-[#0B1B3D] flex items-center gap-2 hover:underline">
            <div className={`w-2 h-2 rounded-full transition-colors ${showDR ? 'bg-[#0B1B3D]' : 'bg-gray-400'}`}></div>
            República Dominicana
          </span>
          <span className="text-[#0B1B3D]">{drLabel}</span>
        </div>
        <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden shadow-inner">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: showDR ? `${drPercent}%` : '0%' }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-full bg-[#0B1B3D] rounded-full relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 w-full h-full" style={{ transform: 'skewX(-45deg) translateX(-150%)', animation: 'shimmer 2s infinite' }}></div>
          </motion.div>
        </div>
      </div>
      <div>
        <div 
          className={`flex justify-between text-sm font-bold mb-1.5 cursor-pointer transition-opacity select-none ${!showNATO ? 'opacity-50' : 'opacity-100'}`}
          onClick={(e) => { e.stopPropagation(); setShowNATO(!showNATO); }}
        >
          <span className="text-blue-600 flex items-center gap-2 hover:underline">
            <div className={`w-2 h-2 rounded-full transition-colors ${showNATO ? 'bg-blue-500' : 'bg-gray-400'}`}></div>
            Estándar OTAN
          </span>
          <span className="text-blue-600">{natoLabel}</span>
        </div>
        <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden shadow-inner">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: showNATO ? `${natoPercent}%` : '0%' }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-full bg-blue-500 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export function ComparisonSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-100 rounded-lg text-[#0B1B3D]">
          <Users size={24} />
        </div>
        <h3 className="text-2xl font-bold text-[#0B1B3D]">
          Análisis de la Pirámide de Mando: RD vs. OTAN
        </h3>
      </div>
      
      <p className="text-gray-600 mb-4 text-lg leading-relaxed">
        La estructura militar dominicana sufre de <strong>macrocefalia</strong>: una cúpula desproporcionadamente grande sostenida por una base operativa insuficiente. A continuación, desglosamos la disparidad nivel por nivel frente al estándar de la OTAN para una fuerza de ~61,500 efectivos.
      </p>
      
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-8 flex items-start gap-3">
        <Info className="text-blue-600 shrink-0 mt-0.5" size={20} />
        <p className="text-sm text-blue-800">
          <strong>Interactividad:</strong> Haz clic en cualquier tarjeta para expandir el análisis detallado de ese estrato militar.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        {data.map((item, index) => {
          const isExpanded = expandedId === item.id;
          
          return (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={item.id}
              onClick={() => setExpandedId(isExpanded ? null : item.id)}
              className={`bg-white rounded-xl border-2 transition-all cursor-pointer overflow-hidden ${
                isExpanded ? 'border-[#0B1B3D] shadow-lg' : 'border-gray-200 shadow-sm hover:border-blue-300 hover:shadow-md'
              }`}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold text-gray-900">{item.name}</h4>
                  <motion.div
                    animate={{ rotate: isExpanded ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-gray-400"
                  >
                    <ChevronRight size={24} />
                  </motion.div>
                </div>
                
                <MiniGraph 
                  dr={item.DR} 
                  nato={item.NATO} 
                  max={item.max} 
                  drLabel={item.drLabel} 
                  natoLabel={item.natoLabel} 
                />

                <motion.div 
                  initial={false}
                  animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0, marginTop: isExpanded ? 24 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className={`flex items-start gap-3 p-4 rounded-lg border ${
                      item.isSignificant ? 'bg-red-50 border-red-100 text-red-800' : 'bg-orange-50 border-orange-100 text-orange-800'
                    }`}>
                      <div className="relative shrink-0 mt-0.5">
                        {item.isSignificant && (
                          <span className="absolute inset-0 rounded-full bg-red-400 opacity-75 animate-ping"></span>
                        )}
                        <ShieldAlert size={20} className={`relative z-10 ${item.isSignificant ? 'text-red-600' : 'text-orange-600'}`} />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider opacity-70 block mb-1">La Anomalía Estructural</span>
                        <span className="text-sm font-medium">{item.anomaly}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
