import { LoanDetail } from '../types';

export const loanDetails: LoanDetail[] = [
  {
    id: 'personal',
    title: 'Personal Loan',
    headline: 'Personal Loans for Life’s Moments',
    intro: 'Weddings, travel, medical needs or home upgrades — get a collateral-free personal loan with a simple digital application.',
    facts: [
      { label: 'Loan amount', value: '₹50,000 – ₹25 Lakh' },
      { label: 'Tenure', value: '12 – 60 months' },
      { label: 'Interest from', value: '10.99% p.a.' },
      { label: 'Processing fee', value: 'Up to 2%' },
    ],
    about: [
      'A personal loan is an unsecured loan you can use for almost any personal need. No collateral or guarantor is required.',
      'You repay in fixed monthly instalments (EMIs) over a tenure you choose, so planning your budget stays simple.',
    ],
    eligibility: [
      'Indian resident aged 21–60 years',
      'Salaried or self-employed with a stable income',
      'Minimum monthly income of ₹20,000',
      'At least 1 year of total work experience',
      'Healthy credit history (CIBIL 700+ preferred)',
    ],
    documents: [
      { group: 'Identity & address', items: ['PAN card', 'Aadhaar card', 'Passport / Voter ID (optional)'] },
      { group: 'Income proof', items: ['Last 3 months’ salary slips', 'Last 6 months’ bank statement', 'Form 16 / ITR (if applicable)'] },
      { group: 'Others', items: ['Recent passport-size photograph'] },
    ],
    benefits: [
      { icon: '🔓', title: 'No collateral', text: 'Borrow without pledging any asset.' },
      { icon: '🎯', title: 'Use for any need', text: 'Wedding, travel, medical, education and more.' },
      { icon: '📆', title: 'Flexible tenure', text: 'Repay over 12 to 60 months.' },
      { icon: '📲', title: '100% digital', text: 'Apply, upload and track from your phone.' },
    ],
    calc: { amount: { min: 50000, max: 2500000, step: 10000, def: 200000 }, rate: { min: 8, max: 30, def: 12 }, tenure: { min: 12, max: 60, def: 24 }, unit: 'months' },
    process: [
      { title: 'Check eligibility', text: 'Know your eligible amount in under a minute.' },
      { title: 'Fill the application', text: 'Personal, employment and loan details.' },
      { title: 'Upload documents', text: 'KYC and income proofs.' },
      { title: 'Verification & approval', text: 'We verify your details and share the decision.' },
      { title: 'Disbursal', text: 'Approved amount is processed to your bank account.' },
    ],
    faqs: [
      { q: 'How much personal loan can I get?', a: 'You can apply for ₹50,000 to ₹25 Lakh, subject to your income and credit profile.' },
      { q: 'Do I need a guarantor or collateral?', a: 'No. Personal loans are unsecured, so no collateral or guarantor is needed.' },
      { q: 'Can I prepay my loan?', a: 'Yes, you can prepay or foreclose. Applicable charges are shown before you confirm.' },
      { q: 'How is my EMI calculated?', a: 'EMI depends on the loan amount, interest rate and tenure. Use the calculator above for an estimate.' },
    ],
    cta: 'Apply for a Personal Loan today',
  },
  {
    id: 'business',
    title: 'Business Loan',
    headline: 'Business Loans That Grow With You',
    intro: 'Working capital, inventory, equipment or expansion — fund your business with a simple online application and flexible repayment.',
    facts: [
      { label: 'Loan amount', value: '₹1 Lakh – ₹50 Lakh' },
      { label: 'Tenure', value: '12 – 60 months' },
      { label: 'Interest from', value: '13.99% p.a.' },
      { label: 'Processing fee', value: 'Up to 2.5%' },
    ],
    about: [
      'Business loans help MSMEs, traders, shop owners and self-employed professionals meet working capital and growth needs.',
      'Unsecured options are available for eligible businesses, with tenures designed around your cash flows.',
    ],
    eligibility: [
      'Business owner aged 24–65 years',
      'Business vintage of at least 2 years',
      'Annual turnover of ₹10 Lakh or more',
      'Business must be profitable for the last year',
      'Healthy credit history for business and promoters',
    ],
    documents: [
      { group: 'KYC', items: ['PAN of business & owner', 'Aadhaar of owner', 'Business address proof'] },
      { group: 'Business proof', items: ['GST registration / Udyam certificate', 'Shop & establishment licence'] },
      { group: 'Financials', items: ['Last 12 months’ bank statement', 'Last 2 years’ ITR with P&L and balance sheet'] },
    ],
    benefits: [
      { icon: '💼', title: 'Working capital', text: 'Manage inventory and day-to-day expenses.' },
      { icon: '🏭', title: 'Expand operations', text: 'Buy equipment or open a new location.' },
      { icon: '📆', title: 'Flexible repayment', text: 'Tenures that match your business cycle.' },
      { icon: '📲', title: 'Digital process', text: 'Apply online with minimal paperwork.' },
    ],
    calc: { amount: { min: 100000, max: 5000000, step: 50000, def: 500000 }, rate: { min: 8, max: 30, def: 15 }, tenure: { min: 12, max: 60, def: 24 }, unit: 'months' },
    process: [
      { title: 'Check eligibility', text: 'Share basic business and income details.' },
      { title: 'Fill the application', text: 'Business, owner and requirement details.' },
      { title: 'Upload documents', text: 'KYC, GST and financial statements.' },
      { title: 'Verification & approval', text: 'Business and credit verification.' },
      { title: 'Disbursal', text: 'Approved amount is processed to your business account.' },
    ],
    faqs: [
      { q: 'Who can apply for a business loan?', a: 'MSMEs, traders, shop owners and self-employed professionals meeting the eligibility criteria.' },
      { q: 'Is collateral required?', a: 'Unsecured options are available for eligible businesses.' },
      { q: 'What can I use the loan for?', a: 'Working capital, inventory, equipment purchase or business expansion.' },
      { q: 'How long does approval take?', a: 'Applications are reviewed promptly once documents are submitted.' },
    ],
    cta: 'Apply for a Business Loan today',
  },
  {
    id: 'micro',
    title: 'Micro Finance Loan',
    headline: 'Micro Finance Loans for Immediate Needs',
    intro: 'Need funds urgently? Get a micro finance loan up to ₹5,000 with flexible repayment in 7-90 days. Quick approval and instant disbursement.',
    facts: [
      { label: 'Loan amount', value: '₹500 – ₹5,000' },
      { label: 'Tenure', value: '7 – 90 days' },
      { label: 'Interest from', value: '3% – 9% p.a.' },
      { label: 'Processing fee', value: '5%' },
    ],
    about: [
      'Micro finance loans are designed for quick access to small amounts of funds for immediate personal or business needs.',
      'With a simple application process and fast approval, you can get funds within days.',
    ],
    eligibility: [
      'Indian resident aged 18–60 years',
      'Active bank account',
      'Monthly income of ₹5,000 or more',
      'Valid contact details',
    ],
    documents: [
      { group: 'Identity & address', items: ['Aadhaar card', 'Pan card or Voter ID'] },
      { group: 'Income proof', items: ['Latest 3 months bank statement'] },
      { group: 'Others', items: ['Recent passport-size photograph'] },
    ],
    benefits: [
      { icon: '⚡', title: 'Instant approval', text: 'Get approval in under 24 hours.' },
      { icon: '💳', title: 'No collateral', text: 'Borrow without any security.' },
      { icon: '🚀', title: 'Quick disbursal', text: 'Funds transferred to your account immediately.' },
      { icon: '📱', title: '100% digital', text: 'Apply, approve and track from your phone.' },
    ],
    calc: { amount: { min: 500, max: 5000, step: 500, def: 5000 }, rate: { min: 8, max: 30, def: 8 }, tenure: { min: 1, max: 3, def: 3 }, unit: 'months', flat: true },
    process: [
      { title: 'Quick application', text: 'Fill a simple online form in 2 minutes.' },
      { title: 'Instant verification', text: 'Verification done through your bank details.' },
      { title: 'Approval', text: 'Get approval decision within 24 hours.' },
      { title: 'Disbursal', text: 'Funds are transferred to your bank account.' },
      { title: 'Repay', text: 'Choose flexible repayment between 7-90 days.' },
    ],
    faqs: [
      { q: 'How much micro finance loan can I get?', a: 'You can borrow between ₹500 and ₹5,000.' },
      { q: 'How long does approval take?', a: 'Approval is typically given within 24 hours.' },
      { q: 'Can I extend my loan duration?', a: 'Repayment is flexible between 7 and 90 days. Contact support to discuss an extension.' },
      { q: 'What is the processing fee?', a: 'A flat 5% processing fee applies.' },
    ],
    cta: 'Apply for a Micro Finance Loan today',
  },
];

export const getLoanDetail = (id: string) => loanDetails.find(l => l.id === id);

export const whyBorrow = [
  { icon: '📝', title: 'Simple application', text: 'A short, guided form you can finish on your phone.' },
  { icon: '⚡', title: 'Quick processing', text: 'Applications are reviewed promptly with clear status updates.' },
  { icon: '🔍', title: 'Transparent information', text: 'Rates, fees and EMI shown upfront — no hidden surprises.' },
  { icon: '📆', title: 'Flexible repayment', text: 'Choose a tenure that fits your monthly budget.' },
  { icon: '📲', title: 'Digital application', text: 'Upload documents online, no branch visits needed.' },
];

export const emiFaqs = [
  { q: 'How is EMI calculated?', a: 'EMI = P × r × (1+r)^n / ((1+r)^n − 1), where P is the principal, r the monthly interest rate and n the number of months.' },
  { q: 'Does a longer tenure reduce my EMI?', a: 'Yes, a longer tenure lowers your monthly EMI but increases the total interest you pay.' },
  { q: 'Are these figures final?', a: 'No. They are estimates. The final rate and fees depend on your profile and are confirmed at approval.' },
];

export const applySteps = [
  { id: 'personal', title: 'Personal Information', subtitle: 'Tell us a little about yourself.' },
  { id: 'employment', title: 'Employment Details', subtitle: 'Share your work and income details.' },
  { id: 'loan', title: 'Loan Requirement', subtitle: 'How much do you need, and for how long?' },
  { id: 'address', title: 'Address Details', subtitle: 'Where do you currently live?' },
  { id: 'documents', title: 'Documents', subtitle: 'Upload KYC and income proof.' },
  { id: 'review', title: 'Review & Submit', subtitle: 'Check everything before you submit.' },
];
