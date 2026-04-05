const fs = require('fs');
const file = 'src/components/SectorView.tsx';
let content = fs.readFileSync(file, 'utf-8');

const newImport = "import FilterBar from './FilterBar';\nimport { useNavigate } from 'react-router-dom';";
content = content.replace("import { useNavigate } from 'react-router-dom';", newImport);

const oldFilterBar = `<div className="mb-8 bg-white p-5 rounded-md border border-gray-200 shadow-sm flex flex-col md:flex-row gap-4 items-center">
        <div className="flex items-center gap-2 text-[var(--color-gov-blue)] text-sm font-bold uppercase tracking-wider whitespace-nowrap font-heading">
          <Filter className="w-5 h-5" />
          <span>Filtrar por:</span>
        </div>
        <div className="flex flex-1 flex-col md:flex-row gap-4 w-full">
          <div className="flex-1 relative">
            <label className="block text-[10px] text-gray-500 mb-1 uppercase tracking-wider font-bold font-heading">Búsqueda</label>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text"
                placeholder="Buscar palabras clave..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-sm focus:ring-[var(--color-gov-blue)] focus:border-[var(--color-gov-blue)] block pl-9 p-2.5 outline-none font-sans"
              />
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-[10px] text-gray-500 mb-1 uppercase tracking-wider font-bold font-heading">Líder</label>
            <select 
              value={selectedLeader}
              onChange={(e) => setSelectedLeader(e.target.value)}
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-sm focus:ring-[var(--color-gov-blue)] focus:border-[var(--color-gov-blue)] block p-2.5 outline-none font-sans"
            >
              {leaders.map(leader => (
                <option key={leader} value={leader}>{leader}</option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-[10px] text-gray-500 mb-1 uppercase tracking-wider font-bold font-heading">Modelo</label>
            <select 
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-sm focus:ring-[var(--color-gov-blue)] focus:border-[var(--color-gov-blue)] block p-2.5 outline-none font-sans"
            >
              {models.map(model => (
                <option key={model} value={model}>{model}</option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-[10px] text-gray-500 mb-1 uppercase tracking-wider font-bold font-heading">Ordenar por</label>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'net' | 'total')}
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-sm focus:ring-[var(--color-gov-blue)] focus:border-[var(--color-gov-blue)] block p-2.5 outline-none font-sans"
            >
              <option value="net">Prioridad (Votos netos)</option>
              <option value="total">Interacción (Votos totales)</option>
            </select>
          </div>
        </div>
      </div>`;

const newFilterBar = `<FilterBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedLeader={selectedLeader}
        setSelectedLeader={setSelectedLeader}
        selectedModel={selectedModel}
        setSelectedModel={setSelectedModel}
        sortBy={sortBy}
        setSortBy={setSortBy}
        leaders={leaders}
        models={models}
      />`;

content = content.replace(oldFilterBar, newFilterBar);
fs.writeFileSync(file, content);
console.log('Injected FilterBar');
