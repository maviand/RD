const fs = require('fs');
let data = fs.readFileSync('src/data.ts', 'utf8');

const targetStr = `'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ,
{
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
}
      ],
          chartData: [
            { name: 'Año 1', value: 40 },
            { name: 'Año 2', value: 75 },
            { name: 'Año 3', value: 115 },
            { name: 'Año 4', value: 160 },
            { name: 'Año 5', value: 220 }
          ]
        }
                }`;

const replacementStr = `'Retorno de inversión (ROI) positivo proyectado para el quinto año de implementación.'
          ],
          chartData: [
            { name: 'Año 1', value: 40 },
            { name: 'Año 2', value: 75 },
            { name: 'Año 3', value: 115 },
            { name: 'Año 4', value: 160 },
            { name: 'Año 5', value: 220 }
          ]
        }
      },
      {
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

if (data.includes(targetStr)) {
  data = data.replace(targetStr, replacementStr);
  fs.writeFileSync('src/data.ts', data);
  console.log('Fixed hlt-telemedina');
} else {
  console.log('Could not find target string. Proceeding to find it dynamically.');
  
  // Dynamic fix if exact match fails
  const startIdx = data.indexOf("id: 'hlt-telemedina',");
  if (startIdx !== -1) {
    // Just replace the whole messed up area using indices
    // This is safer if whitespace is an issue
    console.log('Found hlt-telemedina index.');
  }
}
