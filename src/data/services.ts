import { ServiceItem } from '../types';

export const quickActions: ServiceItem[] = [
  { id: 'recharge', icon: '📱', title: 'Recharge', subtitle: 'Mobile & DTH', tone: 'green' },
  { id: 'loan', icon: '💰', title: 'Apply Loan', subtitle: 'Personal & business', tone: 'blue' },
  { id: 'emi', icon: '🧮', title: 'EMI Calc', subtitle: 'Plan your EMI', tone: 'amber' },
  { id: 'eligibility', icon: '📄', title: 'Eligibility', subtitle: 'Check in 1 min', tone: 'purple' },
];

export const billServices: ServiceItem[] = [
  { id: 'mobile', icon: '📱', title: 'Mobile', subtitle: 'Prepaid & postpaid', tone: 'green' },
  { id: 'dth', icon: '📺', title: 'DTH', subtitle: 'All DTH operators', tone: 'purple' },
  { id: 'electricity', icon: '⚡', title: 'Electricity', subtitle: 'Pay power bills', tone: 'amber' },
  { id: 'broadband', icon: '🌐', title: 'Broadband', subtitle: 'Fibre & internet', tone: 'sky' },
  { id: 'fastag', icon: '🛣️', title: 'FASTag', subtitle: 'Top up your tag', tone: 'rose' },
  { id: 'gas', icon: '🔥', title: 'Gas', subtitle: 'Piped gas bills', tone: 'amber' },
  { id: 'water', icon: '💧', title: 'Water', subtitle: 'Municipal water', tone: 'sky' },
  { id: 'landline', icon: '📞', title: 'Landline', subtitle: 'Fixed-line bills', tone: 'blue' },
  { id: 'insurance', icon: '🛡️', title: 'Insurance', subtitle: 'Premium payments', tone: 'green' },
];

export const popularPlans = ['₹299', '₹349', '₹399'];
