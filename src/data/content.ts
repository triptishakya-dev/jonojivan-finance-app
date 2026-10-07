import { Faq, Stat, Step } from '../types';

export const steps: Step[] = [
  { id: '01', title: 'Check Eligibility', description: 'Answer a few questions to see how much you could borrow.' },
  { id: '02', title: 'Apply Online', description: 'Fill a short step-by-step application form.' },
  { id: '03', title: 'Submit Documents', description: 'Upload KYC and income proof securely.' },
  { id: '04', title: 'Verification', description: 'Our team reviews and verifies your details.' },
  { id: '05', title: 'Loan Processing', description: 'On approval, funds are processed to your bank account.' },
];

export const stats: Stat[] = [
  { value: '9+', label: 'Bill & recharge categories' },
  { value: '100+', label: 'Operators & billers' },
  { value: '₹25L', label: 'Personal loans up to' },
  { value: '24×7', label: 'Recharge availability' },
];

export const faqs: Faq[] = [
  { id: '1', question: 'How can I recharge my mobile?', answer: 'Enter your mobile number, choose your operator and a plan, then pay securely using UPI, card or net banking.' },
  { id: '2', question: 'Which mobile operators are supported?', answer: 'We support all major prepaid and postpaid operators across India.' },
  { id: '3', question: 'Which DTH providers are supported?', answer: 'All leading DTH operators are supported. Pick your provider and enter your subscriber ID.' },
  { id: '4', question: 'My recharge failed but money was deducted. What now?', answer: 'Failed transactions are auto-refunded to the source account, usually within 3–5 working days. Contact support if it takes longer.' },
  { id: '5', question: 'How do I apply for a loan?', answer: 'Check your eligibility, fill the short online application, upload your documents and our team will verify and process it.' },
];
