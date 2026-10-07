export interface EmiResult {
  emi: number;
  principal: number;
  interest: number;
  total: number;
}

/**
 * Reducing-balance EMI (default). With `flat` (micro loans on the live site) interest is
 * simple: principal × rate × months/12, split equally across the months.
 */
export function calcEmi(principal: number, annualRate: number, months: number, flat = false): EmiResult {
  const n = Math.max(1, Math.round(months));
  let total: number;
  if (flat) {
    total = principal + (principal * annualRate * (months / 12)) / 100;
  } else {
    const r = annualRate / 12 / 100;
    const emi = r === 0 ? principal / n : (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    total = emi * n;
  }
  // The live site rounds the EMI first and derives the totals from it.
  const emi = Math.round(total / n);
  return { emi, principal, interest: emi * n - principal, total: emi * n };
}
