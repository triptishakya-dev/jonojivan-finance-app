import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../theme';
import { TabNavigator } from './TabNavigator';
import { RootStackParamList } from './types';
import { RechargeCategoryScreen } from '../screens/RechargeCategoryScreen';
import { LoanDetailScreen } from '../screens/LoanDetailScreen';
import { LoanApplyScreen } from '../screens/LoanApplyScreen';
import { EmiCalculatorScreen } from '../screens/EmiCalculatorScreen';
import { EligibilityScreen } from '../screens/EligibilityScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const theme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: colors.background, primary: colors.primary },
};

export function RootNavigator() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabs" component={TabNavigator} />
        <Stack.Screen name="RechargeCategory" component={RechargeCategoryScreen} />
        <Stack.Screen name="LoanDetail" component={LoanDetailScreen} />
        <Stack.Screen name="LoanApply" component={LoanApplyScreen} />
        <Stack.Screen name="EmiCalculator" component={EmiCalculatorScreen} />
        <Stack.Screen name="Eligibility" component={EligibilityScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
