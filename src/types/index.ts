export type TileTone = 'green' | 'blue' | 'amber' | 'purple' | 'rose' | 'sky';

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  tone: TileTone;
}

export interface LoanProduct {
  id: string;
  icon: string;
  title: string;
  tagline: string;
  amount: string;
  rate: string;
}

export interface Offer {
  id: string;
  badge: string;
  category: string;
  title: string;
  description: string;
  validTill: string;
  code: string;
  cta: string;
}

export interface Step {
  id: string;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Faq {
  id: string;
  question: string;
  answer: string;
}

export interface RechargeCategory {
  id: string;
  icon: string;
  title: string;
  short: string;
  description: string;
  providerLabel?: string;
  providers?: string[];
  fieldLabel?: string;
  hint?: string;
  validate?: { min: number; max: number; digits?: boolean };
  extraField?: { label: string; placeholder: string };
  button?: string;
  steps: string[];
  offer: { title: string; code?: string };
}

export interface Payment {
  id: string;
  icon: string;
  title: string;
  meta: string;
  date: string;
  amount: string;
  status: 'success' | 'pending';
}

interface Range {
  min: number;
  max: number;
  step?: number;
  def: number;
}

export interface LoanDetail {
  id: string;
  title: string;
  headline: string;
  intro: string;
  facts: { label: string; value: string }[];
  about: string[];
  eligibility: string[];
  documents: { group: string; items: string[] }[];
  benefits: { icon: string; title: string; text: string }[];
  calc: { amount: Range; rate: Range; tenure: Range; unit: 'months'; flat?: boolean };
  process: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  cta: string;
}
