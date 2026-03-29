import fs from 'fs';

let data = fs.readFileSync('src/data.ts', 'utf8');

const replacements = [
  ['Austeridad de Motosierra', 'Optimización de Recursos'],
  ['Purga Meritocrática', 'Evaluación Basada en el Mérito'],
  ['Meritocracia de Alto Riesgo', 'Sistema Basado en el Mérito'],
  ['implacable', 'constante'],
  ['Abolir', 'Eliminar'],
  ['Privatización del Mercado', 'Apertura a Nuevas Opciones'],
  ['despido automático', 'reemplazo'],
  ['catastróficos', 'graves'],
  ['Catastróficos', 'Graves'],
  ['Hegemonía', 'Control excesivo'],
  ['Incompetencia', 'Bajo rendimiento'],
  ['monopólico', 'absoluto'],
  ['Austeridad', 'Eficiencia'],
  ['Motosierra', 'Revisión profunda'],
  ['Privatización', 'Apertura'],
  ['Doble Certificación', 'Certificación Transparente'],
  ['Rigor Estructural', 'Mejora Continua'],
  ['rendición de cuentas', 'transparencia'],
  ['titularidad', 'permanencia'],
  ['inflación de nómina', 'exceso de personal'],
  ['gastos generales no instructivos', 'gastos innecesarios'],
  ['presupuesto base cero', 'revisión total del presupuesto'],
  ['auditorías sin previo aviso', 'revisiones constantes'],
  ['cuotas obligatorias', 'pagos forzosos'],
  ['gravan', 'afectan'],
];

for (const [oldWord, newWord] of replacements) {
  data = data.replaceAll(oldWord, newWord);
}

fs.writeFileSync('src/data.ts', data);
console.log('Done softening language.');
