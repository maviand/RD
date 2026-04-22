import fs from 'fs';
const content = fs.readFileSync('src/data.ts', 'utf-8');
const regex = /id:\s*['"]([^'"]+)['"]/g;
let match;
const ids = new Set();
while ((match = regex.exec(content)) !== null) {
  ids.add(match[1]);
}
console.log('Unique IDs:', Array.from(ids).slice(0, 100));
