import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { colors, fonts, radius } from '../../theme';
import { AppText, Badge, Button, Card } from '../../components/ui';
import { popularPlans } from '../../data/services';

interface Props {
  onViewPlans?: (mobile: string) => void;
}

export function QuickRecharge({ onViewPlans }: Props) {
  const [mobile, setMobile] = useState('');
  return (
    <Card style={styles.card}>
      <View style={styles.head}>
        <AppText size="lg" weight="bold">
          Quick Recharge
        </AppText>
        <Badge label="Instant" tone="success" />
      </View>
      <AppText size="sm" weight="medium" color={colors.textSecondary} style={styles.label}>
        Mobile Number
      </AppText>
      <View style={styles.inputRow}>
        <View style={styles.prefix}>
          <AppText weight="semibold" color={colors.textSecondary}>
            +91
          </AppText>
        </View>
        <TextInput
          value={mobile}
          onChangeText={t => setMobile(t.replace(/\D/g, '').slice(0, 10))}
          keyboardType="number-pad"
          maxLength={10}
          placeholder="10-digit number"
          placeholderTextColor={colors.textMuted}
          style={styles.input}
        />
      </View>
      <Button label="View Plans" onPress={() => onViewPlans?.(mobile)} style={styles.btn} />
      <AppText size="xs" weight="semibold" color={colors.textMuted} style={styles.popular}>
        Popular plans
      </AppText>
      <View style={styles.plans}>
        {popularPlans.map(p => (
          <View key={p} style={styles.plan}>
            <AppText weight="semibold" color={colors.primary}>
              {p}
            </AppText>
          </View>
        ))}
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { padding: 20 },
  head: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  label: { marginTop: 16, marginBottom: 8 },
  inputRow: { flexDirection: 'row', gap: 8 },
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
  btn: { marginTop: 16 },
  popular: { marginTop: 20 },
  plans: { flexDirection: 'row', gap: 8, marginTop: 10 },
  plan: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: radius.md,
    backgroundColor: colors.primaryTint,
  },
});
