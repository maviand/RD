import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, ExternalLink, ThumbsUp, ThumbsDown, Share2, Twitter, Instagram, MessageCircle, Quote, User, AlertCircle, BookOpen, PlayCircle, Award, Scale, MessageSquare, AlertOctagon, Map, Link as LinkIcon, Lightbulb, BookCheck, HelpCircle, FileDown, ArrowRight, ArrowLeft } from 'lucide-react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { useNavigate } from 'react-router-dom';
import { Problem, EnrichedContent } from '../types';

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


const TerritorialSavingsChart = React.lazy(() => import('./TerritorialSavingsChart'));
const MinistryConsolidationChart = React.lazy(() => import('./MinistryConsolidationChart'));
const MilitaryEfficiencyChart = React.lazy(() => import('./MilitaryEfficiencyChart'));
const EducationBudgetChart = React.lazy(() => import('./EducationBudgetChart'));
const JudicialBacklogChart = React.lazy(() => import('./JudicialBacklogChart'));
const IrrigationEfficiencyChart = React.lazy(() => import('./IrrigationEfficiencyChart'));
const CognitiveDeficitChart = React.lazy(() => import('./CognitiveDeficitChart'));
const TourismLeakageChart = React.lazy(() => import('./TourismLeakageChart'));
const TourismDiversificationChart = React.lazy(() => import('./TourismDiversificationChart'));
const SchoolInfrastructureChart = React.lazy(() => import('./SchoolInfrastructureChart'));
const DigitalDivideChart = React.lazy(() => import('./DigitalDivideChart'));
const SargassumEconomyChart = React.lazy(() => import('./SargassumEconomyChart'));
const TourismSecurityChart = React.lazy(() => import('./TourismSecurityChart'));
const PensionInformalityChart = React.lazy(() => import('./PensionInformalityChart'));
const SocialFraudAIChart = React.lazy(() => import('./SocialFraudAIChart'));
const EnergyDistributionLossChart = React.lazy(() => import('./EnergyDistributionLossChart'));
const GridStorageStabilizationChart = React.lazy(() => import('./GridStorageStabilizationChart'));
const JudicialCorruptionChart = React.lazy(() => import('./JudicialCorruptionChart'));
const PoliceAccountabilityChart = React.lazy(() => import('./PoliceAccountabilityChart'));
const TaxEvasionAIChart = React.lazy(() => import('./TaxEvasionAIChart'));
const TrafficCongestionERPChart = React.lazy(() => import('./TrafficCongestionERPChart'));
const AgriculturalProductivityAIChart = React.lazy(() => import('./AgriculturalProductivityAIChart'));
const LaborFormalizationChart = React.lazy(() => import('./LaborFormalizationChart'));
const EducationMeritSystemChart = React.lazy(() => import('./EducationMeritSystemChart'));
const HealthcareFundingChart = React.lazy(() => import('./HealthcareFundingChart'));
const PrimaryCareNetworkChart = React.lazy(() => import('./PrimaryCareNetworkChart'));
const GenericDrugMarketChart = React.lazy(() => import('./GenericDrugMarketChart'));
const SinglePayerCopayChart = React.lazy(() => import('./SinglePayerCopayChart'));
const ObstetricAIAuditChart = React.lazy(() => import('./ObstetricAIAuditChart'));
const TraumaTaxFundingChart = React.lazy(() => import('./TraumaTaxFundingChart'));
const PharmaBlockchainTraceabilityChart = React.lazy(() => import('./PharmaBlockchainTraceabilityChart'));
const VectorDiseaseDroneChart = React.lazy(() => import('./VectorDiseaseDroneChart'));
const NursingSubsidiesChart = React.lazy(() => import('./NursingSubsidiesChart'));
const EHRInteroperabilityChart = React.lazy(() => import('./EHRInteroperabilityChart'));
const HospitalPPPEfficiencyChart = React.lazy(() => import('./HospitalPPPEfficiencyChart'));
const TeenPregnancyClinicChart = React.lazy(() => import('./TeenPregnancyClinicChart'));
const MentalHealthDecentralizationChart = React.lazy(() => import('./MentalHealthDecentralizationChart'));
const CosmeticSurgeryRegulationChart = React.lazy(() => import('./CosmeticSurgeryRegulationChart'));
const AmbulanceDispatchAIChart = React.lazy(() => import('./AmbulanceDispatchAIChart'));
const UltraProcessedTaxChart = React.lazy(() => import('./UltraProcessedTaxChart'));
const SolarColdChainChart = React.lazy(() => import('./SolarColdChainChart'));
const MedicalBrainDrainChart = React.lazy(() => import('./MedicalBrainDrainChart'));
const ImagingAsAServiceChart = React.lazy(() => import('./ImagingAsAServiceChart'));
const FuelTaxReformChart = React.lazy(() => import('./FuelTaxReformChart'));

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
  const cardRef = useRef<HTMLDivElement>(null);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  
  const handleDownloadPdf = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!cardRef.current || isGeneratingPdf) return;
    
    if (window.innerWidth < 768) {
      alert("Para una mejor visualización del PDF, te recomendamos descargarlo desde un computador de escritorio.");
    }
    
    setIsGeneratingPdf(true);
    try {
      if (!isExpanded) {
        setIsExpanded(true);
        await new Promise(resolve => setTimeout(resolve, 500));
      }
      
      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: canvas.width > canvas.height ? 'l' : 'p',
        unit: 'px',
        format: [canvas.width, canvas.height]
      });
      
      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
      const safeTitle = problem.title ? problem.title.substring(0, 30).replace(/[^a-zA-Z0-9]/g, '-') : 'propuesta';
      pdf.save(`reforma-rd-${safeTitle}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Hubo un error al generar el PDF. Por favor, asegúrese de tener buena conexión.');
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  const scrollToAdjacent = (direction: 1 | -1, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!cardRef.current) return;
    
    const parentChildren = Array.from(cardRef.current.parentElement?.children || []);
    const currentIndex = parentChildren.indexOf(cardRef.current);
    const targetElement = parentChildren[currentIndex + direction] as HTMLElement;
    
    if (targetElement) {
      const chevronBtn = targetElement.querySelector('button[aria-label="Toggle solution"]') as HTMLButtonElement;
      if (chevronBtn) chevronBtn.click();
      
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
      setIsExpanded(false);
    } else {
      alert(direction === 1 ? 'Este es el último problema del sector.' : 'Este es el primer problema del sector.');
    }
  };
  const navigate = useNavigate();
  
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
              {problem.solution.enrichedContent?.urgency && (
                <div className="mb-2">
                  <span className={`px-2 py-0.5 text-[9px] uppercase tracking-wider font-bold rounded-sm text-white ${
                    problem.solution.enrichedContent.urgency === 'Crítica' ? 'bg-red-600 animate-pulse' : 
                    problem.solution.enrichedContent.urgency === 'Alta' ? 'bg-orange-500' : 'bg-blue-500'}`}>
                    Urgencia {problem.solution.enrichedContent.urgency}
                  </span>
                </div>
              )}
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
                      <div className="flex gap-2">
                        {problem.solution.internalRoute && (
                          <button
                            onClick={(e) => { e.stopPropagation(); navigate(problem.solution.internalRoute!); }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#FBBF24] hover:bg-[#F59E0B] text-[#002855] text-xs font-bold font-heading uppercase tracking-wider rounded-sm transition-colors shadow-sm"
                          >
                            Ver Presentación Interactiva
                          </button>
                        )}
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
                        <img src={problem.solution.imageUrl} alt="Ilustración de la solución" className="w-full max-h-[600px] object-contain bg-gray-50" referrerPolicy="no-referrer" />
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


const EnrichedSection: React.FC<{ data: EnrichedContent }> = ({ data }) => {
  return (
    <div className="space-y-8 mt-8 border-t border-gray-200 pt-8">
      {data.tldr && (
        <div className="bg-blue-50 p-4 rounded-md border-l-4 border-[var(--color-gov-blue)]">
          <h4 className="font-bold text-[var(--color-gov-blue)] text-xs uppercase tracking-widest mb-1">En Resumen (TL;DR)</h4>
          <p className="text-sm text-gray-800 font-sans">{data.tldr}</p>
        </div>
      )}

      {data.costOfInaction && (
        <div className="bg-red-50 p-4 rounded-md border border-red-200 flex items-start gap-4">
          <AlertOctagon className="w-8 h-8 text-red-600 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-red-700 text-xs uppercase tracking-widest mb-1">Costo de la Inacción</h4>
            <p className="text-sm text-red-900 font-sans font-semibold">{data.costOfInaction}</p>
          </div>
        </div>
      )}

      {data.leaderQuote && (
        <blockquote className="border-l-4 border-[var(--color-gov-gold)] pl-4 py-2 italic bg-gray-50 rounded-r-md relative">
          <Quote className="w-8 h-8 text-[var(--color-gov-gold)] opacity-20 absolute -top-2 -left-2" />
          <p className="text-lg text-gray-700 font-serif relative z-10">"{data.leaderQuote.quote}"</p>
          <footer className="mt-2 text-xs font-bold text-gray-500">
            — {data.leaderQuote.author} <span className="font-normal">{data.leaderQuote.context && `(${data.leaderQuote.context})`}</span>
          </footer>
        </blockquote>
      )}

      {data.citizenPersona && (
        <div className="bg-white border border-gray-200 shadow-sm rounded-md p-5 flex flex-col md:flex-row gap-5 items-start">
          <div className="bg-gray-100 p-3 rounded-full flex-shrink-0">
            <User className="w-8 h-8 text-gray-500" />
          </div>
          <div>
            <h4 className="font-bold text-[var(--color-gov-blue)] text-sm uppercase tracking-wider mb-2">
              El Futuro de {data.citizenPersona.name} <span className="text-gray-400 font-normal lowercase">({data.citizenPersona.age} años, {data.citizenPersona.occupation})</span>
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed font-sans italic">{data.citizenPersona.story}</p>
          </div>
        </div>
      )}

      {data.risks && data.risks.length > 0 && (
        <div className="space-y-3">
          <h4 className="font-bold text-[var(--color-gov-blue)] text-xs uppercase tracking-widest flex items-center gap-2">
            <AlertCircle className="w-4 h-4" /> Riesgos y Mitigación
          </h4>
          <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
            {data.risks.map((risk, idx) => (
              <div key={idx} className="bg-orange-50/50 p-4 border border-orange-100 rounded-md">
                <p className="text-xs font-bold text-orange-800 mb-1">Riesgo: {risk.risk}</p>
                <p className="text-xs text-gray-600">Mitigación: {risk.mitigation}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.historicalContext && (
          <div className="bg-gray-50 p-5 rounded-md border border-gray-200">
            <h4 className="font-bold text-[var(--color-gov-blue)] text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> Contexto Histórico
            </h4>
            <p className="text-xs text-gray-700 leading-relaxed">{data.historicalContext}</p>
          </div>
        )}

        {data.faqs && data.faqs.length > 0 && (
          <div className="bg-gray-50 p-5 rounded-md border border-gray-200">
            <h4 className="font-bold text-[var(--color-gov-blue)] text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
              <HelpCircle className="w-4 h-4" /> Preguntas Frecuentes
            </h4>
            <div className="space-y-4">
              {data.faqs.map((faq, idx) => (
                <details key={idx} className="group">
                  <summary className="text-xs font-bold text-gray-800 cursor-pointer hover:text-[var(--color-gov-blue)] transition-colors">{faq.question}</summary>
                  <p className="text-xs text-gray-600 mt-2 pl-2 border-l-2 border-gray-300">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        )}
      </div>

      {data.expertEndorsement && (
        <div className="flex flex-col md:flex-row gap-4 items-center bg-[var(--color-gov-blue)] text-white p-6 rounded-md shadow-inner">
          <Award className="w-12 h-12 text-[var(--color-gov-gold)] flex-shrink-0" />
          <div>
            <p className="text-sm italic mb-2 leading-relaxed">"{data.expertEndorsement.quote}"</p>
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-gov-gold)]">— {data.expertEndorsement.expert}, {data.expertEndorsement.entity}</p>
          </div>
        </div>
      )}

      {data.legislativePathway && (
        <div className="flex items-center gap-4 p-4 border border-blue-200 bg-blue-50/30 rounded-md">
          <Scale className="w-6 h-6 text-[var(--color-gov-blue)]" />
          <div>
            <h4 className="text-xs font-bold uppercase text-[var(--color-gov-blue)] tracking-wider">Ruta Legislativa</h4>
            <p className="text-xs text-gray-700 mt-1">{data.legislativePathway}</p>
          </div>
        </div>
      )}

      {data.audioNarrativeUrl && (
        <div className="flex items-center justify-between p-4 bg-gray-900 border border-gray-700 rounded-md text-white">
          <div className="flex items-center gap-3">
            <PlayCircle className="w-6 h-6 text-[var(--color-gov-gold)]" />
            <span className="text-xs font-bold uppercase tracking-wider">Escuchar Análisis IA</span>
          </div>
          <button className="px-4 py-1.5 bg-gray-700 hover:bg-gray-600 text-xs font-bold rounded-full transition-colors">Reproducir (3:45)</button>
        </div>
      )}

      {data.regionalImpact && data.regionalImpact.length > 0 && (
        <div>
          <h4 className="font-bold text-[var(--color-gov-blue)] text-xs uppercase tracking-widest flex items-center gap-2 mb-3">
            <Map className="w-4 h-4" /> Impacto Regional
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
             {data.regionalImpact.map((ri, idx) => (
               <div key={idx} className="border border-gray-200 rounded-md p-3">
                 <p className="text-xs font-bold text-gray-800">{ri.region}</p>
                 <p className="text-xs text-gray-600 mt-1">{ri.impact}</p>
               </div>
             ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.realWorldModels && data.realWorldModels.length > 0 && (
          <div>
             <h4 className="font-bold text-[var(--color-gov-blue)] text-xs uppercase tracking-widest flex items-center gap-2 mb-3">
               <LinkIcon className="w-4 h-4" /> Modelos en Acción
             </h4>
             <ul className="space-y-2">
                {data.realWorldModels.map((rm, idx) => (
                   <li key={idx} className="text-xs">
                     <a href={rm.url || '#'} target="_blank" rel="noreferrer" className="font-bold text-[var(--color-gov-blue)] hover:underline flex items-center gap-1">
                        {rm.country} <ExternalLink className="w-3 h-3" />
                     </a>
                     <span className="text-gray-600 block mt-0.5">{rm.description}</span>
                   </li>
                ))}
             </ul>
          </div>
        )}

        {data.references && data.references.length > 0 && (
          <div>
             <h4 className="font-bold text-[var(--color-gov-blue)] text-xs uppercase tracking-widest flex items-center gap-2 mb-3">
               <BookCheck className="w-4 h-4" /> Referencias Académicas
             </h4>
             <ul className="space-y-2">
                {data.references.map((r, idx) => (
                   <li key={idx} className="text-xs text-gray-600 flex items-start gap-1">
                     <span>[{r.id}]</span>
                     <a href={r.url || '#'} target="_blank" rel="noreferrer" className="hover:text-[var(--color-gov-blue)] hover:underline">
                        {r.title}
                     </a>
                   </li>
                ))}
             </ul>
          </div>
        )}
      </div>

      {data.trivia && data.trivia.length > 0 && (
        <div className="bg-yellow-50 p-4 border border-yellow-200 rounded-md flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-[var(--color-gov-gold)] flex-shrink-0 mt-0.5" />
          <p className="text-xs text-yellow-800 italic"><span className="font-bold not-italic">Curiosidad:</span> {data.trivia[0]}</p>
        </div>
      )}
    </div>
  );
};

export default ProblemCard;
