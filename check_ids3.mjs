import fs from 'fs';
const content = fs.readFileSync('src/data.ts', 'utf-8');
const regex = /id:\s*['"]([^'"]+)['"]/g;
let match;
const ids = new Set();
while ((match = regex.exec(content)) !== null) {
  ids.add(match[1]);
}
const allIds = Array.from(ids);
const sectors = ['gov-efficiency', 'education', 'tourism', 'welfare', 'energy', 'infrastructure', 'agriculture', 'labor', 'healthcare', 'justice', 'finance', 'innovation'];
sectors.forEach(s => {
  const index = allIds.indexOf(s);
  if (index !== -1) {
    const nextSectorIndex = allIds.findIndex((id, i) => i > index && sectors.includes(id));
    const sliceEnd = nextSectorIndex !== -1 ? nextSectorIndex : allIds.length;
    const sectorIds = allIds.slice(index + 1, sliceEnd);
    console.log(s + ':', sectorIds);
  }
});
