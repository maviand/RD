const fs = require('fs');
const path = require('path');

// 1. Update App.tsx
const appFile = path.join(__dirname, 'src/App.tsx');
let appContent = fs.readFileSync(appFile, 'utf8');

if (!appContent.includes('HistoricalTimeline')) {
  // Add import
  appContent = appContent.replace(
    /import TermGlossary from '\.\/components\/TermGlossary';/,
    `import TermGlossary from './components/TermGlossary';\nimport HistoricalTimeline from './components/HistoricalTimeline';`
  );

  // Add to path logic
  appContent = appContent.replace(
    /const isGlossary = currentPath === 'glosario';/,
    `const isGlossary = currentPath === 'glosario';\n  const isTimeline = currentPath === 'timeline' || currentPath === 'linea-tiempo';`
  );

  appContent = appContent.replace(
    /const activeSectorId = \(isHome \|\| isProjections \|\| isNewCities \|\| isGlossary \|\| isExternalRoute\)/g,
    `const activeSectorId = (isHome || isProjections || isNewCities || isGlossary || isTimeline || isExternalRoute)`
  );

  appContent = appContent.replace(
    /if \(\!isHome && \!isProjections && \!isNewCities && \!isGlossary && \!isExternalRoute/g,
    `if (!isHome && !isProjections && !isNewCities && !isGlossary && !isTimeline && !isExternalRoute`
  );

  appContent = appContent.replace(
    /\[currentPath, isHome, isProjections, isNewCities, isGlossary, isExternalRoute, navigate\]\)/g,
    `[currentPath, isHome, isProjections, isNewCities, isGlossary, isTimeline, isExternalRoute, navigate])`
  );

  // Add route
  appContent = appContent.replace(
    /<Route path="\/glosario" element={<TermGlossary \/>} \/>/,
    `<Route path="/glosario" element={<TermGlossary />} />\n            <Route path="/linea-tiempo" element={<HistoricalTimeline />} />`
  );
  
  fs.writeFileSync(appFile, appContent);
  console.log('App.tsx updated for Timeline!');
}

// 2. Update Sidebar.tsx
const sidebarFile = path.join(__dirname, 'src/components/Sidebar.tsx');
let sidebarContent = fs.readFileSync(sidebarFile, 'utf8');

if (!sidebarContent.includes('isTimeline')) {
  sidebarContent = sidebarContent.replace(
    /const isGlossary = location\.pathname === '\/glosario';/,
    `const isGlossary = location.pathname === '/glosario';\n  const isTimeline = location.pathname === '/linea-tiempo';`
  );

  // Find the end of Glosario button
  const glossaryBtnEnd = sidebarContent.indexOf('Glosario\n        </button>');
  if (glossaryBtnEnd !== -1) {
    const injectPos = glossaryBtnEnd + 27; // exactly after </button>\n
    const timelineBtn = `        
        <button
          onClick={() => onSelect('linea-tiempo')}
          title="Ver Línea de Tiempo Histórica"
          className={\`w-full flex items-center gap-4 px-4 py-3 rounded-md text-left transition-all duration-200 group text-sm font-heading font-semibold uppercase tracking-wide mb-4 \${
            isTimeline 
              ? 'bg-white/10 text-white border-l-4 border-[var(--color-gov-gold)]' 
              : 'text-white/70 hover:bg-white/5 hover:text-white border-l-4 border-transparent'
          }\`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={\`transition-colors \${isTimeline ? 'text-[var(--color-gov-gold)]' : 'text-white/50'}\`}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="m9 16 2 2 4-4"/></svg>
          Línea de Tiempo
        </button>
`;
    sidebarContent = sidebarContent.substring(0, injectPos) + timelineBtn + sidebarContent.substring(injectPos);
    fs.writeFileSync(sidebarFile, sidebarContent);
    console.log('Sidebar.tsx updated for Timeline!');
  }
}
