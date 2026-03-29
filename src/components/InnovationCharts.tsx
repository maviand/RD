import React, { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, AreaChart, Area, PieChart, Pie, Cell, ComposedChart, ScatterChart, Scatter, ZAxis
} from 'recharts';

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#6366f1'];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 shadow-md rounded-md">
        <p className="font-bold text-gray-800 mb-1">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value}
            {entry.unit || ''}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

// inn-3: Brecha Severa de Habilidades Digitales
export const DigitalSkillsChart = () => {
  const [adoption, setAdoption] = useState(50);

  const data = [
    { year: '2024', literacy: 45 + (adoption * 0.1), growth: 2 + (adoption * 0.05) },
    { year: '2025', literacy: 50 + (adoption * 0.2), growth: 3 + (adoption * 0.1) },
    { year: '2026', literacy: 55 + (adoption * 0.3), growth: 4 + (adoption * 0.15) },
    { year: '2027', literacy: 60 + (adoption * 0.4), growth: 5 + (adoption * 0.2) },
    { year: '2028', literacy: 65 + (adoption * 0.5), growth: 6 + (adoption * 0.25) },
  ];

  return (
    <div className="w-full flex flex-col items-center mt-6">
      <div className="w-full max-w-md mb-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
        <label className="block text-sm font-medium text-blue-800 mb-2">
          Tasa de Adopción de Tutores IA: {adoption}%
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={adoption}
          onChange={(e) => setAdoption(Number(e.target.value))}
          className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
        />
        <p className="text-xs text-blue-600 mt-2 text-center">Ajusta la adopción para ver el impacto en alfabetización digital</p>
      </div>
      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="year" />
            <YAxis yAxisId="left" unit="%" domain={[0, 120]} />
            <YAxis yAxisId="right" orientation="right" unit="%" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar yAxisId="left" dataKey="literacy" name="Alfabetización Digital" fill="#3b82f6" unit="%" />
            <Line yAxisId="right" type="monotone" dataKey="growth" name="Crecimiento Tech" stroke="#10b981" strokeWidth={3} unit="%" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// inn-4: Fuga de Cerebros Tecnológicos
export const BrainDrainChart = () => {
  const [incentives, setIncentives] = useState(50);

  const data = [
    { year: '2024', retained: 20 + (incentives * 0.2), investment: 10 + (incentives * 0.5) },
    { year: '2025', retained: 30 + (incentives * 0.4), investment: 20 + (incentives * 1) },
    { year: '2026', retained: 40 + (incentives * 0.6), investment: 35 + (incentives * 1.5) },
    { year: '2027', retained: 50 + (incentives * 0.8), investment: 55 + (incentives * 2) },
    { year: '2028', retained: 60 + (incentives * 1.0), investment: 80 + (incentives * 2.5) },
  ];

  return (
    <div className="w-full flex flex-col items-center mt-6">
      <div className="w-full max-w-md mb-6 bg-indigo-50 p-4 rounded-lg border border-indigo-100">
        <label className="block text-sm font-medium text-indigo-800 mb-2">
          Incentivos en Zonas Francas Tech: {incentives}%
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={incentives}
          onChange={(e) => setIncentives(Number(e.target.value))}
          className="w-full h-2 bg-indigo-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
        />
        <p className="text-xs text-indigo-600 mt-2 text-center">Aumenta los incentivos para retener talento y atraer inversión</p>
      </div>
      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRetained" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorInvestment" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="year" />
            <YAxis yAxisId="left" unit="%" />
            <YAxis yAxisId="right" orientation="right" unit="M$" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Area yAxisId="left" type="monotone" dataKey="retained" name="Ingenieros Retenidos" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorRetained)" unit="%" />
            <Area yAxisId="right" type="monotone" dataKey="investment" name="Inversión Extranjera" stroke="#10b981" fillOpacity={1} fill="url(#colorInvestment)" unit="M$" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// inn-5: Baja Tasa de Patentes y Propiedad Intelectual
export const PatentRateChart = () => {
  const [taxReduction, setTaxReduction] = useState(50);

  const data = [
    { year: '2024', patents: 10 + (taxReduction * 0.5), revenue: 5 + (taxReduction * 0.2) },
    { year: '2025', patents: 20 + (taxReduction * 1.0), revenue: 15 + (taxReduction * 0.5) },
    { year: '2026', patents: 35 + (taxReduction * 1.5), revenue: 30 + (taxReduction * 0.8) },
    { year: '2027', patents: 55 + (taxReduction * 2.0), revenue: 50 + (taxReduction * 1.2) },
    { year: '2028', patents: 80 + (taxReduction * 2.5), revenue: 80 + (taxReduction * 1.5) },
  ];

  return (
    <div className="w-full flex flex-col items-center mt-6">
      <div className="w-full max-w-md mb-6 bg-amber-50 p-4 rounded-lg border border-amber-100">
        <label className="block text-sm font-medium text-amber-800 mb-2">
          Reducción de Impuestos (Patent Box): {taxReduction}%
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={taxReduction}
          onChange={(e) => setTaxReduction(Number(e.target.value))}
          className="w-full h-2 bg-amber-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
        />
        <p className="text-xs text-amber-600 mt-2 text-center">Ajusta la reducción fiscal para ver el aumento en patentes</p>
      </div>
      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="year" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" unit="M$" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar yAxisId="left" dataKey="patents" name="Patentes Registradas" fill="#f59e0b" />
            <Bar yAxisId="right" dataKey="revenue" name="Ingresos por PI" fill="#3b82f6" unit="M$" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// inn-6: Infraestructura de Banda Ancha Deficiente
export const BroadbandChart = () => {
  const [satellite, setSatellite] = useState(50);

  const data = [
    { year: '2024', coverage: 40 + (satellite * 0.2), speed: 20 + (satellite * 0.5) },
    { year: '2025', coverage: 50 + (satellite * 0.3), speed: 40 + (satellite * 1) },
    { year: '2026', coverage: 65 + (satellite * 0.4), speed: 70 + (satellite * 1.5) },
    { year: '2027', coverage: 80 + (satellite * 0.5), speed: 110 + (satellite * 2) },
    { year: '2028', coverage: 95 + (satellite * 0.6), speed: 160 + (satellite * 2.5) },
  ];

  return (
    <div className="w-full flex flex-col items-center mt-6">
      <div className="w-full max-w-md mb-6 bg-emerald-50 p-4 rounded-lg border border-emerald-100">
        <label className="block text-sm font-medium text-emerald-800 mb-2">
          Despliegue Satelital (Starlink): {satellite}%
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={satellite}
          onChange={(e) => setSatellite(Number(e.target.value))}
          className="w-full h-2 bg-emerald-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
        />
        <p className="text-xs text-emerald-600 mt-2 text-center">Aumenta el despliegue para mejorar conectividad rural y velocidad</p>
      </div>
      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="year" />
            <YAxis yAxisId="left" unit="%" domain={[0, 160]} />
            <YAxis yAxisId="right" orientation="right" unit="Mbps" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="coverage" name="Cobertura Rural" stroke="#10b981" strokeWidth={3} unit="%" />
            <Line yAxisId="right" type="monotone" dataKey="speed" name="Velocidad Promedio" stroke="#3b82f6" strokeWidth={3} unit="Mbps" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// inn-7: Burocracia en la Creación de Empresas Tech
export const BureaucracyChart = () => {
  const [eResidency, setEResidency] = useState(50);

  const data = [
    { year: '2024', time: 30 - (eResidency * 0.25), startups: 100 + (eResidency * 2) },
    { year: '2025', time: 25 - (eResidency * 0.22), startups: 150 + (eResidency * 4) },
    { year: '2026', time: 15 - (eResidency * 0.14), startups: 250 + (eResidency * 6) },
    { year: '2027', time: 7 - (eResidency * 0.06), startups: 400 + (eResidency * 8) },
    { year: '2028', time: 2 - (eResidency * 0.01), startups: 600 + (eResidency * 10) },
  ];

  return (
    <div className="w-full flex flex-col items-center mt-6">
      <div className="w-full max-w-md mb-6 bg-purple-50 p-4 rounded-lg border border-purple-100">
        <label className="block text-sm font-medium text-purple-800 mb-2">
          Adopción de E-Residency: {eResidency}%
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={eResidency}
          onChange={(e) => setEResidency(Number(e.target.value))}
          className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
        />
        <p className="text-xs text-purple-600 mt-2 text-center">Observa cómo la digitalización reduce el tiempo y aumenta las startups</p>
      </div>
      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="year" />
            <YAxis yAxisId="left" unit=" días" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar yAxisId="left" dataKey="time" name="Tiempo de Creación" fill="#ef4444" unit=" días" />
            <Line yAxisId="right" type="monotone" dataKey="startups" name="Nuevas Startups" stroke="#8b5cf6" strokeWidth={3} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// inn-8: Ciberseguridad Vulnerable
export const CyberSecurityChart = () => {
  const [budget, setBudget] = useState(50);

  const data = [
    { year: '2024', thwarted: 50 + (budget * 0.5), uptime: 95 + (budget * 0.04) },
    { year: '2025', thwarted: 65 + (budget * 0.8), uptime: 96 + (budget * 0.03) },
    { year: '2026', thwarted: 85 + (budget * 1.2), uptime: 97 + (budget * 0.02) },
    { year: '2027', thwarted: 110 + (budget * 1.5), uptime: 98 + (budget * 0.015) },
    { year: '2028', thwarted: 140 + (budget * 2.0), uptime: 99 + (budget * 0.009) },
  ];

  return (
    <div className="w-full flex flex-col items-center mt-6">
      <div className="w-full max-w-md mb-6 bg-red-50 p-4 rounded-lg border border-red-100">
        <label className="block text-sm font-medium text-red-800 mb-2">
          Presupuesto de Ciberdefensa: {budget}%
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          className="w-full h-2 bg-red-200 rounded-lg appearance-none cursor-pointer accent-red-600"
        />
        <p className="text-xs text-red-600 mt-2 text-center">Aumenta el presupuesto para mejorar la mitigación de ataques y el uptime</p>
      </div>
      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorThwarted" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="year" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" unit="%" domain={[90, 100]} />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Area yAxisId="left" type="monotone" dataKey="thwarted" name="Ataques Mitigados (Miles)" stroke="#ef4444" fillOpacity={1} fill="url(#colorThwarted)" />
            <Line yAxisId="right" type="monotone" dataKey="uptime" name="Uptime de Sistemas" stroke="#10b981" strokeWidth={3} unit="%" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// inn-9: Falta de Integración de IA en el Gobierno
export const AIGovChart = () => {
  const [integration, setIntegration] = useState(50);

  const data = [
    { year: '2024', efficiency: 30 + (integration * 0.2), satisfaction: 40 + (integration * 0.1) },
    { year: '2025', efficiency: 45 + (integration * 0.3), satisfaction: 50 + (integration * 0.2) },
    { year: '2026', efficiency: 65 + (integration * 0.4), satisfaction: 65 + (integration * 0.3) },
    { year: '2027', efficiency: 85 + (integration * 0.5), satisfaction: 80 + (integration * 0.4) },
    { year: '2028', efficiency: 110 + (integration * 0.6), satisfaction: 95 + (integration * 0.5) },
  ];

  return (
    <div className="w-full flex flex-col items-center mt-6">
      <div className="w-full max-w-md mb-6 bg-cyan-50 p-4 rounded-lg border border-cyan-100">
        <label className="block text-sm font-medium text-cyan-800 mb-2">
          Integración de IA en Servicios: {integration}%
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={integration}
          onChange={(e) => setIntegration(Number(e.target.value))}
          className="w-full h-2 bg-cyan-200 rounded-lg appearance-none cursor-pointer accent-cyan-600"
        />
        <p className="text-xs text-cyan-600 mt-2 text-center">Ajusta la integración para ver mejoras en eficiencia y satisfacción</p>
      </div>
      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="year" />
            <YAxis yAxisId="left" unit="%" />
            <YAxis yAxisId="right" orientation="right" unit="%" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar yAxisId="left" dataKey="efficiency" name="Eficiencia Gubernamental" fill="#06b6d4" unit="%" />
            <Bar yAxisId="right" dataKey="satisfaction" name="Satisfacción Ciudadana" fill="#3b82f6" unit="%" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// inn-10: Ecosistema Fintech Limitado
export const FintechChart = () => {
  const [sandbox, setSandbox] = useState(50);

  const data = [
    { year: '2024', startups: 15 + (sandbox * 0.5), inclusion: 45 + (sandbox * 0.1) },
    { year: '2025', startups: 30 + (sandbox * 1.0), inclusion: 50 + (sandbox * 0.2) },
    { year: '2026', startups: 55 + (sandbox * 1.5), inclusion: 60 + (sandbox * 0.3) },
    { year: '2027', startups: 90 + (sandbox * 2.0), inclusion: 75 + (sandbox * 0.4) },
    { year: '2028', startups: 140 + (sandbox * 2.5), inclusion: 90 + (sandbox * 0.5) },
  ];

  return (
    <div className="w-full flex flex-col items-center mt-6">
      <div className="w-full max-w-md mb-6 bg-green-50 p-4 rounded-lg border border-green-100">
        <label className="block text-sm font-medium text-green-800 mb-2">
          Participantes en Sandbox Regulatorio: {sandbox}
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={sandbox}
          onChange={(e) => setSandbox(Number(e.target.value))}
          className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer accent-green-600"
        />
        <p className="text-xs text-green-600 mt-2 text-center">Aumenta los participantes para impulsar startups e inclusión financiera</p>
      </div>
      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="year" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" unit="%" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar yAxisId="left" dataKey="startups" name="Startups Fintech" fill="#10b981" />
            <Line yAxisId="right" type="monotone" dataKey="inclusion" name="Inclusión Financiera" stroke="#f59e0b" strokeWidth={3} unit="%" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// inn-11: Desconexión Universidad-Industria
export const UniIndustryChart = () => {
  const [partnerships, setPartnerships] = useState(50);

  const data = [
    { year: '2024', transfers: 5 + (partnerships * 0.2), commercialized: 2 + (partnerships * 0.1) },
    { year: '2025', transfers: 12 + (partnerships * 0.4), commercialized: 6 + (partnerships * 0.2) },
    { year: '2026', transfers: 25 + (partnerships * 0.6), commercialized: 15 + (partnerships * 0.3) },
    { year: '2027', transfers: 45 + (partnerships * 0.8), commercialized: 30 + (partnerships * 0.4) },
    { year: '2028', transfers: 70 + (partnerships * 1.0), commercialized: 50 + (partnerships * 0.5) },
  ];

  return (
    <div className="w-full flex flex-col items-center mt-6">
      <div className="w-full max-w-md mb-6 bg-orange-50 p-4 rounded-lg border border-orange-100">
        <label className="block text-sm font-medium text-orange-800 mb-2">
          Alianzas Universidad-Industria: {partnerships}
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={partnerships}
          onChange={(e) => setPartnerships(Number(e.target.value))}
          className="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
        />
        <p className="text-xs text-orange-600 mt-2 text-center">Aumenta las alianzas para ver más transferencias tecnológicas</p>
      </div>
      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorTransfers" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f97316" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="year" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Area yAxisId="left" type="monotone" dataKey="transfers" name="Transferencias Tecnológicas" stroke="#f97316" fillOpacity={1} fill="url(#colorTransfers)" />
            <Line yAxisId="right" type="monotone" dataKey="commercialized" name="Investigaciones Comercializadas" stroke="#3b82f6" strokeWidth={3} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// inn-12: Falta de Datos Abiertos
export const OpenDataChart = () => {
  const [datasets, setDatasets] = useState(50);

  const data = [
    { year: '2024', apps: 10 + (datasets * 0.5), transparency: 40 + (datasets * 0.2) },
    { year: '2025', apps: 25 + (datasets * 1.0), transparency: 50 + (datasets * 0.3) },
    { year: '2026', apps: 50 + (datasets * 1.5), transparency: 65 + (datasets * 0.4) },
    { year: '2027', apps: 85 + (datasets * 2.0), transparency: 80 + (datasets * 0.5) },
    { year: '2028', apps: 130 + (datasets * 2.5), transparency: 95 + (datasets * 0.6) },
  ];

  return (
    <div className="w-full flex flex-col items-center mt-6">
      <div className="w-full max-w-md mb-6 bg-teal-50 p-4 rounded-lg border border-teal-100">
        <label className="block text-sm font-medium text-teal-800 mb-2">
          Datasets Liberados: {datasets * 10}
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={datasets}
          onChange={(e) => setDatasets(Number(e.target.value))}
          className="w-full h-2 bg-teal-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
        />
        <p className="text-xs text-teal-600 mt-2 text-center">Aumenta los datasets para impulsar apps cívicas y transparencia</p>
      </div>
      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="year" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" unit=" pts" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar yAxisId="left" dataKey="apps" name="Apps Cívicas Creadas" fill="#14b8a6" />
            <Line yAxisId="right" type="monotone" dataKey="transparency" name="Índice de Transparencia" stroke="#8b5cf6" strokeWidth={3} unit=" pts" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// inn-13: Escasez de Talento Femenino en STEM
export const WomenInSTEMChart = () => {
  const [scholarships, setScholarships] = useState(50);

  const data = [
    { year: '2024', women: 15 + (scholarships * 0.1), diversity: 20 + (scholarships * 0.2) },
    { year: '2025', women: 20 + (scholarships * 0.2), diversity: 30 + (scholarships * 0.3) },
    { year: '2026', women: 28 + (scholarships * 0.3), diversity: 45 + (scholarships * 0.4) },
    { year: '2027', women: 38 + (scholarships * 0.4), diversity: 65 + (scholarships * 0.5) },
    { year: '2028', women: 50 + (scholarships * 0.5), diversity: 90 + (scholarships * 0.6) },
  ];

  return (
    <div className="w-full flex flex-col items-center mt-6">
      <div className="w-full max-w-md mb-6 bg-pink-50 p-4 rounded-lg border border-pink-100">
        <label className="block text-sm font-medium text-pink-800 mb-2">
          Becas STEM para Mujeres: {scholarships * 20}
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={scholarships}
          onChange={(e) => setScholarships(Number(e.target.value))}
          className="w-full h-2 bg-pink-200 rounded-lg appearance-none cursor-pointer accent-pink-600"
        />
        <p className="text-xs text-pink-600 mt-2 text-center">Aumenta las becas para ver el impacto en diversidad tecnológica</p>
      </div>
      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="year" />
            <YAxis yAxisId="left" unit="%" />
            <YAxis yAxisId="right" orientation="right" unit=" pts" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar yAxisId="left" dataKey="women" name="Mujeres en Tech" fill="#ec4899" unit="%" />
            <Line yAxisId="right" type="monotone" dataKey="diversity" name="Índice de Diversidad" stroke="#3b82f6" strokeWidth={3} unit=" pts" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// inn-14: Adopción Lenta de Cloud Computing
export const CloudAdoptionChart = () => {
  const [migration, setMigration] = useState(50);

  const data = [
    { year: '2024', savings: 5 + (migration * 0.2), scalability: 30 + (migration * 0.3) },
    { year: '2025', savings: 15 + (migration * 0.4), scalability: 45 + (migration * 0.4) },
    { year: '2026', savings: 30 + (migration * 0.6), scalability: 65 + (migration * 0.5) },
    { year: '2027', savings: 50 + (migration * 0.8), scalability: 85 + (migration * 0.6) },
    { year: '2028', savings: 75 + (migration * 1.0), scalability: 110 + (migration * 0.7) },
  ];

  return (
    <div className="w-full flex flex-col items-center mt-6">
      <div className="w-full max-w-md mb-6 bg-sky-50 p-4 rounded-lg border border-sky-100">
        <label className="block text-sm font-medium text-sky-800 mb-2">
          Migración a Cloud (Cloud-First): {migration}%
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={migration}
          onChange={(e) => setMigration(Number(e.target.value))}
          className="w-full h-2 bg-sky-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
        />
        <p className="text-xs text-sky-600 mt-2 text-center">Aumenta la migración para ver ahorros en TI y escalabilidad</p>
      </div>
      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorSavings" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="year" />
            <YAxis yAxisId="left" unit="M$" />
            <YAxis yAxisId="right" orientation="right" unit=" pts" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Area yAxisId="left" type="monotone" dataKey="savings" name="Ahorros en TI" stroke="#0ea5e9" fillOpacity={1} fill="url(#colorSavings)" unit="M$" />
            <Line yAxisId="right" type="monotone" dataKey="scalability" name="Escalabilidad de Sistemas" stroke="#10b981" strokeWidth={3} unit=" pts" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// inn-15: Falta de Incentivos para Nómadas Digitales
export const DigitalNomadChart = () => {
  const [visas, setVisas] = useState(50);

  const data = [
    { year: '2024', spending: 10 + (visas * 0.5), collaboration: 5 + (visas * 0.2) },
    { year: '2025', spending: 25 + (visas * 1.0), collaboration: 15 + (visas * 0.4) },
    { year: '2026', spending: 45 + (visas * 1.5), collaboration: 30 + (visas * 0.6) },
    { year: '2027', spending: 70 + (visas * 2.0), collaboration: 50 + (visas * 0.8) },
    { year: '2028', spending: 100 + (visas * 2.5), collaboration: 75 + (visas * 1.0) },
  ];

  return (
    <div className="w-full flex flex-col items-center mt-6">
      <div className="w-full max-w-md mb-6 bg-yellow-50 p-4 rounded-lg border border-yellow-100">
        <label className="block text-sm font-medium text-yellow-800 mb-2">
          Visas Nómadas Aprobadas: {visas * 100}
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={visas}
          onChange={(e) => setVisas(Number(e.target.value))}
          className="w-full h-2 bg-yellow-200 rounded-lg appearance-none cursor-pointer accent-yellow-600"
        />
        <p className="text-xs text-yellow-600 mt-2 text-center">Aumenta las visas para ver el impacto económico y colaborativo</p>
      </div>
      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="year" />
            <YAxis yAxisId="left" unit="M$" />
            <YAxis yAxisId="right" orientation="right" unit=" pts" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar yAxisId="left" dataKey="spending" name="Gasto Local" fill="#eab308" unit="M$" />
            <Line yAxisId="right" type="monotone" dataKey="collaboration" name="Colaboración Tech Local" stroke="#ef4444" strokeWidth={3} unit=" pts" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// inn-16: Obsolescencia del Currículo Escolar
export const SchoolCurriculumChart = () => {
  const [coding, setCoding] = useState(50);

  const data = [
    { year: '2024', proficiency: 20 + (coding * 0.2), workforce: 5 + (coding * 0.1) },
    { year: '2025', proficiency: 35 + (coding * 0.3), workforce: 12 + (coding * 0.2) },
    { year: '2026', proficiency: 55 + (coding * 0.4), workforce: 25 + (coding * 0.3) },
    { year: '2027', proficiency: 80 + (coding * 0.5), workforce: 45 + (coding * 0.4) },
    { year: '2028', proficiency: 110 + (coding * 0.6), workforce: 70 + (coding * 0.5) },
  ];

  return (
    <div className="w-full flex flex-col items-center mt-6">
      <div className="w-full max-w-md mb-6 bg-lime-50 p-4 rounded-lg border border-lime-100">
        <label className="block text-sm font-medium text-lime-800 mb-2">
          Escuelas con Programación Obligatoria: {coding}%
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={coding}
          onChange={(e) => setCoding(Number(e.target.value))}
          className="w-full h-2 bg-lime-200 rounded-lg appearance-none cursor-pointer accent-lime-600"
        />
        <p className="text-xs text-lime-600 mt-2 text-center">Aumenta la adopción para mejorar la competencia técnica de los estudiantes</p>
      </div>
      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="year" />
            <YAxis yAxisId="left" unit=" pts" />
            <YAxis yAxisId="right" orientation="right" unit="%" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar yAxisId="left" dataKey="proficiency" name="Competencia Técnica" fill="#84cc16" unit=" pts" />
            <Line yAxisId="right" type="monotone" dataKey="workforce" name="Fuerza Laboral Tech Futura" stroke="#3b82f6" strokeWidth={3} unit="%" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// inn-17: Brecha Digital Rural-Urbana
export const RuralDigitalDivideChart = () => {
  const [hubs, setHubs] = useState(50);

  const data = [
    { year: '2024', literacy: 15 + (hubs * 0.2), ecommerce: 5 + (hubs * 0.1) },
    { year: '2025', literacy: 25 + (hubs * 0.3), ecommerce: 15 + (hubs * 0.2) },
    { year: '2026', literacy: 40 + (hubs * 0.4), ecommerce: 30 + (hubs * 0.3) },
    { year: '2027', literacy: 60 + (hubs * 0.5), ecommerce: 50 + (hubs * 0.4) },
    { year: '2028', literacy: 85 + (hubs * 0.6), ecommerce: 75 + (hubs * 0.5) },
  ];

  return (
    <div className="w-full flex flex-col items-center mt-6">
      <div className="w-full max-w-md mb-6 bg-fuchsia-50 p-4 rounded-lg border border-fuchsia-100">
        <label className="block text-sm font-medium text-fuchsia-800 mb-2">
          Centros Digitales Comunitarios: {hubs * 5}
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={hubs}
          onChange={(e) => setHubs(Number(e.target.value))}
          className="w-full h-2 bg-fuchsia-200 rounded-lg appearance-none cursor-pointer accent-fuchsia-600"
        />
        <p className="text-xs text-fuchsia-600 mt-2 text-center">Aumenta los centros para mejorar alfabetización y e-commerce rural</p>
      </div>
      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorLiteracy" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#d946ef" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#d946ef" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="year" />
            <YAxis yAxisId="left" unit="%" />
            <YAxis yAxisId="right" orientation="right" unit="%" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Area yAxisId="left" type="monotone" dataKey="literacy" name="Alfabetización Rural" stroke="#d946ef" fillOpacity={1} fill="url(#colorLiteracy)" unit="%" />
            <Line yAxisId="right" type="monotone" dataKey="ecommerce" name="Adopción E-commerce" stroke="#10b981" strokeWidth={3} unit="%" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// inn-18: Falta de Capital Semilla
export const SeedCapitalChart = () => {
  const [matching, setMatching] = useState(50);

  const data = [
    { year: '2024', rounds: 10 + (matching * 0.5), survival: 30 + (matching * 0.2) },
    { year: '2025', rounds: 25 + (matching * 1.0), survival: 40 + (matching * 0.3) },
    { year: '2026', rounds: 45 + (matching * 1.5), survival: 55 + (matching * 0.4) },
    { year: '2027', rounds: 70 + (matching * 2.0), survival: 70 + (matching * 0.5) },
    { year: '2028', rounds: 100 + (matching * 2.5), survival: 85 + (matching * 0.6) },
  ];

  return (
    <div className="w-full flex flex-col items-center mt-6">
      <div className="w-full max-w-md mb-6 bg-rose-50 p-4 rounded-lg border border-rose-100">
        <label className="block text-sm font-medium text-rose-800 mb-2">
          Fondo de Contrapartida del Gobierno: {matching}%
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={matching}
          onChange={(e) => setMatching(Number(e.target.value))}
          className="w-full h-2 bg-rose-200 rounded-lg appearance-none cursor-pointer accent-rose-600"
        />
        <p className="text-xs text-rose-600 mt-2 text-center">Aumenta el fondo para ver más rondas semilla y mayor supervivencia</p>
      </div>
      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="year" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" unit="%" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar yAxisId="left" dataKey="rounds" name="Rondas Semilla Cerradas" fill="#f43f5e" />
            <Line yAxisId="right" type="monotone" dataKey="survival" name="Tasa de Supervivencia" stroke="#3b82f6" strokeWidth={3} unit="%" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// inn-19: Regulación Desactualizada para Nuevas Tecnologías
export const OutdatedRegulationChart = () => {
  const [agile, setAgile] = useState(50);

  const data = [
    { year: '2024', speed: 20 + (agile * 0.3), compliance: 50 + (agile * 0.2) },
    { year: '2025', speed: 35 + (agile * 0.5), compliance: 60 + (agile * 0.3) },
    { year: '2026', speed: 55 + (agile * 0.7), compliance: 75 + (agile * 0.4) },
    { year: '2027', speed: 80 + (agile * 0.9), compliance: 90 + (agile * 0.5) },
    { year: '2028', speed: 110 + (agile * 1.1), compliance: 105 + (agile * 0.6) },
  ];

  return (
    <div className="w-full flex flex-col items-center mt-6">
      <div className="w-full max-w-md mb-6 bg-slate-50 p-4 rounded-lg border border-slate-200">
        <label className="block text-sm font-medium text-slate-800 mb-2">
          Adopción de Regulación Ágil: {agile}%
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={agile}
          onChange={(e) => setAgile(Number(e.target.value))}
          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-600"
        />
        <p className="text-xs text-slate-600 mt-2 text-center">Aumenta la agilidad para acelerar la innovación y el cumplimiento</p>
      </div>
      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="year" />
            <YAxis yAxisId="left" unit=" pts" />
            <YAxis yAxisId="right" orientation="right" unit=" pts" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar yAxisId="left" dataKey="speed" name="Velocidad de Innovación" fill="#64748b" unit=" pts" />
            <Line yAxisId="right" type="monotone" dataKey="compliance" name="Cumplimiento Regulatorio" stroke="#10b981" strokeWidth={3} unit=" pts" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// inn-20: Dependencia de Tecnología Extranjera
export const ForeignTechDependenceChart = () => {
  const [quota, setQuota] = useState(50);

  const data = [
    { year: '2024', revenue: 10 + (quota * 0.5), independence: 20 + (quota * 0.2) },
    { year: '2025', revenue: 25 + (quota * 1.0), independence: 35 + (quota * 0.3) },
    { year: '2026', revenue: 45 + (quota * 1.5), independence: 55 + (quota * 0.4) },
    { year: '2027', revenue: 70 + (quota * 2.0), independence: 80 + (quota * 0.5) },
    { year: '2028', revenue: 100 + (quota * 2.5), independence: 110 + (quota * 0.6) },
  ];

  return (
    <div className="w-full flex flex-col items-center mt-6">
      <div className="w-full max-w-md mb-6 bg-violet-50 p-4 rounded-lg border border-violet-100">
        <label className="block text-sm font-medium text-violet-800 mb-2">
          Cuota de Compras Públicas Locales: {quota}%
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={quota}
          onChange={(e) => setQuota(Number(e.target.value))}
          className="w-full h-2 bg-violet-200 rounded-lg appearance-none cursor-pointer accent-violet-600"
        />
        <p className="text-xs text-violet-600 mt-2 text-center">Aumenta la cuota para ver el impacto en ingresos locales e independencia</p>
      </div>
      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="year" />
            <YAxis yAxisId="left" unit="M$" />
            <YAxis yAxisId="right" orientation="right" unit=" pts" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Area yAxisId="left" type="monotone" dataKey="revenue" name="Ingresos Tech Nacional" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorRevenue)" unit="M$" />
            <Line yAxisId="right" type="monotone" dataKey="independence" name="Independencia Tecnológica" stroke="#f59e0b" strokeWidth={3} unit=" pts" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
