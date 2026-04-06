const { Project, SyntaxKind } = require('ts-morph');

const imageMap = {
  agriculture: 'https://i.imgur.com/9QXz1f0.jpeg',
  welfare: 'https://i.imgur.com/6kVTjb9.jpeg',
  education: 'https://i.imgur.com/gazhLNZ.jpeg',
  energy: 'https://i.imgur.com/EgpvybV.jpeg',
  finance: 'https://i.imgur.com/jb339s4.jpeg',
  infrastructure: 'https://i.imgur.com/qnqT90Y.jpeg',
  innovation: 'https://i.imgur.com/ZwmEh4s.jpeg',
  justice: 'https://i.imgur.com/XDLPJQh.jpeg',
  healthcare: ['https://i.imgur.com/swIOrLf.jpeg', 'https://i.imgur.com/jqKtQk8.jpeg'],
  labor: 'https://i.imgur.com/icDAzxt.jpeg'
};

const p = new Project();
const sTypes = p.addSourceFileAtPath('src/types/index.ts');
const mpInterface = sTypes.getInterface('Sector').getProperty('megaproject').getTypeNode().asKind(SyntaxKind.TypeLiteral);
const imgProp = mpInterface.getProperty('imageUrl');
if (imgProp) {
  imgProp.setType('string | string[]');
} else {
  mpInterface.addProperty({ name: 'imageUrl', hasQuestionToken: true, type: 'string | string[]' });
}
sTypes.saveSync();

const sData = p.addSourceFileAtPath('src/data.ts');
const d = sData.getVariableDeclaration('sectors');
const arr = d.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
arr.getElements().forEach(e => {
  const idValue = e.getProperty('id')?.getInitializer()?.getText().replace(/['"]/g, '');
  const mp = e.getProperty('megaproject');
  if (mp && imageMap[idValue]) {
    const mpBody = mp.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
    let images = imageMap[idValue];
    
    // add or replace
    const existImg = mpBody.getProperty('imageUrl');
    if (existImg) {
      if (Array.isArray(images)) {
        existImg.setInitializer(`['${images[0]}', '${images[1]}']`);
      } else {
        existImg.setInitializer(`'${images}'`);
      }
    } else {
      if (Array.isArray(images)) {
        mpBody.addPropertyAssignment({
          name: 'imageUrl',
          initializer: `['${images[0]}', '${images[1]}']`
        });
      } else {
        mpBody.addPropertyAssignment({
          name: 'imageUrl',
          initializer: `'${images}'`
        });
      }
    }
  }
});
sData.saveSync();
console.log('Megaproject images injected.');
