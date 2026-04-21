import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Calendar, ChevronRight, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  reformaFix: string;
  type: 'problem' | 'reform';
}

const events: TimelineEvent[] = [
  {
    year: '1990-2000',
    title: 'Fragmentación Institucional',
    description: 'Creación de decenas de ministerios y comisiones sin propósito, aumentando la nómina pública para fines clientelares.',
    reformaFix: 'Consolidación de 24 a 8 ministerios, implementando la "Ley de Ministerios Mínimos" y cerrando instituciones redundantes.',
    type: 'problem'
  },
  {
    year: '2001-2010',
    title: 'Crisis de la Deuda Social',
    description: 'Aumento significativo del presupuesto en infraestructura sin la debida transparencia, resultando en deuda nacional sin impacto social equitativo.',
    reformaFix: 'Presupuesto Base Cero (ZBB) global, donde cada peso debe justificarse anualmente sin incrementos automáticos.',
    type: 'problem'
  },
  {
    year: '2012',
    title: 'Aprobación 4% para la Educación',
    description: 'Aumento histórico en la financiación de escuelas que, lamentablemente, se enfocó en ladrillos e insumos, no en calidad docente.',
    reformaFix: 'Vouchers educativos universales y evaluación de maestros con despido por bajo rendimiento consecutivo.',
    type: 'problem'
  },
  {
    year: '2020-2023',
    title: 'Inflación y Crisis de Controles',
    description: 'Aumento exacerbado del costo de vida con esquemas de subsidio ineficientes (asistencia masiva, bono gas) con alta tasa de fraude.',
    reformaFix: 'Monedero Digital Ciudadano único, atado a biometría, sin intermediarios políticos.',
    type: 'problem'
  },
  {
    year: '2026',
    title: 'El Año de la Reforma Total',
    description: 'Plazo conceptual estimado para la implementación del modelo propuesto en esta plataforma, comenzando con una reforma constitucional profunda.',
    reformaFix: 'Abolición de 31 provincias en favor de 7 Macro-Regiones, auditorías de IA y soterramiento de cables a nivel nacional.',
    type: 'reform'
  }
];

export default function HistoricalTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto p-4 sm:p-8 bg-[#f8fafc] min-h-full"
    >
      <header className="mb-16 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-[var(--color-gov-red)] text-white rounded-full shadow-lg mb-4">
          <Calendar className="w-8 h-8" />
        </div>
        <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-[var(--color-gov-blue)] tracking-widest uppercase">Línea de Tiempo</h1>
        <p className="text-gray-600 mt-4 font-sans text-lg">Contexto histórico de la República Dominicana y la intervención de la Reforma.</p>
      </header>

      <div ref={containerRef} className="relative pb-24">
        {/* Animated Central Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform md:-translate-x-1/2">
          <motion.div 
            style={{ height: lineHeight }} 
            className="w-full bg-gradient-to-b from-[var(--color-gov-red)] to-[var(--color-gov-gold)] origin-top"
          />
        </div>

        <div className="space-y-12">
          {events.map((event, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div key={idx} className={`relative flex items-center justify-between md:justify-normal ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Node icon */}
                <div className="absolute left-8 md:left-1/2 w-8 h-8 rounded-full bg-white border-4 border-[var(--color-gov-blue)] transform -translate-x-1/2 md:translate-x-[-50%] flex items-center justify-center z-10 shadow-lg">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-gov-red)]" />
                </div>

                {/* Empty space for alternating layout on desktop */}
                <div className="hidden md:block w-5/12"></div>

                {/* Content Card */}
                <motion.div 
                  initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className="w-full ml-16 md:ml-0 md:w-5/12 mr-0"
                >
                  <div className={`p-6 rounded-lg shadow-md border-t-4 bg-white relative ${event.type === 'reform' ? 'border-[var(--color-gov-gold)]' : 'border-[var(--color-gov-red)]'}`}>
                    
                    {/* Arrow pointing to node - Desktop */}
                    <div className={`hidden md:block absolute top-6 w-0 h-0 border-y-8 border-y-transparent ${isLeft ? 'left-[-8px] border-r-8 border-r-white' : 'right-[-8px] border-l-8 border-l-white'}`}></div>
                    {/* Arrow pointing to node - Mobile */}
                    <div className="md:hidden absolute top-6 left-[-8px] w-0 h-0 border-y-8 border-y-transparent border-r-8 border-r-white"></div>
                    
                    <span className="inline-block px-3 py-1 bg-gray-100 text-[var(--color-gov-blue)] font-bold font-mono text-sm rounded-sm mb-3">
                      {event.year}
                    </span>
                    <h3 className="text-xl font-bold font-heading text-[var(--color-gov-blue)] mb-2 uppercase">{event.title}</h3>
                    
                    <div className="flex gap-3 mb-4">
                      {event.type === 'problem' ? (
                        <AlertTriangle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                      ) : (
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      )}
                      <p className="text-gray-600 text-sm font-sans leading-relaxed">
                        {event.description}
                      </p>
                    </div>

                    <div className="bg-[var(--color-gov-blue)]/5 p-4 rounded-sm border-l-2 border-[var(--color-gov-blue)]">
                      <div className="flex items-center gap-2 mb-2">
                        <ChevronRight className="w-4 h-4 text-[var(--color-gov-blue)]" />
                        <span className="font-bold text-[var(--color-gov-blue)] text-xs uppercase tracking-widest font-heading">
                          Enfoque de la Reforma
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 font-sans leading-relaxed">
                        {event.reformaFix}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
