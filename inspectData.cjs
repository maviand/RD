const fs = require('fs');

const content = fs.readFileSync('src/data.ts', 'utf8');

const matches = content.match(/id:\s*['"]([a-z]+-auto-\d+-\d+)['"]/gi) || [];

console.log('Total auto IDs found:', matches.length);
if (matches.length > 0) {
    console.log('Sample IDs:', matches.slice(0, 5));
}
