const fs = require('fs');
const path = require('path');

const appFile = path.join(__dirname, 'src/App.tsx');
let appContent = fs.readFileSync(appFile, 'utf8');

if (!appContent.includes('DebtCounterWidget')) {
  // Add import
  appContent = appContent.replace(
    /import FloatingActionButton from '\.\/components\/FloatingActionButton';/,
    `import FloatingActionButton from './components/FloatingActionButton';\nimport DebtCounterWidget from './components/DebtCounterWidget';`
  );

  // Add DebtCounterWidget above the final </main> and add pb-16 to the wrap
  const footerEnd = appContent.indexOf('</footer>\n        </div>');
  if (footerEnd !== -1) {
    appContent = appContent.replace(
      /<FloatingActionButton \/>\n      <\/main>/,
      `<FloatingActionButton />\n        <DebtCounterWidget />\n      </main>`
    );
     // App.tsx main already has overflow-hidden maybe? Wait:
     // <main ref={mainRef} onScroll={handleScroll} className="flex-1 overflow-y-auto w-full relative pb-16">
    appContent = appContent.replace(
      /<main ref=\{mainRef\} onScroll=\{handleScroll\} className="flex-1 overflow-y-auto w-full relative">/,
      `<main ref={mainRef} onScroll={handleScroll} className="flex-1 overflow-y-auto w-full relative pb-16">`
    );
  }
  
  fs.writeFileSync(appFile, appContent);
  console.log('App.tsx updated for DebtCounterWidget!');
}
