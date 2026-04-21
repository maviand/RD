const fs = require('fs');
const content = fs.readFileSync('src/data.ts', 'utf8');
const matches = content.match(/imageUrl:\s*['"](https:\/\/i\.imgur\.com\/[^'"]+)['"]/g) || [];
const urls = [...new Set(matches.map(m => m.split(/['"]/)[1]))];
console.log(JSON.stringify(urls.slice(0, 15)));
