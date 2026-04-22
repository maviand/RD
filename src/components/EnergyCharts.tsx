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

// nrg-3
export const RenewableCurtailmentChart = () => {
  const data = [
    { year: '2024', curtailment: 15, usage: 85 },
    { year: '2025', curtailment: 12, usage: 88 },
    { year: '2026', curtailment: 8, usage: 92 },
    { year: '2027', curtailment: 4, usage: 96 },
    { year: '2028', curtailment: 1, usage: 99 },
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
          <Area type="monotone" dataKey="usage" name="Energía Aprovechada" stackId="1" stroke="#10b981" fill="#10b981" unit="%" />
          <Area type="monotone" dataKey="curtailment" name="Energía Desperdiciada (Curtailment)" stackId="1" stroke="#ef4444" fill="#ef4444" unit="%" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

// nrg-4
export const FossilFuelDependenceChart = () => {
  const data = [
    { year: '2024', fossil: 82, renewable: 18 },
    { year: '2025', fossil: 75, renewable: 25 },
    { year: '2026', fossil: 65, renewable: 35 },
    { year: '2027', fossil: 55, renewable: 45 },
    { year: '2028', fossil: 45, renewable: 55 },
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
          <Bar dataKey="fossil" name="Combustibles Fósiles" stackId="a" fill="#4b5563" unit="%" />
          <Bar dataKey="renewable" name="Renovables y Almacenamiento" stackId="a" fill="#10b981" unit="%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

// nrg-5
export const TransmissionMonopolyChart = () => {
  const data = [
    { year: '2024', waitTime: 36, capacity: 100 },
    { year: '2025', waitTime: 24, capacity: 120 },
    { year: '2026', waitTime: 12, capacity: 150 },
    { year: '2027', waitTime: 6, capacity: 200 },
    { year: '2028', waitTime: 3, capacity: 280 },
  ];

  return (
    <div className="w-full h-72 mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="year" />
          <YAxis yAxisId="left" unit=" meses" />
          <YAxis yAxisId="right" orientation="right" unit="%" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar yAxisId="left" dataKey="waitTime" name="Tiempo de Conexión (Meses)" fill="#f59e0b" unit=" meses" />
          <Line yAxisId="right" type="monotone" dataKey="capacity" name="Capacidad de Transmisión (Índice)" stroke="#3b82f6" strokeWidth={3} unit="%" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

// nrg-6
export const EdeDeficitChart = () => {
  const data = [
    { year: '2024', losses: 35, deficit: 1200 },
    { year: '2025', losses: 28, deficit: 900 },
    { year: '2026', losses: 22, deficit: 600 },
    { year: '2027', losses: 15, deficit: 300 },
    { year: '2028', losses: 10, deficit: 0 },
  ];

  return (
    <div className="w-full h-72 mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="year" />
          <YAxis yAxisId="left" unit="%" />
          <YAxis yAxisId="right" orientation="right" unit="M$" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar yAxisId="right" dataKey="deficit" name="Déficit Financiero (Millones USD)" fill="#ef4444" unit="M$" />
          <Line yAxisId="left" type="monotone" dataKey="losses" name="Pérdidas Técnicas/Comerciales" stroke="#10b981" strokeWidth={3} unit="%" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

// nrg-7
export const BlackoutReductionChart = () => {
  const data = [
    { year: '2024', blackoutHours: 450 },
    { year: '2025', blackoutHours: 320 },
    { year: '2026', blackoutHours: 180 },
    { year: '2027', blackoutHours: 80 },
    { year: '2028', blackoutHours: 20 },
  ];

  return (
    <div className="w-full h-72 mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="year" />
          <YAxis unit="h" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Area type="monotone" dataKey="blackoutHours" name="Horas de Apagón Promedio/Año" stroke="#6366f1" fill="#6366f1" fillOpacity={0.3} unit="h" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

// nrg-8
export const TariffInterferenceChart = () => {
  const data = [
    { year: '2024', realCost: 22, billedCost: 14 },
    { year: '2025', realCost: 21, billedCost: 16 },
    { year: '2026', realCost: 19, billedCost: 18 },
    { year: '2027', realCost: 17, billedCost: 17 },
    { year: '2028', realCost: 15, billedCost: 15 },
  ];

  return (
    <div className="w-full h-72 mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="year" />
          <YAxis unit="¢" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line type="monotone" dataKey="realCost" name="Costo Real de Generación (¢/kWh)" stroke="#ef4444" strokeWidth={3} unit="¢" />
          <Line type="monotone" dataKey="billedCost" name="Tarifa Facturada (¢/kWh)" stroke="#10b981" strokeWidth={3} unit="¢" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

// nrg-9
export const RenewableBureaucracyChart = () => {
  const data = [
    { year: '2024', permitTime: 24, projectsApproved: 5 },
    { year: '2025', permitTime: 12, projectsApproved: 12 },
    { year: '2026', permitTime: 6, projectsApproved: 25 },
    { year: '2027', permitTime: 3, projectsApproved: 40 },
    { year: '2028', permitTime: 1.5, projectsApproved: 60 },
  ];

  return (
    <div className="w-full h-72 mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="year" />
          <YAxis yAxisId="left" unit="m" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar yAxisId="right" dataKey="projectsApproved" name="Proyectos Aprobados" fill="#10b981" />
          <Line yAxisId="left" type="monotone" dataKey="permitTime" name="Tiempo de Permisología (Meses)" stroke="#ef4444" strokeWidth={3} unit="m" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

// nrg-10
export const DistributedGenerationChart = () => {
  const data = [
    { year: '2024', mw: 300 },
    { year: '2025', mw: 500 },
    { year: '2026', mw: 900 },
    { year: '2027', mw: 1500 },
    { year: '2028', mw: 2500 },
  ];

  return (
    <div className="w-full h-72 mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="year" />
          <YAxis unit="MW" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Area type="monotone" dataKey="mw" name="Capacidad Solar Distribuida (Techos)" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.4} unit=" MW" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

// nrg-11
export const PuntaCatalinaEmissionsChart = () => {
  const data = [
    { year: '2024', emissions: 100, efficiency: 35 },
    { year: '2025', emissions: 85, efficiency: 38 },
    { year: '2026', emissions: 60, efficiency: 42 },
    { year: '2027', emissions: 30, efficiency: 48 },
    { year: '2028', emissions: 10, efficiency: 55 },
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
          <Bar yAxisId="left" dataKey="emissions" name="Emisiones de Carbono (Índice Base 100)" fill="#4b5563" unit="%" />
          <Line yAxisId="right" type="monotone" dataKey="efficiency" name="Eficiencia Operativa" stroke="#10b981" strokeWidth={3} unit="%" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

// nrg-12
export const SmartMeterBillingChart = () => {
  const data = [
    { year: '2024', estimated: 45, smart: 15 },
    { year: '2025', estimated: 30, smart: 40 },
    { year: '2026', estimated: 15, smart: 70 },
    { year: '2027', estimated: 5, smart: 90 },
    { year: '2028', estimated: 1, smart: 99 },
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
          <Area type="monotone" dataKey="smart" name="Facturación por Medidor Inteligente" stackId="1" stroke="#3b82f6" fill="#3b82f6" unit="%" />
          <Area type="monotone" dataKey="estimated" name="Facturación Estimada" stackId="1" stroke="#ef4444" fill="#ef4444" unit="%" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

// nrg-13
export const EnergyEfficiencyStandardsChart = () => {
  const data = [
    { year: '2024', savedMW: 0 },
    { year: '2025', savedMW: 50 },
    { year: '2026', savedMW: 150 },
    { year: '2027', savedMW: 300 },
    { year: '2028', savedMW: 500 },
  ];

  return (
    <div className="w-full h-72 mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="year" />
          <YAxis unit="MW" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="savedMW" name="Ahorro por Eficiencia Energética (MW)" fill="#10b981" unit=" MW" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

// nrg-14
export const DemandForecastingAIChart = () => {
  const data = [
    { year: '2024', errorMargin: 12 },
    { year: '2025', errorMargin: 8 },
    { year: '2026', errorMargin: 4 },
    { year: '2027', errorMargin: 2 },
    { year: '2028', errorMargin: 0.5 },
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
          <Line type="monotone" dataKey="errorMargin" name="Margen de Error en Pronóstico" stroke="#8b5cf6" strokeWidth={3} unit="%" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

// nrg-15
export const UndergroundGridChart = () => {
  const data = [
    { year: '2024', underground: 5, recoveryTime: 14 },
    { year: '2025', underground: 15, recoveryTime: 10 },
    { year: '2026', underground: 30, recoveryTime: 5 },
    { year: '2027', underground: 50, recoveryTime: 2 },
    { year: '2028', underground: 75, recoveryTime: 0.5 },
  ];

  return (
    <div className="w-full h-72 mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="year" />
          <YAxis yAxisId="left" unit="%" />
          <YAxis yAxisId="right" orientation="right" unit="d" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar yAxisId="left" dataKey="underground" name="Red Soterrada (%)" fill="#3b82f6" unit="%" />
          <Line yAxisId="right" type="monotone" dataKey="recoveryTime" name="Tiempo de Recuperación Post-Huracán (Días)" stroke="#ef4444" strokeWidth={3} unit=" días" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

// nrg-16
export const LongTermEnergyStrategyChart = () => {
  const data = [
    { name: 'Solar', value: 40 },
    { name: 'Eólica', value: 25 },
    { name: 'Gas Natural (Transición)', value: 15 },
    { name: 'Hidroeléctrica', value: 10 },
    { name: 'Biomasa/Otros', value: 10 },
  ];

  return (
    <div className="w-full h-72 mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={5}
            dataKey="value"
            label={({ name, percent }: any) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

// nrg-17
export const EVChargingNetworkChart = () => {
  const data = [
    { year: '2024', chargers: 200 },
    { year: '2025', chargers: 800 },
    { year: '2026', chargers: 2500 },
    { year: '2027', chargers: 6000 },
    { year: '2028', chargers: 12000 },
  ];

  return (
    <div className="w-full h-72 mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Area type="monotone" dataKey="chargers" name="Estaciones de Carga Rápida" stroke="#10b981" fill="#10b981" fillOpacity={0.4} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

// nrg-18
export const PredictiveMaintenanceChart = () => {
  const data = [
    { year: '2024', unplannedOutages: 120, predictiveCoverage: 10 },
    { year: '2025', unplannedOutages: 85, predictiveCoverage: 35 },
    { year: '2026', unplannedOutages: 40, predictiveCoverage: 65 },
    { year: '2027', unplannedOutages: 15, predictiveCoverage: 85 },
    { year: '2028', unplannedOutages: 5, predictiveCoverage: 98 },
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
          <Bar yAxisId="left" dataKey="unplannedOutages" name="Paradas No Programadas" fill="#ef4444" />
          <Line yAxisId="right" type="monotone" dataKey="predictiveCoverage" name="Cobertura de Mantenimiento Predictivo (IA)" stroke="#3b82f6" strokeWidth={3} unit="%" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

// nrg-19
export const WholesaleEnergyMarketChart = () => {
  const data = [
    { year: '2024', marginalCost: 18, participants: 12 },
    { year: '2025', marginalCost: 15, participants: 25 },
    { year: '2026', marginalCost: 12, participants: 45 },
    { year: '2027', marginalCost: 9, participants: 75 },
    { year: '2028', marginalCost: 7, participants: 120 },
  ];

  return (
    <div className="w-full h-72 mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="year" />
          <YAxis yAxisId="left" unit="¢" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="marginalCost" name="Costo Marginal (¢/kWh)" stroke="#10b981" strokeWidth={3} unit="¢" />
          <Bar yAxisId="right" dataKey="participants" name="Participantes del Mercado" fill="#8b5cf6" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

// nrg-20
export const HydroelectricOptimizationChart = () => {
  const data = [
    { year: '2024', capacityFactor: 25 },
    { year: '2025', capacityFactor: 32 },
    { year: '2026', capacityFactor: 45 },
    { year: '2027', capacityFactor: 58 },
    { year: '2028', capacityFactor: 70 },
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
          <Area type="monotone" dataKey="capacityFactor" name="Factor de Capacidad Hidroeléctrica" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.4} unit="%" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

// nrg-21
export const EnergyTechWorkforceChart = () => {
  const data = [
    { year: '2024', technicians: 500 },
    { year: '2025', technicians: 1500 },
    { year: '2026', technicians: 3500 },
    { year: '2027', technicians: 6500 },
    { year: '2028', technicians: 10000 },
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
          <Bar dataKey="technicians" name="Técnicos Certificados en Energías Limpias" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
