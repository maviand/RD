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

// fin-4
export const PublicDebtChart = () => {
  const data = [
    { year: '2024', debtService: 22, infrastructureInvestment: 5 },
    { year: '2025', debtService: 18, infrastructureInvestment: 8 },
    { year: '2026', debtService: 14, infrastructureInvestment: 12 },
    { year: '2027', debtService: 10, infrastructureInvestment: 16 },
    { year: '2028', debtService: 5, infrastructureInvestment: 20 },
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
          <Bar yAxisId="left" dataKey="debtService" name="Servicio de Deuda (% Ingresos)" fill="#ef4444" unit="%" />
          <Line yAxisId="right" type="monotone" dataKey="infrastructureInvestment" name="Inversión en Infraestructura (% Ingresos)" stroke="#10b981" strokeWidth={3} unit="%" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

// fin-5
export const EResidencyChart = () => {
  const data = [
    { year: '2024', registrationTimeDays: 30, formalBusinesses: 1000 },
    { year: '2025', registrationTimeDays: 15, formalBusinesses: 3000 },
    { year: '2026', registrationTimeDays: 5, formalBusinesses: 6000 },
    { year: '2027', registrationTimeDays: 1, formalBusinesses: 10000 },
    { year: '2028', registrationTimeDays: 0.1, formalBusinesses: 15000 },
  ];

  return (
    <div className="w-full h-72 mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="year" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar yAxisId="left" dataKey="registrationTimeDays" name="Tiempo de Registro (Días)" fill="#f59e0b" />
          <Line yAxisId="right" type="monotone" dataKey="formalBusinesses" name="Nuevas Empresas Formales" stroke="#3b82f6" strokeWidth={3} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

// fin-6
export const CashFlowPredictiveChart = () => {
  const data = [
    { year: '2024', unforeseenDeficits: 80, predictionAccuracy: 20 },
    { year: '2025', unforeseenDeficits: 60, predictionAccuracy: 40 },
    { year: '2026', unforeseenDeficits: 40, predictionAccuracy: 65 },
    { year: '2027', unforeseenDeficits: 20, predictionAccuracy: 85 },
    { year: '2028', unforeseenDeficits: 5, predictionAccuracy: 95 },
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
          <Area type="monotone" dataKey="predictionAccuracy" name="Precisión de Pronóstico" stackId="1" stroke="#10b981" fill="#10b981" unit="%" />
          <Area type="monotone" dataKey="unforeseenDeficits" name="Déficits Imprevistos" stackId="1" stroke="#ef4444" fill="#ef4444" unit="%" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

// fin-7
export const TreasurySingleAccountChart = () => {
  const data = [
    { year: '2024', idleFunds: 90, centralizedFunds: 10 },
    { year: '2025', idleFunds: 60, centralizedFunds: 40 },
    { year: '2026', idleFunds: 30, centralizedFunds: 70 },
    { year: '2027', idleFunds: 10, centralizedFunds: 90 },
    { year: '2028', idleFunds: 2, centralizedFunds: 98 },
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
          <Bar dataKey="centralizedFunds" name="Fondos Centralizados (CUT)" stackId="a" fill="#3b82f6" unit="%" />
          <Bar dataKey="idleFunds" name="Fondos Inactivos Descentralizados" stackId="a" fill="#f59e0b" unit="%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

// fin-8
export const SovereignWealthFundChart = () => {
  const data = [
    { year: '2024', idleCash: 100, investmentReturns: 0 },
    { year: '2025', idleCash: 70, investmentReturns: 3 },
    { year: '2026', idleCash: 40, investmentReturns: 6 },
    { year: '2027', idleCash: 15, investmentReturns: 9 },
    { year: '2028', idleCash: 5, investmentReturns: 12 },
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
          <Bar yAxisId="left" dataKey="idleCash" name="Efectivo Ocioso" fill="#8b5cf6" unit="%" />
          <Line yAxisId="right" type="monotone" dataKey="investmentReturns" name="Rendimientos de Inversión" stroke="#10b981" strokeWidth={3} unit="%" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

// fin-9
export const StateFactoringChart = () => {
  const data = [
    { year: '2024', paymentDelaysDays: 120, factoringAdoption: 5 },
    { year: '2025', paymentDelaysDays: 90, factoringAdoption: 25 },
    { year: '2026', paymentDelaysDays: 60, factoringAdoption: 50 },
    { year: '2027', paymentDelaysDays: 30, factoringAdoption: 75 },
    { year: '2028', paymentDelaysDays: 15, factoringAdoption: 90 },
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
          <Bar yAxisId="left" dataKey="paymentDelaysDays" name="Retrasos en Pagos (Días)" fill="#ef4444" />
          <Line yAxisId="right" type="monotone" dataKey="factoringAdoption" name="Adopción de Factoring Estatal" stroke="#3b82f6" strokeWidth={3} unit="%" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

// fin-10
export const FiscalResponsibilityChart = () => {
  const data = [
    { year: '2024', operatingExpenseGrowth: 15, fiscalSustainability: 30 },
    { year: '2025', operatingExpenseGrowth: 10, fiscalSustainability: 45 },
    { year: '2026', operatingExpenseGrowth: 6, fiscalSustainability: 65 },
    { year: '2027', operatingExpenseGrowth: 3, fiscalSustainability: 85 },
    { year: '2028', operatingExpenseGrowth: 1, fiscalSustainability: 95 },
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
          <Line type="monotone" dataKey="fiscalSustainability" name="Índice de Sostenibilidad Fiscal" stroke="#10b981" strokeWidth={3} unit="%" />
          <Line type="monotone" dataKey="operatingExpenseGrowth" name="Crecimiento Gasto Operativo" stroke="#ef4444" strokeWidth={3} unit="%" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

// fin-11
export const PublicFinanceReformChart = () => {
  const data = [
    { year: '2024', outdatedProcesses: 80, modernFramework: 20 },
    { year: '2025', outdatedProcesses: 60, modernFramework: 40 },
    { year: '2026', outdatedProcesses: 40, modernFramework: 60 },
    { year: '2027', outdatedProcesses: 20, modernFramework: 80 },
    { year: '2028', outdatedProcesses: 5, modernFramework: 95 },
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
          <Area type="monotone" dataKey="modernFramework" name="Procesos Modernizados" stackId="1" stroke="#3b82f6" fill="#3b82f6" unit="%" />
          <Area type="monotone" dataKey="outdatedProcesses" name="Procesos Obsoletos" stackId="1" stroke="#f59e0b" fill="#f59e0b" unit="%" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

// fin-12
export const DigitalClearinghouseChart = () => {
  const data = [
    { year: '2024', approvalTimeDays: 45, digitalApprovals: 10 },
    { year: '2025', approvalTimeDays: 30, digitalApprovals: 35 },
    { year: '2026', approvalTimeDays: 15, digitalApprovals: 65 },
    { year: '2027', approvalTimeDays: 5, digitalApprovals: 85 },
    { year: '2028', approvalTimeDays: 1, digitalApprovals: 98 },
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
          <Bar yAxisId="left" dataKey="approvalTimeDays" name="Tiempo de Aprobación (Días)" fill="#ef4444" />
          <Line yAxisId="right" type="monotone" dataKey="digitalApprovals" name="Aprobaciones Digitales" stroke="#10b981" strokeWidth={3} unit="%" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

// fin-13
export const SIAFEComplianceChart = () => {
  const data = [
    { year: '2024', nonCompliance: 60, siafeAdoption: 40 },
    { year: '2025', nonCompliance: 40, siafeAdoption: 60 },
    { year: '2026', nonCompliance: 20, siafeAdoption: 80 },
    { year: '2027', nonCompliance: 5, siafeAdoption: 95 },
    { year: '2028', nonCompliance: 0, siafeAdoption: 100 },
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
          <Bar dataKey="siafeAdoption" name="Adopción de SIAFE" stackId="a" fill="#3b82f6" unit="%" />
          <Bar dataKey="nonCompliance" name="Incumplimiento" stackId="a" fill="#f59e0b" unit="%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

// fin-14
export const IntegratedAuditChart = () => {
  const data = [
    { year: '2024', manualAudits: 90, realTimeMonitoring: 10 },
    { year: '2025', manualAudits: 65, realTimeMonitoring: 35 },
    { year: '2026', manualAudits: 40, realTimeMonitoring: 60 },
    { year: '2027', manualAudits: 15, realTimeMonitoring: 85 },
    { year: '2028', manualAudits: 5, realTimeMonitoring: 95 },
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
          <Area type="monotone" dataKey="realTimeMonitoring" name="Monitoreo en Tiempo Real (API)" stackId="1" stroke="#10b981" fill="#10b981" unit="%" />
          <Area type="monotone" dataKey="manualAudits" name="Auditorías Manuales Retrasadas" stackId="1" stroke="#ef4444" fill="#ef4444" unit="%" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

// fin-15
export const TreasuryAcademyChart = () => {
  const data = [
    { year: '2024', untrainedStaff: 70, certifiedStaff: 30 },
    { year: '2025', untrainedStaff: 50, certifiedStaff: 50 },
    { year: '2026', untrainedStaff: 30, certifiedStaff: 70 },
    { year: '2027', untrainedStaff: 10, certifiedStaff: 90 },
    { year: '2028', untrainedStaff: 2, certifiedStaff: 98 },
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
          <Line type="monotone" dataKey="certifiedStaff" name="Personal Certificado" stroke="#3b82f6" strokeWidth={3} unit="%" />
          <Line type="monotone" dataKey="untrainedStaff" name="Brecha de Habilidades" stroke="#f59e0b" strokeWidth={3} unit="%" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

// fin-16
export const ZeroTrustSecurityChart = () => {
  const data = [
    { year: '2024', vulnerabilities: 100, zeroTrustAdoption: 10 },
    { year: '2025', vulnerabilities: 75, zeroTrustAdoption: 35 },
    { year: '2026', vulnerabilities: 45, zeroTrustAdoption: 60 },
    { year: '2027', vulnerabilities: 20, zeroTrustAdoption: 85 },
    { year: '2028', vulnerabilities: 5, zeroTrustAdoption: 98 },
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
          <Bar yAxisId="left" dataKey="vulnerabilities" name="Vulnerabilidades Críticas" fill="#ef4444" />
          <Line yAxisId="right" type="monotone" dataKey="zeroTrustAdoption" name="Adopción Zero-Trust" stroke="#10b981" strokeWidth={3} unit="%" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

// fin-17
export const SIGEFUniversalChart = () => {
  const data = [
    { year: '2024', fragmentedSystems: 80, sigefCoverage: 20 },
    { year: '2025', fragmentedSystems: 55, sigefCoverage: 45 },
    { year: '2026', fragmentedSystems: 30, sigefCoverage: 70 },
    { year: '2027', fragmentedSystems: 10, sigefCoverage: 90 },
    { year: '2028', fragmentedSystems: 2, sigefCoverage: 98 },
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
          <Area type="monotone" dataKey="sigefCoverage" name="Cobertura Universal SIGEF" stackId="1" stroke="#3b82f6" fill="#3b82f6" unit="%" />
          <Area type="monotone" dataKey="fragmentedSystems" name="Sistemas Fragmentados" stackId="1" stroke="#f59e0b" fill="#f59e0b" unit="%" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

// fin-18
export const SovereignCloudChart = () => {
  const data = [
    { year: '2024', legacyInfrastructure: 90, cloudMigration: 10 },
    { year: '2025', legacyInfrastructure: 65, cloudMigration: 35 },
    { year: '2026', legacyInfrastructure: 40, cloudMigration: 60 },
    { year: '2027', legacyInfrastructure: 15, cloudMigration: 85 },
    { year: '2028', legacyInfrastructure: 5, cloudMigration: 95 },
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
          <Bar dataKey="cloudMigration" name="Migración a Nube Soberana" stackId="a" fill="#8b5cf6" unit="%" />
          <Bar dataKey="legacyInfrastructure" name="Infraestructura Obsoleta" stackId="a" fill="#ef4444" unit="%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

// fin-19
export const OKRManagementChart = () => {
  const data = [
    { year: '2024', inefficiency: 75, okrAdoption: 25 },
    { year: '2025', inefficiency: 55, okrAdoption: 45 },
    { year: '2026', inefficiency: 35, okrAdoption: 65 },
    { year: '2027', inefficiency: 15, okrAdoption: 85 },
    { year: '2028', inefficiency: 5, okrAdoption: 95 },
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
          <Line type="monotone" dataKey="okrAdoption" name="Adopción de OKRs y Eficiencia" stroke="#10b981" strokeWidth={3} unit="%" />
          <Line type="monotone" dataKey="inefficiency" name="Ineficiencia Operativa" stroke="#ef4444" strokeWidth={3} unit="%" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

// fin-20
export const LocalCapitalMarketsChart = () => {
  const data = [
    { year: '2024', externalDebt: 80, localFinancing: 20 },
    { year: '2025', externalDebt: 65, localFinancing: 35 },
    { year: '2026', externalDebt: 50, localFinancing: 50 },
    { year: '2027', externalDebt: 35, localFinancing: 65 },
    { year: '2028', externalDebt: 20, localFinancing: 80 },
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
          <Area type="monotone" dataKey="localFinancing" name="Financiamiento Local" stackId="1" stroke="#3b82f6" fill="#3b82f6" unit="%" />
          <Area type="monotone" dataKey="externalDebt" name="Dependencia de Deuda Externa" stackId="1" stroke="#f59e0b" fill="#f59e0b" unit="%" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

// fin-21
export const CatastropheBondsChart = () => {
  const data = [
    { year: '2024', financialVulnerability: 90, contingencyFunds: 10 },
    { year: '2025', financialVulnerability: 70, contingencyFunds: 30 },
    { year: '2026', financialVulnerability: 45, contingencyFunds: 55 },
    { year: '2027', financialVulnerability: 20, contingencyFunds: 80 },
    { year: '2028', financialVulnerability: 5, contingencyFunds: 95 },
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
          <Bar yAxisId="left" dataKey="financialVulnerability" name="Vulnerabilidad Financiera" fill="#ef4444" unit="%" />
          <Line yAxisId="right" type="monotone" dataKey="contingencyFunds" name="Fondos de Contingencia (Bonos)" stroke="#10b981" strokeWidth={3} unit="%" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

// fin-22
export const CreditRatingChart = () => {
  const data = [
    { year: '2024', riskPerception: 80, transparencyIndex: 20 },
    { year: '2025', riskPerception: 60, transparencyIndex: 40 },
    { year: '2026', riskPerception: 40, transparencyIndex: 60 },
    { year: '2027', riskPerception: 20, transparencyIndex: 80 },
    { year: '2028', riskPerception: 10, transparencyIndex: 90 },
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
          <Line type="monotone" dataKey="transparencyIndex" name="Índice de Transparencia Fiscal" stroke="#3b82f6" strokeWidth={3} unit="%" />
          <Line type="monotone" dataKey="riskPerception" name="Percepción de Riesgo" stroke="#f59e0b" strokeWidth={3} unit="%" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

// fin-23
export const ActiveLiabilityManagementChart = () => {
  const data = [
    { year: '2024', volatilityExposure: 85, hedgingCoverage: 15 },
    { year: '2025', volatilityExposure: 65, hedgingCoverage: 35 },
    { year: '2026', volatilityExposure: 45, hedgingCoverage: 55 },
    { year: '2027', volatilityExposure: 25, hedgingCoverage: 75 },
    { year: '2028', volatilityExposure: 10, hedgingCoverage: 90 },
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
          <Area type="monotone" dataKey="hedgingCoverage" name="Cobertura contra Volatilidad" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" unit="%" />
          <Area type="monotone" dataKey="volatilityExposure" name="Exposición a Choques Globales" stackId="1" stroke="#ef4444" fill="#ef4444" unit="%" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
