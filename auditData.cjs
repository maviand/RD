const fs = require('fs');

const file = 'src/data.ts';
let content = fs.readFileSync(file, 'utf8');

const imageUrls = [
  "https://i.imgur.com/gazhLNZ.jpeg","https://i.imgur.com/NsLNNEq.jpeg","https://i.imgur.com/zYVVXui.jpeg",
  "https://i.imgur.com/UU9MdZ8.jpeg","https://i.imgur.com/wedTrfk.jpeg","https://i.imgur.com/yfNi3ZH.jpeg",
  "https://i.imgur.com/D2RtOdS.jpeg","https://i.imgur.com/GiWsa3T.jpeg","https://i.imgur.com/94hhaSd.jpeg",
  "https://i.imgur.com/LvPibBh.jpeg","https://i.imgur.com/d1A795R.jpeg","https://i.imgur.com/SlJrK8N.jpeg",
  "https://i.imgur.com/vAB4epI.jpeg","https://i.imgur.com/TNpmoiS.jpeg","https://i.imgur.com/qCqTRsn.jpeg"
];

function getRandomImage() {
  return imageUrls[Math.floor(Math.random() * imageUrls.length)];
}

function trimWordSalad(str, maxWords) {
  if (!str) return str;
  const words = str.split(/\s+/);
  if (words.length <= maxWords) return str;
  return words.slice(0, maxWords).join(' ') + "...";
}

// Find all auto IDs
const autoIdRegex = /id:\s*['"]([a-z]+-auto-\d+-\d+)['"]/gi;
let match;
const matches = [];
while ((match = autoIdRegex.exec(content)) !== null) {
  matches.push({ id: match[1], index: match.index });
}

console.log(`Found ${matches.length} auto items to process.`);

// Iterate backwards to safely replace strings
for (let i = matches.length - 1; i >= 0; i--) {
  let startIndex = matches[i].index;
  let startSol = content.indexOf('solution:', startIndex);
  if (startSol === -1) continue;
  
  let braceOpen = content.indexOf('{', startSol);
  let braceClose = content.indexOf('}', braceOpen);
  
  // Extract values using user's robust method
  function extractField(key, startIdx, maxEndIdx) {
    let keyIdx = content.indexOf(key + ": ", startIdx);
    if (keyIdx === -1 || keyIdx > maxEndIdx) return null;
    let quote = content.charAt(keyIdx + key.length + 2);
    let endIdx = content.indexOf(quote + ",", keyIdx + key.length + 3);
    if (endIdx === -1 || endIdx > maxEndIdx) return null;
    return {
      value: content.substring(keyIdx + key.length + 3, endIdx).replace(/\\'/g, "'").replace(/\\"/g, '"'),
      startIdx: keyIdx,
      endIdx: endIdx + 2 // include quote and comma
    };
  }

  let titleData = extractField("title", startIndex, startSol);
  let descData = extractField("description", startIndex, startSol);
  let leaderData = extractField("leader", braceOpen, braceClose);
  let modelData = extractField("model", braceOpen, braceClose);
  let sDescData = extractField("description", braceOpen, braceClose); // inner description
  
  let newTitle = titleData ? trimWordSalad(titleData.value, 10) : '';
  let newDesc = descData ? trimWordSalad(descData.value, 20) : '';
  let newLeader = leaderData ? trimWordSalad(leaderData.value, 8) : '';
  let newModel = modelData ? trimWordSalad(modelData.value, 10) : '';
  let newSDesc = sDescData ? trimWordSalad(sDescData.value, 25) : '';

  let extDesc = `La implementación del modelo de ${newModel} requiere una reestructuración profunda liderada por ${newLeader}. Esta iniciativa busca resolver las ineficiencias sistémicas mediante un enfoque innovador y auditable. La estrategia central se basa en la adopción de métricas de rendimiento estrictas y la eliminación de trabas burocráticas, garantizando que cada fase de ejecución esté alineada con los más altos estándares internacionales.`;

  let flavorfulSolution = `{
          imageUrl: ${JSON.stringify(getRandomImage())},
          leader: ${JSON.stringify(newLeader)},
          model: ${JSON.stringify(newModel)},
          description: ${JSON.stringify(newSDesc)},
          extendedDescription: ${JSON.stringify(extDesc)},
          implementationSteps: [
            'Fase 1: Auditoría forense y diseño del marco legal para el modelo (Meses 1-3)',
            'Fase 2: Despliegue de infraestructura tecnológica y capacitación de personal clave (Meses 4-6)',
            'Fase 3: Implementación piloto controlada con métricas de rendimiento estrictas (Meses 7-12)',
            'Fase 4: Escalamiento a nivel nacional y transición completa del sistema (Año 2)',
            'Fase 5: Monitoreo automatizado y optimización continua basada en datos (Año 3+)'
          ],
          expectedOutcomes: [
            'Reducción del 50% en ineficiencias operativas durante los primeros 24 meses.',
            'Aumento medible en la transparencia y trazabilidad de los recursos asignados.',
            'Establecimiento de un estándar regional en la aplicación de las nuevas normativas.',
            'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 40 },
            { name: 'Año 2', value: 75 },
            { name: 'Año 3', value: 115 },
            { name: 'Año 4', value: 160 },
            { name: 'Año 5', value: 220 }
          ]
        }`;

  // Replace solution block
  content = content.substring(0, startSol + 9) + " " + flavorfulSolution + content.substring(braceClose + 1);
  
  // Replace description in prob block (do desc first if it comes after title, or just do it right-to-left)
  // Actually, extractField returns indices that might shift if we modify them.
  // We can just use string replacements on the probStr like before.
  let probStr = content.substring(startIndex, startSol);
  if (descData && titleData) {
     if (descData.startIdx > titleData.startIdx) {
        content = content.substring(0, descData.startIdx) + `description: ${JSON.stringify(newDesc)},` + content.substring(descData.endIdx);
        content = content.substring(0, titleData.startIdx) + `title: ${JSON.stringify(newTitle)},` + content.substring(titleData.endIdx);
     } else {
        content = content.substring(0, titleData.startIdx) + `title: ${JSON.stringify(newTitle)},` + content.substring(titleData.endIdx);
        content = content.substring(0, descData.startIdx) + `description: ${JSON.stringify(newDesc)},` + content.substring(descData.endIdx);
     }
  } else {
     if (descData) content = content.substring(0, descData.startIdx) + `description: ${JSON.stringify(newDesc)},` + content.substring(descData.endIdx);
     if (titleData) content = content.substring(0, titleData.startIdx) + `title: ${JSON.stringify(newTitle)},` + content.substring(titleData.endIdx);
  }
}

fs.writeFileSync(file, content);
console.log("Successfully updated data.ts with flavorful content.");
