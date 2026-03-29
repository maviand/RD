import React, { useState } from 'react';
import { AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell, PieChart, Pie } from 'recharts';

// tour-5: Erosión Costera
export function CoastalErosionChart() {
  const [intervention, setIntervention] = useState(50);
  const data = [
    { year: '2024', width: 30, projected: 30 },
    { year: '2025', width: 28, projected: 30 + (intervention * 0.1) },
    { year: '2026', width: 25, projected: 30 + (intervention * 0.25) },
    { year: '2027', width: 22, projected: 30 + (intervention * 0.4) },
    { year: '2028', width: 18, projected: 30 + (intervention * 0.6) },
  ];
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h4 className="text-lg font-bold text-gray-900 mb-4">Recuperación de Playas (Sand Motor)</h4>
      <div className="h-64 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="year" />
            <YAxis label={{ value: 'Ancho de Playa (m)', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="width" name="Sin Intervención" stroke="#ef4444" fill="#fee2e2" />
            <Area type="monotone" dataKey="projected" name="Con Ingeniería Holandesa" stroke="#3b82f6" fill="#dbeafe" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">Inversión en Sand Motor (Millones USD): {intervention}</label>
        <input type="range" min="0" max="100" value={intervention} onChange={(e) => setIntervention(Number(e.target.value))} className="w-full accent-blue-600" />
      </div>
    </div>
  );
}

// tour-6: Colapso de Servicios Básicos
export function TouristInfrastructureTaxChart() {
  const data = [
    { zone: 'Punta Cana', tax: 45, infra: 85 },
    { zone: 'Bávaro', tax: 35, infra: 75 },
    { zone: 'Puerto Plata', tax: 25, infra: 60 },
    { zone: 'Samaná', tax: 15, infra: 50 },
  ];
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h4 className="text-lg font-bold text-gray-900 mb-4">Reinversión de Impuestos por Distrito</h4>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="zone" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="tax" name="Recaudación (M USD)" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            <Bar dataKey="infra" name="Calidad Infraestructura (%)" fill="#10b981" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// tour-7: Monopolio Transporte
export function TransportDeregulationChart() {
  const data = [
    { month: 'M1', cost: 100, availability: 40 },
    { month: 'M3', cost: 85, availability: 60 },
    { month: 'M6', cost: 60, availability: 85 },
    { month: 'M9', cost: 45, availability: 95 },
    { month: 'M12', cost: 40, availability: 100 },
  ];
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h4 className="text-lg font-bold text-gray-900 mb-4">Impacto de la Desregulación del Transporte</h4>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="cost" name="Costo Promedio Traslado ($)" stroke="#ef4444" strokeWidth={3} />
            <Line yAxisId="right" type="monotone" dataKey="availability" name="Disponibilidad (%)" stroke="#10b981" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// tour-8: Identidad Cultural
export function CulturalTourismChart() {
  const data = [
    { name: 'Alojamiento', value: 40 },
    { name: 'Experiencias Culturales', value: 30 },
    { name: 'Gastronomía Local', value: 20 },
    { name: 'Artesanía', value: 10 },
  ];
  const COLORS = ['#3b82f6', '#8b5cf6', '#f59e0b', '#10b981'];
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h4 className="text-lg font-bold text-gray-900 mb-4">Distribución del Gasto Turístico (Modelo de Alto Valor)</h4>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
              {data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// tour-9: Conectividad
export function HighSpeedRailChart() {
  const data = [
    { route: 'Punta Cana - SD', current: 150, rail: 45 },
    { route: 'SD - Puerto Plata', current: 210, rail: 65 },
    { route: 'Punta Cana - Samaná', current: 240, rail: 75 },
  ];
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h4 className="text-lg font-bold text-gray-900 mb-4">Reducción de Tiempos de Viaje (Minutos)</h4>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ left: 40 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis type="number" />
            <YAxis dataKey="route" type="category" width={120} />
            <Tooltip />
            <Legend />
            <Bar dataKey="current" name="Autobús/Auto" fill="#9ca3af" radius={[0, 4, 4, 0]} />
            <Bar dataKey="rail" name="Tren Alta Velocidad" fill="#3b82f6" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// tour-10: Idioma
export function LanguageCertificationChart() {
  const [months, setMonths] = useState(12);
  const data = Array.from({ length: months }, (_, i) => ({
    month: `M${i + 1}`,
    certified: Math.min(100, i * 8),
    rating: 3.5 + (i * 0.12)
  }));
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h4 className="text-lg font-bold text-gray-900 mb-4">Certificación Lingüística IA vs Satisfacción</h4>
      <div className="h-64 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" />
            <YAxis yAxisId="left" domain={[0, 100]} />
            <YAxis yAxisId="right" orientation="right" domain={[3, 5]} />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="certified" name="% Personal Certificado" stroke="#3b82f6" strokeWidth={3} />
            <Line yAxisId="right" type="monotone" dataKey="rating" name="Calificación Servicio (1-5)" stroke="#f59e0b" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <input type="range" min="3" max="24" value={months} onChange={(e) => setMonths(Number(e.target.value))} className="w-full accent-blue-600" />
    </div>
  );
}

// tour-11: Capacidad Biológica
export function BioCapacityChart() {
  const data = [
    { month: 'Ene', visitors: 12000, limit: 10000 },
    { month: 'Feb', visitors: 11500, limit: 10000 },
    { month: 'Mar', visitors: 9000, limit: 10000 },
    { month: 'Abr', visitors: 8500, limit: 10000 },
    { month: 'May', visitors: 9500, limit: 10000 },
  ];
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h4 className="text-lg font-bold text-gray-900 mb-4">Control de Capacidad Biológica (Los Haitises)</h4>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="limit" name="Límite Biológico" stroke="#ef4444" fill="transparent" strokeDasharray="5 5" strokeWidth={2} />
            <Area type="monotone" dataKey="visitors" name="Visitantes Reales" stroke="#10b981" fill="#d1fae5" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// tour-12: Inseguridad Vial
export function VisionZeroTrafficChart() {
  const data = [
    { year: '2024', accidents: 450, cameras: 0 },
    { year: '2025', accidents: 380, cameras: 50 },
    { year: '2026', accidents: 250, cameras: 150 },
    { year: '2027', accidents: 120, cameras: 300 },
    { year: '2028', accidents: 40, cameras: 500 },
  ];
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h4 className="text-lg font-bold text-gray-900 mb-4">Vision Zero: Accidentes vs Sensores</h4>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="year" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="accidents" name="Accidentes Turistas" stroke="#ef4444" strokeWidth={3} />
            <Line yAxisId="right" type="stepAfter" dataKey="cameras" name="Cámaras/Sensores" stroke="#3b82f6" strokeWidth={2} strokeDasharray="4 4" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// tour-13: Turismo Sexual
export function ZeroToleranceTaskForceChart() {
  const data = [
    { region: 'Boca Chica', incidents2024: 120, incidents2026: 15 },
    { region: 'Sosúa', incidents2024: 95, incidents2026: 10 },
    { region: 'Punta Cana', incidents2024: 40, incidents2026: 5 },
  ];
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h4 className="text-lg font-bold text-gray-900 mb-4">Erradicación de Explotación (Unidades Especializadas)</h4>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="region" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="incidents2024" name="Casos Reportados (Antes)" fill="#ef4444" radius={[4, 4, 0, 0]} />
            <Bar dataKey="incidents2026" name="Casos Reportados (Después)" fill="#10b981" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// tour-14: Ecoturismo
export function EcoTourismFundChart() {
  const [funding, setFunding] = useState(20);
  const data = [
    { name: 'Constanza', trails: funding * 1.5, revenue: funding * 2.5 },
    { name: 'Jarabacoa', trails: funding * 2, revenue: funding * 3 },
    { name: 'Pedernales', trails: funding * 3, revenue: funding * 4 },
  ];
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h4 className="text-lg font-bold text-gray-900 mb-4">Fondo Soberano Verde: Senderos vs Ingresos</h4>
      <div className="h-64 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="trails" name="Km de Senderos" fill="#10b981" radius={[4, 4, 0, 0]} />
            <Bar yAxisId="right" dataKey="revenue" name="Ingresos (M USD)" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">Asignación del Fondo (M USD): {funding}</label>
        <input type="range" min="5" max="100" value={funding} onChange={(e) => setFunding(Number(e.target.value))} className="w-full accent-green-600" />
      </div>
    </div>
  );
}

// tour-15: Alquileres Corto Plazo
export function ShortTermRentalTaxChart() {
  const data = [
    { quarter: 'Q1', evasion: 40, recovered: 5 },
    { quarter: 'Q2', evasion: 25, recovered: 20 },
    { quarter: 'Q3', evasion: 10, recovered: 35 },
    { quarter: 'Q4', evasion: 2, recovered: 43 },
  ];
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h4 className="text-lg font-bold text-gray-900 mb-4">Retención Automática Airbnb/VRBO</h4>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="quarter" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="evasion" name="Evasión Fiscal (M USD)" stroke="#ef4444" fill="#fee2e2" />
            <Area type="monotone" dataKey="recovered" name="Impuestos Retenidos (M USD)" stroke="#3b82f6" fill="#dbeafe" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// tour-16: Vendedores Informales
export function VendorZoningChart() {
  const data = [
    { month: 'Ene', complaints: 150, licensed: 20 },
    { month: 'Mar', complaints: 90, licensed: 150 },
    { month: 'May', complaints: 40, licensed: 300 },
    { month: 'Jul', complaints: 10, licensed: 450 },
  ];
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h4 className="text-lg font-bold text-gray-900 mb-4">Zonificación y Licencias Digitales</h4>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="complaints" name="Quejas por Acoso" stroke="#ef4444" strokeWidth={3} />
            <Line yAxisId="right" type="monotone" dataKey="licensed" name="Vendedores Licenciados" stroke="#10b981" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// tour-17: Patrimonio Histórico
export function HeritageTrustChart() {
  const data = [
    { year: '2024', funding: 5, revenue: 12 },
    { year: '2025', funding: 15, revenue: 25 },
    { year: '2026', funding: 30, revenue: 55 },
    { year: '2027', funding: 45, revenue: 90 },
  ];
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h4 className="text-lg font-bold text-gray-900 mb-4">Fideicomiso Zona Colonial</h4>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="funding" name="Inversión Privada (M USD)" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
            <Bar dataKey="revenue" name="Ingresos Turísticos (M USD)" fill="#f59e0b" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// tour-18: Tasas Aeroportuarias
export function OpenSkiesAviationChart() {
  const [fees, setFees] = useState(80);
  const routes = Math.floor((100 - fees) * 0.8);
  const data = [
    { name: 'Norteamérica', routes: 15 + (routes * 0.2) },
    { name: 'Europa', routes: 10 + (routes * 0.3) },
    { name: 'Medio Oriente', routes: 2 + (routes * 0.4) },
    { name: 'Asia', routes: 0 + (routes * 0.1) },
  ];
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h4 className="text-lg font-bold text-gray-900 mb-4">Impacto Cielos Abiertos y Reducción de Tasas</h4>
      <div className="h-64 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="routes" name="Nuevas Rutas Directas" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">Tasa Aeroportuaria Promedio ($): {fees}</label>
        <input type="range" min="20" max="100" value={fees} onChange={(e) => setFees(Number(e.target.value))} className="w-full accent-blue-600" />
      </div>
    </div>
  );
}

// tour-19: Procesamiento Migratorio
export function BiometricEGatesChart() {
  const data = [
    { type: 'Manual (Actual)', time: 45, cost: 12 },
    { type: 'E-Gates (Fase 1)', time: 15, cost: 5 },
    { type: 'Biometría Total', time: 3, cost: 1 },
  ];
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h4 className="text-lg font-bold text-gray-900 mb-4">Eficiencia Migratoria (E-Gates)</h4>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ left: 40 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis type="number" />
            <YAxis dataKey="type" type="category" width={100} />
            <Tooltip />
            <Legend />
            <Bar dataKey="time" name="Tiempo de Espera (Min)" fill="#ef4444" radius={[0, 4, 4, 0]} />
            <Bar dataKey="cost" name="Costo Operativo por Pasajero ($)" fill="#10b981" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// tour-20: Comunicación de Crisis
export function CrisisCommunicationChart() {
  const data = [
    { day: 'Día 1', sentimentOld: -80, sentimentNew: -40 },
    { day: 'Día 3', sentimentOld: -85, sentimentNew: -10 },
    { day: 'Día 7', sentimentOld: -70, sentimentNew: 20 },
    { day: 'Día 14', sentimentOld: -50, sentimentNew: 60 },
    { day: 'Día 30', sentimentOld: -20, sentimentNew: 85 },
  ];
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h4 className="text-lg font-bold text-gray-900 mb-4">Recuperación de Sentimiento Público post-Crisis</h4>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="day" />
            <YAxis domain={[-100, 100]} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sentimentOld" name="Modelo Anterior (Lento)" stroke="#ef4444" strokeWidth={3} strokeDasharray="5 5" />
            <Line type="monotone" dataKey="sentimentNew" name="Panel Transparencia + PR" stroke="#10b981" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
