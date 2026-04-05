const fs = require('fs');
const content = fs.readFileSync('src/components/SectorView.tsx', 'utf-8');

// Replace standard imports
let newContent = content.replace(/import\s+([A-Za-z0-9_]+)\s+from\s+'\.\/([A-Za-z0-9_]+Chart)'\s*;/g, "const $1 = React.lazy(() => import('./$2'));");

// Replace block imports like `import { A, B } from './JusticeCharts';`
const blockRegex = /import\s+\{([\s\S]*?)\}\s+from\s+'\.\/([^']+)'\s*;/g;

newContent = newContent.replace(blockRegex, (match, p1, p2) => {
  const exports = p1.split(',').map(s => s.trim()).filter(Boolean);
  return exports.map(e => `const ${e} = React.lazy(() => import('./${p2}').then(module => ({ default: module.${e} })));`).join('\n');
});

fs.writeFileSync('src/components/SectorView.tsx', newContent);
console.log("Rewrite successful.");
