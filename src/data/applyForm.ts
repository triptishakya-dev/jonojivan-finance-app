import { isEmail, isMobile, isPin } from '../utils/validators';

export type FieldType = 'text' | 'mobile' | 'email' | 'date' | 'select' | 'number' | 'pin' | 'toggle';

export interface ApplyField {
  key: string;
  label: string;
  type: FieldType;
  options?: string[];
  placeholder?: string;
  hint?: string;
  optional?: boolean;
  error?: string;
}

export interface ApplyStepConfig {
  id: string;
  title: string;
  subtitle: string;
  fields: ApplyField[];
}

/**
 * Step 1 mirrors the live site. Steps 2–6 are our own structure (the live form could not be
 * walked past step 1), following the loan journey: employment → loan → address → documents → review.
 */
export const applyFormSteps: ApplyStepConfig[] = [
  {
    id: 'personal',
    title: 'Personal Information',
    subtitle: 'Tell us a little about yourself.',
    fields: [
      { key: 'name', label: 'Full Name (as per PAN)', type: 'text', placeholder: 'Your full name', error: 'Enter your full name' },
      { key: 'mobile', label: 'Mobile Number', type: 'mobile', error: 'Enter a valid 10-digit mobile number' },
      { key: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com', error: 'Enter a valid email' },
      { key: 'dob', label: 'Date of Birth', type: 'date', placeholder: 'DD/MM/YYYY', error: 'Enter your date of birth' },
      { key: 'gender', label: 'Gender', type: 'select', options: ['Female', 'Male', 'Other'], error: 'Select gender' },
      { key: 'pin', label: 'PIN Code', type: 'pin', error: 'Enter a 6-digit PIN code' },
      { key: 'city', label: 'City', type: 'text', error: 'Enter your city' },
    ],
  },
  {
    id: 'employment',
    title: 'Employment Details',
    subtitle: 'Share your work and income details.',
    fields: [
      { key: 'employment', label: 'Employment Type', type: 'select', options: ['Salaried', 'Self-employed Professional', 'Business Owner'], error: 'Select employment type' },
      { key: 'company', label: 'Company / Business Name', type: 'text', error: 'Enter company or business name' },
      { key: 'income', label: 'Monthly Income (₹)', type: 'number', error: 'Enter your monthly income' },
      { key: 'experience', label: 'Work Experience (years)', type: 'number', error: 'Enter your experience' },
    ],
  },
  {
    id: 'loan',
    title: 'Loan Requirement',
    subtitle: 'How much do you need, and for how long?',
    fields: [
      { key: 'loanType', label: 'Loan Type', type: 'select', options: ['Personal Loan', 'Business Loan', 'Micro Finance Loan'], error: 'Select a loan type' },
      { key: 'amount', label: 'Loan Amount (₹)', type: 'number', error: 'Enter the loan amount' },
      { key: 'tenure', label: 'Tenure (months)', type: 'number', error: 'Enter the tenure' },
      { key: 'purpose', label: 'Purpose', type: 'select', options: ['Wedding', 'Travel', 'Medical', 'Education', 'Home upgrade', 'Business', 'Other'], error: 'Select a purpose' },
    ],
  },
  {
    id: 'address',
    title: 'Address Details',
    subtitle: 'Where do you currently live?',
    fields: [
      { key: 'address', label: 'Address', type: 'text', placeholder: 'House no., street, area', error: 'Enter your address' },
      { key: 'state', label: 'State', type: 'text', error: 'Enter your state' },
      { key: 'residence', label: 'Residence Type', type: 'select', options: ['Owned', 'Rented', 'Family-owned'], error: 'Select residence type' },
    ],
  },
  {
    id: 'documents',
    title: 'Documents',
    subtitle: 'Mark the documents you have ready. You will upload them after submitting.',
    fields: [
      { key: 'docPan', label: 'PAN card', type: 'toggle' },
      { key: 'docAadhaar', label: 'Aadhaar card', type: 'toggle' },
      { key: 'docIncome', label: 'Income proof (salary slips / bank statement)', type: 'toggle', optional: true },
      { key: 'docPhoto', label: 'Passport-size photograph', type: 'toggle', optional: true },
    ],
  },
];

export const reviewStep = { id: 'review', title: 'Review & Submit', subtitle: 'Check everything before you submit.' };

export function validateField(f: ApplyField, v: string | undefined): boolean {
  const val = (v ?? '').trim();
  if (f.type === 'toggle') return f.optional || val === 'yes';
  if (f.optional) return true;
  switch (f.type) {
    case 'mobile':
      return isMobile(val);
    case 'email':
      return isEmail(val);
    case 'pin':
      return isPin(val);
    case 'date':
      return /^\d{2}\/\d{2}\/\d{4}$/.test(val);
    case 'number':
      return +val > 0;
    default:
      return val.length > 1;
  }
}
