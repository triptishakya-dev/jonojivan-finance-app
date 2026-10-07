import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../theme';
import { AppText, Card } from '../../components/ui';
import { stats } from '../../data/content';

export function StatsSection() {
  return (
    <View style={styles.wrap}>
      {stats.map(s => (
        <Card key={s.label} style={styles.card}>
          <AppText size="3xl" weight="bold" color={colors.primary}>
            {s.value}
          </AppText>
          <AppText size="xs" color={colors.textMuted} style={styles.label}>
            {s.label}
          </AppText>
        </Card>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, paddingHorizontal: 16, paddingTop: 40 },
  card: { width: '48%', flexGrow: 1, padding: 16, alignItems: 'center' },
  label: { marginTop: 4, textAlign: 'center' },
});
