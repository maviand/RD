const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src/components/SectorView.tsx');
let content = fs.readFileSync(file, 'utf8');

if (!content.includes('MegaprojectWrapper')) {
  // Replace imports
  content = content.replace(
    /import FilterBar from '.\/FilterBar';/,
    `import FilterBar from './FilterBar';\nimport MegaprojectWrapper from './MegaprojectWrapper';`
  );

  // Replace megaproject section
  const startTag = '{/* Megaproject Section */}';
  const endMarker = '      <div className="mb-8 bg-white p-5 rounded-md border border-gray-200 shadow-sm flex flex-col md:flex-row gap-4 items-center">';
  
  const startIndex = content.indexOf(startTag);
  const endIndex = content.indexOf(endMarker);
  
  if (startIndex !== -1 && endIndex !== -1) {
    const replacement = `{/* Megaproject Section */}
      {sector.megaproject && (
        <MegaprojectWrapper megaproject={sector.megaproject} />
      )}

`;
    content = content.substring(0, startIndex) + replacement + content.substring(endIndex);
  }
}

fs.writeFileSync(file, content);
console.log('SectorView.tsx updated!');
