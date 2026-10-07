import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors, radius } from '../../theme';
import { AppText, Card, IconTile, SectionHeader } from '../../components/ui';
import { recentPayments } from '../../data/recharge';

export function RecentPayments() {
  return (
    <View style={styles.wrap}>
      <SectionHeader title="Recent payments" actionLabel="View all →" />
      {recentPayments.map(p => {
        const ok = p.status === 'success';
        return (
          <Card key={p.id} style={styles.card}>
            <IconTile icon={p.icon} tone="blue" size={48} />
            <View style={styles.flex}>
              <AppText weight="semibold">{p.title}</AppText>
              <AppText size="xs" color={colors.textMuted}>
                {p.meta}
              </AppText>
              <AppText size="xs" color={colors.textMuted}>
                {p.date}
              </AppText>
            </View>
            <View style={styles.right}>
              <AppText weight="bold">{p.amount}</AppText>
              <View style={[styles.chip, { backgroundColor: ok ? colors.tileGreen : colors.tileAmber }]}>
                <AppText size="xs" weight="semibold" color={ok ? colors.success : '#B45309'}>
                  {ok ? '✓ Successful' : '⏳ Pending'}
                </AppText>
              </View>
            </View>
          </Card>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: 12 },
  card: { flexDirection: 'row', alignItems: 'center', gap: 12, padding: 14 },
  flex: { flex: 1 },
  right: { alignItems: 'flex-end', gap: 6 },
  chip: { borderRadius: radius.pill, paddingHorizontal: 8, paddingVertical: 3 },
});
