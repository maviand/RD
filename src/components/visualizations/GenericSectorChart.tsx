import React from 'react';
import { ResponsiveContainer, ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Activity } from 'lucide-react';

interface ChartProps {
  title: string;
  description: string;
  data: any[];
  barKey?: string;
  lineKey?: string;
  colors?: { bar: string, line: string };
}

export default function GenericSectorChart({ 
  title, 
  description, 
  data, 
  barKey = 'Actual', 
  lineKey = 'Proyección', 
  colors = { bar: '#94a3b8', line: '#22c55e' } 
}: ChartProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 my-8">
      <div className="flex items-center gap-3 mb-6">
        <Activity className="w-6 h-6 text-[var(--color-gov-blue)]" />
        <h3 className="text-xl font-heading font-bold text-[var(--color-gov-blue)] uppercase">{title}</h3>
      </div>
      
      <p className="text-sm text-gray-600 mb-6 font-sans">
        {description}
      </p>

      <div className="h-80 w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {barKey && <Bar dataKey={barKey} fill={colors.bar} radius={[4, 4, 0, 0]} />}
            {lineKey && <Line type="monotone" dataKey={lineKey} stroke={colors.line} strokeWidth={3} />}
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
