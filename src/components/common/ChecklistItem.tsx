import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../theme';
import { AppText } from '../ui';

export function ChecklistItem({ text, icon = '✓' }: { text: string; icon?: string }) {
  return (
    <View style={styles.row}>
      <View style={styles.tick}>
        <AppText size="xs" weight="bold" color={colors.success}>
          {icon}
        </AppText>
      </View>
      <AppText size="sm" color={colors.textSecondary} style={styles.flex}>
        {text}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 10, alignItems: 'flex-start' },
  flex: { flex: 1, lineHeight: 20 },
  tick: { width: 20, height: 20, borderRadius: 10, backgroundColor: colors.tileGreen, alignItems: 'center', justifyContent: 'center', marginTop: 1 },
});
