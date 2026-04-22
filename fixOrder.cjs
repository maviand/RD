const fs = require('fs');

let content = fs.readFileSync('src/data.ts', 'utf-8');

// The file is too big for a simple AST parse/stringify without losing comments and formatting.
// But we know 'tour-techhub' is a single object in the array. 
// We can use a regex or string manipulation.

function moveProblemToEnd(problemId) {
  const startRegex = new RegExp(`{\\s*id:\\s*['"]${problemId}['"]`);
  const match = content.match(startRegex);
  if (!match) return;

  const startIndex = match.index;
  // find the end of this object by counting braces
  let braceCount = 0;
  let endIndex = -1;
  for (let i = startIndex; i < content.length; i++) {
    if (content[i] === '{') braceCount++;
    if (content[i] === '}') {
      braceCount--;
      if (braceCount === 0) {
        endIndex = i + 1;
        break;
      }
    }
  }

  if (endIndex === -1) return;

  // We need to also capture the trailing comma if it exists
  let block = content.substring(startIndex, endIndex);
  let removeStart = startIndex;
  let removeEnd = endIndex;
  
  if (content[removeEnd] === ',') {
    removeEnd++;
  } else {
    // maybe there's a comma before it
    const beforeStr = content.substring(removeStart - 10, removeStart);
    if (beforeStr.includes(',')) {
      removeStart = content.lastIndexOf(',', removeStart - 1);
    }
  }

  // Remove the block
  content = content.substring(0, removeStart) + content.substring(removeEnd);

  // Find the end of the problems array for its sector
  // The sector has an id, e.g. id: 'tourism' or id: 'healthcare'
  // Then a problems: [ array.
  // We can just insert it before the closing bracket of that problems array.
  
  // This might be tricky. Let's just find the next problem in the same sector.
  // Actually, we can use Babel or just do it manually. 
}

moveProblemToEnd('tour-techhub');
moveProblemToEnd('hlt-telemedina');
