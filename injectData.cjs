const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src/data.ts');
let content = fs.readFileSync(file, 'utf8');

// The new data to inject
const telemedicina = `{
  id: 'hlt-telemedina',
  upvotes: 0,
  downvotes: 0,
  title: 'Telemedicina Integrada e IA Diagnóstica',
  description: 'Sistemas colapsados y esperas de 8 meses para especialistas debido a la centralización hospitalaria.',
  solution: {
    leader: 'Ministerio de Salud / OMS',
    model: 'Hospital Virtual Nacional',
    description: 'Plataforma nacional de IA para triaje rápido y cabinas robóticas en farmacias para diagnosticar parámetros vitales. Las consultas especializadas se realizan por videoconferencia con médicos a nivel nacional, eliminando las listas de espera físicas y descongestionando las emergencias.'
  }
}`;

const tourismTechHub = `{
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
}`;

const waterSector = `{
  id: 'water',
  title: 'Recursos Hídricos',
  icon: Zap,
  overview: 'Gestión inteligente y tecnológica para la crisis de agua potable e inundaciones, proyectando una autonomía hídrica mediante desalinización y recarga de acuíferos.',
  problems: [
    {
      id: 'wat-1',
      upvotes: 0,
      downvotes: 0,
      title: 'Déficit de Agua Dulce y Contaminación de Acuíferos',
      description: 'Estrés hídrico severo por la contaminación de ríos y el uso irracional agrícola e industrial.',
      solution: {
        leader: 'INAPA / INDRHI',
        model: 'Desalinización Modular Solar',
        description: 'Construcción de plantas desalinizadoras impulsadas 100% por energía termosolar en las cuencas secas del Sur, y recarga profunda artificial de acuíferos en la capital usando agua de tormenta filtrada.'
      }
    }
  ]
}`;

let finalContent = content;

// 1. Inject to healthcare
let hcIndex = finalContent.indexOf("id: 'healthcare'");
if (hcIndex !== -1) {
    let hcProbs = finalContent.indexOf('problems: [', hcIndex);
    if (hcProbs !== -1) {
        finalContent = finalContent.substring(0, hcProbs + 11) + "\n" + telemedicina + ",\n" + finalContent.substring(hcProbs + 11);
    }
}

// 2. Inject to tourism
let tourIndex = finalContent.indexOf("id: 'tourism'");
if (tourIndex !== -1) {
    let tourProbs = finalContent.indexOf('problems: [', tourIndex);
    if (tourProbs !== -1) {
        finalContent = finalContent.substring(0, tourProbs + 11) + "\n" + tourismTechHub + ",\n" + finalContent.substring(tourProbs + 11);
    }
}

// 3. Inject water sector at the end 
let endArrIdx = finalContent.lastIndexOf('];');
if (endArrIdx !== -1) {
    // Find the last "  }" before "];"
    let lastBrace = finalContent.lastIndexOf('}', endArrIdx);
    if (lastBrace !== -1) {
        finalContent = finalContent.substring(0, lastBrace + 1) + ",\n" + waterSector + "\n];"
    } else {
        finalContent = finalContent.substring(0, endArrIdx) + ",\n" + waterSector + "\n];"
    }
}

fs.writeFileSync(file, finalContent);
console.log('Phase 2 Data injected successfully!');
