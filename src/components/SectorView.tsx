import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, LucideIcon, Filter, ThumbsUp, ThumbsDown, ExternalLink, Search, Rocket, Twitter, Instagram, MessageCircle, Share2 } from 'lucide-react';
import TerritorialSavingsChart from './TerritorialSavingsChart';
import MinistryConsolidationChart from './MinistryConsolidationChart';
import MilitaryEfficiencyChart from './MilitaryEfficiencyChart';
import EducationBudgetChart from './EducationBudgetChart';
import JudicialBacklogChart from './JudicialBacklogChart';
import IrrigationEfficiencyChart from './IrrigationEfficiencyChart';
import CognitiveDeficitChart from './CognitiveDeficitChart';
import TourismLeakageChart from './TourismLeakageChart';
import TourismDiversificationChart from './TourismDiversificationChart';
import SchoolInfrastructureChart from './SchoolInfrastructureChart';
import DigitalDivideChart from './DigitalDivideChart';
import SargassumEconomyChart from './SargassumEconomyChart';
import TourismSecurityChart from './TourismSecurityChart';
import PensionInformalityChart from './PensionInformalityChart';
import SocialFraudAIChart from './SocialFraudAIChart';
import EnergyDistributionLossChart from './EnergyDistributionLossChart';
import GridStorageStabilizationChart from './GridStorageStabilizationChart';
import JudicialCorruptionChart from './JudicialCorruptionChart';
import PoliceAccountabilityChart from './PoliceAccountabilityChart';
import TaxEvasionAIChart from './TaxEvasionAIChart';
import TrafficCongestionERPChart from './TrafficCongestionERPChart';
import AgriculturalProductivityAIChart from './AgriculturalProductivityAIChart';
import LaborFormalizationChart from './LaborFormalizationChart';
import EducationMeritSystemChart from './EducationMeritSystemChart';
import HealthcareFundingChart from './HealthcareFundingChart';
import PrimaryCareNetworkChart from './PrimaryCareNetworkChart';
import GenericDrugMarketChart from './GenericDrugMarketChart';
import SinglePayerCopayChart from './SinglePayerCopayChart';
import ObstetricAIAuditChart from './ObstetricAIAuditChart';
import TraumaTaxFundingChart from './TraumaTaxFundingChart';
import PharmaBlockchainTraceabilityChart from './PharmaBlockchainTraceabilityChart';
import VectorDiseaseDroneChart from './VectorDiseaseDroneChart';
import NursingSubsidiesChart from './NursingSubsidiesChart';
import EHRInteroperabilityChart from './EHRInteroperabilityChart';
import HospitalPPPEfficiencyChart from './HospitalPPPEfficiencyChart';
import TeenPregnancyClinicChart from './TeenPregnancyClinicChart';
import MentalHealthDecentralizationChart from './MentalHealthDecentralizationChart';
import CosmeticSurgeryRegulationChart from './CosmeticSurgeryRegulationChart';
import AmbulanceDispatchAIChart from './AmbulanceDispatchAIChart';
import UltraProcessedTaxChart from './UltraProcessedTaxChart';
import SolarColdChainChart from './SolarColdChainChart';
import MedicalBrainDrainChart from './MedicalBrainDrainChart';
import ImagingAsAServiceChart from './ImagingAsAServiceChart';
import FuelTaxReformChart from './FuelTaxReformChart';
import {
  ProsecutorIndependenceChart,
  InterInstitutionalCoordinationChart,
  PublicDefenseFundingChart,
  ForensicModernizationChart,
  DigitalJusticeChart,
  JudicialIndependenceChart,
  BudgetAutonomyChart,
  GenderViolenceCourtsChart,
  AlternativeDisputeChart,
  RuralJusticeAccessChart,
  NotarialBlockchainChart,
  JudgmentEnforcementChart,
  JuvenileRestorativeChart,
  LegalTranslationChart,
  CommercialDisputeChart,
  FastTrackCourtsChart,
  JudicialEducationChart
} from './JusticeCharts';
import {
  AgriBolsaChart,
  ClimateResilienceChart,
  ColdChainChart,
  AIMicroloansChart,
  BiosecurityDronesChart,
  RuralRoadsChart,
  YouthAgriTechChart,
  ParametricInsuranceChart,
  RegenerativeAgricultureChart,
  OrganicFertilizerChart,
  AIAgronomistChart,
  ValueAddedExportChart,
  CRISPRBiodefenseChart,
  LocalSeedChart,
  BiometricTradeChart,
  LivestockTrackingChart,
  EquipmentSubsidyChart,
  IoTSensorsChart,
  SatelliteDeforestationChart
} from './AgricultureCharts';
import {
  PublicDebtChart,
  EResidencyChart,
  CashFlowPredictiveChart,
  TreasurySingleAccountChart,
  SovereignWealthFundChart,
  StateFactoringChart,
  FiscalResponsibilityChart,
  PublicFinanceReformChart,
  DigitalClearinghouseChart,
  SIAFEComplianceChart,
  IntegratedAuditChart,
  TreasuryAcademyChart,
  ZeroTrustSecurityChart,
  SIGEFUniversalChart,
  SovereignCloudChart,
  OKRManagementChart,
  LocalCapitalMarketsChart,
  CatastropheBondsChart,
  CreditRatingChart,
  ActiveLiabilityManagementChart
} from './FinanceCharts';
import {
  RenewableCurtailmentChart,
  FossilFuelDependenceChart,
  TransmissionMonopolyChart,
  EdeDeficitChart,
  BlackoutReductionChart,
  TariffInterferenceChart,
  RenewableBureaucracyChart,
  DistributedGenerationChart,
  PuntaCatalinaEmissionsChart,
  SmartMeterBillingChart,
  EnergyEfficiencyStandardsChart,
  DemandForecastingAIChart,
  UndergroundGridChart,
  LongTermEnergyStrategyChart,
  EVChargingNetworkChart,
  PredictiveMaintenanceChart,
  WholesaleEnergyMarketChart,
  HydroelectricOptimizationChart,
  EnergyTechWorkforceChart
} from './EnergyCharts';
import {
  CoastalErosionChart,
  TouristInfrastructureTaxChart,
  TransportDeregulationChart,
  CulturalTourismChart,
  HighSpeedRailChart,
  LanguageCertificationChart,
  BioCapacityChart,
  VisionZeroTrafficChart,
  ZeroToleranceTaskForceChart,
  EcoTourismFundChart,
  ShortTermRentalTaxChart,
  VendorZoningChart,
  HeritageTrustChart,
  OpenSkiesAviationChart,
  BiometricEGatesChart,
  CrisisCommunicationChart
} from './TourismCharts';
import {
  DigitalSkillsChart,
  BrainDrainChart,
  PatentRateChart,
  BroadbandChart,
  BureaucracyChart,
  CyberSecurityChart,
  AIGovChart,
  FintechChart,
  UniIndustryChart,
  OpenDataChart,
  WomenInSTEMChart,
  CloudAdoptionChart,
  DigitalNomadChart,
  SchoolCurriculumChart,
  RuralDigitalDivideChart,
  SeedCapitalChart,
  OutdatedRegulationChart,
  ForeignTechDependenceChart
} from './InnovationCharts';

interface Solution {
  leader: string;
  model: string;
  description: string;
  extendedDescription?: string;
  implementationSteps?: string[];
  expectedOutcomes?: string[];
  chartData?: { name: string; value: number }[];
  imageUrl?: string;
}

interface Problem {
  id: string;
  title: string;
  description: string;
  solution: Solution;
  upvotes?: number;
  downvotes?: number;
}

interface Sector {
  id: string;
  title: string;
  icon: LucideIcon;
  overview: string;
  megaproject?: {
    title: string;
    description: string;
    premise?: string;
    details?: string[];
    timeline?: { phase: string; description: string }[];
    partners?: string[];
  };
  problems: Problem[];
}

interface SectorViewProps {
  sector: Sector;
}

export default function SectorView({ sector }: SectorViewProps) {
  const Icon = sector.icon;
  const [selectedLeader, setSelectedLeader] = useState<string>('Todos');
  const [selectedModel, setSelectedModel] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'net' | 'total'>('net');
  const [votes, setVotes] = useState<Record<string, { up: number; down: number; userVote: 'up' | 'down' | null }>>({});
  const [visibleItems, setVisibleItems] = useState(10);
  const observerTarget = useRef<HTMLDivElement>(null);

  // Initialize votes from data and localStorage
  useEffect(() => {
    const storedVotesStr = localStorage.getItem('reforma_votes');
    const storedVotes = storedVotesStr ? JSON.parse(storedVotesStr) : {};

    const initialVotes: Record<string, { up: number; down: number; userVote: 'up' | 'down' | null }> = {};
    sector.problems.forEach(p => {
      initialVotes[p.id] = storedVotes[p.id] || {
        up: 0,
        down: 0,
        userVote: null
      };
    });
    setVotes(initialVotes);
  }, [sector]);

  // Reset visible items when filters change
  useEffect(() => {
    setVisibleItems(10);
  }, [selectedLeader, selectedModel, searchQuery, sortBy, sector.id]);

  const handleVote = (problemId: string, type: 'up' | 'down') => {
    setVotes(prev => {
      const current = prev[problemId];
      if (!current) return prev;

      let newUp = current.up;
      let newDown = current.down;
      let newUserVote = current.userVote;

      if (current.userVote === type) {
        // Remove vote
        newUserVote = null;
        if (type === 'up') newUp--;
        else newDown--;
      } else {
        // Change or add vote
        if (current.userVote === 'up') newUp--;
        if (current.userVote === 'down') newDown--;
        
        newUserVote = type;
        if (type === 'up') newUp++;
        else newDown++;
      }

      const newState = { ...prev, [problemId]: { up: newUp, down: newDown, userVote: newUserVote } };
      
      // Persist to localStorage
      const storedVotesStr = localStorage.getItem('reforma_votes');
      const storedVotes = storedVotesStr ? JSON.parse(storedVotesStr) : {};
      localStorage.setItem('reforma_votes', JSON.stringify({ ...storedVotes, [problemId]: newState[problemId] }));

      return newState;
    });
  };

  const leaders = ['Todos', ...new Set(sector.problems.map(p => p.solution.leader))];
  const models = ['Todos', ...new Set(sector.problems.map(p => p.solution.model))];

  const filteredProblems = sector.problems
    .filter(p => {
      const matchLeader = selectedLeader === 'Todos' || p.solution.leader === selectedLeader;
      const matchModel = selectedModel === 'Todos' || p.solution.model === selectedModel;
      const matchSearch = searchQuery === '' || 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.solution.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchLeader && matchModel && matchSearch;
    })
    .sort((a, b) => {
      const upA = votes[a.id]?.up || 0;
      const downA = votes[a.id]?.down || 0;
      const upB = votes[b.id]?.up || 0;
      const downB = votes[b.id]?.down || 0;
      
      if (sortBy === 'total') {
        const totalA = upA + downA;
        const totalB = upB + downB;
        return totalB - totalA;
      } else {
        const scoreA = upA - downA;
        const scoreB = upB - downB;
        return scoreB - scoreA;
      }
    });

  // Infinite scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleItems((prev) => prev + 10);
        }
      },
      { threshold: 0.1 }
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [visibleItems, filteredProblems.length]);
    
  const paginatedProblems = filteredProblems.slice(0, visibleItems);
  
  return (
    <motion.div 
      key={sector.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="max-w-5xl mx-auto p-4 sm:p-8 md:p-12 bg-[var(--color-gov-light)] min-h-full"
    >
      <header className="mb-12 border-b-2 border-gray-200 pb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="inline-flex items-center justify-center p-3 bg-[var(--color-gov-blue)] text-white rounded-md shadow-sm">
            <Icon className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-[var(--color-gov-blue)] tracking-widest uppercase">{sector.title}</h1>
        </div>
        <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mt-4 font-sans">{sector.overview}</p>
      </header>

      {/* Megaproject Section */}
      {sector.megaproject && (
        <div className="mb-12 bg-gradient-to-br from-[var(--color-gov-blue)] to-[#001f44] rounded-md p-6 sm:p-10 text-white shadow-[0_0_30px_rgba(0,47,108,0.3)] relative overflow-hidden border-t-4 border-[var(--color-gov-red)] ring-1 ring-white/10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[var(--color-gov-gold)] opacity-5 rounded-full blur-3xl -ml-10 -mb-10"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[var(--color-gov-gold)]/20 rounded-md border border-[var(--color-gov-gold)]/30">
                <Rocket className="w-6 h-6 text-[var(--color-gov-gold)]" />
              </div>
              <span className="px-3 py-1 bg-[var(--color-gov-gold)] text-[var(--color-gov-blue)] text-xs font-bold uppercase tracking-widest rounded-sm shadow-sm">
                Proyecto de Estado (Megaproyecto)
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-extrabold mb-6 tracking-widest uppercase text-white break-words leading-tight">{sector.megaproject.title}</h2>
            
            {sector.megaproject.premise && (
              <div className="mb-8 bg-white/5 p-6 rounded-md border-l-4 border-[var(--color-gov-gold)] shadow-inner">
                <h3 className="text-[var(--color-gov-gold)] font-heading font-bold mb-3 text-xs uppercase tracking-widest">La Premisa</h3>
                <p className="text-white text-sm leading-relaxed font-sans">{sector.megaproject.premise}</p>
              </div>
            )}
            
            <p className="text-base md:text-lg text-gray-200 mb-6 leading-relaxed font-sans">
              {sector.megaproject.description}
            </p>

            {sector.megaproject.details && sector.megaproject.details.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {sector.megaproject.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white/5 p-4 rounded-md">
                    <div className="w-2 h-2 rounded-sm bg-[var(--color-gov-gold)] mt-2 flex-shrink-0"></div>
                    <p className="text-gray-200 text-xs leading-relaxed font-sans">{detail}</p>
                  </div>
                ))}
              </div>
            )}

            {sector.megaproject.timeline && sector.megaproject.timeline.length > 0 && (
              <div className="mt-8 bg-white/5 p-6 rounded-md border border-white/10">
                <h3 className="text-[var(--color-gov-gold)] font-heading font-bold mb-4 text-xs uppercase tracking-widest">Cronograma de Implementación</h3>
                <div className="space-y-4">
                  {sector.megaproject.timeline.map((item, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                      <div className="w-24 flex-shrink-0 text-white font-bold text-xs font-sans">{item.phase}</div>
                      <div className="text-gray-300 text-xs leading-relaxed font-sans">{item.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {sector.megaproject.partners && sector.megaproject.partners.length > 0 && (
              <div className="mt-6 bg-white/5 p-6 rounded-md border border-white/10">
                <h3 className="text-[var(--color-gov-gold)] font-heading font-bold mb-4 text-xs uppercase tracking-widest">Socios Clave</h3>
                <div className="flex flex-wrap gap-2">
                  {sector.megaproject.partners.map((partner, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-white/10 text-white text-[10px] font-medium rounded-sm border border-white/20 uppercase tracking-wider">
                      {partner}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="mb-8 bg-white p-5 rounded-md border border-gray-200 shadow-sm flex flex-col md:flex-row gap-4 items-center">
        <div className="flex items-center gap-2 text-[var(--color-gov-blue)] text-sm font-bold uppercase tracking-wider whitespace-nowrap font-heading">
          <Filter className="w-5 h-5" />
          <span>Filtrar por:</span>
        </div>
        <div className="flex flex-1 flex-col md:flex-row gap-4 w-full">
          <div className="flex-1 relative">
            <label className="block text-[10px] text-gray-500 mb-1 uppercase tracking-wider font-bold font-heading">Búsqueda</label>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text"
                placeholder="Buscar palabras clave..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-sm focus:ring-[var(--color-gov-blue)] focus:border-[var(--color-gov-blue)] block pl-9 p-2.5 outline-none font-sans"
              />
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-[10px] text-gray-500 mb-1 uppercase tracking-wider font-bold font-heading">Líder</label>
            <select 
              value={selectedLeader}
              onChange={(e) => setSelectedLeader(e.target.value)}
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-sm focus:ring-[var(--color-gov-blue)] focus:border-[var(--color-gov-blue)] block p-2.5 outline-none font-sans"
            >
              {leaders.map(leader => (
                <option key={leader} value={leader}>{leader}</option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-[10px] text-gray-500 mb-1 uppercase tracking-wider font-bold font-heading">Modelo</label>
            <select 
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-sm focus:ring-[var(--color-gov-blue)] focus:border-[var(--color-gov-blue)] block p-2.5 outline-none font-sans"
            >
              {models.map(model => (
                <option key={model} value={model}>{model}</option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-[10px] text-gray-500 mb-1 uppercase tracking-wider font-bold font-heading">Ordenar por</label>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'net' | 'total')}
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-sm focus:ring-[var(--color-gov-blue)] focus:border-[var(--color-gov-blue)] block p-2.5 outline-none font-sans"
            >
              <option value="net">Prioridad (Votos netos)</option>
              <option value="total">Interacción (Votos totales)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-gray-200 pb-4 gap-2">
          <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-[var(--color-gov-blue)] tracking-widest uppercase">Problemas Críticos y Soluciones</h2>
          <span className="text-xs text-gray-600 font-bold bg-gray-200 px-3 py-1 rounded-sm uppercase tracking-wider font-heading">
            {sortBy === 'net' ? 'Ordenados por prioridad (votos netos)' : 'Ordenados por interacción (votos totales)'}
          </span>
        </div>
        <div className="grid gap-6">
          <AnimatePresence mode="popLayout">
            {paginatedProblems.map((problem, idx) => (
              <ProblemCard 
                key={problem.id} 
                problem={problem} 
                index={idx} 
                voteData={votes[problem.id]}
                onVote={(type) => handleVote(problem.id, type)}
              />
            ))}
          </AnimatePresence>

          {visibleItems < filteredProblems.length && (
            <div ref={observerTarget} className="h-10 flex items-center justify-center mt-4">
              <div className="w-6 h-6 border-2 border-[var(--color-gov-blue)] border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {paginatedProblems.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12 text-gray-500"
            >
              No se encontraron problemas con los filtros seleccionados.
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

const ProblemCard: React.FC<{ 
  problem: Problem; 
  index: number; 
  voteData?: { up: number; down: number; userVote: 'up' | 'down' | null };
  onVote: (type: 'up' | 'down') => void;
}> = ({ 
  problem, 
  index,
  voteData,
  onVote
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const score = voteData ? voteData.up - voteData.down : 0;
  const userVote = voteData?.userVote;

  const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(problem.solution.leader + ' ' + problem.solution.model + ' policy case study')}`;

  const handleShare = (platform: string) => {
    // Assuming the URL structure is /#/sectorId, we can just use the current URL
    const url = window.location.href;
    const text = `Reforma Total RD | Problema: ${problem.title} - Solución: ${problem.solution.model}`;
    
    if (platform === 'whatsapp') {
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
    } else if (platform === 'x') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'instagram') {
      navigator.clipboard.writeText(`${text} ${url}`);
      alert('¡Enlace y texto copiados al portapapeles para compartir en Instagram!');
    }
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
      className={`relative rounded-md border transition-all duration-300 group ${isExpanded ? 'bg-white border-[var(--color-gov-blue)] shadow-xl ring-1 ring-[var(--color-gov-blue)]/20 z-10' : 'bg-white border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300'} overflow-hidden`}
    >
      <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-[var(--color-gov-red)] transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
      <div className="p-4 sm:p-6 md:p-8 pl-6 sm:pl-8 md:pl-10">
        <div className="flex flex-col gap-4">
          <div 
            className="flex justify-between items-start gap-3 sm:gap-4 cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            
            <div className="flex flex-col items-center gap-1 bg-gray-50 p-1.5 sm:p-2 rounded-sm border border-gray-200 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8, rotate: -10, y: 2 }}
                onClick={(e) => { e.stopPropagation(); onVote('up'); }} 
                title="Votar a favor (Prioritario)"
                className={`p-1 sm:p-1.5 rounded hover:bg-gray-200 transition-colors ${userVote === 'up' ? 'text-[var(--color-gov-blue)]' : 'text-gray-400'}`}
                aria-label="Upvote"
              >
                <ThumbsUp className="w-4 h-4 sm:w-5 sm:h-5" fill={userVote === 'up' ? 'currentColor' : 'none'} />
              </motion.button>
              <span className={`font-bold text-xs font-sans ${userVote === 'up' ? 'text-[var(--color-gov-blue)]' : userVote === 'down' ? 'text-[var(--color-gov-red)]' : 'text-gray-600'}`}>
                {score}
              </span>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8, rotate: 10, y: 2 }}
                onClick={(e) => { e.stopPropagation(); onVote('down'); }} 
                title="Votar en contra (No prioritario)"
                className={`p-1 sm:p-1.5 rounded hover:bg-gray-200 transition-colors ${userVote === 'down' ? 'text-[var(--color-gov-red)]' : 'text-gray-400'}`}
                aria-label="Downvote"
              >
                <ThumbsDown className="w-4 h-4 sm:w-5 sm:h-5" fill={userVote === 'down' ? 'currentColor' : 'none'} />
              </motion.button>
            </div>

            <div className="space-y-2 sm:space-y-3 flex-1 min-w-0">
              <div className="inline-flex items-center gap-2 px-2 sm:px-3 py-1 rounded-sm bg-[var(--color-gov-blue)] text-white text-[10px] font-bold tracking-widest uppercase font-heading">
                Problema {index + 1}
              </div>
              <h4 className="text-base sm:text-lg md:text-xl font-heading font-bold text-[var(--color-gov-blue)] leading-snug uppercase tracking-wider break-words">{problem.title}</h4>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-sans break-words">{problem.description}</p>
            </div>
            <button 
              onClick={(e) => { e.stopPropagation(); setIsExpanded(!isExpanded); }}
              className="p-1 sm:p-2 rounded-sm hover:bg-gray-100 transition-colors text-[var(--color-gov-blue)] flex-shrink-0 mt-0 sm:mt-8 border border-transparent hover:border-gray-200"
              aria-label="Toggle solution"
            >
              {isExpanded ? <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" /> : <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
          
          <AnimatePresence>
            {isExpanded && (
              <motion.div 
                initial={{ opacity: 0, height: 0, y: -10 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="bg-gray-50 p-4 sm:p-6 rounded-md border border-gray-200 shadow-sm space-y-6">
                    <div className="flex justify-between items-center">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[var(--color-gov-gold)] text-[var(--color-gov-blue)] text-[10px] font-bold tracking-widest uppercase font-heading">
                        Solución Detallada
                      </div>
                      <a 
                        href={searchUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-gov-blue)] hover:bg-[#001f44] text-white text-xs font-bold font-heading uppercase tracking-wider rounded-sm transition-colors shadow-sm"
                      >
                        Más Información
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 font-sans">
                        <span className="font-bold text-[var(--color-gov-blue)] bg-white px-2 py-1 rounded-sm border border-gray-300 shadow-sm">{problem.solution.leader}</span>
                        <span>•</span>
                        <span className="font-bold text-white bg-[var(--color-gov-blue)] px-2 py-1 rounded-sm border border-[var(--color-gov-blue)]">{problem.solution.model}</span>
                      </div>
                      <p className="text-sm text-gray-900 leading-relaxed font-semibold font-sans">{problem.solution.description}</p>
                    </div>

                    {problem.solution.extendedDescription && (
                      <div className="prose prose-sm max-w-none">
                        {problem.solution.extendedDescription.split('\n\n').map((paragraph, idx) => {
                          const parts = paragraph.split(/(\*\*.*?\*\*)/g);
                          return (
                            <p key={idx} className="text-sm text-gray-700 leading-relaxed font-sans mb-4">
                              {parts.map((part, i) => 
                                part.startsWith('**') && part.endsWith('**') 
                                  ? <strong key={i} className="font-bold text-gray-900">{part.slice(2, -2)}</strong> 
                                  : part
                              )}
                            </p>
                          );
                        })}
                      </div>
                    )}

                    {problem.solution.imageUrl && (
                      <div className="rounded-md overflow-hidden border border-gray-300 shadow-sm my-6">
                        <img src={problem.solution.imageUrl} alt="Ilustración de la solución" className="w-full h-64 object-cover" referrerPolicy="no-referrer" />
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {problem.solution.implementationSteps && (
                        <div className="bg-white p-5 rounded-md border border-gray-300 shadow-sm border-t-4 border-t-[var(--color-gov-blue)]">
                          <h5 className="text-xs font-heading font-bold text-[var(--color-gov-blue)] mb-4 uppercase tracking-widest flex items-center gap-2">
                            Fases de Implementación
                          </h5>
                          <ul className="space-y-3">
                            {problem.solution.implementationSteps.map((step, i) => (
                              <li key={i} className="text-xs text-gray-700 flex items-start gap-2 font-sans">
                                <span className="text-[var(--color-gov-blue)] font-bold">{i + 1}.</span>
                                {step}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {problem.solution.expectedOutcomes && (
                        <div className="bg-white p-5 rounded-md border border-gray-300 shadow-sm border-t-4 border-t-[var(--color-gov-gold)]">
                          <h5 className="text-xs font-heading font-bold text-[var(--color-gov-blue)] mb-4 uppercase tracking-widest flex items-center gap-2">
                            Resultados Esperados
                          </h5>
                          <ul className="space-y-3">
                            {problem.solution.expectedOutcomes.map((outcome, i) => (
                              <li key={i} className="text-xs text-gray-700 flex items-start gap-2 font-sans">
                                <span className="text-[var(--color-gov-gold)] mt-1 font-bold">✓</span>
                                {outcome}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {problem.id === 'gov-1' && <MinistryConsolidationChart />}
                    {problem.id === 'gov-2' && <MilitaryEfficiencyChart />}
                    {problem.id === 'gov-3' && <TerritorialSavingsChart />}
                    {problem.id === 'edu-1' && <CognitiveDeficitChart />}
                    {problem.id === 'edu-2' && <EducationBudgetChart />}
                    {problem.id === 'edu-4' && <SchoolInfrastructureChart />}
                    {problem.id === 'edu-5' && <DigitalDivideChart />}
                    {problem.id === 'jus-1' && <JudicialBacklogChart />}
                    {problem.id === 'agr-1' && <IrrigationEfficiencyChart />}
                    {problem.id === 'tour-1' && <TourismSecurityChart />}
                    {problem.id === 'tour-2' && <SargassumEconomyChart />}
                    {problem.id === 'tour-3' && <TourismLeakageChart />}
                    {problem.id === 'tour-4' && <TourismDiversificationChart />}
                    {problem.id === 'tour-5' && <CoastalErosionChart />}
                    {problem.id === 'tour-6' && <TouristInfrastructureTaxChart />}
                    {problem.id === 'tour-7' && <TransportDeregulationChart />}
                    {problem.id === 'tour-8' && <CulturalTourismChart />}
                    {problem.id === 'tour-9' && <HighSpeedRailChart />}
                    {problem.id === 'tour-10' && <LanguageCertificationChart />}
                    {problem.id === 'tour-11' && <BioCapacityChart />}
                    {problem.id === 'tour-12' && <VisionZeroTrafficChart />}
                    {problem.id === 'tour-13' && <ZeroToleranceTaskForceChart />}
                    {problem.id === 'tour-14' && <EcoTourismFundChart />}
                    {problem.id === 'tour-15' && <ShortTermRentalTaxChart />}
                    {problem.id === 'tour-16' && <VendorZoningChart />}
                    {problem.id === 'tour-17' && <HeritageTrustChart />}
                    {problem.id === 'tour-18' && <OpenSkiesAviationChart />}
                    {problem.id === 'tour-19' && <BiometricEGatesChart />}
                    {problem.id === 'tour-20' && <CrisisCommunicationChart />}
                    {problem.id === 'wel-1' && <PensionInformalityChart />}
                    {problem.id === 'wel-2' && <SocialFraudAIChart />}
                    {problem.id === 'nrg-1' && <EnergyDistributionLossChart />}
                    {problem.id === 'nrg-2' && <GridStorageStabilizationChart />}
                    {problem.id === 'nrg-3' && <RenewableCurtailmentChart />}
                    {problem.id === 'nrg-4' && <FossilFuelDependenceChart />}
                    {problem.id === 'nrg-5' && <TransmissionMonopolyChart />}
                    {problem.id === 'nrg-6' && <EdeDeficitChart />}
                    {problem.id === 'nrg-7' && <BlackoutReductionChart />}
                    {problem.id === 'nrg-8' && <TariffInterferenceChart />}
                    {problem.id === 'nrg-9' && <RenewableBureaucracyChart />}
                    {problem.id === 'nrg-10' && <DistributedGenerationChart />}
                    {problem.id === 'nrg-11' && <PuntaCatalinaEmissionsChart />}
                    {problem.id === 'nrg-12' && <SmartMeterBillingChart />}
                    {problem.id === 'nrg-13' && <EnergyEfficiencyStandardsChart />}
                    {problem.id === 'nrg-14' && <DemandForecastingAIChart />}
                    {problem.id === 'nrg-15' && <UndergroundGridChart />}
                    {problem.id === 'nrg-16' && <LongTermEnergyStrategyChart />}
                    {problem.id === 'nrg-17' && <EVChargingNetworkChart />}
                    {problem.id === 'nrg-18' && <PredictiveMaintenanceChart />}
                    {problem.id === 'nrg-19' && <WholesaleEnergyMarketChart />}
                    {problem.id === 'nrg-20' && <HydroelectricOptimizationChart />}
                    {problem.id === 'nrg-21' && <EnergyTechWorkforceChart />}
                    {problem.id === 'jus-2' && <JudicialCorruptionChart />}
                    {problem.id === 'jus-3' && <PoliceAccountabilityChart />}
                    {problem.id === 'jus-5' && <ProsecutorIndependenceChart />}
                    {problem.id === 'jus-6' && <InterInstitutionalCoordinationChart />}
                    {problem.id === 'jus-7' && <PublicDefenseFundingChart />}
                    {problem.id === 'jus-8' && <ForensicModernizationChart />}
                    {problem.id === 'jus-9' && <DigitalJusticeChart />}
                    {problem.id === 'jus-10' && <JudicialIndependenceChart />}
                    {problem.id === 'jus-11' && <BudgetAutonomyChart />}
                    {problem.id === 'jus-12' && <GenderViolenceCourtsChart />}
                    {problem.id === 'jus-13' && <AlternativeDisputeChart />}
                    {problem.id === 'jus-14' && <RuralJusticeAccessChart />}
                    {problem.id === 'jus-15' && <NotarialBlockchainChart />}
                    {problem.id === 'jus-16' && <JudgmentEnforcementChart />}
                    {problem.id === 'jus-17' && <JuvenileRestorativeChart />}
                    {problem.id === 'jus-18' && <LegalTranslationChart />}
                    {problem.id === 'jus-19' && <CommercialDisputeChart />}
                    {problem.id === 'jus-20' && <FastTrackCourtsChart />}
                    {problem.id === 'jus-21' && <JudicialEducationChart />}
                    {problem.id === 'fin-2' && <TaxEvasionAIChart />}
                    {problem.id === 'fin-4' && <PublicDebtChart />}
                    {problem.id === 'fin-5' && <EResidencyChart />}
                    {problem.id === 'fin-6' && <CashFlowPredictiveChart />}
                    {problem.id === 'fin-7' && <TreasurySingleAccountChart />}
                    {problem.id === 'fin-8' && <SovereignWealthFundChart />}
                    {problem.id === 'fin-9' && <StateFactoringChart />}
                    {problem.id === 'fin-10' && <FiscalResponsibilityChart />}
                    {problem.id === 'fin-11' && <PublicFinanceReformChart />}
                    {problem.id === 'fin-12' && <DigitalClearinghouseChart />}
                    {problem.id === 'fin-13' && <SIAFEComplianceChart />}
                    {problem.id === 'fin-14' && <IntegratedAuditChart />}
                    {problem.id === 'fin-15' && <TreasuryAcademyChart />}
                    {problem.id === 'fin-16' && <ZeroTrustSecurityChart />}
                    {problem.id === 'fin-17' && <SIGEFUniversalChart />}
                    {problem.id === 'fin-18' && <SovereignCloudChart />}
                    {problem.id === 'fin-19' && <OKRManagementChart />}
                    {problem.id === 'fin-20' && <LocalCapitalMarketsChart />}
                    {problem.id === 'fin-21' && <CatastropheBondsChart />}
                    {problem.id === 'fin-22' && <CreditRatingChart />}
                    {problem.id === 'fin-23' && <ActiveLiabilityManagementChart />}
                    {problem.id === 'inf-2' && <TrafficCongestionERPChart />}
                    {problem.id === 'agr-2' && <AgriculturalProductivityAIChart />}
                    {problem.id === 'agr-4' && <AgriBolsaChart />}
                    {problem.id === 'agr-5' && <ClimateResilienceChart />}
                    {problem.id === 'agr-6' && <ColdChainChart />}
                    {problem.id === 'agr-7' && <AIMicroloansChart />}
                    {problem.id === 'agr-8' && <BiosecurityDronesChart />}
                    {problem.id === 'agr-9' && <RuralRoadsChart />}
                    {problem.id === 'agr-10' && <YouthAgriTechChart />}
                    {problem.id === 'agr-11' && <ParametricInsuranceChart />}
                    {problem.id === 'agr-12' && <RegenerativeAgricultureChart />}
                    {problem.id === 'agr-13' && <OrganicFertilizerChart />}
                    {problem.id === 'agr-14' && <AIAgronomistChart />}
                    {problem.id === 'agr-15' && <ValueAddedExportChart />}
                    {problem.id === 'agr-16' && <CRISPRBiodefenseChart />}
                    {problem.id === 'agr-17' && <LocalSeedChart />}
                    {problem.id === 'agr-18' && <BiometricTradeChart />}
                    {problem.id === 'agr-19' && <LivestockTrackingChart />}
                    {problem.id === 'agr-20' && <EquipmentSubsidyChart />}
                    {problem.id === 'agr-21' && <IoTSensorsChart />}
                    {problem.id === 'agr-22' && <SatelliteDeforestationChart />}
                    {problem.id === 'lab-1' && <LaborFormalizationChart />}
                    {problem.id === 'edu-1' && <EducationMeritSystemChart />}
                    {problem.id === 'hlt-1' && <HealthcareFundingChart />}
                    {problem.id === 'hlt-4' && <PrimaryCareNetworkChart />}
                    {problem.id === 'hlt-5' && <GenericDrugMarketChart />}
                    {problem.id === 'hlt-6' && <SinglePayerCopayChart />}
                    {problem.id === 'hlt-7' && <ObstetricAIAuditChart />}
                    {problem.id === 'hlt-9' && <TraumaTaxFundingChart />}
                    {problem.id === 'hlt-10' && <PharmaBlockchainTraceabilityChart />}
                    {problem.id === 'hlt-11' && <VectorDiseaseDroneChart />}
                    {problem.id === 'hlt-12' && <NursingSubsidiesChart />}
                    {problem.id === 'hlt-13' && <EHRInteroperabilityChart />}
                    {problem.id === 'hlt-14' && <HospitalPPPEfficiencyChart />}
                    {problem.id === 'hlt-15' && <TeenPregnancyClinicChart />}
                    {problem.id === 'hlt-16' && <MentalHealthDecentralizationChart />}
                    {problem.id === 'hlt-17' && <CosmeticSurgeryRegulationChart />}
                    {problem.id === 'hlt-18' && <AmbulanceDispatchAIChart />}
                    {problem.id === 'hlt-19' && <UltraProcessedTaxChart />}
                    {problem.id === 'hlt-20' && <SolarColdChainChart />}
                    {problem.id === 'hlt-21' && <MedicalBrainDrainChart />}
                    {problem.id === 'hlt-22' && <ImagingAsAServiceChart />}
                    {problem.id === 'gov-4' && <FuelTaxReformChart />}
                    {problem.id === 'inn-3' && <DigitalSkillsChart />}
                    {problem.id === 'inn-4' && <BrainDrainChart />}
                    {problem.id === 'inn-5' && <PatentRateChart />}
                    {problem.id === 'inn-6' && <BroadbandChart />}
                    {problem.id === 'inn-7' && <BureaucracyChart />}
                    {problem.id === 'inn-8' && <CyberSecurityChart />}
                    {problem.id === 'inn-9' && <AIGovChart />}
                    {problem.id === 'inn-10' && <FintechChart />}
                    {problem.id === 'inn-11' && <UniIndustryChart />}
                    {problem.id === 'inn-12' && <OpenDataChart />}
                    {problem.id === 'inn-13' && <WomenInSTEMChart />}
                    {problem.id === 'inn-14' && <CloudAdoptionChart />}
                    {problem.id === 'inn-15' && <DigitalNomadChart />}
                    {problem.id === 'inn-16' && <SchoolCurriculumChart />}
                    {problem.id === 'inn-17' && <RuralDigitalDivideChart />}
                    {problem.id === 'inn-18' && <SeedCapitalChart />}
                    {problem.id === 'inn-19' && <OutdatedRegulationChart />}
                    {problem.id === 'inn-20' && <ForeignTechDependenceChart />}

                    {/* Share Section */}
                    <div className="mt-6 pt-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-[var(--color-gov-blue)]">
                        <Share2 className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-wider font-heading">Compartir Propuesta:</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={(e) => { e.stopPropagation(); handleShare('whatsapp'); }}
                          className="p-2 bg-[#25D366] text-white rounded-full hover:bg-[#128C7E] transition-colors shadow-sm"
                          title="Compartir en WhatsApp"
                        >
                          <MessageCircle className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={(e) => { e.stopPropagation(); handleShare('x'); }}
                          className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors shadow-sm"
                          title="Compartir en X"
                        >
                          <Twitter className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={(e) => { e.stopPropagation(); handleShare('instagram'); }}
                          className="p-2 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white rounded-full hover:opacity-90 transition-opacity shadow-sm"
                          title="Copiar enlace para Instagram"
                        >
                          <Instagram className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
