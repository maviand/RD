import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'motion/react';
import { Droplet, TrendingDown } from 'lucide-react';

export default function FuelTaxCalculator() {
  const [gallons, setGallons] = useState(15);
  
  const currentPrice = 290.10; // RD$ per gallon (example)
  const taxPerGallon = 110.0; // Ad-hoc estimate for taxes
  
  const totalCurrent = gallons * currentPrice;
  const totalProposed = gallons * (currentPrice - taxPerGallon);
  const savings = totalCurrent - totalProposed;

  const data = [
    {
      name: 'Precio por Galón',
      "Modelo Actual (RD$)": currentPrice,
      "Sin Impuestos Mafiosos (RD$)": currentPrice - taxPerGallon,
    }
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 my-8">
      <div className="flex items-center gap-3 mb-6">
        <Droplet className="w-6 h-6 text-orange-500" />
        <h3 className="text-xl font-heading font-bold text-[var(--color-gov-blue)] uppercase">Impacto del Desmonte de Impuestos a Combustibles</h3>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <p className="text-sm text-gray-600 mb-6 font-sans">
            La Ley de Hidrocarburos actual impone márgenes groseros de ganancias fijas a transportistas sindicalizados y al estado, encareciendo el flete y la comida entera. Calcula tu ahorro mensual.
          </p>
          
          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest mb-2">Galones consumidos al mes: {gallons}</label>
            <input 
              type="range" 
              min="5" 
              max="100" 
              value={gallons} 
              onChange={(e) => setGallons(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
            />
          </div>

          <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 flex items-start gap-4">
            <TrendingDown className="w-8 h-8 text-orange-500 mt-1" />
            <div>
              <p className="text-sm font-bold text-gray-700 uppercase">Ahorro Mensual Inmediato</p>
              <p className="text-3xl font-heading font-extrabold text-orange-600 mt-1">RD$ {savings.toLocaleString()}</p>
              <p className="text-xs text-gray-500 mt-2">Equivalente a una disminución del {(taxPerGallon/currentPrice * 100).toFixed(0)}% en el costo logístico de la canasta básica.</p>
            </div>
          </div>
        </div>

        <div className="h-64 mt-4 lg:mt-0">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip cursor={{fill: 'transparent'}} />
              <Legend />
              <Bar dataKey="Modelo Actual (RD$)" fill="#ef4444" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Sin Impuestos Mafiosos (RD$)" fill="#22c55e" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
