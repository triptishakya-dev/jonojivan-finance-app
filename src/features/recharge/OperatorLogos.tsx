import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../theme';
import { AppText, Card, SectionHeader } from '../../components/ui';
import { operatorLogos } from '../../data/recharge';

export function OperatorLogos() {
  return (
    <View style={styles.wrap}>
      <SectionHeader title="Supported mobile operators" subtitle="Prepaid and postpaid across all telecom circles." />
      <View style={styles.row}>
        {operatorLogos.map(o => (
          <Card key={o.name} style={styles.item}>
            <View style={styles.badge}>
              <AppText size="sm" weight="bold" color={colors.primary}>
                {o.short}
              </AppText>
            </View>
            <AppText size="xs" weight="medium" color={colors.textSecondary}>
              {o.name}
            </AppText>
          </Card>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: 16 },
  row: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  item: { width: '30%', flexGrow: 1, alignItems: 'center', padding: 12, gap: 6 },
  badge: { width: 44, height: 44, borderRadius: 22, backgroundColor: colors.primaryTint, alignItems: 'center', justifyContent: 'center' },
});
