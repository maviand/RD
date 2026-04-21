const fs = require('fs');
const path = require('path');

const sectorFile = path.join(__dirname, 'src/components/SectorView.tsx');
let sectorContent = fs.readFileSync(sectorFile, 'utf8');

if (!sectorContent.includes('GenericSectorChart')) {
  // Add import
  sectorContent = sectorContent.replace(
    /import DebtInefficiencyChart from '\.\/visualizations\/DebtInefficiencyChart';/,
    `import DebtInefficiencyChart from './visualizations/DebtInefficiencyChart';\nimport GenericSectorChart from './visualizations/GenericSectorChart';`
  );

  // Add the conditionals after FuelTaxCalculator
  const fuelEnd = sectorContent.indexOf(`{(sector.id === 'energy' || sector.id === 'infrastructure') && <FuelTaxCalculator />}`);
  
  if (fuelEnd !== -1) {
    const injectPos = fuelEnd + 85; 
    
    const injectContent = `
      {sector.id === 'finance' && (
        <GenericSectorChart
            title="Crecimiento del PIB vs Presión Fiscal"
            description="Impacto de la reducción impositiva y flat-tax en el crecimiento del producto interno bruto y la recaudación formal neta (Curva de Laffer)."
            data={[{name: '2025', Actual: 120, Proyección: 120}, {name: '2027', Actual: 125, Proyección: 145}, {name: '2030', Actual: 132, Proyección: 180}]}
        />
      )}
      {sector.id === 'labor' && (
        <GenericSectorChart
            title="Transición Hacia la Economía Formal"
            description="Proyección de creación de empleos al transicionar del modelo informal a las zonas francas tecnológicas y turismo de alto nivel."
            data={[{name: 'Informal', Actual: 58, Proyección: 22}, {name: 'Formal/Tech', Actual: 15, Proyección: 45}, {name: 'Servicios', Actual: 27, Proyección: 33}]}
            barKey="Actual" lineKey="Proyección"
        />
      )}
      {sector.id === 'gov-efficiency' && (
        <GenericSectorChart
            title="Consolidación de Ministerios (Ahorro Operativo)"
            description="Efecto de la Ley de Ministerios Mínimos en la matriz de gastos fijos del estado (Ahorro de $120,000M RD$ anuales al eliminar ministerios inoperantes)."
            data={[{name: 'Gasto Corriente', Actual: 350, Proyección: 150}, {name: 'Inversión Real', Actual: 150, Proyección: 400}]}
            colors={{bar: '#ef4444', line: '#22c55e'}}
        />
      )}
`;
    
    sectorContent = sectorContent.substring(0, injectPos) + injectContent + sectorContent.substring(injectPos);
    fs.writeFileSync(sectorFile, sectorContent);
    console.log('SectorView.tsx updated with generic charts!');
  }
}
