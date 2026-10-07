import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SectionHeader } from '../../components/ui';
import { ServiceGrid } from '../../components/common/ServiceGrid';
import { billServices } from '../../data/services';
import { ServiceItem } from '../../types';
import { QuickRecharge } from './QuickRecharge';

interface Props {
  onServicePress?: (item: ServiceItem) => void;
  onAllServices?: () => void;
  onViewPlans?: (mobile: string) => void;
}

export function BillsSection({ onServicePress, onAllServices, onViewPlans }: Props) {
  return (
    <View style={styles.wrap}>
      <SectionHeader
        title="Recharge & Pay Bills"
        subtitle="Every operator and biller, one consistent experience."
        actionLabel="All services →"
        onActionPress={onAllServices}
      />
      <QuickRecharge onViewPlans={onViewPlans} />
      <ServiceGrid items={billServices} columns={3} onPress={onServicePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { paddingHorizontal: 16, paddingTop: 32, gap: 20 },
});
