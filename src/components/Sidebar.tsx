import { motion } from 'motion/react';
import { LucideIcon, TrendingUp } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

interface Sector {
  id: string;
  title: string;
  icon: LucideIcon;
}

interface SidebarProps {
  sectors: Sector[];
  activeSectorId: string;
  onSelect: (id: string) => void;
  onClose?: () => void;
}

export default function Sidebar({ sectors, activeSectorId, onSelect, onClose }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  
  const isProjections = location.pathname === '/proyecciones';
  const isNewCities = location.pathname === '/nuevas-ciudades';
  const isGlossary = location.pathname === '/glosario';
  const isTimeline = location.pathname === '/linea-tiempo';

  return (
    <aside className="w-72 bg-[var(--color-gov-blue)] border-r border-[#001f44] flex flex-col h-full shadow-xl z-10 relative text-white">
      <div 
        className="p-8 border-b border-white/10 flex flex-col items-center text-center cursor-pointer hover:bg-white/5 transition-colors"
        onClick={() => {
          navigate('/');
          if (onClose) onClose();
        }}
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_the_Dominican_Republic.svg/1280px-Flag_of_the_Dominican_Republic.svg.png" 
          alt="Bandera de la República Dominicana" 
          className="w-20 h-auto mb-5 rounded-sm shadow-md border border-white/20"
        />
        <h1 className="text-2xl font-heading font-extrabold text-white leading-tight tracking-widest uppercase">
          Reforma<br />
          <span className="text-[var(--color-gov-gold)]">Total RD</span>
        </h1>
        <div className="w-12 h-1 bg-[var(--color-gov-red)] mt-4 mb-4"></div>
        <LanguageSwitcher />
      </div>
      <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2 scrollbar-thin scrollbar-thumb-white/20">
        <button
          onClick={() => onSelect('proyecciones')}
          title="Ver proyecciones de impacto"
          className={`w-full flex items-center gap-4 px-4 py-3 rounded-md text-left transition-all duration-200 group text-sm font-heading font-semibold uppercase tracking-wide ${
            isProjections 
              ? 'bg-white/10 text-white border-l-4 border-[var(--color-gov-gold)]' 
              : 'text-white/70 hover:bg-white/5 hover:text-white border-l-4 border-transparent'
          }`}
        >
          <TrendingUp className={`w-5 h-5 transition-colors ${isProjections ? 'text-[var(--color-gov-gold)]' : 'text-white/50'}`} />
          {t('nav.projections', 'Proyecciones')}
        </button>
        
        <button
          onClick={() => onSelect('nuevas-ciudades')}
          title="Ver nuevas ciudades y polos de desarrollo"
          className={`w-full flex items-center gap-4 px-4 py-3 rounded-md text-left transition-all duration-200 group text-sm font-heading font-semibold uppercase tracking-wide mb-4 ${
            isNewCities 
              ? 'bg-white/10 text-white border-l-4 border-[var(--color-gov-gold)]' 
              : 'text-white/70 hover:bg-white/5 hover:text-white border-l-4 border-transparent'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-colors ${isNewCities ? 'text-[var(--color-gov-gold)]' : 'text-white/50'}`}><path d="M4 10v11"/><path d="M4 14h16"/><path d="M20 10v11"/><path d="M2 10l10-7 10 7"/><path d="M10 21v-7a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v7"/></svg>
          {t('nav.newCities', 'Nuevas Ciudades')}
        </button>
        
        <button
          onClick={() => onSelect('glosario')}
          title="Ver glosario de términos"
          className={`w-full flex items-center gap-4 px-4 py-3 rounded-md text-left transition-all duration-200 group text-sm font-heading font-semibold uppercase tracking-wide mb-4 ${
            isGlossary 
              ? 'bg-white/10 text-white border-l-4 border-[var(--color-gov-gold)]' 
              : 'text-white/70 hover:bg-white/5 hover:text-white border-l-4 border-transparent'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-colors ${isGlossary ? 'text-[var(--color-gov-gold)]' : 'text-white/50'}`}><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
          {t('nav.glossary', 'Glosario')}
        </button>
        
        <button
          onClick={() => onSelect('linea-tiempo')}
          title="Ver Línea de Tiempo Histórica"
          className={`w-full flex items-center gap-4 px-4 py-3 rounded-md text-left transition-all duration-200 group text-sm font-heading font-semibold uppercase tracking-wide mb-4 ${
            isTimeline 
              ? 'bg-white/10 text-white border-l-4 border-[var(--color-gov-gold)]' 
              : 'text-white/70 hover:bg-white/5 hover:text-white border-l-4 border-transparent'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-colors ${isTimeline ? 'text-[var(--color-gov-gold)]' : 'text-white/50'}`}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="m9 16 2 2 4-4"/></svg>
          {t('nav.timeline', 'Línea de Tiempo')}
        </button>
        
        <div className="text-xs font-bold text-white/40 uppercase tracking-widest px-4 mb-2 mt-4">Sectores</div>
        {sectors.map((sector) => {
          const Icon = sector.icon;
          const isActive = sector.id === activeSectorId;
          return (
            <button
              key={sector.id}
              onClick={() => onSelect(sector.id)}
              title={`Explorar problemas y soluciones en el sector de ${sector.title}`}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-md text-left transition-all duration-200 group text-sm font-heading font-semibold uppercase tracking-wide ${
                isActive 
                  ? 'bg-white/10 text-white border-l-4 border-[var(--color-gov-gold)]' 
                  : 'text-white/70 hover:bg-white/5 hover:text-white border-l-4 border-transparent'
              }`}
            >
              <Icon className={`w-5 h-5 transition-colors ${isActive ? 'text-[var(--color-gov-gold)]' : 'text-white/50'}`} />
              {t(`sectors.${sector.id}.title`, sector.title)}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
