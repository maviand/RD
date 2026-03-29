import fs from 'fs';

const dataFile = './src/data.ts';
let content = fs.readFileSync(dataFile, 'utf8');

// remove upvotes and downvotes
content = content.replace(/\s*upvotes: \d+,/g, '');
content = content.replace(/\s*downvotes: \d+,/g, '');

// remove extendedDescription, implementationSteps, expectedOutcomes, chartData, imageUrl
content = content.replace(/,\s*extendedDescription: `[\s\S]*?`,\s*implementationSteps: \[[\s\S]*?\],\s*expectedOutcomes: \[[\s\S]*?\],\s*chartData: \[[\s\S]*?\],\s*imageUrl: '.*?'/g, '');

fs.writeFileSync(dataFile, content, 'utf8');
console.log('Data restored successfully!');
