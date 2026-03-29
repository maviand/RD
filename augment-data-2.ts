import fs from 'fs';

let content = fs.readFileSync('src/data.ts', 'utf8');

// 1. Add timeline and partners to megaproject
content = content.replace(/megaproject:\s*\{([\s\S]*?)\},?\n\s*problems:/g, (match, p1) => {
  if (p1.includes('timeline:')) return match;

  const timeline = `,\n      timeline: [\n        { phase: '2026-2027', description: 'Fase inicial de planificación, auditoría y diseño arquitectónico.' },\n        { phase: '2028-2029', description: 'Despliegue de infraestructura base y programas piloto en zonas clave.' },\n        { phase: '2030+', description: 'Expansión a nivel nacional, optimización continua y evaluación de impacto.' }\n      ]`;
  const partners = `,\n      partners: ['Banco Interamericano de Desarrollo (BID)', 'Ministerio de Economía, Planificación y Desarrollo', 'Sector Privado Local', 'ONGs Internacionales', 'Agencias de Cooperación (USAID, JICA)']`;
  
  return `megaproject: {${p1}${timeline}${partners}\n    },\n    problems:`;
});

// 2. Update imageUrl
content = content.replace(/id:\s*['"]([^'"]+)['"]([\s\S]*?)imageUrl:\s*['"]([^'"]+)['"]/g, (match, id, middle, oldUrl) => {
  const newUrl = `https://picsum.photos/seed/${id}-solution/800/400`;
  return `id: '${id}'${middle}imageUrl: '${newUrl}'`;
});

// 3. Update chartData
let chartCounter = 0;
content = content.replace(/chartData:\s*\[([\s\S]*?)\]/g, (match, inner) => {
  chartCounter++;
  const base = (chartCounter % 5) * 10;
  const data = `[
            { name: 'Año 1', value: ${20 + base} },
            { name: 'Año 2', value: ${45 + base * 1.5} },
            { name: 'Año 3', value: ${75 + base * 2} },
            { name: 'Año 4', value: ${110 + base * 2.5} },
            { name: 'Año 5', value: ${160 + base * 3} }
          ]`;
  return `chartData: ${data}`;
});

fs.writeFileSync('src/data.ts', content, 'utf8');
console.log('Done');
