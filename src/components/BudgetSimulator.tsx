import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, AlertTriangle, CheckCircle2, GripVertical, Coins, PlusCircle, Trash2 } from 'lucide-react';
import { DndContext, DragOverlay, closestCenter, useSensor, useSensors, PointerSensor, DragStartEvent, DragEndEvent } from '@dnd-kit/core';
import { useDroppable, useDraggable } from '@dnd-kit/core';

// --- Types ---
type Token = {
  id: string;
  type: 'revenue' | 'debt';
};

type ContainerId = 'treasury' | 'bureaucracy' | 'infrastructure' | 'health_education' | 'debt_payment';

interface Sector {
  id: ContainerId;
  name: string;
  description: string;
  color: string;
  icon: string;
}

const sectors: Sector[] = [
  { id: 'bureaucracy', name: 'Burocracia', description: 'Sueldos, clientelismo.', color: 'bg-red-500', icon: '🏛️' },
  { id: 'infrastructure', name: 'Infraestructura', description: 'Metro, Energía.', color: 'bg-[var(--color-gov-gold)]', icon: '🏗️' },
  { id: 'health_education', name: 'Salud y Ed.', description: 'Hospitales, Escuelas.', color: 'bg-[var(--color-gov-blue)]', icon: '🏥' },
  { id: 'debt_payment', name: 'Pago Deuda', description: 'Servicio de la deuda.', color: 'bg-green-500', icon: '💸' }
];

// --- Sub-components ---

// Droppable Container
function DroppableBucket({ id, title, color, tokens, description }: { id: string, title: string, color: string, tokens: Token[], description?: string }) {
  const { setNodeRef, isOver } = useDroppable({ id });
  
  return (
    <div 
      ref={setNodeRef} 
      className={`relative p-4 rounded-xl border-2 transition-all duration-200 min-h-[120px] flex flex-col
        ${isOver ? 'border-[var(--color-gov-blue)] bg-blue-50/50 shadow-inner' : 'border-gray-200 bg-gray-50'}`}
    >
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-gray-700">{title}</h4>
        <span className={`text-xs font-bold px-2 py-1 rounded-sm text-white ${color}`}>
          {tokens.length * 5}%
        </span>
      </div>
      {description && <p className="text-[10px] text-gray-500 mb-3 font-sans leading-tight">{description}</p>}
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {tokens.map(token => (
          <DraggableToken key={token.id} token={token} />
        ))}
        {tokens.length === 0 && (
          <div className="w-full h-8 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center opacity-50">
            <span className="text-xs text-gray-400 font-bold uppercase">Arrastra aquí</span>
          </div>
        )}
      </div>
    </div>
  );
}

// Draggable Token
function DraggableToken({ token }: { token: Token }) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({ id: token.id });
  
  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={`w-8 h-8 rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing shadow-sm border-2 transition-transform
        ${token.type === 'debt' ? 'bg-red-100 border-red-500 text-red-600' : 'bg-yellow-50 border-yellow-500 text-yellow-600'}
        ${isDragging ? 'opacity-50 scale-110 z-50' : 'hover:scale-105 hover:shadow-md'}`}
    >
      <Coins className="w-4 h-4" />
    </div>
  );
}

// Token for Drag Overlay
function TokenOverlay({ token }: { token: Token }) {
  return (
    <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-xl border-2 scale-110 cursor-grabbing
      ${token.type === 'debt' ? 'bg-red-100 border-red-500 text-red-600' : 'bg-yellow-50 border-yellow-500 text-yellow-600'}`}>
      <Coins className="w-5 h-5" />
    </div>
  );
}

// --- Main Component ---
export default function BudgetSimulator() {
  // Generate 20 initial tokens (100% budget, 5% each)
  const initialTokens: Record<string, ContainerId> = {};
  for (let i = 1; i <= 20; i++) {
    initialTokens[`token-${i}`] = 'treasury';
  }

  const [tokenLocations, setTokenLocations] = useState<Record<string, ContainerId>>(initialTokens);
  const [tokenTypes, setTokenTypes] = useState<Record<string, 'revenue' | 'debt'>>({});
  const [activeId, setActiveId] = useState<string | null>(null);

  // Initialize all to revenue
  useMemo(() => {
    const types: Record<string, 'revenue' | 'debt'> = {};
    for (let i = 1; i <= 20; i++) {
      types[`token-${i}`] = 'revenue';
    }
    setTokenTypes(types);
  }, []);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 },
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveId(null);
    const { active, over } = event;
    
    if (over && active.id !== over.id) {
      setTokenLocations(prev => ({
        ...prev,
        [active.id as string]: over.id as ContainerId
      }));
    }
  };

  const emitDebt = () => {
    const newId = `debt-${Date.now()}`;
    setTokenTypes(prev => ({ ...prev, [newId]: 'debt' }));
    setTokenLocations(prev => ({ ...prev, [newId]: 'treasury' }));
  };

  const clearDebt = () => {
    setTokenLocations(prev => {
      const next = { ...prev };
      Object.keys(next).forEach(id => {
        if (id.startsWith('debt-')) delete next[id];
      });
      return next;
    });
    setTokenTypes(prev => {
      const next = { ...prev };
      Object.keys(next).forEach(id => {
        if (id.startsWith('debt-')) delete next[id];
      });
      return next;
    });
  };

  const getTokensFor = (containerId: ContainerId): Token[] => {
    return Object.entries(tokenLocations)
      .filter(([_, loc]) => loc === containerId)
      .map(([id]) => ({ id, type: tokenTypes[id] || 'revenue' }));
  };

  const allocatedCount = Object.entries(tokenLocations).filter(([_, loc]) => loc !== 'treasury').length;
  const debtCount = Object.keys(tokenLocations).filter(id => id.startsWith('debt-')).length;
  const surplus = getTokensFor('treasury').filter(t => t.type === 'revenue').length * 5;
  const deficit = debtCount * 5;
  const totalAllocation = allocatedCount * 5;

  return (
    <div className="bg-white rounded-md border border-gray-200 shadow-sm overflow-hidden mt-8">
      <div className="bg-[var(--color-gov-blue)] p-6 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="text-xl font-heading font-bold uppercase tracking-wider flex items-center gap-2">
            <Calculator className="w-6 h-6 text-[var(--color-gov-gold)]" />
            Construye tu Presupuesto Base Cero
          </h3>
          <p className="text-sm text-gray-300 font-sans mt-1">Arrastra los fondos (fichas) desde el Tesoro hacia los sectores. Cada ficha representa el 5% del PIB.</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={emitDebt}
            className="flex items-center gap-1 px-3 py-2 bg-red-600 text-white font-bold uppercase tracking-wider text-xs rounded-sm hover:bg-red-500 transition-colors shadow-sm"
          >
            <PlusCircle className="w-4 h-4" />
            Emitir Deuda
          </button>
          {debtCount > 0 && (
            <button 
              onClick={clearDebt}
              className="flex items-center gap-1 px-3 py-2 bg-gray-700 text-white font-bold uppercase tracking-wider text-xs rounded-sm hover:bg-gray-600 transition-colors shadow-sm"
            >
              <Trash2 className="w-4 h-4" />
              Limpiar Deuda
            </button>
          )}
        </div>
      </div>

      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div className="p-6 md:p-8 flex flex-col lg:flex-row gap-8">
          
          {/* Treasury Pool */}
          <div className="lg:w-1/3 flex flex-col">
            <div className="bg-gray-900 rounded-xl p-6 border-4 border-[var(--color-gov-gold)] shadow-lg flex-1 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[var(--color-gov-gold)] to-transparent opacity-50"></div>
              
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-heading font-extrabold text-lg uppercase tracking-widest text-white flex items-center gap-2">
                  <Coins className="w-6 h-6 text-[var(--color-gov-gold)]" />
                  Tesoro Nacional
                </h4>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4 min-h-[200px]">
                <DroppableBucket 
                  id="treasury" 
                  title="Fondos Disponibles" 
                  color="bg-[var(--color-gov-gold)] text-gray-900" 
                  tokens={getTokensFor('treasury')} 
                  description="Arrastra estas fichas hacia los sectores para asignar el presupuesto."
                />
              </div>

              {/* Status Indicator */}
              <div className="mt-6 space-y-3">
                <div className="flex justify-between items-center bg-gray-800 p-3 rounded-md">
                  <span className="text-gray-400 text-xs font-bold uppercase">Asignado</span>
                  <span className="text-white font-bold">{totalAllocation}%</span>
                </div>
                
                {surplus > 0 && debtCount === 0 && (
                  <div className="flex justify-between items-center bg-green-900/50 border border-green-700 p-3 rounded-md">
                    <span className="text-green-400 text-xs font-bold uppercase flex items-center gap-1"><CheckCircle2 className="w-4 h-4"/> Superávit</span>
                    <span className="text-green-400 font-bold">{surplus}%</span>
                  </div>
                )}

                {deficit > 0 && (
                  <div className="flex justify-between items-center bg-red-900/50 border border-red-700 p-3 rounded-md">
                    <span className="text-red-400 text-xs font-bold uppercase flex items-center gap-1"><AlertTriangle className="w-4 h-4"/> Déficit (Deuda)</span>
                    <span className="text-red-400 font-bold">{deficit}%</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sector Buckets */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sectors.map(sector => (
              <DroppableBucket 
                key={sector.id}
                id={sector.id}
                title={`${sector.icon} ${sector.name}`}
                color={sector.color}
                tokens={getTokensFor(sector.id)}
                description={sector.description}
              />
            ))}
          </div>
          
        </div>

        {/* Drag Overlay for smooth animations */}
        <DragOverlay>
          {activeId ? <TokenOverlay token={{ id: activeId, type: tokenTypes[activeId] || 'revenue' }} /> : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}
