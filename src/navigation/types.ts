import { NavigatorScreenParams } from '@react-navigation/native';

export type TabParamList = {
  Home: undefined;
  Recharge: undefined;
  Loans: undefined;
  Profile: undefined;
};

export type RootStackParamList = {
  Tabs: NavigatorScreenParams<TabParamList> | undefined;
  RechargeCategory: { id: string; mobile?: string };
  LoanDetail: { id: string };
  LoanApply: { loanId?: string } | undefined;
  EmiCalculator: undefined;
  Eligibility: undefined;
  Login: undefined;
  Register: undefined;
};
