import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Search, Filter } from 'lucide-react';

interface Term {
  id: string;
  term: string;
  category: string;
  definition: string;
  example: string;
}

const glossaryTerms: Term[] = [
  {
    id: 'zbb',
    term: 'Presupuesto Base Cero (ZBB)',
    category: 'Economía / Finanzas',
    definition: 'Método de elaboración de presupuestos en el que todos los gastos deben justificarse para cada nuevo período. Arranca desde "cero" en lugar de utilizar el presupuesto anterior como base.',
    example: 'En lugar de aumentar el presupuesto del Ministerio un 5% automáticamente, el ministro debe defender cada peso de su nómina.'
  },
  {
    id: 'cesantia-portatil',
    term: 'Cesantía Portátil',
    category: 'Laboral',
    definition: 'Fondo de despido individual que pertenece al trabajador (tipo mochila austriaca). El empleador aporta un porcentaje mensual que el empleado lleva consigo si cambia de trabajo.',
    example: 'Si Juan renuncia a su trabajo y va a otro, su fondo de cesantía le acompaña sin tener que llegar a acuerdos de despido injustificado.'
  },
  {
    id: 'macro-regiones',
    term: 'Macro-Regiones Económicas',
    category: 'Geopolítica / Estado',
    definition: 'Consolidación de múltiples divisiones territoriales pequeñas (ej. provincias) en grandes bloques geográficos basados en eficiencia económica, logística y densidad poblacional.',
    example: 'Las 31 provincias actuales se fusionarían en 7 Macro-Regiones, reduciendo gobernadores y senadores.'
  },
  {
    id: 'vouchers',
    term: 'Vouchers Educativos',
    category: 'Educación',
    definition: 'Subsidio directo del gobierno a los padres para pagar la matrícula de sus hijos en cualquier escuela, pública o privada, incentivando la competencia.',
    example: 'María recibe un certificado escolar por valor de $50,000 pesos anuales y puede usarlo en el colegio privado de su barrio en vez de la escuela pública.'
  },
  {
    id: 'sandbox',
    term: 'Regulatory Sandbox (Caja de Arena)',
    category: 'Tecnología / Negocios',
    definition: 'Espacio de exención regulatoria temporal donde startups innovadoras pueden operar sin cumplir todos los impuestos y burocracias normales hasta probar su viabilidad.',
    example: 'Una empresa de drones de delivery opera sin pagar ITBIS durante 24 meses mientras prueba su modelo de negocio.'
  },
  {
    id: 'smart-contracts',
    term: 'Smart Contracts Estatales',
    category: 'Tecnología / Legal',
    definition: 'Contratos autoejecutables en una cadena de bloques (blockchain) que se cumplen automáticamente cuando se alcanzan sus condiciones sin intervención humana.',
    example: 'El pago a la constructora del puente se libera automáticamente en cuanto un sensor verifica que el cemento fue vertido.'
  }
];

export default function TermGlossary() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const categories = ['Todas', ...new Set(glossaryTerms.map(t => t.category))];

  const filteredTerms = glossaryTerms.filter(t => {
    const matchSearch = t.term.toLowerCase().includes(search.toLowerCase()) || 
                        t.definition.toLowerCase().includes(search.toLowerCase());
    const matchCategory = selectedCategory === 'Todas' || t.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto p-4 sm:p-8 bg-[var(--color-gov-light)] min-h-full"
    >
      <header className="mb-10 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-[var(--color-gov-blue)] text-white rounded-full shadow-lg mb-4">
          <BookOpen className="w-8 h-8" />
        </div>
        <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-[var(--color-gov-blue)] tracking-widest uppercase">Glosario de Reformas</h1>
        <p className="text-gray-600 mt-4 font-sans text-lg">Términos técnicos y políticas públicas explicadas de forma sencilla.</p>
      </header>

      {/* Filters */}
      <div className="mb-8 bg-white p-4 rounded-md shadow-sm border border-gray-200 flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Buscar término..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-[var(--color-gov-blue)] focus:border-[var(--color-gov-blue)] sm:text-sm font-sans"
          />
        </div>
        <div className="sm:w-64 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Filter className="h-5 w-5 text-gray-400" />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-[var(--color-gov-blue)] focus:border-[var(--color-gov-blue)] sm:text-sm font-sans"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Terms Grid */}
      <div className="space-y-4">
        <AnimatePresence>
          {filteredTerms.map((term, idx) => (
            <motion.div
              layout
              key={term.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white p-6 rounded-md shadow-sm border border-gray-200 hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--color-gov-gold)] group-hover:w-2 transition-all"></div>
              <div className="pl-4">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-bold font-heading text-[var(--color-gov-blue)]">{term.term}</h2>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-[var(--color-gov-blue)] uppercase tracking-wider">
                    {term.category}
                  </span>
                </div>
                <p className="text-gray-700 font-sans leading-relaxed text-sm mb-4">
                  {term.definition}
                </p>
                <div className="bg-gray-50 border-l-4 border-gray-300 p-3 text-sm italic font-sans text-gray-600">
                  <span className="font-bold block not-italic text-xs text-gray-400 uppercase tracking-widest mb-1">Ejemplo:</span>
                  "{term.example}"
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {filteredTerms.length === 0 && (
          <div className="text-center py-10 bg-white rounded-md border border-gray-200 shadow-sm">
            <BookOpen className="mx-auto h-12 w-12 text-gray-300 mb-3" />
            <p className="text-gray-500 font-sans">No se encontraron términos que coincidan con tu búsqueda.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
