import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PageHero, Screen } from '../components/layout';
import { ServiceGrid } from '../components/common/ServiceGrid';
import { billServices } from '../data/services';
import { QuickRecharge } from '../features/home/QuickRecharge';
import { OperatorLogos, RecentPayments } from '../features/recharge';
import { useAppNavigation } from '../navigation/useAppNavigation';

export function RechargeScreen() {
  const { openCategory } = useAppNavigation();
  return (
    <Screen>
      <PageHero icon="⚡" title="Recharge & Pay Bills" subtitle="Every operator and biller in one place — fast, simple and secure." />
      <View style={styles.body}>
        <ServiceGrid items={billServices} columns={3} onPress={s => openCategory(s.id)} />
        <QuickRecharge onViewPlans={mobile => openCategory('mobile', mobile)} />
        <RecentPayments />
        <OperatorLogos />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  body: { padding: 16, gap: 28 },
});
