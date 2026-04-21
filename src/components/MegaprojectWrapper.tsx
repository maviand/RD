import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Rocket } from 'lucide-react';

interface MegaprojectProps {
  megaproject: any;
}

export default function MegaprojectWrapper({ megaproject }: MegaprojectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="relative mb-12 bg-gradient-to-br from-[var(--color-gov-blue)] to-[#001f44] rounded-md p-6 sm:p-10 text-white shadow-[0_0_30px_rgba(0,47,108,0.3)] overflow-hidden border-t-4 border-[var(--color-gov-red)] ring-1 ring-white/10">
      
      {/* Animated BG elements */}
      <motion.div style={{ y: yBackground }} className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -mr-20 -mt-20"></motion.div>
      <motion.div style={{ y: yBackground }} className="absolute bottom-0 left-0 w-48 h-48 bg-[var(--color-gov-gold)] opacity-5 rounded-full blur-3xl -ml-10 -mb-10"></motion.div>
      
      <motion.div style={{ opacity: opacityText }} className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-[var(--color-gov-gold)]/20 rounded-md border border-[var(--color-gov-gold)]/30">
            <Rocket className="w-6 h-6 text-[var(--color-gov-gold)]" />
          </div>
          <span className="px-3 py-1 bg-[var(--color-gov-gold)] text-[var(--color-gov-blue)] text-xs font-bold uppercase tracking-widest rounded-sm shadow-sm">
            Proyecto de Estado (Megaproyecto)
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-extrabold mb-6 tracking-widest uppercase text-white break-words leading-tight">{megaproject.title}</h2>
        
        {megaproject.premise && (
          <div className="mb-8 bg-white/5 p-6 rounded-md border-l-4 border-[var(--color-gov-gold)] shadow-inner">
            <h3 className="text-[var(--color-gov-gold)] font-heading font-bold mb-3 text-xs uppercase tracking-widest">La Premisa</h3>
            <p className="text-white text-sm leading-relaxed font-sans">{megaproject.premise}</p>
          </div>
        )}
        
        <p className="text-base md:text-lg text-gray-200 mb-6 leading-relaxed font-sans">
          {megaproject.description}
        </p>

        {megaproject.imageUrl && (
          <div className={`mb-8 grid gap-4 ${Array.isArray(megaproject.imageUrl) ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
            {Array.isArray(megaproject.imageUrl) 
              ? megaproject.imageUrl.map((url: string, idx: number) => (
                  <motion.div style={{ y: yImage }} key={idx} className="flex justify-center bg-black/20 rounded-lg p-2 ring-1 ring-white/10">
                    <img src={url} alt={`${megaproject?.title} - Visualización ${idx + 1}`} className="max-h-[500px] w-full object-cover sm:object-contain rounded shadow-lg" />
                  </motion.div>
                ))
              : (
                <motion.div style={{ y: yImage }} className="flex justify-center bg-black/20 rounded-lg p-2 ring-1 ring-white/10">
                  <img src={megaproject.imageUrl} alt={megaproject.title} className="max-h-[500px] w-full object-cover sm:object-contain rounded shadow-lg" />
                </motion.div>
              )
            }
          </div>
        )}

        {megaproject.details && megaproject.details.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {megaproject.details.map((detail: string, idx: number) => (
              <div key={idx} className="flex items-start gap-3 bg-white/5 p-4 rounded-md">
                <div className="w-2 h-2 rounded-sm bg-[var(--color-gov-gold)] mt-2 flex-shrink-0"></div>
                <p className="text-gray-200 text-xs leading-relaxed font-sans">{detail}</p>
              </div>
            ))}
          </div>
        )}

        {megaproject.timeline && megaproject.timeline.length > 0 && (
          <div className="mt-8 bg-white/5 p-6 rounded-md border border-white/10">
            <h3 className="text-[var(--color-gov-gold)] font-heading font-bold mb-4 text-xs uppercase tracking-widest">Cronograma de Implementación</h3>
            <div className="space-y-4">
              {megaproject.timeline.map((item: any, idx: number) => (
                <div key={idx} className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <div className="w-24 flex-shrink-0 text-white font-bold text-xs font-sans">{item.phase}</div>
                  <div className="text-gray-300 text-xs leading-relaxed font-sans">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {megaproject.partners && megaproject.partners.length > 0 && (
          <div className="mt-6 bg-white/5 p-6 rounded-md border border-white/10">
            <h3 className="text-[var(--color-gov-gold)] font-heading font-bold mb-4 text-xs uppercase tracking-widest">Socios Clave</h3>
            <div className="flex flex-wrap gap-2">
              {megaproject.partners.map((partner: string, idx: number) => (
                <span key={idx} className="px-3 py-1.5 bg-white/10 text-white text-[10px] font-medium rounded-sm border border-white/20 uppercase tracking-wider">
                  {partner}
                </span>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
