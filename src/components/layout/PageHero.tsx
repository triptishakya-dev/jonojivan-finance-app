import React from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors, gradients } from '../../theme';
import { AppText } from '../ui';

interface Props {
  icon?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

/** Blue gradient page header used by the Recharge and Loans landing pages. */
export function PageHero({ icon, eyebrow, title, subtitle, children }: Props) {
  return (
    <LinearGradient colors={[...gradients.hero]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.box}>
      {icon && <AppText size="3xl">{icon}</AppText>}
      {eyebrow && (
        <AppText size="xs" weight="bold" color={colors.mint} style={styles.eyebrow}>
          {eyebrow}
        </AppText>
      )}
      <AppText size="3xl" weight="bold" color={colors.white} style={styles.title}>
        {title}
      </AppText>
      {subtitle && (
        <AppText color={colors.whiteSoft} style={styles.sub}>
          {subtitle}
        </AppText>
      )}
      {children && <View style={styles.children}>{children}</View>}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  box: { paddingHorizontal: 16, paddingTop: 24, paddingBottom: 28, gap: 6 },
  eyebrow: { letterSpacing: 1.2 },
  title: { lineHeight: 38, letterSpacing: -0.5 },
  sub: { lineHeight: 24, marginTop: 4 },
  children: { marginTop: 16, gap: 12 },
});
