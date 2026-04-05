const fs = require('fs');
const file = 'src/components/ProblemCard.tsx';
let content = fs.readFileSync(file, 'utf-8');

// 1. Add new icons to import
const oldImport = "import { ChevronDown, ChevronUp, ExternalLink, ThumbsUp, ThumbsDown, Share2, Twitter, Instagram, MessageCircle } from 'lucide-react';";
const newImport = "import { ChevronDown, ChevronUp, ExternalLink, ThumbsUp, ThumbsDown, Share2, Twitter, Instagram, MessageCircle, Quote, User, AlertCircle, BookOpen, PlayCircle, Award, Scale, MessageSquare, AlertOctagon, Map, Link as LinkIcon, Lightbulb, BookCheck } from 'lucide-react';";
content = content.replace(oldImport, newImport);

// 2. Add EnrichedContent import
content = content.replace("import { Problem } from '../types';", "import { Problem, EnrichedContent } from '../types';");

// 3. Inject <EnrichedSection /> at line 245
const injectionPoint = "{problem.solution.expectedOutcomes && (";
content = content.replace("                    <div className=\"grid grid-cols-1 md:grid-cols-2 gap-6\">\n                      {problem.solution.implementationSteps && (",
`                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {problem.solution.implementationSteps && (`);

// We will simply replace the closing div of the grid grid-cols-1 md:grid-cols-2:
const hookPoint = `                      )}
                    </div>

                    {problem.id === 'gov-1' && <MinistryConsolidationChart />}`;

const enrichedCall = `                      )}
                    </div>

                    {problem.solution.enrichedContent && <EnrichedSection data={problem.solution.enrichedContent} />}

                    {problem.id === 'gov-1' && <MinistryConsolidationChart />}`;

content = content.replace(hookPoint, enrichedCall);

// Add Urgency to the card header
const scoreSpan = `<span className={\`font-bold text-xs font-sans \${userVote === 'up' ? 'text-[var(--color-gov-blue)]' : userVote === 'down' ? 'text-[var(--color-gov-red)]' : 'text-gray-600'}\`}>`;
const urgencyBadge = `{problem.solution.enrichedContent?.urgency && (
                <div className="mb-2">
                  <span className={\`px-2 py-0.5 text-[9px] uppercase tracking-wider font-bold rounded-sm text-white \${
                    problem.solution.enrichedContent.urgency === 'Crítica' ? 'bg-red-600 animate-pulse' : 
                    problem.solution.enrichedContent.urgency === 'Alta' ? 'bg-orange-500' : 'bg-blue-500'}\`}>
                    Urgencia {problem.solution.enrichedContent.urgency}
                  </span>
                </div>
              )}`;
content = content.replace("<div className=\"space-y-2 sm:space-y-3 flex-1 min-w-0\">", "<div className=\"space-y-2 sm:space-y-3 flex-1 min-w-0\">\n              " + urgencyBadge);

// 4. Append EnrichedSection component at the bottom before export default ProblemCard;

const enrichedComponent = `
const EnrichedSection: React.FC<{ data: EnrichedContent }> = ({ data }) => {
  return (
    <div className="space-y-8 mt-8 border-t border-gray-200 pt-8">
      {data.tldr && (
        <div className="bg-blue-50 p-4 rounded-md border-l-4 border-[var(--color-gov-blue)]">
          <h4 className="font-bold text-[var(--color-gov-blue)] text-xs uppercase tracking-widest mb-1">En Resumen (TL;DR)</h4>
          <p className="text-sm text-gray-800 font-sans">{data.tldr}</p>
        </div>
      )}

      {data.costOfInaction && (
        <div className="bg-red-50 p-4 rounded-md border border-red-200 flex items-start gap-4">
          <AlertOctagon className="w-8 h-8 text-red-600 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-red-700 text-xs uppercase tracking-widest mb-1">Costo de la Inacción</h4>
            <p className="text-sm text-red-900 font-sans font-semibold">{data.costOfInaction}</p>
          </div>
        </div>
      )}

      {data.leaderQuote && (
        <blockquote className="border-l-4 border-[var(--color-gov-gold)] pl-4 py-2 italic bg-gray-50 rounded-r-md relative">
          <Quote className="w-8 h-8 text-[var(--color-gov-gold)] opacity-20 absolute -top-2 -left-2" />
          <p className="text-lg text-gray-700 font-serif relative z-10">"{data.leaderQuote.quote}"</p>
          <footer className="mt-2 text-xs font-bold text-gray-500">
            — {data.leaderQuote.author} <span className="font-normal">{data.leaderQuote.context && \`(\${data.leaderQuote.context})\`}</span>
          </footer>
        </blockquote>
      )}

      {data.citizenPersona && (
        <div className="bg-white border border-gray-200 shadow-sm rounded-md p-5 flex flex-col md:flex-row gap-5 items-start">
          <div className="bg-gray-100 p-3 rounded-full flex-shrink-0">
            <User className="w-8 h-8 text-gray-500" />
          </div>
          <div>
            <h4 className="font-bold text-[var(--color-gov-blue)] text-sm uppercase tracking-wider mb-2">
              El Futuro de {data.citizenPersona.name} <span className="text-gray-400 font-normal lowercase">({data.citizenPersona.age} años, {data.citizenPersona.occupation})</span>
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed font-sans italic">{data.citizenPersona.story}</p>
          </div>
        </div>
      )}

      {data.risks && data.risks.length > 0 && (
        <div className="space-y-3">
          <h4 className="font-bold text-[var(--color-gov-blue)] text-xs uppercase tracking-widest flex items-center gap-2">
            <AlertCircle className="w-4 h-4" /> Riesgos y Mitigación
          </h4>
          <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
            {data.risks.map((risk, idx) => (
              <div key={idx} className="bg-orange-50/50 p-4 border border-orange-100 rounded-md">
                <p className="text-xs font-bold text-orange-800 mb-1">Riesgo: {risk.risk}</p>
                <p className="text-xs text-gray-600">Mitigación: {risk.mitigation}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.historicalContext && (
          <div className="bg-gray-50 p-5 rounded-md border border-gray-200">
            <h4 className="font-bold text-[var(--color-gov-blue)] text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> Contexto Histórico
            </h4>
            <p className="text-xs text-gray-700 leading-relaxed">{data.historicalContext}</p>
          </div>
        )}

        {data.faqs && data.faqs.length > 0 && (
          <div className="bg-gray-50 p-5 rounded-md border border-gray-200">
            <h4 className="font-bold text-[var(--color-gov-blue)] text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
              <HelpCircle className="w-4 h-4" /> Preguntas Frecuentes
            </h4>
            <div className="space-y-4">
              {data.faqs.map((faq, idx) => (
                <details key={idx} className="group">
                  <summary className="text-xs font-bold text-gray-800 cursor-pointer hover:text-[var(--color-gov-blue)] transition-colors">{faq.question}</summary>
                  <p className="text-xs text-gray-600 mt-2 pl-2 border-l-2 border-gray-300">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        )}
      </div>

      {data.expertEndorsement && (
        <div className="flex flex-col md:flex-row gap-4 items-center bg-[var(--color-gov-blue)] text-white p-6 rounded-md shadow-inner">
          <Award className="w-12 h-12 text-[var(--color-gov-gold)] flex-shrink-0" />
          <div>
            <p className="text-sm italic mb-2 leading-relaxed">"{data.expertEndorsement.quote}"</p>
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-gov-gold)]">— {data.expertEndorsement.expert}, {data.expertEndorsement.entity}</p>
          </div>
        </div>
      )}

      {data.legislativePathway && (
        <div className="flex items-center gap-4 p-4 border border-blue-200 bg-blue-50/30 rounded-md">
          <Scale className="w-6 h-6 text-[var(--color-gov-blue)]" />
          <div>
            <h4 className="text-xs font-bold uppercase text-[var(--color-gov-blue)] tracking-wider">Ruta Legislativa</h4>
            <p className="text-xs text-gray-700 mt-1">{data.legislativePathway}</p>
          </div>
        </div>
      )}

      {data.audioNarrativeUrl && (
        <div className="flex items-center justify-between p-4 bg-gray-900 border border-gray-700 rounded-md text-white">
          <div className="flex items-center gap-3">
            <PlayCircle className="w-6 h-6 text-[var(--color-gov-gold)]" />
            <span className="text-xs font-bold uppercase tracking-wider">Escuchar Análisis IA</span>
          </div>
          <button className="px-4 py-1.5 bg-gray-700 hover:bg-gray-600 text-xs font-bold rounded-full transition-colors">Reproducir (3:45)</button>
        </div>
      )}

      {data.regionalImpact && data.regionalImpact.length > 0 && (
        <div>
          <h4 className="font-bold text-[var(--color-gov-blue)] text-xs uppercase tracking-widest flex items-center gap-2 mb-3">
            <Map className="w-4 h-4" /> Impacto Regional
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
             {data.regionalImpact.map((ri, idx) => (
               <div key={idx} className="border border-gray-200 rounded-md p-3">
                 <p className="text-xs font-bold text-gray-800">{ri.region}</p>
                 <p className="text-xs text-gray-600 mt-1">{ri.impact}</p>
               </div>
             ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.realWorldModels && data.realWorldModels.length > 0 && (
          <div>
             <h4 className="font-bold text-[var(--color-gov-blue)] text-xs uppercase tracking-widest flex items-center gap-2 mb-3">
               <LinkIcon className="w-4 h-4" /> Modelos en Acción
             </h4>
             <ul className="space-y-2">
                {data.realWorldModels.map((rm, idx) => (
                   <li key={idx} className="text-xs">
                     <a href={rm.url || '#'} target="_blank" rel="noreferrer" className="font-bold text-[var(--color-gov-blue)] hover:underline flex items-center gap-1">
                        {rm.country} <ExternalLink className="w-3 h-3" />
                     </a>
                     <span className="text-gray-600 block mt-0.5">{rm.description}</span>
                   </li>
                ))}
             </ul>
          </div>
        )}

        {data.references && data.references.length > 0 && (
          <div>
             <h4 className="font-bold text-[var(--color-gov-blue)] text-xs uppercase tracking-widest flex items-center gap-2 mb-3">
               <BookCheck className="w-4 h-4" /> Referencias Académicas
             </h4>
             <ul className="space-y-2">
                {data.references.map((r, idx) => (
                   <li key={idx} className="text-xs text-gray-600 flex items-start gap-1">
                     <span>[{r.id}]</span>
                     <a href={r.url || '#'} target="_blank" rel="noreferrer" className="hover:text-[var(--color-gov-blue)] hover:underline">
                        {r.title}
                     </a>
                   </li>
                ))}
             </ul>
          </div>
        )}
      </div>

      {data.trivia && data.trivia.length > 0 && (
        <div className="bg-yellow-50 p-4 border border-yellow-200 rounded-md flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-[var(--color-gov-gold)] flex-shrink-0 mt-0.5" />
          <p className="text-xs text-yellow-800 italic"><span className="font-bold not-italic">Curiosidad:</span> {data.trivia[0]}</p>
        </div>
      )}
    </div>
  );
};
`;

content = content.replace("export default ProblemCard;", enrichedComponent + "\nexport default ProblemCard;");

fs.writeFileSync(file, content);
console.log('ProblemCard EnrichedSection injected.');
