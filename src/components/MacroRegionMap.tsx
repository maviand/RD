import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Map, ArrowRight } from 'lucide-react';

const macroRegions = [
  { id: '1', name: 'Macro-Región Ozama', color: 'bg-blue-500', provinces: ['Distrito Nacional', 'Santo Domingo'], gdp: '35%' },
  { id: '2', name: 'Macro-Región Cibao Norte', color: 'bg-green-500', provinces: ['Santiago', 'Puerto Plata', 'Espaillat'], gdp: '22%' },
  { id: '3', name: 'Macro-Región Este', color: 'bg-yellow-500', provinces: ['La Altagracia', 'La Romana', 'San Pedro'], gdp: '18%' },
  { id: '4', name: 'Macro-Región Sur Central', color: 'bg-red-500', provinces: ['San Cristóbal', 'Peravia', 'San José de Ocoa'], gdp: '10%' },
  { id: '5', name: 'Macro-Región Cibao Sur', color: 'bg-purple-500', provinces: ['La Vega', 'Monseñor Nouel', 'Sánchez Ramírez'], gdp: '8%' },
  { id: '6', name: 'Macro-Región Enriquillo', color: 'bg-teal-500', provinces: ['Barahona', 'Pedernales', 'Independencia', 'Bahoruco'], gdp: '4%' },
  { id: '7', name: 'Macro-Región Valle', color: 'bg-orange-500', provinces: ['San Juan', 'Elías Piña', 'Azua'], gdp: '3%' },
];

export default function MacroRegionMap() {
  const [view, setView] = useState<'provinces' | 'macros'>('provinces');

  return (
    <div className="bg-white rounded-md border border-gray-200 shadow-sm overflow-hidden mt-8">
      <div className="bg-[var(--color-gov-blue)] p-6 text-white flex justify-between items-center flex-wrap gap-4">
        <div>
          <h3 className="text-xl font-heading font-bold uppercase tracking-wider flex items-center gap-2">
            <Map className="w-6 h-6 text-[var(--color-gov-gold)]" />
            Consolidación Territorial
          </h3>
          <p className="text-sm text-gray-300 font-sans mt-1">Transición de 31 Provincias a 7 Macro-Regiones Económicas</p>
        </div>
        <div className="flex bg-[#001f44] rounded-sm overflow-hidden border border-white/20">
          <button 
            onClick={() => setView('provinces')}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${view === 'provinces' ? 'bg-[var(--color-gov-red)] text-white' : 'text-gray-400 hover:text-white'}`}
          >
            31 Provincias (Actual)
          </button>
          <button 
            onClick={() => setView('macros')}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${view === 'macros' ? 'bg-[var(--color-gov-gold)] text-[var(--color-gov-blue)]' : 'text-gray-400 hover:text-white'}`}
          >
            7 Macro-Regiones (Reforma)
          </button>
        </div>
      </div>

      <div className="p-6 md:p-8 bg-gray-50 flex flex-col md:flex-row gap-8 items-center justify-center min-h-[400px]">
        {/* Visualization Area */}
        <div className="flex-1 w-full relative h-[300px] border-2 border-dashed border-gray-300 rounded-xl bg-white p-4 overflow-hidden flex items-center justify-center">
          
          <AnimatePresence mode="wait">
            {view === 'provinces' ? (
              <motion.div 
                key="provinces"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1, filter: "blur(4px)" }}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap justify-center gap-2 max-w-sm"
              >
                {/* Render 31 small generic dots for provinces */}
                {Array.from({ length: 31 }).map((_, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.02 }}
                    className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-[8px] text-white font-bold"
                  >
                    P{(i+1)}
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="macros"
                initial={{ opacity: 0, scale: 1.1, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap justify-center gap-4 max-w-lg"
              >
                {/* Render 7 large nodes for Macro Regions */}
                {macroRegions.map((macro, i) => (
                  <motion.div 
                    key={macro.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1, type: "spring" }}
                    className={`relative w-24 h-24 rounded-full ${macro.color} shadow-lg flex flex-col items-center justify-center text-white p-2 text-center group cursor-help`}
                  >
                    <span className="font-bold text-xs uppercase">{macro.name.split(' ')[1]}</span>
                    <span className="text-[10px] opacity-80">{macro.gdp} PIB</span>
                    <div className="absolute opacity-0 group-hover:opacity-100 bg-black/90 text-white p-2 rounded text-[10px] bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 pointer-events-none transition-opacity z-10">
                      Incluye: {macro.provinces.join(', ')}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Info Panel */}
        <div className="w-full md:w-1/3 space-y-4">
          <div className="bg-white p-4 rounded-md shadow-sm border border-gray-200">
            <h4 className="font-bold text-[var(--color-gov-blue)] text-sm uppercase mb-2">Burocracia Actual vs Futura</h4>
            
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-gray-600">Senadores:</span>
              <div className="flex items-center gap-2 font-mono">
                <span className="line-through text-red-500">32</span>
                <ArrowRight className="w-3 h-3 text-gray-400" />
                <span className="font-bold text-green-600">14 (2xRegión)</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-gray-600">Gobernadores locales:</span>
              <div className="flex items-center gap-2 font-mono">
                <span className="line-through text-red-500">31</span>
                <ArrowRight className="w-3 h-3 text-gray-400" />
                <span className="font-bold text-green-600">1 (Coordinador)</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Alcaldías/Distritos:</span>
              <div className="flex items-center gap-2 font-mono">
                <span className="line-through text-red-500">393</span>
                <ArrowRight className="w-3 h-3 text-gray-400" />
                <span className="font-bold text-green-600">~50</span>
              </div>
            </div>
          </div>
          
          <p className="text-xs text-gray-500 font-sans leading-relaxed">
            La transición ahorra millones anuales en fondos corruptivos clientelares ("Barrilito"), unificando el desarrollo económico en vías maestras (Ej: Hub Logístico Ozama o Clúster Agrícola Valle).
          </p>
        </div>
      </div>
    </div>
  );
}
