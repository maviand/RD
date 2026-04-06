const { Project, SyntaxKind } = require('ts-morph');

const contentPlan = {
  welfare: [
    { title: "Wallet Ciudadano Universal", desc: "Unificación de la distribución de subsidios evitando intermediarios y fraudes.", leader: "Gabinete de Política Social", model: "Sistema de Pago Centralizado y Directo", sDesc: "Aplicación móvil estatal que unifica la distribución de todos los subsidios gubernamentales (Supérate, Bonogas, etc.). Elimina intermediarios y tarjetas físicas, permitiendo transacciones rastreables en tiempo real y garantizando que las ayudas lleguen sin comisiones." },
    { title: "Tarjeta de Alimentación Condicionada (IA)", desc: "Subsidios bloqueados biométricamente para optimizar la nutrición infantil.", leader: "ADESS", model: "Filtro Nutricional Algorítmico", sDesc: "Uso de sistemas de punto de venta (POS) integrados con inteligencia artificial que analizan el carrito de compras del beneficiario. El sistema bloquea automáticamente el uso de fondos públicos para la compra de alcohol, tabaco o juegos de azar." },
    { title: "Pensión Básica Digitalizada", desc: "Subsidio a personas mayores atado a validación biométrica.", leader: "Ministerio de Hacienda y JCE", model: "Prueba de Vida Biométrica Remota", sDesc: "Automatización del pago de subsidios a envejecientes mediante un sistema de validación de vida vía reconocimiento facial en la app del gobierno, evitando fraudes de defunción." },
    { title: "Albergues Autosustentables y Formativos", desc: "Centros para personas sin hogar con integración a agricultura urbana.", leader: "Ministerio de la Mujer y Salud Pública", model: "Complejos Hidropónicos de Reinserción", sDesc: "Transformación de los albergues tradicionales en centros donde los usuarios contribuyen al mantenimiento del lugar mediante la operación de granjas hidropónicas autosustentables." },
    { title: "Score de Progreso Social Gamificado", desc: "Incentivos dinámicos a familias vulnerables por hitos de desarrollo.", leader: "Gabinete de Política Social", model: "Gamificación de Bonos del Estado", sDesc: "Un sistema de puntos que premie con micro-bonos adicionales a aquellas familias que demuestren asistencia escolar perfecta de sus hijos, cheques médicos prenatales al día y participación en programas." },
    { title: "Mapeo Satelital de Vulnerabilidad (Big Data)", desc: "Intervenciones automatizadas en infraestructura precaria.", leader: "Defensa Civil y Vivienda", model: "Detección de Riesgos por Visión Computacional", sDesc: "Uso de drones y análisis de imágenes satelitales mediante IA para mapear viviendas con techos de zinc y zonas inundables, permitiendo focalizar la ayuda." },
    { title: "Bolsa de Trabajo Obligatoria para Beneficiarios", desc: "Vinculación de asistencia a la reinserción laboral técnica.", leader: "INFOTEP y ADESS", model: "Escalera de Independencia Laboral", sDesc: "Condicionar temporalmente la recepción de fondos de ayuda social a able-bodied a la asistencia demostrable a redes de capacitación técnica de INFOTEP." },
    { title: "Auditoría de Inclusión Continua (Blockchain)", desc: "Trazabilidad de cada peso donado al esquema social.", leader: "Contraloría General", model: "Ledger Social Público", sDesc: "Trazar en tiempo real y públicamente los flujos de dinero del sistema de asistencia en una cadena de bloques estatal, eliminando los padrones adulterados." },
    { title: "Fondo de Apoyo Directo a Cuidadoras", desc: "Monetización del trabajo de cuidado en el hogar.", leader: "Ministerio de Trabajo / CONADIS", model: "Formalización de la Economía del Cuidado", sDesc: "Identificación, capacitación y compensación directa a familiares que han abandonado la fuerza laboral formal para cuidar a personas con discapacidad severa." },
    { title: "Redistribución de Excedentes en Tiempo Real", desc: "Vinculación directa entre supermercados y comedores sociales.", leader: "Industria y Comercio / CONANI", model: "Plataforma Logística de Alimentos Rescatados", sDesc: "Aplicación nacional de logística de último kilómetro que conecta los inventarios con fecha de caducidad inminente de grandes cadenas comerciales con bancos de alimentos." }
  ],
  education: [
    { title: "Currículo Financiero y Tecnológico", desc: "Inserción temprana de finanzas, programación y liderazgo emocional.", leader: "MINERD y Banco Central", model: "Educación Dual Pragmática", sDesc: "Rediseño enfocado en impartir educación financiera práctica, lógica de programación (algoritmia básica) y resiliencia emocional desde las escuelas primarias." },
    { title: "Sistema de Escuelas Chárter Público-Privadas", desc: "Administración autónoma y orientada a resultados en escuelas públicas.", leader: "MINERD y Sector Privado", model: "Modelo de Gestión Independiente Escolar", sDesc: "Transferir la gerencia de escuelas públicas sub-rendidoras a organizaciones educativas privadas sin fines de lucro bajo métricas estrictas de rendimiento." },
    { title: "Evaluación de Docentes 360°", desc: "Meritocracia salarial agresiva basada en impacto directo al alumno.", leader: "MINERD y ADP", model: "Escalafón Magisterial Data-Driven", sDesc: "Implementar auditorías anónimas y métricas de avance del alumnado. Aumentos masivos de sueldo a los maestros de mayor percentil y recapacitación obligatoria para bajo rendimiento." },
    { title: "Vouchers Educativos (Cheque Escolar Dinámico)", desc: "Empoderamiento económico directo a los padres para elegir la escuela.", leader: "Gobierno Central", model: "Competencia de Libre Mercado Educativo", sDesc: "Otorgar el financiamiento per cápita directamente a los padres para que elijan matricular a sus hijos en cualquier escuela pública o privada." },
    { title: "Realidad Virtual en STEM", desc: "Laboratorios hiperrealistas de ciencia mediante cascos de VR en escuelas.", leader: "MESCYT y OGTIC", model: "Aulas Metaversales", sDesc: "Despliegue de laboratorios de realidad virtual (VR) descentralizados para reemplazar infraestructura en química avanzada, disecciones anatómicas y simulaciones físicas." },
    { title: "Integración IA como Tutor 24/7", desc: "Provisión de un LLM estatal entrenado en el currículo dominicano.", leader: "MINERD y Centros de Innovación", model: "Asistente A.I. Curricular (ChatBot Local)", sDesc: "Desarrollo de un tutor inteligente conversacional enfocado al currículo que acompaña al estudiante después de escuela explicando matemáticas y gramática." },
    { title: "Programa Bilingüismo Nacional 2035", desc: "Inmersión total en inglés atada a alianzas extranjeras.", leader: "MESCYT y Diplomacia Extranjera", model: "Intercambio Lingüístico Masivo", sDesc: "Contratos de intercambio a escala para profesores nativos, acoplando el currículo estatal a plataformas asincrónicas certificadas por universidades anglosajonas." },
    { title: "Nutrición Cognitiva Optimizada", desc: "Rediseño agresivo del desayuno escolar eliminando ultraprocesados.", leader: "INABIE", model: "Agricultura Local a la Escuela", sDesc: "Sustitución por cadenas eficientes de suministro hiperlocal (huevos de granjas cooperativas, víveres frescos y proteínas no procesadas) orientados explícitamente al neurodesarrollo." },
    { title: "Campamentos de Reciclaje Académico", desc: "Intervención de tanda extendida deportiva y de refuerzo.", leader: "MINERD y Ministerio de Deportes", model: "Infraestructura Elite de Tanda Extendida", sDesc: "Conversión de estadios y recintos en polos de intervención intensiva donde niños con severo retraso regularizan su nivel a través de deporte de rendimiento." },
    { title: "Micro-Certificaciones Técnicas", desc: "Emisión de acreditaciones modulares durante el bachillerato.", leader: "MINERD e INFOTEP", model: "Bachillerato Empleable", sDesc: "Modificación de la secundaria para que durante 3ero y 4to el alumno deba acreditar tres badges profesionales emitidos por la industria (ej: AWS Cloud Essentials)." }
  ],
  infrastructure: [
    { title: "Red Ferroviaria Trans-Nacional", desc: "Conexión ferroviaria de alta velocidad SD-CYO-PC.", leader: "Ministerio de Obras Públicas", model: "Hub Ferroviario Caribeño (APP)", sDesc: "Construcción de un corredor logístico y de pasajeros impulsado por electricidad que interconecte el sur, cibao y el este." },
    { title: "Peajes Flotantes (Congestion Pricing)", desc: "Cobro dinámico urbano con lectura volumétrica de placas.", leader: "INTRANT / Fideicomiso", model: "Zonificación Vehicular Premium", sDesc: "Implementación de anillos virtuales en los cascos urbanos. El peaje aumenta automáticamente mediante pórticos de cámaras en horas pico de polución." },
    { title: "Soterramiento de Cables (PPP Masiva)", desc: "Ductos subterráneos de telecomunicaciones unificados.", leader: "INDOTEL y Alcaldías", model: "Plan Nacional Cielos Limpios", sDesc: "Gravámenes compartidos por empresas distribuidoras de energía y telecomunicaciones para financiar el soterramiento acelerado del cableado público." },
    { title: "Sistema de Paradas Climatizadas Solares", desc: "Módulos de transporte público tecnificados e independientes.", leader: "INTRANT y Energía", model: "Estaciones de Micromovilidad y Conexión", sDesc: "Paradas de diseño minimalista cubiertas de paneles bi-faciales, dotadas de sistemas MESH Wi-Fi de alta banda y pantallas de horarios E-Ink." },
    { title: "Flota Nacional Autobuses Cero Emisiones", desc: "Reemplazo total forzado de los conchos.", leader: "Gabinete de Transporte", model: "Corredores Eléctricos de Alta Frecuencia", sDesc: "Otorgamiento de rutas troncales exclusivas a cooperativas o empresas bajo condición obligatoria de poseer flotillas 100% eléctricas climatizadas." },
    { title: "Ecosistema de Micromovilidad Gubernamental", desc: "Vías segregadas rígidas para patinetas y bicicletas.", leader: "Obras Públicas y Concesiones", model: "Red de Supra-Ciclovías Protegidas", sDesc: "Re-diseño de calles céntricas para instalar ciclovías ininterrumpidas protegidas por barreras de concreto real conectando estaciones." },
    { title: "Bypass Portuarios Robotizados", desc: "Vías rápidas directas y exclusivas para Patanas.", leader: "Autoridad Portuaria", model: "Infraestructura Logística Autónoma", sDesc: "Construcción de viaductos segregados que salgan directamente desde los puertos hasta las autopistas circunvalatorias para evitar el tráfico cruzado." },
    { title: "Drenaje Pluvial Macro-Sustentable", desc: "Interceptores profundos y recargas de acuíferos subterráneos.", leader: "INAPA / CAASD", model: "Túneles Reservorios de Retención", sDesc: "Resolución transversal de inundaciones mediante infraestructura subterránea pasiva de gran diámetro que capta tormentas eléctricas masivas." },
    { title: "Aeropuertos Biométricos de Tránsito", desc: "Eliminación del checking físico tradicional en favor del escaneo celular.", leader: "Departamento Aeroportuario", model: "Pasillo Aéreo de Velocidad Continua", sDesc: "Implementación biométrica total que vincula pasaporte e iris permitiendo moverse ininterrumpidamente, acelerando los Hubs aéreos." },
    { title: "Zonificación Vertical Obligatoria", desc: "Ley Nacional de Densificación Urbana Inteligente.", leader: "Ministerio de Vivienda", model: "Desarrollo Macro Céntrico Compacto", sDesc: "Políticas que incrementan el impuesto predial a proyectos suburbanos horizontales para contener la expansión territorial y reducir costos marginales." }
  ],
  labor: [
    { title: "Semana Laboral de Flexibilidad Híbrida (4xDías)", desc: "Incentivo a modelos de productividad orientada en vez de horario en PyMES.", leader: "Ministerio de Trabajo", model: "Pacto de Productividad Compactada", sDesc: "Programa pionero donde el gobierno emite facilidades a las empresas que comprueben eficiencia implementando reducciones de horario presencial." },
    { title: "Reforma Sindical y Cesantía Portátil", desc: "Mochila modelo austriaco como fondo inter-laboral individual de desempleo.", leader: "Seguridad Social y Sindicatos", model: "Cuentas Individuales de Ahorro para Despidos", sDesc: "Modificar el pasivo contingente de cesantía, obligando pre-financiamiento en una cuenta individual portada por el empleado a cualquier empresa." },
    { title: "Programa Visa Global Nómada", desc: "Captación de divisas e inmersión intelectual foránea técnica.", leader: "Migración Y Turismo", model: "Visado de Alto Valor Agregado", sDesc: "Exención y rápida canalización para programadores foráneos permitiéndoles residir sin trámites corporativos. Impartición seminarios ITLA o INTEC." },
    { title: "Ley Startups Avanzada / 0% Fricción Inicial", desc: "E-Residency para constituir negocios exportadores de servicio en línea.", leader: "ProDominicana / MICM", model: "Caja de Arena de Exención (Sandbox Act)", sDesc: "Constitución en minutos mediante aplicación unificada digital de PyMEs. Permite 24 meses libres de tributación fiscal compleja bajo control auditable." },
    { title: "Amnistía General de Formalización", desc: "Transición masiva y unificada desde la economía callejera informal.", leader: "DGII / TSS", model: "Ruta Simplificada del Pequeño Comerciante", sDesc: "Poner fin a cacería administrativa unificando el alta patronal, salud y tributos en una cuota marginal mínima." },
    { title: "Fondo Nacional de Recapacitación (Reskilling)", desc: "Actualización tecnológica ante el desplazamiento industrial y de I.A.", leader: "INFOTEP / MICM", model: "Seguro de Obsolecencia Tecnológica Obrero", sDesc: "Inversión masiva para re-entrenamiento obligatorio cruzado, preparando operarios desplazados hacia tecnologías como techos solares o reparación de robótica básica." },
    { title: "Sueldo Mínimo Indexado por Microrregión", desc: "Fin de la distorsión del sueldo plano que quiebra campos lejanos.", leader: "Comité Nacional de Salarios", model: "Indexación Costo-Vida Regionalizada", sDesc: "Estratificación dinámica donde el salario se dicta puramente por el Banco Central respecto a inflación local por municipio, estimulando al inversor forneo a radicar fábricas en provincias apartadas." },
    { title: "Incentivo Tributario Geográfico y de Teletrabajo", desc: "Descongestión financiando teletrabajo.", leader: "Hacienda / Trabajo", model: "Bono de Redistribución Satelital", sDesc: "Empresas que envien más del 50% de su nómina hacia las zonas aledañas del empleado gozarán de recortes, compensando el sub-uso de calles, luz y sistemas en urbe." },
    { title: "Mercado Común de Empleabilidad Pública", desc: "Sistema interno (Gig-Economy) para servidores del gobierno.", leader: "MAP (Administración Pública)", model: "Intercambio Inter-Agencial de Talentos", sDesc: "Aplicación estatal en la que un oficinista pueda ser convocado instantáneamente a realizar micro-labores críticas pagadas interinstitucionalmente." },
    { title: "Seguro Paramétrico Automático Agro-Laboral", desc: "Fondo contra daños a salarios diarios por clima adverso.", leader: "Banco Agrícola / TSS", model: "Amortiguador Automático de Desastre", sDesc: "Fondeos en base a datos satelitales. Al rebasar indicadores por ciclón, la tesorería gira pagos directos a jornaleros desplazados evitando hambrunas urbanas." }
  ],
  tourism: [
    { title: "Turismo Médico y de Longevidad Especializado", desc: "Centros para intervenciones estéticas y terapias degenerativas.", leader: "Salud Pública / ASONAHORES", model: "Corredor Hospitalario Norte-Este", sDesc: "Autorizar 'zonas francas de salud' estilo resort para canalizar cirugías preventivas para mercado NA/EU, diversificando agresivamente." },
    { title: "Fideicomiso Estricto del Rescate Arrecifal", desc: "Regulaciones duras al cemento en costas y replantación coralina.", leader: "Medio Ambiente / Turismo", model: "Corredor Ecológico Resiliente", sDesc: "Penalización impositiva asfixiante a nuevas construcciones con huella de carbono agresiva y despliegue inusitado de viveros coralinos financiados." },
    { title: "Economía Circular y Refinerías de Sargazo", desc: "Biotecnología industrial resolviendo plagas costeras.", leader: "Sector Químico Privado / MESCYT", model: "Cadena de Valor Sargassum", sDesc: "Cooperativas acopian y biotecnológicas extranjeras transforman el alga putrefacta en materias primas (fertilizantes)." },
    { title: "App Consolidada: RD E-Tourist Wallet", desc: "Hub de pago y certificación", leader: "Ministerio de Turismo / MITUR", model: "Pasaporte Transaccional Integrado", sDesc: "Aplicación móvil interconectada que permite consumos formales blindados y pago ágil de impuestos sin interactuar con agencias dudosas." },
    { title: "Cámaras Bodycams a la Policía Turística", desc: "Prevención anti-extorsión, traducción inmediata.", leader: "POLITUR", model: "Protocolo de Agentes Digitales Bilingües", sDesc: "Uso obligatorio de vigilancia en vivo atada al C5i con reconocimiento dactilar y traductor de lenguas en un solo canal por auricular." },
    { title: "Impulso Radical al Circuito Inmersivo Colonial", desc: "Mapping 3D nocturna entre palacios y arqueología viva.", leader: "Ministerio de Cultura / ADN", model: "Meta-Museo Santo Domingo", sDesc: "Cientos de sensores y Mapping convierten la zona murallada en narraciones históricas gigantes interactivas sumado a experiencias AR a las ruinas." },
    { title: "Regularización Airbnb Comunitarios Perifericos", desc: "Filtro sanitario sin desestabilizar alquiler del dominicano.", leader: "Hacienda / Juntas de Vecinos", model: "Regularización Descentralizada Impositiva", sDesc: "Ingresos de pequeños host tributan, pero se somete estrictamente a control sanitario asegurando rentar sin criminalidad local camuflada." },
    { title: "Impuesto Solidario Dirigido Específico", desc: "Gravamen retorna transparentemente al municipio perceptor.", leader: "Finanzas y Alcaldías", model: "Presupuestos Garantizados Turísticos", sDesc: "Prohibición categórica de desviar impuestos locales a la cuenta nacional; forzando reinversión en agua y asfalto de esa propia demarcación provincial." },
    { title: "Conexiones Geoestratégicas Asia/Oriente", desc: "Subsidios para vuelos directos masivos de hiper-lujo interoceánico.", leader: "Depto Aviación Civil", model: "Destino Global Premium", sDesc: "Acuerdos que atraen un cliente oriental y árabe buscando robustecer al frente caídas de atlántico americano transformando el modelo local masificado." },
    { title: "Regulación Total Sanitaria del Ocio Nocturno", desc: "Erradicación la criminalidad asociada mediante censos médicos y certificaciones.", leader: "Fiscalía / Policía", model: "Modelo Cívico Integral Sano", sDesc: "Transformar nichos nocturnos, brindándoles clínicas exclusivas, cobros fiscales legales sin extorsión garantizándole a la zona familiar del resort independencia." }
  ],
  finance: [
    { title: "Gobierno Dinámico Cero Efectivo 2028", desc: "Final de transaccional de efectivo interburocrático.", leader: "Banco Central y DGI", model: "Pasarela de Pagos (GoV Pay)", sDesc: "Restringir uso masivo de papel moneda en ventanillas de hospitales, multas o pagos estatales cortando drásticamente el espacio a la extorsión pública." },
    { title: "Smart Contracts Estatales Obligatorios", desc: "Sistema blockchain de adquisiciones unificadas.", leader: "Dirección de Contrataciones", model: "Adquisiciones Gubernamentales Trazables", sDesc: "El estado sólo adquiere insumos por registro de código abierto anonimizado, eliminando falsificaciones y firmas corruptas en despachos sin testigos." },
    { title: "Ministerio de Coordinación Integral Consolidada", desc: "Consolidación de las 22 macro secretarías en un ente más eficiente.", leader: "Reforma Institucional Presidencial", model: "Downsizing Orgánico del Aparato", sDesc: "Fusión obligatoria absorbiendo competencias y suprimiendo directivas inoficiosas. Consolidación del gasto operativo en flotas vehiculares masivas y nóminas de recursos humanos inútiles y subexplotadas." },
    { title: "Cárceles Factoría Autosustentables en Campo Abierto", desc: "Trabajo penitenciario resarcitorio productivo y forzoso sin encierro urbano pasivo.", leader: "Procuraduría (PGR)", model: "Modelo Productivo Restitutivo Penitenciario", sDesc: "Reemplazo gradual completo de celdas hiper-hacinadas por campamentos aserraderos y centros o naves textiles donde las empresas privadas invierten bajo estricta vigilancia estatal." },
    { title: "Tribunales IA de Agilidad Comercial", desc: "Disputas mercantiles resueltas sistemáticamente por IA en un 90% automatizados.", leader: "Poder Judicial Dominicano", model: "Algoritmo Preventivo de Conciliación Rápida", sDesc: "Cargar contratos Pymes directamente en el portal oficial que los interpreta frente a impagos de inmediato sentenciando retenciones de cuentas sin durar años." },
    { title: "Rastreo Constante del Enriquecimiento Público", desc: "API en la declaración patrimonial frente al Banco Central vivo transparente.", leader: "Cámara de Cuentas Nacional", model: "Vitrina de Declaraciones Abiertas Indexadas", sDesc: "Conexión directa: cuando el sistema halle transferencias sin coincidir o la compra inexplicable de casas bajo parentela cercana lo congela automáticamente alertando a fiscalía." },
    { title: "Identidad Digital Estructurada Unívoca", desc: "Cédula absorbe todas licencias e historiales de golpe en billeteras celular digitales.", leader: "Junta Central Electoral", model: "Ecosystem Nacional ID Biométrico Avanzado", sDesc: "Unificación biométrica donde un código QR infalsificable vivo posee tu vacuna, multas pagadas y derecho al crédito evitando estafas mercantiles." },
    { title: "Presupuesto Nacional Cero Analítico", desc: "El presupuesto se reinicia desde cero al anuario sin indexaciones pasadas.", leader: "Presupuesto y Hacienda", model: "Zero-Based Budget Macro-Framework", sDesc: "Eliminación de aumentos graduales: cada ministerio debe sustentar de nuevo cada lápiz que pide al legislativo probando retorno y uso justificado de los pasados 365 días extirpando despilfarros." },
    { title: "Auditoría Sistémica de Nóminas IA", desc: "Poda del clientelismo estatal masivo inerte.", leader: "Contraloría de la República", model: "Meta Análisis Centralizado Cívico-Laboral", sDesc: "Redes que verifican IP's, ingresos del transporte, marcaje y declaraciones solapadas descubriendo miles de cobrar sin trabajar erradicándo su nombre." },
    { title: "Voto Digital Encriptado Open Source", desc: "Padrón inalterable desde la billetera electrónica personal evitando el clientelismo electoral.", leader: "JCE - Innovación Cívica", model: "Terminal de Sufragio Celular", sDesc: "Adopción de infraestructura adaptando seguridad local para emitir sufragio vía validación dactilar facial evitando mesas clientelares barriales." }
  ]
};

const project = new Project();
const sourceFile = project.addSourceFileAtPath('src/data.ts');

const exportedDecls = sourceFile.getVariableDeclaration('sectors');
if (exportedDecls) {
  const arrayLit = exportedDecls.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
  if (arrayLit) {
    const sectorElements = arrayLit.getElements();
    for (const elem of sectorElements) {
      if (elem.getKind() !== SyntaxKind.ObjectLiteralExpression) continue;
      
      const idProp = elem.getProperty('id');
      if (!idProp) continue;
      
      const idValue = idProp.getInitializer().getText().replace(/['"]/g, '');
      const lookupId = idValue === 'justice' ? 'finance' : idValue;
      
      if (contentPlan[lookupId]) {
        const problemsProp = elem.getProperty('problems');
        if (problemsProp) {
          const problemsArray = problemsProp.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
          if (problemsArray) {
            const probElements = problemsArray.getElements();
            
            for (let i = 0; i < 10 && i < probElements.length; i++) {
              const probElem = probElements[i];
              if (probElem.getKind() !== SyntaxKind.ObjectLiteralExpression) continue;
              
              const item = contentPlan[lookupId][i];
              
              const titleProp = probElem.getProperty('title');
              if (titleProp) titleProp.setInitializer(JSON.stringify(item.title));
              
              const descProp = probElem.getProperty('description');
              if (descProp) descProp.setInitializer(JSON.stringify(item.desc));
              
              const solutionProp = probElem.getProperty('solution');
              if (solutionProp && solutionProp.getInitializer().getKind() === SyntaxKind.ObjectLiteralExpression) {
                const solObj = solutionProp.getInitializer();
                const solLeader = solObj.getProperty('leader');
                if (solLeader) solLeader.setInitializer(JSON.stringify(item.leader));
                
                const solModel = solObj.getProperty('model');
                if (solModel) solModel.setInitializer(JSON.stringify(item.model));
                
                const solDesc = solObj.getProperty('description');
                if (solDesc) solDesc.setInitializer(JSON.stringify(item.sDesc));
              }
            }
          }
        }
      }
    }
  }
}

sourceFile.saveSync();
console.log('AST update successful.');
