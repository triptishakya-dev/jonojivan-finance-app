import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Svg, { Circle, Path, Rect } from 'react-native-svg';
import { colors, fonts } from '../theme';
import { HomeScreen } from '../screens/HomeScreen';
import { RechargeScreen } from '../screens/RechargeScreen';
import { LoansScreen } from '../screens/LoansScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { TabParamList } from './types';

const Tab = createBottomTabNavigator<TabParamList>();

const stroke = { strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none' } as const;

function TabIcon({ name, color }: { name: keyof TabParamList; color: string }) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" stroke={color}>
      {name === 'Home' && <Path d="M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z" {...stroke} />}
      {name === 'Recharge' && (
        <>
          <Rect x={7} y={2} width={10} height={20} rx={2} {...stroke} />
          <Path d="M11 18h2" {...stroke} />
        </>
      )}
      {name === 'Loans' && (
        <>
          <Circle cx={12} cy={12} r={10} {...stroke} />
          <Path d="M8 8h8M8 12h8M10 8c3 0 4 2 0 4l4 4" {...stroke} />
        </>
      )}
      {name === 'Profile' && (
        <>
          <Circle cx={12} cy={8} r={4} {...stroke} />
          <Path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" {...stroke} />
        </>
      )}
    </Svg>
  );
}

export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarLabelStyle: { fontFamily: fonts.medium, fontSize: 12 },
        tabBarStyle: { backgroundColor: colors.white, borderTopColor: colors.border, height: 64, paddingTop: 6, paddingBottom: 8 },
        tabBarIcon: ({ color }) => <TabIcon name={route.name} color={color} />,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Recharge" component={RechargeScreen} />
      <Tab.Screen name="Loans" component={LoansScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
