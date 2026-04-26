const fs = require('fs');
let data = fs.readFileSync('src/data.ts', 'utf8');

// Fix 1: tour-20 block
const startIdx = data.indexOf("id: 'tour-20',");
const endIdx = data.indexOf("id: 'welfare',");

if (startIdx !== -1 && endIdx !== -1) {
  const replacement = `id: 'tour-20',
        title: 'Falta de Estrategia de Comunicación de Crisis',
        description: 'Carencia de una estrategia de comunicación de crisis unificada y transparente durante eventos de relaciones públicas internacionales negativos.',
        solution: {
          imageUrl: "https://i.imgur.com/yVmn7kc.jpeg",
          leader: 'Jacinda Ardern',
          model: 'Panel de Transparencia en Tiempo Real',
          description: 'Retener permanentemente a una firma internacional de relaciones públicas de primer nivel e implementar un panel público que proporcione métricas de salud y seguridad en tiempo real.',
          extendedDescription: 'La implementación del modelo de Jacinda Ardern requiere una reestructuración profunda. Retener permanentemente a una firma internacional de relaciones públicas de primer nivel e implementar un panel público que proporcione métricas de salud y seguridad en tiempo real. Esto implica un cambio radical en la forma en que abordamos el problema de "Falta de Estrategia de Comunicación de Crisis", pasando de soluciones temporales a un sistema robusto y auditable.',
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica (Meses 4-6)',
            'Fase 3: Implementación piloto controlada (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional (Año 2)',
            'Fase 5: Monitoreo automatizado (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 30 },
            { name: 'Año 2', value: 60 },
            { name: 'Año 3', value: 95 },
            { name: 'Año 4', value: 135 },
            { name: 'Año 5', value: 190 }
          ]
        }
      },
      {
        id: 'tour-techhub',
        upvotes: 0,
        downvotes: 0,
        title: 'Turismo Médico y Hubs Tecnológicos Integrados',
        description: 'Dependencia extrema de un modelo de sol y playa de bajo valor agregado, vulnerable a crisis estacionales.',
        solution: {
          leader: 'Ministerio de Turismo / MESCYT',
          model: 'Zonas Francas Médicas y Nómadas Digitales',
          description: 'Creación de condominios y clústeres turísticos exentos de impuestos específicos para clínicas de cirugía ambulatoria y recuperación de primer orden mundial, entrelazado con una visa inmediata para nómadas digitales (Tech Hubs).'
        }
      }
    ]
  },
  {
    `;
  
  // Actually, we need to find the correct insertion point. We can just substring to welfare minus some spaces.
  let before = data.substring(0, startIdx);
  let after = data.substring(endIdx);
  
  // Make sure we add back the id: 'welfare' part properly
  data = before + replacement + after;
}

// Fix 2: hlt-telemedina block around line 3670
const fix2Target = `'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ,
{
  id: 'hlt-telemedina',`;

if (data.includes(fix2Target)) {
  data = data.replace(fix2Target, `'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ]
        }
      },
      {
        id: 'hlt-telemedina',`);
}

fs.writeFileSync('src/data.ts', data);
console.log('Fixed data.ts');
