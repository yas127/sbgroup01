export interface TeamMember {
  name: string;
  rollNumber: string;
  role: string;
  initials: string;
  focusArea: string;
  summary: string;
  image?: string;
}

export interface MetricItem {
  label: string;
  value: string;
  sublabel: string;
  change?: string;
  trend?: 'up' | 'neutral' | 'down';
}

export interface RevenueSegment {
  name: string;
  valueInr: number; // in INR Billions
  valueUsd: number; // in USD Billions
  percentage: number;
  description: string;
  strengths: string;
  risks: string;
}

export interface SpecialtyProduct {
  name: string;
  genericName: string;
  indication: string;
  stage: 'Marketed' | 'Pipeline' | 'Phase 3' | 'Phase 2';
  therapeuticArea: 'Dermatology' | 'Ophthalmology' | 'Oncology' | 'Endocrinology' | 'Rheumatology';
  description: string;
  competitiveContext: string;
}

export interface CompetitorComparison {
  name: string;
  category: 'Domestic Peer' | 'Global Generic' | 'Specialty Rival';
  revenue: string;
  keyStrengths: string;
  keyDisadvantages: string;
  sunAdvantage: string;
}

export interface FrameworkItem {
  title: string;
  category: string;
  summary: string;
  details: string[];
  implication: string;
}

export interface LawsuitItem {
  title: string;
  courtOrForum: string;
  financialMeasure: string;
  status: string;
  keyDetails: string;
}

export interface RecommendationItem {
  id: string;
  title: string;
  priority: 'Immediate' | 'Medium-term' | 'Long-term';
  strategicPillar: string;
  rationale: string;
  implementationPlan: string[];
  expectedImpact: string;
}

export interface ReferenceSource {
  title: string;
  organization: string;
  category: 'Financial Results' | 'Regulatory & Ratings' | 'Corporate Governance' | 'Legal & Industry';
  url: string;
  description: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}
