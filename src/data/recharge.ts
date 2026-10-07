import { Payment } from '../types';

export const recentPayments: Payment[] = [
  { id: '1', icon: '📱', title: 'Mobile Recharge', meta: 'Jio · ••••4321', date: '02 Oct 2026', amount: '₹299', status: 'success' },
  { id: '2', icon: '⚡', title: 'Electricity', meta: 'BESCOM · ••••7890', date: '02 Oct 2026', amount: '₹1,240', status: 'success' },
  { id: '3', icon: '📺', title: 'DTH Recharge', meta: 'Tata Play · ••••6789', date: '01 Oct 2026', amount: '₹449', status: 'pending' },
];

export const mobileOperators = ['Jio', 'Airtel', 'Vi', 'BSNL', 'MTNL'];

export const operatorLogos = [
  { short: 'Jio', name: 'Jio' },
  { short: 'Airt', name: 'Airtel' },
  { short: 'Vi', name: 'Vi' },
  { short: 'BSNL', name: 'BSNL' },
  { short: 'MTNL', name: 'MTNL' },
];

export const circles = [
  'Andhra Pradesh & Telangana', 'Assam', 'Bihar & Jharkhand', 'Chennai', 'Delhi NCR', 'Gujarat', 'Haryana',
  'Himachal Pradesh', 'Jammu & Kashmir', 'Karnataka', 'Kerala', 'Kolkata', 'Madhya Pradesh & Chhattisgarh',
  'Maharashtra & Goa', 'Mumbai', 'North East', 'Odisha', 'Punjab', 'Rajasthan', 'Tamil Nadu',
  'Uttar Pradesh (East)', 'Uttar Pradesh (West)', 'West Bengal',
];

export const mockPlans = [
  { price: 199, validity: '28 days', data: '1.5 GB/day · Unlimited calls' },
  { price: 299, validity: '28 days', data: '2 GB/day · Unlimited calls' },
  { price: 349, validity: '28 days', data: '2.5 GB/day · Unlimited calls' },
  { price: 399, validity: '56 days', data: '2 GB/day · Unlimited calls' },
  { price: 749, validity: '90 days', data: '2 GB/day · Unlimited calls' },
];
