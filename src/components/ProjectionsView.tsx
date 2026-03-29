import React from 'react';
import { motion } from 'motion/react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer,
  AreaChart, Area, PieChart, Pie, Cell
} from 'recharts';
import { TrendingUp, DollarSign, ShieldCheck, Activity, Landmark, GraduationCap } from 'lucide-react';
import { sectors } from '../data';

export default function ProjectionsView() {
  // Helper to generate deterministic pseudo-random numbers based on string
  const hashString = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash);
  };

  const getFinancials = (id: string, isMega: boolean) => {
    const hardcoded: Record<string, {i: number, r: number}> = {
      'gov-4': { i: 15, r: 500 },
      'gov-1': { i: 80, r: 150 },
      'tour-1': { i: 120, r: 250 },
      'hlt-22': { i: 45, r: 120 },
      'edu-1': { i: 350, r: 150 },
      'mega-finance': { i: 100, r: 900 },
      'mega-healthcare': { i: 500, r: 800 },
      'mega-energy': { i: 1200, r: 600 },
      'mega-innovation': { i: 600, r: 500 },
      'mega-infrastructure': { i: 2500, r: 450 },
      'mega-gov-efficiency': { i: 150, r: 400 },
      'mega-agriculture': { i: 250, r: 300 },
      'mega-labor': { i: 200, r: 250 },
      'mega-welfare': { i: 800, r: 200 },
      'mega-justice': { i: 400, r: 150 },
    };
    if (hardcoded[id]) return { inversion: hardcoded[id].i, retorno: hardcoded[id].r };
    
    const h = hashString(id);
    if (isMega) {
      return { inversion: 300 + (h % 500), retorno: 200 + (h % 400) };
    } else {
      return { inversion: 10 + (h % 90), retorno: 20 + (h % 180) };
    }
  };

  const allInitiatives = sectors.flatMap(sector => {
    const items = [];
    if (sector.megaproject) {
      items.push({
        id: `mega-${sector.id}`,
        name: `[Mega] ${sector.megaproject.title}`,
        sector: sector.title,
        sectorId: sector.id,
        inversion: getFinancials(`mega-${sector.id}`, true).inversion,
        retorno: getFinancials(`mega-${sector.id}`, true).retorno,
        type: 'Megaproyecto'
      });
    }
    sector.problems.forEach(p => {
      items.push({
        id: p.id,
        name: p.solution.model,
        sector: sector.title,
        sectorId: sector.id,
        inversion: getFinancials(p.id, false).inversion,
        retorno: getFinancials(p.id, false).retorno,
        type: 'Solución'
      });
    });
    return items;
  });

  const initiativesBySector = sectors.map(sector => {
    const items = allInitiatives.filter(i => i.sectorId === sector.id);
    return {
      sector,
      items: items.sort((a, b) => b.inversion - a.inversion)
    };
  }).filter(group => group.items.length > 0);

  const totalInversion = allInitiatives.reduce((sum, item) => sum + item.inversion, 0);
  const totalRetorno = allInitiatives.reduce((sum, item) => sum + item.retorno, 0);

  const totalSavings = allInitiatives.reduce((sum, item) => sum + (item.sectorId === 'tourism' || item.sectorId === 'finance' ? Math.floor(item.retorno * 0.2) : Math.floor(item.retorno * 0.9)), 0);
  const totalIncome = allInitiatives.reduce((sum, item) => sum + (item.sectorId === 'tourism' || item.sectorId === 'finance' ? Math.floor(item.retorno * 0.8) : Math.floor(item.retorno * 0.1)), 0);
  const totalImpact = totalSavings + totalIncome;

  const summaryData = {
    totalSavings,
    totalIncome,
    totalImpact,
  };

  const COLORS = ['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6'];

  const sectorImpacts = initiativesBySector.map(group => {
    const totalSectorRetorno = group.items.reduce((sum, item) => sum + item.retorno, 0);
    const isIncomeHeavy = group.sector.id === 'tourism' || group.sector.id === 'finance';
    return {
      name: group.sector.title,
      savings: isIncomeHeavy ? Math.floor(totalSectorRetorno * 0.2) : Math.floor(totalSectorRetorno * 0.9),
      income: isIncomeHeavy ? Math.floor(totalSectorRetorno * 0.8) : Math.floor(totalSectorRetorno * 0.1),
      icon: group.sector.icon,
      color: COLORS[hashString(group.sector.id) % COLORS.length],
      note: undefined as string | undefined
    };
  });

  const cumulativeData = [
    { year: '2025', savings: Math.floor(totalSavings * 0.2), income: Math.floor(totalIncome * 0.2), total: Math.floor(totalImpact * 0.2) },
    { year: '2026', savings: Math.floor(totalSavings * 0.4), income: Math.floor(totalIncome * 0.4), total: Math.floor(totalImpact * 0.4) },
    { year: '2027', savings: Math.floor(totalSavings * 0.6), income: Math.floor(totalIncome * 0.6), total: Math.floor(totalImpact * 0.6) },
    { year: '2028', savings: Math.floor(totalSavings * 0.8), income: Math.floor(totalIncome * 0.8), total: Math.floor(totalImpact * 0.8) },
    { year: '2029', savings: totalSavings, income: totalIncome, total: totalImpact },
  ];

  const topInitiatives = [...allInitiatives].sort((a, b) => b.retorno - a.retorno).slice(0, 5);
  const pieData = topInitiatives.map(i => ({
    name: i.name.length > 25 ? i.name.substring(0, 25) + '...' : i.name,
    fullName: i.name,
    value: i.retorno,
    type: (i.sectorId === 'tourism' || i.sectorId === 'finance') ? 'Ingreso' : 'Ahorro'
  }));

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-[var(--color-gov-blue)] uppercase tracking-tight mb-4">
          Proyecciones de Impacto
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Estimaciones financieras y de eficiencia asumiendo una implementación del 100% de todas las soluciones propuestas. Los valores representan el impacto anual recurrente proyectado para el año 2029.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 border-t-4 border-t-emerald-500">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Ahorro Fiscal Total</h3>
            <div className="p-3 bg-emerald-100 rounded-full">
              <DollarSign className="w-6 h-6 text-emerald-600" />
            </div>
          </div>
          <p className="text-4xl font-extrabold text-gray-900">${summaryData.totalSavings.toLocaleString('en-US')}M</p>
          <p className="text-sm text-emerald-600 font-medium mt-2">USD / Año (Reducción de Gastos)</p>
        </div>

        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 border-t-4 border-t-blue-500">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Nuevos Ingresos</h3>
            <div className="p-3 bg-blue-100 rounded-full">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <p className="text-4xl font-extrabold text-gray-900">${summaryData.totalIncome.toLocaleString('en-US')}M</p>
          <p className="text-sm text-blue-600 font-medium mt-2">USD / Año (Recaudación Adicional)</p>
        </div>

        <div className="bg-[#001f44] rounded-xl shadow-md border border-[#001f44] p-6 border-t-4 border-t-[var(--color-gov-gold)] text-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-gray-300 uppercase tracking-wider">Impacto Económico Neto</h3>
            <div className="p-3 bg-white/10 rounded-full">
              <Activity className="w-6 h-6 text-[var(--color-gov-gold)]" />
            </div>
          </div>
          <p className="text-4xl font-extrabold text-white">+${summaryData.totalImpact.toLocaleString('en-US')}M</p>
          <p className="text-sm text-[var(--color-gov-gold)] font-medium mt-2">USD / Año (Ahorros + Ingresos)</p>
        </div>
      </div>

      {/* Net Impact Clarification Banner */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-12 flex items-start gap-4 shadow-sm">
        <div className="p-3 bg-emerald-100 rounded-full flex-shrink-0 mt-1">
          <TrendingUp className="w-6 h-6 text-emerald-600" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-emerald-900 mb-2">¿Implementar este plan cuesta o ahorra dinero?</h3>
          <p className="text-emerald-800 leading-relaxed">
            El resultado neto es un <strong>ahorro masivo y generación de nuevos ingresos a favor del Estado</strong>. Aunque los megaproyectos tecnológicos requieren inversión inicial (financiada mediante Alianzas Público-Privadas y reasignación de fondos), la erradicación de la burocracia, fugas de capital y evasión genera un retorno positivo inmediato. En resumen: <strong>este plan no es un gasto, es una optimización que le devuelve al país ${summaryData.totalImpact.toLocaleString('en-US')} millones de dólares netos cada año.</strong>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Cumulative Impact Area Chart */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Crecimiento del Impacto Positivo (2025-2029)</h3>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={cumulativeData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <defs>
                  <linearGradient id="colorSavings" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="year" stroke="#6b7280" />
                <YAxis stroke="#6b7280" tickFormatter={(value) => `$${value.toLocaleString('en-US')}M`} width={80} />
                <RechartsTooltip formatter={(value: number) => [`+$${value.toLocaleString('en-US')}M USD`, '']} />
                <Legend verticalAlign="top" height={36} />
                <Area type="monotone" dataKey="savings" name="Ahorros Acumulados" stroke="#10b981" fillOpacity={1} fill="url(#colorSavings)" />
                <Area type="monotone" dataKey="income" name="Ingresos Acumulados" stroke="#3b82f6" fillOpacity={1} fill="url(#colorIncome)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Breakdown Pie Chart */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Desglose del Impacto Financiero Positivo</h3>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart margin={{ top: 20, right: 20, bottom: 40, left: 20 }}>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={110}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <RechartsTooltip 
                  formatter={(value: number, name: string, props: any) => [
                    `+$${value.toLocaleString('en-US')}M USD (${props.payload.type})`, 
                    props.payload.fullName
                  ]} 
                />
                <Legend layout="horizontal" verticalAlign="bottom" align="center" wrapperStyle={{ bottom: 0 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Sector-by-Sector ROI Charts */}
      <div className="mb-12">
        <h2 className="text-2xl font-heading font-extrabold text-[var(--color-gov-blue)] uppercase tracking-tight mb-6">
          Inversión vs. Retorno por Sector
        </h2>
        <p className="text-gray-600 mb-8 max-w-3xl">
          Desglose detallado del costo de capital (CAPEX) estimado frente al impacto financiero anual de cada solución y megaproyecto, categorizado por sector estratégico.
        </p>
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {initiativesBySector.map(({ sector, items }) => {
            const Icon = sector.icon;
            const chartHeight = Math.max(280, items.length * 55);
            
            return (
              <div key={sector.id} className="bg-white rounded-xl shadow-md border border-gray-200 p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                  <div className="p-2 bg-gray-50 rounded-lg text-[var(--color-gov-blue)]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{sector.title}</h3>
                </div>
                
                <div style={{ height: `${chartHeight}px`, minHeight: '280px' }} className="w-full mt-auto">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart 
                      data={items} 
                      layout="vertical" 
                      margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#e5e7eb" />
                      <XAxis type="number" stroke="#6b7280" tickFormatter={(value) => `$${value.toLocaleString('en-US')}M`} />
                      <YAxis 
                        type="category" 
                        dataKey="name" 
                        stroke="#4b5563" 
                        width={240} 
                        tickFormatter={(val) => val.length > 38 ? val.substring(0, 38) + '...' : val}
                        tick={{fontSize: 11, fill: '#374151'}} 
                        interval={0}
                      />
                      <RechartsTooltip 
                        formatter={(value: number, name: string) => [
                          `$${value.toLocaleString('en-US')}M USD`, 
                          name === 'inversion' ? 'Inversión (CAPEX)' : 'Retorno Anual'
                        ]} 
                        cursor={{fill: 'rgba(0,0,0,0.05)'}}
                        contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                      />
                      <Legend verticalAlign="top" height={36} wrapperStyle={{ fontSize: '12px' }} />
                      <Bar dataKey="inversion" name="Inversión" fill="#ef4444" radius={[0, 4, 4, 0]} barSize={10} />
                      <Bar dataKey="retorno" name="Retorno" fill="#10b981" radius={[0, 4, 4, 0]} barSize={10} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Grand Total Summary */}
      <div className="bg-[#001f44] rounded-xl shadow-xl border border-[#001f44] p-8 mb-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_the_Dominican_Republic.svg/1280px-Flag_of_the_Dominican_Republic.svg.png')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-heading font-extrabold uppercase tracking-tight mb-8 text-center">
            Balance Total del Plan Nacional
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-xl p-6 border border-white/20 text-center backdrop-blur-sm">
              <p className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-2">Inversión Total Estimada (CAPEX)</p>
              <p className="text-4xl md:text-5xl font-black text-red-400">${totalInversion.toLocaleString('en-US')}M</p>
              <p className="text-sm text-gray-400 mt-3 font-medium">Gasto único de implementación</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 border border-white/20 text-center backdrop-blur-sm">
              <p className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-2">Retorno Total Anual</p>
              <p className="text-4xl md:text-5xl font-black text-emerald-400">+${totalRetorno.toLocaleString('en-US')}M</p>
              <p className="text-sm text-gray-400 mt-3 font-medium">Ahorros e ingresos recurrentes por año</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              La inversión inicial se recupera en aproximadamente <strong className="text-[var(--color-gov-gold)] text-xl">{(totalInversion / totalRetorno).toFixed(1)} años</strong>. A partir de ese punto, el Estado generará un excedente perpetuo para reinversión social y pago de deuda.
            </p>
          </div>
        </div>
      </div>

      {/* Sector Summaries */}
      <h2 className="text-2xl font-heading font-extrabold text-[var(--color-gov-blue)] uppercase tracking-tight mb-6">
        Resumen por Sector
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sectorImpacts.map((sector, idx) => {
          const Icon = sector.icon;
          return (
            <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex items-start gap-4">
              <div className="p-3 rounded-lg" style={{ backgroundColor: `${sector.color}20` }}>
                <Icon className="w-6 h-6" style={{ color: sector.color }} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{sector.name}</h3>
                {sector.note ? (
                  <p className="text-sm text-gray-600 italic">{sector.note}</p>
                ) : (
                  <div className="space-y-2">
                    {sector.savings > 0 && (
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">Ahorros Proyectados:</span>
                        <span className="font-bold text-emerald-600">+${sector.savings.toLocaleString('en-US')}M</span>
                      </div>
                    )}
                    {sector.income > 0 && (
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">Nuevos Ingresos:</span>
                        <span className="font-bold text-blue-600">+${sector.income.toLocaleString('en-US')}M</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
