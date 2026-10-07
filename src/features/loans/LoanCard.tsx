import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { colors } from '../../theme';
import { AppText, Card, IconTile } from '../../components/ui';
import { LoanProduct } from '../../types';

function Row({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.rowItem}>
      <AppText size="xs" color={colors.textMuted}>
        {label}
      </AppText>
      <AppText size="sm" weight="semibold">
        {value}
      </AppText>
    </View>
  );
}

export function LoanCard({ loan, onPress }: { loan: LoanProduct; onPress?: (l: LoanProduct) => void }) {
  return (
    <Card style={styles.loan}>
      <View style={styles.head}>
        <IconTile icon={loan.icon} tone="blue" />
        <View style={styles.flex}>
          <AppText size="lg" weight="bold">
            {loan.title}
          </AppText>
          <AppText size="sm" color={colors.textMuted}>
            {loan.tagline}
          </AppText>
        </View>
      </View>
      <View style={styles.rows}>
        <Row label="Amount" value={loan.amount} />
        <Row label="Interest from" value={loan.rate} />
      </View>
      <Pressable onPress={() => onPress?.(loan)} hitSlop={8}>
        <AppText size="sm" weight="semibold" color={colors.primary}>
          Learn More →
        </AppText>
      </Pressable>
    </Card>
  );
}

const styles = StyleSheet.create({
  loan: { padding: 20, gap: 16 },
  head: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  flex: { flex: 1 },
  rows: { gap: 10 },
  rowItem: { flexDirection: 'row', justifyContent: 'space-between' },
});
