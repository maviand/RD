import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Leaf, Twitter, Instagram, MessageCircle, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import HomepageDashboard from './HomepageDashboard';

interface Sector {
  id: string;
  title: string;
  icon: any;
  overview: string;
  megaproject?: {
    title: string;
    description: string;
  };
  problems: any[];
}

interface HomeViewProps {
  sectors: Sector[];
}

export default function HomeView({ sectors }: HomeViewProps) {
  const navigate = useNavigate();
  const agricultureSector = sectors.find(s => s.id === 'agriculture');

  return (
    <div className="min-h-full bg-gray-50 pb-12">
      {/* Hero Section */}
      <div className="bg-[var(--color-gov-blue)] text-white py-16 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_the_Dominican_Republic.svg/1280px-Flag_of_the_Dominican_Republic.svg.png')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold uppercase tracking-tight mb-6"
          >
            Reforma <span className="text-[var(--color-gov-gold)]">Total RD</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed font-sans"
          >
            Un plan maestro integral para la transformación radical de la República Dominicana. 
            Este proyecto presenta soluciones audaces y basadas en datos para los desafíos más críticos del país, 
            inspiradas en los modelos de gobernanza más exitosos a nivel mundial.
          </motion.p>
        </div>
      </div>

      {/* Executive Summary */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-md border border-gray-200 shadow-sm p-8 md:p-10 border-l-4 border-l-[var(--color-gov-red)]"
        >
          <h2 className="text-xl md:text-2xl font-heading font-bold text-[var(--color-gov-blue)] uppercase tracking-wider mb-4">
            Visión Estratégica Nacional
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed font-sans mb-6">
            <strong className="text-[var(--color-gov-red)]">Reforma Total RD</strong> es una propuesta de transformación estructural radical. Nuestro objetivo es transicionar a la República Dominicana de un modelo burocrático y de bajo valor agregado hacia una potencia caribeña hiper-eficiente, tecnológica y sostenible. A través de la consolidación del Estado en 8 ministerios esenciales, la adopción de Inteligencia Artificial en educación y salud, la transición hacia energías limpias y turismo médico de alto valor, y la digitalización absoluta de la justicia y la infraestructura, buscamos erradicar la ineficiencia sistémica, maximizar el retorno de inversión del gasto público y elevar drásticamente la calidad de vida de todos los dominicanos.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-gray-50 p-5 rounded-md border border-gray-100">
              <h3 className="text-[var(--color-gov-blue)] font-bold uppercase tracking-wider text-sm mb-2">Estado Minimalista</h3>
              <p className="text-sm text-gray-600">Reducción de la burocracia, consolidación de ministerios y rediseño territorial en 7 macro-regiones.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-md border border-gray-100">
              <h3 className="text-[var(--color-gov-blue)] font-bold uppercase tracking-wider text-sm mb-2">Innovación Tecnológica</h3>
              <p className="text-sm text-gray-600">Integración de IA offline en educación, currículos modernos y digitalización de servicios públicos.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-md border border-gray-100">
              <h3 className="text-[var(--color-gov-blue)] font-bold uppercase tracking-wider text-sm mb-2">Desarrollo Sostenible</h3>
              <p className="text-sm text-gray-600">Turismo de alto valor, infraestructura inteligente y soberanía energética con cero emisiones.</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <HomepageDashboard />
      </div>

      {/* Sectors Summary */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-8 w-2 bg-[var(--color-gov-red)] rounded-sm"></div>
          <h2 className="text-xl md:text-2xl font-heading font-bold text-[var(--color-gov-blue)] uppercase tracking-wider">
            Sectores Estratégicos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => navigate(`/${sector.id}`)}
                className="bg-white rounded-md border border-gray-200 shadow-sm hover:shadow-md hover:border-[var(--color-gov-blue)]/30 transition-all duration-300 cursor-pointer overflow-hidden group flex flex-col h-full"
              >
                <div className="h-2 w-full bg-[var(--color-gov-blue)] group-hover:bg-[var(--color-gov-gold)] transition-colors"></div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gray-50 rounded-md text-[var(--color-gov-blue)] group-hover:bg-[var(--color-gov-blue)] group-hover:text-white group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-[var(--color-gov-blue)] uppercase tracking-wide">
                      {sector.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-6 flex-grow font-sans leading-relaxed">
                    {sector.overview}
                  </p>

                  {sector.megaproject && (
                    <div className="mb-6 p-4 bg-gray-50 rounded-sm border border-gray-100">
                      <div className="text-[10px] font-bold text-[var(--color-gov-red)] uppercase tracking-widest mb-1">
                        Megaproyecto
                      </div>
                      <h4 className="text-sm font-bold text-gray-900 leading-snug">
                        {sector.megaproject.title}
                      </h4>
                    </div>
                  )}

                  <div className="mt-auto flex items-center justify-between text-[var(--color-gov-blue)] font-bold text-sm uppercase tracking-wider">
                    <span>Ver {sector.problems.length} propuestas</span>
                    <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Strategic Analysis Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat tracking-tight">
            Análisis Integral y Proyecciones
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Conclusiones clave y proyecciones a futuro basadas en el análisis de todas las políticas y propuestas recomendadas por sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            
            // Generate analysis based on sector ID
            let takeaway = '';
            let projection = '';
            
            switch (sector.id) {
              case 'gov-efficiency':
                takeaway = 'Reducción radical de la burocracia mediante la consolidación de ministerios y la racionalización militar y territorial.';
                projection = 'Un Estado minimalista, digitalizado y financieramente superavitario, con toma de decisiones ágil y eficiente.';
                break;
              case 'education':
                takeaway = 'Transición de la memorización a la educación personalizada impulsada por IA, con evaluación docente basada en el mérito.';
                projection = 'Salto histórico en métricas PISA y formación de una fuerza laboral bilingüe, nativa digital y altamente competitiva.';
                break;
              case 'tourism':
                takeaway = 'Diversificación del modelo "todo incluido" hacia el turismo médico, eco-lujo y la integración estricta de cadenas de suministro locales.';
                projection = 'Multiplicación del ingreso por visitante, retención de capital local y preservación a largo plazo de los activos naturales.';
                break;
              case 'welfare':
                takeaway = 'Eliminación del clientelismo mediante transferencias monetarias condicionadas y digitalizadas, exigiendo corresponsabilidad.';
                projection = 'Reducción drástica de la pobreza extrema y transición de la dependencia estatal a la autosuficiencia económica.';
                break;
              case 'energy':
                takeaway = 'Desmonopolización del sector, adopción masiva de energías renovables y modernización de la red mediante inversión privada.';
                projection = 'Soberanía energética, erradicación de los apagones y reducción significativa de los costos operativos para la industria.';
                break;
              case 'justice':
                takeaway = 'Tolerancia cero combinada con vigilancia predictiva, control fronterizo tecnológico y digitalización total del sistema judicial.';
                projection = 'Desplome de las tasas de criminalidad, fronteras seguras y restauración absoluta de la confianza en las instituciones.';
                break;
              case 'agriculture':
                takeaway = 'Industrialización del campo mediante IoT, hidroponía, logística de cadena de frío y cooperativismo moderno.';
                projection = 'Seguridad alimentaria total, cero pérdida de cosechas y consolidación como potencia exportadora regional.';
                break;
              case 'healthcare':
                takeaway = 'Cambio de un modelo reactivo a uno predictivo y preventivo usando IA, telemedicina y expedientes digitales universales.';
                projection = 'Erradicación de crisis hospitalarias, optimización del gasto público y equidad en el acceso a servicios de alta complejidad.';
                break;
              case 'finance':
                takeaway = 'Simplificación extrema del código tributario, desregulación agresiva y fomento de la inversión en tecnología.';
                projection = 'Crecimiento sostenido del PIB, formalización masiva de la economía y transición hacia un ecosistema de alto valor agregado.';
                break;
              case 'infrastructure':
                takeaway = 'Modernización mediante Alianzas Público-Privadas (APP) para transporte masivo, puertos y conectividad nacional.';
                projection = 'Conectividad logística de clase mundial, descongestión urbana y facilitación del comercio internacional.';
                break;
              case 'innovation':
                takeaway = 'Creación de zonas francas tecnológicas, incentivos para startups y adopción de marcos regulatorios pro-innovación.';
                projection = 'Posicionamiento como el "Silicon Valley del Caribe", atrayendo talento global y capital de riesgo.';
                break;
              case 'labor':
                takeaway = 'Flexibilización de contratos, adaptación a la economía gig/remota y programas de reconversión laboral (upskilling).';
                projection = 'Reducción drástica de la informalidad y desarrollo de una fuerza laboral altamente adaptable a shocks globales.';
                break;
              default:
                takeaway = 'Optimización integral de procesos y adopción de mejores prácticas internacionales.';
                projection = 'Mejora sostenida en los indicadores de desarrollo y competitividad del sector.';
            }

            return (
              <motion.div
                key={`analysis-${sector.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-gray-900 font-montserrat">{sector.title}</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Conclusión Clave</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">{takeaway}</p>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-50">
                    <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">Proyección a Futuro</h4>
                    <p className="text-sm text-gray-700 leading-relaxed font-medium">{projection}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Agriculture Summary */}
      {agricultureSector && (
        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pb-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-2 bg-[var(--color-gov-gold)] rounded-sm"></div>
            <h2 className="text-xl md:text-2xl font-heading font-bold text-[var(--color-gov-blue)] uppercase tracking-wider flex items-center gap-2">
              <Leaf className="w-6 h-6 text-green-600" />
              Foco Estratégico: Agricultura
            </h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-md border border-gray-200 shadow-sm overflow-hidden"
          >
            <div className="bg-gradient-to-r from-[var(--color-gov-blue)] to-[#001f44] p-6 md:p-8 text-white border-b-4 border-[var(--color-gov-red)]">
              <h3 className="text-lg md:text-xl font-heading font-bold uppercase tracking-wide mb-3">
                Los 10 Desafíos y Soluciones del Sector Agrario
              </h3>
              <p className="text-white/90 text-sm md:text-base font-sans max-w-3xl leading-relaxed">
                Un resumen de las problemáticas críticas y las soluciones innovadoras propuestas para revolucionar la agricultura dominicana, pasando de la subsistencia a la agroindustria de precisión.
              </p>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {agricultureSector.problems.slice(0, 10).map((problem, idx) => {
                  const handleShare = (platform: string) => {
                    const url = `${window.location.origin}/#/agriculture`;
                    const text = `Reforma Total RD | Problema: ${problem.title} - Solución: ${problem.solution.model}`;
                    
                    if (platform === 'whatsapp') {
                      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
                    } else if (platform === 'x') {
                      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
                    } else if (platform === 'instagram') {
                      navigator.clipboard.writeText(`${text} ${url}`);
                      alert('¡Enlace y texto copiados al portapapeles para compartir en Instagram!');
                    }
                  };

                  return (
                  <div key={problem.id} className="flex flex-col gap-4 p-5 bg-gray-50 rounded-md border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[var(--color-gov-blue)] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-sm">
                        {idx + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-[var(--color-gov-blue)] text-sm mb-2 leading-tight">{problem.title}</h4>
                        <p className="text-xs text-gray-600 mb-4 line-clamp-2">{problem.description}</p>
                        
                        <div className="bg-white p-3 rounded border border-gray-200 border-l-2 border-l-[var(--color-gov-gold)]">
                          <span className="text-[10px] font-bold text-[var(--color-gov-red)] uppercase tracking-wider block mb-1">
                            Solución: {problem.solution.model}
                          </span>
                          <p className="text-xs text-gray-700 line-clamp-2 leading-relaxed">
                            {problem.solution.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Share Section */}
                    <div className="mt-2 pt-3 border-t border-gray-200 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-[var(--color-gov-blue)]">
                        <Share2 className="w-3 h-3" />
                        <span className="text-[10px] font-bold uppercase tracking-wider font-heading">Compartir:</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={(e) => { e.stopPropagation(); handleShare('whatsapp'); }}
                          className="p-1.5 bg-[#25D366] text-white rounded-full hover:bg-[#128C7E] transition-colors shadow-sm"
                          title="Compartir en WhatsApp"
                        >
                          <MessageCircle className="w-3 h-3" />
                        </button>
                        <button 
                          onClick={(e) => { e.stopPropagation(); handleShare('x'); }}
                          className="p-1.5 bg-black text-white rounded-full hover:bg-gray-800 transition-colors shadow-sm"
                          title="Compartir en X"
                        >
                          <Twitter className="w-3 h-3" />
                        </button>
                        <button 
                          onClick={(e) => { e.stopPropagation(); handleShare('instagram'); }}
                          className="p-1.5 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white rounded-full hover:opacity-90 transition-opacity shadow-sm"
                          title="Copiar enlace para Instagram"
                        >
                          <Instagram className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                )})}
              </div>
              
              <div className="mt-8 text-center">
                <button 
                  onClick={() => navigate('/agriculture')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-gov-blue)] text-white text-sm font-bold uppercase tracking-wider rounded hover:bg-[#001f44] transition-colors shadow-sm"
                >
                  Ver Sector Completo <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
