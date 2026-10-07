import React from 'react';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';
import { colors, radius } from '../../theme';
import { AppText } from './AppText';

type Variant = 'white' | 'green' | 'primary' | 'outline' | 'soft';

interface Props {
  label: string;
  onPress?: () => void;
  variant?: Variant;
  style?: ViewStyle;
}

const bg: Record<Variant, string> = {
  white: colors.white,
  green: colors.success,
  primary: colors.primary,
  outline: colors.white,
  soft: colors.primaryTint,
};
const fg: Record<Variant, string> = {
  white: colors.primary,
  green: colors.white,
  primary: colors.white,
  outline: colors.primary,
  soft: colors.primary,
};

export function Button({ label, onPress, variant = 'primary', style }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        { backgroundColor: bg[variant], opacity: pressed ? 0.85 : 1 },
        variant === 'outline' && styles.outline,
        style,
      ]}>
      <AppText weight="semibold" color={fg[variant]}>
        {label}
      </AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    height: 52,
    borderRadius: radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  outline: { borderWidth: 1.5, borderColor: colors.primary },
});
