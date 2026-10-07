import React from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors, gradients } from '../../theme';
import { AppText, Button } from '../../components/ui';

interface Props {
  onApplyLoan?: () => void;
  onRecharge?: () => void;
}

export function CtaBanner({ onApplyLoan, onRecharge }: Props) {
  return (
    <View style={styles.wrap}>
      <LinearGradient
        colors={[...gradients.hero]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.box}>
        <AppText size="2xl" weight="bold" color={colors.white}>
          Ready to get started?
        </AppText>
        <AppText color={colors.whiteSoft} style={styles.sub}>
          Recharge in seconds or start your loan application today.
        </AppText>
        <View style={styles.btns}>
          <Button label="Apply for Loan" variant="white" onPress={onApplyLoan} />
          <Button label="Recharge Now" variant="green" onPress={onRecharge} />
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { paddingHorizontal: 16, paddingTop: 40 },
  box: { borderRadius: 24, padding: 24 },
  sub: { marginTop: 8, lineHeight: 24 },
  btns: { marginTop: 20, gap: 12 },
});
