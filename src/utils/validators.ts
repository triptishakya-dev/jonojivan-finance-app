export const isMobile = (v: string) => /^[6-9]\d{9}$/.test(v);
export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
export const isPin = (v: string) => /^\d{6}$/.test(v);
export const digitsOnly = (v: string) => v.replace(/\D/g, '');

/** Builds a validator from a "min–max alphanumerics/digits" rule. */
export const lengthBetween = (min: number, max: number, digits = false) => (v: string) => {
  const re = digits ? /^\d+$/ : /^[A-Za-z0-9]+$/;
  return re.test(v) && v.length >= min && v.length <= max;
};
