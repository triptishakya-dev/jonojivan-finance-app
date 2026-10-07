export type EmploymentType = 'salaried' | 'professional' | 'business';

export interface EligibilityInput {
  income: number;
  employment: EmploymentType;
  amount: number;
  existingEmi: number;
  age: number;
}

export interface EligibilityResult {
  eligible: boolean;
  maxAmount: number;
  reason?: string;
}

const FOIR: Record<EmploymentType, number> = { salaried: 0.5, professional: 0.45, business: 0.4 };

/** Rough local estimate: max affordable EMI × 36-month, ~12% factor. Demo only. */
export function checkEligibility(i: EligibilityInput): EligibilityResult {
  if (i.age < 21 || i.age > 60) return { eligible: false, maxAmount: 0, reason: 'Age must be between 21 and 60 years.' };
  if (i.income < 20000) return { eligible: false, maxAmount: 0, reason: 'Minimum monthly income is ₹20,000.' };
  const room = i.income * FOIR[i.employment] - i.existingEmi;
  if (room <= 0) return { eligible: false, maxAmount: 0, reason: 'Your existing EMIs are too high for new credit.' };
  const maxAmount = Math.min(2500000, Math.floor((room * 30) / 1000) * 1000);
  if (maxAmount < 50000) return { eligible: false, maxAmount, reason: 'Estimated eligible amount is below ₹50,000.' };
  return {
    eligible: i.amount <= maxAmount,
    maxAmount,
    reason: i.amount <= maxAmount ? undefined : 'Requested amount is above your estimated limit.',
  };
}
