import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { colors } from '../../theme';
import { AppText, Button, Card, Select, TextField } from '../../components/ui';
import { RechargeCategory } from '../../types';
import { lengthBetween } from '../../utils/validators';

export function BillForm({ category }: { category: RechargeCategory }) {
  const [provider, setProvider] = useState<string>();
  const [account, setAccount] = useState('');
  const [extra, setExtra] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState(false);

  const rule = category.validate ?? { min: 6, max: 16 };
  const accountOk = lengthBetween(rule.min, rule.max, rule.digits)(account);
  const extraOk = !category.extraField || extra.length >= 8;

  const onSubmit = () => {
    setSubmitted(true);
    setResult(!!provider && accountOk && extraOk);
  };

  return (
    <Card style={styles.card}>
      <Select
        label={category.providerLabel}
        placeholder={category.providerLabel ?? 'Select'}
        options={category.providers ?? []}
        value={provider}
        onChange={setProvider}
        icon={category.icon}
        error={submitted && !provider ? 'Please select an option' : undefined}
      />
      <TextField
        label={category.fieldLabel}
        value={account}
        onChangeText={t => setAccount(rule.digits ? t.replace(/\D/g, '') : t.replace(/[^A-Za-z0-9]/g, ''))}
        autoCapitalize="characters"
        keyboardType={rule.digits ? 'number-pad' : 'default'}
        maxLength={rule.max}
        hint={category.hint}
        error={submitted && !accountOk ? `Enter ${rule.min}–${rule.max} ${rule.digits ? 'digits' : 'letters or digits'}` : undefined}
      />
      {category.extraField && (
        <TextField
          label={category.extraField.label}
          placeholder={category.extraField.placeholder}
          value={extra}
          onChangeText={setExtra}
          keyboardType="numbers-and-punctuation"
          maxLength={10}
          error={submitted && !extraOk ? 'Enter a valid date' : undefined}
        />
      )}
      <Button label={category.button ?? 'Continue'} onPress={onSubmit} />
      {result && (
        <AppText size="sm" weight="semibold" color={colors.success}>
          Details look good ✓ — bill fetch is a demo here (no backend connected).
        </AppText>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { gap: 16, padding: 20 },
});
