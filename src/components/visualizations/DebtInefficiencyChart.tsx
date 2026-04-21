import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { Scale } from 'lucide-react';

const data = [
  { year: 'Año 1', "Gasto Modelo Antiguo": 15000, "Costo Cárcel Factoría": 15000, "Producción Recluso": 0 },
  { year: 'Año 2', "Gasto Modelo Antiguo": 15500, "Costo Cárcel Factoría": 12000, "Producción Recluso": 8000 },
  { year: 'Año 3', "Gasto Modelo Antiguo": 16000, "Costo Cárcel Factoría": 10000, "Producción Recluso": 14000 },
  { year: 'Año 4', "Gasto Modelo Antiguo": 16500, "Costo Cárcel Factoría": 9000,  "Producción Recluso": 18000 },
  { year: 'Año 5', "Gasto Modelo Antiguo": 17000, "Costo Cárcel Factoría": 8500,  "Producción Recluso": 22000 },
];

export default function PrisonROIChart() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 my-8">
      <div className="flex items-center gap-3 mb-6">
        <Scale className="w-6 h-6 text-purple-600" />
        <h3 className="text-xl font-heading font-bold text-[var(--color-gov-blue)] uppercase">Retorno de Inversión (ROI): Cárceles Factoría</h3>
      </div>
      
      <p className="text-sm text-gray-600 mb-6 font-sans">
        El modelo tradicional hiper-hacinado representa un agujero fiscal donde el estado mantiene indefinidamente al recluso. En el modelo "Factoría", la producción forestal y textil del recluso paga por su mantenimiento, generando un superávit para el Estado a partir del 3er año.
      </p>

      <div className="h-80 w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            
            <Area 
              type="monotone" 
              dataKey="Gasto Modelo Antiguo" 
              stackId="1" 
              stroke="#ef4444" 
              fill="#fca5a5" 
              fillOpacity={0.3} 
            />
            
            <Area 
              type="monotone" 
              dataKey="Producción Recluso" 
              stackId="2" 
              stroke="#22c55e" 
              fill="#86efac" 
              fillOpacity={0.6} 
            />
            
            <Area 
              type="monotone" 
              dataKey="Costo Cárcel Factoría" 
              stackId="3" 
              stroke="#ca8a04" 
              fill="#fde047" 
              fillOpacity={0.3} 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex gap-4 mt-4 justify-center text-xs font-bold font-sans">
        <div className="flex items-center gap-1"><div className="w-3 h-3 bg-red-400 rounded-sm"></div> Pérdida Fiscal Continua</div>
        <div className="flex items-center gap-1"><div className="w-3 h-3 bg-yellow-400 rounded-sm"></div> Costo Operativo Nueva Cárcel</div>
        <div className="flex items-center gap-1"><div className="w-3 h-3 bg-green-400 rounded-sm"></div> Beneficio Industrial Generado</div>
      </div>
    </div>
  );
}
