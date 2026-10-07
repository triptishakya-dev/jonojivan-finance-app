import React from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import { colors, fonts, radius } from '../../theme';
import { AppText } from './AppText';

interface Props extends Omit<TextInputProps, 'style'> {
  label?: string;
  prefix?: string;
  hint?: string;
  error?: string;
}

export function TextField({ label, prefix, hint, error, ...input }: Props) {
  return (
    <View style={styles.wrap}>
      {label && (
        <AppText size="sm" weight="medium" color={colors.textSecondary} style={styles.label}>
          {label}
        </AppText>
      )}
      <View style={styles.row}>
        {prefix && (
          <View style={styles.prefix}>
            <AppText weight="semibold" color={colors.textSecondary}>
              {prefix}
            </AppText>
          </View>
        )}
        <TextInput
          placeholderTextColor={colors.textMuted}
          {...input}
          style={[styles.input, !!error && styles.inputError]}
        />
      </View>
      {error ? (
        <AppText size="xs" color="#DC2626" style={styles.hint}>
          {error}
        </AppText>
      ) : hint ? (
        <AppText size="xs" color={colors.textMuted} style={styles.hint}>
          {hint}
        </AppText>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: 0 },
  label: { marginBottom: 8 },
  row: { flexDirection: 'row', gap: 8 },
  prefix: {
    height: 52,
    paddingHorizontal: 16,
    borderRadius: radius.lg,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    height: 52,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 16,
    fontFamily: fonts.medium,
    fontSize: 16,
    color: colors.text,
    backgroundColor: colors.white,
  },
  inputError: { borderColor: '#DC2626' },
  hint: { marginTop: 6, lineHeight: 17 },
});
