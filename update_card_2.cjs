const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src/components/ProblemCard.tsx');
let content = fs.readFileSync(file, 'utf8');

// Add imports
if (!content.includes('import html2canvas')) {
  content = content.replace(
    'import { Problem, EnrichedContent } from \'../types\';',
    `import { Problem, EnrichedContent } from '../types';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';`
  );
  content = content.replace(/import { ChevronDown, (.*?) } from 'lucide-react';/, "import { ChevronDown, $1, FileDown, ArrowRight, ArrowLeft } from 'lucide-react';");
}

// Add the methods inside ProblemCard component definition
if (!content.includes('const cardRef = useRef')) {
  // It is already included because I previously inserted it with replace_file_content! Wait, did it insert? Yes, my single replace_file_content worked!
}

// Check if those methods exist.
if (!content.includes('handleDownloadPdf')) {
  // It should be there.
}

// Replace layout with layout ref={cardRef}
if (!content.includes('ref={cardRef}')) {
  content = content.replace(
    /(\s*)layout\n(\s*)initial=\{\{ opacity: 0, x: -20 \}\}/,
    '$1layout\n$1ref={cardRef}\n$2initial={{ opacity: 0, x: -20 }}'
  );
}

// Replace the download PDF button
if (!content.includes('Descargar PDF')) {
  const t = `<button
                            onClick={(e) => { e.stopPropagation(); navigate(problem.solution.internalRoute!); }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#FBBF24] hover:bg-[#F59E0B] text-[#002855] text-xs font-bold font-heading uppercase tracking-wider rounded-sm transition-colors shadow-sm"
                          >
                            Ver Presentación Interactiva
                          </button>
                        )}`;
  content = content.replace(t, t + `
                        <button
                          onClick={handleDownloadPdf}
                          disabled={isGeneratingPdf}
                          className="inline-flex items-center gap-2 px-3 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-bold font-heading uppercase tracking-wider rounded-sm transition-colors shadow-sm disabled:opacity-50"
                        >
                          {isGeneratingPdf ? 'Generando...' : 'Descargar PDF'}
                          {!isGeneratingPdf && <FileDown className="w-4 h-4" />}
                        </button>`);
}

// Replace the footer
if (!content.includes('Siguiente Problema')) {
  const footerStart = `                  </div>
                </div>
              </motion.div>`;
              
  const newFooter = `                  </div>
                  
                  {/* Next / Previous transition footer */}
                  <div className="bg-gray-100 px-6 py-4 mt-6 rounded-b-md border-t border-gray-200 flex justify-between items-center">
                    <button 
                      onClick={(e) => scrollToAdjacent(-1, e)}
                      className="flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-[var(--color-gov-blue)] transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" /> Problema Anterior
                    </button>
                    <button 
                      onClick={(e) => scrollToAdjacent(1, e)}
                      className="flex items-center gap-2 text-sm font-bold text-[var(--color-gov-blue)] hover:text-[#001f44] transition-colors"
                    >
                      Siguiente Problema <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>`;
  
  // Note: the exact structure is:
  //                    </div>
  //                  </div>
  //                </motion.div>
  // We'll replace the last match of that
  const lastIndex = content.lastIndexOf('                  </div>\n                </div>\n              </motion.div>');
  if (lastIndex !== -1) {
     content = content.substring(0, lastIndex) + newFooter + content.substring(lastIndex + footerStart.length);
  }
}

fs.writeFileSync(file, content);
console.log('ProblemCard.tsx updated!');
