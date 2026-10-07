import React from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors, gradients } from '../../theme';
import { AppText, Button, SectionHeader } from '../../components/ui';
import { loanProducts } from '../../data/loans';
import { LoanCard } from '../loans/LoanCard';
import { LoanProduct } from '../../types';

interface Props {
  onLoanPress?: (loan: LoanProduct) => void;
  onExplore?: () => void;
  onEligibility?: () => void;
  onEmi?: () => void;
}

export function LoansSection({ onLoanPress, onExplore, onEligibility, onEmi }: Props) {
  return (
    <View style={styles.wrap}>
      <SectionHeader
        eyebrow="LOANS"
        title="Find the Right Loan for Your Needs"
        subtitle="Transparent rates, flexible tenures and a fully digital application."
        actionLabel="Explore loans →"
        onActionPress={onExplore}
      />
      {loanProducts.map(loan => (
        <LoanCard key={loan.id} loan={loan} onPress={onLoanPress} />
      ))}
      <LinearGradient colors={[...gradients.hero]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.plan}>
        <AppText size="2xl">🧮</AppText>
        <AppText size="xl" weight="bold" color={colors.white}>
          Plan before you borrow
        </AppText>
        <AppText size="sm" color={colors.whiteSoft}>
          Check your eligibility and estimate your EMI in under a minute.
        </AppText>
        <View style={styles.planBtns}>
          <Button label="Check Eligibility" variant="white" onPress={onEligibility} style={styles.flex} />
          <Button label="EMI Calculator" variant="green" onPress={onEmi} style={styles.flex} />
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { paddingHorizontal: 16, paddingTop: 40, gap: 16 },
  flex: { flex: 1 },
  plan: { borderRadius: 24, padding: 24, gap: 8 },
  planBtns: { flexDirection: 'row', gap: 10, marginTop: 12 },
});
