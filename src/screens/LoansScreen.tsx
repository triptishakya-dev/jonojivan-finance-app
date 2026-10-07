import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PageHero, Screen } from '../components/layout';
import { AppText, Button, Card, IconTile } from '../components/ui';
import { colors } from '../theme';
import { loanProducts } from '../data/loans';
import { steps } from '../data/content';
import { whyBorrow } from '../data/loanDetails';
import { BenefitsGrid, LoanCard, ProcessSteps } from '../features/loans';
import { useAppNavigation } from '../navigation/useAppNavigation';

export function LoansScreen() {
  const { openApply, openEligibility, openEmi, openLoan } = useAppNavigation();
  return (
    <Screen>
      <PageHero
        eyebrow="LOANS"
        title="Find the Right Loan for Your Needs"
        subtitle="Simple application, quick processing and transparent information — all online.">
        <Button label="Apply for Loan" variant="white" onPress={() => openApply()} />
        <Button label="Check Eligibility" variant="green" onPress={openEligibility} />
      </PageHero>
      <View style={styles.body}>
        {loanProducts.map(l => (
          <LoanCard key={l.id} loan={l} onPress={() => openLoan(l.id)} />
        ))}
        <BenefitsGrid title="Why borrow with Jonojivan" items={whyBorrow} />
        <ProcessSteps title="From eligibility to processing" steps={steps.map(s => ({ title: s.title, text: s.description }))} />
        <View style={styles.pair}>
          <Card style={styles.mini}>
            <IconTile icon="📄" tone="purple" size={48} />
            <AppText weight="bold" onPress={openEligibility}>
              Check Eligibility
            </AppText>
            <AppText size="xs" color={colors.textMuted}>
              Know how much you can borrow — no impact on credit score.
            </AppText>
          </Card>
          <Card style={styles.mini}>
            <IconTile icon="🧮" tone="amber" size={48} />
            <AppText weight="bold" onPress={openEmi}>
              EMI Calculator
            </AppText>
            <AppText size="xs" color={colors.textMuted}>
              Plan your monthly budget before you apply.
            </AppText>
          </Card>
        </View>
        <Card style={styles.cta}>
          <AppText size="xl" weight="bold">
            Start your application in minutes
          </AppText>
          <AppText color={colors.textSecondary}>A short, guided form you can complete on your phone.</AppText>
          <Button label="Apply Now" onPress={() => openApply()} />
        </Card>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  body: { padding: 16, gap: 24 },
  pair: { flexDirection: 'row', gap: 12 },
  mini: { flex: 1, gap: 8, padding: 16 },
  cta: { gap: 10, padding: 20 },
});
