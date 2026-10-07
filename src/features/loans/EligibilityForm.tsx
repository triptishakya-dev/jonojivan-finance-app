import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../theme';
import { AppText, Button, Card, Segmented, TextField } from '../../components/ui';
import { checkEligibility, EligibilityResult, EmploymentType } from '../../utils/eligibility';
import { digitsOnly } from '../../utils/validators';
import { formatINR } from '../../utils/format';

export function EligibilityForm({ onApply }: { onApply: () => void }) {
  const [income, setIncome] = useState('');
  const [employment, setEmployment] = useState<EmploymentType>('salaried');
  const [amount, setAmount] = useState('');
  const [existing, setExisting] = useState('');
  const [age, setAge] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState<EligibilityResult>();

  const bad = {
    income: submitted && !+income ? 'Enter your monthly income' : undefined,
    amount: submitted && !+amount ? 'Enter the loan amount' : undefined,
    age: submitted && (+age < 18 || +age > 80) ? 'Enter a valid age' : undefined,
  };

  const submit = () => {
    setSubmitted(true);
    if (!+income || !+amount || +age < 18 || +age > 80) return;
    setResult(checkEligibility({ income: +income, employment, amount: +amount, existingEmi: +existing || 0, age: +age }));
  };

  const num = (setter: (v: string) => void) => (t: string) => setter(digitsOnly(t).slice(0, 9));

  return (
    <View style={styles.wrap}>
      <Card style={styles.card}>
        <TextField label="Monthly Income" prefix="₹" value={income} onChangeText={num(setIncome)} keyboardType="number-pad" hint="Net take-home income" error={bad.income} />
        <View>
          <AppText size="sm" weight="medium" color={colors.textSecondary} style={styles.label}>
            Employment Type
          </AppText>
          <Segmented
            value={employment}
            onChange={setEmployment}
            options={[
              { value: 'salaried', label: 'Salaried' },
              { value: 'professional', label: 'Professional' },
              { value: 'business', label: 'Business' },
            ]}
          />
        </View>
        <TextField label="Loan Amount" prefix="₹" value={amount} onChangeText={num(setAmount)} keyboardType="number-pad" error={bad.amount} />
        <TextField label="Existing EMI" prefix="₹" value={existing} onChangeText={num(setExisting)} keyboardType="number-pad" hint="Total of all current monthly EMIs" />
        <TextField label="Age" value={age} onChangeText={t => setAge(digitsOnly(t).slice(0, 2))} keyboardType="number-pad" placeholder="years" error={bad.age} />
        <Button label="Check Eligibility" onPress={submit} />
        <AppText size="xs" color={colors.textMuted} style={styles.note}>
          Checking eligibility does not affect your credit score.
        </AppText>
      </Card>

      {result && (
        <Card style={[styles.result, { backgroundColor: result.eligible ? colors.tileGreen : colors.tileRose }]}>
          <AppText size="lg" weight="bold" color={result.eligible ? colors.success : '#B91C1C'}>
            {result.eligible ? 'You look eligible 🎉' : 'Not eligible right now'}
          </AppText>
          {result.maxAmount > 0 && (
            <AppText color={colors.textSecondary}>Estimated limit: {formatINR(result.maxAmount)}</AppText>
          )}
          {result.reason && <AppText size="sm" color={colors.textSecondary}>{result.reason}</AppText>}
          {result.eligible && <Button label="Apply Now" onPress={onApply} style={styles.apply} />}
          <AppText size="xs" color={colors.textMuted}>
            This is an indicative estimate only.
          </AppText>
        </Card>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: 16 },
  card: { padding: 20, gap: 18 },
  label: { marginBottom: 8 },
  note: { textAlign: 'center' },
  result: { padding: 20, gap: 8 },
  apply: { marginVertical: 8 },
});
