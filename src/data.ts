import { BookOpen, Plane, HeartHandshake, Zap, Scale, Leaf, Activity, Landmark, Building2, Lightbulb, Briefcase } from 'lucide-react';
import { Sector } from './types';

export const sectors: Sector[] = [
  {
    id: 'gov-efficiency',
    title: 'Eficiencia Gubernamental',
    icon: Landmark,
    overview: 'Transformación radical del aparato estatal hacia un modelo minimalista, eficiente y basado en datos, eliminando la burocracia redundante y optimizando la división territorial.',
    megaproject: {
      title: 'Reestructuración del Estado y Rediseño Territorial',
      description: 'Un plan integral para consolidar 24 ministerios en 8 esenciales, aplicar cláusulas de extinción a más de 100 entidades autónomas y reformar la constitución para reemplazar 31 provincias por 7 macro-regiones económicas.',
      timeline: [
        { phase: '2026-2027', description: 'Fase inicial de planificación, auditoría, diseño arquitectónico y referendos para la reforma constitucional.' },
        { phase: '2028-2029', description: 'Despliegue de infraestructura base, fusión de ministerios y programas piloto en 2 macro-regiones.' },
        { phase: '2030+', description: 'Expansión a nivel nacional, optimización continua y evaluación de impacto de las cláusulas de extinción.' }
      ],
      partners: ['Banco Interamericano de Desarrollo (BID)', 'Ministerio de Economía, Planificación y Desarrollo', 'Sector Privado Local', 'ONGs Internacionales', 'Agencias de Cooperación (USAID, JICA)']
    },
    problems: [
      {
        id: 'gov-1',
        upvotes: 0,
        downvotes: 0,
        title: 'Exceso de Ministerios y Gasto Administrativo Desproporcionado',
        description: 'El país cuenta con 24 ministerios que generan solapamientos de funciones, burocracia paralizante y un gasto administrativo que consume una gran parte del presupuesto nacional.',
        solution: {
          leader: 'Javier Milei & Elon Musk',
          model: 'Gobierno Minimalista y Fusión Funcional',
          description: 'Consolidar los 24 ministerios actuales en 8 carteras esenciales (Economía, Infraestructura, Seguridad, Salud, Educación, RR.EE., Justicia y Medio Ambiente), reduciendo el empleo ineficiente.',
          extendedDescription: `La consolidación de ministerios eliminará duplicidades de funciones, centralizando recursos humanos, compras y TI. Se implementará un sistema de 'servicios compartidos' para todo el gobierno. Esto reducirá drásticamente el gasto corriente, permitiendo redirigir fondos hacia inversión de capital, infraestructura crítica y reducción de la deuda pública. La transición incluirá auditorías de personal para retener solo el talento esencial y digitalizar procesos burocráticos.`,
          implementationSteps: [
            'Fase 1: Auditoría de funciones y diseño de la nueva estructura de 8 ministerios (Meses 1-3)',
            'Fase 2: Fusión de plataformas tecnológicas y sistemas de compras (Meses 4-6)',
            'Fase 3: Reubicación de personal esencial y programas de retiro voluntario (Meses 7-12)',
            'Fase 4: Consolidación física de sedes ministeriales para ahorro en alquileres (Año 2)',
            'Fase 5: Operación plena bajo el nuevo modelo minimalista (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 40% en gastos operativos y nómina administrativa.',
            'Aceleración en la toma de decisiones gubernamentales al eliminar cuellos de botella.',
            'Ahorro significativo en alquileres y mantenimiento de edificios gubernamentales.',
            'Mayor transparencia al centralizar las compras y contrataciones del Estado.'
          ],
          chartData: [
            { name: 'Año 1', value: 40 },
            { name: 'Año 2', value: 75 },
            { name: 'Año 3', value: 115 },
            { name: 'Año 4', value: 160 },
            { name: 'Año 5', value: 220 }
          ],
          imageUrl: 'https://picsum.photos/seed/gov-1-solution/800/400',
          internalRoute: '/gabinetes',
          enrichedContent: {
            tldr: 'Reducir de 24 a 8 ministerios eliminará cuellos de botella y ahorrará millones anualmente en nómina superflua.',
            leaderQuote: { quote: 'No hay plata. El Estado no genera riqueza, solo la gasta. Hay que pasar la motosierra a la burocracia.', author: 'Javier Milei', context: 'Discurso de Asunción 2023' },
            citizenPersona: { name: 'Carlos', age: 45, occupation: 'Empresario Pyme', story: 'Carlos perdía 14 días al mes tramitando permisos entre 4 ministerios distintos para operar su fábrica. En el futuro, un solo portal centralizado bajo el Ministerio de Economía aprobará sus licencias en 24 horas usando Inteligencia Artificial.' },
            risks: [
              { risk: 'Protestas sindicales por cesantías masivas.', mitigation: 'Programa de retiro anticipado y transición al sector privado con subsidio temporal.' },
              { risk: 'Parálisis temporal de servicios durante la fusión.', mitigation: 'Fusión escalonada comenzando por plataformas digitales antes que la estructura física.' }
            ],
            historicalContext: 'Históricamente, los ministerios en la República Dominicana se han utilizado como moneda de cambio político para pagar favores de campaña, resultando en un estado elefantásico.',
            urgency: 'Crítica',
            references: [
              { id: 1, title: 'Estudio BID: Ineficiencia del Gasto Público en LatAm', url: 'https://www.iadb.org' },
              { id: 2, title: 'El Modelo Estonio de Gobernanza Digital', url: 'https://e-estonia.com' }
            ],
            audioNarrativeUrl: '#',
            expertEndorsement: { expert: 'Ricardo Hausmann', entity: 'Harvard Growth Lab', quote: 'La fragmentación del Estado es el principal obstáculo para el desarrollo coordinado en economías emergentes.' },
            legislativePathway: 'Requiere modificación de la Ley 247-12 Orgánica de la Administración Pública y aprobación en el Congreso Nacional con mayoría simple.',
            faqs: [
              { question: '¿Qué pasará con los empleados despedidos?', answer: 'Se les ofrecerá un paquete de transición laboral y recapacitación para el sector privado tecnológico.' },
              { question: '¿Se verán afectados los servicios esenciales de salud y educación?', answer: 'No. Salud y Educación se mantienen como ministerios pilares; el recorte afecta a burocracia duplicada (ej: Min. de la Mujer, Min. de la Juventud, consolidándose bajo un solo Ministerio de Desarrollo Social).' }
            ],
            costOfInaction: 'USD $850 Millones anuales en nóminas y viáticos de puestos no esenciales.',
            regionalImpact: [
              { region: 'Distrito Nacional', impact: 'Liberación masiva de tráfico y ahorro en alquileres al vaciar torres gubernamentales enteras.' },
              { region: 'Provincias', impact: 'Agilización de trámites al no depender de burocracia capitalina dispersa.' }
            ],
            crossSectorLinkages: ['fin-11', 'gov-2', 'inf-2'],
            realWorldModels: [
              { country: 'Estonia', description: 'Gobierno 99% digitalizado y minimalista.', url: 'https://e-estonia.com' },
              { country: 'Argentina (2023+)', description: 'Reducción de 18 a 9 ministerios en una semana.' }
            ],
            trivia: ['Sabías que el costo de alquiler de oficinas para ministerios no propietarios supera los $100 millones de pesos mensuales en Santo Domingo.']
          }
        }
      },
      {
        id: 'gov-2',
        upvotes: 0,
        downvotes: 0,
        title: 'Ineficiencia y Sobredimensionamiento de las Fuerzas Armadas',
        description: 'La República Dominicana mantiene una estructura militar con una cantidad desproporcionada de generales y altos mandos en comparación con el tamaño de sus fuerzas y las amenazas reales a la seguridad nacional.',
        solution: {
          leader: 'Modelo de Eficiencia Militar (ej. Israel/Singapur)',
          model: 'Racionalización y Modernización de las Fuerzas Armadas',
          description: 'Reducir drásticamente el número de generales, implementando un sistema de ascensos estrictamente basado en el mérito. Modernizar las fuerzas hacia unidades más pequeñas, ágiles y tecnológicas.',
          extendedDescription: `La reestructuración militar implica una auditoría completa del personal activo y en retiro, eliminando posiciones redundantes y 'botellas'. Se establecerá un límite estricto por ley para la cantidad de generales, ajustado a estándares internacionales (ej. 1 general por cada X miles de soldados). Los ahorros generados por la reducción de la cúpula militar se reinvertirán en tecnología de vigilancia fronteriza (drones, sensores), ciberseguridad y mejora de las condiciones de vida y equipamiento de las tropas operativas reales.`,
          implementationSteps: [
            'Fase 1: Censo militar estricto y auditoría de nóminas para eliminar personal fantasma (Meses 1-3)',
            'Fase 2: Retiro forzoso o voluntario del exceso de altos mandos y generales (Meses 4-6)',
            'Fase 3: Aprobación de nueva Ley Orgánica de las Fuerzas Armadas con límites estrictos de rangos (Meses 7-12)',
            'Fase 4: Redirección de presupuesto hacia tecnología fronteriza y ciberseguridad (Año 2)',
            'Fase 5: Consolidación de fuerzas ágiles y altamente tecnificadas (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción drástica del gasto en pensiones y salarios de altos mandos innecesarios.',
            'Fuerzas Armadas más profesionales, ágiles y enfocadas en amenazas modernas.',
            'Mejora sustancial en la seguridad fronteriza mediante inversión en tecnología.',
            'Eliminación del clientelismo político en los ascensos militares.'
          ],
          chartData: [
            { name: 'Año 1', value: 50 },
            { name: 'Año 2', value: 90 },
            { name: 'Año 3', value: 135 },
            { name: 'Año 4', value: 185 },
            { name: 'Año 5', value: 250 }
          ],
          imageUrl: 'https://picsum.photos/seed/gov-2-solution/800/400',
          internalRoute: '/gasto-militar'
        }
      },
      {
        id: 'gov-3',
        upvotes: 0,
        downvotes: 0,
        title: 'División Territorial Ineficiente y Burocracia Política Excesiva',
        description: 'La división en 31 provincias más el Distrito Nacional genera una burocracia política insostenible (gobernadores, asambleas) y un Senado inflado, desconectado de la lógica económica.',
        solution: {
          leader: 'Modelo Suizo & Taiwán',
          model: 'Macro-Regiones Económicas',
          description: 'Reforma constitucional para abolir las 31 provincias y crear 7 macro-regiones basadas en densidad y lógica económica, reduciendo el Senado de 32 a 14 miembros y eliminando el 80% de la burocracia política.',
          extendedDescription: `La implementación del modelo de Modelo Suizo & Taiwán requiere una reestructuración profunda. Reforma constitucional para abolir las 31 provincias y crear 7 macro-regiones basadas en densidad y lógica económica, reduciendo el Senado de 32 a 14 miembros y eliminando el 80% de la burocracia política. Esto implica un cambio radical en la forma en que abordamos el problema de "División Territorial Ineficiente y Burocracia Política Excesiva", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Macro-Regiones Económicas (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Macro-Regiones Económicas.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 60 },
            { name: 'Año 2', value: 105 },
            { name: 'Año 3', value: 155 },
            { name: 'Año 4', value: 210 },
            { name: 'Año 5', value: 280 }
          ],
          imageUrl: 'https://picsum.photos/seed/gov-3-solution/800/400',
          internalRoute: '/reorganizacion-territorial'
        }
      },
      {
        id: 'gov-4',
        upvotes: 0,
        downvotes: 0,
        title: 'La Tributación de los Combustibles en la República Dominicana',
        description: 'Dependencia de impuestos a combustibles combinada con subsidios discrecionales que neutralizan la recaudación y generan ineficiencia.',
        solution: {
          leader: 'Modelo Basado en Reglas',
          model: 'Impuesto Variable y Subsidios Focalizados',
          description: 'Reemplazar subsidios generalizados por un impuesto variable automático y apoyo focalizado a sectores vulnerables, gestionado por una comisión independiente.',
          extendedDescription: `La reforma transforma la tributación de combustibles en un modelo transparente y fiscalmente sostenible, separando la política fiscal de la protección social.

**El eje central es un Sistema de Impuesto Variable:** si el petróleo global sube, el impuesto baja para proteger al consumidor; si baja, el impuesto sube para proteger los ingresos del Estado. Esto estabiliza los precios internos sin necesidad de subsidios discrecionales.

**Se eliminan los costosos subsidios generalizados**, reemplazándolos por un Apoyo Energético Focalizado exclusivo para hogares vulnerables, transporte público y sectores estratégicos.

Además, una comisión independiente fijará los precios mediante una fórmula transparente, y parte de la recaudación se reinvertirá directamente en infraestructura y transición energética (ring-fencing). El resultado: combustibles como fuente de ingresos predecible y asistencia social verdaderamente equitativa.`,
          implementationSteps: [
            'Fase 1: Creación de la comisión independiente y diseño de la fórmula del Impuesto Variable (Meses 1-6)',
            'Fase 2: Identificación de beneficiarios y diseño del Programa de Apoyo Energético Focalizado (Meses 7-12)',
            'Fase 3: Reducción gradual de subsidios generalizados e implementación de subsidios focalizados (Año 2)',
            'Fase 4: Implementación completa del Impuesto Variable y esquema de ring-fencing (Año 3)',
            'Fase 5: Evaluación de impacto y ajuste de la fórmula y programas de apoyo (Año 4+)'
          ],
          expectedOutcomes: [
            'Estabilización de los ingresos fiscales provenientes de los combustibles.',
            'Reducción drástica del gasto público en subsidios generalizados ineficientes.',
            'Protección efectiva de los sectores vulnerables y estratégicos ante la volatilidad de precios.',
            'Aumento de la inversión en transporte público, infraestructura y transición energética.'
          ],
          chartData: [
            { name: 'Año 1', value: 20 },
            { name: 'Año 2', value: 45 },
            { name: 'Año 3', value: 80 },
            { name: 'Año 4', value: 120 },
            { name: 'Año 5', value: 180 }
          ],
          imageUrl: 'https://picsum.photos/seed/fueltax/800/400'
        }
      }
    ]
  },
  {
    id: 'education',
    title: 'Educación',
    icon: BookOpen,
    overview: 'Una reforma estratégica del Sistema Educativo de la República Dominicana, abordando déficits cognitivos graves, inequidad extrema y exceso administrativo.',
    megaproject: {
      title: 'Plataforma Nacional de IA Offline y Evaluación Basada en el Mérito',
      description: 'El despliegue de una infraestructura educativa que no dependa de la conectividad rural ni de la deficiente formación de los maestros actuales. Cada estudiante recibirá un dispositivo reforzado con un "Tutor de Inteligencia Artificial" que opera sin internet, adaptándose al ritmo de aprendizaje del alumno. Esto se empareja con un programa constante de evaluación docente: pagos a nivel de médicos especialistas para los excelentes, y reemplazo para los que no superen las pruebas de conocimiento.'
        ,
      timeline: [
        { phase: '2026-2027', description: 'Fase inicial de planificación, auditoría y diseño arquitectónico.' },
        { phase: '2028-2029', description: 'Despliegue de infraestructura base y programas piloto en zonas clave.' },
        { phase: '2030+', description: 'Expansión a nivel nacional, optimización continua y evaluación de impacto.' }
      ],
      partners: ['Banco Interamericano de Desarrollo (BID)', 'Ministerio de Economía, Planificación y Desarrollo', 'Sector Privado Local', 'ONGs Internacionales', 'Agencias de Cooperación (USAID, JICA)']
    },
    problems: [
      {
        id: 'edu-1',
        upvotes: 0,
        downvotes: 0,
        title: 'Déficits Cognitivos Graves',
        description: 'La RD se clasifica consistentemente en el fondo de las evaluaciones PISA (339 en matemáticas), exponiendo una falla fundamental en el enfoque pedagógico que depende de la memorización.',
        solution: {
          leader: 'Lee Kuan Yew',
          model: 'Modelo de Singapur',
          description: 'Sistema Basado en el Mérito y Mejora Continua. Eliminar la inflación de calificaciones, implementar seguimiento nacional y hacer cumplir la transparencia a través del "Modelo de Excelencia Escolar" vinculando la permanencia al crecimiento cognitivo.',
          extendedDescription: `La implementación del modelo de Lee Kuan Yew requiere una reestructuración profunda. Sistema Basado en el Mérito y Mejora Continua. Eliminar la inflación de calificaciones, implementar seguimiento nacional y hacer cumplir la transparencia a través del "Modelo de Excelencia Escolar" vinculando la permanencia al crecimiento cognitivo. Esto implica un cambio radical en la forma en que abordamos el problema de "Déficits Cognitivos Graves", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Modelo de Singapur (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Modelo de Singapur.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 30 },
            { name: 'Año 2', value: 60 },
            { name: 'Año 3', value: 95 },
            { name: 'Año 4', value: 135 },
            { name: 'Año 5', value: 190 }
          ],
          imageUrl: 'https://i.imgur.com/NsLNNEq.jpeg'
        }
      },
      {
        id: 'edu-2',
        upvotes: 0,
        downvotes: 0,
        title: 'Mala Asignación Fiscal y Exceso Administrativo',
        description: 'El presupuesto del 4% del PIB está plagado de profunda ineficiencia, consumido por la exceso de personal, gastos innecesarios y adquisiciones ineficientes.',
        solution: {
          leader: 'Javier Milei',
          model: 'Modelo Financiero de Singapur',
          description: 'Optimización de Recursos y Subvenciones en Bloque Basadas en el Desempeño. Presupuesto base cero constante para gastos no instructivos y revisiones constantes por parte de una Oficina del Auditor General.',
          extendedDescription: `La implementación del modelo de Javier Milei requiere una reestructuración profunda. Optimización de Recursos y Subvenciones en Bloque Basadas en el Desempeño. Presupuesto base cero constante para gastos no instructivos y revisiones constantes por parte de una Oficina del Auditor General. Esto implica un cambio radical en la forma en que abordamos el problema de "Mala Asignación Fiscal y Exceso Administrativo", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Modelo Financiero de Singapur (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Modelo Financiero de Singapur.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 40 },
            { name: 'Año 2', value: 75 },
            { name: 'Año 3', value: 115 },
            { name: 'Año 4', value: 160 },
            { name: 'Año 5', value: 220 }
          ],
          imageUrl: 'https://i.imgur.com/zYVVXui.jpeg'
        }
      },
      {
        id: 'edu-3',
        upvotes: 0,
        downvotes: 0,
        title: 'Control excesivo Sindical y Protección de la Bajo rendimiento',
        description: 'El sindicato ADP ejerce un control casi absoluto, resiste las evaluaciones basadas en el mérito y protege a los educadores de bajo rendimiento, mientras que las pagos forzosos afectan los salarios de los maestros.',
        solution: {
          leader: 'Margaret Thatcher',
          model: 'Modelo de Alemania',
          description: 'Apertura a Nuevas Opciones y Certificación Transparente. Descentralizar la certificación a entidades independientes, introducir pago por desempeño y hacer que las cuotas sindicales sean estrictamente voluntarias.',
          extendedDescription: `La implementación del modelo de Margaret Thatcher requiere una reestructuración profunda. Apertura a Nuevas Opciones y Certificación Transparente. Descentralizar la certificación a entidades independientes, introducir pago por desempeño y hacer que las cuotas sindicales sean estrictamente voluntarias. Esto implica un cambio radical en la forma en que abordamos el problema de "Control excesivo Sindical y Protección de la Bajo rendimiento", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Modelo de Alemania (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Modelo de Alemania.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 50 },
            { name: 'Año 2', value: 90 },
            { name: 'Año 3', value: 135 },
            { name: 'Año 4', value: 185 },
            { name: 'Año 5', value: 250 }
          ],
          imageUrl: 'https://picsum.photos/seed/edu-3-solution/800/400'
        }
      },
      {
        id: 'edu-4',
        upvotes: 0,
        downvotes: 0,
        title: 'Infraestructura Escolar Deficiente',
        description: 'A pesar del presupuesto, muchas escuelas carecen de servicios básicos, conectividad y espacios adecuados para el aprendizaje moderno.',
        solution: {
          leader: 'Nayib Bukele',
          model: 'Modelo de Construcción Acelerada',
          description: 'Implementar un plan de choque de infraestructura utilizando diseños modulares estandarizados y alianzas público-privadas para renovar el 100% de las escuelas críticas en 24 meses.',
          extendedDescription: `La implementación del modelo de Nayib Bukele requiere una reestructuración profunda. Implementar un plan de choque de infraestructura utilizando diseños modulares estandarizados y alianzas público-privadas para renovar el 100% de las escuelas críticas en 24 meses. Esto implica un cambio radical en la forma en que abordamos el problema de "Infraestructura Escolar Deficiente", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Modelo de Construcción Acelerada (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Modelo de Construcción Acelerada.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 60 },
            { name: 'Año 2', value: 105 },
            { name: 'Año 3', value: 155 },
            { name: 'Año 4', value: 210 },
            { name: 'Año 5', value: 280 }
          ],
          imageUrl: 'https://picsum.photos/seed/edu-4-solution/800/400'
        }
      },
      {
        id: 'edu-5',
        upvotes: 0,
        downvotes: 0,
        title: 'Brecha Digital y Tecnológica',
        description: 'Desigualdad extrema en el acceso a dispositivos y conectividad de alta velocidad, limitando la educación STEM en zonas rurales y marginadas.',
        solution: {
          leader: 'Elon Musk',
          model: 'Conectividad Satelital Universal',
          description: 'Desplegar internet satelital (ej. Starlink) en todas las escuelas rurales y proveer dispositivos de bajo costo con software educativo pre-cargado y tutores de IA offline.',
          extendedDescription: `La implementación del modelo de Elon Musk requiere una reestructuración profunda. Desplegar internet satelital (ej. Starlink) en todas las escuelas rurales y proveer dispositivos de bajo costo con software educativo pre-cargado y tutores de IA offline. Esto implica un cambio radical en la forma en que abordamos el problema de "Brecha Digital y Tecnológica", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Conectividad Satelital Universal (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Conectividad Satelital Universal.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 20 },
            { name: 'Año 2', value: 45 },
            { name: 'Año 3', value: 75 },
            { name: 'Año 4', value: 110 },
            { name: 'Año 5', value: 160 }
          ],
          imageUrl: 'https://picsum.photos/seed/edu-5-solution/800/400'
        }
      },
      {
        id: 'edu-6',
        upvotes: 0,
        downvotes: 0,
        title: 'Deficiencia Crítica en Bilingüismo',
        description: 'El dominio del inglés es extremadamente bajo entre los graduados de escuelas públicas, excluyéndolos de la economía global de servicios y tecnología.',
        solution: {
          leader: 'Lee Kuan Yew',
          model: 'Bilingüismo Obligatorio Inmersivo',
          description: 'Implementar el inglés como segundo idioma de instrucción obligatoria desde preescolar, importando maestros nativos temporalmente mientras se recapacita intensivamente al personal local.',
          extendedDescription: `La implementación del modelo de Lee Kuan Yew requiere una reestructuración profunda. Implementar el inglés como segundo idioma de instrucción obligatoria desde preescolar, importando maestros nativos temporalmente mientras se recapacita intensivamente al personal local. Esto implica un cambio radical en la forma en que abordamos el problema de "Deficiencia Crítica en Bilingüismo", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Bilingüismo Obligatorio Inmersivo (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Bilingüismo Obligatorio Inmersivo.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 30 },
            { name: 'Año 2', value: 60 },
            { name: 'Año 3', value: 95 },
            { name: 'Año 4', value: 135 },
            { name: 'Año 5', value: 190 }
          ],
          imageUrl: 'https://picsum.photos/seed/edu-6-solution/800/400'
        }
      },
      {
        id: 'edu-7',
        upvotes: 0,
        downvotes: 0,
        title: 'Fallas en la Alimentación Escolar (INABIE)',
        description: 'Problemas recurrentes de calidad, intoxicaciones y corrupción en la adjudicación de contratos de almuerzos escolares, afectando la nutrición y el aprendizaje.',
        solution: {
          leader: 'Nayib Bukele',
          model: 'Centralización y Auditoría Estricta',
          description: 'Digitalizar y centralizar las compras públicas de alimentos mediante subastas inversas transparentes, con penalidades penales severas por incumplimiento de estándares nutricionales y de salubridad.',
          extendedDescription: `La implementación del modelo de Nayib Bukele requiere una reestructuración profunda. Digitalizar y centralizar las compras públicas de alimentos mediante subastas inversas transparentes, con penalidades penales severas por incumplimiento de estándares nutricionales y de salubridad. Esto implica un cambio radical en la forma en que abordamos el problema de "Fallas en la Alimentación Escolar (INABIE)", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Centralización y Auditoría Estricta (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Centralización y Auditoría Estricta.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 40 },
            { name: 'Año 2', value: 75 },
            { name: 'Año 3', value: 115 },
            { name: 'Año 4', value: 160 },
            { name: 'Año 5', value: 220 }
          ],
          imageUrl: 'https://picsum.photos/seed/edu-7-solution/800/400'
        }
      },
      {
        id: 'edu-8',
        upvotes: 0,
        downvotes: 0,
        title: 'Ausencia de Educación Cívica y Financiera',
        description: 'Los estudiantes se gradúan sin conocimientos básicos sobre el manejo del dinero, impuestos, o sus deberes y derechos constitucionales.',
        solution: {
          leader: 'Warren Buffett',
          model: 'Alfabetización Práctica Obligatoria',
          description: 'Integrar un currículo obligatorio de finanzas personales, inversión básica y civismo práctico en la escuela secundaria, como requisito indispensable para la graduación.',
          extendedDescription: `La implementación del modelo de Warren Buffett requiere una reestructuración profunda. Integrar un currículo obligatorio de finanzas personales, inversión básica y civismo práctico en la escuela secundaria, como requisito indispensable para la graduación. Esto implica un cambio radical en la forma en que abordamos el problema de "Ausencia de Educación Cívica y Financiera", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Alfabetización Práctica Obligatoria (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Alfabetización Práctica Obligatoria.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 50 },
            { name: 'Año 2', value: 90 },
            { name: 'Año 3', value: 135 },
            { name: 'Año 4', value: 185 },
            { name: 'Año 5', value: 250 }
          ],
          imageUrl: 'https://picsum.photos/seed/edu-8-solution/800/400'
        }
      },
      {
        id: 'edu-9',
        upvotes: 0,
        downvotes: 0,
        title: 'Profesores Fantasmas ("Botellas") en la Nómina',
        description: 'Miles de personas cobran salarios como maestros sin presentarse a las aulas, drenando el presupuesto educativo y la calidad de la enseñanza.',
        solution: {
          leader: 'Javier Milei',
          model: 'Auditoría Forense y Revisión profunda',
          description: 'Ejecutar una auditoría forense financiera constante de la nómina y terminar inmediatamente a todo el personal no verificado.',
          extendedDescription: `La implementación del modelo de Javier Milei requiere una reestructuración profunda. Ejecutar una auditoría forense financiera constante de la nómina y terminar inmediatamente a todo el personal no verificado. Esto implica un cambio radical en la forma en que abordamos el problema de "Profesores Fantasmas ("Botellas") en la Nómina", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Auditoría Forense y Revisión profunda (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Auditoría Forense y Revisión profunda.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 60 },
            { name: 'Año 2', value: 105 },
            { name: 'Año 3', value: 155 },
            { name: 'Año 4', value: 210 },
            { name: 'Año 5', value: 280 }
          ],
          imageUrl: 'https://picsum.photos/seed/edu-9-solution/800/400'
        }
      },
      {
        id: 'edu-10',
        upvotes: 0,
        downvotes: 0,
        title: 'Educadores con Deficiencias de Dominio',
        description: 'Maestros mal capacitados que dependen de la memorización tradicional en lugar del dominio de la materia y metodologías modernas.',
        solution: {
          leader: 'Elon Musk',
          model: 'Tutores de IA Offline',
          description: 'Evitar la brecha de calidad docente equipando a los estudiantes con tabletas resistentes que ejecuten tutores de IA locales y fuera de línea.',
          extendedDescription: `La implementación del modelo de Elon Musk requiere una reestructuración profunda. Evitar la brecha de calidad docente equipando a los estudiantes con tabletas resistentes que ejecuten tutores de IA locales y fuera de línea. Esto implica un cambio radical en la forma en que abordamos el problema de "Educadores con Deficiencias de Dominio", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Tutores de IA Offline (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Tutores de IA Offline.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 20 },
            { name: 'Año 2', value: 45 },
            { name: 'Año 3', value: 75 },
            { name: 'Año 4', value: 110 },
            { name: 'Año 5', value: 160 }
          ],
          imageUrl: 'https://picsum.photos/seed/edu-10-solution/800/400'
        }
      },
      {
        id: 'edu-11',
        upvotes: 0,
        downvotes: 0,
        title: 'Carencia Severa de Enfoque STEM',
        description: 'Falta de énfasis en ciencia, tecnología, ingeniería y matemáticas, dejando a los estudiantes sin preparación para el futuro.',
        solution: {
          leader: 'Lee Kuan Yew',
          model: 'Enfoque STEM Singapurense',
          description: 'Desviar fondos directamente a las vías de tecnología e ingeniería, utilizando herramientas de IA para enseñar conceptos avanzados a un ritmo individual.',
          extendedDescription: `La implementación del modelo de Lee Kuan Yew requiere una reestructuración profunda. Desviar fondos directamente a las vías de tecnología e ingeniería, utilizando herramientas de IA para enseñar conceptos avanzados a un ritmo individual. Esto implica un cambio radical en la forma en que abordamos el problema de "Carencia Severa de Enfoque STEM", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Enfoque STEM Singapurense (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Enfoque STEM Singapurense.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 30 },
            { name: 'Año 2', value: 60 },
            { name: 'Año 3', value: 95 },
            { name: 'Año 4', value: 135 },
            { name: 'Año 5', value: 190 }
          ],
          imageUrl: 'https://picsum.photos/seed/edu-11-solution/800/400'
        }
      },
      {
        id: 'edu-12',
        upvotes: 0,
        downvotes: 0,
        title: 'Violencia y Pandillas en Entornos Escolares',
        description: 'Inseguridad, violencia y reclutamiento de pandillas dentro y alrededor de las escuelas en zonas urbanas de alto riesgo.',
        solution: {
          leader: 'Nayib Bukele',
          model: 'Perímetros de Seguridad de Tolerancia Cero',
          description: 'Mapear escuelas urbanas de alto riesgo y establecer perímetros militares seguros y de tolerancia cero para detener el reclutamiento de pandillas y la violencia.',
          extendedDescription: `La implementación del modelo de Nayib Bukele requiere una reestructuración profunda. Mapear escuelas urbanas de alto riesgo y establecer perímetros militares seguros y de tolerancia cero para detener el reclutamiento de pandillas y la violencia. Esto implica un cambio radical en la forma en que abordamos el problema de "Violencia y Pandillas en Entornos Escolares", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Perímetros de Seguridad de Tolerancia Cero (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Perímetros de Seguridad de Tolerancia Cero.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 40 },
            { name: 'Año 2', value: 75 },
            { name: 'Año 3', value: 115 },
            { name: 'Año 4', value: 160 },
            { name: 'Año 5', value: 220 }
          ],
          imageUrl: 'https://picsum.photos/seed/edu-12-solution/800/400'
        }
      },
      {
        id: 'edu-13',
        upvotes: 0,
        downvotes: 0,
        title: 'Altas Tasas de Embarazo Adolescente',
        description: 'El embarazo adolescente descarrila la educación de las estudiantes femeninas, perpetuando el ciclo de pobreza y deserción escolar.',
        solution: {
          leader: 'Jacinda Ardern',
          model: 'Clínicas de Salud Reproductiva Integradas',
          description: 'Integrar clínicas de salud reproductiva gratuitas y confidenciales directamente en la infraestructura física de las escuelas secundarias.',
          extendedDescription: `La implementación del modelo de Jacinda Ardern requiere una reestructuración profunda. Integrar clínicas de salud reproductiva gratuitas y confidenciales directamente en la infraestructura física de las escuelas secundarias. Esto implica un cambio radical en la forma en que abordamos el problema de "Altas Tasas de Embarazo Adolescente", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Clínicas de Salud Reproductiva Integradas (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Clínicas de Salud Reproductiva Integradas.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 50 },
            { name: 'Año 2', value: 90 },
            { name: 'Año 3', value: 135 },
            { name: 'Año 4', value: 185 },
            { name: 'Año 5', value: 250 }
          ],
          imageUrl: 'https://picsum.photos/seed/edu-13-solution/800/400'
        }
      },
      {
        id: 'edu-14',
        upvotes: 0,
        downvotes: 0,
        title: 'Desconexión con el Mercado Laboral',
        description: 'Ausencia de vías vocacionales rigurosas y un diploma de secundaria genérico que no prepara a los estudiantes para las industrias locales.',
        solution: {
          leader: 'Angela Merkel',
          model: 'Sistema Dual Alemán',
          description: 'Eliminar el diploma de secundaria genérico y dirigir a los estudiantes hacia aprendizajes vocacionales directos (Politécnicos) cofinanciados con el sector privado.',
          extendedDescription: `La implementación del modelo de Angela Merkel requiere una reestructuración profunda. Eliminar el diploma de secundaria genérico y dirigir a los estudiantes hacia aprendizajes vocacionales directos (Politécnicos) cofinanciados con el sector privado. Esto implica un cambio radical en la forma en que abordamos el problema de "Desconexión con el Mercado Laboral", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Sistema Dual Alemán (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Sistema Dual Alemán.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 60 },
            { name: 'Año 2', value: 105 },
            { name: 'Año 3', value: 155 },
            { name: 'Año 4', value: 210 },
            { name: 'Año 5', value: 280 }
          ],
          imageUrl: 'https://picsum.photos/seed/edu-14-solution/800/400'
        }
      },
      {
        id: 'edu-15',
        upvotes: 0,
        downvotes: 0,
        title: 'Cobertura Insuficiente de Educación Infantil (INAIPI)',
        description: 'Falta de centros de atención a la primera infancia, lo que provoca déficits cognitivos permanentes desde una edad temprana.',
        solution: {
          leader: 'Sanna Marin',
          model: 'Expansión Nórdica de Primera Infancia',
          description: 'Expandir rápidamente los centros de primera infancia para prevenir déficits cognitivos permanentes, financiados por la riqueza soberana de la minería y el turismo.',
          extendedDescription: `La implementación del modelo de Sanna Marin requiere una reestructuración profunda. Expandir rápidamente los centros de primera infancia para prevenir déficits cognitivos permanentes, financiados por la riqueza soberana de la minería y el turismo. Esto implica un cambio radical en la forma en que abordamos el problema de "Cobertura Insuficiente de Educación Infantil (INAIPI)", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Expansión Nórdica de Primera Infancia (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Expansión Nórdica de Primera Infancia.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 20 },
            { name: 'Año 2', value: 45 },
            { name: 'Año 3', value: 75 },
            { name: 'Año 4', value: 110 },
            { name: 'Año 5', value: 160 }
          ],
          imageUrl: 'https://picsum.photos/seed/edu-15-solution/800/400'
        }
      },
      {
        id: 'edu-16',
        upvotes: 0,
        downvotes: 0,
        title: 'Infraestructura Inadecuada para Educación Especial',
        description: 'Estudiantes con discapacidades cognitivas y físicas carecen de apoyo, infraestructura y planes de estudio adaptados a sus necesidades.',
        solution: {
          leader: 'Sam Altman',
          model: 'Educación Especial Adaptativa por IA',
          description: 'Utilizar tutores de IA para generar planes de lecciones hiperpersonalizados y adaptativos que atiendan con precisión las discapacidades cognitivas y físicas individuales.',
          extendedDescription: `La implementación del modelo de Sam Altman requiere una reestructuración profunda. Utilizar tutores de IA para generar planes de lecciones hiperpersonalizados y adaptativos que atiendan con precisión las discapacidades cognitivas y físicas individuales. Esto implica un cambio radical en la forma en que abordamos el problema de "Infraestructura Inadecuada para Educación Especial", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Educación Especial Adaptativa por IA (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Educación Especial Adaptativa por IA.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 30 },
            { name: 'Año 2', value: 60 },
            { name: 'Año 3', value: 95 },
            { name: 'Año 4', value: 135 },
            { name: 'Año 5', value: 190 }
          ],
          imageUrl: 'https://picsum.photos/seed/edu-16-solution/800/400'
        }
      },
      {
        id: 'edu-17',
        upvotes: 0,
        downvotes: 0,
        title: 'Altas Tasas de Repetición y Progresión Estudiantil Débil',
        description: 'La alta repetición frena la progresión, creando cuellos de botella en los niveles primario y secundario que desperdician recursos y desmotivan a los estudiantes.',
        solution: {
          leader: 'Javier Milei & Nayib Bukele',
          model: 'Financiamiento por Desempeño y Programas Acelerados',
          description: 'Introducir financiamiento basado en el desempeño donde las escuelas pierden subsidios por alta repetición, combinado con programas acelerados obligatorios para garantizar vías eficientes hacia la graduación.',
          extendedDescription: `La implementación del modelo de Javier Milei & Nayib Bukele requiere una reestructuración profunda. Introducir financiamiento basado en el desempeño donde las escuelas pierden subsidios por alta repetición, combinado con programas acelerados obligatorios para garantizar vías eficientes hacia la graduación. Esto implica un cambio radical en la forma en que abordamos el problema de "Altas Tasas de Repetición y Progresión Estudiantil Débil", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Financiamiento por Desempeño y Programas Acelerados (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Financiamiento por Desempeño y Programas Acelerados.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 40 },
            { name: 'Año 2', value: 75 },
            { name: 'Año 3', value: 115 },
            { name: 'Año 4', value: 160 },
            { name: 'Año 5', value: 220 }
          ],
          imageUrl: 'https://picsum.photos/seed/edu-17-solution/800/400'
        }
      },
      {
        id: 'edu-18',
        upvotes: 0,
        downvotes: 0,
        title: 'Inequidad en el Acceso y Aulas Sobrepobladas por Migración',
        description: 'Las zonas rurales carecen de acceso de calidad, mientras que las zonas urbanas marginales y la afluencia de inmigrantes indocumentados abruman los recursos públicos y exacerban las divisiones.',
        solution: {
          leader: 'Javier Milei & Elon Musk',
          model: 'Vouchers Educativos y Conectividad Satelital',
          description: 'Implementar un sistema de vouchers (cheques escolares) para empoderar a las familias y romper monopolios, apoyado por internet satelital (Starlink) para garantizar el acceso a recursos de primer nivel en zonas marginadas.',
          extendedDescription: `La implementación del modelo de Javier Milei & Elon Musk requiere una reestructuración profunda. Implementar un sistema de vouchers (cheques escolares) para empoderar a las familias y romper monopolios, apoyado por internet satelital (Starlink) para garantizar el acceso a recursos de primer nivel en zonas marginadas. Esto implica un cambio radical en la forma en que abordamos el problema de "Inequidad en el Acceso y Aulas Sobrepobladas por Migración", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Vouchers Educativos y Conectividad Satelital (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Vouchers Educativos y Conectividad Satelital.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 50 },
            { name: 'Año 2', value: 90 },
            { name: 'Año 3', value: 135 },
            { name: 'Año 4', value: 185 },
            { name: 'Año 5', value: 250 }
          ],
          imageUrl: 'https://picsum.photos/seed/edu-18-solution/800/400'
        }
      },
      {
        id: 'edu-19',
        upvotes: 0,
        downvotes: 0,
        title: 'Currículo Obsoleto y Falta de Habilidades del Siglo XXI',
        description: 'Los planes de estudio están obsoletos, fallando en incorporar tecnología, criptomonedas o habilidades modernas, dejando a los graduados sin competitividad a nivel global.',
        solution: {
          leader: 'Elon Musk & Nayib Bukele',
          model: 'Integración Tecnológica y Educación Cripto',
          description: 'Rediseñar el currículo desde los primeros principios para integrar IA, programación y emprendimiento desde los primeros grados, junto con la adopción audaz de educación sobre Bitcoin y finanzas descentralizadas.',
          extendedDescription: `La implementación del modelo de Elon Musk & Nayib Bukele requiere una reestructuración profunda. Rediseñar el currículo desde los primeros principios para integrar IA, programación y emprendimiento desde los primeros grados, junto con la adopción audaz de educación sobre Bitcoin y finanzas descentralizadas. Esto implica un cambio radical en la forma en que abordamos el problema de "Currículo Obsoleto y Falta de Habilidades del Siglo XXI", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Integración Tecnológica y Educación Cripto (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Integración Tecnológica y Educación Cripto.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 60 },
            { name: 'Año 2', value: 105 },
            { name: 'Año 3', value: 155 },
            { name: 'Año 4', value: 210 },
            { name: 'Año 5', value: 280 }
          ],
          imageUrl: 'https://picsum.photos/seed/edu-19-solution/800/400'
        }
      }
    ]
  },
  {
    id: 'tourism',
    title: 'Turismo',
    icon: Plane,
    overview: 'Transición de un modelo de hospitalidad impulsado por el volumen y de alta fuga a un ecosistema altamente capitalizado y tecnológicamente soberano.',
    megaproject: {
      title: 'Hub Global de Turismo Médico y la "Riviera Ecológica Cero Emisiones"',
      description: 'Trascender el modelo de "sol y playa todo incluido". El proyecto consiste en crear Zonas Libres de Impuestos exclusivas para hospitales e institutos de salud acreditados internacionalmente (para atraer el billonario mercado de turismo médico de EE. UU. y Canadá). Simultáneamente, el desarrollo del Sur (Pedernales) bajo un estatus de "Cero Emisiones", operando exclusivamente con energía renovable, transporte eléctrico y límites estrictos de capacidad biológica.'
        ,
      timeline: [
        { phase: '2026-2027', description: 'Fase inicial de planificación, auditoría y diseño arquitectónico.' },
        { phase: '2028-2029', description: 'Despliegue de infraestructura base y programas piloto en zonas clave.' },
        { phase: '2030+', description: 'Expansión a nivel nacional, optimización continua y evaluación de impacto.' }
      ],
      partners: ['Banco Interamericano de Desarrollo (BID)', 'Ministerio de Economía, Planificación y Desarrollo', 'Sector Privado Local', 'ONGs Internacionales', 'Agencias de Cooperación (USAID, JICA)']
    },
    problems: [
      {
        id: 'tour-1',
        title: 'Seguridad Ciudadana y del Visitante',
        description: 'El crimen violento persistente y un sistema judicial opaco siguen siendo elementos disuasorios críticos para el turismo de alto patrimonio, manteniendo a la RD bajo una advertencia de viaje de Nivel 2.',
        solution: {
          leader: 'Nayib Bukele & Elon Musk',
          model: 'Dinamarca / Corea del Sur',
          description: 'Desplegar una red de seguridad altamente concentrada y aumentada por IA (CCTV con seguimiento biométrico) sobre zonas turísticas, regida por las leyes de transparencia danesas.',
          extendedDescription: `La implementación del modelo de Nayib Bukele & Elon Musk requiere una reestructuración profunda. Desplegar una red de seguridad altamente concentrada y aumentada por IA (CCTV con seguimiento biométrico) sobre zonas turísticas, regida por las leyes de transparencia danesas. Esto implica un cambio radical en la forma en que abordamos el problema de "Seguridad Ciudadana y del Visitante", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Dinamarca / Corea del Sur (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Dinamarca / Corea del Sur.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 40 },
            { name: 'Año 2', value: 75 },
            { name: 'Año 3', value: 115 },
            { name: 'Año 4', value: 160 },
            { name: 'Año 5', value: 220 }
          ],
          imageUrl: 'https://picsum.photos/seed/tourism-solution/800/400'
        }
      },
      {
        id: 'tour-2',
        title: 'Riesgo Biológico del Sargazo',
        description: 'Acumulaciones catastróficas de macroalgas asfixian los arrecifes de coral y causan una disminución reportada del 30% en las reservas de los resorts afectados.',
        solution: {
          leader: 'Ronald Reagan & Lee Kuan Yew',
          model: 'Tecnología Agrícola de los Países Bajos',
          description: 'Otorgar licencias de derechos de recolección en alta mar a conglomerados tecnológicos privados para exportar bioestimulantes derivados del sargazo, neutralizando el peligro a través de las fuerzas del mercado.',
          extendedDescription: `La implementación del modelo de Ronald Reagan & Lee Kuan Yew requiere una reestructuración profunda. Otorgar licencias de derechos de recolección en alta mar a conglomerados tecnológicos privados para exportar bioestimulantes derivados del sargazo, neutralizando el peligro a través de las fuerzas del mercado. Esto implica un cambio radical en la forma en que abordamos el problema de "Riesgo Biológico del Sargazo", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Tecnología Agrícola de los Países Bajos (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Tecnología Agrícola de los Países Bajos.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 50 },
            { name: 'Año 2', value: 90 },
            { name: 'Año 3', value: 135 },
            { name: 'Año 4', value: 185 },
            { name: 'Año 5', value: 250 }
          ],
          imageUrl: 'https://picsum.photos/seed/tour-2-solution/800/400'
        }
      },
      {
        id: 'tour-3',
        title: 'Fuga Económica Severa',
        description: 'La fuga económica del turismo se estima entre el 40% y el 80% debido a la importación masiva de alimentos y equipos por parte de resorts de propiedad extranjera.',
        solution: {
          leader: 'Lee Kuan Yew',
          model: 'Modelo de Singapur',
          description: 'Establecer una "Cuota de Abastecimiento Local". Los resorts que logren un 60% de adquisiciones localizadas a través de cadenas de suministro de agricultura de precisión certificadas reciben reducciones de impuestos corporativos.',
          extendedDescription: `La implementación del modelo de Lee Kuan Yew requiere una reestructuración profunda. Establecer una "Cuota de Abastecimiento Local". Los resorts que logren un 60% de adquisiciones localizadas a través de cadenas de suministro de agricultura de precisión certificadas reciben reducciones de impuestos corporativos. Esto implica un cambio radical en la forma en que abordamos el problema de "Fuga Económica Severa", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Modelo de Singapur (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Modelo de Singapur.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 60 },
            { name: 'Año 2', value: 105 },
            { name: 'Año 3', value: 155 },
            { name: 'Año 4', value: 210 },
            { name: 'Año 5', value: 280 }
          ],
          imageUrl: 'https://picsum.photos/seed/tour-3-solution/800/400'
        }
      },
      {
        id: 'tour-4',
        title: 'Dependencia del Modelo Todo Incluido',
        description: 'La sobredependencia en resorts de sol y playa limita el gasto de los turistas fuera de los hoteles y estanca el desarrollo de las comunidades locales.',
        solution: {
          leader: 'Lee Kuan Yew',
          model: 'Modelo Suizo de Diversificación',
          description: 'Incentivar fiscalmente el desarrollo de turismo médico, ecoturismo de lujo y turismo cultural, creando corredores turísticos integrados que obliguen al gasto local.',
          extendedDescription: `La implementación del modelo de Lee Kuan Yew requiere una reestructuración profunda. Incentivar fiscalmente el desarrollo de turismo médico, ecoturismo de lujo y turismo cultural, creando corredores turísticos integrados que obliguen al gasto local. Esto implica un cambio radical en la forma en que abordamos el problema de "Dependencia del Modelo Todo Incluido", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Modelo Suizo de Diversificación (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Modelo Suizo de Diversificación.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 20 },
            { name: 'Año 2', value: 45 },
            { name: 'Año 3', value: 75 },
            { name: 'Año 4', value: 110 },
            { name: 'Año 5', value: 160 }
          ],
          imageUrl: 'https://picsum.photos/seed/tour-4-solution/800/400'
        }
      },
      {
        id: 'tour-5',
        title: 'Erosión Costera y Degradación Ambiental',
        description: 'La construcción descontrolada y el cambio climático están destruyendo las playas, el activo principal del sector turístico dominicano.',
        solution: {
          leader: 'Mark Rutte',
          model: 'Ingeniería Costera de Países Bajos',
          description: 'Implementar soluciones de ingeniería holandesa (Sand Motor) e imponer estrictas regulaciones de retroceso de construcción, financiadas por un impuesto verde a las llegadas internacionales.',
          extendedDescription: `La implementación del modelo de Mark Rutte requiere una reestructuración profunda. Implementar soluciones de ingeniería holandesa (Sand Motor) e imponer estrictas regulaciones de retroceso de construcción, financiadas por un impuesto verde a las llegadas internacionales. Esto implica un cambio radical en la forma en que abordamos el problema de "Erosión Costera y Degradación Ambiental", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Ingeniería Costera de Países Bajos (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Ingeniería Costera de Países Bajos.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 30 },
            { name: 'Año 2', value: 60 },
            { name: 'Año 3', value: 95 },
            { name: 'Año 4', value: 135 },
            { name: 'Año 5', value: 190 }
          ],
          imageUrl: 'https://picsum.photos/seed/tour-5-solution/800/400'
        }
      },
      {
        id: 'tour-6',
        title: 'Colapso de Servicios Básicos en Polos Turísticos',
        description: 'Zonas como Punta Cana y Bávaro sufren de deficiencias graves en el manejo de aguas residuales, recolección de basura y ordenamiento territorial.',
        solution: {
          leader: 'Lee Kuan Yew',
          model: 'Impuesto de Infraestructura Directa',
          description: 'Crear distritos autónomos de gestión turística donde un porcentaje de los impuestos generados se reinvierta obligatoria y exclusivamente en la infraestructura de esa misma zona.',
          extendedDescription: `La implementación del modelo de Lee Kuan Yew requiere una reestructuración profunda. Crear distritos autónomos de gestión turística donde un porcentaje de los impuestos generados se reinvierta obligatoria y exclusivamente en la infraestructura de esa misma zona. Esto implica un cambio radical en la forma en que abordamos el problema de "Colapso de Servicios Básicos en Polos Turísticos", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Impuesto de Infraestructura Directa (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Impuesto de Infraestructura Directa.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 40 },
            { name: 'Año 2', value: 75 },
            { name: 'Año 3', value: 115 },
            { name: 'Año 4', value: 160 },
            { name: 'Año 5', value: 220 }
          ],
          imageUrl: 'https://picsum.photos/seed/tour-6-solution/800/400'
        }
      },
      {
        id: 'tour-7',
        title: 'Monopolio y Mafias del Transporte Turístico',
        description: 'Sindicatos de transporte mantienen un control absoluto y a menudo violento sobre los traslados, inflando precios y acosando a plataformas como Uber.',
        solution: {
          leader: 'Margaret Thatcher',
          model: 'Desregulación Total del Transporte',
          description: 'Romper los monopolios sindicales mediante la desregulación total del transporte turístico, garantizando protección policial para la libre competencia y plataformas de transporte compartido.',
          extendedDescription: `La implementación del modelo de Margaret Thatcher requiere una reestructuración profunda. Romper los monopolios sindicales mediante la desregulación total del transporte turístico, garantizando protección policial para la libre competencia y plataformas de transporte compartido. Esto implica un cambio radical en la forma en que abordamos el problema de "Monopolio y Mafias del Transporte Turístico", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Desregulación Total del Transporte (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Desregulación Total del Transporte.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 50 },
            { name: 'Año 2', value: 90 },
            { name: 'Año 3', value: 135 },
            { name: 'Año 4', value: 185 },
            { name: 'Año 5', value: 250 }
          ],
          imageUrl: 'https://picsum.photos/seed/tour-7-solution/800/400'
        }
      },
      {
        id: 'tour-8',
        title: 'Pérdida de Identidad Cultural en Destinos',
        description: 'Los destinos turísticos se han homogeneizado, ofreciendo poca conexión con la auténtica cultura, gastronomía e historia dominicana.',
        solution: {
          leader: 'Jigme Khesar Namgyel Wangchuck',
          model: 'Turismo de Alto Valor y Autenticidad',
          description: 'Incentivar el desarrollo de rutas culturales, gastronómicas e históricas certificadas, exigiendo a los mega-resorts integrar experiencias y productos culturales locales en su oferta.',
          extendedDescription: `La implementación del modelo de Jigme Khesar Namgyel Wangchuck requiere una reestructuración profunda. Incentivar el desarrollo de rutas culturales, gastronómicas e históricas certificadas, exigiendo a los mega-resorts integrar experiencias y productos culturales locales en su oferta. Esto implica un cambio radical en la forma en que abordamos el problema de "Pérdida de Identidad Cultural en Destinos", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Turismo de Alto Valor y Autenticidad (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Turismo de Alto Valor y Autenticidad.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 60 },
            { name: 'Año 2', value: 105 },
            { name: 'Año 3', value: 155 },
            { name: 'Año 4', value: 210 },
            { name: 'Año 5', value: 280 }
          ],
          imageUrl: 'https://picsum.photos/seed/tour-8-solution/800/400'
        }
      },
      {
        id: 'tour-9',
        title: 'Conectividad Deficiente entre Polos Turísticos',
        description: 'Transporte público inadecuado y falta de conectividad rápida entre los principales centros turísticos (ej. Punta Cana a Puerto Plata).',
        solution: {
          leader: 'Shinzo Abe',
          model: 'Red Ferroviaria de Alta Velocidad',
          description: 'Construir una red ferroviaria electrificada de alta velocidad que conecte todos los principales aeropuertos internacionales y zonas costeras.',
          extendedDescription: `La implementación del modelo de Shinzo Abe requiere una reestructuración profunda. Construir una red ferroviaria electrificada de alta velocidad que conecte todos los principales aeropuertos internacionales y zonas costeras. Esto implica un cambio radical en la forma en que abordamos el problema de "Conectividad Deficiente entre Polos Turísticos", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Red Ferroviaria de Alta Velocidad (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Red Ferroviaria de Alta Velocidad.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 20 },
            { name: 'Año 2', value: 45 },
            { name: 'Año 3', value: 75 },
            { name: 'Año 4', value: 110 },
            { name: 'Año 5', value: 160 }
          ],
          imageUrl: 'https://picsum.photos/seed/tour-9-solution/800/400'
        }
      },
      {
        id: 'tour-10',
        title: 'Barrera del Idioma en el Personal de Servicio',
        description: 'Falta de dominio del inglés y otros idiomas secundarios entre el personal de servicio fuera de los grandes resorts.',
        solution: {
          leader: 'Lee Hsien Loong',
          model: 'Certificación Lingüística Impulsada por IA',
          description: 'Exigir certificación de idiomas impulsada por IA para todas las licencias de hospitalidad, financiada por un impuesto de salida nominal.',
          extendedDescription: `La implementación del modelo de Lee Hsien Loong requiere una reestructuración profunda. Exigir certificación de idiomas impulsada por IA para todas las licencias de hospitalidad, financiada por un impuesto de salida nominal. Esto implica un cambio radical en la forma en que abordamos el problema de "Barrera del Idioma en el Personal de Servicio", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Certificación Lingüística Impulsada por IA (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Certificación Lingüística Impulsada por IA.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 30 },
            { name: 'Año 2', value: 60 },
            { name: 'Año 3', value: 95 },
            { name: 'Año 4', value: 135 },
            { name: 'Año 5', value: 190 }
          ],
          imageUrl: 'https://picsum.photos/seed/tour-10-solution/800/400'
        }
      },
      {
        id: 'tour-11',
        title: 'Degradación Ecológica en Áreas Protegidas',
        description: 'Explotación de recursos naturales y degradación ecológica en parques nacionales y áreas protegidas (ej. Los Haitises).',
        solution: {
          leader: 'Carlos Alvarado Quesada',
          model: 'Capacidad de Carga Biológica Estricta',
          description: 'Implementar capacidades de carga biológica estrictas aplicadas mediante monitoreo satelital en tiempo real y sanciones financieras severas.',
          extendedDescription: `La implementación del modelo de Carlos Alvarado Quesada requiere una reestructuración profunda. Implementar capacidades de carga biológica estrictas aplicadas mediante monitoreo satelital en tiempo real y sanciones financieras severas. Esto implica un cambio radical en la forma en que abordamos el problema de "Degradación Ecológica en Áreas Protegidas", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Capacidad de Carga Biológica Estricta (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Capacidad de Carga Biológica Estricta.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 40 },
            { name: 'Año 2', value: 75 },
            { name: 'Año 3', value: 115 },
            { name: 'Año 4', value: 160 },
            { name: 'Año 5', value: 220 }
          ],
          imageUrl: 'https://picsum.photos/seed/tour-11-solution/800/400'
        }
      },
      {
        id: 'tour-12',
        title: 'Inseguridad Vial para Turistas',
        description: 'Altas tasas de accidentes de tránsito y condiciones viales inseguras para los turistas que alquilan vehículos.',
        solution: {
          leader: 'Modelo Vision Zero (Suecia)',
          model: 'Infraestructura Vial Inteligente',
          description: 'Modernizar la infraestructura de carreteras con sensores inteligentes y hacer cumplir estrictamente las leyes de tránsito utilizando cámaras automatizadas de velocidad y semáforo en rojo.',
          extendedDescription: `La implementación del modelo de Modelo Vision Zero (Suecia) requiere una reestructuración profunda. Modernizar la infraestructura de carreteras con sensores inteligentes y hacer cumplir estrictamente las leyes de tránsito utilizando cámaras automatizadas de velocidad y semáforo en rojo. Esto implica un cambio radical en la forma en que abordamos el problema de "Inseguridad Vial para Turistas", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Infraestructura Vial Inteligente (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Infraestructura Vial Inteligente.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 50 },
            { name: 'Año 2', value: 90 },
            { name: 'Año 3', value: 135 },
            { name: 'Año 4', value: 185 },
            { name: 'Año 5', value: 250 }
          ],
          imageUrl: 'https://picsum.photos/seed/tour-12-solution/800/400'
        }
      },
      {
        id: 'tour-13',
        title: 'Turismo Sexual y Explotación Infantil',
        description: 'Presencia de turismo sexual y explotación infantil en pueblos costeros históricamente vulnerables.',
        solution: {
          leader: 'Nayib Bukele',
          model: 'Unidades Especializadas de Tolerancia Cero',
          description: 'Establecer unidades policiales especializadas contra la trata, altamente remuneradas, con aplicación de tolerancia cero e intercambio de inteligencia internacional.',
          extendedDescription: `La implementación del modelo de Nayib Bukele requiere una reestructuración profunda. Establecer unidades policiales especializadas contra la trata, altamente remuneradas, con aplicación de tolerancia cero e intercambio de inteligencia internacional. Esto implica un cambio radical en la forma en que abordamos el problema de "Turismo Sexual y Explotación Infantil", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Unidades Especializadas de Tolerancia Cero (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Unidades Especializadas de Tolerancia Cero.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 60 },
            { name: 'Año 2', value: 105 },
            { name: 'Año 3', value: 155 },
            { name: 'Año 4', value: 210 },
            { name: 'Año 5', value: 280 }
          ],
          imageUrl: 'https://picsum.photos/seed/tour-13-solution/800/400'
        }
      },
      {
        id: 'tour-14',
        title: 'Infraestructura Deficiente para Ecoturismo',
        description: 'Falta de diversificación e infraestructura adecuada para el ecoturismo y el turismo de montaña (ej. Constanza, Jarabacoa).',
        solution: {
          leader: 'Jacinda Ardern',
          model: 'Fondo Soberano de Infraestructura Verde',
          description: 'Crear un fondo soberano específico para pavimentar caminos de acceso a las montañas y desarrollar redes de senderismo reguladas de clase mundial.',
          extendedDescription: `La implementación del modelo de Jacinda Ardern requiere una reestructuración profunda. Crear un fondo soberano específico para pavimentar caminos de acceso a las montañas y desarrollar redes de senderismo reguladas de clase mundial. Esto implica un cambio radical en la forma en que abordamos el problema de "Infraestructura Deficiente para Ecoturismo", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Fondo Soberano de Infraestructura Verde (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Fondo Soberano de Infraestructura Verde.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 20 },
            { name: 'Año 2', value: 45 },
            { name: 'Año 3', value: 75 },
            { name: 'Año 4', value: 110 },
            { name: 'Año 5', value: 160 }
          ],
          imageUrl: 'https://picsum.photos/seed/tour-14-solution/800/400'
        }
      },
      {
        id: 'tour-15',
        title: 'Competencia Desleal de Alquileres a Corto Plazo',
        description: 'Alquileres a corto plazo informales y no regulados (ej. Airbnb) que socavan a los hoteles tradicionales y evaden impuestos.',
        solution: {
          leader: 'Emmanuel Macron',
          model: 'Retención Fiscal Automática Digital',
          description: 'Exigir registro digital obligatorio y retención automática de impuestos directamente a través de las plataformas de reserva para nivelar el campo de juego.',
          extendedDescription: `La implementación del modelo de Emmanuel Macron requiere una reestructuración profunda. Exigir registro digital obligatorio y retención automática de impuestos directamente a través de las plataformas de reserva para nivelar el campo de juego. Esto implica un cambio radical en la forma en que abordamos el problema de "Competencia Desleal de Alquileres a Corto Plazo", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Retención Fiscal Automática Digital (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Retención Fiscal Automática Digital.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 30 },
            { name: 'Año 2', value: 60 },
            { name: 'Año 3', value: 95 },
            { name: 'Año 4', value: 135 },
            { name: 'Año 5', value: 190 }
          ],
          imageUrl: 'https://picsum.photos/seed/tour-15-solution/800/400'
        }
      },
      {
        id: 'tour-16',
        title: 'Acoso de Vendedores Informales en Playas',
        description: 'Acoso a turistas por parte de vendedores informales y guías turísticos no regulados en las playas públicas.',
        solution: {
          leader: 'Lee Kuan Yew',
          model: 'Zonificación Comercial Estricta',
          description: 'Instituir un sistema de licencias digitales y establecer zonas comerciales designadas para vendedores, estrictamente aplicadas por la policía turística (POLITUR).',
          extendedDescription: `La implementación del modelo de Lee Kuan Yew requiere una reestructuración profunda. Instituir un sistema de licencias digitales y establecer zonas comerciales designadas para vendedores, estrictamente aplicadas por la policía turística (POLITUR). Esto implica un cambio radical en la forma en que abordamos el problema de "Acoso de Vendedores Informales en Playas", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Zonificación Comercial Estricta (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Zonificación Comercial Estricta.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 40 },
            { name: 'Año 2', value: 75 },
            { name: 'Año 3', value: 115 },
            { name: 'Año 4', value: 160 },
            { name: 'Año 5', value: 220 }
          ],
          imageUrl: 'https://picsum.photos/seed/tour-16-solution/800/400'
        }
      },
      {
        id: 'tour-17',
        title: 'Subutilización del Patrimonio Histórico',
        description: 'Mala preservación y subutilización comercial de sitios históricos, particularmente en la Zona Colonial.',
        solution: {
          leader: 'Rey Carlos III',
          model: 'Fideicomiso de Patrimonio Público-Privado',
          description: 'Establecer un fideicomiso público-privado para financiar la restauración estructural y curar experiencias culturales de alta gama e históricamente precisas.',
          extendedDescription: `La implementación del modelo de Rey Carlos III requiere una reestructuración profunda. Establecer un fideicomiso público-privado para financiar la restauración estructural y curar experiencias culturales de alta gama e históricamente precisas. Esto implica un cambio radical en la forma en que abordamos el problema de "Subutilización del Patrimonio Histórico", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Fideicomiso de Patrimonio Público-Privado (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Fideicomiso de Patrimonio Público-Privado.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 50 },
            { name: 'Año 2', value: 90 },
            { name: 'Año 3', value: 135 },
            { name: 'Año 4', value: 185 },
            { name: 'Año 5', value: 250 }
          ],
          imageUrl: 'https://picsum.photos/seed/tour-17-solution/800/400'
        }
      },
      {
        id: 'tour-18',
        title: 'Altas Tasas Aeroportuarias',
        description: 'Altos impuestos y tarifas aeroportuarias que disuaden a las aerolíneas de mercados emisores emergentes y de larga distancia.',
        solution: {
          leader: 'Mohammed bin Rashid Al Maktoum',
          model: 'Acuerdos de Cielos Abiertos',
          description: 'Reducir las tarifas aeronáuticas para nuevas rutas y negociar acuerdos de cielos abiertos para atraer aerolíneas asiáticas y de Medio Oriente.',
          extendedDescription: `La implementación del modelo de Mohammed bin Rashid Al Maktoum requiere una reestructuración profunda. Reducir las tarifas aeronáuticas para nuevas rutas y negociar acuerdos de cielos abiertos para atraer aerolíneas asiáticas y de Medio Oriente. Esto implica un cambio radical en la forma en que abordamos el problema de "Altas Tasas Aeroportuarias", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Acuerdos de Cielos Abiertos (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Acuerdos de Cielos Abiertos.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 60 },
            { name: 'Año 2', value: 105 },
            { name: 'Año 3', value: 155 },
            { name: 'Año 4', value: 210 },
            { name: 'Año 5', value: 280 }
          ],
          imageUrl: 'https://picsum.photos/seed/tour-18-solution/800/400'
        }
      },
      {
        id: 'tour-19',
        title: 'Procesamiento Migratorio Ineficiente',
        description: 'Procesamiento de inmigración y aduanas ineficiente, lento y manual en los principales aeropuertos internacionales.',
        solution: {
          leader: 'Lee Hsien Loong',
          model: 'E-Gates Biométricos Automatizados',
          description: 'Implementar puertas electrónicas biométricas totalmente automatizadas y sistemas de autorización previa para viajeros que llegan de los principales mercados emisores.',
          extendedDescription: `La implementación del modelo de Lee Hsien Loong requiere una reestructuración profunda. Implementar puertas electrónicas biométricas totalmente automatizadas y sistemas de autorización previa para viajeros que llegan de los principales mercados emisores. Esto implica un cambio radical en la forma en que abordamos el problema de "Procesamiento Migratorio Ineficiente", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de E-Gates Biométricos Automatizados (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de E-Gates Biométricos Automatizados.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 20 },
            { name: 'Año 2', value: 45 },
            { name: 'Año 3', value: 75 },
            { name: 'Año 4', value: 110 },
            { name: 'Año 5', value: 160 }
          ],
          imageUrl: 'https://picsum.photos/seed/tour-19-solution/800/400'
        }
      },
      {
        id: 'tour-20',
        title: 'Falta de Estrategia de Comunicación de Crisis',
        description: 'Carencia de una estrategia de comunicación de crisis unificada y transparente durante eventos de relaciones públicas internacionales negativos.',
        solution: {
          leader: 'Jacinda Ardern',
          model: 'Panel de Transparencia en Tiempo Real',
          description: 'Retener permanentemente a una firma internacional de relaciones públicas de primer nivel e implementar un panel público que proporcione métricas de salud y seguridad en tiempo real.',
          extendedDescription: `La implementación del modelo de Jacinda Ardern requiere una reestructuración profunda. Retener permanentemente a una firma internacional de relaciones públicas de primer nivel e implementar un panel público que proporcione métricas de salud y seguridad en tiempo real. Esto implica un cambio radical en la forma en que abordamos el problema de "Falta de Estrategia de Comunicación de Crisis", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Panel de Transparencia en Tiempo Real (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Panel de Transparencia en Tiempo Real.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 30 },
            { name: 'Año 2', value: 60 },
            { name: 'Año 3', value: 95 },
            { name: 'Año 4', value: 135 },
            { name: 'Año 5', value: 190 }
          ],
          imageUrl: 'https://picsum.photos/seed/tour-20-solution/800/400'
        }
      }
    ]
  },
  {
    id: 'welfare',
    title: 'Bienestar Social',
    icon: HeartHandshake,
    overview: 'Un reajuste estructural total de la relación del estado con el capital, el bienestar y su ciudadanía, demostrando que la disciplina financiera es un requisito previo para un estado de bienestar sostenible.',
    megaproject: {
      title: 'Fondo Soberano de Desarrollo y Erradicación de Asentamientos Informales',
      description: 'Un plan masivo y definitivo de renovación urbana. Utilizando los excedentes de capital de la minería y el turismo, se financiará la construcción industrializada de megacomplejos de vivienda modular. El objetivo es reubicar y formalizar permanentemente a las cientos de miles de familias que viven en zonas de alto riesgo (como las riberas de los ríos Ozama e Isabela), transformando esas áreas vulnerables en grandes parques ecológicos protegidos.'
        ,
      timeline: [
        { phase: '2026-2027', description: 'Fase inicial de planificación, auditoría y diseño arquitectónico.' },
        { phase: '2028-2029', description: 'Despliegue de infraestructura base y programas piloto en zonas clave.' },
        { phase: '2030+', description: 'Expansión a nivel nacional, optimización continua y evaluación de impacto.' }
      ],
      partners: ['Banco Interamericano de Desarrollo (BID)', 'Ministerio de Economía, Planificación y Desarrollo', 'Sector Privado Local', 'ONGs Internacionales', 'Agencias de Cooperación (USAID, JICA)']
    },
    problems: [
      {
        id: 'wel-1',
        upvotes: 0,
        downvotes: 0,
        title: 'Apatridia y Exclusión del Bienestar',
        description: 'La falta de identificación legal excluye a cientos de miles del mercado laboral formal, la educación secundaria y la atención médica subsidiada.',
        solution: {
          leader: 'Elon Musk & Lee Kuan Yew',
          model: 'Corea del Sur Digital',
          description: 'Desplegar unidades de registro biométrico descentralizadas para emitir una credencial de residente económico biométrico sin derecho a voto, integrando la economía sumergida en la base impositiva.',
          extendedDescription: `La implementación del modelo de Elon Musk & Lee Kuan Yew requiere una reestructuración profunda. Desplegar unidades de registro biométrico descentralizadas para emitir una credencial de residente económico biométrico sin derecho a voto, integrando la economía sumergida en la base impositiva. Esto implica un cambio radical en la forma en que abordamos el problema de "Apatridia y Exclusión del Bienestar", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Corea del Sur Digital (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Corea del Sur Digital.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 40 },
            { name: 'Año 2', value: 75 },
            { name: 'Año 3', value: 115 },
            { name: 'Año 4', value: 160 },
            { name: 'Año 5', value: 220 }
          ],
          imageUrl: 'https://picsum.photos/seed/welfare-solution/800/400'
        }
      },
      {
        id: 'wel-2',
        upvotes: 0,
        downvotes: 0,
        title: 'Informalidad Laboral y Vulnerabilidad de las Pensiones',
        description: 'La informalidad laboral desenfrenada (~50%) socava el sistema de pensiones privado, dejando a una gran mayoría enfrentando pobreza severa en la vejez.',
        solution: {
          leader: 'Lee Kuan Yew',
          model: 'CPF de Singapur',
          description: 'Exigir microcontribuciones de pensiones fraccionarias y automáticas vinculadas directamente a transacciones digitales dentro del sector informal a través de la banca móvil.',
          extendedDescription: `La implementación del modelo de Lee Kuan Yew requiere una reestructuración profunda. Exigir microcontribuciones de pensiones fraccionarias y automáticas vinculadas directamente a transacciones digitales dentro del sector informal a través de la banca móvil. Esto implica un cambio radical en la forma en que abordamos el problema de "Informalidad Laboral y Vulnerabilidad de las Pensiones", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de CPF de Singapur (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de CPF de Singapur.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 50 },
            { name: 'Año 2', value: 90 },
            { name: 'Año 3', value: 135 },
            { name: 'Año 4', value: 185 },
            { name: 'Año 5', value: 250 }
          ],
          imageUrl: 'https://picsum.photos/seed/wel-2-solution/800/400'
        }
      },
      {
        id: 'wel-3',
        upvotes: 0,
        downvotes: 0,
        title: 'Fraude de Asistencia Social en Supérate',
        description: 'Los mecanismos de focalización tradicionales exponen el sistema masivo de transferencias monetarias condicionadas a fugas, clientelismo político y fraude sofisticado.',
        solution: {
          leader: 'Nayib Bukele & Elon Musk',
          model: 'IA de Corea del Sur',
          description: 'Implementar algoritmos centralizados de aprendizaje automático sobre la base de datos del SIUBEN para detectar instantáneamente patrones de pago irregulares y reclamos duplicados en tiempo real.',
          extendedDescription: `La implementación del modelo de Nayib Bukele & Elon Musk requiere una reestructuración profunda. Implementar algoritmos centralizados de aprendizaje automático sobre la base de datos del SIUBEN para detectar instantáneamente patrones de pago irregulares y reclamos duplicados en tiempo real. Esto implica un cambio radical en la forma en que abordamos el problema de "Fraude de Asistencia Social en Supérate", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de IA de Corea del Sur (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de IA de Corea del Sur.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 60 },
            { name: 'Año 2', value: 105 },
            { name: 'Año 3', value: 155 },
            { name: 'Año 4', value: 210 },
            { name: 'Año 5', value: 280 }
          ],
          imageUrl: 'https://picsum.photos/seed/wel-3-solution/800/400'
        }
      },
      {
        id: 'wel-4',
        upvotes: 0,
        downvotes: 0,
        title: 'Dependencia Intergeneracional de Subsidios',
        description: 'Los programas de asistencia social a menudo crean trampas de pobreza, donde los beneficiarios prefieren no trabajar formalmente para no perder las ayudas del Estado.',
        solution: {
          leader: 'Margaret Thatcher',
          model: 'Modelo Nórdico de Activación',
          description: 'Transformar las transferencias incondicionales en subsidios temporales estrictamente vinculados a la capacitación laboral obligatoria y la búsqueda activa de empleo verificable.',
          extendedDescription: `La implementación del modelo de Margaret Thatcher requiere una reestructuración profunda. Transformar las transferencias incondicionales en subsidios temporales estrictamente vinculados a la capacitación laboral obligatoria y la búsqueda activa de empleo verificable. Esto implica un cambio radical en la forma en que abordamos el problema de "Dependencia Intergeneracional de Subsidios", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Modelo Nórdico de Activación (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Modelo Nórdico de Activación.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 20 },
            { name: 'Año 2', value: 45 },
            { name: 'Año 3', value: 75 },
            { name: 'Año 4', value: 110 },
            { name: 'Año 5', value: 160 }
          ],
          imageUrl: 'https://picsum.photos/seed/wel-4-solution/800/400'
        }
      },
      {
        id: 'wel-5',
        upvotes: 0,
        downvotes: 0,
        title: 'Ineficiencia en la Distribución de Ayudas',
        description: 'La logística de entrega de ayudas sociales es lenta, costosa y propensa a la corrupción de intermediarios locales.',
        solution: {
          leader: 'Narendra Modi',
          model: 'India Stack (Transferencias Directas)',
          description: 'Eliminar intermediarios mediante la implementación de un sistema de identidad digital nacional vinculado a billeteras móviles, permitiendo transferencias de fondos directas e instantáneas.',
          extendedDescription: `La implementación del modelo de Narendra Modi requiere una reestructuración profunda. Eliminar intermediarios mediante la implementación de un sistema de identidad digital nacional vinculado a billeteras móviles, permitiendo transferencias de fondos directas e instantáneas. Esto implica un cambio radical en la forma en que abordamos el problema de "Ineficiencia en la Distribución de Ayudas", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de India Stack (Transferencias Directas) (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de India Stack (Transferencias Directas).',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 30 },
            { name: 'Año 2', value: 60 },
            { name: 'Año 3', value: 95 },
            { name: 'Año 4', value: 135 },
            { name: 'Año 5', value: 190 }
          ],
          imageUrl: 'https://picsum.photos/seed/wel-5-solution/800/400'
        }
      },
      {
        id: 'wel-6',
        upvotes: 0,
        downvotes: 0,
        title: 'Gasto de Bolsillo Médico Elevado (SENASA)',
        description: 'Altos gastos médicos de bolsillo a pesar de la cobertura del seguro público de salud (SENASA).',
        solution: {
          leader: 'Modelo NHI (Taiwán)',
          model: 'Pagador Único Impulsado por Tecnología',
          description: 'Transición a un modelo donde SENASA utilice su poder adquisitivo absoluto para limitar tarifas de clínicas privadas y negociar precios de medicamentos al por mayor.',
          extendedDescription: `La implementación del modelo de Modelo NHI (Taiwán) requiere una reestructuración profunda. Transición a un modelo donde SENASA utilice su poder adquisitivo absoluto para limitar tarifas de clínicas privadas y negociar precios de medicamentos al por mayor. Esto implica un cambio radical en la forma en que abordamos el problema de "Gasto de Bolsillo Médico Elevado (SENASA)", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Pagador Único Impulsado por Tecnología (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Pagador Único Impulsado por Tecnología.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 40 },
            { name: 'Año 2', value: 75 },
            { name: 'Año 3', value: 115 },
            { name: 'Año 4', value: 160 },
            { name: 'Año 5', value: 220 }
          ],
          imageUrl: 'https://picsum.photos/seed/wel-6-solution/800/400'
        }
      },
      {
        id: 'wel-7',
        upvotes: 0,
        downvotes: 0,
        title: 'Fragmentación de Programas Sociales',
        description: 'Programas de asistencia fragmentados en agencias redundantes (Gabinete Social, ADESS, Supérate) creando desperdicio burocrático.',
        solution: {
          leader: 'Lee Kuan Yew',
          model: 'Ministerio de Desarrollo Humano Centralizado',
          description: 'Consolidar toda la asistencia social en un único ministerio agresivamente simplificado que opere a través de un portal digital centralizado.',
          extendedDescription: `La implementación del modelo de Lee Kuan Yew requiere una reestructuración profunda. Consolidar toda la asistencia social en un único ministerio agresivamente simplificado que opere a través de un portal digital centralizado. Esto implica un cambio radical en la forma en que abordamos el problema de "Fragmentación de Programas Sociales", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Ministerio de Desarrollo Humano Centralizado (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Ministerio de Desarrollo Humano Centralizado.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 50 },
            { name: 'Año 2', value: 90 },
            { name: 'Año 3', value: 135 },
            { name: 'Año 4', value: 185 },
            { name: 'Año 5', value: 250 }
          ],
          imageUrl: 'https://picsum.photos/seed/wel-7-solution/800/400'
        }
      },
      {
        id: 'wel-8',
        upvotes: 0,
        downvotes: 0,
        title: 'Hospitales Públicos Desfinanciados y Politizados',
        description: 'Hospitales públicos (SNS) mal equipados y gestionados políticamente, afectando la calidad de la atención.',
        solution: {
          leader: 'Paul Kagame',
          model: 'Gestión Hospitalaria Meritocrática',
          description: 'Instituir una administración hospitalaria estricta y basada en el mérito, desvinculada de los ciclos políticos, aplicando KPIs de rendimiento rigurosos y seguimiento automatizado de la cadena de suministro.',
          extendedDescription: `La implementación del modelo de Paul Kagame requiere una reestructuración profunda. Instituir una administración hospitalaria estricta y basada en el mérito, desvinculada de los ciclos políticos, aplicando KPIs de rendimiento rigurosos y seguimiento automatizado de la cadena de suministro. Esto implica un cambio radical en la forma en que abordamos el problema de "Hospitales Públicos Desfinanciados y Politizados", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Gestión Hospitalaria Meritocrática (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Gestión Hospitalaria Meritocrática.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 60 },
            { name: 'Año 2', value: 105 },
            { name: 'Año 3', value: 155 },
            { name: 'Año 4', value: 210 },
            { name: 'Año 5', value: 280 }
          ],
          imageUrl: 'https://picsum.photos/seed/wel-8-solution/800/400'
        }
      },
      {
        id: 'wel-9',
        upvotes: 0,
        downvotes: 0,
        title: 'Ausencia de Seguro de Desempleo Universal',
        description: 'Falta total de un marco universal de seguro de desempleo para proteger a los trabajadores en tiempos de crisis.',
        solution: {
          leader: 'Modelo Flexicurity (Dinamarca)',
          model: 'Cuentas de Indemnización Portátiles',
          description: 'Exigir la creación de cuentas individuales y portátiles de indemnización/desempleo financiadas conjuntamente por empleadores y contribuciones estatales para los tramos de bajos ingresos.',
          extendedDescription: `La implementación del modelo de Modelo Flexicurity (Dinamarca) requiere una reestructuración profunda. Exigir la creación de cuentas individuales y portátiles de indemnización/desempleo financiadas conjuntamente por empleadores y contribuciones estatales para los tramos de bajos ingresos. Esto implica un cambio radical en la forma en que abordamos el problema de "Ausencia de Seguro de Desempleo Universal", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Cuentas de Indemnización Portátiles (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Cuentas de Indemnización Portátiles.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 20 },
            { name: 'Año 2', value: 45 },
            { name: 'Año 3', value: 75 },
            { name: 'Año 4', value: 110 },
            { name: 'Año 5', value: 160 }
          ],
          imageUrl: 'https://picsum.photos/seed/wel-9-solution/800/400'
        }
      },
      {
        id: 'wel-10',
        upvotes: 0,
        downvotes: 0,
        title: 'Violencia de Género y Refugios Inadecuados',
        description: 'Altas tasas de violencia de género (feminicidios) con sistemas de refugios estatales peligrosamente inadecuados.',
        solution: {
          leader: 'Jacinda Ardern',
          model: 'Casas de Seguridad Financiadas por Incautaciones',
          description: 'Establecer casas de seguridad altamente seguras y geográficamente no reveladas con capacitación laboral integrada, financiadas directamente por la incautación de activos del crimen organizado.',
          extendedDescription: `La implementación del modelo de Jacinda Ardern requiere una reestructuración profunda. Establecer casas de seguridad altamente seguras y geográficamente no reveladas con capacitación laboral integrada, financiadas directamente por la incautación de activos del crimen organizado. Esto implica un cambio radical en la forma en que abordamos el problema de "Violencia de Género y Refugios Inadecuados", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Casas de Seguridad Financiadas por Incautaciones (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Casas de Seguridad Financiadas por Incautaciones.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 30 },
            { name: 'Año 2', value: 60 },
            { name: 'Año 3', value: 95 },
            { name: 'Año 4', value: 135 },
            { name: 'Año 5', value: 190 }
          ],
          imageUrl: 'https://picsum.photos/seed/wel-10-solution/800/400'
        }
      },
      {
        id: 'wel-11',
        upvotes: 0,
        downvotes: 0,
        title: 'Crisis en Medicamentos de Alto Costo',
        description: 'Retrasos sistémicos, corrupción y denegación de atención en el programa de Medicamentos de Alto Costo.',
        solution: {
          leader: 'Modelo OPS',
          model: 'Bloques de Compras Internacionales',
          description: 'Unirse a bloques de adquisiciones internacionales para eludir los monopolios locales y aprovechar el volumen multinacional para reducir drásticamente el costo de los medicamentos oncológicos y biotecnológicos.',
          extendedDescription: `La implementación del modelo de Modelo OPS requiere una reestructuración profunda. Unirse a bloques de adquisiciones internacionales para eludir los monopolios locales y aprovechar el volumen multinacional para reducir drásticamente el costo de los medicamentos oncológicos y biotecnológicos. Esto implica un cambio radical en la forma en que abordamos el problema de "Crisis en Medicamentos de Alto Costo", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Bloques de Compras Internacionales (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Bloques de Compras Internacionales.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 40 },
            { name: 'Año 2', value: 75 },
            { name: 'Año 3', value: 115 },
            { name: 'Año 4', value: 160 },
            { name: 'Año 5', value: 220 }
          ],
          imageUrl: 'https://picsum.photos/seed/wel-11-solution/800/400'
        }
      },
      {
        id: 'wel-12',
        upvotes: 0,
        downvotes: 0,
        title: 'Abandono de la Población Envejeciente',
        description: 'Falta de atención integral, asilos y redes de apoyo para la población de edad avanzada cada vez más empobrecida.',
        solution: {
          leader: 'Modelo Japonés',
          model: 'Atención Geriátrica Comunitaria',
          description: 'Subsidiar centros médicos y de atención diurna geriátrica basados en la comunidad, coadministrados por municipios locales y ONG estrictamente auditadas.',
          extendedDescription: `La implementación del modelo de Modelo Japonés requiere una reestructuración profunda. Subsidiar centros médicos y de atención diurna geriátrica basados en la comunidad, coadministrados por municipios locales y ONG estrictamente auditadas. Esto implica un cambio radical en la forma en que abordamos el problema de "Abandono de la Población Envejeciente", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Atención Geriátrica Comunitaria (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Atención Geriátrica Comunitaria.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 50 },
            { name: 'Año 2', value: 90 },
            { name: 'Año 3', value: 135 },
            { name: 'Año 4', value: 185 },
            { name: 'Año 5', value: 250 }
          ],
          imageUrl: 'https://picsum.photos/seed/wel-12-solution/800/400'
        }
      },
      {
        id: 'wel-13',
        upvotes: 0,
        downvotes: 0,
        title: 'Desamparo a Cuidadores de Personas con Discapacidad',
        description: 'Apoyo financiero y de infraestructura insuficiente para las familias que cuidan a personas con discapacidades severas.',
        solution: {
          leader: 'Angela Merkel',
          model: 'Transferencias Directas a Cuidadores',
          description: 'Proporcionar transferencias de efectivo digitales directas e incondicionales y exenciones de impuestos a los cuidadores verificados médicamente para evitar el colapso económico familiar.',
          extendedDescription: `La implementación del modelo de Angela Merkel requiere una reestructuración profunda. Proporcionar transferencias de efectivo digitales directas e incondicionales y exenciones de impuestos a los cuidadores verificados médicamente para evitar el colapso económico familiar. Esto implica un cambio radical en la forma en que abordamos el problema de "Desamparo a Cuidadores de Personas con Discapacidad", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Transferencias Directas a Cuidadores (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Transferencias Directas a Cuidadores.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 60 },
            { name: 'Año 2', value: 105 },
            { name: 'Año 3', value: 155 },
            { name: 'Año 4', value: 210 },
            { name: 'Año 5', value: 280 }
          ],
          imageUrl: 'https://picsum.photos/seed/wel-13-solution/800/400'
        }
      },
      {
        id: 'wel-14',
        upvotes: 0,
        downvotes: 0,
        title: 'Saturación Hospitalaria por Migración Indocumentada',
        description: 'Fuerte presión sobre las salas de maternidad y emergencias públicas debido a poblaciones masivas de inmigrantes indocumentados.',
        solution: {
          leader: 'Lee Hsien Loong',
          model: 'Fondo de Salud para Migrantes Prepagado',
          description: 'Exigir que todos los sectores agrícolas y de construcción que utilizan mano de obra extranjera paguen por adelantado a un fondo de atención médica para migrantes para aliviar la carga de los contribuyentes dominicanos.',
          extendedDescription: `La implementación del modelo de Lee Hsien Loong requiere una reestructuración profunda. Exigir que todos los sectores agrícolas y de construcción que utilizan mano de obra extranjera paguen por adelantado a un fondo de atención médica para migrantes para aliviar la carga de los contribuyentes dominicanos. Esto implica un cambio radical en la forma en que abordamos el problema de "Saturación Hospitalaria por Migración Indocumentada", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Fondo de Salud para Migrantes Prepagado (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Fondo de Salud para Migrantes Prepagado.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 20 },
            { name: 'Año 2', value: 45 },
            { name: 'Año 3', value: 75 },
            { name: 'Año 4', value: 110 },
            { name: 'Año 5', value: 160 }
          ],
          imageUrl: 'https://picsum.photos/seed/wel-14-solution/800/400'
        }
      },
      {
        id: 'wel-15',
        upvotes: 0,
        downvotes: 0,
        title: 'Impacto Nutricional Deficiente de Subsidios',
        description: 'Pobre impacto nutricional de los programas de asistencia alimentaria debido a la compra de bienes altamente procesados.',
        solution: {
          leader: 'Lula da Silva',
          model: 'Billeteras Restringidas a Productos Locales',
          description: 'Restringir las billeteras digitales de subsidios a una lista formulada científicamente de productos agrícolas locales densos en nutrientes, impulsando simultáneamente el sector agrícola nacional.',
          extendedDescription: `La implementación del modelo de Lula da Silva requiere una reestructuración profunda. Restringir las billeteras digitales de subsidios a una lista formulada científicamente de productos agrícolas locales densos en nutrientes, impulsando simultáneamente el sector agrícola nacional. Esto implica un cambio radical en la forma en que abordamos el problema de "Impacto Nutricional Deficiente de Subsidios", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Billeteras Restringidas a Productos Locales (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Billeteras Restringidas a Productos Locales.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 30 },
            { name: 'Año 2', value: 60 },
            { name: 'Año 3', value: 95 },
            { name: 'Año 4', value: 135 },
            { name: 'Año 5', value: 190 }
          ],
          imageUrl: 'https://picsum.photos/seed/wel-15-solution/800/400'
        }
      },
      {
        id: 'wel-16',
        upvotes: 0,
        downvotes: 0,
        title: 'Dependencia Intergeneracional de Asistencia Social',
        description: 'Dependencia generacional de la asistencia social que atrapa a las familias en la pobreza.',
        solution: {
          leader: 'Bill Clinton',
          model: 'Subsidios Condicionados a Capacitación',
          description: 'Vincular la recepción de subsidios a largo plazo para adultos sin discapacidades a la inscripción obligatoria en programas vocacionales y de mejora de habilidades técnicas de alta demanda.',
          extendedDescription: `La implementación del modelo de Bill Clinton requiere una reestructuración profunda. Vincular la recepción de subsidios a largo plazo para adultos sin discapacidades a la inscripción obligatoria en programas vocacionales y de mejora de habilidades técnicas de alta demanda. Esto implica un cambio radical en la forma en que abordamos el problema de "Dependencia Intergeneracional de Asistencia Social", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Subsidios Condicionados a Capacitación (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Subsidios Condicionados a Capacitación.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 40 },
            { name: 'Año 2', value: 75 },
            { name: 'Año 3', value: 115 },
            { name: 'Año 4', value: 160 },
            { name: 'Año 5', value: 220 }
          ],
          imageUrl: 'https://picsum.photos/seed/wel-16-solution/800/400'
        }
      },
      {
        id: 'wel-17',
        upvotes: 0,
        downvotes: 0,
        title: 'Carencia de Infraestructura de Salud Mental',
        description: 'Grave falta de infraestructura de salud mental y estigmatización de la atención psiquiátrica.',
        solution: {
          leader: 'Modelo Australiano',
          model: 'Telepsiquiatría por IA y Centros Regionales',
          description: 'Integrar telepsiquiatría clasificada por IA en todas las clínicas de atención primaria y financiar centros regionales modernos de estabilización de salud mental para despejar las salas de emergencia.',
          extendedDescription: `La implementación del modelo de Modelo Australiano requiere una reestructuración profunda. Integrar telepsiquiatría clasificada por IA en todas las clínicas de atención primaria y financiar centros regionales modernos de estabilización de salud mental para despejar las salas de emergencia. Esto implica un cambio radical en la forma en que abordamos el problema de "Carencia de Infraestructura de Salud Mental", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Telepsiquiatría por IA y Centros Regionales (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Telepsiquiatría por IA y Centros Regionales.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 50 },
            { name: 'Año 2', value: 90 },
            { name: 'Año 3', value: 135 },
            { name: 'Año 4', value: 185 },
            { name: 'Año 5', value: 250 }
          ],
          imageUrl: 'https://picsum.photos/seed/wel-17-solution/800/400'
        }
      },
      {
        id: 'wel-18',
        upvotes: 0,
        downvotes: 0,
        title: 'Exclusión de Trabajadoras Informales de Licencia por Maternidad',
        description: 'La licencia de maternidad y el apoyo para el cuidado infantil benefician exclusivamente al sector formal, castigando a las trabajadoras informales pobres.',
        solution: {
          leader: 'Modelo Nórdico',
          model: 'Subvención Universal "Primeros 1000 Días"',
          description: 'Crear una subvención universal materna de los "Primeros 1000 Días" pagada directamente a las madres tras visitas clínicas prenatales verificadas, independientemente de su situación laboral.',
          extendedDescription: `La implementación del modelo de Modelo Nórdico requiere una reestructuración profunda. Crear una subvención universal materna de los "Primeros 1000 Días" pagada directamente a las madres tras visitas clínicas prenatales verificadas, independientemente de su situación laboral. Esto implica un cambio radical en la forma en que abordamos el problema de "Exclusión de Trabajadoras Informales de Licencia por Maternidad", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Subvención Universal "Primeros 1000 Días" (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Subvención Universal "Primeros 1000 Días".',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 60 },
            { name: 'Año 2', value: 105 },
            { name: 'Año 3', value: 155 },
            { name: 'Año 4', value: 210 },
            { name: 'Año 5', value: 280 }
          ],
          imageUrl: 'https://picsum.photos/seed/wel-18-solution/800/400'
        }
      },
      {
        id: 'wel-19',
        upvotes: 0,
        downvotes: 0,
        title: 'Erosión de Subsidios por Inflación',
        description: 'Los subsidios pierden rápidamente su poder adquisitivo debido a la inflación y los choques económicos.',
        solution: {
          leader: 'Kaja Kallas',
          model: 'Indexación Automática por Contratos Inteligentes',
          description: 'Integrar contratos inteligentes en el sistema de distribución de asistencia social que indexen automáticamente todos los montos de transferencias sociales al Índice de Precios al Consumidor (IPC) en tiempo real.',
          extendedDescription: `La implementación del modelo de Kaja Kallas requiere una reestructuración profunda. Integrar contratos inteligentes en el sistema de distribución de asistencia social que indexen automáticamente todos los montos de transferencias sociales al Índice de Precios al Consumidor (IPC) en tiempo real. Esto implica un cambio radical en la forma en que abordamos el problema de "Erosión de Subsidios por Inflación", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Indexación Automática por Contratos Inteligentes (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Indexación Automática por Contratos Inteligentes.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 20 },
            { name: 'Año 2', value: 45 },
            { name: 'Año 3', value: 75 },
            { name: 'Año 4', value: 110 },
            { name: 'Año 5', value: 160 }
          ],
          imageUrl: 'https://picsum.photos/seed/wel-19-solution/800/400'
        }
      },
      {
        id: 'wel-20',
        upvotes: 0,
        downvotes: 0,
        title: 'Exclusión Financiera de Beneficiarios',
        description: 'Falta total de inclusión financiera; los beneficiarios de subsidios permanecen no bancarizados y vulnerables a préstamos predatorios.',
        solution: {
          leader: 'Nandan Nilekani',
          model: 'Inclusión Financiera Biométrica',
          description: 'Utilizar el sistema de distribución de asistencia social biométrica como puerta de entrada para emitir microcréditos sin comisiones y cuentas de ahorro, integrando a los más pobres directamente en el sistema financiero formal.',
          extendedDescription: `La implementación del modelo de Nandan Nilekani requiere una reestructuración profunda. Utilizar el sistema de distribución de asistencia social biométrica como puerta de entrada para emitir microcréditos sin comisiones y cuentas de ahorro, integrando a los más pobres directamente en el sistema financiero formal. Esto implica un cambio radical en la forma en que abordamos el problema de "Exclusión Financiera de Beneficiarios", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Inclusión Financiera Biométrica (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Inclusión Financiera Biométrica.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 30 },
            { name: 'Año 2', value: 60 },
            { name: 'Año 3', value: 95 },
            { name: 'Año 4', value: 135 },
            { name: 'Año 5', value: 190 }
          ],
          imageUrl: 'https://picsum.photos/seed/wel-20-solution/800/400'
        }
      }
    ]
  },
  {
    id: 'energy',
    title: 'Energía',
    icon: Zap,
    overview: 'Transformar la red dominicana de un pasivo centralizado y dependiente de combustibles fósiles en un activo descentralizado, impulsado por energías renovables y operado por el sector privado.',
    megaproject: {
      title: 'Anillo Nacional de Transmisión de 345kV y Almacenamiento a Gran Escala (BESS)',
      description: 'La solución definitiva a los apagones. Construcción de una red de transmisión troncal de ultra alta tensión (345kV), redundante y blindada contra huracanes, que conecte los polos de generación renovable directamente con las ciudades. Este anillo estará acoplado a la instalación de gigantescos parques de baterías (BESS) en las subestaciones principales para almacenar la energía solar/eólica y despacharla durante el pico de demanda nocturno. Adicionalmente, incorporar Reactores Modulares Pequeños (SMRs), reactores nucleares avanzados con una capacidad de hasta 300 MW(e), diseñados para construcción en fábrica y ensamblaje modular, ofreciendo mayor seguridad y menor huella física.'
        ,
      timeline: [
        { phase: '2026-2027', description: 'Fase inicial de planificación, auditoría y diseño arquitectónico.' },
        { phase: '2028-2029', description: 'Despliegue de infraestructura base y programas piloto en zonas clave.' },
        { phase: '2030+', description: 'Expansión a nivel nacional, optimización continua y evaluación de impacto.' }
      ],
      partners: ['Banco Interamericano de Desarrollo (BID)', 'Ministerio de Economía, Planificación y Desarrollo', 'Sector Privado Local', 'ONGs Internacionales', 'Agencias de Cooperación (USAID, JICA)']
    },
    problems: [
      {
        id: 'nrg-1',
        upvotes: 0,
        downvotes: 0,
        title: 'Pérdidas de Distribución Sistémicas',
        description: 'Las EDE estatales reportan asombrosas pérdidas de energía de hasta el 41.7%, impulsadas por infraestructura obsoleta y 650,000 conexiones ilegales.',
        solution: {
          leader: 'Elon Musk & Nayib Bukele',
          model: 'Corea del Sur / Dinamarca',
          description: 'Despliegue agresivo de Infraestructura de Medición Avanzada (AMI) y diagnósticos de IA, junto con tribunales de energía especializados para procesar el robo de energía corporativa.',
          extendedDescription: `La implementación del modelo de Elon Musk & Nayib Bukele requiere una reestructuración profunda. Despliegue agresivo de Infraestructura de Medición Avanzada (AMI) y diagnósticos de IA, junto con tribunales de energía especializados para procesar el robo de energía corporativa. Esto implica un cambio radical en la forma en que abordamos el problema de "Pérdidas de Distribución Sistémicas", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Corea del Sur / Dinamarca (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Corea del Sur / Dinamarca.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 40 },
            { name: 'Año 2', value: 75 },
            { name: 'Año 3', value: 115 },
            { name: 'Año 4', value: 160 },
            { name: 'Año 5', value: 220 }
          ],
          imageUrl: 'https://picsum.photos/seed/energy-solution/800/400'
        }
      },
      {
        id: 'nrg-2',
        upvotes: 0,
        downvotes: 0,
        title: 'Agujero Negro Fiscal de los Subsidios Estatales',
        description: 'El gobierno presupuesta aproximadamente $1.3 mil millones anuales para subsidiar a las EDE, deprimiendo artificialmente las tarifas y desplazando el gasto público vital.',
        solution: {
          leader: 'Javier Milei & Lee Kuan Yew',
          model: 'Modelo de Singapur',
          description: 'Programa de normalización de tarifas por fases de 24 meses para eliminar los subsidios, mientras se inscribe agresivamente al 40% inferior en el programa de asistencia focalizada BonoLuz.',
          extendedDescription: `La implementación del modelo de Javier Milei & Lee Kuan Yew requiere una reestructuración profunda. Programa de normalización de tarifas por fases de 24 meses para eliminar los subsidios, mientras se inscribe agresivamente al 40% inferior en el programa de asistencia focalizada BonoLuz. Esto implica un cambio radical en la forma en que abordamos el problema de "Agujero Negro Fiscal de los Subsidios Estatales", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Modelo de Singapur (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Modelo de Singapur.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 50 },
            { name: 'Año 2', value: 90 },
            { name: 'Año 3', value: 135 },
            { name: 'Año 4', value: 185 },
            { name: 'Año 5', value: 250 }
          ],
          imageUrl: 'https://picsum.photos/seed/nrg-2-solution/800/400'
        }
      },
      {
        id: 'nrg-3',
        upvotes: 0,
        downvotes: 0,
        title: 'Restricción Irracional de la Energía Renovable',
        description: 'La congestión de la red y las inflexibles reglas de "despacho forzado" para las plantas térmicas obligan a la restricción y el desperdicio de energía solar y eólica más barata.',
        solution: {
          leader: 'Lee Kuan Yew & Elon Musk',
          model: 'Singapur / Corea del Sur',
          description: 'Implementar un sistema de despacho de orden de mérito absoluto y utilizar el equilibrio de carga predictivo impulsado por IA para ciclar de manera segura las plantas térmicas solo cuando sea necesario.',
          extendedDescription: `La implementación del modelo de Lee Kuan Yew & Elon Musk requiere una reestructuración profunda. Implementar un sistema de despacho de orden de mérito absoluto y utilizar el equilibrio de carga predictivo impulsado por IA para ciclar de manera segura las plantas térmicas solo cuando sea necesario. Esto implica un cambio radical en la forma en que abordamos el problema de "Restricción Irracional de la Energía Renovable", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Singapur / Corea del Sur (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Singapur / Corea del Sur.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 60 },
            { name: 'Año 2', value: 105 },
            { name: 'Año 3', value: 155 },
            { name: 'Año 4', value: 210 },
            { name: 'Año 5', value: 280 }
          ],
          imageUrl: 'https://picsum.photos/seed/nrg-3-solution/800/400'
        }
      },
      {
        id: 'nrg-4',
        upvotes: 0,
        downvotes: 0,
        title: 'Dependencia de Combustibles Fósiles Importados',
        description: 'La alta dependencia del carbón, gas natural y petróleo importados expone a la economía a choques de precios globales y drena reservas de divisas.',
        solution: {
          leader: 'Elon Musk',
          model: 'Modelo Islandés de Transición',
          description: 'Acelerar la transición a energías renovables mediante subastas inversas agresivas para almacenamiento en baterías a gran escala y energía solar, eliminando aranceles de importación para tecnología verde.',
          extendedDescription: `La implementación del modelo de Elon Musk requiere una reestructuración profunda. Acelerar la transición a energías renovables mediante subastas inversas agresivas para almacenamiento en baterías a gran escala y energía solar, eliminando aranceles de importación para tecnología verde. Esto implica un cambio radical en la forma en que abordamos el problema de "Dependencia de Combustibles Fósiles Importados", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Modelo Islandés de Transición (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Modelo Islandés de Transición.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 20 },
            { name: 'Año 2', value: 45 },
            { name: 'Año 3', value: 75 },
            { name: 'Año 4', value: 110 },
            { name: 'Año 5', value: 160 }
          ],
          imageUrl: 'https://picsum.photos/seed/nrg-4-solution/800/400'
        }
      },
      {
        id: 'nrg-5',
        upvotes: 0,
        downvotes: 0,
        title: 'Monopolio Estatal en Transmisión',
        description: 'El monopolio estatal sobre la red de transmisión (ETED) crea cuellos de botella masivos para conectar nuevos proyectos de energía limpia.',
        solution: {
          leader: 'Javier Milei',
          model: 'Mercado Abierto de Texas (ERCOT)',
          description: 'Desregular y privatizar parcialmente la infraestructura de transmisión, permitiendo a consorcios privados construir y operar líneas de alta tensión bajo un modelo de peaje regulado.',
          extendedDescription: `La implementación del modelo de Javier Milei requiere una reestructuración profunda. Desregular y privatizar parcialmente la infraestructura de transmisión, permitiendo a consorcios privados construir y operar líneas de alta tensión bajo un modelo de peaje regulado. Esto implica un cambio radical en la forma en que abordamos el problema de "Monopolio Estatal en Transmisión", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Mercado Abierto de Texas (ERCOT) (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Mercado Abierto de Texas (ERCOT).',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 30 },
            { name: 'Año 2', value: 60 },
            { name: 'Año 3', value: 95 },
            { name: 'Año 4', value: 135 },
            { name: 'Año 5', value: 190 }
          ],
          imageUrl: 'https://picsum.photos/seed/nrg-5-solution/800/400'
        }
      },
      {
        id: 'nrg-6',
        upvotes: 0,
        downvotes: 0,
        title: 'Déficit Financiero y Operativo de las EDEs',
        description: 'Déficit financiero masivo y pérdidas técnicas/comerciales en las empresas distribuidoras estatales (EDEs).',
        solution: {
          leader: 'Javier Milei',
          model: 'Apertura y Alianzas Público-Privadas (APP)',
          description: 'Privatizar completamente la gestión de las EDEs bajo estrictas APPs con KPIs de rendimiento de tolerancia cero y cláusulas de terminación automática.',
          extendedDescription: `La implementación del modelo de Javier Milei requiere una reestructuración profunda. Privatizar completamente la gestión de las EDEs bajo estrictas APPs con KPIs de rendimiento de tolerancia cero y cláusulas de terminación automática. Esto implica un cambio radical en la forma en que abordamos el problema de "Déficit Financiero y Operativo de las EDEs", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Apertura y Alianzas Público-Privadas (APP) (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Apertura y Alianzas Público-Privadas (APP).',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 40 },
            { name: 'Año 2', value: 75 },
            { name: 'Año 3', value: 115 },
            { name: 'Año 4', value: 160 },
            { name: 'Año 5', value: 220 }
          ],
          imageUrl: 'https://picsum.photos/seed/nrg-6-solution/800/400'
        }
      },
      {
        id: 'nrg-7',
        upvotes: 0,
        downvotes: 0,
        title: 'Apagones Crónicos y Déficit de Generación',
        description: 'Apagones crónicos y racionamiento de carga debido a que la demanda máxima supera la generación disponible.',
        solution: {
          leader: 'Elon Musk',
          model: 'Almacenamiento en Baterías a Gran Escala (BESS)',
          description: 'Exigir el despliegue inmediato de Sistemas de Almacenamiento de Energía en Baterías (BESS) a gran escala en todas las subestaciones principales para reducir la demanda máxima y estabilizar la frecuencia.',
          extendedDescription: `La implementación del modelo de Elon Musk requiere una reestructuración profunda. Exigir el despliegue inmediato de Sistemas de Almacenamiento de Energía en Baterías (BESS) a gran escala en todas las subestaciones principales para reducir la demanda máxima y estabilizar la frecuencia. Esto implica un cambio radical en la forma en que abordamos el problema de "Apagones Crónicos y Déficit de Generación", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Almacenamiento en Baterías a Gran Escala (BESS) (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Almacenamiento en Baterías a Gran Escala (BESS).',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 50 },
            { name: 'Año 2', value: 90 },
            { name: 'Año 3', value: 135 },
            { name: 'Año 4', value: 185 },
            { name: 'Año 5', value: 250 }
          ],
          imageUrl: 'https://picsum.photos/seed/nrg-7-solution/800/400'
        }
      },
      {
        id: 'nrg-8',
        upvotes: 0,
        downvotes: 0,
        title: 'Interferencia Política en las Tarifas Eléctricas',
        description: 'Interferencia política en la fijación de tarifas, manteniendo los precios al consumidor desconectados artificialmente de los costos de generación.',
        solution: {
          leader: 'Lee Kuan Yew',
          model: 'Comisión Reguladora Algorítmica Independiente',
          description: 'Establecer una comisión reguladora (SIE) totalmente independiente impulsada por algoritmos que ajuste automáticamente las tarifas en función de los índices globales de combustible y generación en tiempo real.',
          extendedDescription: `La implementación del modelo de Lee Kuan Yew requiere una reestructuración profunda. Establecer una comisión reguladora (SIE) totalmente independiente impulsada por algoritmos que ajuste automáticamente las tarifas en función de los índices globales de combustible y generación en tiempo real. Esto implica un cambio radical en la forma en que abordamos el problema de "Interferencia Política en las Tarifas Eléctricas", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Comisión Reguladora Algorítmica Independiente (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Comisión Reguladora Algorítmica Independiente.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 60 },
            { name: 'Año 2', value: 105 },
            { name: 'Año 3', value: 155 },
            { name: 'Año 4', value: 210 },
            { name: 'Año 5', value: 280 }
          ],
          imageUrl: 'https://picsum.photos/seed/nrg-8-solution/800/400'
        }
      },
      {
        id: 'nrg-9',
        upvotes: 0,
        downvotes: 0,
        title: 'Cuellos de Botella Burocráticos para Energías Renovables',
        description: 'Cuellos de botella burocráticos y corrupción en la emisión de concesiones para proyectos de energía renovable.',
        solution: {
          leader: 'Nayib Bukele',
          model: 'Portal de Permisos Blockchain de Aprobación Automática',
          description: 'Digitalizar todo el proceso de permisos en un único portal asegurado por blockchain con un mandato estricto de "aprobación automática en 90 días" si el estado no responde.',
          extendedDescription: `La implementación del modelo de Nayib Bukele requiere una reestructuración profunda. Digitalizar todo el proceso de permisos en un único portal asegurado por blockchain con un mandato estricto de "aprobación automática en 90 días" si el estado no responde. Esto implica un cambio radical en la forma en que abordamos el problema de "Cuellos de Botella Burocráticos para Energías Renovables", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Portal de Permisos Blockchain de Aprobación Automática (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Portal de Permisos Blockchain de Aprobación Automática.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 20 },
            { name: 'Año 2', value: 45 },
            { name: 'Año 3', value: 75 },
            { name: 'Año 4', value: 110 },
            { name: 'Año 5', value: 160 }
          ],
          imageUrl: 'https://picsum.photos/seed/nrg-9-solution/800/400'
        }
      },
      {
        id: 'nrg-10',
        upvotes: 0,
        downvotes: 0,
        title: 'Restricciones a la Generación Distribuida',
        description: 'Límites arbitrarios y falta de financiamiento para la generación distribuida (energía solar en techos residenciales y comerciales).',
        solution: {
          leader: 'Angela Merkel',
          model: 'Eliminación de Límites y Financiamiento Estatal',
          description: 'Eliminar todos los límites de medición neta y exigir a los bancos locales que ofrezcan préstamos sin intereses respaldados por el estado para instalaciones residenciales de energía solar con baterías.',
          extendedDescription: `La implementación del modelo de Angela Merkel requiere una reestructuración profunda. Eliminar todos los límites de medición neta y exigir a los bancos locales que ofrezcan préstamos sin intereses respaldados por el estado para instalaciones residenciales de energía solar con baterías. Esto implica un cambio radical en la forma en que abordamos el problema de "Restricciones a la Generación Distribuida", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Eliminación de Límites y Financiamiento Estatal (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Eliminación de Límites y Financiamiento Estatal.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 30 },
            { name: 'Año 2', value: 60 },
            { name: 'Año 3', value: 95 },
            { name: 'Año 4', value: 135 },
            { name: 'Año 5', value: 190 }
          ],
          imageUrl: 'https://picsum.photos/seed/nrg-10-solution/800/400'
        }
      },
      {
        id: 'nrg-11',
        upvotes: 0,
        downvotes: 0,
        title: 'Riesgo Financiero y Emisiones de Punta Catalina',
        description: 'Altas emisiones y riesgo financiero a largo plazo de la enorme planta de carbón de Punta Catalina.',
        solution: {
          leader: 'Emmanuel Macron',
          model: 'Transición a Biomasa e Hidrógeno Verde',
          description: 'Ejecutar un plan de transición en fases, financieramente delimitado, para co-quemar biomasa en la planta y eventualmente adaptarla para gas natural o hidrógeno verde.',
          extendedDescription: `La implementación del modelo de Emmanuel Macron requiere una reestructuración profunda. Ejecutar un plan de transición en fases, financieramente delimitado, para co-quemar biomasa en la planta y eventualmente adaptarla para gas natural o hidrógeno verde. Esto implica un cambio radical en la forma en que abordamos el problema de "Riesgo Financiero y Emisiones de Punta Catalina", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Transición a Biomasa e Hidrógeno Verde (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Transición a Biomasa e Hidrógeno Verde.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 40 },
            { name: 'Año 2', value: 75 },
            { name: 'Año 3', value: 115 },
            { name: 'Año 4', value: 160 },
            { name: 'Año 5', value: 220 }
          ],
          imageUrl: 'https://picsum.photos/seed/nrg-11-solution/800/400'
        }
      },
      {
        id: 'nrg-12',
        upvotes: 0,
        downvotes: 0,
        title: 'Pésimo Servicio al Cliente y Facturación Estimada',
        description: 'Servicio al cliente deficiente, facturación estimada y resolución de disputas imposible para los clientes de las EDEs.',
        solution: {
          leader: 'Sam Altman',
          model: 'Portales de IA para Reembolsos Inmediatos',
          description: 'Reemplazar los centros de llamadas humanos con portales de IA que emitan automáticamente reembolsos digitales inmediatos por anomalías de facturación verificadas algorítmicamente.',
          extendedDescription: `La implementación del modelo de Sam Altman requiere una reestructuración profunda. Reemplazar los centros de llamadas humanos con portales de IA que emitan automáticamente reembolsos digitales inmediatos por anomalías de facturación verificadas algorítmicamente. Esto implica un cambio radical en la forma en que abordamos el problema de "Pésimo Servicio al Cliente y Facturación Estimada", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Portales de IA para Reembolsos Inmediatos (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Portales de IA para Reembolsos Inmediatos.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 50 },
            { name: 'Año 2', value: 90 },
            { name: 'Año 3', value: 135 },
            { name: 'Año 4', value: 185 },
            { name: 'Año 5', value: 250 }
          ],
          imageUrl: 'https://picsum.photos/seed/nrg-12-solution/800/400'
        }
      },
      {
        id: 'nrg-13',
        upvotes: 0,
        downvotes: 0,
        title: 'Ausencia de Estándares de Eficiencia Energética',
        description: 'Falta total de estándares nacionales de eficiencia energética para edificios y electrodomésticos de consumo.',
        solution: {
          leader: 'Modelo Europeo',
          model: 'Códigos Estrictos de Construcción y Eficiencia',
          description: 'Prohibir la importación de electrodomésticos de baja eficiencia y exigir códigos estrictos de aislamiento térmico y eficiencia de enfriamiento para todas las nuevas construcciones comerciales y residenciales.',
          extendedDescription: `La implementación del modelo de Modelo Europeo requiere una reestructuración profunda. Prohibir la importación de electrodomésticos de baja eficiencia y exigir códigos estrictos de aislamiento térmico y eficiencia de enfriamiento para todas las nuevas construcciones comerciales y residenciales. Esto implica un cambio radical en la forma en que abordamos el problema de "Ausencia de Estándares de Eficiencia Energética", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Códigos Estrictos de Construcción y Eficiencia (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Códigos Estrictos de Construcción y Eficiencia.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 60 },
            { name: 'Año 2', value: 105 },
            { name: 'Año 3', value: 155 },
            { name: 'Año 4', value: 210 },
            { name: 'Año 5', value: 280 }
          ],
          imageUrl: 'https://picsum.photos/seed/nrg-13-solution/800/400'
        }
      },
      {
        id: 'nrg-14',
        upvotes: 0,
        downvotes: 0,
        title: 'Pronóstico Inadecuado de la Demanda Eléctrica',
        description: 'Pronóstico reactivo e inadecuado para el crecimiento de la demanda de electricidad macroeconómica y localizada.',
        solution: {
          leader: 'Demis Hassabis',
          model: 'Modelos de Aprendizaje Automático Predictivo',
          description: 'Desplegar modelos de aprendizaje automático que analicen datos macroeconómicos, inicios de viviendas y tendencias climáticas para predecir y adquirir capacidad de generación con 5 a 10 años de anticipación.',
          extendedDescription: `La implementación del modelo de Demis Hassabis requiere una reestructuración profunda. Desplegar modelos de aprendizaje automático que analicen datos macroeconómicos, inicios de viviendas y tendencias climáticas para predecir y adquirir capacidad de generación con 5 a 10 años de anticipación. Esto implica un cambio radical en la forma en que abordamos el problema de "Pronóstico Inadecuado de la Demanda Eléctrica", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Modelos de Aprendizaje Automático Predictivo (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Modelos de Aprendizaje Automático Predictivo.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 20 },
            { name: 'Año 2', value: 45 },
            { name: 'Año 3', value: 75 },
            { name: 'Año 4', value: 110 },
            { name: 'Año 5', value: 160 }
          ],
          imageUrl: 'https://picsum.photos/seed/nrg-14-solution/800/400'
        }
      },
      {
        id: 'nrg-15',
        upvotes: 0,
        downvotes: 0,
        title: 'Vulnerabilidad de la Red de Distribución Aérea',
        description: 'Alta vulnerabilidad de la red de distribución aérea a huracanes y tormentas tropicales.',
        solution: {
          leader: 'Lee Hsien Loong',
          model: 'Cableado Subterráneo y Gestión de Vegetación',
          description: 'Exigir cableado subterráneo para todos los nuevos desarrollos urbanos y establecer un perímetro de gestión de vegetación agresivo y continuo para las líneas existentes.',
          extendedDescription: `La implementación del modelo de Lee Hsien Loong requiere una reestructuración profunda. Exigir cableado subterráneo para todos los nuevos desarrollos urbanos y establecer un perímetro de gestión de vegetación agresivo y continuo para las líneas existentes. Esto implica un cambio radical en la forma en que abordamos el problema de "Vulnerabilidad de la Red de Distribución Aérea", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Cableado Subterráneo y Gestión de Vegetación (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Cableado Subterráneo y Gestión de Vegetación.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 30 },
            { name: 'Año 2', value: 60 },
            { name: 'Año 3', value: 95 },
            { name: 'Año 4', value: 135 },
            { name: 'Año 5', value: 190 }
          ],
          imageUrl: 'https://picsum.photos/seed/nrg-15-solution/800/400'
        }
      },
      {
        id: 'nrg-16',
        upvotes: 0,
        downvotes: 0,
        title: 'Falta de Estrategia Energética Nacional a Largo Plazo',
        description: 'Carencia de una estrategia energética nacional vinculante a largo plazo que sobreviva a los ciclos electorales políticos de cuatro años.',
        solution: {
          leader: 'Modelo Noruego',
          model: 'Pacto de Seguridad Energética Constitucional',
          description: 'Consagrar un "Pacto de Seguridad Energética Nacional" de 20 años en la ley constitucional, requiriendo una supermayoría para alterarlo, garantizando así certeza total para los inversores extranjeros.',
          extendedDescription: `La implementación del modelo de Modelo Noruego requiere una reestructuración profunda. Consagrar un "Pacto de Seguridad Energética Nacional" de 20 años en la ley constitucional, requiriendo una supermayoría para alterarlo, garantizando así certeza total para los inversores extranjeros. Esto implica un cambio radical en la forma en que abordamos el problema de "Falta de Estrategia Energética Nacional a Largo Plazo", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Pacto de Seguridad Energética Constitucional (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Pacto de Seguridad Energética Constitucional.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 40 },
            { name: 'Año 2', value: 75 },
            { name: 'Año 3', value: 115 },
            { name: 'Año 4', value: 160 },
            { name: 'Año 5', value: 220 }
          ],
          imageUrl: 'https://picsum.photos/seed/nrg-16-solution/800/400'
        }
      },
      {
        id: 'nrg-17',
        upvotes: 0,
        downvotes: 0,
        title: 'Infraestructura Inexistente de Carga para Vehículos Eléctricos',
        description: 'Infraestructura de carga de vehículos eléctricos (EV) inexistente fuera de la capital, sofocando la movilidad eléctrica.',
        solution: {
          leader: 'Elon Musk',
          model: 'Cargadores Rápidos Obligatorios en Estaciones',
          description: 'Exigir que todas las principales franquicias de estaciones de combustible instalen cargadores rápidos para vehículos eléctricos como condición para sus licencias de operación, subsidiados por exenciones fiscales.',
          extendedDescription: `La implementación del modelo de Elon Musk requiere una reestructuración profunda. Exigir que todas las principales franquicias de estaciones de combustible instalen cargadores rápidos para vehículos eléctricos como condición para sus licencias de operación, subsidiados por exenciones fiscales. Esto implica un cambio radical en la forma en que abordamos el problema de "Infraestructura Inexistente de Carga para Vehículos Eléctricos", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Cargadores Rápidos Obligatorios en Estaciones (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Cargadores Rápidos Obligatorios en Estaciones.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 50 },
            { name: 'Año 2', value: 90 },
            { name: 'Año 3', value: 135 },
            { name: 'Año 4', value: 185 },
            { name: 'Año 5', value: 250 }
          ],
          imageUrl: 'https://picsum.photos/seed/nrg-17-solution/800/400'
        }
      },
      {
        id: 'nrg-18',
        upvotes: 0,
        downvotes: 0,
        title: 'Mantenimiento Reactivo de la Flota de Generación Térmica',
        description: 'Mantenimiento deficiente y reactivo de la flota de generación térmica existente, lo que provoca cortes inesperados y graves.',
        solution: {
          leader: 'Paul Kagame',
          model: 'Mantenimiento Predictivo con Penalizaciones',
          description: 'Hacer cumplir programas de mantenimiento predictivo impulsados por sensores con penalizaciones financieras paralizantes para las empresas generadoras que sufran cortes no planificados durante las horas de máxima demanda.',
          extendedDescription: `La implementación del modelo de Paul Kagame requiere una reestructuración profunda. Hacer cumplir programas de mantenimiento predictivo impulsados por sensores con penalizaciones financieras paralizantes para las empresas generadoras que sufran cortes no planificados durante las horas de máxima demanda. Esto implica un cambio radical en la forma en que abordamos el problema de "Mantenimiento Reactivo de la Flota de Generación Térmica", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Mantenimiento Predictivo con Penalizaciones (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Mantenimiento Predictivo con Penalizaciones.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 60 },
            { name: 'Año 2', value: 105 },
            { name: 'Año 3', value: 155 },
            { name: 'Año 4', value: 210 },
            { name: 'Año 5', value: 280 }
          ],
          imageUrl: 'https://picsum.photos/seed/nrg-18-solution/800/400'
        }
      },
      {
        id: 'nrg-19',
        upvotes: 0,
        downvotes: 0,
        title: 'Mercado Eléctrico Mayorista Poco Profundo',
        description: 'Un mercado eléctrico mayorista poco profundo que limita la competencia y mantiene altos los costos marginales.',
        solution: {
          leader: 'Modelo ERCOT (Texas)',
          model: 'Mercado Spot Mayorista Dinámico',
          description: 'Transición a un mercado spot mayorista totalmente dinámico con comercio automatizado en el día en curso y el día anterior, permitiendo la competencia en tiempo real entre los generadores.',
          extendedDescription: `La implementación del modelo de Modelo ERCOT (Texas) requiere una reestructuración profunda. Transición a un mercado spot mayorista totalmente dinámico con comercio automatizado en el día en curso y el día anterior, permitiendo la competencia en tiempo real entre los generadores. Esto implica un cambio radical en la forma en que abordamos el problema de "Mercado Eléctrico Mayorista Poco Profundo", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Mercado Spot Mayorista Dinámico (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Mercado Spot Mayorista Dinámico.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 20 },
            { name: 'Año 2', value: 45 },
            { name: 'Año 3', value: 75 },
            { name: 'Año 4', value: 110 },
            { name: 'Año 5', value: 160 }
          ],
          imageUrl: 'https://picsum.photos/seed/nrg-19-solution/800/400'
        }
      },
      {
        id: 'nrg-20',
        upvotes: 0,
        downvotes: 0,
        title: 'Subutilización de Represas Hidroeléctricas',
        description: 'Subutilización de las huellas de las represas hidroeléctricas existentes.',
        solution: {
          leader: 'Narendra Modi',
          model: 'Matrices Solares Flotantes (FPV)',
          description: 'Desplegar matrices solares fotovoltaicas flotantes (FPV) en los embalses de las represas hidroeléctricas existentes para duplicar la capacidad de generación y reducir significativamente la evaporación del agua.',
          extendedDescription: `La implementación del modelo de Narendra Modi requiere una reestructuración profunda. Desplegar matrices solares fotovoltaicas flotantes (FPV) en los embalses de las represas hidroeléctricas existentes para duplicar la capacidad de generación y reducir significativamente la evaporación del agua. Esto implica un cambio radical en la forma en que abordamos el problema de "Subutilización de Represas Hidroeléctricas", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Matrices Solares Flotantes (FPV) (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Matrices Solares Flotantes (FPV).',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 30 },
            { name: 'Año 2', value: 60 },
            { name: 'Año 3', value: 95 },
            { name: 'Año 4', value: 135 },
            { name: 'Año 5', value: 190 }
          ],
          imageUrl: 'https://picsum.photos/seed/nrg-20-solution/800/400'
        }
      },
      {
        id: 'nrg-21',
        upvotes: 0,
        downvotes: 0,
        title: 'Déficit de Trabajadores Técnicos Especializados',
        description: 'Grave déficit de trabajadores técnicos especializados necesarios para mantener redes inteligentes y energías renovables a gran escala.',
        solution: {
          leader: 'Angela Merkel',
          model: 'Academias de Energía de Alta Tecnología',
          description: 'Cofinanciar academias de energía de alta tecnología y altamente especializadas con firmas internacionales (ej. Siemens, GE) para garantizar una fuente de ingenieros eléctricos y de software certificados.',
          extendedDescription: `La implementación del modelo de Angela Merkel requiere una reestructuración profunda. Cofinanciar academias de energía de alta tecnología y altamente especializadas con firmas internacionales (ej. Siemens, GE) para garantizar una fuente de ingenieros eléctricos y de software certificados. Esto implica un cambio radical en la forma en que abordamos el problema de "Déficit de Trabajadores Técnicos Especializados", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Academias de Energía de Alta Tecnología (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Academias de Energía de Alta Tecnología.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 40 },
            { name: 'Año 2', value: 75 },
            { name: 'Año 3', value: 115 },
            { name: 'Año 4', value: 160 },
            { name: 'Año 5', value: 220 }
          ],
          imageUrl: 'https://picsum.photos/seed/nrg-21-solution/800/400'
        }
      }
    ]
  },
  {
    id: 'justice',
    title: 'Justicia',
    icon: Scale,
    overview: 'Un cambio de paradigma sistémico que abandona las burocracias anticuadas y la impunidad de las élites por la eficiencia digital, la meritocracia y la rehabilitación industrial.',
    megaproject: {
      title: 'Blockchain de Títulos y Sistema Penitenciario de Máxima Seguridad',
      description: 'La modernización simultánea del capital y el castigo. Por un lado, la migración completa del Registro de Títulos a un registro inmutable de blockchain para erradicar el fraude inmobiliario. Por el otro, el cierre de cárceles infrahumanas (como La Victoria) y la construcción de un nuevo sistema penitenciario altamente automatizado, operado bajo estrictas concesiones privadas, con inhibidores de señal militar y biometría para desmantelar el control de las pandillas.'
        ,
      timeline: [
        { phase: '2026-2027', description: 'Fase inicial de planificación, auditoría y diseño arquitectónico.' },
        { phase: '2028-2029', description: 'Despliegue de infraestructura base y programas piloto en zonas clave.' },
        { phase: '2030+', description: 'Expansión a nivel nacional, optimización continua y evaluación de impacto.' }
      ],
      partners: ['Banco Interamericano de Desarrollo (BID)', 'Ministerio de Economía, Planificación y Desarrollo', 'Sector Privado Local', 'ONGs Internacionales', 'Agencias de Cooperación (USAID, JICA)']
    },
    problems: [
      {
        id: 'jus-1',
        upvotes: 0,
        downvotes: 0,
        title: 'Hacinamiento en Prisión Preventiva',
        description: 'El 64.6% de la población carcelaria son detenidos en prisión preventiva, causando un hacinamiento sistémico del 157.6% y un desastre humanitario.',
        solution: {
          leader: 'Elon Musk & Margaret Thatcher',
          model: 'Corea del Sur / Alemania',
          description: 'Desplegar plataformas legales de IA generativa para eliminar los retrasos y desviar a los delincuentes preventivos/de bajo nivel hacia zonas industriales de educación dual dentro de las prisiones.',
          extendedDescription: `La implementación del modelo de Elon Musk & Margaret Thatcher requiere una reestructuración profunda. Desplegar plataformas legales de IA generativa para eliminar los retrasos y desviar a los delincuentes preventivos/de bajo nivel hacia zonas industriales de educación dual dentro de las prisiones. Esto implica un cambio radical en la forma en que abordamos el problema de "Hacinamiento en Prisión Preventiva", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Corea del Sur / Alemania (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Corea del Sur / Alemania.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 50 },
            { name: 'Año 2', value: 90 },
            { name: 'Año 3', value: 135 },
            { name: 'Año 4', value: 185 },
            { name: 'Año 5', value: 250 }
          ],
          imageUrl: 'https://picsum.photos/seed/justice-solution/800/400'
        }
      },
      {
        id: 'jus-2',
        upvotes: 0,
        downvotes: 0,
        title: 'Corrupción Judicial Endémica',
        description: 'La gran corrupción y la impunidad de las élites persisten, y el sistema legal a menudo opera como un escudo protector para la élite política y económica.',
        solution: {
          leader: 'Javier Milei',
          model: 'Modelo de Singapur',
          description: 'Implementar la remuneración meritocrática de Singapur. Aumentar masivamente los salarios judiciales financiados por activos incautados a los cárteles para neutralizar matemáticamente los incentivos de soborno.',
          extendedDescription: `La implementación del modelo de Javier Milei requiere una reestructuración profunda. Implementar la remuneración meritocrática de Singapur. Aumentar masivamente los salarios judiciales financiados por activos incautados a los cárteles para neutralizar matemáticamente los incentivos de soborno. Esto implica un cambio radical en la forma en que abordamos el problema de "Corrupción Judicial Endémica", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Modelo de Singapur (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Modelo de Singapur.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 60 },
            { name: 'Año 2', value: 105 },
            { name: 'Año 3', value: 155 },
            { name: 'Año 4', value: 210 },
            { name: 'Año 5', value: 280 }
          ],
          imageUrl: 'https://picsum.photos/seed/jus-2-solution/800/400'
        }
      },
      {
        id: 'jus-3',
        upvotes: 0,
        downvotes: 0,
        title: 'Brutalidad Policial y Falta de Rendición de Cuentas',
        description: 'Prevalencia de fuerza excesiva, ejecuciones extrajudiciales y extorsión por parte de las fuerzas policiales que operan con profunda impunidad.',
        solution: {
          leader: 'Nayib Bukele',
          model: 'Modelo de Dinamarca',
          description: 'Establecer una Autoridad Independiente de Quejas Policiales (IPCA) soberana y exigir cámaras corporales que se carguen inmutablemente en una nube blockchain.',
          extendedDescription: `La implementación del modelo de Nayib Bukele requiere una reestructuración profunda. Establecer una Autoridad Independiente de Quejas Policiales (IPCA) soberana y exigir cámaras corporales que se carguen inmutablemente en una nube blockchain. Esto implica un cambio radical en la forma en que abordamos el problema de "Brutalidad Policial y Falta de Rendición de Cuentas", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Modelo de Dinamarca (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Modelo de Dinamarca.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 20 },
            { name: 'Año 2', value: 45 },
            { name: 'Año 3', value: 75 },
            { name: 'Año 4', value: 110 },
            { name: 'Año 5', value: 160 }
          ],
          imageUrl: 'https://picsum.photos/seed/jus-3-solution/800/400'
        }
      },
      {
        id: 'jus-4',
        upvotes: 0,
        downvotes: 0,
        title: 'Lentitud Procesal y Burocracia',
        description: 'Los procesos judiciales toman años debido a la dependencia del papel, notificaciones manuales y procedimientos arcaicos.',
        solution: {
          leader: 'Kersti Kaljulaid',
          model: 'E-Justicia de Estonia',
          description: 'Digitalizar el 100% de los expedientes judiciales, implementar notificaciones electrónicas obligatorias y usar contratos inteligentes para la ejecución automática de sentencias civiles simples.',
          extendedDescription: `La implementación del modelo de Kersti Kaljulaid requiere una reestructuración profunda. Digitalizar el 100% de los expedientes judiciales, implementar notificaciones electrónicas obligatorias y usar contratos inteligentes para la ejecución automática de sentencias civiles simples. Esto implica un cambio radical en la forma en que abordamos el problema de "Lentitud Procesal y Burocracia", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de E-Justicia de Estonia (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de E-Justicia de Estonia.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 30 },
            { name: 'Año 2', value: 60 },
            { name: 'Año 3', value: 95 },
            { name: 'Año 4', value: 135 },
            { name: 'Año 5', value: 190 }
          ],
          imageUrl: 'https://picsum.photos/seed/jus-4-solution/800/400'
        }
      },
      {
        id: 'jus-5',
        upvotes: 0,
        downvotes: 0,
        title: 'Falta de Independencia del Ministerio Público',
        description: 'La influencia política en el nombramiento de fiscales compromete las investigaciones de corrupción de alto nivel.',
        solution: {
          leader: 'Lee Kuan Yew',
          model: 'Meritocracia Inamovible de Singapur',
          description: 'Modificar la constitución para crear un Consejo de la Magistratura verdaderamente independiente que nombre fiscales basados en exámenes ciegos, otorgándoles inamovilidad vitalicia.',
          extendedDescription: `La implementación del modelo de Lee Kuan Yew requiere una reestructuración profunda. Modificar la constitución para crear un Consejo de la Magistratura verdaderamente independiente que nombre fiscales basados en exámenes ciegos, otorgándoles inamovilidad vitalicia. Esto implica un cambio radical en la forma en que abordamos el problema de "Falta de Independencia del Ministerio Público", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Meritocracia Inamovible de Singapur (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Meritocracia Inamovible de Singapur.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 40 },
            { name: 'Año 2', value: 75 },
            { name: 'Año 3', value: 115 },
            { name: 'Año 4', value: 160 },
            { name: 'Año 5', value: 220 }
          ],
          imageUrl: 'https://picsum.photos/seed/jus-5-solution/800/400'
        }
      },
      {
        id: 'jus-6',
        upvotes: 0,
        downvotes: 0,
        title: 'Lack of Inter-Institutional Coordination',
        description: 'Falta de coordinación interinstitucional entre la Policía Nacional, Fiscales y Jueces.',
        solution: {
          leader: 'Experto en Sistemas de Justicia',
          model: 'Base de Datos Unificada',
          description: 'Desplegar una base de datos de justicia penal unificada accesible en tiempo real por la Policía Nacional, Fiscales y Jueces para rastrear casos sin problemas.',
          extendedDescription: 'Desplegar una base de datos de justicia penal unificada accesible en tiempo real por la Policía Nacional, Fiscales y Jueces para rastrear casos sin problemas. Esto mejorará la eficiencia y transparencia del sistema.',
          implementationSteps: ['Fase 1: Diseño de arquitectura de datos', 'Fase 2: Integración de sistemas existentes', 'Fase 3: Capacitación y despliegue nacional'],
          expectedOutcomes: ['Coordinación en tiempo real', 'Reducción de casos perdidos'],
          chartData: [{ name: 'Año 1', value: 10 }, { name: 'Año 2', value: 20 }, { name: 'Año 3', value: 30 }, { name: 'Año 4', value: 40 }, { name: 'Año 5', value: 50 }],
          imageUrl: 'https://picsum.photos/seed/jus-6-solution/800/400'
        }
      },
      {
        id: 'jus-7',
        upvotes: 0,
        downvotes: 0,
        title: 'Overwhelmed Public Defense System',
        description: 'Sistema de Defensa Pública abrumado y con falta de recursos.',
        solution: {
          leader: 'Defensor del Pueblo',
          model: 'Fortalecimiento de la Defensa Pública',
          description: 'Aumentar significativamente el presupuesto de la Oficina Nacional de Defensa Pública para contratar más defensores públicos y equilibrar la balanza frente a los fiscales estatales.',
          extendedDescription: 'Aumentar significativamente el presupuesto de la Oficina Nacional de Defensa Pública para contratar más defensores públicos y equilibrar la balanza frente a los fiscales estatales. Esto garantizará el derecho a una defensa justa para todos.',
          implementationSteps: ['Fase 1: Asignación presupuestaria', 'Fase 2: Contratación masiva de defensores', 'Fase 3: Mejora de condiciones laborales'],
          expectedOutcomes: ['Defensa justa garantizada', 'Reducción de condenas injustas'],
          chartData: [{ name: 'Año 1', value: 15 }, { name: 'Año 2', value: 25 }, { name: 'Año 3', value: 35 }, { name: 'Año 4', value: 45 }, { name: 'Año 5', value: 55 }],
          imageUrl: 'https://picsum.photos/seed/jus-7-solution/800/400'
        }
      },
      {
        id: 'jus-8',
        upvotes: 0,
        downvotes: 0,
        title: 'Underfunded Forensic Sciences',
        description: 'Ciencias forenses con fondos insuficientes, retrasando el procesamiento de pruebas.',
        solution: {
          leader: 'Director de INACIF',
          model: 'Modernización Forense Regional',
          description: 'Modernizar y expandir la capacidad del INACIF (Instituto Nacional de Ciencias Forenses) con laboratorios regionales descentralizados de alta tecnología para acelerar el procesamiento de pruebas.',
          extendedDescription: 'Modernizar y expandir la capacidad del INACIF (Instituto Nacional de Ciencias Forenses) con laboratorios regionales descentralizados de alta tecnología para acelerar el procesamiento de pruebas. Esto agilizará las investigaciones criminales.',
          implementationSteps: ['Fase 1: Auditoría de necesidades', 'Fase 2: Construcción de laboratorios regionales', 'Fase 3: Adquisición de tecnología avanzada'],
          expectedOutcomes: ['Pruebas procesadas rápidamente', 'Investigaciones ágiles'],
          chartData: [{ name: 'Año 1', value: 20 }, { name: 'Año 2', value: 30 }, { name: 'Año 3', value: 40 }, { name: 'Año 4', value: 50 }, { name: 'Año 5', value: 60 }],
          imageUrl: 'https://picsum.photos/seed/jus-8-solution/800/400'
        }
      },
      {
        id: 'jus-9',
        upvotes: 0,
        downvotes: 0,
        title: 'Incomplete Digital Transformation',
        description: 'Transformación digital incompleta en los tribunales, manteniendo la dependencia del papel.',
        solution: {
          leader: 'Presidente de la Suprema Corte',
          model: 'Tribunales Cero Papel',
          description: 'Hacer cumplir un mandato de "tribunal sin papel" expandiendo universalmente el sistema de expediente electrónico y las firmas digitales en todas las jurisdicciones.',
          extendedDescription: 'Hacer cumplir un mandato de "tribunal sin papel" expandiendo universalmente el sistema de expediente electrónico y las firmas digitales en todas las jurisdicciones. Esto modernizará y agilizará la justicia.',
          implementationSteps: ['Fase 1: Implementación de expediente electrónico', 'Fase 2: Adopción de firma digital', 'Fase 3: Prohibición de uso de papel'],
          expectedOutcomes: ['Justicia digitalizada', 'Procesos más rápidos'],
          chartData: [{ name: 'Año 1', value: 25 }, { name: 'Año 2', value: 35 }, { name: 'Año 3', value: 45 }, { name: 'Año 4', value: 55 }, { name: 'Año 5', value: 65 }],
          imageUrl: 'https://picsum.photos/seed/jus-9-solution/800/400'
        }
      },
      {
        id: 'jus-10',
        upvotes: 0,
        downvotes: 0,
        title: 'Politicization of Judicial Appointments',
        description: 'Politización de los nombramientos judiciales, comprometiendo la independencia de los jueces.',
        solution: {
          leader: 'Experto Constitucional',
          model: 'Reforma del CNM',
          description: 'Reformar la composición del Consejo Nacional de la Magistratura (CNM) para aumentar la proporción de jueces de carrera frente a los representantes políticos.',
          extendedDescription: 'Reformar la composición del Consejo Nacional de la Magistratura (CNM) para aumentar la proporción de jueces de carrera frente a los representantes políticos. Esto garantizará una justicia verdaderamente independiente.',
          implementationSteps: ['Fase 1: Propuesta de reforma constitucional', 'Fase 2: Debate y aprobación', 'Fase 3: Implementación de nueva composición'],
          expectedOutcomes: ['Independencia judicial', 'Jueces de carrera'],
          chartData: [{ name: 'Año 1', value: 30 }, { name: 'Año 2', value: 40 }, { name: 'Año 3', value: 50 }, { name: 'Año 4', value: 60 }, { name: 'Año 5', value: 70 }],
          imageUrl: 'https://picsum.photos/seed/jus-10-solution/800/400'
        }
      },
      {
        id: 'jus-11',
        upvotes: 0,
        downvotes: 0,
        title: 'Budgetary Non-Compliance',
        description: 'Incumplimiento presupuestario, privando al sector justicia de los fondos asignados por ley.',
        solution: {
          leader: 'Ministro de Hacienda',
          model: 'Desembolso Automático de Fondos',
          description: 'Hacer cumplir legalmente el desembolso automático del porcentaje constitucionalmente ordenado del presupuesto nacional asignado al sector de la justicia.',
          extendedDescription: 'Hacer cumplir legalmente el desembolso automático del porcentaje constitucionalmente ordenado del presupuesto nacional asignado al sector de la justicia. Esto garantizará la autonomía financiera del poder judicial.',
          implementationSteps: ['Fase 1: Auditoría de cumplimiento', 'Fase 2: Automatización de desembolsos', 'Fase 3: Sanciones por incumplimiento'],
          expectedOutcomes: ['Autonomía financiera', 'Recursos garantizados'],
          chartData: [{ name: 'Año 1', value: 35 }, { name: 'Año 2', value: 45 }, { name: 'Año 3', value: 55 }, { name: 'Año 4', value: 65 }, { name: 'Año 5', value: 75 }],
          imageUrl: 'https://picsum.photos/seed/jus-11-solution/800/400'
        }
      },
      {
        id: 'jus-12',
        upvotes: 0,
        downvotes: 0,
        title: 'Gender-Based Violence Bottlenecks',
        description: 'Cuellos de botella en el procesamiento de casos de violencia de género y abuso doméstico.',
        solution: {
          leader: 'Ministra de la Mujer',
          model: 'Tribunales Especializados 24/7',
          description: 'Establecer tribunales especializados 24/7, fiscales y refugios integrados dedicados exclusivamente a procesar casos de abuso doméstico y violencia de género.',
          extendedDescription: 'Establecer tribunales especializados 24/7, fiscales y refugios integrados dedicados exclusivamente a procesar casos de abuso doméstico y violencia de género. Esto brindará protección inmediata y justicia rápida a las víctimas.',
          implementationSteps: ['Fase 1: Creación de tribunales especializados', 'Fase 2: Contratación de personal capacitado', 'Fase 3: Construcción de refugios integrados'],
          expectedOutcomes: ['Protección a víctimas', 'Justicia rápida'],
          chartData: [{ name: 'Año 1', value: 40 }, { name: 'Año 2', value: 50 }, { name: 'Año 3', value: 60 }, { name: 'Año 4', value: 70 }, { name: 'Año 5', value: 80 }],
          imageUrl: 'https://picsum.photos/seed/jus-12-solution/800/400'
        }
      },
      {
        id: 'jus-13',
        upvotes: 0,
        downvotes: 0,
        title: 'Underutilization of Alternative Dispute Resolution',
        description: 'Subutilización de la resolución alternativa de disputas, saturando los tribunales con casos menores.',
        solution: {
          leader: 'Experto en Mediación',
          model: 'Mediación Obligatoria',
          description: 'Hacer que la mediación y conciliación profesional sea un primer paso obligatorio y subsidiado por el estado antes del litigio formal en disputas civiles, familiares y comerciales.',
          extendedDescription: 'Hacer que la mediación y conciliación profesional sea un primer paso obligatorio y subsidiado por el estado antes del litigio formal en disputas civiles, familiares y comerciales. Esto descongestionará los tribunales.',
          implementationSteps: ['Fase 1: Marco legal para mediación obligatoria', 'Fase 2: Capacitación de mediadores', 'Fase 3: Implementación en tribunales'],
          expectedOutcomes: ['Descongestión judicial', 'Resolución rápida de conflictos'],
          chartData: [{ name: 'Año 1', value: 45 }, { name: 'Año 2', value: 55 }, { name: 'Año 3', value: 65 }, { name: 'Año 4', value: 75 }, { name: 'Año 5', value: 85 }],
          imageUrl: 'https://picsum.photos/seed/jus-13-solution/800/400'
        }
      },
      {
        id: 'jus-14',
        upvotes: 0,
        downvotes: 0,
        title: 'Barriers to Access in Rural Areas',
        description: 'Barreras de acceso a la justicia en áreas rurales y provincias remotas.',
        solution: {
          leader: 'Director de Acceso a la Justicia',
          model: 'Juzgados de Paz Móviles',
          description: 'Expandir el despliegue de Juzgados de Paz Móviles y casas de justicia locales a provincias remotas para reducir el costo de acceso a la justicia.',
          extendedDescription: 'Expandir el despliegue de Juzgados de Paz Móviles y casas de justicia locales a provincias remotas para reducir el costo de acceso a la justicia. Esto garantizará que la justicia llegue a todos los rincones del país.',
          implementationSteps: ['Fase 1: Adquisición de unidades móviles', 'Fase 2: Contratación de personal itinerante', 'Fase 3: Despliegue en áreas remotas'],
          expectedOutcomes: ['Acceso universal a la justicia', 'Reducción de costos para ciudadanos'],
          chartData: [{ name: 'Año 1', value: 50 }, { name: 'Año 2', value: 60 }, { name: 'Año 3', value: 70 }, { name: 'Año 4', value: 80 }, { name: 'Año 5', value: 90 }],
          imageUrl: 'https://picsum.photos/seed/jus-14-solution/800/400'
        }
      },
      {
        id: 'jus-15',
        upvotes: 0,
        downvotes: 0,
        title: 'Notarial Fraud and Forgeries',
        description: 'Epidemia de fraude notarial y falsificación de títulos de propiedad y documentos legales.',
        solution: {
          leader: 'Colegio de Notarios',
          model: 'Registro Notarial Blockchain',
          description: 'Implementar un registro digital biométrico respaldado por blockchain para actos notariales para eliminar la epidemia de títulos de propiedad y documentos legales falsificados.',
          extendedDescription: 'Implementar un registro digital biométrico respaldado por blockchain para actos notariales para eliminar la epidemia de títulos de propiedad y documentos legales falsificados. Esto garantizará la seguridad jurídica.',
          implementationSteps: ['Fase 1: Diseño de la plataforma blockchain', 'Fase 2: Registro biométrico de notarios', 'Fase 3: Implementación obligatoria'],
          expectedOutcomes: ['Cero fraude notarial', 'Seguridad jurídica'],
          chartData: [{ name: 'Año 1', value: 55 }, { name: 'Año 2', value: 65 }, { name: 'Año 3', value: 75 }, { name: 'Año 4', value: 85 }, { name: 'Año 5', value: 95 }],
          imageUrl: 'https://picsum.photos/seed/jus-15-solution/800/400'
        }
      },
      {
        id: 'jus-16',
        upvotes: 0,
        downvotes: 0,
        title: 'Inefficient Enforcement of Judgments',
        description: 'Ejecución ineficiente de sentencias civiles, comerciales y laborales.',
        solution: {
          leader: 'Director de la Fuerza Pública',
          model: 'Fuerza Pública Especializada',
          description: 'Crear fuerzas de tarea de alguaciles especializados y respaldados por el estado (Fuerza Pública) para garantizar la rápida ejecución de fallos civiles, comerciales y laborales.',
          extendedDescription: 'Crear fuerzas de tarea de alguaciles especializados y respaldados por el estado (Fuerza Pública) para garantizar la rápida ejecución de fallos civiles, comerciales y laborales. Esto asegurará que las sentencias se cumplan.',
          implementationSteps: ['Fase 1: Creación de la Fuerza Pública', 'Fase 2: Capacitación especializada', 'Fase 3: Despliegue operativo'],
          expectedOutcomes: ['Ejecución rápida de sentencias', 'Cumplimiento de la ley'],
          chartData: [{ name: 'Año 1', value: 60 }, { name: 'Año 2', value: 70 }, { name: 'Año 3', value: 80 }, { name: 'Año 4', value: 90 }, { name: 'Año 5', value: 100 }],
          imageUrl: 'https://picsum.photos/seed/jus-16-solution/800/400'
        }
      },
      {
        id: 'jus-17',
        upvotes: 0,
        downvotes: 0,
        title: 'Juvenile Justice Deficiencies',
        description: 'Deficiencias en la justicia de menores, con un enfoque punitivo en lugar de rehabilitador.',
        solution: {
          leader: 'Experto en Justicia Juvenil',
          model: 'Justicia Restaurativa Juvenil',
          description: 'Cambiar el enfoque de los tribunales de menores estrictamente hacia la justicia restaurativa, reemplazando el confinamiento tradicional con programas socioeducativos y psicológicos modernos.',
          extendedDescription: 'Cambiar el enfoque de los tribunales de menores estrictamente hacia la justicia restaurativa, reemplazando el confinamiento tradicional con programas socioeducativos y psicológicos modernos. Esto reducirá la reincidencia juvenil.',
          implementationSteps: ['Fase 1: Reforma legal', 'Fase 2: Creación de centros socioeducativos', 'Fase 3: Implementación de programas de rehabilitación'],
          expectedOutcomes: ['Rehabilitación juvenil', 'Reducción de reincidencia'],
          chartData: [{ name: 'Año 1', value: 65 }, { name: 'Año 2', value: 75 }, { name: 'Año 3', value: 85 }, { name: 'Año 4', value: 95 }, { name: 'Año 5', value: 105 }],
          imageUrl: 'https://picsum.photos/seed/jus-17-solution/800/400'
        }
      },
      {
        id: 'jus-18',
        upvotes: 0,
        downvotes: 0,
        title: 'Inadequate Language Services',
        description: 'Servicios de idiomas inadecuados en los tribunales, afectando el derecho a un juicio justo.',
        solution: {
          leader: 'Director de Servicios Judiciales',
          model: 'Intérpretes Certificados',
          description: 'Contratar y desplegar intérpretes certificados a tiempo completo (especialmente para criollo haitiano y lenguaje de señas) en los tribunales urbanos y fronterizos más concurridos.',
          extendedDescription: 'Contratar y desplegar intérpretes certificados a tiempo completo (especialmente para criollo haitiano y lenguaje de señas) en los tribunales urbanos y fronterizos más concurridos. Esto garantizará el acceso a la justicia para todos.',
          implementationSteps: ['Fase 1: Identificación de necesidades lingüísticas', 'Fase 2: Contratación de intérpretes', 'Fase 3: Despliegue en tribunales clave'],
          expectedOutcomes: ['Juicios justos', 'Inclusión lingüística'],
          chartData: [{ name: 'Año 1', value: 70 }, { name: 'Año 2', value: 80 }, { name: 'Año 3', value: 90 }, { name: 'Año 4', value: 100 }, { name: 'Año 5', value: 110 }],
          imageUrl: 'https://picsum.photos/seed/jus-18-solution/800/400'
        }
      },
      {
        id: 'jus-19',
        upvotes: 0,
        downvotes: 0,
        title: 'Slow Commercial Dispute Resolution',
        description: 'Resolución lenta de disputas comerciales, afectando la inversión extranjera y los negocios.',
        solution: {
          leader: 'Cámara de Comercio',
          model: 'Tribunales Comerciales Especializados',
          description: 'Expandir los tribunales comerciales especializados en los principales centros económicos (Santo Domingo, Santiago, Punta Cana) para proteger la inversión extranjera y acelerar las disputas comerciales.',
          extendedDescription: 'Expandir los tribunales comerciales especializados en los principales centros económicos (Santo Domingo, Santiago, Punta Cana) para proteger la inversión extranjera y acelerar las disputas comerciales. Esto mejorará el clima de negocios.',
          implementationSteps: ['Fase 1: Creación de nuevos tribunales comerciales', 'Fase 2: Capacitación de jueces especializados', 'Fase 3: Implementación de procedimientos rápidos'],
          expectedOutcomes: ['Resolución rápida de disputas', 'Aumento de inversión extranjera'],
          chartData: [{ name: 'Año 1', value: 75 }, { name: 'Año 2', value: 85 }, { name: 'Año 3', value: 95 }, { name: 'Año 4', value: 105 }, { name: 'Año 5', value: 115 }],
          imageUrl: 'https://picsum.photos/seed/jus-19-solution/800/400'
        }
      },
      {
        id: 'jus-20',
        upvotes: 0,
        downvotes: 0,
        title: 'Inefficient In-Flagrante Processing',
        description: 'Procesamiento ineficiente de delitos flagrantes, saturando el sistema con casos menores.',
        solution: {
          leader: 'Procurador General',
          model: 'Tribunales de Vía Rápida',
          description: 'Establecer tribunales especializados de vía rápida diseñados específicamente para procesar inmediatamente los delitos callejeros comunes atrapados en el acto (delitos flagrantes).',
          extendedDescription: 'Establecer tribunales especializados de vía rápida diseñados específicamente para procesar inmediatamente los delitos callejeros comunes atrapados en el acto (delitos flagrantes). Esto agilizará la justicia para delitos menores.',
          implementationSteps: ['Fase 1: Diseño de procedimientos de vía rápida', 'Fase 2: Creación de tribunales especializados', 'Fase 3: Implementación operativa'],
          expectedOutcomes: ['Procesamiento inmediato', 'Descongestión del sistema'],
          chartData: [{ name: 'Año 1', value: 80 }, { name: 'Año 2', value: 90 }, { name: 'Año 3', value: 100 }, { name: 'Año 4', value: 110 }, { name: 'Año 5', value: 120 }],
          imageUrl: 'https://picsum.photos/seed/jus-20-solution/800/400'
        }
      },
      {
        id: 'jus-21',
        upvotes: 0,
        downvotes: 0,
        title: 'Inconsistent Continuing Education',
        description: 'Educación continua inconsistente para los jueces, afectando la calidad de las sentencias.',
        solution: {
          leader: 'Director de la ENJ',
          model: 'Recertificación Obligatoria',
          description: 'Exigir una recertificación rigurosa y continua para todos los jueces en ejercicio a través de la Escuela Nacional de la Judicatura (ENJ), centrándose en el derecho digital y los derechos humanos.',
          extendedDescription: 'Exigir una recertificación rigurosa y continua para todos los jueces en ejercicio a través de la Escuela Nacional de la Judicatura (ENJ), centrándose en el derecho digital y los derechos humanos. Esto garantizará la actualización constante de los magistrados.',
          implementationSteps: ['Fase 1: Diseño del programa de recertificación', 'Fase 2: Implementación obligatoria', 'Fase 3: Evaluación continua'],
          expectedOutcomes: ['Jueces actualizados', 'Mejora en la calidad de la justicia'],
          chartData: [{ name: 'Año 1', value: 85 }, { name: 'Año 2', value: 95 }, { name: 'Año 3', value: 105 }, { name: 'Año 4', value: 115 }, { name: 'Año 5', value: 125 }],
          imageUrl: 'https://picsum.photos/seed/jus-21-solution/800/400'
        }
      }
    ]
  },
  {
    id: 'agriculture',
    title: 'Agricultura',
    icon: Leaf,
    overview: 'El "Protocolo de Renacimiento Agrario" para modernizar la agricultura de subsistencia de baja tecnología en un marco resiliente, altamente productivo y globalmente competitivo.',
    megaproject: {
      title: 'Corredor Nacional de Hidroponía de Precisión y Cadena de Frío',
      description: 'La transformación de la agricultura de subsistencia a la agroindustria de precisión. El financiamiento estatal masivo (modelo holandés) para sustituir el riego tradicional por invernaderos de clima controlado e irrigación por goteo impulsada por IA. Esto se conectará a una nueva red nacional de centros logísticos de almacenamiento en frío alimentados por energía solar, reduciendo a cero la pérdida de cosechas por pudrición y permitiendo la exportación constante a mercados internacionales.'
        ,
      timeline: [
        { phase: '2026-2027', description: 'Fase inicial de planificación, auditoría y diseño arquitectónico.' },
        { phase: '2028-2029', description: 'Despliegue de infraestructura base y programas piloto en zonas clave.' },
        { phase: '2030+', description: 'Expansión a nivel nacional, optimización continua y evaluación de impacto.' }
      ],
      partners: ['Banco Interamericano de Desarrollo (BID)', 'Ministerio de Economía, Planificación y Desarrollo', 'Sector Privado Local', 'ONGs Internacionales', 'Agencias de Cooperación (USAID, JICA)']
    },
    problems: [
      {
        id: 'agr-1',
        upvotes: 0,
        downvotes: 0,
        title: 'Ineficiencia Catastrófica del Riego',
        description: 'Actualmente opera a una tasa de eficiencia de apenas el 20%, desperdiciando cantidades masivas de agua y aumentando la vulnerabilidad a las sequías inducidas por el clima.',
        solution: {
          leader: 'Ronald Reagan',
          model: 'Tecnología Agrícola de los Países Bajos',
          description: 'Desplegar sensores de suelo IoT holandeses y sistemas de riego por goteo de precisión basados en datos para reducir drásticamente el desperdicio de agua.',
          extendedDescription: `La implementación del modelo de Ronald Reagan requiere una reestructuración profunda. Desplegar sensores de suelo IoT holandeses y sistemas de riego por goteo de precisión basados en datos para reducir drásticamente el desperdicio de agua. Esto implica un cambio radical en la forma en que abordamos el problema de "Ineficiencia Catastrófica del Riego", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Tecnología Agrícola de los Países Bajos (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Tecnología Agrícola de los Países Bajos.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 50 },
            { name: 'Año 2', value: 90 },
            { name: 'Año 3', value: 135 },
            { name: 'Año 4', value: 185 },
            { name: 'Año 5', value: 250 }
          ],
          imageUrl: 'https://picsum.photos/seed/agriculture-solution/800/400'
        }
      },
      {
        id: 'agr-2',
        upvotes: 0,
        downvotes: 0,
        title: 'Brechas Severas de Productividad y Rendimiento',
        description: 'Brechas masivas de rendimiento (por ejemplo, 83% en cacao) en comparación con los líderes regionales debido a la falta de adopción tecnológica.',
        solution: {
          leader: 'Elon Musk',
          model: 'Corea del Sur Digital',
          description: 'El Protocolo de IA "NEXT Farm". Desplegar drones autónomos y modelos predictivos de IA para dictar tiempos óptimos de siembra y fertilización.',
          extendedDescription: `La implementación del modelo de Elon Musk requiere una reestructuración profunda. El Protocolo de IA "NEXT Farm". Desplegar drones autónomos y modelos predictivos de IA para dictar tiempos óptimos de siembra y fertilización. Esto implica un cambio radical en la forma en que abordamos el problema de "Brechas Severas de Productividad y Rendimiento", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Corea del Sur Digital (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Corea del Sur Digital.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 60 },
            { name: 'Año 2', value: 105 },
            { name: 'Año 3', value: 155 },
            { name: 'Año 4', value: 210 },
            { name: 'Año 5', value: 280 }
          ],
          imageUrl: 'https://picsum.photos/seed/agr-2-solution/800/400'
        }
      },
      {
        id: 'agr-3',
        upvotes: 0,
        downvotes: 0,
        title: 'Tenencia de la Tierra Opaca',
        description: 'La falta generalizada de títulos de propiedad claros y los registros de propiedad fraudulentos frenan la inversión agrícola nacional y extranjera.',
        solution: {
          leader: 'Nayib Bukele',
          model: 'Transparencia de Dinamarca',
          description: 'Erradicar el fraude de tierras trasladando el registro nacional de la propiedad a un libro mayor catastral blockchain inmutable.',
          extendedDescription: `La implementación del modelo de Nayib Bukele requiere una reestructuración profunda. Erradicar el fraude de tierras trasladando el registro nacional de la propiedad a un libro mayor catastral blockchain inmutable. Esto implica un cambio radical en la forma en que abordamos el problema de "Tenencia de la Tierra Opaca", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Transparencia de Dinamarca (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Transparencia de Dinamarca.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 20 },
            { name: 'Año 2', value: 45 },
            { name: 'Año 3', value: 75 },
            { name: 'Año 4', value: 110 },
            { name: 'Año 5', value: 160 }
          ],
          imageUrl: 'https://picsum.photos/seed/agr-3-solution/800/400'
        }
      },
      {
        id: 'agr-4',
        upvotes: 0,
        downvotes: 0,
        title: 'Intermediación Abusiva y Márgenes Injustos',
        description: 'Una red de intermediarios monopoliza la cadena de suministro, pagando precios miserables a los agricultores y cobrando precios altos a los consumidores.',
        solution: {
          leader: 'Narendra Modi',
          model: 'Plataformas e-NAM de India',
          description: 'Crear un mercado nacional digital (Agri-Bolsa) que conecte directamente a los agricultores con supermercados y exportadores, eliminando intermediarios depredadores.',
          extendedDescription: `La implementación del modelo de Narendra Modi requiere una reestructuración profunda. Crear un mercado nacional digital (Agri-Bolsa) que conecte directamente a los agricultores con supermercados y exportadores, eliminando intermediarios depredadores. Esto implica un cambio radical en la forma en que abordamos el problema de "Intermediación Abusiva y Márgenes Injustos", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Plataformas e-NAM de India (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Plataformas e-NAM de India.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 30 },
            { name: 'Año 2', value: 60 },
            { name: 'Año 3', value: 95 },
            { name: 'Año 4', value: 135 },
            { name: 'Año 5', value: 190 }
          ],
          imageUrl: 'https://picsum.photos/seed/agr-4-solution/800/400'
        }
      },
      {
        id: 'agr-5',
        upvotes: 0,
        downvotes: 0,
        title: 'Vulnerabilidad a Plagas y Cambio Climático',
        description: 'Pérdidas masivas de cultivos anuales debido a huracanes, sequías y plagas invasivas no controladas.',
        solution: {
          leader: 'Benjamin Netanyahu',
          model: 'Agrotecnología de Israel',
          description: 'Subsidiar masivamente la transición hacia la agricultura de ambiente controlado (invernaderos inteligentes) y la adopción de semillas genéticamente adaptadas a la sequía.',
          extendedDescription: `La implementación del modelo de Benjamin Netanyahu requiere una reestructuración profunda. Subsidiar masivamente la transición hacia la agricultura de ambiente controlado (invernaderos inteligentes) y la adopción de semillas genéticamente adaptadas a la sequía. Esto implica un cambio radical en la forma en que abordamos el problema de "Vulnerabilidad a Plagas y Cambio Climático", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Agrotecnología de Israel (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Agrotecnología de Israel.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 40 },
            { name: 'Año 2', value: 75 },
            { name: 'Año 3', value: 115 },
            { name: 'Año 4', value: 160 },
            { name: 'Año 5', value: 220 }
          ],
          imageUrl: 'https://picsum.photos/seed/agr-5-solution/800/400'
        }
      },
      {
        id: 'agr-6',
        upvotes: 0,
        downvotes: 0,
        title: 'Pérdidas Postcosecha por Falta de Cadena de Frío',
        description: 'Pérdidas severas postcosecha (hasta un 30%) debido a la falta de infraestructura de cadena de frío.',
        solution: {
          leader: 'Modelo Público-Privado',
          model: 'Red Nacional de Almacenamiento en Frío Solar',
          description: 'Construir una red nacional de centros regionales de almacenamiento en frío alimentados por energía solar fuera de la red, gestionados estrictamente bajo alianzas público-privadas.',
          extendedDescription: `La implementación del modelo de Modelo Público-Privado requiere una reestructuración profunda. Construir una red nacional de centros regionales de almacenamiento en frío alimentados por energía solar fuera de la red, gestionados estrictamente bajo alianzas público-privadas. Esto implica un cambio radical en la forma en que abordamos el problema de "Pérdidas Postcosecha por Falta de Cadena de Frío", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Red Nacional de Almacenamiento en Frío Solar (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Red Nacional de Almacenamiento en Frío Solar.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 50 },
            { name: 'Año 2', value: 90 },
            { name: 'Año 3', value: 135 },
            { name: 'Año 4', value: 185 },
            { name: 'Año 5', value: 250 }
          ],
          imageUrl: 'https://picsum.photos/seed/agr-6-solution/800/400'
        }
      },
      {
        id: 'agr-7',
        upvotes: 0,
        downvotes: 0,
        title: 'Falta de Acceso a Crédito Formal',
        description: 'Falta de acceso a crédito formal, lo que obliga a los pequeños agricultores a depender de prestamistas informales usureros.',
        solution: {
          leader: 'Nandan Nilekani',
          model: 'Micropréstamos Respaldados por IA y Satélites',
          description: 'Utilizar imágenes satelitales y algoritmos de predicción de rendimiento de cultivos por IA para suscribir automáticamente micropréstamos de bajo interés respaldados por el estado.',
          extendedDescription: `La implementación del modelo de Nandan Nilekani requiere una reestructuración profunda. Utilizar imágenes satelitales y algoritmos de predicción de rendimiento de cultivos por IA para suscribir automáticamente micropréstamos de bajo interés respaldados por el estado. Esto implica un cambio radical en la forma en que abordamos el problema de "Falta de Acceso a Crédito Formal", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Micropréstamos Respaldados por IA y Satélites (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Micropréstamos Respaldados por IA y Satélites.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 60 },
            { name: 'Año 2', value: 105 },
            { name: 'Año 3', value: 155 },
            { name: 'Año 4', value: 210 },
            { name: 'Año 5', value: 280 }
          ],
          imageUrl: 'https://picsum.photos/seed/agr-7-solution/800/400'
        }
      },
      {
        id: 'agr-8',
        upvotes: 0,
        downvotes: 0,
        title: 'Problemas Fitosanitarios y Prohibiciones de Exportación',
        description: 'Problemas fitosanitarios recurrentes y prohibiciones de exportación debido a plagas (ej. mosca del Mediterráneo).',
        solution: {
          leader: 'Jacinda Ardern',
          model: 'Zonas de Bioseguridad y Enjambres de Drones',
          description: 'Establecer zonas de bioseguridad estrictamente aplicadas y desplegar enjambres de drones automatizados con cámaras multiespectrales para la detección temprana de plagas y enfermedades.',
          extendedDescription: `La implementación del modelo de Jacinda Ardern requiere una reestructuración profunda. Establecer zonas de bioseguridad estrictamente aplicadas y desplegar enjambres de drones automatizados con cámaras multiespectrales para la detección temprana de plagas y enfermedades. Esto implica un cambio radical en la forma en que abordamos el problema de "Problemas Fitosanitarios y Prohibiciones de Exportación", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Zonas de Bioseguridad y Enjambres de Drones (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Zonas de Bioseguridad y Enjambres de Drones.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 20 },
            { name: 'Año 2', value: 45 },
            { name: 'Año 3', value: 75 },
            { name: 'Año 4', value: 110 },
            { name: 'Año 5', value: 160 }
          ],
          imageUrl: 'https://picsum.photos/seed/agr-8-solution/800/400'
        }
      },
      {
        id: 'agr-9',
        upvotes: 0,
        downvotes: 0,
        title: 'Caminos Vecinales Intransitables',
        description: 'Caminos rurales intransitables que provocan el deterioro de los cultivos durante el transporte a los mercados.',
        solution: {
          leader: 'Paul Kagame',
          model: 'Mantenimiento Vial por el Cuerpo de Ingenieros',
          description: 'Desplegar el cuerpo de ingenieros de las Fuerzas Armadas con un presupuesto soberano dedicado para pavimentar, nivelar y mantener permanentemente todas las arterias agrícolas críticas.',
          extendedDescription: `La implementación del modelo de Paul Kagame requiere una reestructuración profunda. Desplegar el cuerpo de ingenieros de las Fuerzas Armadas con un presupuesto soberano dedicado para pavimentar, nivelar y mantener permanentemente todas las arterias agrícolas críticas. Esto implica un cambio radical en la forma en que abordamos el problema de "Caminos Vecinales Intransitables", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Mantenimiento Vial por el Cuerpo de Ingenieros (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Mantenimiento Vial por el Cuerpo de Ingenieros.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 30 },
            { name: 'Año 2', value: 60 },
            { name: 'Año 3', value: 95 },
            { name: 'Año 4', value: 135 },
            { name: 'Año 5', value: 190 }
          ],
          imageUrl: 'https://picsum.photos/seed/agr-9-solution/800/400'
        }
      },
      {
        id: 'agr-10',
        upvotes: 0,
        downvotes: 0,
        title: 'Envejecimiento Demográfico Agrícola',
        description: 'Una demografía de agricultores que envejece sin prácticamente ninguna sucesión juvenil en el sector.',
        solution: {
          leader: 'Emmanuel Macron',
          model: 'Zonas Agrotecnológicas Libres de Impuestos',
          description: 'Crear "Zonas Agrotecnológicas" libres de impuestos que ofrezcan fuertes subsidios, subvenciones para robótica y licencias de operador de drones exclusivamente a emprendedores agrícolas menores de 30 años.',
          extendedDescription: `La implementación del modelo de Emmanuel Macron requiere una reestructuración profunda. Crear "Zonas Agrotecnológicas" libres de impuestos que ofrezcan fuertes subsidios, subvenciones para robótica y licencias de operador de drones exclusivamente a emprendedores agrícolas menores de 30 años. Esto implica un cambio radical en la forma en que abordamos el problema de "Envejecimiento Demográfico Agrícola", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Zonas Agrotecnológicas Libres de Impuestos (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Zonas Agrotecnológicas Libres de Impuestos.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 40 },
            { name: 'Año 2', value: 75 },
            { name: 'Año 3', value: 115 },
            { name: 'Año 4', value: 160 },
            { name: 'Año 5', value: 220 }
          ],
          imageUrl: 'https://picsum.photos/seed/agr-10-solution/800/400'
        }
      },
      {
        id: 'agr-11',
        upvotes: 0,
        downvotes: 0,
        title: 'Vulnerabilidad Financiera ante Huracanes e Inundaciones',
        description: 'Alta vulnerabilidad a huracanes e inundaciones que arrasan con las cosechas estacionales.',
        solution: {
          leader: 'Modelo Africano (ACRM)',
          model: 'Seguro Paramétrico Automático',
          description: 'Implementar un seguro de cultivos paramétrico automático que transfiera fondos instantáneamente a la billetera digital de un agricultor, activado por datos meteorológicos satelitales verificados.',
          extendedDescription: `La implementación del modelo de Modelo Africano (ACRM) requiere una reestructuración profunda. Implementar un seguro de cultivos paramétrico automático que transfiera fondos instantáneamente a la billetera digital de un agricultor, activado por datos meteorológicos satelitales verificados. Esto implica un cambio radical en la forma en que abordamos el problema de "Vulnerabilidad Financiera ante Huracanes e Inundaciones", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Seguro Paramétrico Automático (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Seguro Paramétrico Automático.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 50 },
            { name: 'Año 2', value: 90 },
            { name: 'Año 3', value: 135 },
            { name: 'Año 4', value: 185 },
            { name: 'Año 5', value: 250 }
          ],
          imageUrl: 'https://picsum.photos/seed/agr-11-solution/800/400'
        }
      },
      {
        id: 'agr-12',
        upvotes: 0,
        downvotes: 0,
        title: 'Degradación Severa del Suelo',
        description: 'Degradación severa del suelo y pérdida de tierra cultivable debido a malas prácticas agrícolas.',
        solution: {
          leader: 'Carlos Alvarado Quesada',
          model: 'Subsidios Condicionados a Agricultura Regenerativa',
          description: 'Vincular la recepción de todos los subsidios agrícolas estatales estrictamente a la adopción verificada de agricultura regenerativa, cultivos de cobertura y prácticas de labranza cero.',
          extendedDescription: `La implementación del modelo de Carlos Alvarado Quesada requiere una reestructuración profunda. Vincular la recepción de todos los subsidios agrícolas estatales estrictamente a la adopción verificada de agricultura regenerativa, cultivos de cobertura y prácticas de labranza cero. Esto implica un cambio radical en la forma en que abordamos el problema de "Degradación Severa del Suelo", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Subsidios Condicionados a Agricultura Regenerativa (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Subsidios Condicionados a Agricultura Regenerativa.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 60 },
            { name: 'Año 2', value: 105 },
            { name: 'Año 3', value: 155 },
            { name: 'Año 4', value: 210 },
            { name: 'Año 5', value: 280 }
          ],
          imageUrl: 'https://picsum.photos/seed/agr-12-solution/800/400'
        }
      },
      {
        id: 'agr-13',
        upvotes: 0,
        downvotes: 0,
        title: 'Uso Excesivo de Agroquímicos Importados',
        description: 'Uso excesivo de agroquímicos importados, costosos y ecológicamente dañinos.',
        solution: {
          leader: 'Xi Jinping',
          model: 'Drones de Precisión y Fertilizantes Orgánicos',
          description: 'Subsidiar drones agrícolas de precisión para micropulverización dirigida (reduciendo el volumen químico en un 80%) y financiar agresivamente la producción nacional de fertilizantes orgánicos.',
          extendedDescription: `La implementación del modelo de Xi Jinping requiere una reestructuración profunda. Subsidiar drones agrícolas de precisión para micropulverización dirigida (reduciendo el volumen químico en un 80%) y financiar agresivamente la producción nacional de fertilizantes orgánicos. Esto implica un cambio radical en la forma en que abordamos el problema de "Uso Excesivo de Agroquímicos Importados", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Drones de Precisión y Fertilizantes Orgánicos (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Drones de Precisión y Fertilizantes Orgánicos.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 20 },
            { name: 'Año 2', value: 45 },
            { name: 'Año 3', value: 75 },
            { name: 'Año 4', value: 110 },
            { name: 'Año 5', value: 160 }
          ],
          imageUrl: 'https://picsum.photos/seed/agr-13-solution/800/400'
        }
      },
      {
        id: 'agr-14',
        upvotes: 0,
        downvotes: 0,
        title: 'Servicios de Extensión Agrícola Deficientes',
        description: 'Servicios de extensión estatales débiles y desfinanciados que no brindan asistencia técnica a los agricultores rurales.',
        solution: {
          leader: 'Sam Altman',
          model: 'Agrónomo de IA Offline',
          description: 'Lanzar un Agrónomo de IA localizado y con capacidad offline en tabletas resistentes para proporcionar asesoramiento de diagnóstico instantáneo y en tiempo real para la salud del suelo y los cultivos.',
          extendedDescription: `La implementación del modelo de Sam Altman requiere una reestructuración profunda. Lanzar un Agrónomo de IA localizado y con capacidad offline en tabletas resistentes para proporcionar asesoramiento de diagnóstico instantáneo y en tiempo real para la salud del suelo y los cultivos. Esto implica un cambio radical en la forma en que abordamos el problema de "Servicios de Extensión Agrícola Deficientes", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Agrónomo de IA Offline (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Agrónomo de IA Offline.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 30 },
            { name: 'Año 2', value: 60 },
            { name: 'Año 3', value: 95 },
            { name: 'Año 4', value: 135 },
            { name: 'Año 5', value: 190 }
          ],
          imageUrl: 'https://picsum.photos/seed/agr-14-solution/800/400'
        }
      },
      {
        id: 'agr-15',
        upvotes: 0,
        downvotes: 0,
        title: 'Exportación de Materias Primas sin Valor Agregado',
        description: 'Exportación de materias primas crudas en lugar de productos procesados de alto valor agregado y rentabilidad.',
        solution: {
          leader: 'Lee Kuan Yew',
          model: 'Corredores Agroindustriales de Cero Impuestos',
          description: 'Establecer corredores de procesamiento agroindustrial con cero impuestos directamente adyacentes a las principales regiones de cultivo para incentivar el procesamiento y envasado local inmediato.',
          extendedDescription: `La implementación del modelo de Lee Kuan Yew requiere una reestructuración profunda. Establecer corredores de procesamiento agroindustrial con cero impuestos directamente adyacentes a las principales regiones de cultivo para incentivar el procesamiento y envasado local inmediato. Esto implica un cambio radical en la forma en que abordamos el problema de "Exportación de Materias Primas sin Valor Agregado", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Corredores Agroindustriales de Cero Impuestos (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Corredores Agroindustriales de Cero Impuestos.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 40 },
            { name: 'Año 2', value: 75 },
            { name: 'Año 3', value: 115 },
            { name: 'Año 4', value: 160 },
            { name: 'Año 5', value: 220 }
          ],
          imageUrl: 'https://picsum.photos/seed/agr-15-solution/800/400'
        }
      },
      {
        id: 'agr-16',
        upvotes: 0,
        downvotes: 0,
        title: 'Brotes Devastadores de Enfermedades Invasivas',
        description: 'Brotes devastadores de enfermedades invasivas de ganado y plantas (ej. Peste Porcina Africana, Huanglongbing de los cítricos).',
        solution: {
          leader: 'Modelo Australiano',
          model: 'Protocolo de Biodefensa CRISPR',
          description: 'Financiar un protocolo de biodefensa de respuesta rápida utilizando técnicas de insectos estériles CRISPR y compensación digital inmediata por sacrificios preventivos obligatorios.',
          extendedDescription: `La implementación del modelo de Modelo Australiano requiere una reestructuración profunda. Financiar un protocolo de biodefensa de respuesta rápida utilizando técnicas de insectos estériles CRISPR y compensación digital inmediata por sacrificios preventivos obligatorios. Esto implica un cambio radical en la forma en que abordamos el problema de "Brotes Devastadores de Enfermedades Invasivas", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Protocolo de Biodefensa CRISPR (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Protocolo de Biodefensa CRISPR.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 50 },
            { name: 'Año 2', value: 90 },
            { name: 'Año 3', value: 135 },
            { name: 'Año 4', value: 185 },
            { name: 'Año 5', value: 250 }
          ],
          imageUrl: 'https://picsum.photos/seed/agr-16-solution/800/400'
        }
      },
      {
        id: 'agr-17',
        upvotes: 0,
        downvotes: 0,
        title: 'Alta Dependencia de Semillas Importadas',
        description: 'Fuerte dependencia de semillas importadas y costosas que no están optimizadas para los microclimas locales.',
        solution: {
          leader: 'Norman Borlaug',
          model: 'Instituto Nacional de Biotecnología',
          description: 'Financiar un instituto nacional de biotecnología para diseñar y distribuir variedades de semillas de código abierto, resistentes a la sequía y resilientes al clima, específicas para el suelo dominicano.',
          extendedDescription: `La implementación del modelo de Norman Borlaug requiere una reestructuración profunda. Financiar un instituto nacional de biotecnología para diseñar y distribuir variedades de semillas de código abierto, resistentes a la sequía y resilientes al clima, específicas para el suelo dominicano. Esto implica un cambio radical en la forma en que abordamos el problema de "Alta Dependencia de Semillas Importadas", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Instituto Nacional de Biotecnología (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Instituto Nacional de Biotecnología.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 60 },
            { name: 'Año 2', value: 105 },
            { name: 'Año 3', value: 155 },
            { name: 'Año 4', value: 210 },
            { name: 'Año 5', value: 280 }
          ],
          imageUrl: 'https://picsum.photos/seed/agr-17-solution/800/400'
        }
      },
      {
        id: 'agr-18',
        upvotes: 0,
        downvotes: 0,
        title: 'Comercio Agrícola Transfronterizo Informal',
        description: 'Comercio agrícola transfronterizo y contrabando informal no regulado.',
        solution: {
          leader: 'Nayib Bukele',
          model: 'Corredores Comerciales Biométricos',
          description: 'Establecer corredores comerciales agrícolas biométricos y seguros monitoreados por torres de vigilancia autónomas para regular, gravar y desinfectar el comercio transfronterizo.',
          extendedDescription: `La implementación del modelo de Nayib Bukele requiere una reestructuración profunda. Establecer corredores comerciales agrícolas biométricos y seguros monitoreados por torres de vigilancia autónomas para regular, gravar y desinfectar el comercio transfronterizo. Esto implica un cambio radical en la forma en que abordamos el problema de "Comercio Agrícola Transfronterizo Informal", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Corredores Comerciales Biométricos (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Corredores Comerciales Biométricos.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 20 },
            { name: 'Año 2', value: 45 },
            { name: 'Año 3', value: 75 },
            { name: 'Año 4', value: 110 },
            { name: 'Año 5', value: 160 }
          ],
          imageUrl: 'https://picsum.photos/seed/agr-18-solution/800/400'
        }
      },
      {
        id: 'agr-19',
        upvotes: 0,
        downvotes: 0,
        title: 'Baja Productividad Ganadera y Cuatrereísmo',
        description: 'Baja productividad del ganado y robo desenfrenado de ganado (cuatrereísmo).',
        solution: {
          leader: 'Modelo Uruguayo',
          model: 'Trazabilidad Digital Biométrica y RFID',
          description: 'Implementar el seguimiento digital biométrico y RFID obligatorio para todo el ganado comercial para optimizar la cría genética, rastrear vacunas y marcar instantáneamente animales robados.',
          extendedDescription: `La implementación del modelo de Modelo Uruguayo requiere una reestructuración profunda. Implementar el seguimiento digital biométrico y RFID obligatorio para todo el ganado comercial para optimizar la cría genética, rastrear vacunas y marcar instantáneamente animales robados. Esto implica un cambio radical en la forma en que abordamos el problema de "Baja Productividad Ganadera y Cuatrereísmo", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Trazabilidad Digital Biométrica y RFID (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Trazabilidad Digital Biométrica y RFID.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 30 },
            { name: 'Año 2', value: 60 },
            { name: 'Año 3', value: 95 },
            { name: 'Año 4', value: 135 },
            { name: 'Año 5', value: 190 }
          ],
          imageUrl: 'https://picsum.photos/seed/agr-19-solution/800/400'
        }
      },
      {
        id: 'agr-20',
        upvotes: 0,
        downvotes: 0,
        title: 'Subsidios Estatales Ineficientes',
        description: 'Subsidios estatales ineficientes que distorsionan los precios del mercado en lugar de mejorar el rendimiento.',
        solution: {
          leader: 'Javier Milei',
          model: 'Subvenciones de Contrapartida para Equipamiento',
          description: 'Alejarse por completo de los subsidios generales de apoyo a los precios y redirigir esos fondos hacia subvenciones de contrapartida para la compra de equipos agrícolas modernos y automatizados.',
          extendedDescription: `La implementación del modelo de Javier Milei requiere una reestructuración profunda. Alejarse por completo de los subsidios generales de apoyo a los precios y redirigir esos fondos hacia subvenciones de contrapartida para la compra de equipos agrícolas modernos y automatizados. Esto implica un cambio radical en la forma en que abordamos el problema de "Subsidios Estatales Ineficientes", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Subvenciones de Contrapartida para Equipamiento (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Subvenciones de Contrapartida para Equipamiento.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 40 },
            { name: 'Año 2', value: 75 },
            { name: 'Año 3', value: 115 },
            { name: 'Año 4', value: 160 },
            { name: 'Año 5', value: 220 }
          ],
          imageUrl: 'https://picsum.photos/seed/agr-20-solution/800/400'
        }
      },
      {
        id: 'agr-21',
        upvotes: 0,
        downvotes: 0,
        title: 'Ausencia de Datos Climáticos y de Suelo Localizados',
        description: 'Falta total de datos climáticos y de suelo granulares y localizados para la optimización de la siembra.',
        solution: {
          leader: 'Modelo Israelí',
          model: 'Red Nacional de Sensores IoT',
          description: 'Desplegar una red de malla nacional de microsensores meteorológicos y de suelo IoT en cada valle agrícola importante, alimentando datos directamente a un modelo predictivo público.',
          extendedDescription: `La implementación del modelo de Modelo Israelí requiere una reestructuración profunda. Desplegar una red de malla nacional de microsensores meteorológicos y de suelo IoT en cada valle agrícola importante, alimentando datos directamente a un modelo predictivo público. Esto implica un cambio radical en la forma en que abordamos el problema de "Ausencia de Datos Climáticos y de Suelo Localizados", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Red Nacional de Sensores IoT (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Red Nacional de Sensores IoT.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 50 },
            { name: 'Año 2', value: 90 },
            { name: 'Año 3', value: 135 },
            { name: 'Año 4', value: 185 },
            { name: 'Año 5', value: 250 }
          ],
          imageUrl: 'https://picsum.photos/seed/agr-21-solution/800/400'
        }
      },
      {
        id: 'agr-22',
        upvotes: 0,
        downvotes: 0,
        title: 'Deforestación por Agricultura de Tala y Quema',
        description: 'Deforestación en áreas montañosas protegidas impulsada por la agricultura de subsistencia ilegal de tala y quema.',
        solution: {
          leader: 'Carlos Alvarado Quesada',
          model: 'Monitoreo Satelital y Policía Ambiental',
          description: 'Implementar algoritmos de monitoreo satelital en tiempo real que detecten automáticamente el desmonte de tierras y envíen de inmediato unidades de policía ambiental de respuesta rápida.',
          extendedDescription: `La implementación del modelo de Carlos Alvarado Quesada requiere una reestructuración profunda. Implementar algoritmos de monitoreo satelital en tiempo real que detecten automáticamente el desmonte de tierras y envíen de inmediato unidades de policía ambiental de respuesta rápida. Esto implica un cambio radical en la forma en que abordamos el problema de "Deforestación por Agricultura de Tala y Quema", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Monitoreo Satelital y Policía Ambiental (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Monitoreo Satelital y Policía Ambiental.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 60 },
            { name: 'Año 2', value: 105 },
            { name: 'Año 3', value: 155 },
            { name: 'Año 4', value: 210 },
            { name: 'Año 5', value: 280 }
          ],
          imageUrl: 'https://picsum.photos/seed/agr-22-solution/800/400'
        }
      }
    ]
  },
  {
    id: 'healthcare',
    title: 'Salud',
    icon: Activity,
    overview: 'Fusionando la velocidad tecnológica, la transparencia de los fiscales y las matemáticas financieras para establecer un paradigma de atención médica resiliente y de clase mundial.',
    megaproject: {
      title: 'Red Nacional Integrada y Expediente Biométrico Único',
      description: 'Digitalización absoluta del sistema sanitario. Creación de un historial médico nacional encriptado en blockchain, accesible instantáneamente en cualquier clínica (pública o privada) mediante la huella dactilar o reconocimiento facial del ciudadano (Cédula Biométrica). Este sistema estará anclado a una nueva red regional de mega-hospitales exclusivos de Trauma y Oncología, para descongestionar el sistema primario.'
        ,
      timeline: [
        { phase: '2026-2027', description: 'Fase inicial de planificación, auditoría y diseño arquitectónico.' },
        { phase: '2028-2029', description: 'Despliegue de infraestructura base y programas piloto en zonas clave.' },
        { phase: '2030+', description: 'Expansión a nivel nacional, optimización continua y evaluación de impacto.' }
      ],
      partners: ['Banco Interamericano de Desarrollo (BID)', 'Ministerio de Economía, Planificación y Desarrollo', 'Sector Privado Local', 'ONGs Internacionales', 'Agencias de Cooperación (USAID, JICA)']
    },
    problems: [
      {
        id: 'hlt-1',
        upvotes: 0,
        downvotes: 0,
        title: 'Fragmentación Fiscal y Falta de Financiamiento',
        description: 'La asignación inadecuada del PIB (2.7%) y un sistema bifurcado obligan a los ciudadanos más pobres a absorber gastos de bolsillo graves.',
        solution: {
          leader: 'Lee Kuan Yew',
          model: 'Singapur / Taiwán',
          description: 'Unificar los fondos de seguros utilizando el backend digital de pagador único de Taiwán (<1% de costo administrativo), financiado a través de cuentas individuales obligatorias MediSave de Singapur.',
          extendedDescription: `La implementación del modelo de Lee Kuan Yew requiere una reestructuración profunda. Unificar los fondos de seguros utilizando el backend digital de pagador único de Taiwán (<1% de costo administrativo), financiado a través de cuentas individuales obligatorias MediSave de Singapur. Esto implica un cambio radical en la forma en que abordamos el problema de "Fragmentación Fiscal y Falta de Financiamiento", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Singapur / Taiwán (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Singapur / Taiwán.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 20 },
            { name: 'Año 2', value: 45 },
            { name: 'Año 3', value: 75 },
            { name: 'Año 4', value: 110 },
            { name: 'Año 5', value: 160 }
          ],
          imageUrl: 'https://picsum.photos/seed/healthcare-solution/800/400'
        }
      },
      {
        id: 'hlt-2',
        upvotes: 0,
        downvotes: 0,
        title: 'Aumento de la Mortalidad Materna',
        description: 'Una crisis que empeora con una tasa de mortalidad materna de 124.5 por cada 100,000 nacidos vivos, impulsada por un déficit de mano de obra clínica calificada.',
        solution: {
          leader: 'Margaret Thatcher',
          model: 'Modelo de Alemania',
          description: 'Establecer una vía de Formación Profesional Dual (Ausbildung) especializada para partería y enfermería neonatal, ofreciendo salarios de capacitación para escalar rápidamente una fuerza laboral competente.',
          extendedDescription: `La implementación del modelo de Margaret Thatcher requiere una reestructuración profunda. Establecer una vía de Formación Profesional Dual (Ausbildung) especializada para partería y enfermería neonatal, ofreciendo salarios de capacitación para escalar rápidamente una fuerza laboral competente. Esto implica un cambio radical en la forma en que abordamos el problema de "Aumento de la Mortalidad Materna", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Modelo de Alemania (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Modelo de Alemania.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 30 },
            { name: 'Año 2', value: 60 },
            { name: 'Año 3', value: 95 },
            { name: 'Año 4', value: 135 },
            { name: 'Año 5', value: 190 }
          ],
          imageUrl: 'https://picsum.photos/seed/hlt-2-solution/800/400'
        }
      },
      {
        id: 'hlt-3',
        upvotes: 0,
        downvotes: 0,
        title: 'Corrupción en la Cadena de Suministro Farmacéutico',
        description: 'La corrupción profundamente arraigada en las agencias de adquisiciones (por ejemplo, PROMESE/CAL) desangra el capital y limita la disponibilidad de medicamentos esenciales.',
        solution: {
          leader: 'Elon Musk & Nayib Bukele',
          model: 'Corea del Sur / Dinamarca',
          description: 'Implementar un entorno de adquisiciones digitales de confianza cero utilizando contratos inteligentes verificados por blockchain, supervisados por un organismo de auditoría independiente.',
          extendedDescription: `La implementación del modelo de Elon Musk & Nayib Bukele requiere una reestructuración profunda. Implementar un entorno de adquisiciones digitales de confianza cero utilizando contratos inteligentes verificados por blockchain, supervisados por un organismo de auditoría independiente. Esto implica un cambio radical en la forma en que abordamos el problema de "Corrupción en la Cadena de Suministro Farmacéutico", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Corea del Sur / Dinamarca (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Corea del Sur / Dinamarca.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 40 },
            { name: 'Año 2', value: 75 },
            { name: 'Año 3', value: 115 },
            { name: 'Año 4', value: 160 },
            { name: 'Año 5', value: 220 }
          ],
          imageUrl: 'https://picsum.photos/seed/hlt-3-solution/800/400'
        }
      },
      {
        id: 'hlt-4',
        upvotes: 0,
        downvotes: 0,
        title: 'Déficit de Atención Primaria y Preventiva',
        description: 'El sistema está sobrecargado en los hospitales de tercer nivel porque los pacientes no tienen acceso a clínicas preventivas locales de calidad.',
        solution: {
          leader: 'Tsai Ing-wen',
          model: 'Red de Clínicas de Taiwán',
          description: 'Redirigir el 40% del presupuesto hospitalario hacia la construcción de una red hiper-local de clínicas de atención primaria, penalizando financieramente el uso de emergencias para casos no urgentes.',
          extendedDescription: `La implementación del modelo de Tsai Ing-wen requiere una reestructuración profunda. Redirigir el 40% del presupuesto hospitalario hacia la construcción de una red hiper-local de clínicas de atención primaria, penalizando financieramente el uso de emergencias para casos no urgentes. Esto implica un cambio radical en la forma en que abordamos el problema de "Déficit de Atención Primaria y Preventiva", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Red de Clínicas de Taiwán (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Red de Clínicas de Taiwán.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 50 },
            { name: 'Año 2', value: 90 },
            { name: 'Año 3', value: 135 },
            { name: 'Año 4', value: 185 },
            { name: 'Año 5', value: 250 }
          ],
          imageUrl: 'https://picsum.photos/seed/hlt-4-solution/800/400'
        }
      },
      {
        id: 'hlt-5',
        upvotes: 0,
        downvotes: 0,
        title: 'Altos Costos de Medicamentos de Especialidad',
        description: 'Los monopolios de importación mantienen los precios de los medicamentos para enfermedades crónicas artificialmente altos, empobreciendo a los pacientes.',
        solution: {
          leader: 'Javier Milei',
          model: 'Mercado Abierto de Genéricos (India)',
          description: 'Eliminar las restricciones de importación exclusivas y permitir la importación paralela de medicamentos genéricos certificados por la FDA o la EMA, rompiendo los monopolios locales.',
          extendedDescription: `La implementación del modelo de Javier Milei requiere una reestructuración profunda. Eliminar las restricciones de importación exclusivas y permitir la importación paralela de medicamentos genéricos certificados por la FDA o la EMA, rompiendo los monopolios locales. Esto implica un cambio radical en la forma en que abordamos el problema de "Altos Costos de Medicamentos de Especialidad", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Mercado Abierto de Genéricos (India) (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Mercado Abierto de Genéricos (India).',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 60 },
            { name: 'Año 2', value: 105 },
            { name: 'Año 3', value: 155 },
            { name: 'Año 4', value: 210 },
            { name: 'Año 5', value: 280 }
          ],
          imageUrl: 'https://picsum.photos/seed/hlt-5-solution/800/400'
        }
      },
      {
        id: 'hlt-6',
        upvotes: 0,
        downvotes: 0,
        title: 'Gastos de Bolsillo Desproporcionados (SENASA)',
        description: 'Altos gastos médicos de bolsillo a pesar de la alta afiliación al seguro público (SENASA).',
        solution: {
          leader: 'Modelo Taiwán',
          model: 'Pagador Único y Control de Tarifas',
          description: 'Transición a una dinámica de pagador único impulsada por tecnología donde SENASA utilice su poder adquisitivo absoluto para limitar legalmente los copagos y tarifas de las clínicas privadas.',
          extendedDescription: `La implementación del modelo de Modelo Taiwán requiere una reestructuración profunda. Transición a una dinámica de pagador único impulsada por tecnología donde SENASA utilice su poder adquisitivo absoluto para limitar legalmente los copagos y tarifas de las clínicas privadas. Esto implica un cambio radical en la forma en que abordamos el problema de "Gastos de Bolsillo Desproporcionados (SENASA)", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Pagador Único y Control de Tarifas (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Pagador Único y Control de Tarifas.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 20 },
            { name: 'Año 2', value: 45 },
            { name: 'Año 3', value: 75 },
            { name: 'Año 4', value: 110 },
            { name: 'Año 5', value: 160 }
          ],
          imageUrl: 'https://picsum.photos/seed/hlt-6-solution/800/400'
        }
      },
      {
        id: 'hlt-7',
        upvotes: 0,
        downvotes: 0,
        title: 'Negligencia y Falta de Protocolos Obstétricos',
        description: 'Tasas inaceptablemente altas de mortalidad materna y neonatal a pesar de que la mayoría de los nacimientos ocurren en hospitales.',
        solution: {
          leader: 'Lee Kuan Yew',
          model: 'Protocolos Clínicos Monitoreados por IA',
          description: 'Exigir protocolos clínicos estrictos y monitoreados por IA para la atención obstétrica, con revocación automática y permanente de licencias médicas por desviaciones no verificadas del protocolo.',
          extendedDescription: `La implementación del modelo de Lee Kuan Yew requiere una reestructuración profunda. Exigir protocolos clínicos estrictos y monitoreados por IA para la atención obstétrica, con revocación automática y permanente de licencias médicas por desviaciones no verificadas del protocolo. Esto implica un cambio radical en la forma en que abordamos el problema de "Negligencia y Falta de Protocolos Obstétricos", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Protocolos Clínicos Monitoreados por IA (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Protocolos Clínicos Monitoreados por IA.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 30 },
            { name: 'Año 2', value: 60 },
            { name: 'Año 3', value: 95 },
            { name: 'Año 4', value: 135 },
            { name: 'Año 5', value: 190 }
          ],
          imageUrl: 'https://picsum.photos/seed/hlt-7-solution/800/400'
        }
      },
      {
        id: 'hlt-8',
        upvotes: 0,
        downvotes: 0,
        title: 'Huelgas y Paralización del Sistema Médico',
        description: 'Huelgas frecuentes y paralización del sistema causadas por el Colegio Médico Dominicano (CMD).',
        solution: {
          leader: 'Ronald Reagan',
          model: 'Servicio de Seguridad Nacional Crítico',
          description: 'Clasificar la atención médica de emergencia y primaria como un "Servicio de Seguridad Nacional Crítico", prohibiendo las huelgas y cambiando a modelos de pago indexados al desempeño.',
          extendedDescription: `La implementación del modelo de Ronald Reagan requiere una reestructuración profunda. Clasificar la atención médica de emergencia y primaria como un "Servicio de Seguridad Nacional Crítico", prohibiendo las huelgas y cambiando a modelos de pago indexados al desempeño. Esto implica un cambio radical en la forma en que abordamos el problema de "Huelgas y Paralización del Sistema Médico", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Servicio de Seguridad Nacional Crítico (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Servicio de Seguridad Nacional Crítico.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 40 },
            { name: 'Año 2', value: 75 },
            { name: 'Año 3', value: 115 },
            { name: 'Año 4', value: 160 },
            { name: 'Año 5', value: 220 }
          ],
          imageUrl: 'https://picsum.photos/seed/hlt-8-solution/800/400'
        }
      },
      {
        id: 'hlt-9',
        upvotes: 0,
        downvotes: 0,
        title: 'Epidemia de Accidentes de Tránsito (Trauma)',
        description: 'Epidemia de accidentes de tránsito (específicamente motocicletas) que lleva a la bancarrota a los sistemas de trauma y ortopedia.',
        solution: {
          leader: 'Modelo Nórdico',
          model: 'Impuesto al Trauma y Centros Regionales',
          description: 'Implementar un "Impuesto al Trauma" universal estrictamente sobre las importaciones de motocicletas y las ventas de alcohol, delimitado algorítmicamente para financiar centros regionales de trauma de Nivel 1.',
          extendedDescription: `La implementación del modelo de Modelo Nórdico requiere una reestructuración profunda. Implementar un "Impuesto al Trauma" universal estrictamente sobre las importaciones de motocicletas y las ventas de alcohol, delimitado algorítmicamente para financiar centros regionales de trauma de Nivel 1. Esto implica un cambio radical en la forma en que abordamos el problema de "Epidemia de Accidentes de Tránsito (Trauma)", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Impuesto al Trauma y Centros Regionales (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Impuesto al Trauma y Centros Regionales.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 50 },
            { name: 'Año 2', value: 90 },
            { name: 'Año 3', value: 135 },
            { name: 'Año 4', value: 185 },
            { name: 'Año 5', value: 250 }
          ],
          imageUrl: 'https://picsum.photos/seed/hlt-9-solution/800/400'
        }
      },
      {
        id: 'hlt-10',
        upvotes: 0,
        downvotes: 0,
        title: 'Falsificación y Contrabando de Medicamentos',
        description: 'Circulación de medicamentos falsificados, de contrabando y de calidad inferior que ponen en peligro al público.',
        solution: {
          leader: 'Nayib Bukele',
          model: 'Trazabilidad Blockchain y Penas de Prisión',
          description: 'Desplegar un sistema nacional de seguimiento y localización blockchain para todos los productos farmacéuticos desde el puerto de entrada hasta el paciente, con penas de prisión obligatorias para los falsificadores.',
          extendedDescription: `La implementación del modelo de Nayib Bukele requiere una reestructuración profunda. Desplegar un sistema nacional de seguimiento y localización blockchain para todos los productos farmacéuticos desde el puerto de entrada hasta el paciente, con penas de prisión obligatorias para los falsificadores. Esto implica un cambio radical en la forma en que abordamos el problema de "Falsificación y Contrabando de Medicamentos", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Trazabilidad Blockchain y Penas de Prisión (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Trazabilidad Blockchain y Penas de Prisión.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 60 },
            { name: 'Año 2', value: 105 },
            { name: 'Año 3', value: 155 },
            { name: 'Año 4', value: 210 },
            { name: 'Año 5', value: 280 }
          ],
          imageUrl: 'https://picsum.photos/seed/hlt-10-solution/800/400'
        }
      },
      {
        id: 'hlt-11',
        upvotes: 0,
        downvotes: 0,
        title: 'Vulnerabilidad a Enfermedades Vectoriales',
        description: 'Alta vulnerabilidad a enfermedades cíclicas transmitidas por vectores como el dengue y la malaria.',
        solution: {
          leader: 'Bill Gates',
          model: 'Drones Autónomos y Mosquitos CRISPR',
          description: 'Desplegar enjambres de drones autónomos para la fumigación de precisión con larvicidas y utilizar técnicas de insectos estériles CRISPR para erradicar las poblaciones de mosquitos en los puntos críticos urbanos.',
          extendedDescription: `La implementación del modelo de Bill Gates requiere una reestructuración profunda. Desplegar enjambres de drones autónomos para la fumigación de precisión con larvicidas y utilizar técnicas de insectos estériles CRISPR para erradicar las poblaciones de mosquitos en los puntos críticos urbanos. Esto implica un cambio radical en la forma en que abordamos el problema de "Vulnerabilidad a Enfermedades Vectoriales", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Drones Autónomos y Mosquitos CRISPR (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Drones Autónomos y Mosquitos CRISPR.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 20 },
            { name: 'Año 2', value: 45 },
            { name: 'Año 3', value: 75 },
            { name: 'Año 4', value: 110 },
            { name: 'Año 5', value: 160 }
          ],
          imageUrl: 'https://picsum.photos/seed/hlt-11-solution/800/400'
        }
      },
      {
        id: 'hlt-12',
        upvotes: 0,
        downvotes: 0,
        title: 'Déficit de Enfermeras y Exceso de Médicos Generales',
        description: 'Grave escasez de enfermeras especializadas junto con una sobreabundancia de médicos generalistas con formación insuficiente.',
        solution: {
          leader: 'Paul Kagame',
          model: 'Redirección de Subsidios Médicos',
          description: 'Congelar las inscripciones públicas en las facultades de medicina general y redirigir agresivamente los subsidios hacia programas de enfermería de alta tecnología y residencias quirúrgicas especializadas.',
          extendedDescription: `La implementación del modelo de Paul Kagame requiere una reestructuración profunda. Congelar las inscripciones públicas en las facultades de medicina general y redirigir agresivamente los subsidios hacia programas de enfermería de alta tecnología y residencias quirúrgicas especializadas. Esto implica un cambio radical en la forma en que abordamos el problema de "Déficit de Enfermeras y Exceso de Médicos Generales", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Redirección de Subsidios Médicos (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Redirección de Subsidios Médicos.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 30 },
            { name: 'Año 2', value: 60 },
            { name: 'Año 3', value: 95 },
            { name: 'Año 4', value: 135 },
            { name: 'Año 5', value: 190 }
          ],
          imageUrl: 'https://picsum.photos/seed/hlt-12-solution/800/400'
        }
      },
      {
        id: 'hlt-13',
        upvotes: 0,
        downvotes: 0,
        title: 'Fragmentación de Historiales Médicos',
        description: 'Fragmentación total y falta de interoperabilidad entre los registros médicos públicos (SNS) y privados.',
        solution: {
          leader: 'Modelo Estonio',
          model: 'Expediente Único de Salud Encriptado',
          description: 'Exigir un Registro Médico Electrónico (EHR) nacional unificado y encriptado vinculado a la Cédula, accesible instantáneamente en cualquier clínica mediante verificación biométrica.',
          extendedDescription: `La implementación del modelo de Modelo Estonio requiere una reestructuración profunda. Exigir un Registro Médico Electrónico (EHR) nacional unificado y encriptado vinculado a la Cédula, accesible instantáneamente en cualquier clínica mediante verificación biométrica. Esto implica un cambio radical en la forma en que abordamos el problema de "Fragmentación de Historiales Médicos", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Expediente Único de Salud Encriptado (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Expediente Único de Salud Encriptado.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 40 },
            { name: 'Año 2', value: 75 },
            { name: 'Año 3', value: 115 },
            { name: 'Año 4', value: 160 },
            { name: 'Año 5', value: 220 }
          ],
          imageUrl: 'https://picsum.photos/seed/hlt-13-solution/800/400'
        }
      },
      {
        id: 'hlt-14',
        upvotes: 0,
        downvotes: 0,
        title: 'Hospitales Públicos Politizados e Ineficientes',
        description: 'Hospitales públicos con escasos recursos, gestionados políticamente y altamente ineficientes.',
        solution: {
          leader: 'Javier Milei',
          model: 'Administración Privada por Resultados (APP)',
          description: 'Privatizar la administración hospitalaria a través de estrictas Alianzas Público-Privadas (APP) que vinculen la compensación corporativa directamente con las métricas de supervivencia y recuperación de los pacientes.',
          extendedDescription: `La implementación del modelo de Javier Milei requiere una reestructuración profunda. Privatizar la administración hospitalaria a través de estrictas Alianzas Público-Privadas (APP) que vinculen la compensación corporativa directamente con las métricas de supervivencia y recuperación de los pacientes. Esto implica un cambio radical en la forma en que abordamos el problema de "Hospitales Públicos Politizados e Ineficientes", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Administración Privada por Resultados (APP) (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Administración Privada por Resultados (APP).',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 50 },
            { name: 'Año 2', value: 90 },
            { name: 'Año 3', value: 135 },
            { name: 'Año 4', value: 185 },
            { name: 'Año 5', value: 250 }
          ],
          imageUrl: 'https://picsum.photos/seed/hlt-14-solution/800/400'
        }
      },
      {
        id: 'hlt-15',
        upvotes: 0,
        downvotes: 0,
        title: 'Altas Tasas de Embarazo Adolescente',
        description: 'Altas tasas de embarazo adolescente que crean riesgos en cascada para la salud y pobreza generacional.',
        solution: {
          leader: 'Jacinda Ardern',
          model: 'Clínicas Reproductivas en Escuelas Secundarias',
          description: 'Eludir las barreras parentales y clínicas tradicionales integrando clínicas de salud reproductiva y anticonceptivos obligatorias y confidenciales directamente dentro de todas las escuelas secundarias públicas.',
          extendedDescription: `La implementación del modelo de Jacinda Ardern requiere una reestructuración profunda. Eludir las barreras parentales y clínicas tradicionales integrando clínicas de salud reproductiva y anticonceptivos obligatorias y confidenciales directamente dentro de todas las escuelas secundarias públicas. Esto implica un cambio radical en la forma en que abordamos el problema de "Altas Tasas de Embarazo Adolescente", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Clínicas Reproductivas en Escuelas Secundarias (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Clínicas Reproductivas en Escuelas Secundarias.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 60 },
            { name: 'Año 2', value: 105 },
            { name: 'Año 3', value: 155 },
            { name: 'Año 4', value: 210 },
            { name: 'Año 5', value: 280 }
          ],
          imageUrl: 'https://picsum.photos/seed/hlt-15-solution/800/400'
        }
      },
      {
        id: 'hlt-16',
        upvotes: 0,
        downvotes: 0,
        title: 'Carencia Crónica de Instalaciones de Salud Mental',
        description: 'Falta crónica de instalaciones especializadas en salud mental, lo que provoca hacinamiento en las prisiones y falta de vivienda.',
        solution: {
          leader: 'Modelo Australiano',
          model: 'Alas de Estabilización Psiquiátrica Descentralizadas',
          description: 'Descentralizar la atención psiquiátrica exigiendo alas seguras de estabilización de salud mental en todos los hospitales regionales, financiadas en su totalidad por un impuesto dedicado a artículos de lujo y casinos.',
          extendedDescription: `La implementación del modelo de Modelo Australiano requiere una reestructuración profunda. Descentralizar la atención psiquiátrica exigiendo alas seguras de estabilización de salud mental en todos los hospitales regionales, financiadas en su totalidad por un impuesto dedicado a artículos de lujo y casinos. Esto implica un cambio radical en la forma en que abordamos el problema de "Carencia Crónica de Instalaciones de Salud Mental", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Alas de Estabilización Psiquiátrica Descentralizadas (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Alas de Estabilización Psiquiátrica Descentralizadas.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 20 },
            { name: 'Año 2', value: 45 },
            { name: 'Año 3', value: 75 },
            { name: 'Año 4', value: 110 },
            { name: 'Año 5', value: 160 }
          ],
          imageUrl: 'https://picsum.photos/seed/hlt-16-solution/800/400'
        }
      },
      {
        id: 'hlt-17',
        upvotes: 0,
        downvotes: 0,
        title: 'Clínicas de Cirugía Estética Clandestinas',
        description: 'Clínicas de cirugía estética peligrosas y no reguladas que se dirigen a turistas de salud y locales.',
        solution: {
          leader: 'Lee Kuan Yew',
          model: 'Acreditación Internacional de Tolerancia Cero',
          description: 'Establecer un mandato de acreditación internacional de tolerancia cero para todas las clínicas cosméticas, aplicado mediante auditorías encubiertas y el decomiso inmediato de activos estatales por violaciones.',
          extendedDescription: `La implementación del modelo de Lee Kuan Yew requiere una reestructuración profunda. Establecer un mandato de acreditación internacional de tolerancia cero para todas las clínicas cosméticas, aplicado mediante auditorías encubiertas y el decomiso inmediato de activos estatales por violaciones. Esto implica un cambio radical en la forma en que abordamos el problema de "Clínicas de Cirugía Estética Clandestinas", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Acreditación Internacional de Tolerancia Cero (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Acreditación Internacional de Tolerancia Cero.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 30 },
            { name: 'Año 2', value: 60 },
            { name: 'Año 3', value: 95 },
            { name: 'Año 4', value: 135 },
            { name: 'Año 5', value: 190 }
          ],
          imageUrl: 'https://picsum.photos/seed/hlt-17-solution/800/400'
        }
      },
      {
        id: 'hlt-18',
        upvotes: 0,
        downvotes: 0,
        title: 'Sistema de Despacho de Ambulancias Ineficiente (911)',
        description: 'Falta de un sistema de despacho de ambulancias unificado y funcional, lo que provoca la saturación del 911 y retrasos fatales.',
        solution: {
          leader: 'Elon Musk',
          model: 'Despacho Descentralizado por IA',
          description: 'Integrar un algoritmo de despacho descentralizado que utilice ambulancias públicas y privadas certificadas, enrutadas dinámicamente mediante predicción de tráfico por IA y gravedad del paciente.',
          extendedDescription: `La implementación del modelo de Elon Musk requiere una reestructuración profunda. Integrar un algoritmo de despacho descentralizado que utilice ambulancias públicas y privadas certificadas, enrutadas dinámicamente mediante predicción de tráfico por IA y gravedad del paciente. Esto implica un cambio radical en la forma en que abordamos el problema de "Sistema de Despacho de Ambulancias Ineficiente (911)", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Despacho Descentralizado por IA (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Despacho Descentralizado por IA.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 40 },
            { name: 'Año 2', value: 75 },
            { name: 'Año 3', value: 115 },
            { name: 'Año 4', value: 160 },
            { name: 'Año 5', value: 220 }
          ],
          imageUrl: 'https://picsum.photos/seed/hlt-18-solution/800/400'
        }
      },
      {
        id: 'hlt-19',
        upvotes: 0,
        downvotes: 0,
        title: 'Aumento de Enfermedades Crónicas Prevenibles',
        description: 'Tasas disparadas de enfermedades crónicas prevenibles (diabetes, hipertensión) que destruyen el presupuesto del sistema.',
        solution: {
          leader: 'Michael Bloomberg',
          model: 'Impuestos Agresivos a Ultraprocesados',
          description: 'Instituir impuestos agresivos sobre alimentos ultraprocesados y bebidas azucaradas, utilizando el 100% de los ingresos para subsidiar productos frescos y exámenes de diagnóstico anuales obligatorios.',
          extendedDescription: `La implementación del modelo de Michael Bloomberg requiere una reestructuración profunda. Instituir impuestos agresivos sobre alimentos ultraprocesados y bebidas azucaradas, utilizando el 100% de los ingresos para subsidiar productos frescos y exámenes de diagnóstico anuales obligatorios. Esto implica un cambio radical en la forma en que abordamos el problema de "Aumento de Enfermedades Crónicas Prevenibles", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Impuestos Agresivos a Ultraprocesados (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Impuestos Agresivos a Ultraprocesados.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 50 },
            { name: 'Año 2', value: 90 },
            { name: 'Año 3', value: 135 },
            { name: 'Año 4', value: 185 },
            { name: 'Año 5', value: 250 }
          ],
          imageUrl: 'https://picsum.photos/seed/hlt-19-solution/800/400'
        }
      },
      {
        id: 'hlt-20',
        upvotes: 0,
        downvotes: 0,
        title: 'Ruptura de la Cadena de Frío para Vacunas en Zonas Rurales',
        description: 'Logística de cadena de frío insuficiente que provoca el deterioro de vacunas y productos biológicos en clínicas rurales.',
        solution: {
          leader: 'Modelo Ruandés',
          model: 'Micro-Refrigeración Solar IoT',
          description: 'Exigir el uso exclusivo de unidades de microrrefrigeración monitoreadas por IoT, alimentadas por energía solar y fuera de la red para todos los puestos rurales, con alertas automatizadas para fluctuaciones de temperatura.',
          extendedDescription: `La implementación del modelo de Modelo Ruandés requiere una reestructuración profunda. Exigir el uso exclusivo de unidades de microrrefrigeración monitoreadas por IoT, alimentadas por energía solar y fuera de la red para todos los puestos rurales, con alertas automatizadas para fluctuaciones de temperatura. Esto implica un cambio radical en la forma en que abordamos el problema de "Ruptura de la Cadena de Frío para Vacunas en Zonas Rurales", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Micro-Refrigeración Solar IoT (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Micro-Refrigeración Solar IoT.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 60 },
            { name: 'Año 2', value: 105 },
            { name: 'Año 3', value: 155 },
            { name: 'Año 4', value: 210 },
            { name: 'Año 5', value: 280 }
          ],
          imageUrl: 'https://picsum.photos/seed/hlt-20-solution/800/400'
        }
      },
      {
        id: 'hlt-21',
        upvotes: 0,
        downvotes: 0,
        title: 'Fuga de Cerebros Médicos',
        description: 'Grave fuga de cerebros médicos, con los mejores especialistas migrando a la capital, Estados Unidos o Europa.',
        solution: {
          leader: 'Emmanuel Macron',
          model: 'Incentivos Fiscales para Provincias Fronterizas',
          description: 'Eliminar el impuesto sobre la renta y ofrecer viviendas subsidiadas para especialistas certificados por la junta que se comprometan a ejercer en provincias fronterizas desatendidas y de alta necesidad durante una década.',
          extendedDescription: `La implementación del modelo de Emmanuel Macron requiere una reestructuración profunda. Eliminar el impuesto sobre la renta y ofrecer viviendas subsidiadas para especialistas certificados por la junta que se comprometan a ejercer en provincias fronterizas desatendidas y de alta necesidad durante una década. Esto implica un cambio radical en la forma en que abordamos el problema de "Fuga de Cerebros Médicos", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Incentivos Fiscales para Provincias Fronterizas (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Incentivos Fiscales para Provincias Fronterizas.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 20 },
            { name: 'Año 2', value: 45 },
            { name: 'Año 3', value: 75 },
            { name: 'Año 4', value: 110 },
            { name: 'Año 5', value: 160 }
          ],
          imageUrl: 'https://picsum.photos/seed/hlt-21-solution/800/400'
        }
      },
      {
        id: 'hlt-22',
        upvotes: 0,
        downvotes: 0,
        title: 'Equipos de Diagnóstico (MRI/CT) Obsoletos o Dañados',
        description: 'Retrasos en el diagnóstico causados por equipos de imágenes obsoletos o crónicamente averiados (MRI/CT) en hospitales públicos.',
        solution: {
          leader: 'Modelo NHS',
          model: 'Imágenes como Servicio (IaaS)',
          description: 'Cambiar las adquisiciones a un modelo de "imágenes como servicio", pagando a proveedores privados estrictamente por escaneo exitoso e instituyendo penalizaciones financieras paralizantes por el tiempo de inactividad de la máquina.',
          extendedDescription: `La implementación del modelo de Modelo NHS requiere una reestructuración profunda. Cambiar las adquisiciones a un modelo de "imágenes como servicio", pagando a proveedores privados estrictamente por escaneo exitoso e instituyendo penalizaciones financieras paralizantes por el tiempo de inactividad de la máquina. Esto implica un cambio radical en la forma en que abordamos el problema de "Equipos de Diagnóstico (MRI/CT) Obsoletos o Dañados", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Imágenes como Servicio (IaaS) (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Imágenes como Servicio (IaaS).',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 30 },
            { name: 'Año 2', value: 60 },
            { name: 'Año 3', value: 95 },
            { name: 'Año 4', value: 135 },
            { name: 'Año 5', value: 190 }
          ],
          imageUrl: 'https://picsum.photos/seed/hlt-22-solution/800/400'
        }
      }
    ]
  },
  {
    id: 'finance',
    title: 'Finanzas y Tesoro',
    icon: Landmark,
    overview: 'El "Protocolo de Solvencia Soberana" que hace cumplir la formalización tecnológica y la disciplina fiscal constante para capturar los ingresos perdidos y reducir la deuda.',
    megaproject: {
      title: 'La Billetera Soberana y la Economía "Cero Efectivo"',
      description: 'Implementación de una infraestructura de pagos minoristas instantáneos y gratuitos (similar al PIX de Brasil), forzando la transición hacia una economía 100% digital. Esto incluye la desmonetización gradual de los billetes de alta denominación para erradicar el mercado negro, forzar la formalización masiva e implementar la retención de impuestos de forma algorítmica y automática en cada transacción.'
        ,
      timeline: [
        { phase: '2026-2027', description: 'Fase inicial de planificación, auditoría y diseño arquitectónico.' },
        { phase: '2028-2029', description: 'Despliegue de infraestructura base y programas piloto en zonas clave.' },
        { phase: '2030+', description: 'Expansión a nivel nacional, optimización continua y evaluación de impacto.' }
      ],
      partners: ['Banco Interamericano de Desarrollo (BID)', 'Ministerio de Economía, Planificación y Desarrollo', 'Sector Privado Local', 'ONGs Internacionales', 'Agencias de Cooperación (USAID, JICA)']
    },
    problems: [
      {
        id: 'fin-1',
        upvotes: 0,
        downvotes: 0,
        title: 'Subsidios Eléctricos Paralizantes',
        description: 'Las transferencias generales a las empresas de distribución estatales le cuestan al estado $1.3 mil millones anuales (1.4% del PIB).',
        solution: {
          leader: 'Javier Milei',
          model: 'Fiscal de Singapur',
          description: 'Detener inmediatamente las transferencias generales a las EDE y hacer flotar las tarifas de electricidad para reflejar los verdaderos costos del mercado, ahorrando un 1.4% del PIB al instante.',
          extendedDescription: `La implementación del modelo de Javier Milei requiere una reestructuración profunda. Detener inmediatamente las transferencias generales a las EDE y hacer flotar las tarifas de electricidad para reflejar los verdaderos costos del mercado, ahorrando un 1.4% del PIB al instante. Esto implica un cambio radical en la forma en que abordamos el problema de "Subsidios Eléctricos Paralizantes", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Fiscal de Singapur (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Fiscal de Singapur.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 40 },
            { name: 'Año 2', value: 75 },
            { name: 'Año 3', value: 115 },
            { name: 'Año 4', value: 160 },
            { name: 'Año 5', value: 220 }
          ],
          imageUrl: 'https://picsum.photos/seed/finance-solution/800/400'
        }
      },
      {
        id: 'fin-2',
        upvotes: 0,
        downvotes: 0,
        title: 'Baja Movilización de Ingresos y Evasión',
        description: 'La relación impuestos-PIB sigue siendo baja (~16%) con una evasión del IVA que ronda el 44%.',
        solution: {
          leader: 'Elon Musk',
          model: 'Corea del Sur Digital',
          description: 'Desplegar la Facturación Electrónica Universal (eCF) impulsada por IA para cerrar la brecha de evasión del IVA de forma autónoma sin aumentar los impuestos base.',
          extendedDescription: `La implementación del modelo de Elon Musk requiere una reestructuración profunda. Desplegar la Facturación Electrónica Universal (eCF) impulsada por IA para cerrar la brecha de evasión del IVA de forma autónoma sin aumentar los impuestos base. Esto implica un cambio radical en la forma en que abordamos el problema de "Baja Movilización de Ingresos y Evasión", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Corea del Sur Digital (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Corea del Sur Digital.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 50 },
            { name: 'Año 2', value: 90 },
            { name: 'Año 3', value: 135 },
            { name: 'Año 4', value: 185 },
            { name: 'Año 5', value: 250 }
          ],
          imageUrl: 'https://picsum.photos/seed/fin-2-solution/800/400'
        }
      },
      {
        id: 'fin-3',
        upvotes: 0,
        downvotes: 0,
        title: 'Gastos Tributarios Inflados',
        description: 'Las exenciones e incentivos fiscales corporativos le cuestan al estado el 4.5% del PIB con rendimientos cuestionables.',
        solution: {
          leader: 'Javier Milei',
          model: 'Fiscal de Singapur',
          description: 'Instituir una auditoría de base cero de todas las exenciones fiscales corporativas. Eliminar los gastos fiscales "clientelistas" a menos que demuestren un ROI directo y medible.',
          extendedDescription: `La implementación del modelo de Javier Milei requiere una reestructuración profunda. Instituir una auditoría de base cero de todas las exenciones fiscales corporativas. Eliminar los gastos fiscales "clientelistas" a menos que demuestren un ROI directo y medible. Esto implica un cambio radical en la forma en que abordamos el problema de "Gastos Tributarios Inflados", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Fiscal de Singapur (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Fiscal de Singapur.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 60 },
            { name: 'Año 2', value: 105 },
            { name: 'Año 3', value: 155 },
            { name: 'Año 4', value: 210 },
            { name: 'Año 5', value: 280 }
          ],
          imageUrl: 'https://picsum.photos/seed/fin-3-solution/800/400'
        }
      },
      {
        id: 'fin-4',
        upvotes: 0,
        downvotes: 0,
        title: 'Deuda Pública Creciente y Servicio de Deuda',
        description: 'El pago de intereses de la deuda consume más del 20% de los ingresos tributarios, limitando severamente la inversión en infraestructura y desarrollo.',
        solution: {
          leader: 'Javier Milei',
          model: 'Regla Fiscal Estricta (Déficit Cero)',
          description: 'Aprobar una enmienda constitucional que prohíba los déficits fiscales primarios, obligando a recortes automáticos del gasto gubernamental si los ingresos caen por debajo de las proyecciones.',
          extendedDescription: `La implementación del modelo de Javier Milei requiere una reestructuración profunda. Aprobar una enmienda constitucional que prohíba los déficits fiscales primarios, obligando a recortes automáticos del gasto gubernamental si los ingresos caen por debajo de las proyecciones. Esto implica un cambio radical en la forma en que abordamos el problema de "Deuda Pública Creciente y Servicio de Deuda", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Regla Fiscal Estricta (Déficit Cero) (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Regla Fiscal Estricta (Déficit Cero).',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 20 },
            { name: 'Año 2', value: 45 },
            { name: 'Año 3', value: 75 },
            { name: 'Año 4', value: 110 },
            { name: 'Año 5', value: 160 }
          ],
          imageUrl: 'https://picsum.photos/seed/fin-4-solution/800/400'
        }
      },
      {
        id: 'fin-5',
        upvotes: 0,
        downvotes: 0,
        title: 'Burocracia Asfixiante para Emprendedores',
        description: 'Crear y formalizar una empresa toma semanas y múltiples visitas a diferentes instituciones, fomentando la informalidad.',
        solution: {
          leader: 'Kaja Kallas',
          model: 'E-Residency de Estonia',
          description: 'Unificar todos los procesos de registro empresarial en un portal único basado en blockchain, permitiendo la creación legal de una empresa y cuenta bancaria en menos de 15 minutos.',
          extendedDescription: `La implementación del modelo de Kaja Kallas requiere una reestructuración profunda. Unificar todos los procesos de registro empresarial en un portal único basado en blockchain, permitiendo la creación legal de una empresa y cuenta bancaria en menos de 15 minutos. Esto implica un cambio radical en la forma en que abordamos el problema de "Burocracia Asfixiante para Emprendedores", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de E-Residency de Estonia (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de E-Residency de Estonia.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 30 },
            { name: 'Año 2', value: 60 },
            { name: 'Año 3', value: 95 },
            { name: 'Año 4', value: 135 },
            { name: 'Año 5', value: 190 }
          ],
          imageUrl: 'https://picsum.photos/seed/fin-5-solution/800/400'
        }
      },
      {
        id: 'fin-6',
        upvotes: 0,
        downvotes: 0,
        title: 'Ineffective Cash Flow Planning',
        description: 'Falta de anticipación de déficits debido a modelos de pronóstico ineficientes.',
        solution: {
          leader: 'Experto Financiero',
          model: 'Modelo Predictivo Avanzado',
          description: 'Implementar modelos avanzados de pronóstico predictivo utilizando datos macroeconómicos y estacionales históricos para anticipar déficits.',
          extendedDescription: 'Implementar modelos avanzados de pronóstico predictivo utilizando datos macroeconómicos y estacionales históricos para anticipar déficits. Esto permitirá una mejor planificación del flujo de caja.',
          implementationSteps: ['Fase 1: Análisis de datos', 'Fase 2: Desarrollo del modelo', 'Fase 3: Implementación'],
          expectedOutcomes: ['Mejor planificación', 'Reducción de déficits imprevistos'],
          chartData: [{ name: 'Año 1', value: 10 }, { name: 'Año 2', value: 20 }, { name: 'Año 3', value: 30 }, { name: 'Año 4', value: 40 }, { name: 'Año 5', value: 50 }],
          imageUrl: 'https://picsum.photos/seed/fin-6-solution/800/400'
        }
      },
      {
        id: 'fin-7',
        upvotes: 0,
        downvotes: 0,
        title: 'Idle Funds Outside the CUT',
        description: 'Fondos inactivos en fideicomisos públicos descentralizados y agencias autónomas.',
        solution: {
          leader: 'Experto Financiero',
          model: 'Cuenta Única del Tesoro',
          description: 'Hacer cumplir los mandatos legales para barrer los fondos de fideicomisos públicos descentralizados y agencias autónomas hacia la Cuenta Única del Tesoro.',
          extendedDescription: 'Hacer cumplir los mandatos legales para barrer los fondos de fideicomisos públicos descentralizados y agencias autónomas hacia la Cuenta Única del Tesoro. Esto centralizará los recursos y mejorará la liquidez.',
          implementationSteps: ['Fase 1: Auditoría de fondos', 'Fase 2: Marco legal', 'Fase 3: Transferencia de fondos'],
          expectedOutcomes: ['Mayor liquidez', 'Mejor control de fondos'],
          chartData: [{ name: 'Año 1', value: 15 }, { name: 'Año 2', value: 25 }, { name: 'Año 3', value: 35 }, { name: 'Año 4', value: 45 }, { name: 'Año 5', value: 55 }],
          imageUrl: 'https://picsum.photos/seed/fin-7-solution/800/400'
        }
      },
      {
        id: 'fin-8',
        upvotes: 0,
        downvotes: 0,
        title: 'Deficient Asset & Liability Mgmt.',
        description: 'Mala gestión de activos y pasivos, perdiendo oportunidades de rendimiento.',
        solution: {
          leader: 'Experto Financiero',
          model: 'Fondo de Riqueza Soberana',
          description: 'Establecer una cartera de inversiones a corto plazo o un marco de riqueza soberana para generar rendimientos seguros sobre los excedentes de efectivo.',
          extendedDescription: 'Establecer una cartera de inversiones a corto plazo o un marco de riqueza soberana para generar rendimientos seguros sobre los excedentes de efectivo. Esto optimizará el uso de los recursos del estado.',
          implementationSteps: ['Fase 1: Diseño del portafolio', 'Fase 2: Asignación de fondos', 'Fase 3: Gestión activa'],
          expectedOutcomes: ['Generación de rendimientos', 'Optimización de excedentes'],
          chartData: [{ name: 'Año 1', value: 20 }, { name: 'Año 2', value: 30 }, { name: 'Año 3', value: 40 }, { name: 'Año 4', value: 50 }, { name: 'Año 5', value: 60 }],
          imageUrl: 'https://picsum.photos/seed/fin-8-solution/800/400'
        }
      },
      {
        id: 'fin-9',
        upvotes: 0,
        downvotes: 0,
        title: 'Delayed Payment Commitments',
        description: 'Retrasos en los compromisos de pago del estado.',
        solution: {
          leader: 'Experto Financiero',
          model: 'Factoring Respaldado por el Estado',
          description: 'Automatizar el canal de cuentas por pagar e introducir opciones de factoring respaldadas por el estado vinculadas a hitos presupuestarios.',
          extendedDescription: 'Automatizar el canal de cuentas por pagar e introducir opciones de factoring respaldadas por el estado vinculadas a hitos presupuestarios. Esto mejorará la liquidez de los proveedores del estado.',
          implementationSteps: ['Fase 1: Automatización', 'Fase 2: Diseño de factoring', 'Fase 3: Implementación'],
          expectedOutcomes: ['Pagos a tiempo', 'Mejora en la liquidez de proveedores'],
          chartData: [{ name: 'Año 1', value: 25 }, { name: 'Año 2', value: 35 }, { name: 'Año 3', value: 45 }, { name: 'Año 4', value: 55 }, { name: 'Año 5', value: 65 }],
          imageUrl: 'https://picsum.photos/seed/fin-9-solution/800/400'
        }
      },
      {
        id: 'fin-10',
        upvotes: 0,
        downvotes: 0,
        title: 'Budgetary Imbalances',
        description: 'Desequilibrios presupuestarios y crecimiento descontrolado del gasto público operativo.',
        solution: {
          leader: 'Experto Financiero',
          model: 'Ley de Responsabilidad Fiscal',
          description: 'Adoptar una Ley de Responsabilidad Fiscal que haga cumplir reglas fiscales estructurales para limitar el crecimiento del gasto público operativo.',
          extendedDescription: 'Adoptar una Ley de Responsabilidad Fiscal que haga cumplir reglas fiscales estructurales para limitar el crecimiento del gasto público operativo. Esto asegurará la sostenibilidad fiscal a largo plazo.',
          implementationSteps: ['Fase 1: Redacción de la ley', 'Fase 2: Aprobación legislativa', 'Fase 3: Implementación'],
          expectedOutcomes: ['Sostenibilidad fiscal', 'Control del gasto'],
          chartData: [{ name: 'Año 1', value: 30 }, { name: 'Año 2', value: 40 }, { name: 'Año 3', value: 50 }, { name: 'Año 4', value: 60 }, { name: 'Año 5', value: 70 }],
          imageUrl: 'https://picsum.photos/seed/fin-10-solution/800/400'
        }
      },
      {
        id: 'fin-11',
        upvotes: 0,
        downvotes: 0,
        title: 'Outdated Legal Framework',
        description: 'Legislación obsoleta como la Ley 567-05 que dificulta la gestión financiera moderna.',
        solution: {
          leader: 'Experto Legal',
          model: 'Reforma de Gestión Financiera Pública',
          description: 'Redactar y aprobar un proyecto de ley de reforma de la Gestión Financiera Pública para modernizar la legislación.',
          extendedDescription: 'Redactar y aprobar un proyecto de ley de reforma de la Gestión Financiera Pública para modernizar la legislación como la Ley 567-05. Esto proporcionará un marco legal adecuado para las finanzas modernas.',
          implementationSteps: ['Fase 1: Análisis legal', 'Fase 2: Redacción', 'Fase 3: Aprobación'],
          expectedOutcomes: ['Marco legal moderno', 'Mejor gestión financiera'],
          chartData: [{ name: 'Año 1', value: 35 }, { name: 'Año 2', value: 45 }, { name: 'Año 3', value: 55 }, { name: 'Año 4', value: 65 }, { name: 'Año 5', value: 75 }],
          imageUrl: 'https://picsum.photos/seed/fin-11-solution/800/400'
        }
      },
      {
        id: 'fin-12',
        upvotes: 0,
        downvotes: 0,
        title: 'Inter-Institutional Bureaucracy',
        description: 'Burocracia excesiva en las aprobaciones entre Hacienda, el Tesoro y DIGEPRES.',
        solution: {
          leader: 'Experto en Procesos',
          model: 'Cámara de Compensación Digital',
          description: 'Establecer una cámara de compensación digital centralizada para las aprobaciones entre Hacienda, el Tesoro y DIGEPRES.',
          extendedDescription: 'Establecer una cámara de compensación digital centralizada para las aprobaciones entre Hacienda, el Tesoro y DIGEPRES. Esto agilizará los procesos y reducirá la burocracia.',
          implementationSteps: ['Fase 1: Diseño del sistema', 'Fase 2: Desarrollo', 'Fase 3: Implementación'],
          expectedOutcomes: ['Procesos ágiles', 'Reducción de burocracia'],
          chartData: [{ name: 'Año 1', value: 40 }, { name: 'Año 2', value: 50 }, { name: 'Año 3', value: 60 }, { name: 'Año 4', value: 70 }, { name: 'Año 5', value: 80 }],
          imageUrl: 'https://picsum.photos/seed/fin-12-solution/800/400'
        }
      },
      {
        id: 'fin-13',
        upvotes: 0,
        downvotes: 0,
        title: 'Resistance to Standardized Systems',
        description: 'Resistencia de las entidades descentralizadas a adoptar sistemas estandarizados como SIAFE.',
        solution: {
          leader: 'Experto en Cumplimiento',
          model: 'Cumplimiento Estricto SIAFE',
          description: 'Vincular el desembolso de las asignaciones presupuestarias trimestrales para las entidades descentralizadas al estricto cumplimiento del SIAFE.',
          extendedDescription: 'Vincular el desembolso de las asignaciones presupuestarias trimestrales para las entidades descentralizadas al estricto cumplimiento del SIAFE. Esto forzará la adopción de sistemas estandarizados.',
          implementationSteps: ['Fase 1: Establecimiento de reglas', 'Fase 2: Comunicación', 'Fase 3: Ejecución'],
          expectedOutcomes: ['Adopción de SIAFE', 'Estandarización'],
          chartData: [{ name: 'Año 1', value: 45 }, { name: 'Año 2', value: 55 }, { name: 'Año 3', value: 65 }, { name: 'Año 4', value: 75 }, { name: 'Año 5', value: 85 }],
          imageUrl: 'https://picsum.photos/seed/fin-13-solution/800/400'
        }
      },
      {
        id: 'fin-14',
        upvotes: 0,
        downvotes: 0,
        title: 'Weak Decentralized Oversight',
        description: 'Supervisión débil de las agencias autónomas y entidades descentralizadas.',
        solution: {
          leader: 'Auditor General',
          model: 'Auditoría Integrada y Dashboards API',
          description: 'Desplegar auditores del tesoro integrados y exigir informes de panel de API en tiempo real para agencias autónomas.',
          extendedDescription: 'Desplegar auditores del tesoro integrados y exigir informes de panel de API en tiempo real para agencias autónomas. Esto mejorará la supervisión y la transparencia.',
          implementationSteps: ['Fase 1: Despliegue de auditores', 'Fase 2: Desarrollo de API', 'Fase 3: Monitoreo en tiempo real'],
          expectedOutcomes: ['Mejor supervisión', 'Transparencia en tiempo real'],
          chartData: [{ name: 'Año 1', value: 50 }, { name: 'Año 2', value: 60 }, { name: 'Año 3', value: 70 }, { name: 'Año 4', value: 80 }, { name: 'Año 5', value: 90 }],
          imageUrl: 'https://picsum.photos/seed/fin-14-solution/800/400'
        }
      },
      {
        id: 'fin-15',
        upvotes: 0,
        downvotes: 0,
        title: 'Human Capital Deficits',
        description: 'Déficit de capital humano capacitado en el Tesoro.',
        solution: {
          leader: 'Experto en RRHH',
          model: 'Academia del Tesoro',
          description: 'Crear una "Academia del Tesoro" para la educación continua e implementar una compensación basada en el desempeño.',
          extendedDescription: 'Crear una "Academia del Tesoro" para la educación continua e implementar una compensación basada en el desempeño. Esto mejorará las habilidades y la motivación del personal.',
          implementationSteps: ['Fase 1: Diseño de la academia', 'Fase 2: Desarrollo de currículo', 'Fase 3: Implementación de compensación'],
          expectedOutcomes: ['Personal capacitado', 'Mayor motivación'],
          chartData: [{ name: 'Año 1', value: 55 }, { name: 'Año 2', value: 65 }, { name: 'Año 3', value: 75 }, { name: 'Año 4', value: 85 }, { name: 'Año 5', value: 95 }],
          imageUrl: 'https://picsum.photos/seed/fin-15-solution/800/400'
        }
      },
      {
        id: 'fin-16',
        upvotes: 0,
        downvotes: 0,
        title: 'Cybersecurity Vulnerabilities',
        description: 'Vulnerabilidades de ciberseguridad en los sistemas financieros del estado.',
        solution: {
          leader: 'Experto en Ciberseguridad',
          model: 'Arquitectura Zero-Trust',
          description: 'Asociarse con agencias internacionales para implementar una arquitectura de confianza cero (zero-trust) y autenticación multifactor.',
          extendedDescription: 'Asociarse con agencias internacionales para implementar una arquitectura de confianza cero (zero-trust) y autenticación multifactor. Esto protegerá los sistemas financieros contra ciberataques.',
          implementationSteps: ['Fase 1: Evaluación de seguridad', 'Fase 2: Implementación zero-trust', 'Fase 3: Monitoreo continuo'],
          expectedOutcomes: ['Sistemas seguros', 'Reducción de vulnerabilidades'],
          chartData: [{ name: 'Año 1', value: 60 }, { name: 'Año 2', value: 70 }, { name: 'Año 3', value: 80 }, { name: 'Año 4', value: 90 }, { name: 'Año 5', value: 100 }],
          imageUrl: 'https://picsum.photos/seed/fin-16-solution/800/400'
        }
      },
      {
        id: 'fin-17',
        upvotes: 0,
        downvotes: 0,
        title: 'Fragmented Information Systems',
        description: 'Sistemas de información fragmentados en el Sector Público No Financiero.',
        solution: {
          leader: 'Experto en TI',
          model: 'Despliegue Universal SIGEF',
          description: 'Acelerar el despliegue universal de SIGEF en el Sector Público No Financiero para una interoperabilidad total de los datos.',
          extendedDescription: 'Acelerar el despliegue universal de SIGEF en el Sector Público No Financiero para una interoperabilidad total de los datos. Esto unificará la información financiera del estado.',
          implementationSteps: ['Fase 1: Planificación del despliegue', 'Fase 2: Ejecución', 'Fase 3: Integración de datos'],
          expectedOutcomes: ['Sistemas unificados', 'Interoperabilidad de datos'],
          chartData: [{ name: 'Año 1', value: 65 }, { name: 'Año 2', value: 75 }, { name: 'Año 3', value: 85 }, { name: 'Año 4', value: 95 }, { name: 'Año 5', value: 105 }],
          imageUrl: 'https://picsum.photos/seed/fin-17-solution/800/400'
        }
      },
      {
        id: 'fin-18',
        upvotes: 0,
        downvotes: 0,
        title: 'Infrastructure Obsolescence',
        description: 'Obsolescencia de la infraestructura tecnológica central.',
        solution: {
          leader: 'Experto en Cloud',
          model: 'Infraestructura de Nube Soberana',
          description: 'Hacer la transición de las operaciones principales a una infraestructura de nube soberana segura para garantizar el cumplimiento moderno de NORTIC.',
          extendedDescription: 'Hacer la transición de las operaciones principales a una infraestructura de nube soberana segura para garantizar el cumplimiento moderno de NORTIC. Esto modernizará la infraestructura tecnológica.',
          implementationSteps: ['Fase 1: Diseño de la nube', 'Fase 2: Migración', 'Fase 3: Operación y mantenimiento'],
          expectedOutcomes: ['Infraestructura moderna', 'Cumplimiento NORTIC'],
          chartData: [{ name: 'Año 1', value: 70 }, { name: 'Año 2', value: 80 }, { name: 'Año 3', value: 90 }, { name: 'Año 4', value: 100 }, { name: 'Año 5', value: 110 }],
          imageUrl: 'https://picsum.photos/seed/fin-18-solution/800/400'
        }
      },
      {
        id: 'fin-19',
        upvotes: 0,
        downvotes: 0,
        title: 'Internal Alignment Constraints',
        description: 'Falta de alineación interna y cultura de eficiencia operativa.',
        solution: {
          leader: 'Experto en Gestión del Cambio',
          model: 'Programas OKR y Gestión del Cambio',
          description: 'Implementar programas de gestión del cambio y marcos OKR para construir una cultura de eficiencia operativa.',
          extendedDescription: 'Implementar programas de gestión del cambio y marcos OKR para construir una cultura de eficiencia operativa. Esto alineará los objetivos y mejorará el desempeño.',
          implementationSteps: ['Fase 1: Diseño de OKRs', 'Fase 2: Capacitación', 'Fase 3: Seguimiento y evaluación'],
          expectedOutcomes: ['Alineación interna', 'Cultura de eficiencia'],
          chartData: [{ name: 'Año 1', value: 75 }, { name: 'Año 2', value: 85 }, { name: 'Año 3', value: 95 }, { name: 'Año 4', value: 105 }, { name: 'Año 5', value: 115 }],
          imageUrl: 'https://picsum.photos/seed/fin-19-solution/800/400'
        }
      },
      {
        id: 'fin-20',
        upvotes: 0,
        downvotes: 0,
        title: 'Dependency on Debt Financing',
        description: 'Dependencia excesiva del financiamiento de la deuda externa.',
        solution: {
          leader: 'Experto Financiero',
          model: 'Desarrollo de Mercados de Capitales Locales',
          description: 'Desarrollar mercados de capitales locales más profundos e incentivar el ahorro interno para reducir la dependencia de los bonos extranjeros.',
          extendedDescription: 'Desarrollar mercados de capitales locales más profundos e incentivar el ahorro interno para reducir la dependencia de los bonos extranjeros. Esto mejorará la soberanía financiera.',
          implementationSteps: ['Fase 1: Marco regulatorio', 'Fase 2: Incentivos al ahorro', 'Fase 3: Desarrollo del mercado'],
          expectedOutcomes: ['Menor dependencia externa', 'Mercados locales fuertes'],
          chartData: [{ name: 'Año 1', value: 80 }, { name: 'Año 2', value: 90 }, { name: 'Año 3', value: 100 }, { name: 'Año 4', value: 110 }, { name: 'Año 5', value: 120 }],
          imageUrl: 'https://picsum.photos/seed/fin-20-solution/800/400'
        }
      },
      {
        id: 'fin-21',
        upvotes: 0,
        downvotes: 0,
        title: 'Climate Change Contingencies',
        description: 'Falta de contingencias financieras para desastres relacionados con el cambio climático.',
        solution: {
          leader: 'Experto en Riesgos',
          model: 'Bonos Catástrofe y Líneas de Crédito',
          description: 'Emitir bonos catástrofe y asegurar líneas de crédito contingentes con multilaterales para el alivio de desastres.',
          extendedDescription: 'Emitir bonos catástrofe y asegurar líneas de crédito contingentes con multilaterales para el alivio de desastres. Esto proporcionará resiliencia financiera ante eventos climáticos.',
          implementationSteps: ['Fase 1: Evaluación de riesgos', 'Fase 2: Estructuración de bonos', 'Fase 3: Negociación de líneas de crédito'],
          expectedOutcomes: ['Resiliencia financiera', 'Fondos para desastres'],
          chartData: [{ name: 'Año 1', value: 85 }, { name: 'Año 2', value: 95 }, { name: 'Año 3', value: 105 }, { name: 'Año 4', value: 115 }, { name: 'Año 5', value: 125 }],
          imageUrl: 'https://picsum.photos/seed/fin-21-solution/800/400'
        }
      },
      {
        id: 'fin-22',
        upvotes: 0,
        downvotes: 0,
        title: 'Credit Rating Vulnerabilities',
        description: 'Vulnerabilidades en la calificación crediticia del país.',
        solution: {
          leader: 'Experto Financiero',
          model: 'Transparencia y Diálogo Proactivo',
          description: 'Publicar informes mensuales transparentes de riesgo fiscal y mantener diálogos proactivos con las agencias calificadoras.',
          extendedDescription: 'Publicar informes mensuales transparentes de riesgo fiscal y mantener diálogos proactivos con las agencias calificadoras. Esto mejorará la percepción de riesgo y la calificación crediticia.',
          implementationSteps: ['Fase 1: Diseño de informes', 'Fase 2: Publicación mensual', 'Fase 3: Diálogo con agencias'],
          expectedOutcomes: ['Mejor calificación crediticia', 'Transparencia fiscal'],
          chartData: [{ name: 'Año 1', value: 90 }, { name: 'Año 2', value: 100 }, { name: 'Año 3', value: 110 }, { name: 'Año 4', value: 120 }, { name: 'Año 5', value: 130 }],
          imageUrl: 'https://picsum.photos/seed/fin-22-solution/800/400'
        }
      },
      {
        id: 'fin-23',
        upvotes: 0,
        downvotes: 0,
        title: 'Global Economic Shocks',
        description: 'Vulnerabilidad ante choques económicos globales y volatilidad.',
        solution: {
          leader: 'Experto Financiero',
          model: 'Gestión Activa de Pasivos',
          description: 'Ejecutar una gestión activa de pasivos de deuda soberana (por ejemplo, swaps de tasas de interés) para protegerse contra la volatilidad.',
          extendedDescription: 'Ejecutar una gestión activa de pasivos de deuda soberana (por ejemplo, swaps de tasas de interés) para protegerse contra la volatilidad. Esto mitigará los riesgos financieros globales.',
          implementationSteps: ['Fase 1: Análisis de exposición', 'Fase 2: Ejecución de swaps', 'Fase 3: Monitoreo de riesgos'],
          expectedOutcomes: ['Protección contra volatilidad', 'Mitigación de riesgos'],
          chartData: [{ name: 'Año 1', value: 95 }, { name: 'Año 2', value: 105 }, { name: 'Año 3', value: 115 }, { name: 'Año 4', value: 125 }, { name: 'Año 5', value: 135 }],
          imageUrl: 'https://picsum.photos/seed/fin-23-solution/800/400'
        }
      }
    ]
  },
  {
    id: 'infrastructure',
    title: 'Infraestructura',
    icon: Building2,
    overview: 'El "Marco de Cimientos Resilientes" que aborda la brecha de infraestructura física en vivienda, transporte, agua y energía.',
    megaproject: {
      title: 'El Eje Ferroviario (Logística Nacional) y El Escudo Hídrico y Sanitario (Resiliencia Urbana)',
      premise: 'Sacar la carga pesada de las carreteras para salvar vidas, reducir el tráfico urbano y abaratar los fletes. Además, una ciudad de primer mundo no se inunda con una vaguada, ni vierte sus heces en el mar que le da de comer al turismo.',
      description: 'Un sistema de trenes 100% eléctricos controlados por IA. Incluye un Corredor Industrial (Norte-Sur) y un Corredor Turístico (Este-Oeste), con puertos secos periféricos. Financiado por peajes de carga. Adicionalmente, un sistema pluvial de túneles profundos (Modelo Suizo) y mega-plantas de bio-filtración (Modelo Singapur) para abolir pozos sépticos, financiado con Bonos Verdes y captura de plusvalía.',
      details: [
        'Corredor Industrial (Norte-Sur): Une los megapuertos (Caucedo/Haina) directamente con las fábricas de Santiago.',
        'Corredor Turístico (Este-Oeste): Une el aeropuerto y los hoteles de Punta Cana con Santo Domingo.',
        'Puertos Secos: Terminales periféricas automatizadas con flotillas eléctricas para la "última milla".',
        'Sistema Pluvial: Túneles masivos a 40 metros bajo tierra que actúan como cisternas gigantes.',
        'Sistema Sanitario: Abolición total de los pozos sépticos y construcción de mega-plantas de bio-filtración.'
      ]
    ,
      timeline: [
        { phase: '2026-2027', description: 'Fase inicial de planificación, auditoría y diseño arquitectónico.' },
        { phase: '2028-2029', description: 'Despliegue de infraestructura base y programas piloto en zonas clave.' },
        { phase: '2030+', description: 'Expansión a nivel nacional, optimización continua y evaluación de impacto.' }
      ],
      partners: ['Banco Interamericano de Desarrollo (BID)', 'Ministerio de Economía, Planificación y Desarrollo', 'Sector Privado Local', 'ONGs Internacionales', 'Agencias de Cooperación (USAID, JICA)']
    },
    problems: [
      {
        id: 'inf-1',
        upvotes: 0,
        downvotes: 0,
        title: 'Déficit Severo de Vivienda',
        description: 'Un déficit de 2.1 millones de unidades de vivienda, en su mayoría cualitativo, que impacta severamente los niveles de vida.',
        solution: {
          leader: 'Lee Kuan Yew',
          model: 'Infraestructura de Singapur',
          description: 'Establecer una Junta de Vivienda y Desarrollo (HDB). Aprovechar los ahorros del fondo de previsión obligatorio para financiar y construir viviendas públicas verticales altamente integradas.',
          extendedDescription: `La implementación del modelo de Lee Kuan Yew requiere una reestructuración profunda. Establecer una Junta de Vivienda y Desarrollo (HDB). Aprovechar los ahorros del fondo de previsión obligatorio para financiar y construir viviendas públicas verticales altamente integradas. Esto implica un cambio radical en la forma en que abordamos el problema de "Déficit Severo de Vivienda", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Infraestructura de Singapur (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Infraestructura de Singapur.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 40 },
            { name: 'Año 2', value: 75 },
            { name: 'Año 3', value: 115 },
            { name: 'Año 4', value: 160 },
            { name: 'Año 5', value: 220 }
          ],
          imageUrl: 'https://picsum.photos/seed/infrastructure-solution/800/400'
        }
      },
      {
        id: 'inf-2',
        upvotes: 0,
        downvotes: 0,
        title: 'Congestión del Tráfico Urbano',
        description: 'El grave embotellamiento en Santo Domingo paraliza la productividad económica y degrada la calidad de vida.',
        solution: {
          leader: 'Lee Kuan Yew',
          model: 'Modelo de Singapur',
          description: 'Implementar la Tarificación Vial Electrónica (ERP). Desplegar un cargo por congestión dinámico, protegiendo los ingresos exclusivamente para financiar la expansión del transporte masivo.',
          extendedDescription: `La implementación del modelo de Lee Kuan Yew requiere una reestructuración profunda. Implementar la Tarificación Vial Electrónica (ERP). Desplegar un cargo por congestión dinámico, protegiendo los ingresos exclusivamente para financiar la expansión del transporte masivo. Esto implica un cambio radical en la forma en que abordamos el problema de "Congestión del Tráfico Urbano", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Modelo de Singapur (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Modelo de Singapur.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 50 },
            { name: 'Año 2', value: 90 },
            { name: 'Año 3', value: 135 },
            { name: 'Año 4', value: 185 },
            { name: 'Año 5', value: 250 }
          ],
          imageUrl: 'https://picsum.photos/seed/inf-2-solution/800/400'
        }
      },
      {
        id: 'inf-3',
        upvotes: 0,
        downvotes: 0,
        title: 'Ineficiencia de Agua y Saneamiento',
        description: 'Las altas tasas de agua no facturada y la débil capacidad de los proveedores amenazan la seguridad hídrica y los ecosistemas costeros.',
        solution: {
          leader: 'Ronald Reagan',
          model: 'Tecnología Agrícola de los Países Bajos',
          description: 'Descentralizar a través de "Waterschappen". Adoptar el modelo holandés de autoridades de agua regionales e independientes financiadas directamente por tarifas locales transparentes.',
          extendedDescription: `La implementación del modelo de Ronald Reagan requiere una reestructuración profunda. Descentralizar a través de "Waterschappen". Adoptar el modelo holandés de autoridades de agua regionales e independientes financiadas directamente por tarifas locales transparentes. Esto implica un cambio radical en la forma en que abordamos el problema de "Ineficiencia de Agua y Saneamiento", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Tecnología Agrícola de los Países Bajos (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Tecnología Agrícola de los Países Bajos.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 60 },
            { name: 'Año 2', value: 105 },
            { name: 'Año 3', value: 155 },
            { name: 'Año 4', value: 210 },
            { name: 'Año 5', value: 280 }
          ],
          imageUrl: 'https://picsum.photos/seed/inf-3-solution/800/400'
        }
      },
      {
        id: 'inf-4',
        upvotes: 0,
        downvotes: 0,
        title: 'Mantenimiento Vial Deficiente',
        description: 'Las carreteras y puentes sufren de un deterioro rápido debido a la falta de mantenimiento preventivo y sobrepeso de vehículos de carga.',
        solution: {
          leader: 'Shinzo Abe',
          model: 'Concesiones de Calidad de Japón',
          description: 'Privatizar el mantenimiento vial mediante contratos de concesión a largo plazo basados estrictamente en métricas de rendimiento y calidad de la superficie, penalizando económicamente los baches.',
          extendedDescription: `La implementación del modelo de Shinzo Abe requiere una reestructuración profunda. Privatizar el mantenimiento vial mediante contratos de concesión a largo plazo basados estrictamente en métricas de rendimiento y calidad de la superficie, penalizando económicamente los baches. Esto implica un cambio radical en la forma en que abordamos el problema de "Mantenimiento Vial Deficiente", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Concesiones de Calidad de Japón (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Concesiones de Calidad de Japón.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 20 },
            { name: 'Año 2', value: 45 },
            { name: 'Año 3', value: 75 },
            { name: 'Año 4', value: 110 },
            { name: 'Año 5', value: 160 }
          ],
          imageUrl: 'https://picsum.photos/seed/inf-4-solution/800/400'
        }
      },
      {
        id: 'inf-5',
        upvotes: 0,
        downvotes: 0,
        title: 'Vulnerabilidad Sísmica y Ciclónica',
        description: 'Gran parte de la infraestructura crítica y viviendas informales no cumplen con los códigos de construcción para resistir terremotos o huracanes de categoría 5.',
        solution: {
          leader: 'Sebastián Piñera',
          model: 'Resiliencia Estructural de Chile',
          description: 'Actualizar y hacer cumplir constantemente un código de construcción sísmica de clase mundial, ofreciendo subsidios fiscales para el reforzamiento estructural de edificios comerciales y residenciales.',
          extendedDescription: `La implementación del modelo de Sebastián Piñera requiere una reestructuración profunda. Actualizar y hacer cumplir constantemente un código de construcción sísmica de clase mundial, ofreciendo subsidios fiscales para el reforzamiento estructural de edificios comerciales y residenciales. Esto implica un cambio radical en la forma en que abordamos el problema de "Vulnerabilidad Sísmica y Ciclónica", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Resiliencia Estructural de Chile (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Resiliencia Estructural de Chile.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 30 },
            { name: 'Año 2', value: 60 },
            { name: 'Año 3', value: 95 },
            { name: 'Año 4', value: 135 },
            { name: 'Año 5', value: 190 }
          ],
          imageUrl: 'https://picsum.photos/seed/inf-5-solution/800/400'
        }
      },
      {
        id: 'inf-6',
        upvotes: 0,
        downvotes: 0,
        title: 'Drenaje Pluvial Inexistente',
        description: 'Drenaje pluvial inexistente en las principales ciudades, causando inundaciones urbanas catastróficas durante tormentas severas.',
        solution: {
          leader: 'Modelo Suizo',
          model: 'Túneles Profundos de Aguas Pluviales',
          description: 'Ejecutar un sistema subterráneo de gestión de aguas pluviales de túnel profundo al estilo suizo, financiado por un porcentaje dedicado de los impuestos inmobiliarios nacionales.',
          extendedDescription: `La implementación del modelo de Modelo Suizo requiere una reestructuración profunda. Ejecutar un sistema subterráneo de gestión de aguas pluviales de túnel profundo al estilo suizo, financiado por un porcentaje dedicado de los impuestos inmobiliarios nacionales. Esto implica un cambio radical en la forma en que abordamos el problema de "Drenaje Pluvial Inexistente", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Túneles Profundos de Aguas Pluviales (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Túneles Profundos de Aguas Pluviales.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 40 },
            { name: 'Año 2', value: 75 },
            { name: 'Año 3', value: 115 },
            { name: 'Año 4', value: 160 },
            { name: 'Año 5', value: 220 }
          ],
          imageUrl: 'https://picsum.photos/seed/inf-6-solution/800/400'
        }
      },
      {
        id: 'inf-7',
        upvotes: 0,
        downvotes: 0,
        title: 'Dependencia Total del Transporte de Carga Terrestre',
        description: 'Dependencia total del transporte de carga pesada por camiones, destruyendo carreteras y causando accidentes fatales.',
        solution: {
          leader: 'Modelo Europeo',
          model: 'Corredor Ferroviario de Carga Electrificado',
          description: 'Construir un corredor ferroviario de carga electrificado de alta velocidad que conecte directamente el Puerto de Caucedo y Haina con el centro industrial del norte en Santiago.',
          extendedDescription: `La implementación del modelo de Modelo Europeo requiere una reestructuración profunda. Construir un corredor ferroviario de carga electrificado de alta velocidad que conecte directamente el Puerto de Caucedo y Haina con el centro industrial del norte en Santiago. Esto implica un cambio radical en la forma en que abordamos el problema de "Dependencia Total del Transporte de Carga Terrestre", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Corredor Ferroviario de Carga Electrificado (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Corredor Ferroviario de Carga Electrificado.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 50 },
            { name: 'Año 2', value: 90 },
            { name: 'Año 3', value: 135 },
            { name: 'Año 4', value: 185 },
            { name: 'Año 5', value: 250 }
          ],
          imageUrl: 'https://picsum.photos/seed/inf-7-solution/800/400'
        }
      },
      {
        id: 'inf-8',
        upvotes: 0,
        downvotes: 0,
        title: 'Alta Mortalidad en Carreteras Interurbanas',
        description: 'Tasas de mortalidad extremadamente altas en las principales carreteras interurbanas (ej. Autopista Duarte) debido a cruces ilegales y mal diseño.',
        solution: {
          leader: 'Angela Merkel',
          model: 'Estándar Autobahn y Control por IA',
          description: 'Mejorar las arterias principales a los estándares de las Autobahn alemanas cerrando los puntos de acceso, reemplazando los cruces a nivel con pasos elevados y utilizando control de velocidad por IA.',
          extendedDescription: `La implementación del modelo de Angela Merkel requiere una reestructuración profunda. Mejorar las arterias principales a los estándares de las Autobahn alemanas cerrando los puntos de acceso, reemplazando los cruces a nivel con pasos elevados y utilizando control de velocidad por IA. Esto implica un cambio radical en la forma en que abordamos el problema de "Alta Mortalidad en Carreteras Interurbanas", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Estándar Autobahn y Control por IA (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Estándar Autobahn y Control por IA.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 60 },
            { name: 'Año 2', value: 105 },
            { name: 'Año 3', value: 155 },
            { name: 'Año 4', value: 210 },
            { name: 'Año 5', value: 280 }
          ],
          imageUrl: 'https://picsum.photos/seed/inf-8-solution/800/400'
        }
      },
      {
        id: 'inf-9',
        upvotes: 0,
        downvotes: 0,
        title: 'Vertederos a Cielo Abierto',
        description: 'Desastre ambiental y logístico de los vertederos municipales a cielo abierto (ej. Duquesa).',
        solution: {
          leader: 'Modelo Nórdico',
          model: 'Plantas de Conversión de Residuos en Energía (WtE)',
          description: 'Desmantelar todos los vertederos a cielo abierto y reemplazarlos con plantas de incineración de conversión de residuos en energía altamente filtradas bajo estrictas APPs.',
          extendedDescription: `La implementación del modelo de Modelo Nórdico requiere una reestructuración profunda. Desmantelar todos los vertederos a cielo abierto y reemplazarlos con plantas de incineración de conversión de residuos en energía altamente filtradas bajo estrictas APPs. Esto implica un cambio radical en la forma en que abordamos el problema de "Vertederos a Cielo Abierto", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Plantas de Conversión de Residuos en Energía (WtE) (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Plantas de Conversión de Residuos en Energía (WtE).',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 20 },
            { name: 'Año 2', value: 45 },
            { name: 'Año 3', value: 75 },
            { name: 'Año 4', value: 110 },
            { name: 'Año 5', value: 160 }
          ],
          imageUrl: 'https://picsum.photos/seed/inf-9-solution/800/400'
        }
      },
      {
        id: 'inf-10',
        upvotes: 0,
        downvotes: 0,
        title: 'Crecimiento Urbano Vertical Desregulado',
        description: 'Crecimiento urbano vertical no regulado que abruma por completo las tuberías y redes de servicios públicos de los vecindarios heredados.',
        solution: {
          leader: 'Lee Kuan Yew',
          model: 'Moratoria de Zonificación Algorítmica',
          description: 'Instituir una moratoria de zonificación algorítmica: no se emiten permisos para rascacielos a menos que el desarrollador cofinancie la mejora proporcional de la infraestructura municipal inmediata.',
          extendedDescription: `La implementación del modelo de Lee Kuan Yew requiere una reestructuración profunda. Instituir una moratoria de zonificación algorítmica: no se emiten permisos para rascacielos a menos que el desarrollador cofinancie la mejora proporcional de la infraestructura municipal inmediata. Esto implica un cambio radical en la forma en que abordamos el problema de "Crecimiento Urbano Vertical Desregulado", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Moratoria de Zonificación Algorítmica (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Moratoria de Zonificación Algorítmica.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 30 },
            { name: 'Año 2', value: 60 },
            { name: 'Año 3', value: 95 },
            { name: 'Año 4', value: 135 },
            { name: 'Año 5', value: 190 }
          ],
          imageUrl: 'https://picsum.photos/seed/inf-10-solution/800/400'
        }
      },
      {
        id: 'inf-11',
        upvotes: 0,
        downvotes: 0,
        title: 'Cuellos de Botella Logísticos en Puertos',
        description: 'Cuellos de botella logísticos masivos y estacionamiento de camiones que paralizan el acceso a los principales puertos comerciales.',
        solution: {
          leader: 'Modelo de Singapur',
          model: 'Puertos Secos Gestionados por IA',
          description: 'Desarrollar "puertos secos" interiores gestionados por IA fuera de los límites de la ciudad, conectados a los puertos marítimos a través de corredores elevados exclusivos para camiones financiados con peajes.',
          extendedDescription: `La implementación del modelo de Modelo de Singapur requiere una reestructuración profunda. Desarrollar "puertos secos" interiores gestionados por IA fuera de los límites de la ciudad, conectados a los puertos marítimos a través de corredores elevados exclusivos para camiones financiados con peajes. Esto implica un cambio radical en la forma en que abordamos el problema de "Cuellos de Botella Logísticos en Puertos", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Puertos Secos Gestionados por IA (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Puertos Secos Gestionados por IA.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 40 },
            { name: 'Año 2', value: 75 },
            { name: 'Año 3', value: 115 },
            { name: 'Año 4', value: 160 },
            { name: 'Año 5', value: 220 }
          ],
          imageUrl: 'https://picsum.photos/seed/inf-11-solution/800/400'
        }
      },
      {
        id: 'inf-12',
        upvotes: 0,
        downvotes: 0,
        title: 'Contaminación Visual y Riesgo de Cableado Aéreo',
        description: 'Redes peligrosas y visualmente contaminantes de cableado aéreo de telecomunicaciones y electricidad.',
        solution: {
          leader: 'Modelo Europeo',
          model: 'Programa de Soterramiento Obligatorio',
          description: 'Exigir un programa de soterramiento en fases de 10 años donde las empresas de servicios públicos se vean legalmente obligadas a enterrar todos los cables, financiado conjuntamente por los sectores de telecomunicaciones y energía.',
          extendedDescription: `La implementación del modelo de Modelo Europeo requiere una reestructuración profunda. Exigir un programa de soterramiento en fases de 10 años donde las empresas de servicios públicos se vean legalmente obligadas a enterrar todos los cables, financiado conjuntamente por los sectores de telecomunicaciones y energía. Esto implica un cambio radical en la forma en que abordamos el problema de "Contaminación Visual y Riesgo de Cableado Aéreo", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Programa de Soterramiento Obligatorio (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Programa de Soterramiento Obligatorio.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 50 },
            { name: 'Año 2', value: 90 },
            { name: 'Año 3', value: 135 },
            { name: 'Año 4', value: 185 },
            { name: 'Año 5', value: 250 }
          ],
          imageUrl: 'https://picsum.photos/seed/inf-12-solution/800/400'
        }
      },
      {
        id: 'inf-13',
        upvotes: 0,
        downvotes: 0,
        title: 'Ausencia de Aceras Transitables',
        description: 'Ausencia virtual de aceras transitables y continuas, obligando a los peatones a invadir carriles de tráfico peligrosos.',
        solution: {
          leader: 'Anne Hidalgo',
          model: 'Recuperación del Derecho de Vía Peatonal',
          description: 'Recuperar el derecho de vía público instalando bolardos de acero físicos y utilizando flotas de grúas automatizadas para penalizar constantemente a los vehículos estacionados en infraestructura peatonal.',
          extendedDescription: `La implementación del modelo de Anne Hidalgo requiere una reestructuración profunda. Recuperar el derecho de vía público instalando bolardos de acero físicos y utilizando flotas de grúas automatizadas para penalizar constantemente a los vehículos estacionados en infraestructura peatonal. Esto implica un cambio radical en la forma en que abordamos el problema de "Ausencia de Aceras Transitables", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Recuperación del Derecho de Vía Peatonal (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Recuperación del Derecho de Vía Peatonal.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 60 },
            { name: 'Año 2', value: 105 },
            { name: 'Año 3', value: 155 },
            { name: 'Año 4', value: 210 },
            { name: 'Año 5', value: 280 }
          ],
          imageUrl: 'https://picsum.photos/seed/inf-13-solution/800/400'
        }
      },
      {
        id: 'inf-14',
        upvotes: 0,
        downvotes: 0,
        title: 'Desconexión de Tránsito Masivo en Aeropuertos',
        description: 'Falta de tránsito público de alta capacidad que conecte los principales aeropuertos internacionales con los centros urbanos.',
        solution: {
          leader: 'Modelo Asiático',
          model: 'Conexión Ferroviaria Aeroportuaria de Alta Velocidad',
          description: 'Construir ramales ferroviarios directos de alta velocidad que conecten los aeropuertos internacionales de Las Américas (AILA) y el Cibao directamente con los centros de Metro centrales de sus respectivas ciudades.',
          extendedDescription: `La implementación del modelo de Modelo Asiático requiere una reestructuración profunda. Construir ramales ferroviarios directos de alta velocidad que conecten los aeropuertos internacionales de Las Américas (AILA) y el Cibao directamente con los centros de Metro centrales de sus respectivas ciudades. Esto implica un cambio radical en la forma en que abordamos el problema de "Desconexión de Tránsito Masivo en Aeropuertos", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Conexión Ferroviaria Aeroportuaria de Alta Velocidad (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Conexión Ferroviaria Aeroportuaria de Alta Velocidad.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 20 },
            { name: 'Año 2', value: 45 },
            { name: 'Año 3', value: 75 },
            { name: 'Año 4', value: 110 },
            { name: 'Año 5', value: 160 }
          ],
          imageUrl: 'https://picsum.photos/seed/inf-14-solution/800/400'
        }
      },
      {
        id: 'inf-15',
        upvotes: 0,
        downvotes: 0,
        title: 'Deterioro de Caminos Vecinales',
        description: 'Redes de caminos rurales (caminos vecinales) degradadas que aíslan a los sectores agrícolas y las comunidades rurales.',
        solution: {
          leader: 'Paul Kagame',
          model: 'Cuerpo de Ingenieros y Estabilización de Suelos',
          description: 'Desplegar el Cuerpo de Ingenieros de las Fuerzas Armadas equipado con puentes de acero modulares y prefabricados y tecnología de estabilización de suelos con polímeros para endurecer permanentemente las arterias rurales.',
          extendedDescription: `La implementación del modelo de Paul Kagame requiere una reestructuración profunda. Desplegar el Cuerpo de Ingenieros de las Fuerzas Armadas equipado con puentes de acero modulares y prefabricados y tecnología de estabilización de suelos con polímeros para endurecer permanentemente las arterias rurales. Esto implica un cambio radical en la forma en que abordamos el problema de "Deterioro de Caminos Vecinales", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Cuerpo de Ingenieros y Estabilización de Suelos (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Cuerpo de Ingenieros y Estabilización de Suelos.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 30 },
            { name: 'Año 2', value: 60 },
            { name: 'Año 3', value: 95 },
            { name: 'Año 4', value: 135 },
            { name: 'Año 5', value: 190 }
          ],
          imageUrl: 'https://picsum.photos/seed/inf-15-solution/800/400'
        }
      },
      {
        id: 'inf-16',
        upvotes: 0,
        downvotes: 0,
        title: 'Asentamientos Informales Vulnerables en Riberas',
        description: 'Asentamientos informales altamente vulnerables construidos precariamente en riberas propensas a inundaciones (Ozama, Isabela).',
        solution: {
          leader: 'Lee Kuan Yew',
          model: 'Reubicación por Dominio Eminente y Parques Ecológicos',
          description: 'Ejecutar un programa de reubicación por dominio eminente al estilo de Singapur, trasladando a los residentes a viviendas modulares seguras y convirtiendo permanentemente las riberas en parques ecológicos protegidos.',
          extendedDescription: `La implementación del modelo de Lee Kuan Yew requiere una reestructuración profunda. Ejecutar un programa de reubicación por dominio eminente al estilo de Singapur, trasladando a los residentes a viviendas modulares seguras y convirtiendo permanentemente las riberas en parques ecológicos protegidos. Esto implica un cambio radical en la forma en que abordamos el problema de "Asentamientos Informales Vulnerables en Riberas", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Reubicación por Dominio Eminente y Parques Ecológicos (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Reubicación por Dominio Eminente y Parques Ecológicos.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 40 },
            { name: 'Año 2', value: 75 },
            { name: 'Año 3', value: 115 },
            { name: 'Año 4', value: 160 },
            { name: 'Año 5', value: 220 }
          ],
          imageUrl: 'https://picsum.photos/seed/inf-16-solution/800/400'
        }
      },
      {
        id: 'inf-17',
        upvotes: 0,
        downvotes: 0,
        title: 'Déficit Severo de Estacionamiento Público',
        description: 'Déficit severo de estacionamiento público urbano que causa un estancamiento estructural en las calles secundarias.',
        solution: {
          leader: 'Modelo Japonés',
          model: 'Estacionamientos Robóticos y Parquímetros Dinámicos',
          description: 'Desplegar garajes de estacionamiento robóticos automatizados de alta densidad en terrenos estatales, financiados mediante la implementación de parquímetros algorítmicos de precios dinámicos en toda la ciudad.',
          extendedDescription: `La implementación del modelo de Modelo Japonés requiere una reestructuración profunda. Desplegar garajes de estacionamiento robóticos automatizados de alta densidad en terrenos estatales, financiados mediante la implementación de parquímetros algorítmicos de precios dinámicos en toda la ciudad. Esto implica un cambio radical en la forma en que abordamos el problema de "Déficit Severo de Estacionamiento Público", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Estacionamientos Robóticos y Parquímetros Dinámicos (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Estacionamientos Robóticos y Parquímetros Dinámicos.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 50 },
            { name: 'Año 2', value: 90 },
            { name: 'Año 3', value: 135 },
            { name: 'Año 4', value: 185 },
            { name: 'Año 5', value: 250 }
          ],
          imageUrl: 'https://picsum.photos/seed/inf-17-solution/800/400'
        }
      },
      {
        id: 'inf-18',
        upvotes: 0,
        downvotes: 0,
        title: 'Erosión Costera y Degradación de Malecones',
        description: 'Rápida erosión costera y degradación de los frentes marítimos urbanos (Malecón) debido a marejadas ciclónicas.',
        solution: {
          leader: 'Modelo Holandés',
          model: 'Rompeolas en Alta Mar y Arrecifes Artificiales',
          description: 'Diseñar rompeolas en alta mar al estilo holandés y sistemas de arrecifes artificiales para disipar la energía de las olas, junto con una restauración agresiva y legalmente protegida de manglares y dunas.',
          extendedDescription: `La implementación del modelo de Modelo Holandés requiere una reestructuración profunda. Diseñar rompeolas en alta mar al estilo holandés y sistemas de arrecifes artificiales para disipar la energía de las olas, junto con una restauración agresiva y legalmente protegida de manglares y dunas. Esto implica un cambio radical en la forma en que abordamos el problema de "Erosión Costera y Degradación de Malecones", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Rompeolas en Alta Mar y Arrecifes Artificiales (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Rompeolas en Alta Mar y Arrecifes Artificiales.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 60 },
            { name: 'Año 2', value: 105 },
            { name: 'Año 3', value: 155 },
            { name: 'Año 4', value: 210 },
            { name: 'Año 5', value: 280 }
          ],
          imageUrl: 'https://picsum.photos/seed/inf-18-solution/800/400'
        }
      },
      {
        id: 'inf-19',
        upvotes: 0,
        downvotes: 0,
        title: 'Escasez de Espacios Verdes y Parques',
        description: 'Proporción abismal de espacios públicos verdes y parques per cápita en las principales áreas metropolitanas.',
        solution: {
          leader: 'Michael Bloomberg',
          model: 'Rezonificación de Sitios Industriales Abandonados',
          description: 'Auditar y rezonificar inmediatamente todos los sitios industriales abandonados y propiedades estatales sin uso dentro de los límites de la ciudad estrictamente para el desarrollo de parques públicos de alto dosel.',
          extendedDescription: `La implementación del modelo de Michael Bloomberg requiere una reestructuración profunda. Auditar y rezonificar inmediatamente todos los sitios industriales abandonados y propiedades estatales sin uso dentro de los límites de la ciudad estrictamente para el desarrollo de parques públicos de alto dosel. Esto implica un cambio radical en la forma en que abordamos el problema de "Escasez de Espacios Verdes y Parques", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Rezonificación de Sitios Industriales Abandonados (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Rezonificación de Sitios Industriales Abandonados.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 20 },
            { name: 'Año 2', value: 45 },
            { name: 'Año 3', value: 75 },
            { name: 'Año 4', value: 110 },
            { name: 'Año 5', value: 160 }
          ],
          imageUrl: 'https://picsum.photos/seed/inf-19-solution/800/400'
        }
      },
      {
        id: 'inf-20',
        upvotes: 0,
        downvotes: 0,
        title: 'Cultura de "Construir y Olvidar" en Obras Públicas',
        description: 'Una cultura sistémica de "construir y olvidar" que resulta en el rápido deterioro de las obras públicas recién inauguradas.',
        solution: {
          leader: 'Modelo Suizo',
          model: 'Fondo Fiduciario de Mantenimiento Automatizado',
          description: 'Consagrar una ley que requiera que el 10% del presupuesto de capital para cualquier nueva infraestructura pública quede bloqueado permanentemente en un fondo fiduciario de mantenimiento automatizado que genere rendimientos.',
          extendedDescription: `La implementación del modelo de Modelo Suizo requiere una reestructuración profunda. Consagrar una ley que requiera que el 10% del presupuesto de capital para cualquier nueva infraestructura pública quede bloqueado permanentemente en un fondo fiduciario de mantenimiento automatizado que genere rendimientos. Esto implica un cambio radical en la forma en que abordamos el problema de "Cultura de "Construir y Olvidar" en Obras Públicas", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Fondo Fiduciario de Mantenimiento Automatizado (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Fondo Fiduciario de Mantenimiento Automatizado.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 30 },
            { name: 'Año 2', value: 60 },
            { name: 'Año 3', value: 95 },
            { name: 'Año 4', value: 135 },
            { name: 'Año 5', value: 190 }
          ],
          imageUrl: 'https://picsum.photos/seed/inf-20-solution/800/400'
        }
      }
    ]
  },
  {
    id: 'innovation',
    title: 'Innovación y Tecnología',
    icon: Lightbulb,
    overview: 'El "Protocolo de la Isla de Silicio" para diseñar activamente un ecosistema de alta tecnología, atraer capital global y cerrar la brecha digital.',
    megaproject: {
      title: '"Silicon Hub" del Caribe y Gobierno 100% Paperless',
      description: 'Construcción de una Zona Franca Tecnológica de alta seguridad dedicada exclusivamente al ensamblaje, empaquetado y prueba de semiconductores (microchips) para capitalizar el nearshoring global. A nivel estatal, el megaproyecto es la "Ley Digital-by-Default": la destrucción legal de todo trámite burocrático, sello físico o papel, operando el gobierno enteramente en la nube.'
        ,
      timeline: [
        { phase: '2026-2027', description: 'Fase inicial de planificación, auditoría y diseño arquitectónico.' },
        { phase: '2028-2029', description: 'Despliegue de infraestructura base y programas piloto en zonas clave.' },
        { phase: '2030+', description: 'Expansión a nivel nacional, optimización continua y evaluación de impacto.' }
      ],
      partners: ['Banco Interamericano de Desarrollo (BID)', 'Ministerio de Economía, Planificación y Desarrollo', 'Sector Privado Local', 'ONGs Internacionales', 'Agencias de Cooperación (USAID, JICA)']
    },
    problems: [
      {
        id: 'inn-1',
        upvotes: 0,
        downvotes: 0,
        title: 'Inversión Estancada en I+D',
        description: 'El país invierte un pésimo 0.3% de su PIB en Investigación y Desarrollo, sofocando el avance tecnológico.',
        solution: {
          leader: 'Elon Musk',
          model: 'Innovación Suiza',
          description: 'Implementar el Modelo Innosuisse suizo. El estado cofinancia hasta el 70% de los costos de I+D, estrictamente vinculado a un socio de implementación del sector privado.',
          extendedDescription: `La implementación del modelo de Elon Musk requiere una reestructuración profunda. Implementar el Modelo Innosuisse suizo. El estado cofinancia hasta el 70% de los costos de I+D, estrictamente vinculado a un socio de implementación del sector privado. Esto implica un cambio radical en la forma en que abordamos el problema de "Inversión Estancada en I+D", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Innovación Suiza (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Innovación Suiza.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 40 },
            { name: 'Año 2', value: 75 },
            { name: 'Año 3', value: 115 },
            { name: 'Año 4', value: 160 },
            { name: 'Año 5', value: 220 }
          ],
          imageUrl: 'https://picsum.photos/seed/innovation-solution/800/400'
        }
      },
      {
        id: 'inn-2',
        upvotes: 0,
        downvotes: 0,
        title: 'Falta de Capital para Startups',
        description: 'Clasificado en el puesto 106 a nivel mundial en viabilidad del ecosistema de startups, sufriendo de una grave falta de financiación de riesgo.',
        solution: {
          leader: 'Javier Milei',
          model: 'Finanzas de Singapur',
          description: 'Lanzar un equivalente a "Startup SG Equity". El gobierno co-invierte estrictamente junto con capitalistas de riesgo de terceros calificados en startups de tecnología profunda.',
          extendedDescription: `La implementación del modelo de Javier Milei requiere una reestructuración profunda. Lanzar un equivalente a "Startup SG Equity". El gobierno co-invierte estrictamente junto con capitalistas de riesgo de terceros calificados en startups de tecnología profunda. Esto implica un cambio radical en la forma en que abordamos el problema de "Falta de Capital para Startups", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Finanzas de Singapur (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Finanzas de Singapur.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 50 },
            { name: 'Año 2', value: 90 },
            { name: 'Año 3', value: 135 },
            { name: 'Año 4', value: 185 },
            { name: 'Año 5', value: 250 }
          ],
          imageUrl: 'https://picsum.photos/seed/inn-2-solution/800/400'
        }
      },
      {
        id: 'inn-3',
        upvotes: 0,
        downvotes: 0,
        title: 'Brecha Severa de Habilidades Digitales',
        description: 'Menos del 50% de la población posee habilidades digitales básicas, lo que frena el crecimiento del sector tecnológico.',
        solution: {
          leader: 'Elon Musk',
          model: 'Corea del Sur Digital',
          description: 'Desplegar Tutores Digitales impulsados por IA a nivel nacional para automatizar la calificación y adaptarse al ritmo individual de los estudiantes en matemáticas y programación.',
          extendedDescription: `La implementación del modelo de Elon Musk requiere una reestructuración profunda. Desplegar Tutores Digitales impulsados por IA a nivel nacional para automatizar la calificación y adaptarse al ritmo individual de los estudiantes en matemáticas y programación. Esto implica un cambio radical en la forma en que abordamos el problema de "Brecha Severa de Habilidades Digitales", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Corea del Sur Digital (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Corea del Sur Digital.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 60 },
            { name: 'Año 2', value: 105 },
            { name: 'Año 3', value: 155 },
            { name: 'Año 4', value: 210 },
            { name: 'Año 5', value: 280 }
          ],
          imageUrl: 'https://picsum.photos/seed/inn-3-solution/800/400'
        }
      },
      {
        id: 'inn-4',
        upvotes: 0,
        downvotes: 0,
        title: 'Fuga de Cerebros Tecnológicos',
        description: 'Los ingenieros y desarrolladores más talentosos emigran a Norteamérica o Europa debido a la falta de oportunidades locales competitivas.',
        solution: {
          leader: 'Lee Kuan Yew',
          model: 'Atracción de Talento de Singapur',
          description: 'Crear zonas francas tecnológicas libres de impuestos para empresas globales de software, condicionadas a la contratación y capacitación de talento local con salarios competitivos a nivel internacional.',
          extendedDescription: `La implementación del modelo de Lee Kuan Yew requiere una reestructuración profunda. Crear zonas francas tecnológicas libres de impuestos para empresas globales de software, condicionadas a la contratación y capacitación de talento local con salarios competitivos a nivel internacional. Esto implica un cambio radical en la forma en que abordamos el problema de "Fuga de Cerebros Tecnológicos", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Atracción de Talento de Singapur (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Atracción de Talento de Singapur.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 20 },
            { name: 'Año 2', value: 45 },
            { name: 'Año 3', value: 75 },
            { name: 'Año 4', value: 110 },
            { name: 'Año 5', value: 160 }
          ],
          imageUrl: 'https://picsum.photos/seed/inn-4-solution/800/400'
        }
      },
      {
        id: 'inn-5',
        upvotes: 0,
        downvotes: 0,
        title: 'Baja Tasa de Patentes y Propiedad Intelectual',
        description: 'La producción de patentes comerciales es casi nula, limitando la creación de valor económico a partir de ideas locales.',
        solution: {
          leader: 'Yoon Suk-yeol',
          model: 'Incentivos de Patentes de Corea del Sur',
          description: 'Establecer un sistema de "Patent Box" que reduzca el impuesto corporativo al 5% para los ingresos generados exclusivamente a partir de propiedad intelectual registrada y desarrollada en la RD.',
          extendedDescription: `La implementación del modelo de Yoon Suk-yeol requiere una reestructuración profunda. Establecer un sistema de "Patent Box" que reduzca el impuesto corporativo al 5% para los ingresos generados exclusivamente a partir de propiedad intelectual registrada y desarrollada en la RD. Esto implica un cambio radical en la forma en que abordamos el problema de "Baja Tasa de Patentes y Propiedad Intelectual", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Incentivos de Patentes de Corea del Sur (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Incentivos de Patentes de Corea del Sur.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 30 },
            { name: 'Año 2', value: 60 },
            { name: 'Año 3', value: 95 },
            { name: 'Año 4', value: 135 },
            { name: 'Año 5', value: 190 }
          ],
          imageUrl: 'https://picsum.photos/seed/inn-5-solution/800/400'
        }
      },
      {
        id: 'inn-6',
        upvotes: 0,
        downvotes: 0,
        title: 'The Digital Divide (Urban vs. Rural)',
        description: 'Brecha digital significativa entre áreas urbanas y provincias rurales desatendidas.',
        solution: {
          leader: 'Experto en Telecomunicaciones',
          model: 'Fondo de Servicio Universal',
          description: 'Utilizar el Fondo de Servicio Universal de Indotel para subsidiar agresivamente la expansión de internet satelital y de fibra óptica en provincias rurales desatendidas.',
          extendedDescription: 'Utilizar el Fondo de Servicio Universal de Indotel para subsidiar agresivamente la expansión de internet satelital y de fibra óptica en provincias rurales desatendidas. Esto cerrará la brecha digital y promoverá la inclusión.',
          implementationSteps: ['Fase 1: Mapeo de áreas desatendidas', 'Fase 2: Asignación de subsidios', 'Fase 3: Despliegue de infraestructura'],
          expectedOutcomes: ['Conectividad rural', 'Inclusión digital'],
          chartData: [{ name: 'Año 1', value: 10 }, { name: 'Año 2', value: 20 }, { name: 'Año 3', value: 30 }, { name: 'Año 4', value: 40 }, { name: 'Año 5', value: 50 }],
          imageUrl: 'https://picsum.photos/seed/inn-6-solution/800/400'
        }
      },
      {
        id: 'inn-7',
        upvotes: 0,
        downvotes: 0,
        title: 'High Cost of Connectivity',
        description: 'Alto costo de conectividad para hogares de bajos ingresos y acceso limitado a portales esenciales.',
        solution: {
          leader: 'Experto en Inclusión Digital',
          model: 'Zero-Rating y Subsidios',
          description: 'Implementar zero-rating (acceso a datos gratuito) para portales gubernamentales y educativos esenciales, junto con subsidios de banda ancha específicos para hogares de bajos ingresos.',
          extendedDescription: 'Implementar zero-rating (acceso a datos gratuito) para portales gubernamentales y educativos esenciales, junto con subsidios de banda ancha específicos para hogares de bajos ingresos. Esto garantizará el acceso a servicios básicos para todos.',
          implementationSteps: ['Fase 1: Acuerdos con telcos', 'Fase 2: Identificación de beneficiarios', 'Fase 3: Implementación de zero-rating'],
          expectedOutcomes: ['Acceso equitativo', 'Reducción de costos de conectividad'],
          chartData: [{ name: 'Año 1', value: 15 }, { name: 'Año 2', value: 25 }, { name: 'Año 3', value: 35 }, { name: 'Año 4', value: 45 }, { name: 'Año 5', value: 55 }],
          imageUrl: 'https://picsum.photos/seed/inn-7-solution/800/400'
        }
      },
      {
        id: 'inn-8',
        upvotes: 0,
        downvotes: 0,
        title: 'Fragmented Citizen Services (E-Gov)',
        description: 'Servicios ciudadanos fragmentados que requieren múltiples identidades digitales.',
        solution: {
          leader: 'Experto en Gobierno Digital',
          model: 'Single Sign-On (SSO) Nacional',
          description: 'Exigir un sistema de inicio de sesión único (SSO) en todos los portales gubernamentales (Gob.do) para que los ciudadanos solo necesiten una identidad digital para todos los trámites estatales.',
          extendedDescription: 'Exigir un sistema de inicio de sesión único (SSO) en todos los portales gubernamentales (Gob.do) para que los ciudadanos solo necesiten una identidad digital para todos los trámites estatales. Esto simplificará la interacción ciudadano-estado.',
          implementationSteps: ['Fase 1: Diseño de arquitectura SSO', 'Fase 2: Integración de portales', 'Fase 3: Lanzamiento nacional'],
          expectedOutcomes: ['Identidad digital única', 'Trámites simplificados'],
          chartData: [{ name: 'Año 1', value: 20 }, { name: 'Año 2', value: 30 }, { name: 'Año 3', value: 40 }, { name: 'Año 4', value: 50 }, { name: 'Año 5', value: 60 }],
          imageUrl: 'https://picsum.photos/seed/inn-8-solution/800/400'
        }
      },
      {
        id: 'inn-9',
        upvotes: 0,
        downvotes: 0,
        title: 'Lack of State Interoperability',
        description: 'Falta de interoperabilidad estatal, obligando a los ciudadanos a proporcionar documentos que el estado ya posee.',
        solution: {
          leader: 'Arquitecto de Datos',
          model: 'Capa de Intercambio X-Road',
          description: 'Desplegar una capa de intercambio de datos estilo X-Road para evitar que las instituciones públicas pidan a los ciudadanos documentos que el estado ya posee (ej. actas de nacimiento).',
          extendedDescription: 'Desplegar una capa de intercambio de datos estilo X-Road para evitar que las instituciones públicas pidan a los ciudadanos documentos que el estado ya posee (ej. actas de nacimiento). Esto eliminará la redundancia burocrática.',
          implementationSteps: ['Fase 1: Implementación de X-Road', 'Fase 2: Conexión de bases de datos', 'Fase 3: Prohibición de solicitud de documentos redundantes'],
          expectedOutcomes: ['Interoperabilidad total', 'Cero papel redundante'],
          chartData: [{ name: 'Año 1', value: 25 }, { name: 'Año 2', value: 35 }, { name: 'Año 3', value: 45 }, { name: 'Año 4', value: 55 }, { name: 'Año 5', value: 65 }],
          imageUrl: 'https://picsum.photos/seed/inn-9-solution/800/400'
        }
      },
      {
        id: 'inn-10',
        upvotes: 0,
        downvotes: 0,
        title: 'Low Digital Signature Adoption',
        description: 'Baja adopción de firmas digitales, retrasando la digitalización de contratos y trámites.',
        solution: {
          leader: 'Experto Legal Tech',
          model: 'Adopción Masiva de Firma Digital',
          description: 'Subsidiar la emisión de certificados digitales para ciudadanos y exigir legalmente su aceptación en todos los contratos públicos, bancarios y privados.',
          extendedDescription: 'Subsidiar la emisión de certificados digitales para ciudadanos y exigir legalmente su aceptación en todos los contratos públicos, bancarios y privados. Esto acelerará la economía digital.',
          implementationSteps: ['Fase 1: Marco regulatorio', 'Fase 2: Subsidios de certificados', 'Fase 3: Mandato de aceptación'],
          expectedOutcomes: ['Firma digital universal', 'Contratos ágiles'],
          chartData: [{ name: 'Año 1', value: 30 }, { name: 'Año 2', value: 40 }, { name: 'Año 3', value: 50 }, { name: 'Año 4', value: 60 }, { name: 'Año 5', value: 70 }],
          imageUrl: 'https://picsum.photos/seed/inn-10-solution/800/400'
        }
      },
      {
        id: 'inn-11',
        upvotes: 0,
        downvotes: 0,
        title: 'Legacy IT Obsolescence in Government',
        description: 'Obsolescencia de TI heredada en el gobierno, con software antiguo y vulnerable.',
        solution: {
          leader: 'CIO Gubernamental',
          model: 'Fondo de Transformación Digital',
          description: 'Crear un fondo de transformación digital centralizado dedicado estrictamente a retirar sistemáticamente software heredado sin parches en los ministerios centrales.',
          extendedDescription: 'Crear un fondo de transformación digital centralizado dedicado estrictamente a retirar sistemáticamente software heredado sin parches en los ministerios centrales. Esto modernizará la infraestructura estatal.',
          implementationSteps: ['Fase 1: Auditoría de sistemas heredados', 'Fase 2: Asignación de fondos', 'Fase 3: Migración a sistemas modernos'],
          expectedOutcomes: ['Sistemas modernos', 'Reducción de vulnerabilidades'],
          chartData: [{ name: 'Año 1', value: 35 }, { name: 'Año 2', value: 45 }, { name: 'Año 3', value: 55 }, { name: 'Año 4', value: 65 }, { name: 'Año 5', value: 75 }],
          imageUrl: 'https://picsum.photos/seed/inn-11-solution/800/400'
        }
      },
      {
        id: 'inn-12',
        upvotes: 0,
        downvotes: 0,
        title: 'Ransomware and Cyber Threats',
        description: 'Aumento de amenazas cibernéticas y ransomware contra entidades estatales.',
        solution: {
          leader: 'Experto en Ciberseguridad',
          model: 'Cumplimiento NORTIC SI y Pentesting',
          description: 'Hacer cumplir estrictamente las normas NORTIC SI (estándares de ciberseguridad) y exigir pruebas de penetración de terceros de rutina para todas las entidades estatales.',
          extendedDescription: 'Hacer cumplir estrictamente las normas NORTIC SI (estándares de ciberseguridad) y exigir pruebas de penetración de terceros de rutina para todas las entidades estatales. Esto fortalecerá la postura de seguridad nacional.',
          implementationSteps: ['Fase 1: Auditorías de cumplimiento', 'Fase 2: Pruebas de penetración', 'Fase 3: Remediación de vulnerabilidades'],
          expectedOutcomes: ['Entidades seguras', 'Resiliencia cibernética'],
          chartData: [{ name: 'Año 1', value: 40 }, { name: 'Año 2', value: 50 }, { name: 'Año 3', value: 60 }, { name: 'Año 4', value: 70 }, { name: 'Año 5', value: 80 }],
          imageUrl: 'https://picsum.photos/seed/inn-12-solution/800/400'
        }
      },
      {
        id: 'inn-13',
        upvotes: 0,
        downvotes: 0,
        title: 'Fragmented Cyber Incident Response',
        description: 'Respuesta fragmentada a incidentes cibernéticos a nivel nacional.',
        solution: {
          leader: 'Director del CNCS',
          model: 'SOC Nacional 24/7',
          description: 'Empoderar al Centro Nacional de Ciberseguridad (CNCS) con un Centro de Operaciones de Seguridad Nacional (SOC) activo 24/7 totalmente financiado para monitorear las redes estatales.',
          extendedDescription: 'Empoderar al Centro Nacional de Ciberseguridad (CNCS) con un Centro de Operaciones de Seguridad Nacional (SOC) activo 24/7 totalmente financiado para monitorear las redes estatales. Esto permitirá una respuesta rápida y coordinada.',
          implementationSteps: ['Fase 1: Diseño del SOC', 'Fase 2: Contratación y equipamiento', 'Fase 3: Operación 24/7'],
          expectedOutcomes: ['Monitoreo continuo', 'Respuesta rápida a incidentes'],
          chartData: [{ name: 'Año 1', value: 45 }, { name: 'Año 2', value: 55 }, { name: 'Año 3', value: 65 }, { name: 'Año 4', value: 75 }, { name: 'Año 5', value: 85 }],
          imageUrl: 'https://picsum.photos/seed/inn-13-solution/800/400'
        }
      },
      {
        id: 'inn-14',
        upvotes: 0,
        downvotes: 0,
        title: 'Outdated Data Protection Laws',
        description: 'Leyes de protección de datos obsoletas que no cumplen con los estándares internacionales modernos.',
        solution: {
          leader: 'Experto en Privacidad',
          model: 'Reforma de Ley de Datos (Estilo GDPR)',
          description: 'Revisar la Ley 172-13 para alinearla con los estándares internacionales modernos de privacidad de datos (como el GDPR) para proteger los datos de ciudadanos y consumidores.',
          extendedDescription: 'Revisar la Ley 172-13 para alinearla con los estándares internacionales modernos de privacidad de datos (como el GDPR) para proteger los datos de ciudadanos y consumidores. Esto generará confianza en la economía digital.',
          implementationSteps: ['Fase 1: Análisis comparativo', 'Fase 2: Redacción de la nueva ley', 'Fase 3: Aprobación e implementación'],
          expectedOutcomes: ['Privacidad garantizada', 'Confianza digital'],
          chartData: [{ name: 'Año 1', value: 50 }, { name: 'Año 2', value: 60 }, { name: 'Año 3', value: 70 }, { name: 'Año 4', value: 80 }, { name: 'Año 5', value: 90 }],
          imageUrl: 'https://picsum.photos/seed/inn-14-solution/800/400'
        }
      },
      {
        id: 'inn-15',
        upvotes: 0,
        downvotes: 0,
        title: 'Cybersecurity Talent Shortage',
        description: 'Escasez de talento calificado en ciberseguridad en el país.',
        solution: {
          leader: 'Director de ITLA',
          model: 'Bootcamps Acelerados de Seguridad',
          description: 'Asociarse con institutos técnicos como ITLA y universidades para ofrecer bootcamps acelerados y fuertemente subsidiados en seguridad de la información.',
          extendedDescription: 'Asociarse con institutos técnicos como ITLA y universidades para ofrecer bootcamps acelerados y fuertemente subsidiados en seguridad de la información. Esto creará una fuerza laboral preparada para defender el ciberespacio nacional.',
          implementationSteps: ['Fase 1: Diseño del currículo', 'Fase 2: Alianzas institucionales', 'Fase 3: Ejecución de bootcamps'],
          expectedOutcomes: ['Nuevos profesionales de ciberseguridad', 'Reducción de la brecha de talento'],
          chartData: [{ name: 'Año 1', value: 55 }, { name: 'Año 2', value: 65 }, { name: 'Año 3', value: 75 }, { name: 'Año 4', value: 85 }, { name: 'Año 5', value: 95 }],
          imageUrl: 'https://picsum.photos/seed/inn-15-solution/800/400'
        }
      },
      {
        id: 'inn-16',
        upvotes: 0,
        downvotes: 0,
        title: '5G Deployment Bottlenecks',
        description: 'Cuellos de botella burocráticos municipales que retrasan el despliegue de infraestructura 5G y fibra óptica.',
        solution: {
          leader: 'Indotel',
          model: 'Estandarización de Permisos Municipales',
          description: 'Estandarizar y digitalizar los procesos de permisos municipales a nivel nacional para evitar que la burocracia local retrase la infraestructura de torres de telecomunicaciones y fibra.',
          extendedDescription: 'Estandarizar y digitalizar los procesos de permisos municipales a nivel nacional para evitar que la burocracia local retrase la infraestructura de torres de telecomunicaciones y fibra. Esto acelerará la conectividad de próxima generación.',
          implementationSteps: ['Fase 1: Acuerdo nacional', 'Fase 2: Plataforma digital de permisos', 'Fase 3: Despliegue acelerado'],
          expectedOutcomes: ['Despliegue 5G rápido', 'Reducción de burocracia'],
          chartData: [{ name: 'Año 1', value: 60 }, { name: 'Año 2', value: 70 }, { name: 'Año 3', value: 80 }, { name: 'Año 4', value: 90 }, { name: 'Año 5', value: 100 }],
          imageUrl: 'https://picsum.photos/seed/inn-16-solution/800/400'
        }
      },
      {
        id: 'inn-17',
        upvotes: 0,
        downvotes: 0,
        title: 'Lack of Sovereign Cloud Infrastructure',
        description: 'Falta de infraestructura de nube soberana para centralizar y proteger los datos estatales.',
        solution: {
          leader: 'Arquitecto de Nube Estatal',
          model: 'Data Center Nacional Tier IV',
          description: 'Construir un Centro de Datos Nacional Tier IV para centralizar los datos estatales de forma segura e implementar políticas estrictas de "nube primero" para las agencias públicas.',
          extendedDescription: 'Construir un Centro de Datos Nacional Tier IV para centralizar los datos estatales de forma segura e implementar políticas estrictas de "nube primero" para las agencias públicas. Esto garantizará la soberanía y seguridad de los datos.',
          implementationSteps: ['Fase 1: Diseño y licitación', 'Fase 2: Construcción del Data Center', 'Fase 3: Migración a la nube soberana'],
          expectedOutcomes: ['Soberanía de datos', 'Infraestructura resiliente'],
          chartData: [{ name: 'Año 1', value: 65 }, { name: 'Año 2', value: 75 }, { name: 'Año 3', value: 85 }, { name: 'Año 4', value: 95 }, { name: 'Año 5', value: 105 }],
          imageUrl: 'https://picsum.photos/seed/inn-17-solution/800/400'
        }
      },
      {
        id: 'inn-18',
        upvotes: 0,
        downvotes: 0,
        title: 'SME Digital Illiteracy',
        description: 'Analfabetismo digital en las MiPymes, limitando su competitividad y crecimiento.',
        solution: {
          leader: 'Ministerio de Industria y Comercio',
          model: 'Programa de Vales Digitales',
          description: 'Lanzar un programa nacional de "Vales Digitales" para subsidiar la compra de sistemas POS, software de inventario y alojamiento web para MiPymes.',
          extendedDescription: 'Lanzar un programa nacional de "Vales Digitales" para subsidiar la compra de sistemas POS, software de inventario y alojamiento web para MiPymes. Esto impulsará la transformación digital del sector productivo.',
          implementationSteps: ['Fase 1: Diseño del programa', 'Fase 2: Registro de proveedores', 'Fase 3: Distribución de vales'],
          expectedOutcomes: ['MiPymes digitalizadas', 'Aumento de competitividad'],
          chartData: [{ name: 'Año 1', value: 70 }, { name: 'Año 2', value: 80 }, { name: 'Año 3', value: 90 }, { name: 'Año 4', value: 100 }, { name: 'Año 5', value: 110 }],
          imageUrl: 'https://picsum.photos/seed/inn-18-solution/800/400'
        }
      },
      {
        id: 'inn-19',
        upvotes: 0,
        downvotes: 0,
        title: 'E-Commerce Payment Friction',
        description: 'Fricción en los pagos de comercio electrónico y alta dependencia del efectivo.',
        solution: {
          leader: 'Banco Central',
          model: 'Open Banking y Pagos Instantáneos',
          description: 'Promover regulaciones de Open Banking e incentivar la adopción universal de rieles de pago digital instantáneo para reducir la dependencia del efectivo.',
          extendedDescription: 'Promover regulaciones de Open Banking e incentivar la adopción universal de rieles de pago digital instantáneo para reducir la dependencia del efectivo. Esto dinamizará el comercio electrónico.',
          implementationSteps: ['Fase 1: Marco regulatorio Open Banking', 'Fase 2: Infraestructura de pagos', 'Fase 3: Adopción masiva'],
          expectedOutcomes: ['Pagos sin fricción', 'Reducción del uso de efectivo'],
          chartData: [{ name: 'Año 1', value: 75 }, { name: 'Año 2', value: 85 }, { name: 'Año 3', value: 95 }, { name: 'Año 4', value: 105 }, { name: 'Año 5', value: 115 }],
          imageUrl: 'https://picsum.photos/seed/inn-19-solution/800/400'
        }
      },
      {
        id: 'inn-20',
        upvotes: 0,
        downvotes: 0,
        title: 'Lack of AI Readiness',
        description: 'Falta de preparación y estrategia nacional para la adopción de Inteligencia Artificial.',
        solution: {
          leader: 'Gabinete de Innovación',
          model: 'Estrategia Nacional de IA',
          description: 'Formular y ejecutar una Estrategia Nacional de Inteligencia Artificial para guiar la adopción ética de la IA, particularmente en salud pública, agricultura y servicios ciudadanos.',
          extendedDescription: 'Formular y ejecutar una Estrategia Nacional de Inteligencia Artificial para guiar la adopción ética de la IA, particularmente en salud pública, agricultura y servicios ciudadanos. Esto posicionará al país en la vanguardia tecnológica.',
          implementationSteps: ['Fase 1: Formulación de estrategia', 'Fase 2: Proyectos piloto de IA', 'Fase 3: Adopción a escala'],
          expectedOutcomes: ['Adopción ética de IA', 'Mejora en servicios públicos'],
          chartData: [{ name: 'Año 1', value: 80 }, { name: 'Año 2', value: 90 }, { name: 'Año 3', value: 100 }, { name: 'Año 4', value: 110 }, { name: 'Año 5', value: 120 }],
          imageUrl: 'https://picsum.photos/seed/inn-20-solution/800/400'
        }
      },
      {
        id: 'jus-1',
        upvotes: 0,
        downvotes: 0,
        title: 'Judicial Backlog (Mora Judicial)',
        description: 'Retrasos crónicos en el sistema judicial debido a tácticas dilatorias y falta de plazos estrictos.',
        solution: {
          leader: 'Experto en Reforma Judicial',
          model: 'Gestión de Casos Automatizada',
          description: 'Implementar plazos procesales obligatorios y estrictos aplicados por software de gestión de casos automatizado para evitar retrasos artificiales por parte de los litigantes.',
          extendedDescription: 'Implementar plazos procesales obligatorios y estrictos aplicados por software de gestión de casos automatizado para evitar retrasos artificiales por parte de los litigantes. Esto reducirá drásticamente la mora judicial.',
          implementationSteps: ['Fase 1: Reforma procesal', 'Fase 2: Adquisición de software', 'Fase 3: Capacitación y despliegue'],
          expectedOutcomes: ['Reducción de mora judicial', 'Justicia expedita'],
          chartData: [{ name: 'Año 1', value: 10 }, { name: 'Año 2', value: 20 }, { name: 'Año 3', value: 30 }, { name: 'Año 4', value: 40 }, { name: 'Año 5', value: 50 }],
          imageUrl: 'https://picsum.photos/seed/jus-1-solution/800/400'
        }
      },
      {
        id: 'jus-2',
        upvotes: 0,
        downvotes: 0,
        title: 'Abuse of Preventive Detention',
        description: 'Abuso de la prisión preventiva, resultando en una alta población de reclusos no condenados.',
        solution: {
          leader: 'Defensor de Derechos Humanos',
          model: 'Medidas Alternativas Obligatorias',
          description: 'Exigir legalmente y hacer cumplir el uso de medidas alternativas (ej. monitores de tobillo electrónicos, fianzas) para delitos no violentos para reducir el encarcelamiento preventivo.',
          extendedDescription: 'Exigir legalmente y hacer cumplir el uso de medidas alternativas (ej. monitores de tobillo electrónicos, fianzas) para delitos no violentos para reducir el encarcelamiento preventivo. Esto descongestionará las cárceles y protegerá la presunción de inocencia.',
          implementationSteps: ['Fase 1: Reforma legal', 'Fase 2: Adquisición de tecnología de monitoreo', 'Fase 3: Capacitación de jueces'],
          expectedOutcomes: ['Reducción de prisión preventiva', 'Descongestión carcelaria'],
          chartData: [{ name: 'Año 1', value: 15 }, { name: 'Año 2', value: 25 }, { name: 'Año 3', value: 35 }, { name: 'Año 4', value: 45 }, { name: 'Año 5', value: 55 }],
          imageUrl: 'https://picsum.photos/seed/jus-2-solution/800/400'
        }
      },
      {
        id: 'jus-3',
        upvotes: 0,
        downvotes: 0,
        title: 'Prison Overcrowding (Hacinamiento)',
        description: 'Hacinamiento carcelario severo y condiciones inhumanas en las instalaciones penitenciarias.',
        solution: {
          leader: 'Director del Sistema Penitenciario',
          model: 'Censo y Nuevas Instalaciones',
          description: 'Realizar un censo inmediato para liberar a los reclusos que han cumplido su condena o califican para libertad condicional, y construir instalaciones modernas centradas en la rehabilitación.',
          extendedDescription: 'Realizar un censo inmediato para liberar a los reclusos que han cumplido su condena o califican para libertad condicional, y construir instalaciones modernas centradas en la rehabilitación. Esto mejorará las condiciones de vida y reducirá la reincidencia.',
          implementationSteps: ['Fase 1: Censo penitenciario', 'Fase 2: Liberación de reclusos elegibles', 'Fase 3: Construcción de nuevas cárceles'],
          expectedOutcomes: ['Fin del hacinamiento', 'Rehabilitación efectiva'],
          chartData: [{ name: 'Año 1', value: 20 }, { name: 'Año 2', value: 30 }, { name: 'Año 3', value: 40 }, { name: 'Año 4', value: 50 }, { name: 'Año 5', value: 60 }],
          imageUrl: 'https://picsum.photos/seed/jus-3-solution/800/400'
        }
      },
      {
        id: 'jus-4',
        upvotes: 0,
        downvotes: 0,
        title: 'Lack of Inter-Institutional Coordination',
        description: 'Falta de coordinación entre la Policía, Fiscales y Jueces, dificultando el seguimiento de casos.',
        solution: {
          leader: 'Procurador General',
          model: 'Base de Datos de Justicia Unificada',
          description: 'Desplegar una base de datos de justicia penal unificada accesible en tiempo real por la Policía Nacional, Fiscales y Jueces para rastrear casos sin problemas.',
          extendedDescription: 'Desplegar una base de datos de justicia penal unificada accesible en tiempo real por la Policía Nacional, Fiscales y Jueces para rastrear casos sin problemas. Esto mejorará la eficiencia y transparencia del sistema.',
          implementationSteps: ['Fase 1: Diseño del sistema unificado', 'Fase 2: Integración de bases de datos existentes', 'Fase 3: Despliegue nacional'],
          expectedOutcomes: ['Coordinación interinstitucional', 'Trazabilidad de casos'],
          chartData: [{ name: 'Año 1', value: 25 }, { name: 'Año 2', value: 35 }, { name: 'Año 3', value: 45 }, { name: 'Año 4', value: 55 }, { name: 'Año 5', value: 65 }],
          imageUrl: 'https://picsum.photos/seed/jus-4-solution/800/400'
        }
      },
      {
        id: 'jus-5',
        upvotes: 0,
        downvotes: 0,
        title: 'Overwhelmed Public Defense System',
        description: 'Sistema de Defensa Pública abrumado y con fondos insuficientes, dejando a los ciudadanos vulnerables sin representación adecuada.',
        solution: {
          leader: 'Director de Defensa Pública',
          model: 'Aumento de Presupuesto y Personal',
          description: 'Aumentar significativamente el presupuesto de la Oficina Nacional de Defensa Pública para contratar más defensores públicos y equilibrar la balanza de la justicia.',
          extendedDescription: 'Aumentar significativamente el presupuesto de la Oficina Nacional de Defensa Pública para contratar más defensores públicos y equilibrar la balanza de la justicia. Esto garantizará el derecho a una defensa justa para todos.',
          implementationSteps: ['Fase 1: Reasignación presupuestaria', 'Fase 2: Contratación de defensores', 'Fase 3: Capacitación continua'],
          expectedOutcomes: ['Defensa pública robusta', 'Acceso equitativo a la justicia'],
          chartData: [{ name: 'Año 1', value: 30 }, { name: 'Año 2', value: 40 }, { name: 'Año 3', value: 50 }, { name: 'Año 4', value: 60 }, { name: 'Año 5', value: 70 }],
          imageUrl: 'https://picsum.photos/seed/jus-5-solution/800/400'
        }
      }
    ]
  },
  {
    id: 'labor',
    title: 'Trabajo y Formación Profesional',
    icon: Briefcase,
    overview: 'La "Ley de Formalización de la Fuerza Laboral 4.0" para eliminar las rigideces sistémicas, formalizar el mercado laboral y alinear la capacitación con las demandas del sector privado.',
    megaproject: {
      title: 'El Sistema Nacional de Educación Dual',
      description: 'Un rediseño total del ecosistema laboral replicando el modelo alemán. El Estado y el sector privado co-financiarán una red de "Institutos Politécnicos de Alta Tecnología" donde los estudiantes pasan el 50% de su tiempo en las aulas y el 50% como aprendices pagados dentro de las fábricas, Zonas Francas y hoteles, garantizando que el 100% de los graduados salgan con empleo formal y experiencia.'
        ,
      timeline: [
        { phase: '2026-2027', description: 'Fase inicial de planificación, auditoría y diseño arquitectónico.' },
        { phase: '2028-2029', description: 'Despliegue de infraestructura base y programas piloto en zonas clave.' },
        { phase: '2030+', description: 'Expansión a nivel nacional, optimización continua y evaluación de impacto.' }
      ],
      partners: ['Banco Interamericano de Desarrollo (BID)', 'Ministerio de Economía, Planificación y Desarrollo', 'Sector Privado Local', 'ONGs Internacionales', 'Agencias de Cooperación (USAID, JICA)']
    },
    problems: [
      {
        id: 'lab-1',
        upvotes: 0,
        downvotes: 0,
        title: 'Cesantía Rígida',
        description: 'Las responsabilidades de indemnización retroactivas y altamente punitivas sofocan la contratación formal y atrapan a las mipymes en la economía informal.',
        solution: {
          leader: 'Javier Milei',
          model: 'Finanzas de Singapur',
          description: 'Reemplazar la cesantía retroactiva con Cuentas de Capitalización Individual financiadas por una contribución continua y predecible del 2% del empleador.',
          extendedDescription: `La implementación del modelo de Javier Milei requiere una reestructuración profunda. Reemplazar la cesantía retroactiva con Cuentas de Capitalización Individual financiadas por una contribución continua y predecible del 2% del empleador. Esto implica un cambio radical en la forma en que abordamos el problema de "Cesantía Rígida", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Finanzas de Singapur (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Finanzas de Singapur.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 40 },
            { name: 'Año 2', value: 75 },
            { name: 'Año 3', value: 115 },
            { name: 'Año 4', value: 160 },
            { name: 'Año 5', value: 220 }
          ],
          imageUrl: 'https://picsum.photos/seed/labor-solution/800/400'
        }
      },
      {
        id: 'lab-2',
        upvotes: 0,
        downvotes: 0,
        title: 'Alta Informalidad Laboral',
        description: 'El 54.7% de la fuerza laboral opera fuera de la base fiscal y regulatoria formal.',
        solution: {
          leader: 'Margaret Thatcher',
          model: 'Trabajo Alemán',
          description: 'Ofrecer alivio inmediato del impuesto sobre la nómina a las mipymes, condicionado a su adopción del modelo Dual-VET alemán para contratar jóvenes aprendices.',
          extendedDescription: `La implementación del modelo de Margaret Thatcher requiere una reestructuración profunda. Ofrecer alivio inmediato del impuesto sobre la nómina a las mipymes, condicionado a su adopción del modelo Dual-VET alemán para contratar jóvenes aprendices. Esto implica un cambio radical en la forma en que abordamos el problema de "Alta Informalidad Laboral", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Trabajo Alemán (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Trabajo Alemán.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 50 },
            { name: 'Año 2', value: 90 },
            { name: 'Año 3', value: 135 },
            { name: 'Año 4', value: 185 },
            { name: 'Año 5', value: 250 }
          ],
          imageUrl: 'https://picsum.photos/seed/lab-2-solution/800/400'
        }
      },
      {
        id: 'lab-3',
        upvotes: 0,
        downvotes: 0,
        title: 'Tasa Severa de Jóvenes NINI',
        description: 'El 25.7% de los jóvenes no estudian ni trabajan, lo que representa una pérdida masiva de capital humano.',
        solution: {
          leader: 'FDR',
          model: 'Bienestar de Noruega',
          description: 'Implementar una Garantía Juvenil Condicional. Vincular las transferencias de bienestar del estado directamente a la inscripción obligatoria de jóvenes en las vías tecnológicas de INFOTEP.',
          extendedDescription: `La implementación del modelo de FDR requiere una reestructuración profunda. Implementar una Garantía Juvenil Condicional. Vincular las transferencias de bienestar del estado directamente a la inscripción obligatoria de jóvenes en las vías tecnológicas de INFOTEP. Esto implica un cambio radical en la forma en que abordamos el problema de "Tasa Severa de Jóvenes NINI", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Bienestar de Noruega (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Bienestar de Noruega.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 60 },
            { name: 'Año 2', value: 105 },
            { name: 'Año 3', value: 155 },
            { name: 'Año 4', value: 210 },
            { name: 'Año 5', value: 280 }
          ],
          imageUrl: 'https://picsum.photos/seed/lab-3-solution/800/400'
        }
      },
      {
        id: 'lab-4',
        upvotes: 0,
        downvotes: 0,
        title: 'Desajuste de Habilidades (Skills Mismatch)',
        description: 'Las universidades producen un exceso de profesionales en humanidades mientras el sector privado sufre escasez de técnicos especializados e ingenieros.',
        solution: {
          leader: 'Angela Merkel',
          model: 'Educación Dual Alemana',
          description: 'Redirigir los subsidios universitarios hacia programas técnicos donde los estudiantes dividen su tiempo entre el aula y el aprendizaje remunerado directamente en empresas privadas.',
          extendedDescription: `La implementación del modelo de Angela Merkel requiere una reestructuración profunda. Redirigir los subsidios universitarios hacia programas técnicos donde los estudiantes dividen su tiempo entre el aula y el aprendizaje remunerado directamente en empresas privadas. Esto implica un cambio radical en la forma en que abordamos el problema de "Desajuste de Habilidades (Skills Mismatch)", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Educación Dual Alemana (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Educación Dual Alemana.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 20 },
            { name: 'Año 2', value: 45 },
            { name: 'Año 3', value: 75 },
            { name: 'Año 4', value: 110 },
            { name: 'Año 5', value: 160 }
          ],
          imageUrl: 'https://picsum.photos/seed/lab-4-solution/800/400'
        }
      },
      {
        id: 'lab-5',
        upvotes: 0,
        downvotes: 0,
        title: 'Baja Participación Laboral Femenina',
        description: 'La falta de infraestructura de cuidado infantil obliga a muchas mujeres a abandonar la fuerza laboral formal o aceptar subempleo.',
        solution: {
          leader: 'Sanna Marin',
          model: 'Cuidado Infantil Nórdico',
          description: 'Implementar un sistema nacional de vales (vouchers) de cuidado infantil cofinanciado por el estado y los empleadores, permitiendo a las madres reincorporarse al mercado laboral formal.',
          extendedDescription: `La implementación del modelo de Sanna Marin requiere una reestructuración profunda. Implementar un sistema nacional de vales (vouchers) de cuidado infantil cofinanciado por el estado y los empleadores, permitiendo a las madres reincorporarse al mercado laboral formal. Esto implica un cambio radical en la forma en que abordamos el problema de "Baja Participación Laboral Femenina", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Cuidado Infantil Nórdico (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Cuidado Infantil Nórdico.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 30 },
            { name: 'Año 2', value: 60 },
            { name: 'Año 3', value: 95 },
            { name: 'Año 4', value: 135 },
            { name: 'Año 5', value: 190 }
          ],
          imageUrl: 'https://picsum.photos/seed/lab-5-solution/800/400'
        }
      },
      {
        id: 'lab-6',
        upvotes: 0,
        downvotes: 0,
        title: 'Obsolescencia de la Formación Técnico-Profesional (INFOTEP)',
        description: 'Capacitación vocacional desactualizada que va años por detrás de las necesidades tecnológicas reales del sector privado.',
        solution: {
          leader: 'Modelo Suizo',
          model: 'Junta Curricular Dirigida por la Industria',
          description: 'Exigir que el 50% de la junta curricular nacional esté compuesta por directores ejecutivos industriales activos, con actualizaciones en tiempo real impulsadas por análisis de IA de bolsas de trabajo globales.',
          extendedDescription: `La implementación del modelo de Modelo Suizo requiere una reestructuración profunda. Exigir que el 50% de la junta curricular nacional esté compuesta por directores ejecutivos industriales activos, con actualizaciones en tiempo real impulsadas por análisis de IA de bolsas de trabajo globales. Esto implica un cambio radical en la forma en que abordamos el problema de "Obsolescencia de la Formación Técnico-Profesional (INFOTEP)", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Junta Curricular Dirigida por la Industria (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Junta Curricular Dirigida por la Industria.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 40 },
            { name: 'Año 2', value: 75 },
            { name: 'Año 3', value: 115 },
            { name: 'Año 4', value: 160 },
            { name: 'Año 5', value: 220 }
          ],
          imageUrl: 'https://picsum.photos/seed/lab-6-solution/800/400'
        }
      },
      {
        id: 'lab-7',
        upvotes: 0,
        downvotes: 0,
        title: 'Déficit Severo de Dominio del Idioma Inglés',
        description: 'Falta severa de dominio del idioma inglés que limita la integración en la economía remota global y el turismo de alto nivel.',
        solution: {
          leader: 'Lee Kuan Yew',
          model: 'Bootcamps de Inmersión Lingüística por IA',
          description: 'Subsidiar bootcamps de idiomas inmersivos impulsados por IA con colocación garantizada en trabajo remoto para los graduados, eludiendo las escuelas de idiomas tradicionales de varios años.',
          extendedDescription: `La implementación del modelo de Lee Kuan Yew requiere una reestructuración profunda. Subsidiar bootcamps de idiomas inmersivos impulsados por IA con colocación garantizada en trabajo remoto para los graduados, eludiendo las escuelas de idiomas tradicionales de varios años. Esto implica un cambio radical en la forma en que abordamos el problema de "Déficit Severo de Dominio del Idioma Inglés", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Bootcamps de Inmersión Lingüística por IA (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Bootcamps de Inmersión Lingüística por IA.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 50 },
            { name: 'Año 2', value: 90 },
            { name: 'Año 3', value: 135 },
            { name: 'Año 4', value: 185 },
            { name: 'Año 5', value: 250 }
          ],
          imageUrl: 'https://picsum.photos/seed/lab-7-solution/800/400'
        }
      },
      {
        id: 'lab-8',
        upvotes: 0,
        downvotes: 0,
        title: 'Dependencia de Mano de Obra de Baja Cualificación en Zonas Francas',
        description: 'Fuerte dependencia de la mano de obra manual de baja cualificación en las Zonas Francas, altamente vulnerable a la automatización.',
        solution: {
          leader: 'Modelo Surcoreano',
          model: 'Fondo Soberano de Transición Industrial',
          description: 'Establecer un fondo de transición soberano para capacitar proactivamente a los trabajadores de ensamblaje manual y convertirlos en técnicos de robótica, operadores CNC y especialistas en control de calidad.',
          extendedDescription: `La implementación del modelo de Modelo Surcoreano requiere una reestructuración profunda. Establecer un fondo de transición soberano para capacitar proactivamente a los trabajadores de ensamblaje manual y convertirlos en técnicos de robótica, operadores CNC y especialistas en control de calidad. Esto implica un cambio radical en la forma en que abordamos el problema de "Dependencia de Mano de Obra de Baja Cualificación en Zonas Francas", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Fondo Soberano de Transición Industrial (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Fondo Soberano de Transición Industrial.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 60 },
            { name: 'Año 2', value: 105 },
            { name: 'Año 3', value: 155 },
            { name: 'Año 4', value: 210 },
            { name: 'Año 5', value: 280 }
          ],
          imageUrl: 'https://picsum.photos/seed/lab-8-solution/800/400'
        }
      },
      {
        id: 'lab-9',
        upvotes: 0,
        downvotes: 0,
        title: 'Fuga de Cerebros en Ingeniería y Tecnología',
        description: 'Constante "fuga de cerebros" de talento técnico y de ingeniería de primer nivel que emigra a Estados Unidos y Europa.',
        solution: {
          leader: 'Emmanuel Macron',
          model: 'Hubs de Innovación y Retención de Talento',
          description: 'Crear "Hubs de Innovación" con cero impuesto sobre la renta para profesionales certificados en tecnología profunda (deep-tech) e igualar legalmente sus salarios del sector privado mediante subsidios estatales durante los primeros tres años.',
          extendedDescription: `La implementación del modelo de Emmanuel Macron requiere una reestructuración profunda. Crear "Hubs de Innovación" con cero impuesto sobre la renta para profesionales certificados en tecnología profunda (deep-tech) e igualar legalmente sus salarios del sector privado mediante subsidios estatales durante los primeros tres años. Esto implica un cambio radical en la forma en que abordamos el problema de "Fuga de Cerebros en Ingeniería y Tecnología", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Hubs de Innovación y Retención de Talento (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Hubs de Innovación y Retención de Talento.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 20 },
            { name: 'Año 2', value: 45 },
            { name: 'Año 3', value: 75 },
            { name: 'Año 4', value: 110 },
            { name: 'Año 5', value: 160 }
          ],
          imageUrl: 'https://picsum.photos/seed/lab-9-solution/800/400'
        }
      },
      {
        id: 'lab-10',
        upvotes: 0,
        downvotes: 0,
        title: 'Brecha de Género en Sectores Tecnológicos e Industriales',
        description: 'Brecha de género masiva, con mujeres fuertemente subrepresentadas en roles técnicos, de construcción y de TI bien remunerados.',
        solution: {
          leader: 'Sanna Marin',
          model: 'Cuotas Corporativas y Subsidios de Capacitación',
          description: 'Ofrecer capacitación 100% subsidiada, estipendios de cuidado infantil garantizados y cuotas de contratación corporativa obligatorias para mujeres que ingresan a la industria pesada y el desarrollo de software.',
          extendedDescription: `La implementación del modelo de Sanna Marin requiere una reestructuración profunda. Ofrecer capacitación 100% subsidiada, estipendios de cuidado infantil garantizados y cuotas de contratación corporativa obligatorias para mujeres que ingresan a la industria pesada y el desarrollo de software. Esto implica un cambio radical en la forma en que abordamos el problema de "Brecha de Género en Sectores Tecnológicos e Industriales", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Cuotas Corporativas y Subsidios de Capacitación (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Cuotas Corporativas y Subsidios de Capacitación.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 30 },
            { name: 'Año 2', value: 60 },
            { name: 'Año 3', value: 95 },
            { name: 'Año 4', value: 135 },
            { name: 'Año 5', value: 190 }
          ],
          imageUrl: 'https://picsum.photos/seed/lab-10-solution/800/400'
        }
      },
      {
        id: 'lab-11',
        upvotes: 0,
        downvotes: 0,
        title: 'Carencia Sistémica de Habilidades Blandas (Soft Skills)',
        description: 'Falta sistémica de "habilidades blandas"; los empleadores informan que los graduados carecen de pensamiento crítico, resolución de conflictos y etiqueta profesional básica.',
        solution: {
          leader: 'Modelo Finlandés',
          model: 'Entrenamiento Conductual Simulado',
          description: 'Integrar un entrenamiento conductual riguroso, calificado y simulado en entornos corporativos durante el primer año de todos los programas vocacionales y universitarios.',
          extendedDescription: `La implementación del modelo de Modelo Finlandés requiere una reestructuración profunda. Integrar un entrenamiento conductual riguroso, calificado y simulado en entornos corporativos durante el primer año de todos los programas vocacionales y universitarios. Esto implica un cambio radical en la forma en que abordamos el problema de "Carencia Sistémica de Habilidades Blandas (Soft Skills)", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Entrenamiento Conductual Simulado (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Entrenamiento Conductual Simulado.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 40 },
            { name: 'Año 2', value: 75 },
            { name: 'Año 3', value: 115 },
            { name: 'Año 4', value: 160 },
            { name: 'Año 5', value: 220 }
          ],
          imageUrl: 'https://picsum.photos/seed/lab-11-solution/800/400'
        }
      },
      {
        id: 'lab-12',
        upvotes: 0,
        downvotes: 0,
        title: 'Vulnerabilidad Extrema de los Trabajadores Gig (Plataformas)',
        description: 'Vulnerabilidad extrema de la fuerza laboral de plataformas de aplicaciones en rápida expansión (entrega, viajes compartidos).',
        solution: {
          leader: 'Gavin Newsom',
          model: 'Seguridad Social Integrada por API',
          description: 'Obligar a las plataformas gig a integrar una API que deduzca y aporte automáticamente un micro-porcentaje de cada transacción directamente a un fondo de seguridad social administrado por el estado.',
          extendedDescription: `La implementación del modelo de Gavin Newsom requiere una reestructuración profunda. Obligar a las plataformas gig a integrar una API que deduzca y aporte automáticamente un micro-porcentaje de cada transacción directamente a un fondo de seguridad social administrado por el estado. Esto implica un cambio radical en la forma en que abordamos el problema de "Vulnerabilidad Extrema de los Trabajadores Gig (Plataformas)", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Seguridad Social Integrada por API (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Seguridad Social Integrada por API.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 50 },
            { name: 'Año 2', value: 90 },
            { name: 'Año 3', value: 135 },
            { name: 'Año 4', value: 185 },
            { name: 'Año 5', value: 250 }
          ],
          imageUrl: 'https://picsum.photos/seed/lab-12-solution/800/400'
        }
      },
      {
        id: 'lab-13',
        upvotes: 0,
        downvotes: 0,
        title: 'Centralización Geográfica de la Capacitación de Alta Calidad',
        description: 'Centralización geográfica de la capacitación de alta calidad en la capital, abandonando las provincias fronterizas y rurales.',
        solution: {
          leader: 'Modelo Australiano',
          model: 'Laboratorios Vocacionales Móviles Off-Grid',
          description: 'Desplegar una flota masiva de laboratorios vocacionales móviles fuera de la red (camiones equipados con simuladores de realidad virtual e impresoras 3D) que rotan continuamente por municipios remotos.',
          extendedDescription: `La implementación del modelo de Modelo Australiano requiere una reestructuración profunda. Desplegar una flota masiva de laboratorios vocacionales móviles fuera de la red (camiones equipados con simuladores de realidad virtual e impresoras 3D) que rotan continuamente por municipios remotos. Esto implica un cambio radical en la forma en que abordamos el problema de "Centralización Geográfica de la Capacitación de Alta Calidad", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Laboratorios Vocacionales Móviles Off-Grid (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Laboratorios Vocacionales Móviles Off-Grid.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 60 },
            { name: 'Año 2', value: 105 },
            { name: 'Año 3', value: 155 },
            { name: 'Año 4', value: 210 },
            { name: 'Año 5', value: 280 }
          ],
          imageUrl: 'https://picsum.photos/seed/lab-13-solution/800/400'
        }
      },
      {
        id: 'lab-14',
        upvotes: 0,
        downvotes: 0,
        title: 'Exclusión Laboral de Personas con Discapacidad',
        description: 'Exclusión sistémica y escasa integración en el mercado laboral de personas con discapacidades físicas o cognitivas.',
        solution: {
          leader: 'Angela Merkel',
          model: 'Cuotas de Inclusión y Subsidios Tecnológicos',
          description: 'Subsidiar configuraciones de trabajo remoto de alta tecnología y proporcionar exenciones fiscales masivas para las empresas que cumplan con un estricto umbral del 5% de fuerza laboral para personas con discapacidades verificadas.',
          extendedDescription: `La implementación del modelo de Angela Merkel requiere una reestructuración profunda. Subsidiar configuraciones de trabajo remoto de alta tecnología y proporcionar exenciones fiscales masivas para las empresas que cumplan con un estricto umbral del 5% de fuerza laboral para personas con discapacidades verificadas. Esto implica un cambio radical en la forma en que abordamos el problema de "Exclusión Laboral de Personas con Discapacidad", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Cuotas de Inclusión y Subsidios Tecnológicos (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Cuotas de Inclusión y Subsidios Tecnológicos.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 20 },
            { name: 'Año 2', value: 45 },
            { name: 'Año 3', value: 75 },
            { name: 'Año 4', value: 110 },
            { name: 'Año 5', value: 160 }
          ],
          imageUrl: 'https://picsum.photos/seed/lab-14-solution/800/400'
        }
      },
      {
        id: 'lab-15',
        upvotes: 0,
        downvotes: 0,
        title: 'Inflación de Títulos Universitarios (Degree Inflation)',
        description: 'Inflación desenfrenada de títulos donde los empleadores exigen títulos universitarios para roles técnicos básicos, excluyendo a trabajadores capaces.',
        solution: {
          leader: 'Modelo de Singapur',
          model: 'Contratación Basada en Competencias Ciegas',
          description: 'Prohibir legalmente los requisitos de títulos universitarios para el empleo estatal a menos que sea estrictamente necesario legalmente (ej. medicina), cambiando exclusivamente a pruebas de competencia ciegas basadas en habilidades.',
          extendedDescription: `La implementación del modelo de Modelo de Singapur requiere una reestructuración profunda. Prohibir legalmente los requisitos de títulos universitarios para el empleo estatal a menos que sea estrictamente necesario legalmente (ej. medicina), cambiando exclusivamente a pruebas de competencia ciegas basadas en habilidades. Esto implica un cambio radical en la forma en que abordamos el problema de "Inflación de Títulos Universitarios (Degree Inflation)", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Contratación Basada en Competencias Ciegas (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Contratación Basada en Competencias Ciegas.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 30 },
            { name: 'Año 2', value: 60 },
            { name: 'Año 3', value: 95 },
            { name: 'Año 4', value: 135 },
            { name: 'Año 5', value: 190 }
          ],
          imageUrl: 'https://picsum.photos/seed/lab-15-solution/800/400'
        }
      },
      {
        id: 'lab-16',
        upvotes: 0,
        downvotes: 0,
        title: 'Baja Productividad Laboral Crónica',
        description: 'Productividad laboral crónicamente baja (producción por hora) en comparación con los competidores regionales.',
        solution: {
          leader: 'Javier Milei',
          model: 'Incentivos Fiscales para Automatización',
          description: 'Incentivar la inversión de capital permitiendo a las empresas deducir instantáneamente el 100% del costo de la automatización y el software que mejoran la productividad en el primer año de compra.',
          extendedDescription: `La implementación del modelo de Javier Milei requiere una reestructuración profunda. Incentivar la inversión de capital permitiendo a las empresas deducir instantáneamente el 100% del costo de la automatización y el software que mejoran la productividad en el primer año de compra. Esto implica un cambio radical en la forma en que abordamos el problema de "Baja Productividad Laboral Crónica", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Incentivos Fiscales para Automatización (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Incentivos Fiscales para Automatización.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 40 },
            { name: 'Año 2', value: 75 },
            { name: 'Año 3', value: 115 },
            { name: 'Año 4', value: 160 },
            { name: 'Año 5', value: 220 }
          ],
          imageUrl: 'https://picsum.photos/seed/lab-16-solution/800/400'
        }
      },
      {
        id: 'lab-17',
        upvotes: 0,
        downvotes: 0,
        title: 'Inflexibilidad de Contratos Laborales (Trabajo Remoto y Parcial)',
        description: 'Contratos laborales altamente inflexibles que hacen que el trabajo a tiempo parcial, estacional y remoto sea legalmente riesgoso para los empleadores.',
        solution: {
          leader: 'Modelo Estonio',
          model: 'Ley de Trabajo Digital y Flexible',
          description: 'Promulgar una "Ley de Trabajo Digital y Flexible" modernizada que reconozca y proteja legalmente los contratos por hora, basados en proyectos y remotos sin la amenaza de clasificaciones punitivas retroactivas.',
          extendedDescription: `La implementación del modelo de Modelo Estonio requiere una reestructuración profunda. Promulgar una "Ley de Trabajo Digital y Flexible" modernizada que reconozca y proteja legalmente los contratos por hora, basados en proyectos y remotos sin la amenaza de clasificaciones punitivas retroactivas. Esto implica un cambio radical en la forma en que abordamos el problema de "Inflexibilidad de Contratos Laborales (Trabajo Remoto y Parcial)", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Ley de Trabajo Digital y Flexible (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Ley de Trabajo Digital y Flexible.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 50 },
            { name: 'Año 2', value: 90 },
            { name: 'Año 3', value: 135 },
            { name: 'Año 4', value: 185 },
            { name: 'Año 5', value: 250 }
          ],
          imageUrl: 'https://picsum.photos/seed/lab-17-solution/800/400'
        }
      },
      {
        id: 'lab-18',
        upvotes: 0,
        downvotes: 0,
        title: 'Formación Emprendedora Deficiente',
        description: 'Formación empresarial débil; los programas se centran en crear empleados en lugar de fundadores.',
        solution: {
          leader: 'Paul Kagame',
          model: 'Incubadoras de Creación de Empresas',
          description: 'Integrar incubadoras obligatorias de creación de empresas dentro de todos los centros vocacionales, proporcionando a las mejores cohortes de graduados capital semilla inmediato y micropréstamos sin intereses respaldados por el estado.',
          extendedDescription: `La implementación del modelo de Paul Kagame requiere una reestructuración profunda. Integrar incubadoras obligatorias de creación de empresas dentro de todos los centros vocacionales, proporcionando a las mejores cohortes de graduados capital semilla inmediato y micropréstamos sin intereses respaldados por el estado. Esto implica un cambio radical en la forma en que abordamos el problema de "Formación Emprendedora Deficiente", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Incubadoras de Creación de Empresas (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Incubadoras de Creación de Empresas.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 60 },
            { name: 'Año 2', value: 105 },
            { name: 'Año 3', value: 155 },
            { name: 'Año 4', value: 210 },
            { name: 'Año 5', value: 280 }
          ],
          imageUrl: 'https://picsum.photos/seed/lab-18-solution/800/400'
        }
      },
      {
        id: 'lab-19',
        upvotes: 0,
        downvotes: 0,
        title: 'Dependencia de Mano de Obra Extranjera Indocumentada',
        description: 'Alta dependencia de mano de obra extranjera indocumentada y de bajos salarios en la construcción y la agricultura, lo que suprime los salarios nacionales.',
        solution: {
          leader: 'Lee Kuan Yew',
          model: 'Visas de Trabajador Temporal Biométricas',
          description: 'Implementar un estricto sistema biométrico de visas para trabajadores temporales con un salario mínimo obligatorio, aplicando penalizaciones financieras paralizantes para los empleadores que operen fuera del sistema.',
          extendedDescription: `La implementación del modelo de Lee Kuan Yew requiere una reestructuración profunda. Implementar un estricto sistema biométrico de visas para trabajadores temporales con un salario mínimo obligatorio, aplicando penalizaciones financieras paralizantes para los empleadores que operen fuera del sistema. Esto implica un cambio radical en la forma en que abordamos el problema de "Dependencia de Mano de Obra Extranjera Indocumentada", pasando de soluciones temporales a un sistema robusto y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de ineficiencias sistémicas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`,
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo de Visas de Trabajador Temporal Biométricas (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación del modelo de Visas de Trabajador Temporal Biométricas.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 20 },
            { name: 'Año 2', value: 45 },
            { name: 'Año 3', value: 75 },
            { name: 'Año 4', value: 110 },
            { name: 'Año 5', value: 160 }
          ],
          imageUrl: 'https://picsum.photos/seed/lab-19-solution/800/400'
        }
      }
    ]
  }
];
