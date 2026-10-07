import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../theme';
import { AppText, Card, IconTile } from '../../components/ui';
import { ChecklistItem } from '../../components/common/ChecklistItem';
import { LoanDetail } from '../../types';

export function LoanFacts({ facts }: { facts: LoanDetail['facts'] }) {
  return (
    <View style={styles.facts}>
      {facts.map(f => (
        <Card key={f.label} style={styles.fact}>
          <AppText size="xs" color={colors.textMuted}>
            {f.label}
          </AppText>
          <AppText weight="bold" color={colors.primary}>
            {f.value}
          </AppText>
        </Card>
      ))}
    </View>
  );
}

export function AboutSection({ title, paragraphs }: { title: string; paragraphs: string[] }) {
  return (
    <View style={styles.gap}>
      <AppText size="xl" weight="bold">
        {title}
      </AppText>
      {paragraphs.map(p => (
        <AppText key={p} color={colors.textSecondary} style={styles.p}>
          {p}
        </AppText>
      ))}
    </View>
  );
}

export function EligibilityList({ items, onCheck }: { items: string[]; onCheck?: () => void }) {
  return (
    <Card style={styles.list}>
      <AppText size="xl" weight="bold">
        Eligibility
      </AppText>
      {items.map(i => (
        <ChecklistItem key={i} text={i} />
      ))}
      {onCheck && (
        <AppText weight="semibold" color={colors.primary} onPress={onCheck}>
          Check your eligibility →
        </AppText>
      )}
    </Card>
  );
}

export function DocumentsList({ groups }: { groups: LoanDetail['documents'] }) {
  return (
    <View style={styles.gap}>
      <View>
        <AppText size="xl" weight="bold">
          Required documents
        </AppText>
        <AppText size="sm" color={colors.textSecondary}>
          Keep these handy — you can upload them online.
        </AppText>
      </View>
      {groups.map(g => (
        <Card key={g.group} style={styles.list}>
          <AppText weight="bold" color={colors.primary}>
            {g.group}
          </AppText>
          {g.items.map(i => (
            <ChecklistItem key={i} text={i} icon="📄" />
          ))}
        </Card>
      ))}
    </View>
  );
}

export function BenefitsGrid({ title = 'Benefits', items }: { title?: string; items: { icon: string; title: string; text: string }[] }) {
  return (
    <View style={styles.gap}>
      <AppText size="xl" weight="bold">
        {title}
      </AppText>
      {items.map(b => (
        <Card key={b.title} style={styles.benefit}>
          <IconTile icon={b.icon} tone="blue" size={48} />
          <View style={styles.flex}>
            <AppText weight="bold">{b.title}</AppText>
            <AppText size="sm" color={colors.textSecondary}>
              {b.text}
            </AppText>
          </View>
        </Card>
      ))}
    </View>
  );
}

export function ProcessSteps({ title, steps }: { title: string; steps: { title: string; text: string }[] }) {
  return (
    <View style={styles.gap}>
      <AppText size="xl" weight="bold">
        {title}
      </AppText>
      {steps.map((s, i) => (
        <Card key={s.title} style={styles.benefit}>
          <AppText size="2xl" weight="bold" color="#C7D4FF">
            {String(i + 1).padStart(2, '0')}
          </AppText>
          <View style={styles.flex}>
            <AppText weight="bold">{s.title}</AppText>
            <AppText size="sm" color={colors.textSecondary}>
              {s.text}
            </AppText>
          </View>
        </Card>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  gap: { gap: 12 },
  flex: { flex: 1 },
  p: { lineHeight: 23 },
  facts: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  fact: { width: '48%', flexGrow: 1, padding: 14, gap: 4 },
  list: { gap: 12, padding: 18 },
  benefit: { flexDirection: 'row', alignItems: 'center', gap: 14, padding: 16 },
});
