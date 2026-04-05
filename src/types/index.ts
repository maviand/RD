import { LucideIcon } from 'lucide-react';

export interface EnrichedContent {
  tldr?: string;
  leaderQuote?: { quote: string; author: string; context?: string };
  citizenPersona?: { name: string; age: number; occupation: string; story: string };
  risks?: { risk: string; mitigation: string }[];
  historicalContext?: string;
  urgency?: 'Crítica' | 'Alta' | 'Moderada';
  references?: { id: number; title: string; url?: string }[];
  audioNarrativeUrl?: string;
  expertEndorsement?: { expert: string; entity: string; quote: string };
  legislativePathway?: string;
  faqs?: { question: string; answer: string }[];
  costOfInaction?: string;
  regionalImpact?: { region: string; impact: string }[];
  crossSectorLinkages?: string[];
  realWorldModels?: { country: string; description: string; url?: string }[];
  trivia?: string[];
}

export interface Solution {
  leader: string;
  model: string;
  description: string;
  extendedDescription?: string;
  implementationSteps?: string[];
  expectedOutcomes?: string[];
  chartData?: { name: string; value: number }[];
  imageUrl?: string;
  internalRoute?: string;
  enrichedContent?: EnrichedContent;
}

export interface Problem {
  id: string;
  title: string;
  description: string;
  solution: Solution;
  upvotes?: number;
  downvotes?: number;
}

export interface Sector {
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
