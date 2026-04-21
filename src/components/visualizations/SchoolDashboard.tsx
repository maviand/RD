import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';
import { BookOpen } from 'lucide-react';

const data = [
  { year: '2012', "RD (Modelo Actual)": 328, "OECD Promedio": 494 },
  { year: '2015', "RD (Modelo Actual)": 332, "OECD Promedio": 493 },
  { year: '2018', "RD (Modelo Actual)": 342, "OECD Promedio": 489 },
  { year: '2022', "RD (Modelo Actual)": 339, "OECD Promedio": 488 },
  { year: '2026', "RD (Modelo Actual)": 341, "OECD Promedio": 488, "Proyección Reforma (IA + Vouchers)": 341 },
  { year: '2029', "Proyección Reforma (IA + Vouchers)": 395, "OECD Promedio": 488 },
  { year: '2032', "Proyección Reforma (IA + Vouchers)": 440, "OECD Promedio": 489 },
  { year: '2035', "Proyección Reforma (IA + Vouchers)": 485, "OECD Promedio": 490 },
];

export default function PisaChart() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 my-8">
      <div className="flex items-center gap-3 mb-6">
        <BookOpen className="w-6 h-6 text-blue-500" />
        <h3 className="text-xl font-heading font-bold text-[var(--color-gov-blue)] uppercase">Proyección Resultados PISA: El Impacto de IA y Libre Elección</h3>
      </div>
      
      <p className="text-sm text-gray-600 mb-6 font-sans">
        A pesar de inyectar el 4% del PIB en 2012, RD se mantiene en el fondo global matemático y lector. El modelo propone disrupción mediante Tutores IA 24/7 y la privatización de la administración bajo métricas estrictas.
      </p>

      <div className="h-80 w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="year" />
            <YAxis domain={[300, 550]} />
            <Tooltip />
            <Legend />
            <ReferenceLine x="2026" stroke="red" strokeDasharray="3 3" label={{ position: 'top', value: 'Año de la Reforma', fill: 'red', fontSize: 12 }} />
            <Line type="monotone" dataKey="RD (Modelo Actual)" stroke="#ef4444" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="OECD Promedio" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" dot={false} />
            <Line type="monotone" dataKey="Proyección Reforma (IA + Vouchers)" stroke="#eab308" strokeWidth={4} dot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
