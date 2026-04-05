/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Menu, ArrowUp } from 'lucide-react';
import { sectors } from './data';
import Sidebar from './components/Sidebar';
import SectorView from './components/SectorView';
import HomeView from './components/HomeView';
import ProjectionsView from './components/ProjectionsView';
import NewCitiesView from './components/NewCitiesView';
import GastoMilitarView from './components/external/GastoMilitar';
import GabinetesView from './components/external/Gabinetes';
import ReorganizacionTerritorialView from './components/external/ReorganizacionTerritorial';

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  // Extract sectorId from hash path (e.g., /salud -> salud)
  const currentPath = location.pathname.substring(1);
  const isHome = currentPath === '' || currentPath === 'home';
  const isProjections = currentPath === 'proyecciones';
  const isNewCities = currentPath === 'nuevas-ciudades';
  const isExternalRoute = currentPath === 'gasto-militar' || currentPath === 'gabinetes' || currentPath === 'reorganizacion-territorial';
  const activeSectorId = (isHome || isProjections || isNewCities || isExternalRoute) ? '' : (sectors.find(s => s.id === currentPath)?.id || '');
  const activeSector = sectors.find(s => s.id === activeSectorId);

  // Redirect to home if invalid path
  useEffect(() => {
    if (!isHome && !isProjections && !isNewCities && !isExternalRoute && !sectors.find(s => s.id === currentPath)) {
      navigate('/', { replace: true });
    }
  }, [currentPath, isHome, isProjections, isNewCities, isExternalRoute, navigate]);

  // Scroll to top when sector changes
  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSectorId, isHome]);

  const handleScroll = () => {
    if (mainRef.current) {
      setShowBackToTop(mainRef.current.scrollTop > 300);
    }
  };

  const scrollToTop = () => {
    mainRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900 font-sans overflow-hidden">
      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-30 transform md:relative md:translate-x-0 transition duration-200 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar 
          sectors={sectors} 
          activeSectorId={activeSectorId} 
          onSelect={(id) => {
            navigate(`/${id}`);
            setIsSidebarOpen(false);
          }}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>

      {/* Main content */}
      <main 
        ref={mainRef}
        onScroll={handleScroll}
        className="flex-1 flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 relative"
      >
        {/* Mobile header */}
        <header className="md:hidden bg-[var(--color-gov-blue)] text-white p-4 flex items-center justify-between shadow-md z-10 flex-shrink-0 sticky top-0">
          <div 
            className="flex items-center gap-3 min-w-0 cursor-pointer"
            onClick={() => {
              navigate('/');
              setIsSidebarOpen(false);
            }}
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_the_Dominican_Republic.svg/1280px-Flag_of_the_Dominican_Republic.svg.png" 
              alt="Bandera de la República Dominicana" 
              className="w-8 h-auto rounded-sm flex-shrink-0"
            />
            <h1 className="text-sm font-heading font-extrabold uppercase tracking-widest truncate">
              Reforma <span className="text-[var(--color-gov-gold)]">Total RD</span>
            </h1>
          </div>
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 -mr-2 text-white hover:bg-white/10 rounded-md"
          >
            <Menu className="w-6 h-6" />
          </button>
        </header>

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomeView sectors={sectors} />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/proyecciones" element={<ProjectionsView />} />
            <Route path="/nuevas-ciudades" element={<NewCitiesView />} />
            <Route path="/gasto-militar" element={<GastoMilitarView />} />
            <Route path="/gabinetes" element={<GabinetesView />} />
            <Route path="/reorganizacion-territorial" element={<ReorganizacionTerritorialView />} />
            {activeSector && (
              <Route path="/:sectorId" element={<SectorView sector={activeSector} />} />
            )}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          
          {/* Disclaimer Footer */}
          <footer className="w-full bg-gray-50 border-t border-gray-200 mt-12 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-xs md:text-sm text-gray-500 font-mono tracking-wide leading-relaxed">
                <strong>AVISO IMPORTANTE:</strong> Esta plataforma es un modelo académico, conceptual e independiente diseñado para visualizar ideas de políticas públicas. <br className="hidden md:block" />No guarda afiliación, no está respaldado, ni representa a ninguna institución del Gobierno de la República Dominicana ni de ningún otro estado. Este sitio web no recopila información personal.
              </p>
            </div>
          </footer>
        </div>

        {/* Back to top button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 bg-[var(--color-gov-red)] text-white rounded-full shadow-lg hover:bg-[#a00d1d] hover:scale-110 transition-all duration-200 z-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-gov-red)]"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        )}
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter basename="/RD">
      <AppContent />
    </BrowserRouter>
  );
}
