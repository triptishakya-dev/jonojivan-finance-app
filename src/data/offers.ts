import { Offer } from '../types';

export const offers: Offer[] = [
  { id: 'first30', badge: '₹30 OFF', category: 'Recharge', title: 'Flat ₹30 off on your first recharge', description: 'Valid on prepaid mobile recharges of ₹199 and above for new users.', validTill: '31 Dec 2026', code: 'JJFIRST30', cta: 'Recharge Now' },
  { id: 'power5', badge: '5% BACK', category: 'Cashback', title: '5% cashback on electricity bills', description: 'Get up to ₹75 cashback when you pay your electricity bill using UPI.', validTill: '30 Nov 2026', code: 'POWER5', cta: 'Pay Bill' },
  { id: 'dth50', badge: '₹50 BACK', category: 'Cashback', title: '₹50 cashback on DTH recharge', description: 'Recharge any DTH account for ₹300 or more and get ₹50 cashback.', validTill: '31 Oct 2026', code: 'DTH50', cta: 'Recharge DTH' },
];
