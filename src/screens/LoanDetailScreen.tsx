import React from 'react';
import { StyleSheet, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PageHero, Screen } from '../components/layout';
import { BackLink } from '../components/common/BackLink';
import { Accordion, AppText, Button, SectionHeader } from '../components/ui';
import { getLoanDetail } from '../data/loanDetails';
import {
  AboutSection,
  BenefitsGrid,
  DocumentsList,
  EligibilityList,
  EmiCalculator,
  LoanFacts,
  ProcessSteps,
} from '../features/loans';
import { RootStackParamList } from '../navigation/types';
import { useAppNavigation } from '../navigation/useAppNavigation';
import { colors } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'LoanDetail'>;

export function LoanDetailScreen({ route }: Props) {
  const { goBack, openApply, openEligibility } = useAppNavigation();
  const loan = getLoanDetail(route.params.id);
  if (!loan) return null;
  const apply = () => openApply(loan.id);

  return (
    <Screen>
      <PageHero eyebrow={`LOANS / ${loan.title.toUpperCase()}`} title={loan.headline} subtitle={loan.intro}>
        <Button label="Apply Now" variant="white" onPress={apply} />
        <Button label="Check Eligibility" variant="green" onPress={openEligibility} />
      </PageHero>
      <View style={styles.body}>
        <BackLink label="Loans" onPress={goBack} />
        <LoanFacts facts={loan.facts} />
        <AboutSection title={`What is a ${loan.title}?`} paragraphs={loan.about} />
        <EligibilityList items={loan.eligibility} onCheck={openEligibility} />
        <DocumentsList groups={loan.documents} />
        <BenefitsGrid items={loan.benefits} />
        <View style={styles.gap}>
          <View>
            <AppText size="xl" weight="bold">
              EMI Calculator
            </AppText>
            <AppText size="sm" color={colors.textSecondary}>
              Adjust amount, rate and tenure to plan your monthly budget.
            </AppText>
          </View>
          <EmiCalculator config={loan.calc} onApply={apply} />
        </View>
        <ProcessSteps title="Application process" steps={loan.process} />
        <View style={styles.gap}>
          <SectionHeader title={`${loan.title} FAQs`} />
          {loan.faqs.map(f => (
            <Accordion key={f.q} title={f.q}>
              {f.a}
            </Accordion>
          ))}
        </View>
        <View style={styles.cta}>
          <AppText size="xl" weight="bold" color={colors.white}>
            {loan.cta}
          </AppText>
          <AppText color={colors.whiteSoft}>A simple step-by-step application. Takes about 5 minutes.</AppText>
          <Button label="Apply Now" variant="white" onPress={apply} />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  body: { padding: 16, gap: 28 },
  gap: { gap: 12 },
  cta: { backgroundColor: colors.primary, borderRadius: 24, padding: 24, gap: 10 },
});
