import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, AreaChart, Area, PieChart, Pie, Cell, ComposedChart
} from 'recharts';

const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6', '#6366f1'];

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

// jus-5
export const ProsecutorIndependenceChart = () => {
  const data = [
    { year: '2024', inefficiencies: 100, roi: 0 },
    { year: '2025', inefficiencies: 80, roi: 10 },
    { year: '2026', inefficiencies: 50, roi: 35 },
    { year: '2027', inefficiencies: 30, roi: 75 },
    { year: '2028', inefficiencies: 15, roi: 150 },
  ];

  return (
    <div className="w-full h-72 mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="year" />
          <YAxis yAxisId="left" unit="%" />
          <YAxis yAxisId="right" orientation="right" unit="%" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar yAxisId="left" dataKey="inefficiencies" name="Ineficiencias Operativas (Índice)" fill="#ef4444" unit="%" />
          <Line yAxisId="right" type="monotone" dataKey="roi" name="Retorno de Inversión (ROI)" stroke="#10b981" strokeWidth={3} unit="%" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

// jus-6
export const InterInstitutionalCoordinationChart = () => {
  const data = [
    { year: '2024', coordination: 15, lostCases: 85 },
    { year: '2025', coordination: 35, lostCases: 65 },
    { year: '2026', coordination: 60, lostCases: 40 },
    { year: '2027', coordination: 80, lostCases: 20 },
    { year: '2028', coordination: 95, lostCases: 5 },
  ];

  return (
    <div className="w-full h-72 mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="year" />
          <YAxis unit="%" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Area type="monotone" dataKey="coordination" name="Casos Trazados Exitosamente" stackId="1" stroke="#3b82f6" fill="#3b82f6" unit="%" />
          <Area type="monotone" dataKey="lostCases" name="Casos Perdidos por Descoordinación" stackId="1" stroke="#ef4444" fill="#ef4444" unit="%" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

// jus-7
export const PublicDefenseFundingChart = () => {
  const data = [
    { year: '2024', defenders: 150, coverage: 30 },
    { year: '2025', defenders: 250, coverage: 50 },
    { year: '2026', defenders: 400, coverage: 75 },
    { year: '2027', defenders: 550, coverage: 90 },
    { year: '2028', defenders: 700, coverage: 98 },
  ];

  return (
    <div className="w-full h-72 mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="year" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" unit="%" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar yAxisId="left" dataKey="defenders" name="Defensores Públicos Activos" fill="#8b5cf6" />
          <Line yAxisId="right" type="monotone" dataKey="coverage" name="Cobertura de Defensa Gratuita" stroke="#10b981" strokeWidth={3} unit="%" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

// jus-8
export const ForensicModernizationChart = () => {
  const data = [
    { year: '2024', processingTime: 45, labs: 2 },
    { year: '2025', processingTime: 30, labs: 4 },
    { year: '2026', processingTime: 15, labs: 7 },
    { year: '2027', processingTime: 7, labs: 10 },
    { year: '2028', processingTime: 3, labs: 12 },
  ];

  return (
    <div className="w-full h-72 mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="year" />
          <YAxis yAxisId="left" unit="d" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar yAxisId="right" dataKey="labs" name="Laboratorios Regionales Activos" fill="#3b82f6" />
          <Line yAxisId="left" type="monotone" dataKey="processingTime" name="Tiempo de Procesamiento (Días)" stroke="#ef4444" strokeWidth={3} unit=" días" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

// jus-9
export const DigitalJusticeChart = () => {
  const data = [
    { year: '2024', paperless: 10 },
    { year: '2025', paperless: 35 },
    { year: '2026', paperless: 65 },
    { year: '2027', paperless: 85 },
    { year: '2028', paperless: 98 },
  ];

  return (
    <div className="w-full h-72 mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="year" />
          <YAxis unit="%" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Area type="monotone" dataKey="paperless" name="Adopción de Expediente Electrónico" stroke="#10b981" fill="#10b981" fillOpacity={0.4} unit="%" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

// jus-10
export const JudicialIndependenceChart = () => {
  const data = [
    { year: '2024', career: 40, political: 60 },
    { year: '2025', career: 55, political: 45 },
    { year: '2026', career: 70, political: 30 },
    { year: '2027', career: 85, political: 15 },
    { year: '2028', career: 95, political: 5 },
  ];

  return (
    <div className="w-full h-72 mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="year" />
          <YAxis unit="%" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="career" name="Jueces de Carrera" stackId="a" fill="#3b82f6" unit="%" />
          <Bar dataKey="political" name="Nombramientos Políticos" stackId="a" fill="#ef4444" unit="%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

// jus-11
export const BudgetAutonomyChart = () => {
  const data = [
    { year: '2024', compliance: 60 },
    { year: '2025', compliance: 75 },
    { year: '2026', compliance: 90 },
    { year: '2027', compliance: 98 },
    { year: '2028', compliance: 100 },
  ];

  return (
    <div className="w-full h-72 mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="year" />
          <YAxis unit="%" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line type="monotone" dataKey="compliance" name="Cumplimiento Presupuestario de Ley" stroke="#f59e0b" strokeWidth={3} unit="%" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

// jus-12
export const GenderViolenceCourtsChart = () => {
  const data = [
    { year: '2024', courts: 2, resolutionTime: 180 },
    { year: '2025', courts: 8, resolutionTime: 120 },
    { year: '2026', courts: 15, resolutionTime: 60 },
    { year: '2027', courts: 25, resolutionTime: 30 },
    { year: '2028', courts: 35, resolutionTime: 15 },
  ];

  return (
    <div className="w-full h-72 mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="year" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" unit="d" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar yAxisId="left" dataKey="courts" name="Tribunales Especializados 24/7" fill="#8b5cf6" />
          <Line yAxisId="right" type="monotone" dataKey="resolutionTime" name="Tiempo de Resolución (Días)" stroke="#ef4444" strokeWidth={3} unit=" días" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

// jus-13
export const AlternativeDisputeChart = () => {
  const data = [
    { year: '2024', mediation: 10, litigation: 90 },
    { year: '2025', mediation: 30, litigation: 70 },
    { year: '2026', mediation: 55, litigation: 45 },
    { year: '2027', mediation: 75, litigation: 25 },
    { year: '2028', mediation: 85, litigation: 15 },
  ];

  return (
    <div className="w-full h-72 mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="year" />
          <YAxis unit="%" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Area type="monotone" dataKey="mediation" name="Casos Resueltos por Mediación" stackId="1" stroke="#10b981" fill="#10b981" unit="%" />
          <Area type="monotone" dataKey="litigation" name="Casos en Litigio Formal" stackId="1" stroke="#6366f1" fill="#6366f1" unit="%" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

// jus-14
export const RuralJusticeAccessChart = () => {
  const data = [
    { year: '2024', mobileCourts: 5, ruralAccess: 20 },
    { year: '2025', mobileCourts: 15, ruralAccess: 45 },
    { year: '2026', mobileCourts: 30, ruralAccess: 70 },
    { year: '2027', mobileCourts: 50, ruralAccess: 85 },
    { year: '2028', mobileCourts: 75, ruralAccess: 95 },
  ];

  return (
    <div className="w-full h-72 mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="year" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" unit="%" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar yAxisId="left" dataKey="mobileCourts" name="Juzgados de Paz Móviles" fill="#f59e0b" />
          <Line yAxisId="right" type="monotone" dataKey="ruralAccess" name="Acceso a Justicia en Zonas Rurales" stroke="#3b82f6" strokeWidth={3} unit="%" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

// jus-15
export const NotarialBlockchainChart = () => {
  const data = [
    { year: '2024', fraudCases: 5000, blockchainAdoption: 5 },
    { year: '2025', fraudCases: 3500, blockchainAdoption: 30 },
    { year: '2026', fraudCases: 1500, blockchainAdoption: 65 },
    { year: '2027', fraudCases: 500, blockchainAdoption: 90 },
    { year: '2028', fraudCases: 50, blockchainAdoption: 99 },
  ];

  return (
    <div className="w-full h-72 mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="year" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" unit="%" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar yAxisId="left" dataKey="fraudCases" name="Casos de Fraude Notarial" fill="#ef4444" />
          <Line yAxisId="right" type="monotone" dataKey="blockchainAdoption" name="Adopción de Registro Blockchain" stroke="#10b981" strokeWidth={3} unit="%" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

// jus-16
export const JudgmentEnforcementChart = () => {
  const data = [
    { year: '2024', enforcementRate: 35 },
    { year: '2025', enforcementRate: 50 },
    { year: '2026', enforcementRate: 70 },
    { year: '2027', enforcementRate: 85 },
    { year: '2028', enforcementRate: 95 },
  ];

  return (
    <div className="w-full h-72 mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="year" />
          <YAxis unit="%" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Area type="monotone" dataKey="enforcementRate" name="Tasa de Ejecución de Sentencias" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.4} unit="%" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

// jus-17
export const JuvenileRestorativeChart = () => {
  const data = [
    { year: '2024', recidivism: 60, restorative: 15 },
    { year: '2025', recidivism: 45, restorative: 35 },
    { year: '2026', recidivism: 30, restorative: 60 },
    { year: '2027', recidivism: 15, restorative: 80 },
    { year: '2028', recidivism: 8, restorative: 95 },
  ];

  return (
    <div className="w-full h-72 mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="year" />
          <YAxis unit="%" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="restorative" name="Jóvenes en Programas Restaurativos" fill="#10b981" unit="%" />
          <Line type="monotone" dataKey="recidivism" name="Tasa de Reincidencia Juvenil" stroke="#ef4444" strokeWidth={3} unit="%" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

// jus-18
export const LegalTranslationChart = () => {
  const data = [
    { year: '2024', interpreters: 10 },
    { year: '2025', interpreters: 45 },
    { year: '2026', interpreters: 120 },
    { year: '2027', interpreters: 250 },
    { year: '2028', interpreters: 400 },
  ];

  return (
    <div className="w-full h-72 mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="interpreters" name="Intérpretes Certificados Desplegados" fill="#8b5cf6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

// jus-19
export const CommercialDisputeChart = () => {
  const data = [
    { year: '2024', resolutionDays: 450 },
    { year: '2025', resolutionDays: 300 },
    { year: '2026', resolutionDays: 180 },
    { year: '2027', resolutionDays: 90 },
    { year: '2028', resolutionDays: 45 },
  ];

  return (
    <div className="w-full h-72 mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="year" />
          <YAxis unit="d" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line type="monotone" dataKey="resolutionDays" name="Tiempo Promedio Resolución Comercial" stroke="#f59e0b" strokeWidth={3} unit=" días" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

// jus-20
export const FastTrackCourtsChart = () => {
  const data = [
    { year: '2024', fastTracked: 5, traditional: 95 },
    { year: '2025', fastTracked: 25, traditional: 75 },
    { year: '2026', fastTracked: 50, traditional: 50 },
    { year: '2027', fastTracked: 75, traditional: 25 },
    { year: '2028', fastTracked: 90, traditional: 10 },
  ];

  return (
    <div className="w-full h-72 mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="year" />
          <YAxis unit="%" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Area type="monotone" dataKey="fastTracked" name="Delitos Flagrantes Vía Rápida" stackId="1" stroke="#10b981" fill="#10b981" unit="%" />
          <Area type="monotone" dataKey="traditional" name="Procesamiento Tradicional" stackId="1" stroke="#6366f1" fill="#6366f1" unit="%" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

// jus-21
export const JudicialEducationChart = () => {
  const data = [
    { year: '2024', recertified: 15 },
    { year: '2025', recertified: 35 },
    { year: '2026', recertified: 60 },
    { year: '2027', recertified: 85 },
    { year: '2028', recertified: 100 },
  ];

  return (
    <div className="w-full h-72 mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="year" />
          <YAxis unit="%" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="recertified" name="Jueces Recertificados (Anual)" fill="#3b82f6" unit="%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
