import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';

export type AppNavigation = NativeStackNavigationProp<RootStackParamList>;

/** Typed navigation + the shortcuts the Home/Recharge/Loans screens share. */
export function useAppNavigation() {
  const nav = useNavigation<AppNavigation>();
  return {
    nav,
    openRecharge: () => nav.navigate('Tabs', { screen: 'Recharge' }),
    openLoans: () => nav.navigate('Tabs', { screen: 'Loans' }),
    openCategory: (id: string, mobile?: string) => nav.navigate('RechargeCategory', { id, mobile }),
    openLoan: (id: string) => nav.navigate('LoanDetail', { id }),
    openApply: (loanId?: string) => nav.navigate('LoanApply', { loanId }),
    openEmi: () => nav.navigate('EmiCalculator'),
    openEligibility: () => nav.navigate('Eligibility'),
    openLogin: () => nav.navigate('Login'),
    openRegister: () => nav.navigate('Register'),
    goHome: () => nav.navigate('Tabs', { screen: 'Home' }),
    goBack: () => nav.goBack(),
  };
}
