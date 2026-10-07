import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { colors, radius } from '../../theme';
import { AppText } from './AppText';

interface Props {
  label: string;
  tone?: 'glass' | 'soft' | 'success';
  dot?: boolean;
  style?: ViewStyle;
}

export function Badge({ label, tone = 'soft', dot, style }: Props) {
  const isGlass = tone === 'glass';
  const bg = isGlass ? colors.whiteGlass : tone === 'success' ? colors.tileGreen : colors.primaryTint;
  const fg = isGlass ? colors.white : tone === 'success' ? colors.success : colors.primary;
  return (
    <View
      style={[
        styles.badge,
        { backgroundColor: bg },
        isGlass && styles.glassBorder,
        style,
      ]}>
      {dot && <View style={styles.dot} />}
      <AppText size="xs" weight="semibold" color={fg}>
        {label}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: radius.pill,
    gap: 8,
  },
  glassBorder: { borderWidth: 1, borderColor: 'rgba(255,255,255,0.2)' },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: colors.mint },
});
