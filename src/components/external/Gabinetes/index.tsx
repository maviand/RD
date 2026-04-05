/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as RechartsTooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { 
  Landmark,
  Zap, 
  ArrowRight, 
  ChevronDown,
  Users,
  LineChart,
  GraduationCap,
  HardHat,
  Briefcase,
  ArrowDownAZ,
  ArrowUpZA,
  ChevronsUpDown,
  ChevronsDownUp,
  Building2,
  Puzzle,
  CheckCircle2,
  Network
} from 'lucide-react';

// --- Data ---
const consolidations = [
  {
    id: 1,
    current: "Min. de la Juventud, Mujer, Deportes, Cultura",
    currentDetails: "• Ministerio de la Juventud: Enfocado en políticas para jóvenes y becas limitadas, con un presupuesto mayormente consumido en gastos operativos.\n• Ministerio de la Mujer: Prevención de violencia, equidad y refugios, operando con recursos fragmentados.\n• Ministerio de Deportes (MIDEREC): Mantenimiento de instalaciones y apoyo a atletas, con nóminas abultadas en el interior.\n• Ministerio de Cultura: Gestión de museos, patrimonio y eventos, sufriendo de subfinanciación crónica.\n\nIneficiencia Estructural e Histórica:\nActualmente, el Estado mantiene cuatro aparatos burocráticos completos para atender áreas sociales que están intrínsecamente conectadas. Cada ministerio posee su propio Ministro, cuerpo de viceministros, directores generales, departamentos de recursos humanos, compras, tecnología, relaciones públicas, consultoría jurídica y flotas de vehículos. Esta fragmentación genera un 'gasto corriente parasitario' donde hasta el 70% del presupuesto de algunas de estas instituciones se destina a nómina y burocracia, dejando migajas para la inversión social real.\n\nAdemás, existe una grave superposición operativa. Si una joven atleta de escasos recursos necesita apoyo, su caso requiere la intervención descoordinada de Juventud, Mujer y Deportes, multiplicando el papeleo y retrasando la ayuda. A nivel provincial, el Estado paga cuatro alquileres distintos para oficinas que a menudo están vacías o subutilizadas, en lugar de tener un centro integral.",
    proposed: "Ministerio de Asuntos Sociales y Culturales",
    proposedDetails: "Se organizará bajo un solo 'Ministerio de Asuntos Sociales y Culturales' con cuatro viceministerios técnicos altamente especializados (Juventud, Mujer, Deportes, Cultura). La transformación principal radica en la implementación de un modelo de 'Servicios Compartidos' (Shared Services).\n\nReestructuración Operativa:\n• Plataforma Administrativa Única: Se consolidarán los departamentos de RRHH, Compras, TI y Legal en una sola dirección general, liberando miles de millones de pesos anuales.\n• Centros de Desarrollo Social Provinciales: Las oficinas territoriales se unificarán en un solo complejo por provincia. Un ciudadano podrá gestionar una beca, reportar un caso de violencia o solicitar utilería deportiva en una sola ventanilla.\n• Presupuesto Orientado a Resultados: Al eliminar la redundancia de altos cargos (ministros, directores de gabinete), los fondos se reorientarán directamente a la ampliación de la red de refugios, el mantenimiento de polideportivos y la preservación del patrimonio cultural.",
    measurableBenefits: [
      "Reducción del 60% en gastos de alquiler de oficinas provinciales y sedes centrales.",
      "Disminución del 40% en nómina administrativa (RRHH, Compras, TI).",
      "Aumento del 35% en el presupuesto directo disponible para programas sociales y becas."
    ],
    managementStructure: [
      { role: "Ministro de Asuntos Sociales y Culturales", description: "Liderazgo general y estrategia de bienestar social." },
      { role: "Viceministro de Desarrollo Juvenil y Deportivo", description: "Ejecución de programas de juventud y fomento al deporte." },
      { role: "Viceministro de Equidad y Cultura", description: "Políticas de género, protección y preservación del patrimonio." },
      { role: "Director General de Servicios Compartidos", description: "Gestión centralizada de RRHH, TI, Compras y Legal." }
    ],
    chartData: [
      { name: 'Gasto Alquileres (%)', Actual: 100, Propuesto: 40, ActualAmount: 'RD$ 1,200 MM', PropuestoAmount: 'RD$ 480 MM' },
      { name: 'Nómina Admin. (%)', Actual: 100, Propuesto: 60, ActualAmount: 'RD$ 4,500 MM', PropuestoAmount: 'RD$ 2,700 MM' },
      { name: 'Inversión Social (%)', Actual: 100, Propuesto: 135, ActualAmount: 'RD$ 10,000 MM', PropuestoAmount: 'RD$ 13,500 MM' }
    ],
    logic: "Consolida cuatro sedes, nóminas y silos administrativos separados en un departamento ágil.",
    icon: Users,
    color: "bg-pink-50 text-pink-700 border-pink-200"
  },
  {
    id: 2,
    current: "Min. de Hacienda, Economía (MEPyD), MAP",
    currentDetails: "• Ministerio de Hacienda: Encargado de la recaudación, gestión de la deuda pública, tesorería y asignación del presupuesto general del Estado.\n• Ministerio de Economía (MEPyD): Responsable del diseño de políticas públicas, planificación de la inversión pública y cooperación internacional.\n• Ministerio de Administración Pública (MAP): Ente rector del empleo público, diseño organizacional y evaluación de desempeño.\n\nIneficiencia Estructural e Histórica:\nEsta división tripartita provoca una de las mayores desconexiones estructurales del Estado dominicano, conocida como el 'triángulo de la ineficiencia'. Frecuentemente, el MEPyD aprueba y planifica proyectos de inversión pública (escuelas, hospitales) para los cuales Hacienda no ha garantizado el flujo de caja a largo plazo, resultando en obras paralizadas por años.\n\nPor otro lado, el MAP aprueba nuevas estructuras organizativas y clasificaciones de puestos para instituciones públicas sin un respaldo presupuestario coordinado con Hacienda, lo que genera déficits institucionales y nóminas insostenibles. Además, existen equipos de análisis macroeconómico duplicados en Hacienda, MEPyD y el Banco Central, produciendo informes paralelos y a veces contradictorios.",
    proposed: "Ministerio de Economía y Administración",
    proposedDetails: "Se estructurará como un robusto 'Ministerio de Economía y Administración', consolidando el ciclo completo de las políticas públicas bajo un mismo techo rector. Se organizará en tres pilares fundamentales: Viceministerio del Tesoro y Presupuesto, Viceministerio de Planificación Estratégica, y Viceministerio de Servicio Civil.\n\nReestructuración Operativa:\n• Ciclo de Política Pública Continuo: El mismo ente que diseña y planifica la obra pública (antiguo MEPyD), será el que asegure su financiamiento (antigua Hacienda) y asigne el personal necesario para operarla (antiguo MAP), garantizando que ninguna obra inicie sin presupuesto total garantizado.\n• Sistema ERP Estatal Único: Se implementará un sistema de planificación de recursos empresariales (ERP) unificado para todo el Estado, garantizando trazabilidad financiera en tiempo real desde la formulación del presupuesto hasta el pago al contratista.\n• Nómina y Servicio Civil Integrados: El control de la nómina pública estará directamente atado al registro de la función pública, imposibilitando la creación de plazas de trabajo ('botellas') que no estén estrictamente justificadas por la planificación estratégica y respaldadas por la disponibilidad de fondos.",
    measurableBenefits: [
      "Reducción del tiempo de aprobación de proyectos de inversión pública de 18 a 6 meses.",
      "Ahorro estimado del 1.5% del PIB en gastos operativos mediante la eliminación de duplicidad financiera.",
      "Implementación de un sistema de nómina única estatal, eliminando personal duplicado y 'botellas'."
    ],
    managementStructure: [
      { role: "Ministro de Economía y Administración", description: "Rectoría fiscal, económica y de la administración pública." },
      { role: "Viceministro del Tesoro y Presupuesto", description: "Recaudación, gestión de deuda y asignación de fondos." },
      { role: "Viceministro de Planificación Estratégica", description: "Diseño de políticas públicas y proyectos de inversión." },
      { role: "Viceministro de Servicio Civil", description: "Gestión del talento humano y evaluación de desempeño estatal." }
    ],
    chartData: [
      { name: 'Tiempo Aprobación (Meses)', Actual: 18, Propuesto: 6, ActualAmount: '18 meses', PropuestoAmount: '6 meses' },
      { name: 'Gasto Operativo (%)', Actual: 100, Propuesto: 85, ActualAmount: 'RD$ 12,000 MM', PropuestoAmount: 'RD$ 10,200 MM' },
      { name: 'Personal Duplicado (%)', Actual: 100, Propuesto: 10, ActualAmount: '4,500 emp.', PropuestoAmount: '450 emp.' }
    ],
    logic: "Unifica el presupuesto nacional, la planificación económica y la gestión de la fuerza laboral pública bajo una sola autoridad fiscal.",
    icon: LineChart,
    color: "bg-emerald-50 text-emerald-700 border-emerald-200"
  },
  {
    id: 3,
    current: "MINERD (Pre-K a 12) & MESCYT (Educación Superior)",
    currentDetails: "• MINERD: Gestiona las escuelas públicas preuniversitarias (Pre-K a 12), el desayuno escolar, la infraestructura básica y una nómina masiva de más de 100,000 maestros.\n• MESCYT: Regula las universidades, institutos técnicos superiores, otorga becas internacionales y fomenta la investigación científica.\n\nIneficiencia Estructural e Histórica:\nExiste un 'abismo' institucional entre la educación media y la superior. Los bachilleres que egresan del sistema del MINERD frecuentemente llegan a las universidades reguladas por el MESCYT con deficiencias académicas graves (matemáticas, comprensión lectora), obligando a las universidades a invertir cuantiosos recursos en cursos propedéuticos y nivelación.\n\nAmbos ministerios operan como islas: mantienen plataformas tecnológicas separadas, currículos desalineados y programas de formación docente redundantes (INAFOCAM en MINERD vs. programas del MESCYT). Además, la gestión de becas está fragmentada, y no existe una base de datos única que rastree el desempeño de un estudiante desde su educación inicial hasta su inserción en el mercado laboral profesional.",
    proposed: "Ministerio de Educación Unificado",
    proposedDetails: "Operará como un 'Ministerio de Educación Unificado', garantizando un currículo integrado y continuo desde la educación inicial hasta el posgrado y la investigación científica. Se organizará en un Viceministerio de Educación Básica y Media, un Viceministerio de Educación Superior, Ciencia y Tecnología, y una Dirección General de Operaciones Unificada.\n\nReestructuración Operativa:\n• Continuidad Curricular: Los estándares de egreso de la secundaria estarán directamente dictados por los requisitos de ingreso de la educación superior y técnica, eliminando la brecha de competencias.\n• Plataforma Digital Estandarizada: Se creará un 'Expediente Académico Único' digital para cada ciudadano, rastreando su progreso, calificaciones y aptitudes desde los 3 años hasta la universidad, permitiendo intervenciones tempranas y orientación vocacional basada en datos.\n• Consolidación Administrativa: Las compras masivas de tecnología (laptops, pizarras digitales), la construcción de infraestructura educativa y la gestión de nóminas se centralizarán, generando economías de escala masivas. Todos los programas de becas nacionales e internacionales se unificarán en un portal único, transparente y basado en el mérito.",
    measurableBenefits: [
      "Ahorro de más de RD$15,000 millones anuales al unificar compras de tecnología y plataformas de aprendizaje.",
      "Reducción proyectada de la deserción universitaria en un 25% gracias a la alineación curricular.",
      "Consolidación del 100% de los programas de becas en un portal único y transparente."
    ],
    managementStructure: [
      { role: "Ministro de Educación Unificada", description: "Visión educativa integral desde la primera infancia hasta el posgrado." },
      { role: "Viceministro de Educación Básica y Media", description: "Gestión de escuelas públicas, currículo Pre-K a 12 y alimentación." },
      { role: "Viceministro de Educación Superior, Ciencia y Tecnología", description: "Regulación universitaria, investigación y becas." },
      { role: "Director General de Operaciones Unificada", description: "Infraestructura escolar, tecnología y nómina docente." }
    ],
    chartData: [
      { name: 'Gasto Plataformas (%)', Actual: 100, Propuesto: 40, ActualAmount: 'RD$ 25,000 MM', PropuestoAmount: 'RD$ 10,000 MM' },
      { name: 'Deserción Univ. (%)', Actual: 100, Propuesto: 75, ActualAmount: '40% anual', PropuestoAmount: '30% anual' },
      { name: 'Becas Unificadas (%)', Actual: 30, Propuesto: 100, ActualAmount: '3,000 becas', PropuestoAmount: '10,000 becas' }
    ],
    logic: "Elimina las burocracias paralelas en el sector educativo, creando una línea continua desde la primera infancia hasta la universidad.",
    icon: GraduationCap,
    color: "bg-blue-50 text-blue-700 border-blue-200"
  },
  {
    id: 4,
    current: "MOPC (Obras Públicas) & MIVED (Vivienda)",
    currentDetails: "• MOPC (Obras Públicas): Se enfoca en infraestructura vial, puentes, peajes, mantenimiento de carreteras y grandes obras de ingeniería civil.\n• MIVED (Vivienda): Construye viviendas sociales, hospitales, centros diagnósticos y diversas edificaciones públicas.\n\nIneficiencia Estructural e Histórica:\nEl Estado dominicano compite contra sí mismo en el sector construcción. Ambas instituciones realizan licitaciones masivas de materiales estratégicos (cemento, varilla, asfalto, agregados) por separado, perdiendo un enorme poder de negociación frente a los suplidores privados y pagando sobreprecios.\n\nMantienen flotillas de equipos pesados (retroexcavadoras, gredas, rodillos) redundantes; es común ver equipos del MOPC inactivos en una provincia mientras el MIVED alquila maquinaria privada en la misma zona para una obra diferente. Además, sostienen departamentos de ingeniería, cubicación, diseño arquitectónico y supervisión de obras paralelos, lo que duplica la burocracia para los contratistas y facilita la dispersión de los controles de calidad y transparencia.",
    proposed: "Ministerio de Infraestructura",
    proposedDetails: "Se constituirá como el único ente constructor y planificador físico del Estado: el 'Ministerio de Infraestructura'. Estará dividido estratégicamente en un Viceministerio de Vialidad y Transporte (carreteras, puentes, movilidad masiva) y un Viceministerio de Edificaciones Públicas y Vivienda (hospitales, escuelas, proyectos habitacionales).\n\nReestructuración Operativa:\n• Centro Nacional de Licitaciones de Infraestructura: Todas las compras de materiales de construcción del Estado se consolidarán en subastas inversas a gran escala, garantizando los precios más bajos del mercado por volumen.\n• Banco de Equipos Pesados Centralizado: Se creará una flotilla nacional única con un sistema de despacho y rastreo GPS, optimizando el uso de maquinaria 24/7 a nivel nacional y reduciendo a cero el alquiler innecesario a terceros.\n• Estandarización y Transparencia: Un solo cuerpo de ingenieros supervisores y un único estándar de códigos de construcción (sismorresistencia, accesibilidad) aplicará para toda obra pública, centralizando las cubicaciones y pagos en una plataforma auditable en tiempo real.",
    measurableBenefits: [
      "Reducción del 20% en el costo de materiales de construcción por economías de escala.",
      "Disminución del 50% en los tiempos de licitación y adjudicación de obras.",
      "Eliminación de la subutilización de maquinaria pesada, ahorrando millones en alquileres a privados."
    ],
    managementStructure: [
      { role: "Ministro de Infraestructura", description: "Planificación territorial y dirección de la construcción estatal." },
      { role: "Viceministro de Vialidad y Transporte", description: "Desarrollo de carreteras, puentes y movilidad masiva." },
      { role: "Viceministro de Edificaciones Públicas y Vivienda", description: "Construcción de hospitales, escuelas y proyectos habitacionales." },
      { role: "Director del Centro Nacional de Licitaciones", description: "Subastas y compras centralizadas de materiales de construcción." }
    ],
    chartData: [
      { name: 'Costo Materiales (%)', Actual: 100, Propuesto: 80, ActualAmount: 'RD$ 50,000 MM', PropuestoAmount: 'RD$ 40,000 MM' },
      { name: 'Tiempo Licitación (%)', Actual: 100, Propuesto: 50, ActualAmount: '12 meses', PropuestoAmount: '6 meses' },
      { name: 'Alquiler Maquinaria (%)', Actual: 100, Propuesto: 20, ActualAmount: 'RD$ 5,000 MM', PropuestoAmount: 'RD$ 1,000 MM' }
    ],
    logic: "Centraliza toda la construcción estatal, licitaciones de adquisiciones y planificación territorial, reduciendo enormemente la corrupción y la superposición de contratos.",
    icon: HardHat,
    color: "bg-orange-50 text-orange-700 border-orange-200"
  },
  {
    id: 5,
    current: "MICM (Comercio) & Min. de Turismo",
    currentDetails: "• MICM (Comercio): Regula la industria manufacturera, el comercio local, las zonas francas, el desarrollo de MiPymes y los subsidios a combustibles.\n• Ministerio de Turismo (MITUR): Promueve el país internacionalmente, regula el sector hotelero y aprueba proyectos turísticos.\n\nIneficiencia Estructural e Histórica:\nA pesar de que el turismo es el principal motor económico y el mayor comprador de bienes de la República Dominicana, opera en gran medida de espaldas a la industria local. El MICM gasta millones en programas de apoyo a MiPymes que no logran conectar con la demanda real de los hoteles, porque los estándares de calidad y volumen no están alineados.\n\nEn el ámbito internacional, la ineficiencia es flagrante: el Estado mantiene Oficinas de Promoción Turística (OPT) del MITUR y oficinas de promoción comercial/exportación (ProDominicana/MICM) en las mismas ciudades extranjeras (ej. Nueva York, Madrid, Miami), pagando dobles alquileres, dobles nóminas diplomáticas y realizando eventos desconectados, desperdiciando la oportunidad de vender el país como un paquete integral de turismo e inversión.",
    proposed: "Ministerio de Comercio y Turismo",
    proposedDetails: "Se fusionará la estrategia económica exterior e interior creando el 'Ministerio de Comercio y Turismo'. Se organizará en un Viceministerio de Desarrollo Turístico, un Viceministerio de Industria, Comercio y MiPymes, y una Agencia Unificada de Promoción Internacional y Exportaciones.\n\nReestructuración Operativa:\n• Encadenamiento Productivo Obligatorio: Se creará un ecosistema donde los incentivos fiscales y la aprobación de nuevos proyectos turísticos estén directamente condicionados a la integración de cadenas de suministro locales. El ministerio certificará a las MiPymes agropecuarias e industriales específicamente para suplir la demanda hotelera.\n• Diplomacia Comercial Unificada: Todas las oficinas en el exterior se fusionarán en 'Casas de la República Dominicana'. Un solo equipo se encargará de atraer turistas, captar inversión extranjera directa para zonas francas y promover las exportaciones nacionales, reduciendo el gasto de representación en más de un 40%.\n• Ventanilla Única de Inversión: Un solo portal digital procesará los permisos ambientales, comerciales y turísticos, reduciendo el tiempo de instalación de una nueva empresa u hotel de años a meses.",
    measurableBenefits: [
      "Aumento del 40% en las compras de los hoteles a productores y MiPymes locales (encadenamiento productivo).",
      "Reducción del 30% en el gasto de promoción internacional al fusionar oficinas comerciales y turísticas en el exterior.",
      "Aceleración en la aprobación de licencias para nuevos polos turísticos e industriales en una 'Ventanilla Única'."
    ],
    managementStructure: [
      { role: "Ministro de Comercio y Turismo", description: "Estrategia económica exterior e interior unificada." },
      { role: "Viceministro de Desarrollo Turístico", description: "Regulación hotelera, desarrollo de polos y calidad turística." },
      { role: "Viceministro de Industria, Comercio y MiPymes", description: "Fomento industrial, zonas francas y encadenamiento productivo." },
      { role: "Director de la Agencia Unificada de Promoción", description: "Atracción de inversión extranjera y promoción de exportaciones." }
    ],
    chartData: [
      { name: 'Compras a MiPymes (%)', Actual: 100, Propuesto: 140, ActualAmount: 'RD$ 15,000 MM', PropuestoAmount: 'RD$ 21,000 MM' },
      { name: 'Gasto Promoción Ext. (%)', Actual: 100, Propuesto: 70, ActualAmount: 'RD$ 3,000 MM', PropuestoAmount: 'RD$ 2,100 MM' },
      { name: 'Tiempo Permisos (%)', Actual: 100, Propuesto: 30, ActualAmount: '24 meses', PropuestoAmount: '7 meses' }
    ],
    logic: "Alinea el principal motor económico del país (turismo) directamente con la inversión extranjera y el desarrollo industrial.",
    icon: Briefcase,
    color: "bg-purple-50 text-purple-700 border-purple-200"
  }
];

// --- Components ---

function Hero() {
  return (
    <div className="bg-[#0a1f44] text-white pt-20 pb-24 px-8 md:px-16 relative overflow-hidden">
      {/* Subtle background pattern/flag */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-px h-full bg-white"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-white"></div>
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
          Proliferación de <span className="text-[#f4b223]">Gabinetes, Consejos e Institutos Ineficientes</span>
        </h2>
        <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl font-light">
          Un análisis de la redundancia estructural y la propuesta de consolidación para una República Dominicana más eficiente, eliminando la duplicidad de funciones y optimizando los recursos públicos.
        </p>
      </div>
    </div>
  );
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-3 border border-gray-200 shadow-lg rounded-lg text-sm z-50">
        <p className="font-bold text-gray-800 mb-2">{label}</p>
        <div className="flex flex-col gap-1.5">
          <p className="text-gray-600 flex items-center">
            <span className="inline-block w-3 h-3 rounded-sm bg-[#9ca3af] mr-2"></span>
            Actual: {data.Actual}% <span className="font-medium text-gray-900 ml-1">({data.ActualAmount})</span>
          </p>
          <p className="text-blue-600 flex items-center">
            <span className="inline-block w-3 h-3 rounded-sm bg-[#3b82f6] mr-2"></span>
            Propuesto: {data.Propuesto}% <span className="font-medium text-blue-900 ml-1">({data.PropuestoAmount})</span>
          </p>
        </div>
      </div>
    );
  }
  return null;
};

function ConsolidationCard({ 
  item, 
  isExpanded, 
  onToggle 
}: { 
  key?: React.Key,
  item: typeof consolidations[0], 
  isExpanded: boolean, 
  onToggle: () => void 
}) {
  const Icon = item.icon;

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.015, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mb-6 group"
    >
      {/* Card Header (Clickable) */}
      <button 
        onClick={onToggle}
        className="w-full text-left p-6 flex flex-col md:flex-row md:items-center gap-6 focus:outline-none"
      >
        <div className={`shrink-0 w-14 h-14 rounded-full flex items-center justify-center border ${item.color}`}>
          <Icon className="w-6 h-6" />
        </div>
        
        <div className="flex-1 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
          {/* Current */}
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Estructura Redundante Actual</p>
            <p className="text-gray-600 font-medium leading-snug">{item.current}</p>
          </div>
          
          {/* Arrow */}
          <div className="hidden md:flex items-center justify-center text-gray-300">
            <ArrowRight className="w-6 h-6" />
          </div>
          <div className="md:hidden flex items-center text-gray-300 py-2">
            <ArrowRight className="w-5 h-5 rotate-90" />
          </div>
          
          {/* Proposed */}
          <div>
            <p className="text-xs font-bold text-[#0a1f44] uppercase tracking-wider mb-1">Entidad Unificada Propuesta</p>
            <p className="text-lg font-bold text-[#0a1f44] leading-snug">{item.proposed}</p>
          </div>
        </div>

        <div className="shrink-0 ml-auto pl-4">
          <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-[#f4b223]" />
          </motion.div>
        </div>
      </button>

      {/* Expandable Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                {/* Current Details */}
                <div className="bg-gray-50 border-l-4 border-gray-400 p-5 rounded-r-md flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="relative group/tooltip flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-gray-500 cursor-help" />
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/tooltip:block w-56 p-2 bg-gray-900 text-white text-xs rounded shadow-xl z-50 text-center font-normal normal-case tracking-normal">
                        Representa la estructura burocrática actual, caracterizada por la fragmentación, duplicidad de funciones y gasto excesivo.
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                      </div>
                    </div>
                    <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                      Situación Actual y Estructuras
                    </h4>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                  >
                    <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                      {item.currentDetails}
                    </p>
                  </motion.div>
                </div>
                
                {/* Proposed Details */}
                <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-md flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="relative group/tooltip flex items-center justify-center">
                      <Puzzle className="w-5 h-5 text-blue-600 cursor-help" />
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/tooltip:block w-56 p-2 bg-blue-900 text-white text-xs rounded shadow-xl z-50 text-center font-normal normal-case tracking-normal">
                        Representa la visión estratégica propuesta, enfocada en la sinergia, eficiencia operativa y mejora del servicio al ciudadano.
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-blue-900"></div>
                      </div>
                    </div>
                    <h4 className="text-sm font-bold text-blue-900 uppercase tracking-wider">
                      Organización de la Entidad Unificada
                    </h4>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
                    className="flex flex-col h-full"
                  >
                    <p className="text-sm text-blue-800 leading-relaxed whitespace-pre-line mb-6">
                      {item.proposedDetails}
                    </p>
                    
                    <div className="mt-auto pt-5 border-t border-blue-200/60">
                      <h5 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Network className="w-4 h-4" />
                        Estructura Directiva Propuesta
                      </h5>
                      <ul className="space-y-3 mb-6">
                        {item.managementStructure.map((role, idx) => (
                          <li key={idx} className="text-sm text-blue-800 leading-snug">
                            <span className="font-bold">{role.role}:</span> <span className="opacity-90">{role.description}</span>
                          </li>
                        ))}
                      </ul>

                      <h5 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-3">
                        Beneficios Medibles
                      </h5>
                      <ul className="space-y-3">
                        {item.measurableBenefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-sm text-blue-800">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                            <span className="leading-snug">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Chart Section */}
              <div className="mb-6 bg-white border border-gray-100 rounded-lg p-5 shadow-sm">
                <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4 text-center">
                  Proyección de Impacto: Actual vs. Propuesto
                </h4>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={item.chartData}
                      margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                      <XAxis dataKey="name" tick={{fontSize: 12, fill: '#6b7280'}} axisLine={false} tickLine={false} />
                      <YAxis tick={{fontSize: 12, fill: '#6b7280'}} axisLine={false} tickLine={false} />
                      <RechartsTooltip 
                        cursor={{fill: '#f3f4f6'}}
                        content={<CustomTooltip />}
                      />
                      <Legend wrapperStyle={{fontSize: '12px', paddingTop: '10px'}} />
                      <Bar dataKey="Actual" fill="#9ca3af" radius={[4, 4, 0, 0]} maxBarSize={50} />
                      <Bar dataKey="Propuesto" fill="#3b82f6" radius={[4, 4, 0, 0]} maxBarSize={50} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-[#d02a27] p-5 rounded-r-md">
                <div className="flex items-center gap-2 mb-2">
                  <div className="relative group/logic flex items-center justify-center">
                    <Zap className="w-5 h-5 text-[#d02a27] cursor-help" />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/logic:block w-64 p-2 bg-red-900 text-white text-xs rounded shadow-xl z-50 text-center font-normal normal-case tracking-normal">
                      El principio subyacente de esta consolidación: maximizar la eficiencia operativa, eliminar la redundancia y reasignar los recursos hacia el servicio directo al ciudadano.
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-red-900"></div>
                    </div>
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                    Eficiencia y Lógica
                  </h4>
                </div>
                <p className="text-gray-800 leading-relaxed">
                  {item.logic}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

type SortOption = 'proposed' | 'current' | 'logic';

export default function App() {
  const [sortBy, setSortBy] = useState<SortOption>('proposed');
  const [sortAsc, setSortAsc] = useState(true);
  const [expandedIds, setExpandedIds] = useState<number[]>([]);

  const sortedConsolidations = [...consolidations].sort((a, b) => {
    const valA = a[sortBy].toLowerCase();
    const valB = b[sortBy].toLowerCase();
    if (valA < valB) return sortAsc ? -1 : 1;
    if (valA > valB) return sortAsc ? 1 : -1;
    return 0;
  });

  const isAllExpanded = expandedIds.length === consolidations.length;

  const toggleExpandAll = () => {
    if (isAllExpanded) {
      setExpandedIds([]);
    } else {
      setExpandedIds(consolidations.map(c => c.id));
    }
  };

  const toggleExpand = (id: number) => {
    setExpandedIds(prev => 
      prev.includes(id) ? prev.filter(expandedId => expandedId !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] font-sans flex flex-col text-gray-900">
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-h-screen">
        <Hero />
        
        {/* Content Container */}
        <div className="flex-1 p-8 md:p-12 -mt-10 relative z-10">
          <div className="max-w-5xl mx-auto">
            
            {/* Main Content Card */}
            <div className="bg-white rounded-xl shadow-lg border-t-8 border-[#d02a27] p-8 md:p-10 mb-10">
              <h3 className="text-2xl font-bold text-[#0a1f44] tracking-wide mb-6 uppercase">
                Plan de Consolidación
              </h3>
              
              {/* Executive Summary */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-[#0a1f44] mb-3">Resumen Ejecutivo</h4>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  El Estado dominicano enfrenta un desafío crítico de diseño institucional: la fragmentación extrema. Durante décadas, la respuesta a cada nuevo problema público ha sido la creación de un nuevo ministerio, consejo o dirección general. Esto ha resultado en un aparato estatal donde múltiples instituciones se solapan, compiten por presupuesto y duplican estructuras administrativas (RRHH, Compras, TI), diluyendo el impacto de las políticas públicas.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Este Plan de Consolidación propone una reingeniería profunda del Poder Ejecutivo. Al fusionar instituciones con misiones afines bajo un modelo de "Servicios Compartidos", no solo se elimina la burocracia parasitaria, sino que se mejora radicalmente la prestación de servicios al ciudadano. La meta es transitar de un modelo de "feudos institucionales" a un Estado ágil, coordinado y enfocado en resultados medibles.
                </p>
              </div>

              {/* Financial Impact Callout */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-3 rounded-full shrink-0 mt-1">
                    <Landmark className="w-6 h-6 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-emerald-900 mb-2">Impacto Financiero y Ahorro Anual Estimado</h4>
                    <p className="text-emerald-800 leading-relaxed mb-3 text-sm md:text-base">
                      Se estima que la implementación integral de este plan de consolidación generaría un ahorro anual superior a los <strong>RD$45,000 millones</strong> (aproximadamente el 1.5% del PIB). Este ahorro masivo no proviene de recortes en servicios sociales, sino de la eliminación radical de la duplicidad administrativa: reducción drástica de alquileres de sedes provinciales, unificación de nóminas gerenciales y de apoyo (RRHH, TI, Compras), centralización de licitaciones del Estado y la erradicación de plataformas tecnológicas paralelas.
                    </p>
                    <p className="text-emerald-800 leading-relaxed text-sm md:text-base">
                      En lugar de sostener un gasto corriente insostenible, estos fondos recuperados permitirán una reinversión directa en el desarrollo nacional. Esto se traduce en mayor presupuesto para la construcción de infraestructura crítica, la expansión de la red de refugios, el aumento de becas universitarias y la mejora sustancial en la calidad de los servicios públicos, logrando un Estado moderno, ágil y verdaderamente orientado al ciudadano.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex flex-col md:flex-row md:items-center justify-between border-b pb-4 mb-6 gap-4">
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">
                    Plan de Consolidación de Departamentos
                  </h4>
                  
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500 font-medium">Ordenar por:</span>
                      <select 
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as SortOption)}
                        className="bg-gray-50 border border-gray-200 text-gray-700 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#0a1f44]/20 cursor-pointer"
                      >
                        <option value="proposed">Entidad Propuesta</option>
                        <option value="current">Estructura Actual</option>
                        <option value="logic">Lógica de Eficiencia</option>
                      </select>
                      <button 
                        onClick={() => setSortAsc(!sortAsc)}
                        className="p-1.5 bg-gray-50 border border-gray-200 rounded-md text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
                        title={sortAsc ? "Orden Ascendente" : "Orden Descendente"}
                      >
                        {sortAsc ? <ArrowDownAZ className="w-4 h-4" /> : <ArrowUpZA className="w-4 h-4" />}
                      </button>
                    </div>

                    <div className="w-px h-6 bg-gray-200 hidden md:block mx-1"></div>

                    <button
                      onClick={toggleExpandAll}
                      className="flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-200 text-gray-700 rounded-md font-medium hover:bg-gray-50 hover:text-[#0a1f44] transition-colors cursor-pointer"
                    >
                      {isAllExpanded ? (
                        <>
                          <ChevronsDownUp className="w-4 h-4" />
                          <span>Colapsar Todos</span>
                        </>
                      ) : (
                        <>
                          <ChevronsUpDown className="w-4 h-4" />
                          <span>Expandir Todos</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
                
                {/* Interactive List */}
                <div className="space-y-4">
                  <AnimatePresence mode="popLayout">
                    {sortedConsolidations.map((item) => (
                      <ConsolidationCard 
                        key={item.id} 
                        item={item} 
                        isExpanded={expandedIds.includes(item.id)}
                        onToggle={() => toggleExpand(item.id)}
                      />
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
