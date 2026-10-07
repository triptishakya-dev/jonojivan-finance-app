import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { AppText, Button, TextField } from '../components/ui';
import { AuthLayout, OtpStep } from '../features/auth';
import { useAppNavigation } from '../navigation/useAppNavigation';
import { colors } from '../theme';
import { digitsOnly, isMobile } from '../utils/validators';

export function LoginScreen() {
  const { goHome, openRegister } = useAppNavigation();
  const [mobile, setMobile] = useState('');
  const [tried, setTried] = useState(false);
  const [otp, setOtp] = useState(false);

  const next = () => {
    setTried(true);
    if (isMobile(mobile)) setOtp(true);
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Login with your registered mobile number."
      onBack={goHome}
      footer={
        <AppText size="sm" color={colors.textSecondary} style={styles.center}>
          New to Jonojivan?{' '}
          <AppText size="sm" weight="semibold" color={colors.primary} onPress={openRegister}>
            Create an account
          </AppText>
        </AppText>
      }>
      {otp ? (
        <OtpStep mobile={mobile} onVerify={goHome} onChangeNumber={() => setOtp(false)} />
      ) : (
        <View style={styles.form}>
          <TextField
            label="Mobile Number"
            prefix="+91"
            placeholder="98765 43210"
            value={mobile}
            onChangeText={t => setMobile(digitsOnly(t).slice(0, 10))}
            keyboardType="number-pad"
            maxLength={10}
            error={tried && !isMobile(mobile) ? 'Enter a valid 10-digit mobile number' : undefined}
          />
          <Button label="Continue" onPress={next} />
          <View style={styles.or}>
            <View style={styles.line} />
            <AppText size="xs" color={colors.textMuted}>
              OR
            </AppText>
            <View style={styles.line} />
          </View>
          <Button label="💬  Continue with OTP on WhatsApp" variant="outline" onPress={next} style={styles.wa} />
        </View>
      )}
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  form: { gap: 16 },
  or: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  line: { flex: 1, height: StyleSheet.hairlineWidth, backgroundColor: colors.border },
  wa: { borderColor: colors.border },
  center: { textAlign: 'center' },
});
