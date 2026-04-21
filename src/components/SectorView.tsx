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
  const Icon = sector.icon;
  const [selectedLeader, setSelectedLeader] = useState<string>('Todos');
  const [selectedModel, setSelectedModel] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'net' | 'total'>('net');
  const [votes, setVotes] = useState<Record<string, { up: number; down: number; userVote: 'up' | 'down' | null }>>({});
  const [visibleItems, setVisibleItems] = useState(10);
  const observerTarget = useRef<HTMLDivElement>(null);

  // Initialize votes from data and localStorage
  useEffect(() => {
    const storedVotesStr = localStorage.getItem('reforma_votes');
    const storedVotes = storedVotesStr ? JSON.parse(storedVotesStr) : {};

    const initialVotes: Record<string, { up: number; down: number; userVote: 'up' | 'down' | null }> = {};
    sector.problems.forEach(p => {
      initialVotes[p.id] = storedVotes[p.id] || {
        up: 0,
        down: 0,
        userVote: null
      };
    });
    setVotes(initialVotes);
  }, [sector]);

  // Reset visible items when filters change
  useEffect(() => {
    setVisibleItems(10);
  }, [selectedLeader, selectedModel, searchQuery, sortBy, sector.id]);

  const handleVote = (problemId: string, type: 'up' | 'down') => {
    setVotes(prev => {
      const current = prev[problemId];
      if (!current) return prev;

      let newUp = current.up;
      let newDown = current.down;
      let newUserVote = current.userVote;

      if (current.userVote === type) {
        // Remove vote
        newUserVote = null;
        if (type === 'up') newUp--;
        else newDown--;
      } else {
        // Change or add vote
        if (current.userVote === 'up') newUp--;
        if (current.userVote === 'down') newDown--;
        
        newUserVote = type;
        if (type === 'up') newUp++;
        else newDown++;
      }

      const newState = { ...prev, [problemId]: { up: newUp, down: newDown, userVote: newUserVote } };
      
      // Persist to localStorage
      const storedVotesStr = localStorage.getItem('reforma_votes');
      const storedVotes = storedVotesStr ? JSON.parse(storedVotesStr) : {};
      localStorage.setItem('reforma_votes', JSON.stringify({ ...storedVotes, [problemId]: newState[problemId] }));

      return newState;
    });
  };

  const leaders = ['Todos', ...new Set(sector.problems.map(p => p.solution.leader))];
  const models = ['Todos', ...new Set(sector.problems.map(p => p.solution.model))];

  const filteredProblems = sector.problems
    .filter(p => {
      const matchLeader = selectedLeader === 'Todos' || p.solution.leader === selectedLeader;
      const matchModel = selectedModel === 'Todos' || p.solution.model === selectedModel;
      const matchSearch = searchQuery === '' || 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.solution.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchLeader && matchModel && matchSearch;
    })
    .sort((a, b) => {
      const upA = votes[a.id]?.up || 0;
      const downA = votes[a.id]?.down || 0;
      const upB = votes[b.id]?.up || 0;
      const downB = votes[b.id]?.down || 0;
      
      if (sortBy === 'total') {
        const totalA = upA + downA;
        const totalB = upB + downB;
        return totalB - totalA;
      } else {
        const scoreA = upA - downA;
        const scoreB = upB - downB;
        return scoreB - scoreA;
      }
    });

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
      <header className="mb-12 border-b-2 border-gray-200 pb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="inline-flex items-center justify-center p-3 bg-[var(--color-gov-blue)] text-white rounded-md shadow-sm">
            <Icon className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-[var(--color-gov-blue)] tracking-widest uppercase">{sector.title}</h1>
        </div>
        <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mt-4 font-sans">{sector.overview}</p>
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



      <div className="mb-8 bg-white p-5 rounded-md border border-gray-200 shadow-sm flex flex-col md:flex-row gap-4 items-center">
        <div className="flex items-center gap-2 text-[var(--color-gov-blue)] text-sm font-bold uppercase tracking-wider whitespace-nowrap font-heading">
          <Filter className="w-5 h-5" />
          <span>Filtrar por:</span>
        </div>
        <div className="flex flex-1 flex-col md:flex-row gap-4 w-full">
          <div className="flex-1 relative">
            <label className="block text-[10px] text-gray-500 mb-1 uppercase tracking-wider font-bold font-heading">Búsqueda</label>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text"
                placeholder="Buscar palabras clave..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-sm focus:ring-[var(--color-gov-blue)] focus:border-[var(--color-gov-blue)] block pl-9 p-2.5 outline-none font-sans"
              />
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-[10px] text-gray-500 mb-1 uppercase tracking-wider font-bold font-heading">Líder</label>
            <select 
              value={selectedLeader}
              onChange={(e) => setSelectedLeader(e.target.value)}
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-sm focus:ring-[var(--color-gov-blue)] focus:border-[var(--color-gov-blue)] block p-2.5 outline-none font-sans"
            >
              {leaders.map(leader => (
                <option key={leader} value={leader}>{leader}</option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-[10px] text-gray-500 mb-1 uppercase tracking-wider font-bold font-heading">Modelo</label>
            <select 
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-sm focus:ring-[var(--color-gov-blue)] focus:border-[var(--color-gov-blue)] block p-2.5 outline-none font-sans"
            >
              {models.map(model => (
                <option key={model} value={model}>{model}</option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-[10px] text-gray-500 mb-1 uppercase tracking-wider font-bold font-heading">Ordenar por</label>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'net' | 'total')}
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-sm focus:ring-[var(--color-gov-blue)] focus:border-[var(--color-gov-blue)] block p-2.5 outline-none font-sans"
            >
              <option value="net">Prioridad (Votos netos)</option>
              <option value="total">Interacción (Votos totales)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-gray-200 pb-4 gap-2">
          <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-[var(--color-gov-blue)] tracking-widest uppercase">Problemas Críticos y Soluciones</h2>
          <span className="text-xs text-gray-600 font-bold bg-gray-200 px-3 py-1 rounded-sm uppercase tracking-wider font-heading">
            {sortBy === 'net' ? 'Ordenados por prioridad (votos netos)' : 'Ordenados por interacción (votos totales)'}
          </span>
        </div>
        <div className="grid gap-6">
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
