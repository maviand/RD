const fs = require('fs');
const path = require('path');

const sectorFile = path.join(__dirname, 'src/components/SectorView.tsx');
let sectorContent = fs.readFileSync(sectorFile, 'utf8');

sectorContent = sectorContent.replace(/<PisaChart \/>/g, '<SchoolDashboard />');
sectorContent = sectorContent.replace(/<PrisonROIChart \/>/g, '<DebtInefficiencyChart />');

fs.writeFileSync(sectorFile, sectorContent);
console.log('SectorView.tsx chart names updated!');
