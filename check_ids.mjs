import fs from 'fs';
const content = fs.readFileSync('src/data.ts', 'utf-8');
const regex = /id:\s*['"](tou-[^'"]+)['"]/g;
let match;
const ids = [];
while ((match = regex.exec(content)) !== null) {
  ids.push(match[1]);
}
console.log('Tourism related IDs:', ids);
