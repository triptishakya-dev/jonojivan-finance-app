import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { AppText, Button, TextField } from '../components/ui';
import { AuthLayout, OtpStep } from '../features/auth';
import { useAppNavigation } from '../navigation/useAppNavigation';
import { colors } from '../theme';
import { digitsOnly, isEmail, isMobile } from '../utils/validators';

export function RegisterScreen() {
  const { goHome, openLogin } = useAppNavigation();
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [tried, setTried] = useState(false);
  const [otp, setOtp] = useState(false);

  const nameOk = name.trim().length > 1;
  const submit = () => {
    setTried(true);
    if (nameOk && isMobile(mobile) && isEmail(email)) setOtp(true);
  };

  return (
    <AuthLayout
      title="Create your account"
      subtitle="It takes less than a minute."
      onBack={goHome}
      footer={
        <AppText size="sm" color={colors.textSecondary} style={styles.center}>
          Already have an account?{' '}
          <AppText size="sm" weight="semibold" color={colors.primary} onPress={openLogin}>
            Login
          </AppText>
        </AppText>
      }>
      {otp ? (
        <OtpStep mobile={mobile} onVerify={goHome} onChangeNumber={() => setOtp(false)} />
      ) : (
        <View style={styles.form}>
          <TextField label="Full Name" value={name} onChangeText={setName} autoCapitalize="words" error={tried && !nameOk ? 'Enter your full name' : undefined} />
          <TextField
            label="Mobile Number"
            prefix="+91"
            value={mobile}
            onChangeText={t => setMobile(digitsOnly(t).slice(0, 10))}
            keyboardType="number-pad"
            maxLength={10}
            hint="We’ll send an OTP to verify this number."
            error={tried && !isMobile(mobile) ? 'Enter a valid 10-digit mobile number' : undefined}
          />
          <TextField
            label="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            error={tried && !isEmail(email) ? 'Enter a valid email' : undefined}
          />
          <Button label="Get OTP" onPress={submit} />
          <AppText size="xs" color={colors.textMuted} style={styles.center}>
            By continuing you agree to our Terms & Privacy Policy.
          </AppText>
        </View>
      )}
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  form: { gap: 16 },
  center: { textAlign: 'center' },
});
