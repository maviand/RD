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

// agr-4
export const AgriBolsaChart = () => {
  const data = [
    { year: '2024', margins: 80, directSales: 10 },
    { year: '2025', margins: 60, directSales: 30 },
    { year: '2026', margins: 40, directSales: 55 },
    { year: '2027', margins: 25, directSales: 75 },
    { year: '2028', margins: 15, directSales: 90 },
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
          <Bar yAxisId="left" dataKey="margins" name="Márgenes de Intermediarios" fill="#ef4444" unit="%" />
          <Line yAxisId="right" type="monotone" dataKey="directSales" name="Ventas Directas (Agri-Bolsa)" stroke="#10b981" strokeWidth={3} unit="%" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

// agr-5
export const ClimateResilienceChart = () => {
  const data = [
    { year: '2024', losses: 40, greenhouses: 5 },
    { year: '2025', losses: 35, greenhouses: 15 },
    { year: '2026', losses: 25, greenhouses: 30 },
    { year: '2027', losses: 15, greenhouses: 50 },
    { year: '2028', losses: 5, greenhouses: 75 },
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
          <Area type="monotone" dataKey="greenhouses" name="Adopción de Invernaderos Inteligentes" stackId="1" stroke="#3b82f6" fill="#3b82f6" unit="%" />
          <Area type="monotone" dataKey="losses" name="Pérdidas por Clima/Plagas" stackId="1" stroke="#ef4444" fill="#ef4444" unit="%" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

// agr-6
export const ColdChainChart = () => {
  const data = [
    { year: '2024', postHarvestLoss: 30, coldStorage: 10 },
    { year: '2025', postHarvestLoss: 25, coldStorage: 30 },
    { year: '2026', postHarvestLoss: 18, coldStorage: 55 },
    { year: '2027', postHarvestLoss: 10, coldStorage: 80 },
    { year: '2028', postHarvestLoss: 5, coldStorage: 95 },
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
          <Bar yAxisId="left" dataKey="postHarvestLoss" name="Pérdidas Postcosecha" fill="#f59e0b" unit="%" />
          <Line yAxisId="right" type="monotone" dataKey="coldStorage" name="Capacidad de Cadena de Frío Solar" stroke="#3b82f6" strokeWidth={3} unit="%" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

// agr-7
export const AIMicroloansChart = () => {
  const data = [
    { year: '2024', informalLoans: 85, formalCredit: 15 },
    { year: '2025', informalLoans: 65, formalCredit: 35 },
    { year: '2026', informalLoans: 45, formalCredit: 55 },
    { year: '2027', informalLoans: 25, formalCredit: 75 },
    { year: '2028', informalLoans: 10, formalCredit: 90 },
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
          <Area type="monotone" dataKey="formalCredit" name="Crédito Formal (Micropréstamos IA)" stackId="1" stroke="#10b981" fill="#10b981" unit="%" />
          <Area type="monotone" dataKey="informalLoans" name="Préstamos Informales (Usura)" stackId="1" stroke="#ef4444" fill="#ef4444" unit="%" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

// agr-8
export const BiosecurityDronesChart = () => {
  const data = [
    { year: '2024', exportBans: 12, droneCoverage: 5 },
    { year: '2025', exportBans: 8, droneCoverage: 25 },
    { year: '2026', exportBans: 5, droneCoverage: 50 },
    { year: '2027', exportBans: 2, droneCoverage: 75 },
    { year: '2028', exportBans: 0, droneCoverage: 95 },
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
          <Bar yAxisId="left" dataKey="exportBans" name="Prohibiciones de Exportación (Incidentes)" fill="#ef4444" />
          <Line yAxisId="right" type="monotone" dataKey="droneCoverage" name="Cobertura de Drones de Bioseguridad" stroke="#8b5cf6" strokeWidth={3} unit="%" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

// agr-9
export const RuralRoadsChart = () => {
  const data = [
    { year: '2024', impassableRoads: 60, pavedRoads: 40 },
    { year: '2025', impassableRoads: 45, pavedRoads: 55 },
    { year: '2026', impassableRoads: 30, pavedRoads: 70 },
    { year: '2027', impassableRoads: 15, pavedRoads: 85 },
    { year: '2028', impassableRoads: 5, pavedRoads: 95 },
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
          <Bar dataKey="pavedRoads" name="Caminos Vecinales Transitables" stackId="a" fill="#3b82f6" unit="%" />
          <Bar dataKey="impassableRoads" name="Caminos Intransitables" stackId="a" fill="#f59e0b" unit="%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

// agr-10
export const YouthAgriTechChart = () => {
  const data = [
    { year: '2024', agingFarmers: 80, youthEntrepreneurs: 5 },
    { year: '2025', agingFarmers: 75, youthEntrepreneurs: 15 },
    { year: '2026', agingFarmers: 65, youthEntrepreneurs: 30 },
    { year: '2027', agingFarmers: 50, youthEntrepreneurs: 50 },
    { year: '2028', agingFarmers: 35, youthEntrepreneurs: 70 },
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
          <Line type="monotone" dataKey="youthEntrepreneurs" name="Jóvenes Emprendedores Agrotech" stroke="#10b981" strokeWidth={3} unit="%" />
          <Line type="monotone" dataKey="agingFarmers" name="Agricultores Mayores de 60 años" stroke="#ef4444" strokeWidth={3} unit="%" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

// agr-11
export const ParametricInsuranceChart = () => {
  const data = [
    { year: '2024', uninsuredLosses: 90, insuredCoverage: 10 },
    { year: '2025', uninsuredLosses: 70, insuredCoverage: 30 },
    { year: '2026', uninsuredLosses: 45, insuredCoverage: 55 },
    { year: '2027', uninsuredLosses: 25, insuredCoverage: 75 },
    { year: '2028', uninsuredLosses: 5, insuredCoverage: 95 },
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
          <Area type="monotone" dataKey="insuredCoverage" name="Cobertura de Seguro Paramétrico" stackId="1" stroke="#3b82f6" fill="#3b82f6" unit="%" />
          <Area type="monotone" dataKey="uninsuredLosses" name="Pérdidas No Aseguradas" stackId="1" stroke="#ef4444" fill="#ef4444" unit="%" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

// agr-12
export const RegenerativeAgricultureChart = () => {
  const data = [
    { year: '2024', soilDegradation: 70, regenerativeAdoption: 5 },
    { year: '2025', soilDegradation: 60, regenerativeAdoption: 20 },
    { year: '2026', soilDegradation: 45, regenerativeAdoption: 45 },
    { year: '2027', soilDegradation: 30, regenerativeAdoption: 70 },
    { year: '2028', soilDegradation: 15, regenerativeAdoption: 90 },
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
          <Bar yAxisId="left" dataKey="soilDegradation" name="Degradación del Suelo" fill="#8b5cf6" unit="%" />
          <Line yAxisId="right" type="monotone" dataKey="regenerativeAdoption" name="Adopción de Agricultura Regenerativa" stroke="#10b981" strokeWidth={3} unit="%" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

// agr-13
export const OrganicFertilizerChart = () => {
  const data = [
    { year: '2024', importedChemicals: 90, organicLocal: 10 },
    { year: '2025', importedChemicals: 75, organicLocal: 25 },
    { year: '2026', importedChemicals: 55, organicLocal: 45 },
    { year: '2027', importedChemicals: 35, organicLocal: 65 },
    { year: '2028', importedChemicals: 15, organicLocal: 85 },
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
          <Area type="monotone" dataKey="organicLocal" name="Uso de Fertilizantes Orgánicos Nacionales" stackId="1" stroke="#10b981" fill="#10b981" unit="%" />
          <Area type="monotone" dataKey="importedChemicals" name="Uso de Agroquímicos Importados" stackId="1" stroke="#ef4444" fill="#ef4444" unit="%" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

// agr-14
export const AIAgronomistChart = () => {
  const data = [
    { year: '2024', extensionCoverage: 15, aiAdoption: 5 },
    { year: '2025', extensionCoverage: 30, aiAdoption: 25 },
    { year: '2026', extensionCoverage: 55, aiAdoption: 50 },
    { year: '2027', extensionCoverage: 80, aiAdoption: 75 },
    { year: '2028', extensionCoverage: 98, aiAdoption: 95 },
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
          <Bar yAxisId="left" dataKey="extensionCoverage" name="Cobertura de Asistencia Técnica" fill="#3b82f6" unit="%" />
          <Line yAxisId="right" type="monotone" dataKey="aiAdoption" name="Adopción de Agrónomo IA Offline" stroke="#f59e0b" strokeWidth={3} unit="%" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

// agr-15
export const ValueAddedExportChart = () => {
  const data = [
    { year: '2024', rawExports: 85, processedExports: 15 },
    { year: '2025', rawExports: 70, processedExports: 30 },
    { year: '2026', rawExports: 50, processedExports: 50 },
    { year: '2027', rawExports: 30, processedExports: 70 },
    { year: '2028', rawExports: 15, processedExports: 85 },
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
          <Bar dataKey="processedExports" name="Exportaciones con Valor Agregado" stackId="a" fill="#8b5cf6" unit="%" />
          <Bar dataKey="rawExports" name="Exportaciones de Materias Primas" stackId="a" fill="#ef4444" unit="%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

// agr-16
export const CRISPRBiodefenseChart = () => {
  const data = [
    { year: '2024', outbreaks: 15, responseTime: 30 },
    { year: '2025', outbreaks: 10, responseTime: 15 },
    { year: '2026', outbreaks: 5, responseTime: 7 },
    { year: '2027', outbreaks: 2, responseTime: 3 },
    { year: '2028', outbreaks: 0, responseTime: 1 },
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
          <Bar yAxisId="left" dataKey="outbreaks" name="Brotes de Enfermedades Invasivas" fill="#ef4444" />
          <Line yAxisId="right" type="monotone" dataKey="responseTime" name="Tiempo de Respuesta (Días)" stroke="#10b981" strokeWidth={3} unit=" días" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

// agr-17
export const LocalSeedChart = () => {
  const data = [
    { year: '2024', importedSeeds: 90, localSeeds: 10 },
    { year: '2025', importedSeeds: 75, localSeeds: 25 },
    { year: '2026', importedSeeds: 50, localSeeds: 50 },
    { year: '2027', importedSeeds: 25, localSeeds: 75 },
    { year: '2028', importedSeeds: 10, localSeeds: 90 },
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
          <Area type="monotone" dataKey="localSeeds" name="Uso de Semillas Locales Resilientes" stackId="1" stroke="#3b82f6" fill="#3b82f6" unit="%" />
          <Area type="monotone" dataKey="importedSeeds" name="Dependencia de Semillas Importadas" stackId="1" stroke="#f59e0b" fill="#f59e0b" unit="%" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

// agr-18
export const BiometricTradeChart = () => {
  const data = [
    { year: '2024', informalTrade: 70, regulatedTrade: 30 },
    { year: '2025', informalTrade: 55, regulatedTrade: 45 },
    { year: '2026', informalTrade: 35, regulatedTrade: 65 },
    { year: '2027', informalTrade: 15, regulatedTrade: 85 },
    { year: '2028', informalTrade: 5, regulatedTrade: 95 },
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
          <Bar dataKey="regulatedTrade" name="Comercio Transfronterizo Regulado" stackId="a" fill="#10b981" unit="%" />
          <Bar dataKey="informalTrade" name="Contrabando Informal" stackId="a" fill="#ef4444" unit="%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

// agr-19
export const LivestockTrackingChart = () => {
  const data = [
    { year: '2024', theftIncidents: 1000, rfidAdoption: 10 },
    { year: '2025', theftIncidents: 750, rfidAdoption: 35 },
    { year: '2026', theftIncidents: 400, rfidAdoption: 65 },
    { year: '2027', theftIncidents: 150, rfidAdoption: 85 },
    { year: '2028', theftIncidents: 50, rfidAdoption: 98 },
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
          <Bar yAxisId="left" dataKey="theftIncidents" name="Incidentes de Cuatrereísmo" fill="#f59e0b" />
          <Line yAxisId="right" type="monotone" dataKey="rfidAdoption" name="Adopción de Trazabilidad RFID" stroke="#3b82f6" strokeWidth={3} unit="%" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

// agr-20
export const EquipmentSubsidyChart = () => {
  const data = [
    { year: '2024', priceSubsidies: 80, equipmentGrants: 20 },
    { year: '2025', priceSubsidies: 60, equipmentGrants: 40 },
    { year: '2026', priceSubsidies: 40, equipmentGrants: 60 },
    { year: '2027', priceSubsidies: 20, equipmentGrants: 80 },
    { year: '2028', priceSubsidies: 5, equipmentGrants: 95 },
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
          <Area type="monotone" dataKey="equipmentGrants" name="Subvenciones para Equipamiento" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" unit="%" />
          <Area type="monotone" dataKey="priceSubsidies" name="Subsidios de Precios Ineficientes" stackId="1" stroke="#ef4444" fill="#ef4444" unit="%" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

// agr-21
export const IoTSensorsChart = () => {
  const data = [
    { year: '2024', dataAvailability: 10, yieldOptimization: 5 },
    { year: '2025', dataAvailability: 35, yieldOptimization: 20 },
    { year: '2026', dataAvailability: 65, yieldOptimization: 45 },
    { year: '2027', dataAvailability: 85, yieldOptimization: 70 },
    { year: '2028', dataAvailability: 98, yieldOptimization: 90 },
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
          <Line type="monotone" dataKey="dataAvailability" name="Disponibilidad de Datos Localizados" stroke="#3b82f6" strokeWidth={3} unit="%" />
          <Line type="monotone" dataKey="yieldOptimization" name="Optimización de Rendimiento" stroke="#10b981" strokeWidth={3} unit="%" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

// agr-22
export const SatelliteDeforestationChart = () => {
  const data = [
    { year: '2024', deforestationRate: 100, satelliteMonitoring: 10 },
    { year: '2025', deforestationRate: 80, satelliteMonitoring: 40 },
    { year: '2026', deforestationRate: 50, satelliteMonitoring: 75 },
    { year: '2027', deforestationRate: 25, satelliteMonitoring: 90 },
    { year: '2028', deforestationRate: 10, satelliteMonitoring: 98 },
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
          <Bar yAxisId="left" dataKey="deforestationRate" name="Tasa de Deforestación (Índice)" fill="#ef4444" unit="%" />
          <Line yAxisId="right" type="monotone" dataKey="satelliteMonitoring" name="Cobertura de Monitoreo Satelital" stroke="#10b981" strokeWidth={3} unit="%" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};
