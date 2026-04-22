const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      let newContent = content
        .replace(/formatter={\(value: number/g, 'formatter={(value: any')
        .replace(/formatter={\(value: number, name: string\)/g, 'formatter={(value: any, name: any)')
        .replace(/formatter={\(value: number, name: string, props: any\)/g, 'formatter={(value: any, name: any, props: any)')
        .replace(/formatter={\(value: any, name: string\)/g, 'formatter={(value: any, name: any)');
        
      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent, 'utf-8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDir(path.join(__dirname, 'src/components'));
console.log('Done.');
