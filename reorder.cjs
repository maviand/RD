const fs = require('fs');
let content = fs.readFileSync('src/data.ts', 'utf-8');

function extractBlock(id) {
  const marker = `id: '${id}',`;
  const idx = content.indexOf(marker);
  if (idx === -1) return null;
  
  let start = content.lastIndexOf('{', idx);
  let end = -1;
  let braces = 0;
  for (let i = start; i < content.length; i++) {
    if (content[i] === '{') braces++;
    if (content[i] === '}') {
      braces--;
      if (braces === 0) {
        end = i + 1;
        break;
      }
    }
  }
  
  let block = content.substring(start, end);
  let removeStart = start;
  let removeEnd = end;
  
  // Clean up trailing comma
  if (content[removeEnd] === ',') {
    removeEnd++;
    // And newline
    if (content[removeEnd] === '\n') removeEnd++;
  } else if (content[removeEnd] === '\r' && content[removeEnd+1] === '\n') {
     removeEnd += 2;
  }
  
  content = content.substring(0, removeStart) + content.substring(removeEnd);
  return block;
}

const techhub = extractBlock('tour-techhub');
const telemedina = extractBlock('hlt-telemedina');

// Now insert them at the end of their sectors.
// tourism ends right before id: 'welfare'
const welfareIdx = content.indexOf(`id: 'welfare'`);
if (welfareIdx !== -1) {
  let insertIdx = content.lastIndexOf('],', welfareIdx);
  if (insertIdx !== -1) {
    // Insert right before the closing bracket of problems array
    content = content.substring(0, insertIdx) + ',\n' + techhub + '\n      ' + content.substring(insertIdx);
  }
}

// healthcare ends right before id: 'justice'
const justiceIdx = content.indexOf(`id: 'justice'`);
if (justiceIdx !== -1) {
  let insertIdx = content.lastIndexOf('],', justiceIdx);
  if (insertIdx !== -1) {
    // Insert right before the closing bracket of problems array
    content = content.substring(0, insertIdx) + ',\n' + telemedina + '\n      ' + content.substring(insertIdx);
  }
}

// Ensure no double commas 
content = content.replace(/,\s*,/g, ',');

fs.writeFileSync('src/data.ts', content);
console.log('Done!');
