import ProblemCard from './ProblemCard';
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, LucideIcon, Filter, ThumbsUp, ThumbsDown, ExternalLink, Search, Rocket, Twitter, Instagram, MessageCircle, Share2 } from 'lucide-react';
import FilterBar from './FilterBar';
import MegaprojectWrapper from './MegaprojectWrapper';
import FuelTaxCalculator from './visualizations/FuelTaxCalculator';
import SchoolDashboard from './visualizations/SchoolDashboard';
import DebtInefficiencyChart from './visualizations/DebtInefficiencyChart';
import GenericSectorChart from './visualizations/GenericSectorChart';
import { useNavigate } from 'react-router-dom';
import { useVoteStore } from '../store/useVoteStore';
import { useProblemFilter } from '../hooks/useProblemFilter';
import { SEOHelmet } from './SEOHelmet';
import { useTranslation } from 'react-i18next';


interface Solution {
  leader: string;
  model: string;
  description: string;
  extendedDescription?: string;
  implementationSteps?: string[];
  expectedOutcomes?: string[];
  chartData?: { name: string; value: number }[];
  imageUrl?: string;
  internalRoute?: string;
}

interface Problem {
  id: string;
  title: string;
  description: string;
  solution: Solution;
  upvotes?: number;
  downvotes?: number;
}

interface Sector {
  id: string;
  title: string;
  icon: LucideIcon;
  overview: string;
  megaproject?: {
    title: string;
    description: string;
    premise?: string;
    details?: string[];
    timeline?: { phase: string; description: string }[];
    partners?: string[];
    imageUrl?: string | string[];
  };
  problems: Problem[];
}

interface SectorViewProps {
  sector: Sector;
}

export default function SectorView({ sector }: SectorViewProps) {
  const { t } = useTranslation();
  const Icon = sector.icon;
  const [visibleItems, setVisibleItems] = useState(10);
  const observerTarget = useRef<HTMLDivElement>(null);

  const { votes, handleVote, initializeVotes } = useVoteStore();

  useEffect(() => {
    initializeVotes(sector.problems.map(p => p.id));
  }, [sector, initializeVotes]);

  const {
    selectedLeader, setSelectedLeader,
    selectedModel, setSelectedModel,
    searchQuery, setSearchQuery,
    sortBy, setSortBy,
    leaders, models,
    filteredProblems
  } = useProblemFilter(sector.problems as any, votes);

  // Reset visible items when filters change
  useEffect(() => {
    setVisibleItems(10);
  }, [selectedLeader, selectedModel, searchQuery, sortBy, sector.id]);

  // Infinite scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleItems((prev) => prev + 10);
        }
      },
      { threshold: 0.1 }
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [visibleItems, filteredProblems.length]);
    
  const paginatedProblems = filteredProblems.slice(0, visibleItems);
  
  return (
    <motion.div 
      key={sector.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="max-w-5xl mx-auto p-4 sm:p-8 md:p-12 bg-[var(--color-gov-light)] min-h-full"
    >
      <SEOHelmet 
        title={`${t(`sectors.${sector.id}.title`, sector.title)} | Reforma Total RD`}
        description={t(`sectors.${sector.id}.overview`, sector.overview)}
      />

      <header className="mb-12 border-b-2 border-gray-200 pb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="inline-flex items-center justify-center p-3 bg-[var(--color-gov-blue)] text-white rounded-md shadow-sm">
            <Icon className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-[var(--color-gov-blue)] tracking-widest uppercase">{t(`sectors.${sector.id}.title`, sector.title)}</h1>
        </div>
        <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mt-4 font-sans">{t(`sectors.${sector.id}.overview`, sector.overview)}</p>
      </header>

      {/* Megaproject Section */}
      {sector.megaproject && (
        <MegaprojectWrapper megaproject={sector.megaproject} />
      )}
      {/* Sector Specific Charts */}
      {sector.id === 'education' && <SchoolDashboard />}
      {sector.id === 'justice' && <DebtInefficiencyChart />}
      {(sector.id === 'energy' || sector.id === 'infrastructure') && <FuelTaxCalculator />}
      {sector.id === 'finance' && (
        <GenericSectorChart
            title="Crecimiento del PIB vs Presión Fiscal"
            description="Impacto de la reducción impositiva y flat-tax en el crecimiento del producto interno bruto y la recaudación formal neta (Curva de Laffer)."
            data={[{name: '2025', Actual: 120, Proyección: 120}, {name: '2027', Actual: 125, Proyección: 145}, {name: '2030', Actual: 132, Proyección: 180}]}
        />
      )}
      {sector.id === 'labor' && (
        <GenericSectorChart
            title="Transición Hacia la Economía Formal"
            description="Proyección de creación de empleos al transicionar del modelo informal a las zonas francas tecnológicas y turismo de alto nivel."
            data={[{name: 'Informal', Actual: 58, Proyección: 22}, {name: 'Formal/Tech', Actual: 15, Proyección: 45}, {name: 'Servicios', Actual: 27, Proyección: 33}]}
            barKey="Actual" lineKey="Proyección"
        />
      )}
      {sector.id === 'gov-efficiency' && (
        <GenericSectorChart
            title="Consolidación de Ministerios (Ahorro Operativo)"
            description="Efecto de la Ley de Ministerios Mínimos en la matriz de gastos fijos del estado (Ahorro de $120,000M RD$ anuales al eliminar ministerios inoperantes)."
            data={[{name: 'Gasto Corriente', Actual: 350, Proyección: 150}, {name: 'Inversión Real', Actual: 150, Proyección: 400}]}
            colors={{bar: '#ef4444', line: '#22c55e'}}
        />
      )}



      <FilterBar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedLeader={selectedLeader}
        setSelectedLeader={setSelectedLeader}
        selectedModel={selectedModel}
        setSelectedModel={setSelectedModel}
        sortBy={sortBy}
        setSortBy={setSortBy}
        leaders={leaders}
        models={models}
      />

      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-gray-200 pb-4 gap-2">
          <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-[var(--color-gov-blue)] tracking-widest uppercase">{t('ui.problemsAndSolutions', 'Problemas Críticos y Soluciones')}</h2>
          <span className="text-xs text-gray-600 font-bold bg-gray-200 px-3 py-1 rounded-sm uppercase tracking-wider font-heading">
            {sortBy === 'net' ? t('ui.sortedByPriority', 'Ordenados por prioridad (votos netos)') : t('ui.sortedByInteraction', 'Ordenados por interacción (votos totales)')}
          </span>
        </div>
        <div className="grid gap-6" aria-live="polite" aria-atomic="false">
          <AnimatePresence mode="popLayout">
            {paginatedProblems.map((problem, idx) => (
              <ProblemCard 
                key={problem.id} 
                problem={problem} 
                index={idx} 
                voteData={votes[problem.id]}
                onVote={(type) => handleVote(problem.id, type)}
              />
            ))}
          </AnimatePresence>

          {visibleItems < filteredProblems.length && (
            <div ref={observerTarget} className="mt-4 flex flex-col gap-4">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="animate-pulse bg-white border border-gray-200 rounded-md p-6 flex items-start gap-4 shadow-sm">
                  <div className="flex flex-col items-center gap-1 bg-gray-50 p-1.5 rounded-sm border border-gray-200 flex-shrink-0">
                    <div className="w-5 h-5 bg-gray-300 rounded"></div>
                    <div className="w-4 h-3 bg-gray-200 rounded"></div>
                    <div className="w-5 h-5 bg-gray-300 rounded"></div>
                  </div>
                  <div className="flex-1 space-y-4 py-1">
                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                    <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded"></div>
                      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {paginatedProblems.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-16 px-4 bg-white/50 border border-dashed border-gray-300 rounded-md shadow-sm"
            >
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="p-4 bg-[var(--color-gov-blue)]/5 rounded-full">
                  <Search className="w-8 h-8 text-[var(--color-gov-blue)] opacity-50" />
                </div>
                <h3 className="text-lg font-heading font-bold text-[var(--color-gov-blue)]">No hay resultados</h3>
                <p className="text-sm text-gray-500 max-w-md font-sans leading-relaxed">
                  No se encontraron problemas que coincidan con los filtros seleccionados. Intenta ajustar tu búsqueda.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );


}
