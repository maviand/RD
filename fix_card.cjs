const fs = require('fs');
const file = 'src/components/ProblemCard.tsx';
let content = fs.readFileSync(file, 'utf-8');
if (!content.includes('export default ProblemCard;')) {
  content += '\nexport default ProblemCard;\n';
  fs.writeFileSync(file, content);
}
