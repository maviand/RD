const fs = require('fs');
const path = require('path');

const sectorFile = path.join(__dirname, 'src/components/SectorView.tsx');
let sectorContent = fs.readFileSync(sectorFile, 'utf8');

if (!sectorContent.includes('FuelTaxCalculator')) {
  // Add imports
  sectorContent = sectorContent.replace(
    /import MegaprojectWrapper from '\.\/MegaprojectWrapper';/,
    `import MegaprojectWrapper from './MegaprojectWrapper';\nimport FuelTaxCalculator from './visualizations/FuelTaxCalculator';\nimport PisaChart from './visualizations/PisaChart';\nimport PrisonROIChart from './visualizations/PrisonROIChart';`
  );

  // Add the conditionals after Megaproject Section
  const megaEnd = sectorContent.indexOf('</MegaprojectWrapper>');
  
  if (megaEnd !== -1) {
    // Wait, the code has:
    // {sector.megaproject && (
    //   <MegaprojectWrapper megaproject={sector.megaproject} />
    // )}
  }
  
  const injectTarget = `      {/* Megaproject Section */}\n      {sector.megaproject && (\n        <MegaprojectWrapper megaproject={sector.megaproject} />\n      )}\n`;
  
  const injectContent = `      {/* Sector Specific Charts */}\n      {sector.id === 'education' && <PisaChart />}\n      {sector.id === 'justice' && <PrisonROIChart />}\n      {(sector.id === 'energy' || sector.id === 'infrastructure') && <FuelTaxCalculator />}\n\n`;
  
  sectorContent = sectorContent.replace(
    injectTarget,
    injectTarget + injectContent
  );
  
  fs.writeFileSync(sectorFile, sectorContent);
  console.log('SectorView.tsx updated with conditional charts!');
}
