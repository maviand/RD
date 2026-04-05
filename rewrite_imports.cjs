const fs = require('fs');
const file = 'src/components/SectorView.tsx';
const content = fs.readFileSync(file, 'utf-8');
const lines = content.split('\n');

const newLines = [];
let inBlock = false;
let blockImports = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  if (i >= 4 && i <= 169) {
    const defMatch = line.match(/^import\s+([A-Za-z0-9_]+)\s+from\s+'(\.\/[A-Za-z0-9_]+Chart)'\s*;/);
    if (defMatch) {
      newLines.push(`const ${defMatch[1]} = React.lazy(() => import('${defMatch[2]}'));`);
      continue;
    }

    if (line.match(/^import\s+\{\s*$/)) {
      inBlock = true;
      blockImports = [];
      continue;
    }

    if (inBlock) {
      const endMatch = line.match(/^\}\s*from\s+'(\.\/[A-Za-z0-9_]+)'\s*;/);
      if (endMatch) {
        inBlock = false;
        for (const exp of blockImports) {
          newLines.push(`const ${exp} = React.lazy(() => import('${endMatch[1]}').then(module => ({ default: module.${exp} })));`);
        }
        continue;
      }
      const nameMatch = line.match(/^\s*([A-Za-z0-9_]+),?$/);
      if (nameMatch) {
        blockImports.push(nameMatch[1]);
      }
      continue;
    }
    newLines.push(line);
  } else {
    newLines.push(line);
  }
}

fs.writeFileSync(file, newLines.join('\n'));
console.log('Done');
