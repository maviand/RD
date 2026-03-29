import fs from 'fs';

const dataPath = './src/data.ts';
let content = fs.readFileSync(dataPath, 'utf-8');

content = content.replace(/upvotes:\s*\d+,/g, 'upvotes: 0,');
content = content.replace(/downvotes:\s*\d+,/g, 'downvotes: 0,');

fs.writeFileSync(dataPath, content);
console.log('Votes reset to 0.');
