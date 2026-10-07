import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../theme';
import { AppText } from '../ui';

/** Numbered circles ("How it works"). Pass `descriptions` for the two-line variant. */
export function StepList({ steps, descriptions }: { steps: string[]; descriptions?: string[] }) {
  return (
    <View style={styles.list}>
      {steps.map((s, i) => (
        <View key={s} style={styles.row}>
          <View style={styles.num}>
            <AppText size="sm" weight="bold" color={colors.primary}>
              {i + 1}
            </AppText>
          </View>
          <View style={styles.flex}>
            <AppText weight="medium">{s}</AppText>
            {descriptions && (
              <AppText size="sm" color={colors.textSecondary}>
                {descriptions[i]}
              </AppText>
            )}
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  list: { gap: 14 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  flex: { flex: 1 },
  num: { width: 32, height: 32, borderRadius: 16, backgroundColor: colors.primaryTint, alignItems: 'center', justifyContent: 'center' },
});
