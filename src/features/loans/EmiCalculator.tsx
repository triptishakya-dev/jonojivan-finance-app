import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../theme';
import { AppText, Button, Card, SliderField } from '../../components/ui';
import { formatINR } from '../../utils/format';
import { calcEmi } from '../../utils/emi';
import { LoanDetail } from '../../types';

type Calc = LoanDetail['calc'];

export const defaultCalc: Calc = {
  amount: { min: 10000, max: 5000000, step: 10000, def: 200000 },
  rate: { min: 8, max: 30, def: 12 },
  tenure: { min: 6, max: 84, def: 24 },
  unit: 'months',
};

interface Props {
  config?: Calc;
  onApply?: () => void;
}

export function EmiCalculator({ config = defaultCalc, onApply }: Props) {
  const [amount, setAmount] = useState(config.amount.def);
  const [rate, setRate] = useState(config.rate.def);
  const [tenure, setTenure] = useState(config.tenure.def);

  const r = calcEmi(amount, rate, tenure, config.flat);
  const months = Math.round(tenure);

  return (
    <Card style={styles.card}>
      <SliderField
        label="Loan Amount"
        value={amount}
        min={config.amount.min}
        max={config.amount.max}
        step={config.amount.step}
        onChange={setAmount}
        display={formatINR}
        minLabel={formatINR(config.amount.min)}
        maxLabel={formatINR(config.amount.max)}
      />
      <SliderField
        label="Interest Rate (p.a.)"
        value={rate}
        min={config.rate.min}
        max={config.rate.max}
        step={0.5}
        onChange={setRate}
        display={v => `${v}%`}
        minLabel={`${config.rate.min}%`}
        maxLabel={`${config.rate.max}%`}
      />
      <SliderField
        label="Tenure"
        value={tenure}
        min={config.tenure.min}
        max={config.tenure.max}
        step={1}
        onChange={setTenure}
        display={v => `${Math.round(v)} months`}
        minLabel={`${config.tenure.min} months`}
        maxLabel={`${config.tenure.max} months`}
      />

      <View style={styles.result}>
        <AppText size="sm" color={colors.whiteSoft}>
          Monthly EMI
        </AppText>
        <AppText size="hero" weight="bold" color={colors.white}>
          {formatINR(r.emi)}
        </AppText>
        <AppText size="sm" color={colors.whiteSoft}>
          for {months} months
        </AppText>
      </View>
      <View style={styles.rows}>
        {[
          ['Principal', r.principal],
          ['Interest', r.interest],
          ['Total Payable', r.total],
        ].map(([l, v]) => (
          <View key={l as string} style={styles.row}>
            <AppText color={colors.textSecondary}>{l}</AppText>
            <AppText weight="bold">{formatINR(v as number)}</AppText>
          </View>
        ))}
      </View>
      {onApply && <Button label="Apply for Loan" onPress={onApply} />}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { padding: 20, gap: 22 },
  result: { backgroundColor: colors.primary, borderRadius: 20, padding: 20, alignItems: 'center', gap: 4 },
  rows: { gap: 12 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
});
