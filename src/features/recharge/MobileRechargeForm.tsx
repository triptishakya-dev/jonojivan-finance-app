import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../theme';
import { AppText, Button, Card, Segmented, Select, TextField } from '../../components/ui';
import { circles, mobileOperators } from '../../data/recharge';
import { digitsOnly, isMobile } from '../../utils/validators';
import { PlansList } from './PlansList';

export function MobileRechargeForm({ initialNumber = '' }: { initialNumber?: string }) {
  const [type, setType] = useState<'prepaid' | 'postpaid'>('prepaid');
  const [mobile, setMobile] = useState(initialNumber);
  const [operator, setOperator] = useState<string>();
  const [circle, setCircle] = useState<string>();
  const [submitted, setSubmitted] = useState(false);
  const [showPlans, setShowPlans] = useState(false);

  const errors = {
    mobile: submitted && !isMobile(mobile) ? 'Enter a valid 10-digit mobile number' : undefined,
    operator: submitted && !operator ? 'Select an operator' : undefined,
    circle: submitted && !circle ? 'Select a circle' : undefined,
  };

  const onSubmit = () => {
    setSubmitted(true);
    if (isMobile(mobile) && operator && circle) setShowPlans(true);
  };

  return (
    <View style={styles.wrap}>
      <Card style={styles.card}>
        <Segmented
          value={type}
          onChange={setType}
          options={[
            { value: 'prepaid', label: 'Prepaid' },
            { value: 'postpaid', label: 'Postpaid' },
          ]}
        />
        <TextField
          label="Mobile Number"
          prefix="+91"
          value={mobile}
          onChangeText={t => setMobile(digitsOnly(t).slice(0, 10))}
          keyboardType="number-pad"
          maxLength={10}
          placeholder="10-digit number"
          error={errors.mobile}
        />
        <Select label="Operator" placeholder="Select Operator" options={mobileOperators} value={operator} onChange={setOperator} error={errors.operator} />
        <Select label="Circle" placeholder="Select Circle" options={circles} value={circle} onChange={setCircle} error={errors.circle} />
        <Button label={type === 'prepaid' ? 'View Plans' : 'Fetch Bill'} onPress={onSubmit} />
      </Card>
      {showPlans && (
        <View style={styles.plans}>
          <AppText size="lg" weight="bold">
            {type === 'prepaid' ? 'Choose a plan' : 'Postpaid bill'}
          </AppText>
          {type === 'prepaid' ? (
            <PlansList />
          ) : (
            <Card>
              <AppText color={colors.textSecondary}>No pending bill found for +91 {mobile} (demo data).</AppText>
            </Card>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: 20 },
  card: { gap: 16, padding: 20 },
  plans: { gap: 12 },
});
