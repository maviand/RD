import fs from 'fs';

const dataFile = './src/data.ts';
let content = fs.readFileSync(dataFile, 'utf8');

const extendedDescription = `Esta solución requiere un enfoque multifacético que aborde tanto las causas subyacentes como los síntomas inmediatos. La implementación debe ser rigurosa, basada en datos empíricos y adaptada a las realidades locales de la República Dominicana. Al adoptar este modelo, no solo mitigamos el problema actual, sino que también establecemos una base sólida para el crecimiento sostenible y la resiliencia a largo plazo. La clave del éxito radicará en la ejecución impecable, la transparencia en la asignación de recursos y la voluntad política inquebrantable para superar la resistencia institucional.`;

const implementationSteps = `[
            'Fase 1: Auditoría Integral y Diagnóstico (Meses 1-3)',
            'Fase 2: Diseño del Marco Regulatorio y Legal (Meses 4-6)',
            'Fase 3: Despliegue de Infraestructura Tecnológica Piloto (Meses 7-12)',
            'Fase 4: Expansión Nacional y Capacitación de Personal (Año 2)',
            'Fase 5: Monitoreo, Evaluación y Ajuste Continuo (Año 3 en adelante)'
          ]`;

const expectedOutcomes = `[
            'Reducción del 40% en ineficiencias operativas en los primeros 24 meses.',
            'Aumento del 25% en la satisfacción ciudadana y confianza institucional.',
            'Retorno de Inversión (ROI) proyectado del 150% a 5 años.',
            'Establecimiento de un estándar regional en mejores prácticas y gobernanza.'
          ]`;

const chartData = `[
            { name: 'Año 1', value: 20 },
            { name: 'Año 2', value: 45 },
            { name: 'Año 3', value: 75 },
            { name: 'Año 4', value: 110 },
            { name: 'Año 5', value: 160 }
          ]`;

const imageUrl = `'https://picsum.photos/seed/dr-solution/800/400'`;

// Regex to find the solution object inside a problem.
// We can find `solution: { ... }` and replace it.
content = content.replace(/solution:\s*\{\s*leader:\s*(['"`].*?['"`]),\s*model:\s*(['"`].*?['"`]),\s*description:\s*(['"`].*?['"`])\s*\}/g, (match, leader, model, desc) => {
  return `solution: {
          leader: ${leader},
          model: ${model},
          description: ${desc},
          extendedDescription: \`${extendedDescription}\`,
          implementationSteps: ${implementationSteps},
          expectedOutcomes: ${expectedOutcomes},
          chartData: ${chartData},
          imageUrl: ${imageUrl}
        }`;
});

// Add upvotes and downvotes to the problem object
content = content.replace(/id:\s*['"`]([a-z]{3}-\d+)['"`],/g, (match, id) => {
  const upvotes = Math.floor(Math.random() * 500) + 50;
  const downvotes = Math.floor(Math.random() * 50);
  return `${match}\n        upvotes: ${upvotes},\n        downvotes: ${downvotes},`;
});

fs.writeFileSync(dataFile, content, 'utf8');
console.log('Data augmented successfully!');
