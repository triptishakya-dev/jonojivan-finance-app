import { calcEmi } from '../src/utils/emi';
import { checkEligibility } from '../src/utils/eligibility';
import { isMobile, isPin, lengthBetween } from '../src/utils/validators';

test('personal EMI matches the live site (₹2,00,000 @ 12% / 24 mo)', () => {
  const r = calcEmi(200000, 12, 24);
  expect(r.emi).toBe(9415);
  expect(r.interest).toBe(25960);
  expect(r.total).toBe(225960);
});

test('business EMI matches the live site (₹5,00,000 @ 15% / 24 mo)', () => {
  const r = calcEmi(500000, 15, 24);
  expect(r.emi).toBe(24243);
  expect(r.interest).toBe(81832);
});

test('micro flat interest matches the live site (₹5,000 @ 8% / 3 mo)', () => {
  const r = calcEmi(5000, 8, 3, true);
  expect(r.emi).toBe(1700);
  expect(r.total).toBe(5100);
});

test('validators', () => {
  expect(isMobile('9876543210')).toBe(true);
  expect(isMobile('1234567890')).toBe(false);
  expect(isPin('560001')).toBe(true);
  expect(lengthBetween(6, 14, true)('123456')).toBe(true);
  expect(lengthBetween(6, 14, true)('12ab')).toBe(false);
});

test('eligibility', () => {
  expect(checkEligibility({ income: 60000, employment: 'salaried', amount: 200000, existingEmi: 0, age: 30 }).eligible).toBe(true);
  expect(checkEligibility({ income: 10000, employment: 'salaried', amount: 100000, existingEmi: 0, age: 30 }).eligible).toBe(false);
});
