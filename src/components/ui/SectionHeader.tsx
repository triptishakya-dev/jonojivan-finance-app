import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { colors } from '../../theme';
import { AppText } from './AppText';

interface Props {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  actionLabel?: string;
  onActionPress?: () => void;
  light?: boolean;
}

export function SectionHeader({ title, subtitle, eyebrow, actionLabel, onActionPress, light }: Props) {
  return (
    <View style={styles.row}>
      <View style={styles.text}>
        {eyebrow && (
          <AppText size="xs" weight="bold" color={colors.primary} style={styles.eyebrow}>
            {eyebrow}
          </AppText>
        )}
        <AppText size="2xl" weight="bold" color={light ? colors.white : colors.text}>
          {title}
        </AppText>
        {subtitle && (
          <AppText size="sm" color={colors.textSecondary} style={styles.sub}>
            {subtitle}
          </AppText>
        )}
      </View>
      {actionLabel && (
        <Pressable onPress={onActionPress} hitSlop={8}>
          <AppText size="sm" weight="semibold" color={colors.primary}>
            {actionLabel}
          </AppText>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 },
  text: { flex: 1 },
  eyebrow: { letterSpacing: 1.2, marginBottom: 6 },
  sub: { marginTop: 6, lineHeight: 20 },
});
