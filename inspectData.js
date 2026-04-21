const fs = require('fs');

const content = fs.readFileSync('src/data.ts', 'utf8');

// The file exports `sectors` array. Let's try to find all IDs that have "-auto-".
const matches = content.match(/id:\s*['"]([a-z]+-auto-\d+-\d+)['"]/gi) || [];

console.log('Total auto IDs found:', matches.length);
if (matches.length > 0) {
    console.log('Sample IDs:', matches.slice(0, 5));
}
