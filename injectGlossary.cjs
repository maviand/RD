const fs = require('fs');
const path = require('path');

// 1. Update App.tsx
const appFile = path.join(__dirname, 'src/App.tsx');
let appContent = fs.readFileSync(appFile, 'utf8');

if (!appContent.includes('TermGlossary')) {
  // Add import
  appContent = appContent.replace(
    /import NewCitiesView from '\.\/components\/NewCitiesView';/,
    `import NewCitiesView from './components/NewCitiesView';\nimport TermGlossary from './components/TermGlossary';`
  );

  // Add to path logic
  appContent = appContent.replace(
    /const isNewCities = currentPath === 'nuevas-ciudades';/,
    `const isNewCities = currentPath === 'nuevas-ciudades';\n  const isGlossary = currentPath === 'glosario';`
  );

  appContent = appContent.replace(
    /const activeSectorId = \(isHome \|\| isProjections \|\| isNewCities \|\| isExternalRoute\)/g,
    `const activeSectorId = (isHome || isProjections || isNewCities || isGlossary || isExternalRoute)`
  );

  appContent = appContent.replace(
    /if \(\!isHome && \!isProjections && \!isNewCities && \!isExternalRoute/g,
    `if (!isHome && !isProjections && !isNewCities && !isGlossary && !isExternalRoute`
  );

  appContent = appContent.replace(
    /\[currentPath, isHome, isProjections, isNewCities, isExternalRoute, navigate\]\)/g,
    `[currentPath, isHome, isProjections, isNewCities, isGlossary, isExternalRoute, navigate])`
  );

  // Add route
  appContent = appContent.replace(
    /<Route path="\/nuevas-ciudades" element={<NewCitiesView \/>} \/>/,
    `<Route path="/nuevas-ciudades" element={<NewCitiesView />} />\n            <Route path="/glosario" element={<TermGlossary />} />`
  );
  
  fs.writeFileSync(appFile, appContent);
  console.log('App.tsx updated!');
}

// 2. Update Sidebar.tsx
const sidebarFile = path.join(__dirname, 'src/components/Sidebar.tsx');
let sidebarContent = fs.readFileSync(sidebarFile, 'utf8');

if (!sidebarContent.includes('isGlossary')) {
  sidebarContent = sidebarContent.replace(
    /const isNewCities = location\.pathname === '\/nuevas-ciudades';/,
    `const isNewCities = location.pathname === '/nuevas-ciudades';\n  const isGlossary = location.pathname === '/glosario';`
  );

  // Find the end of Nuevas Ciudades button
  const ncBtnEnd = sidebarContent.indexOf('Nuevas Ciudades\n        </button>');
  if (ncBtnEnd !== -1) {
    const injectPos = ncBtnEnd + 34; // exactly after </button>\n
    const glossaryBtn = `        
        <button
          onClick={() => onSelect('glosario')}
          title="Ver glosario de términos"
          className={\`w-full flex items-center gap-4 px-4 py-3 rounded-md text-left transition-all duration-200 group text-sm font-heading font-semibold uppercase tracking-wide mb-4 \${
            isGlossary 
              ? 'bg-white/10 text-white border-l-4 border-[var(--color-gov-gold)]' 
              : 'text-white/70 hover:bg-white/5 hover:text-white border-l-4 border-transparent'
          }\`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={\`transition-colors \${isGlossary ? 'text-[var(--color-gov-gold)]' : 'text-white/50'}\`}><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
          Glosario
        </button>
`;
    sidebarContent = sidebarContent.substring(0, injectPos) + glossaryBtn + sidebarContent.substring(injectPos);
    fs.writeFileSync(sidebarFile, sidebarContent);
    console.log('Sidebar.tsx updated!');
  }
}
