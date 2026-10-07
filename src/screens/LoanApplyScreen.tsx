import React from 'react';
import { StyleSheet, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Screen } from '../components/layout';
import { BackLink } from '../components/common/BackLink';
import { AppText, IconTile } from '../components/ui';
import { colors } from '../theme';
import { ApplyWizard } from '../features/loans';
import { RootStackParamList } from '../navigation/types';
import { useAppNavigation } from '../navigation/useAppNavigation';

type Props = NativeStackScreenProps<RootStackParamList, 'LoanApply'>;

const loanNames: Record<string, string> = { personal: 'Personal Loan', business: 'Business Loan', micro: 'Micro Finance Loan' };

export function LoanApplyScreen({ route }: Props) {
  const { goBack, openLoans } = useAppNavigation();
  const preset = route.params?.loanId ? loanNames[route.params.loanId] : undefined;
  return (
    <Screen>
      <View style={styles.body}>
        <BackLink label="Loans" onPress={goBack} />
        <View style={styles.title}>
          <IconTile icon="💰" tone="blue" />
          <View>
            <AppText size="2xl" weight="bold">
              Apply for Loan
            </AppText>
            <AppText size="sm" color={colors.textSecondary}>
              6 short steps · about 5 minutes
            </AppText>
          </View>
        </View>
        <ApplyWizard initial={preset ? { loanType: preset } : {}} onDone={openLoans} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  body: { padding: 16, gap: 20 },
  title: { flexDirection: 'row', gap: 14, alignItems: 'center' },
});
