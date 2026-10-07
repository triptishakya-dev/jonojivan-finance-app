import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
import { colors, fonts, fontSize } from '../../theme';

type Weight = keyof typeof fonts;

interface Props extends TextProps {
  weight?: Weight;
  size?: keyof typeof fontSize;
  color?: string;
}

export function AppText({
  weight = 'regular',
  size = 'base',
  color = colors.text,
  style,
  ...rest
}: Props) {
  return (
    <Text
      {...rest}
      style={[styles.base, { fontFamily: fonts[weight], fontSize: fontSize[size], color }, style]}
    />
  );
}

const styles = StyleSheet.create({
  base: { includeFontPadding: false },
});
