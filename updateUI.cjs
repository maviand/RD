const fs = require('fs');
let code = fs.readFileSync('src/components/SectorView.tsx', 'utf8');

const targetStr = '{sector.megaproject.description}';
const endP = '</p>';
const idx = code.indexOf(targetStr);
const endIdx = code.indexOf(endP, idx) + endP.length;

const replacement = `{sector.megaproject.description}
            </p>

            {sector.megaproject.imageUrl && (
              <div className={\`mb-8 grid gap-4 \${Array.isArray(sector.megaproject.imageUrl) ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}\`}>
                {Array.isArray(sector.megaproject.imageUrl) 
                  ? sector.megaproject.imageUrl.map((url, idx) => (
                      <div key={idx} className="flex justify-center bg-black/20 rounded-lg p-2 ring-1 ring-white/10">
                        <img src={url} alt={\`\${sector.megaproject?.title} - Visualización \${idx + 1}\`} className="max-h-[500px] w-full object-cover sm:object-contain rounded shadow-lg" />
                      </div>
                    ))
                  : (
                    <div className="flex justify-center bg-black/20 rounded-lg p-2 ring-1 ring-white/10">
                      <img src={sector.megaproject.imageUrl} alt={sector.megaproject.title} className="max-h-[500px] w-full object-cover sm:object-contain rounded shadow-lg" />
                    </div>
                  )
                }
              </div>
            )}`;

code = code.substring(0, idx) + replacement + code.substring(endIdx);
fs.writeFileSync('src/components/SectorView.tsx', code);
console.log('SectorView updated');
