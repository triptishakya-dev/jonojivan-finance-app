import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../theme';
import { AppText } from './AppText';

export function ProgressDots({ total, current }: { total: number; current: number }) {
  return (
    <View style={styles.row}>
      {Array.from({ length: total }, (_, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <React.Fragment key={i}>
            <View style={[styles.dot, (done || active) && styles.on]}>
              <AppText size="xs" weight="bold" color={done || active ? colors.white : colors.textMuted}>
                {done ? '✓' : i + 1}
              </AppText>
            </View>
            {i < total - 1 && <View style={[styles.line, done && styles.lineOn]} />}
          </React.Fragment>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center' },
  dot: { width: 30, height: 30, borderRadius: 15, backgroundColor: colors.border, alignItems: 'center', justifyContent: 'center' },
  on: { backgroundColor: colors.primary },
  line: { flex: 1, height: 2, backgroundColor: colors.border },
  lineOn: { backgroundColor: colors.primary },
});
