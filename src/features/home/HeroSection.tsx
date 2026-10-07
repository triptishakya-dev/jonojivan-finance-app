import React from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors, gradients } from '../../theme';
import { AppText, Badge, Button } from '../../components/ui';
import { ServiceGrid } from '../../components/common/ServiceGrid';
import { quickActions } from '../../data/services';
import { ServiceItem } from '../../types';

interface Props {
  onApplyLoan?: () => void;
  onRecharge?: () => void;
  onActionPress?: (item: ServiceItem) => void;
}


export function HeroSection({ onApplyLoan, onRecharge, onActionPress }: Props) {
  return (
    <View>
      <LinearGradient
        colors={[...gradients.hero]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.hero}>
        <View style={styles.circle} />
        <Badge label="Loans · Recharge · Bill Payments" tone="glass" dot />
        <AppText weight="bold" color={colors.white} style={styles.title}>
          Loans Made Simple.
        </AppText>
        <AppText weight="bold" color={colors.mint} style={styles.title}>
          Recharge Made Easy.
        </AppText>
        <AppText size="lg" color={colors.whiteSoft} style={styles.sub}>
          Apply for loans, recharge your mobile and pay your everyday bills from one simple platform.
        </AppText>
        <View style={styles.ctas}>
          <Button label="Apply for Loan" variant="white" onPress={onApplyLoan} />
          <Button label="Recharge Now" variant="green" onPress={onRecharge} />
        </View>
      </LinearGradient>
      <View style={styles.actions}>
        <ServiceGrid items={quickActions} columns={2} onPress={onActionPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: { paddingHorizontal: 16, paddingTop: 28, paddingBottom: 110, overflow: 'hidden' },
  circle: {
    position: 'absolute',
    right: -120,
    top: -60,
    width: 360,
    height: 360,
    borderRadius: 180,
    backgroundColor: 'rgba(255,255,255,0.06)',
  },
  title: { fontSize: 36, lineHeight: 44, letterSpacing: -0.8, marginTop: 0 },
  sub: { marginTop: 16, lineHeight: 28 },
  ctas: { marginTop: 28, gap: 14 },
  actions: { marginTop: -84, paddingHorizontal: 16 },
});
