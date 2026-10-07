import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Accordion, SectionHeader } from '../../components/ui';
import { faqs } from '../../data/content';

interface Props {
  onAllFaqs?: () => void;
}

export function FaqSection({ onAllFaqs }: Props) {
  return (
    <View style={styles.wrap}>
      <SectionHeader
        title="Frequently asked questions"
        subtitle="Quick answers to common questions about recharges, bills and loans."
        actionLabel="All FAQs →"
        onActionPress={onAllFaqs}
      />
      {faqs.map(f => (
        <Accordion key={f.id} title={f.question}>
          {f.answer}
        </Accordion>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { paddingHorizontal: 16, paddingTop: 40, gap: 12 },
});
