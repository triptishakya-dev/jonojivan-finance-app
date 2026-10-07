import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../theme';
import { AppText, Card, SectionHeader } from '../../components/ui';
import { steps } from '../../data/content';

export function HowItWorks() {
  return (
    <View style={styles.wrap}>
      <SectionHeader eyebrow="HOW IT WORKS" title="Your loan in 5 simple steps" />
      {steps.map(s => (
        <Card key={s.id} style={styles.card}>
          <AppText size="3xl" weight="bold" color={colors.primaryTint} style={styles.num}>
            {s.id}
          </AppText>
          <AppText size="lg" weight="bold">
            {s.title}
          </AppText>
          <AppText size="sm" color={colors.textSecondary} style={styles.desc}>
            {s.description}
          </AppText>
        </Card>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { paddingHorizontal: 16, paddingTop: 40, gap: 14 },
  card: { padding: 20 },
  num: { color: '#C7D4FF', marginBottom: 8 },
  desc: { marginTop: 6, lineHeight: 20 },
});
