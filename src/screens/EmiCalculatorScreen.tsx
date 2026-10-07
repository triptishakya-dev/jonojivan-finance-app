import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Screen } from '../components/layout';
import { BackLink } from '../components/common/BackLink';
import { Accordion, AppText, IconTile, SectionHeader } from '../components/ui';
import { emiFaqs } from '../data/loanDetails';
import { EmiCalculator } from '../features/loans';
import { useAppNavigation } from '../navigation/useAppNavigation';
import { colors } from '../theme';

export function EmiCalculatorScreen() {
  const { goBack, openApply } = useAppNavigation();
  return (
    <Screen>
      <View style={styles.body}>
        <BackLink label="Loans" onPress={goBack} />
        <View style={styles.title}>
          <IconTile icon="🧮" tone="amber" />
          <View style={styles.flex}>
            <AppText size="2xl" weight="bold">
              EMI Calculator
            </AppText>
            <AppText size="sm" color={colors.textSecondary}>
              Move the sliders to see your monthly EMI instantly.
            </AppText>
          </View>
        </View>
        <EmiCalculator onApply={() => openApply()} />
        <SectionHeader title="About EMI" />
        {emiFaqs.map(f => (
          <Accordion key={f.q} title={f.q}>
            {f.a}
          </Accordion>
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  body: { padding: 16, gap: 18 },
  title: { flexDirection: 'row', gap: 14, alignItems: 'center' },
  flex: { flex: 1 },
});
