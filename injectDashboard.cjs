const fs = require('fs');
const path = require('path');

const homeFile = path.join(__dirname, 'src/components/HomeView.tsx');
let homeContent = fs.readFileSync(homeFile, 'utf8');

if (!homeContent.includes('HomepageDashboard')) {
  // Add import
  homeContent = homeContent.replace(
    /import { useNavigate } from 'react-router-dom';/,
    `import { useNavigate } from 'react-router-dom';\nimport HomepageDashboard from './HomepageDashboard';`
  );

  // Add the component below Executive Summary
  const executiveEnd = homeContent.indexOf('</motion.div>\n      </div>\n\n      {/* Sectors Summary */}');
  
  if (executiveEnd !== -1) {
    const injectPos = executiveEnd + 21;
    const dashboardTag = `      <div className="max-w-7xl mx-auto px-6 md:px-12">\n        <HomepageDashboard />\n      </div>\n\n`;
    homeContent = homeContent.substring(0, injectPos) + dashboardTag + homeContent.substring(injectPos);
    fs.writeFileSync(homeFile, homeContent);
    console.log('HomeView.tsx updated for Dashboard!');
  }
}
