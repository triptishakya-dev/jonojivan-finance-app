import React, { useState } from 'react';
import { FlatList, Modal, Pressable, StyleSheet, View } from 'react-native';
import { colors, radius } from '../../theme';
import { AppText } from './AppText';

interface Props {
  label?: string;
  placeholder: string;
  options: string[];
  value?: string;
  onChange: (v: string) => void;
  icon?: string;
  error?: string;
}

export function Select({ label, placeholder, options, value, onChange, icon, error }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <View>
      {label && (
        <AppText size="sm" weight="medium" color={colors.textSecondary} style={styles.label}>
          {label}
        </AppText>
      )}
      <Pressable style={[styles.box, !!error && styles.err]} onPress={() => setOpen(true)}>
        <AppText weight={value ? 'medium' : 'regular'} color={value ? colors.text : colors.textMuted} style={styles.flex} numberOfLines={1}>
          {value ?? placeholder}
        </AppText>
        <AppText color={colors.textMuted}>⌄</AppText>
      </Pressable>
      {error && (
        <AppText size="xs" color="#DC2626" style={styles.error}>
          {error}
        </AppText>
      )}
      <Modal visible={open} transparent animationType="slide" onRequestClose={() => setOpen(false)}>
        <Pressable style={styles.backdrop} onPress={() => setOpen(false)} />
        <View style={styles.sheet}>
          <View style={styles.grab} />
          <AppText size="lg" weight="bold" style={styles.title}>
            {label ?? placeholder}
          </AppText>
          <FlatList
            data={options}
            keyExtractor={o => o}
            renderItem={({ item }) => (
              <Pressable
                style={styles.opt}
                onPress={() => {
                  onChange(item);
                  setOpen(false);
                }}>
                {icon && <AppText>{icon}</AppText>}
                <AppText weight={item === value ? 'semibold' : 'regular'} color={item === value ? colors.primary : colors.text} style={styles.flex}>
                  {item}
                </AppText>
                {item === value && <AppText color={colors.primary}>✓</AppText>}
              </Pressable>
            )}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  label: { marginBottom: 8 },
  box: {
    height: 52,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  err: { borderColor: '#DC2626' },
  error: { marginTop: 6 },
  backdrop: { flex: 1, backgroundColor: 'rgba(15,23,42,0.45)' },
  sheet: {
    maxHeight: '70%',
    backgroundColor: colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  grab: { alignSelf: 'center', width: 40, height: 4, borderRadius: 2, backgroundColor: colors.border, marginVertical: 10 },
  title: { marginBottom: 8 },
  opt: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 14, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: colors.border },
});
