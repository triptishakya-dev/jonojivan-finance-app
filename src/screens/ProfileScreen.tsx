import React from 'react';
import { Linking, Pressable, StyleSheet, View } from 'react-native';
import { Screen } from '../components/layout';
import { AppText, Button, Card, IconTile } from '../components/ui';
import { useAppNavigation } from '../navigation/useAppNavigation';
import { colors } from '../theme';

const PHONE = '9435266783';
const EMAIL = 'support@jonojivan.in';

export function ProfileScreen() {
  const { openRecharge, openLoans, openEmi, openEligibility, openLogin, openRegister } = useAppNavigation();

  const items = [
    { icon: '📱', title: 'Recharge & Bills', onPress: openRecharge },
    { icon: '💰', title: 'Loans', onPress: openLoans },
    { icon: '🧮', title: 'EMI Calculator', onPress: openEmi },
    { icon: '📄', title: 'Check Eligibility', onPress: openEligibility },
    { icon: '📞', title: `Call us · +91 ${PHONE}`, onPress: () => Linking.openURL(`tel:${PHONE}`) },
    { icon: '✉️', title: `Email · ${EMAIL}`, onPress: () => Linking.openURL(`mailto:${EMAIL}`) },
  ];

  return (
    <Screen>
      <View style={styles.body}>
        <Card style={styles.head}>
          <View style={styles.avatar}>
            <AppText size="3xl">👤</AppText>
          </View>
          <AppText size="xl" weight="bold">
            Welcome, Guest
          </AppText>
          <AppText size="sm" color={colors.textMuted} style={styles.center}>
            Log in to track your recharges and loan applications.
          </AppText>
          <View style={styles.btns}>
            <Button label="Login" onPress={openLogin} style={styles.flex} />
            <Button label="Register" variant="outline" onPress={openRegister} style={styles.flex} />
          </View>
        </Card>

        <Card style={styles.list}>
          {items.map((it, i) => (
            <Pressable key={it.title} onPress={it.onPress} style={[styles.row, i > 0 && styles.divider]}>
              <IconTile icon={it.icon} tone="blue" size={40} />
              <AppText weight="medium" style={styles.flex}>
                {it.title}
              </AppText>
              <AppText color={colors.textMuted}>›</AppText>
            </Pressable>
          ))}
        </Card>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  body: { padding: 16, gap: 16 },
  head: { alignItems: 'center', gap: 8, padding: 24 },
  avatar: { width: 80, height: 80, borderRadius: 40, backgroundColor: colors.primaryTint, alignItems: 'center', justifyContent: 'center' },
  center: { textAlign: 'center' },
  btns: { flexDirection: 'row', gap: 12, marginTop: 8 },
  flex: { flex: 1 },
  list: { padding: 4 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, padding: 12 },
  divider: { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: colors.border },
});
