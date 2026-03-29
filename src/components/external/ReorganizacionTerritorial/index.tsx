import DominicanRepublicMap from './components/DominicanRepublicMap';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] font-sans">
      {/* Header Hero */}
      <header className="bg-[#002855] text-white px-8 py-12 relative overflow-hidden">
        {/* Subtle Background Pattern/Watermark */}
        <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
          <div className="w-[800px] h-[800px] border-[100px] border-white rounded-full"></div>
          <div className="absolute w-[1000px] h-[200px] bg-white transform rotate-45"></div>
          <div className="absolute w-[1000px] h-[200px] bg-white transform -rotate-45"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase">
            Reorganización <span className="text-[#FBBF24]">Territorial</span>
          </h1>
        </div>
      </header>

      {/* Content Area */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          {/* Map Section */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden flex">
            <div className="w-1.5 bg-[#CE1126] flex-shrink-0"></div>
            <div className="p-6 md:p-10 w-full">
              <p className="text-slate-600 mb-8 text-center max-w-3xl mx-auto text-lg">
                Explora la propuesta de consolidación de las 31 provincias y el Distrito Nacional en 10 mega-regiones estratégicas para optimizar la administración pública y la distribución de recursos.
              </p>
              <div className="w-full">
                <DominicanRepublicMap />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
