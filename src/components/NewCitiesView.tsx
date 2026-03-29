import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, Building2, Leaf, Zap, Ship, Microscope, TrendingUp, 
  Users, DollarSign, Clock, FileText, CheckCircle2, AlertCircle, Send
} from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, 
  ResponsiveContainer, BarChart, Bar 
} from 'recharts';

// --- DATOS DE LAS CIUDADES ---
const cities = [
  {
    id: 'puerto-manzanillo',
    name: 'Puerto Manzanillo (Montecristi)',
    focus: 'Logística, Exportación y Energía Renovable',
    description: 'Un hub industrial y logístico enfocado en el futuro, diseñado para la máxima eficiencia y competitividad global. La ciudad integra un puerto de aguas profundas con extensas Zonas Económicas Especiales, manteniendo una alta calidad de vida mediante una planificación inteligente y sostenible.',
    icon: Ship,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    borderColor: 'border-blue-200',
    tabColor: 'data-[state=active]:bg-blue-600 data-[state=active]:text-white',
    image: 'https://i.imgur.com/xHrYZSUh.webp',
    typology: 'Ciudad Industrial Automatizada y Nodo de Comercio Global',
    budget: '$6,000,000,000 USD',
    duration: '10 a 15 años',
    pillars: [
      { title: 'Zonificación y Financiamiento', desc: 'Modelo lineal costero con Zona Núcleo (Puerto/ZEE), Zona de Amortiguamiento (Almacenes) y Zonas Residenciales a barlovento.' },
      { title: 'Forma y Función', desc: 'Diseño modular para escalabilidad rápida y arquitectura defensiva utilizando almacenes como rompevientos.' },
      { title: 'Habitabilidad', desc: '"Riviera del Trabajador" con apartamentos inteligentes asequibles, paseos peatonales y franjas comerciales.' },
      { title: 'Infraestructura', desc: 'Microred 100% renovable, granjas solares a escala de servicios públicos y logística ferroviaria eléctrica automatizada.' }
    ],
    budgetBreakdown: [
      { item: 'Planificación, Zonificación y Medio Ambiente', cost: '$90M' },
      { item: 'Infraestructura Portuaria y Logística Automatizada', cost: '$3,350M' },
      { item: 'Red Energética 100% Renovable', cost: '$1,100M' },
      { item: '"Riviera del Trabajador" y Desarrollo Urbano', cost: '$950M' },
      { item: 'Contingencia e Inicialización', cost: '$510M' }
    ],
    documents: [
      'Evaluación de Impacto Ambiental (EIA) Integrada',
      'Diseño Final del Puerto de Aguas Profundas',
      'Permisos de Zonas Económicas Especiales (ZEE)',
      'Documentos de Licitación (Ferrocarril y TOS)',
      'Especificaciones de la Red Energética'
    ],
    timeline: [
      { phase: 'Fase 1', event: 'Evaluación de Impacto Ambiental (EIA) Integrada y Zonificación' },
      { phase: 'Fase 2', event: 'Selección de Sitio para Granja Solar y Especificación de Microred' },
      { phase: 'Fase 3', event: 'Finalización del Diseño del Puerto de Aguas Profundas' },
      { phase: 'Fase 4', event: 'Licitación de Ferrocarril Eléctrico y Automatización' },
      { phase: 'Fase 5', event: 'Ceremonia Oficial de Inicio de Obras' }
    ]
  },
  {
    id: 'altos-de-plata',
    name: 'Altos de Plata / Esmeralda (Monte Plata)',
    focus: 'Calidad de Vida, Tecnología y Ecología',
    description: 'Una ciudad satélite revolucionaria diseñada en torno a la calidad de vida. Ubicada en el exuberante terreno de Monte Plata, sirve como modelo regional para un entorno urbano sin automóviles y habilitado por la tecnología, donde la ecología es el elemento estructural principal.',
    icon: Leaf,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100',
    borderColor: 'border-emerald-200',
    tabColor: 'data-[state=active]:bg-emerald-600 data-[state=active]:text-white',
    image: 'https://i.imgur.com/Ox4kVlDh.webp',
    typology: 'Ciudad Satélite Esmeralda y Modelo de 15 Minutos',
    budget: '$4,500,000,000 USD',
    duration: '12 a 15 años',
    pillars: [
      { title: 'Zonificación y Financiamiento', desc: 'Aldeas policéntricas ancladas por un tren de cercanías de alta velocidad hacia Santo Domingo, con espacios verdes descentralizados.' },
      { title: 'Forma y Función', desc: 'Biomímesis con construcción obligatoria en madera masiva, horizontes integrados y corredores de enfriamiento natural.' },
      { title: 'Habitabilidad', desc: 'Ciudad de 15 Minutos con un núcleo sin autos, proximidad garantizada a servicios esenciales y vías verdes sombreadas.' },
      { title: 'Infraestructura', desc: 'Gestión hiperlocalizada de residuos/energía, recolección de agua de lluvia y fibra óptica subterránea de grado militar.' }
    ],
    budgetBreakdown: [
      { item: 'Planificación, Diseño Biomimético y Terreno', cost: '$140M' },
      { item: 'Conectividad Regional y Transporte Mayor (Tren)', cost: '$2,040M' },
      { item: 'Infraestructura Inteligente y Ecológica Localizada', cost: '$310M' },
      { item: 'Construcción Biomimética y Desarrollo de Aldeas', cost: '$1,570M' },
      { item: 'Contingencia e Inicialización', cost: '$440M' }
    ],
    documents: [
      'Acuerdos de Adquisición de Tierras y Zonificación',
      'Planos de Ingeniería Hidrológica',
      'Estudios de Viabilidad y Especificaciones del TCAV',
      'Estudios Ambientales de Integración Ecológica',
      'Planos de Infraestructura Inteligente Localizada'
    ],
    timeline: [
      { phase: 'Fase 1', event: 'Código de Diseño Biomimético Inicial y Plan de Zonificación' },
      { phase: 'Fase 2', event: 'Estudio de Viabilidad del Tren de Cercanías y Modelo Financiero' },
      { phase: 'Fase 3', event: 'Licitación de Red de Fibra Óptica y Microred' },
      { phase: 'Fase 4', event: 'Cadena de Suministro de Madera Masiva y Selección de Socios' },
      { phase: 'Fase 5', event: 'Evento Formal de Inicio en Monte Plata' }
    ]
  },
  {
    id: 'bahia-aguila',
    name: 'Bahía Águila (Pedernales)',
    focus: 'Preservación de la Biosfera, Turismo y Ciencia Marina',
    description: 'Un destino sin igual donde el ecoturismo de ultralujo financia y apoya activamente un campus de investigación climática y marina de clase mundial, preservando el Parque Nacional Jaragua y la delicada cuenca de Enriquillo.',
    icon: Microscope,
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-100',
    borderColor: 'border-cyan-200',
    tabColor: 'data-[state=active]:bg-cyan-600 data-[state=active]:text-white',
    image: 'https://i.imgur.com/b8uAcYdh.webp',
    typology: 'Ecoturismo de Alta Tecnología y Utopía de Investigación',
    budget: '$2,500,000,000 USD',
    duration: '10 años',
    pillars: [
      { title: 'Zonificación y Financiamiento', desc: 'Prioridad a la conservación con una estructura tripartita: Zona de Eco-Resort, Campus de Investigación y Pueblo de Apoyo.' },
      { title: 'Forma y Función', desc: '"Tocar la Tierra Ligeramente" con huellas minimalistas sobre pilotes, techos tensores adaptativos y piedra caliza local.' },
      { title: 'Habitabilidad', desc: 'Eco-educación inmersiva, espacios cívicos integrados y estrictas ordenanzas de comunidad de cielo oscuro.' },
      { title: 'Infraestructura', desc: 'Avanzado sistema de agua de circuito cerrado, planta desalinizadora con energía solar y turbinas eólicas marinas.' }
    ],
    budgetBreakdown: [
      { item: 'Planificación, Medio Ambiente y Permisos', cost: '$75M' },
      { item: 'Infraestructura de Alta Tecnología (Desalinizadora/Eólica)', cost: '$1,025M' },
      { item: 'Construcción de Zonificación Tripartita', cost: '$1,100M' },
      { item: 'Contingencia e Inicialización de Operaciones', cost: '$300M' }
    ],
    documents: [
      'Mapeo Inicial de Sensibilidad Ambiental y Código de Zonificación',
      'Marco Legal de Conservación (Cielos Oscuros, Biosfera)',
      'Acuerdos de Inquilinos Ancla (Eco-Resorts)',
      'Especificaciones de Sitio de Infraestructura Autónoma',
      'Acuerdos de Asociación de Investigación Marina'
    ],
    timeline: [
      { phase: 'Fase 1', event: 'Mapeo Inicial de Sensibilidad Ambiental y Código de Zonificación' },
      { phase: 'Fase 2', event: 'Compromiso de Inquilino Ancla de Eco-Resort y Modelo Financiero' },
      { phase: 'Fase 3', event: 'Especificación de Sitio para Planta Desalinizadora y Parque Eólico' },
      { phase: 'Fase 4', event: 'Acuerdos de Asociación para Investigación Marina' },
      { phase: 'Fase 5', event: 'Evento Oficial de Inicio del Proyecto' }
    ]
  }
];

const economicData = [
  { year: '2025', inversion: 1200, empleos: 15000 },
  { year: '2026', inversion: 2500, empleos: 35000 },
  { year: '2027', inversion: 3800, empleos: 60000 },
  { year: '2028', inversion: 5000, empleos: 85000 },
  { year: '2029', inversion: 6500, empleos: 120000 },
  { year: '2030', inversion: 8000, empleos: 150000 },
];

export default function NewCitiesView() {
  const [activeTab, setActiveTab] = useState(0);
  const activeCity = cities[activeTab];

  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', interest: cities[0].id, message: '' });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    
    if (!formData.name.trim()) errors.name = 'El nombre es obligatorio';
    if (!formData.email.trim()) {
      errors.email = 'El correo es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'El correo no es válido';
    }
    if (!formData.message.trim()) errors.message = 'El mensaje es obligatorio';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', interest: cities[0].id, message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-[var(--color-gov-blue)] uppercase tracking-tight mb-4 flex items-center gap-3 justify-center md:justify-start">
          <Building2 className="w-10 h-10 text-[var(--color-gov-red)]" />
          Nuevas Ciudades y Polos de Desarrollo
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Estrategia nacional de descentralización económica mediante la creación de nuevos polos urbanos, turísticos e industriales. Estos proyectos están diseñados para redistribuir la riqueza, descongestionar las ciudades principales y aprovechar las ventajas comparativas de cada región.
        </p>
      </div>

      {/* TABS NAVIGATION */}
      <div className="flex flex-wrap gap-2 mb-8 bg-gray-100 p-2 rounded-xl">
        {cities.map((city, index) => (
          <button
            key={city.id}
            onClick={() => setActiveTab(index)}
            data-state={activeTab === index ? 'active' : 'inactive'}
            className={`flex-1 min-w-[200px] flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-bold text-sm transition-all duration-200
              ${activeTab === index ? 'bg-white shadow-sm text-[var(--color-gov-blue)]' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'}
            `}
          >
            <city.icon className={`w-5 h-5 ${activeTab === index ? city.color : ''}`} />
            {city.name.split(' ')[0]} {city.name.split(' ')[1]}
          </button>
        ))}
      </div>

      {/* ACTIVE CITY CONTENT */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCity.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-16"
        >
          {/* Hero Image & Header */}
          <div className="relative h-80 md:h-96 w-full">
            <img 
              src={activeCity.image} 
              alt={activeCity.name} 
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001f44] via-[#001f44]/60 to-transparent flex flex-col justify-end p-8 md:p-12">
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 text-sm font-bold mb-4 self-start`}>
                <activeCity.icon className="w-4 h-4" />
                {activeCity.focus}
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-2">{activeCity.name}</h2>
              <p className="text-[var(--color-gov-gold)] font-bold text-lg tracking-wide uppercase">{activeCity.typology}</p>
            </div>
          </div>

          <div className="p-8 md:p-12">
            {/* Key Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 pb-10 border-b border-gray-100">
              <div className="flex items-center gap-4 bg-gray-50 p-6 rounded-xl border border-gray-100">
                <div className="p-4 bg-emerald-100 rounded-full text-emerald-600">
                  <DollarSign className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Gasto de Capital Total</p>
                  <p className="text-2xl font-black text-gray-900">{activeCity.budget}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-gray-50 p-6 rounded-xl border border-gray-100">
                <div className="p-4 bg-blue-100 rounded-full text-blue-600">
                  <Clock className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Cronograma Estimado</p>
                  <p className="text-2xl font-black text-gray-900">{activeCity.duration}</p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 text-xl mb-12 leading-relaxed font-medium">
              {activeCity.description}
            </p>

            {/* Pillars */}
            <h3 className="text-2xl font-heading font-bold text-[var(--color-gov-blue)] mb-6 flex items-center gap-2">
              <Building2 className="w-6 h-6" /> Pilares del Master Plan
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {activeCity.pillars.map((pillar, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-base font-bold text-gray-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${activeCity.bgColor.replace('bg-', 'bg-').replace('-100', '-500')}`}></div>
                    {pillar.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              {/* Budget Breakdown */}
              <div>
                <h3 className="text-xl font-heading font-bold text-[var(--color-gov-blue)] mb-6 flex items-center gap-2">
                  <DollarSign className="w-6 h-6" /> Desglose del Presupuesto
                </h3>
                <div className="space-y-3">
                  {activeCity.budgetBreakdown.map((item, i) => (
                    <div key={i} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border border-gray-100">
                      <span className="text-gray-700 font-medium">{item.item}</span>
                      <span className="font-bold text-gray-900 bg-white px-3 py-1 rounded-md border border-gray-200">{item.cost}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Required Documents */}
              <div>
                <h3 className="text-xl font-heading font-bold text-[var(--color-gov-blue)] mb-6 flex items-center gap-2">
                  <FileText className="w-6 h-6" /> Documentos y Entregables
                </h3>
                <ul className="space-y-3">
                  {activeCity.documents.map((doc, i) => (
                    <li key={i} className="flex items-start gap-3 p-3">
                      <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 ${activeCity.color}`} />
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="text-xl font-heading font-bold text-[var(--color-gov-blue)] mb-6 flex items-center gap-2">
                <Clock className="w-6 h-6" /> Hitos de Planificación
              </h3>
              <div className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-200">
                <div className="space-y-6">
                  {activeCity.timeline.map((item, i) => (
                    <div key={i} className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-start">
                      <div className={`font-bold px-3 py-1 rounded-md text-sm flex-shrink-0 ${activeCity.bgColor} ${activeCity.color} border ${activeCity.borderColor}`}>
                        {item.phase}
                      </div>
                      <div className="text-gray-800 font-medium pt-1">{item.event}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </AnimatePresence>

      {/* Impact Charts */}
      <div className="mb-16">
        <h2 className="text-2xl font-heading font-extrabold text-[var(--color-gov-blue)] uppercase tracking-tight mb-6">
          Proyección de Impacto Macro (Consolidado)
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Inversión Acumulada (Millones USD)</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={economicData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorInversion" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#001f44" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#001f44" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="year" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" tickFormatter={(value) => `$${value}`} />
                  <RechartsTooltip formatter={(value: number) => [`$${value}M USD`, 'Inversión']} />
                  <Area type="monotone" dataKey="inversion" stroke="#001f44" fillOpacity={1} fill="url(#colorInversion)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Generación de Empleos</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={economicData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="year" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" tickFormatter={(value) => `${value / 1000}k`} />
                  <RechartsTooltip formatter={(value: number) => [value.toLocaleString('en-US'), 'Empleos']} cursor={{fill: 'rgba(0,0,0,0.05)'}} />
                  <Bar dataKey="empleos" fill="#ce1126" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Contact / Registration Form */}
      <div className="bg-[#001f44] rounded-2xl shadow-xl overflow-hidden text-white relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_the_Dominican_Republic.svg/1280px-Flag_of_the_Dominican_Republic.svg.png')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        <div className="relative z-10 p-8 md:p-12 lg:flex gap-12">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-3xl font-heading font-extrabold uppercase tracking-tight mb-4">
              Participe en el Futuro
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              ¿Representa a una empresa constructora, fondo de inversión o institución académica? Regístrese para recibir los pliegos de condiciones, documentos de licitación y actualizaciones sobre estos megaproyectos.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-gov-gold)]" />
                <span>Acceso anticipado a licitaciones</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-gov-gold)]" />
                <span>Invitaciones a foros de inversión</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-gov-gold)]" />
                <span>Actualizaciones de progreso trimestrales</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-white/10 p-6 md:p-8 rounded-xl backdrop-blur-sm border border-white/20">
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">¡Registro Exitoso!</h3>
                <p className="text-gray-300">Hemos recibido su información. Nuestro equipo de desarrollo se pondrá en contacto pronto.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Nombre Completo / Empresa *</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className={`w-full bg-white/5 border ${formErrors.name ? 'border-red-400' : 'border-white/20'} rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-gov-gold)]`}
                    placeholder="Ej. Constructora Nacional S.A."
                  />
                  {formErrors.name && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {formErrors.name}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Correo Electrónico Institucional *</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className={`w-full bg-white/5 border ${formErrors.email ? 'border-red-400' : 'border-white/20'} rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-gov-gold)]`}
                    placeholder="contacto@empresa.com"
                  />
                  {formErrors.email && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {formErrors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Proyecto de Interés Principal</label>
                  <select 
                    value={formData.interest}
                    onChange={(e) => setFormData({...formData, interest: e.target.value})}
                    className="w-full bg-[#001f44] border border-white/20 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-gov-gold)]"
                  >
                    {cities.map(c => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Mensaje o Área de Especialidad *</label>
                  <textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={3}
                    className={`w-full bg-white/5 border ${formErrors.message ? 'border-red-400' : 'border-white/20'} rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-gov-gold)] resize-none`}
                    placeholder="Describa brevemente su interés o capacidad técnica..."
                  ></textarea>
                  {formErrors.message && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {formErrors.message}</p>}
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[var(--color-gov-gold)] hover:bg-amber-500 text-[#001f44] font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 mt-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-[#001f44] border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Solicitar Información
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
