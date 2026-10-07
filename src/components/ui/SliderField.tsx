import React from 'react';
import { StyleSheet, View } from 'react-native';
import Slider from '@react-native-community/slider';
import { colors, radius } from '../../theme';
import { AppText } from './AppText';

interface Props {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (v: number) => void;
  display: (v: number) => string;
  minLabel: string;
  maxLabel: string;
}

export function SliderField({ label, value, min, max, step = 1, onChange, display, minLabel, maxLabel }: Props) {
  return (
    <View style={styles.wrap}>
      <View style={styles.head}>
        <AppText size="sm" weight="medium" color={colors.textSecondary}>
          {label}
        </AppText>
        <View style={styles.pill}>
          <AppText weight="bold" color={colors.primary}>
            {display(value)}
          </AppText>
        </View>
      </View>
      <Slider
        value={value}
        minimumValue={min}
        maximumValue={max}
        step={step}
        onValueChange={onChange}
        minimumTrackTintColor={colors.primary}
        maximumTrackTintColor={colors.border}
        thumbTintColor={colors.primary}
      />
      <View style={styles.ends}>
        <AppText size="xs" color={colors.textMuted}>
          {minLabel}
        </AppText>
        <AppText size="xs" color={colors.textMuted}>
          {maxLabel}
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: 4 },
  head: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
  pill: { backgroundColor: colors.primaryTint, borderRadius: radius.md, paddingHorizontal: 12, paddingVertical: 6 },
  ends: { flexDirection: 'row', justifyContent: 'space-between' },
});
