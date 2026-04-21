const fs = require('fs');
const path = require('path');

const dashFile = path.join(__dirname, 'src/components/HomepageDashboard.tsx');
let dashContent = fs.readFileSync(dashFile, 'utf8');

if (!dashContent.includes('MacroRegionMap')) {
  // Add imports
  dashContent = dashContent.replace(
    /import BudgetSimulator from '\.\/BudgetSimulator';/,
    `import BudgetSimulator from './BudgetSimulator';\nimport MacroRegionMap from './MacroRegionMap';\nimport ElectoralSimulator from './ElectoralSimulator';`
  );

  // Add components
  dashContent = dashContent.replace(
    /<BudgetSimulator \/>/,
    `<BudgetSimulator />\n        <MacroRegionMap />\n        <ElectoralSimulator />`
  );
  
  fs.writeFileSync(dashFile, dashContent);
  console.log('HomepageDashboard.tsx updated with Map and ElectoralSim!');
}
