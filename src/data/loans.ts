import { LoanProduct } from '../types';

export const loanProducts: LoanProduct[] = [
  { id: 'personal', icon: '💳', title: 'Personal Loan', tagline: 'Quick access to funds', amount: '₹50,000 – ₹25 Lakh', rate: '10.99% p.a.' },
  { id: 'business', icon: '🏪', title: 'Business Loan', tagline: 'Support your business needs', amount: '₹1 Lakh – ₹50 Lakh', rate: '13.99% p.a.' },
  { id: 'micro', icon: '💰', title: 'Micro Finance Loan', tagline: 'Quick funds up to ₹5,000', amount: '₹500 – ₹5,000', rate: '3% p.a.' },
];
