import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { colors, fonts, radius } from '../../theme';
import { AppText, Button } from '../../components/ui';

interface Props {
  mobile: string;
  onVerify: () => void;
  onChangeNumber: () => void;
}

const LEN = 6;

/** UI only: any complete 6-digit code is accepted. */
export function OtpStep({ mobile, onVerify, onChangeNumber }: Props) {
  const [code, setCode] = useState('');
  const [tried, setTried] = useState(false);

  const submit = () => {
    setTried(true);
    if (code.length === LEN) onVerify();
  };

  return (
    <View style={styles.wrap}>
      <AppText size="sm" color={colors.textSecondary}>
        Enter the 6-digit OTP sent to +91 {mobile}
      </AppText>
      <View style={styles.boxes}>
        {Array.from({ length: LEN }, (_, i) => (
          <View key={i} style={[styles.box, i === code.length && styles.active]}>
            <AppText size="xl" weight="bold">
              {code[i] ?? ''}
            </AppText>
          </View>
        ))}
        <TextInput
          autoFocus
          value={code}
          onChangeText={t => setCode(t.replace(/\D/g, '').slice(0, LEN))}
          keyboardType="number-pad"
          maxLength={LEN}
          style={styles.hidden}
          caretHidden
        />
      </View>
      {tried && code.length < LEN && (
        <AppText size="xs" color="#DC2626">
          Enter the full 6-digit OTP
        </AppText>
      )}
      <Button label="Verify & Continue" onPress={submit} />
      <AppText size="sm" weight="semibold" color={colors.primary} style={styles.link} onPress={onChangeNumber}>
        Change number
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: 16 },
  boxes: { flexDirection: 'row', gap: 8, justifyContent: 'space-between' },
  box: { flex: 1, height: 52, borderRadius: radius.md, borderWidth: 1, borderColor: colors.border, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.white },
  active: { borderColor: colors.primary, borderWidth: 2 },
  hidden: { ...StyleSheet.absoluteFill, opacity: 0, fontFamily: fonts.regular },
  link: { textAlign: 'center' },
});
