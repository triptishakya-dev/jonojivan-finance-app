import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Screen } from '../components/layout';
import { BackLink } from '../components/common/BackLink';
import { AppText, IconTile } from '../components/ui';
import { EligibilityForm } from '../features/loans';
import { useAppNavigation } from '../navigation/useAppNavigation';
import { colors } from '../theme';

export function EligibilityScreen() {
  const { goBack, openApply } = useAppNavigation();
  return (
    <Screen>
      <View style={styles.body}>
        <BackLink label="Loans" onPress={goBack} />
        <View style={styles.title}>
          <IconTile icon="📄" tone="purple" />
          <View style={styles.flex}>
            <AppText size="2xl" weight="bold">
              Check Your Eligibility
            </AppText>
            <AppText size="sm" color={colors.textSecondary}>
              Answer 5 quick questions to estimate how much you can borrow.
            </AppText>
          </View>
        </View>
        <EligibilityForm onApply={() => openApply()} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  body: { padding: 16, gap: 18 },
  title: { flexDirection: 'row', gap: 14, alignItems: 'center' },
  flex: { flex: 1 },
});
