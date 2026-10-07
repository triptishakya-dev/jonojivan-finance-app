import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, radius } from '../../theme';
import { TileTone } from '../../types';

const toneBg: Record<TileTone, string> = {
  green: colors.tileGreen,
  blue: colors.tileBlue,
  amber: colors.tileAmber,
  purple: colors.tilePurple,
  rose: colors.tileRose,
  sky: colors.tileSky,
};

interface Props {
  icon: string;
  tone?: TileTone;
  size?: number;
}

export function IconTile({ icon, tone = 'blue', size = 56 }: Props) {
  return (
    <View
      style={[
        styles.tile,
        { width: size, height: size, backgroundColor: toneBg[tone] },
      ]}>
      <Text style={{ fontSize: size * 0.46 }}>{icon}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tile: { borderRadius: radius.lg, alignItems: 'center', justifyContent: 'center' },
});
