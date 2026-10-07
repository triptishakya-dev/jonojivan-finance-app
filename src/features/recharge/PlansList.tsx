import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { colors } from '../../theme';
import { AppText, Button, Card } from '../../components/ui';
import { mockPlans } from '../../data/recharge';
import { formatINR } from '../../utils/format';

export function PlansList() {
  const [selected, setSelected] = useState<number>();
  const [done, setDone] = useState(false);
  return (
    <View style={styles.wrap}>
      {mockPlans.map(p => {
        const active = selected === p.price;
        return (
          <Pressable key={p.price} onPress={() => setSelected(p.price)}>
            <Card style={[styles.plan, active && styles.active]}>
              <AppText size="xl" weight="bold" color={colors.primary}>
                {formatINR(p.price)}
              </AppText>
              <View style={styles.flex}>
                <AppText size="sm" weight="semibold">
                  {p.validity}
                </AppText>
                <AppText size="xs" color={colors.textMuted}>
                  {p.data}
                </AppText>
              </View>
            </Card>
          </Pressable>
        );
      })}
      <Button label={selected ? `Pay ${formatINR(selected)}` : 'Select a plan'} variant="green" onPress={() => selected && setDone(true)} />
      {done && (
        <AppText size="sm" color={colors.success} weight="semibold">
          Demo only — payments are not connected in this build.
        </AppText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: 10 },
  plan: { flexDirection: 'row', alignItems: 'center', gap: 16, padding: 16, borderWidth: 1.5, borderColor: 'transparent' },
  active: { borderColor: colors.primary, backgroundColor: colors.primaryTint },
  flex: { flex: 1 },
});
