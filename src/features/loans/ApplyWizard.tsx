import React, { useState } from 'react';
import { StyleSheet, Switch, View } from 'react-native';
import { colors } from '../../theme';
import { AppText, Button, Card, ProgressDots, Select, TextField } from '../../components/ui';
import { ApplyField, applyFormSteps, reviewStep, validateField } from '../../data/applyForm';
import { digitsOnly } from '../../utils/validators';

const TOTAL = applyFormSteps.length + 1;

function FieldInput({ f, value, onChange, error }: { f: ApplyField; value?: string; onChange: (v: string) => void; error?: string }) {
  if (f.type === 'toggle') {
    return (
      <View style={styles.toggle}>
        <AppText style={styles.flex}>{f.label}</AppText>
        <Switch value={value === 'yes'} onValueChange={v => onChange(v ? 'yes' : 'no')} trackColor={{ true: colors.primaryLight }} thumbColor={colors.white} />
      </View>
    );
  }
  if (f.type === 'select') {
    return <Select label={f.label} placeholder="Select" options={f.options ?? []} value={value} onChange={onChange} error={error} />;
  }
  const numeric = f.type === 'mobile' || f.type === 'pin' || f.type === 'number';
  return (
    <TextField
      label={f.label}
      prefix={f.type === 'mobile' ? '+91' : undefined}
      value={value ?? ''}
      onChangeText={t => onChange(numeric ? digitsOnly(t).slice(0, f.type === 'mobile' ? 10 : f.type === 'pin' ? 6 : 9) : t)}
      keyboardType={numeric ? 'number-pad' : f.type === 'email' ? 'email-address' : f.type === 'date' ? 'numbers-and-punctuation' : 'default'}
      autoCapitalize={f.type === 'email' ? 'none' : 'sentences'}
      maxLength={f.type === 'date' ? 10 : undefined}
      placeholder={f.placeholder}
      hint={f.hint}
      error={error}
    />
  );
}

export function ApplyWizard({ initial = {}, onDone }: { initial?: Record<string, string>; onDone: () => void }) {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Record<string, string>>(initial);
  const [tried, setTried] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isReview = step === applyFormSteps.length;
  const cfg = isReview ? reviewStep : applyFormSteps[step];
  const fields = isReview ? [] : applyFormSteps[step].fields;

  const next = () => {
    if (isReview) {
      setSubmitted(true);
      return;
    }
    setTried(true);
    if (fields.every(f => validateField(f, values[f.key]))) {
      setTried(false);
      setStep(s => s + 1);
    }
  };

  if (submitted) {
    return (
      <Card style={styles.done}>
        <AppText size="3xl">✅</AppText>
        <AppText size="xl" weight="bold">
          Application submitted
        </AppText>
        <AppText color={colors.textSecondary} style={styles.center}>
          Demo only — nothing was sent anywhere. In the full app our team would now verify your details.
        </AppText>
        <Button label="Back to Loans" onPress={onDone} style={styles.full} />
      </Card>
    );
  }

  return (
    <View style={styles.wrap}>
      <ProgressDots total={TOTAL} current={step} />
      <Card style={styles.card}>
        <View>
          <AppText size="xs" weight="semibold" color={colors.primary}>
            Step {step + 1} of {TOTAL}
          </AppText>
          <AppText size="xl" weight="bold" style={styles.title}>
            {cfg.title}
          </AppText>
          <AppText size="sm" color={colors.textSecondary}>
            {cfg.subtitle}
          </AppText>
        </View>

        {fields.map(f => (
          <FieldInput
            key={f.key}
            f={f}
            value={values[f.key]}
            onChange={v => setValues(s => ({ ...s, [f.key]: v }))}
            error={tried && !validateField(f, values[f.key]) ? f.error ?? 'Required' : undefined}
          />
        ))}

        {isReview &&
          applyFormSteps.flatMap(s => s.fields).filter(f => f.type !== 'toggle').map(f => (
            <View key={f.key} style={styles.reviewRow}>
              <AppText size="sm" color={colors.textMuted} style={styles.flex}>
                {f.label}
              </AppText>
              <AppText size="sm" weight="semibold" style={styles.reviewVal}>
                {values[f.key] || '—'}
              </AppText>
            </View>
          ))}

        <View style={styles.btns}>
          {step > 0 && <Button label="Back" variant="soft" onPress={() => setStep(s => s - 1)} style={styles.flex} />}
          <Button label={isReview ? 'Submit Application' : 'Continue'} variant={isReview ? 'green' : 'primary'} onPress={next} style={styles.flex} />
        </View>
      </Card>
      <AppText size="xs" color={colors.textMuted} style={styles.center}>
        🔒 Your information is encrypted and only used to process your loan application.
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: 18 },
  card: { padding: 20, gap: 18 },
  title: { marginVertical: 4 },
  flex: { flex: 1 },
  center: { textAlign: 'center' },
  toggle: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  btns: { flexDirection: 'row', gap: 12 },
  reviewRow: { flexDirection: 'row', gap: 12 },
  reviewVal: { flex: 1, textAlign: 'right' },
  done: { alignItems: 'center', gap: 10, padding: 28 },
  full: { alignSelf: 'stretch', marginTop: 8 },
});
