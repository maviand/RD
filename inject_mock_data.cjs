const fs = require('fs');
const file = 'src/data.ts';
let content = fs.readFileSync(file, 'utf-8');

const enrichedMock = `enrichedContent: {
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
          }`;

content = content.replace("internalRoute: '/gabinetes'", "internalRoute: '/gabinetes',\n          " + enrichedMock);
fs.writeFileSync(file, content);
console.log('Mock data injected.');
