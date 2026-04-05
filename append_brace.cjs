const fs = require('fs');
const file = 'src/components/SectorView.tsx';
let content = fs.readFileSync(file, 'utf-8');
if (!content.trim().endsWith('}')) {
  content += '\n}\n';
  fs.writeFileSync(file, content);
}
