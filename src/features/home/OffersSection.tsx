import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { colors, radius } from '../../theme';
import { AppText, Badge, Button, Card, SectionHeader } from '../../components/ui';
import { offers } from '../../data/offers';
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard';

interface Props {
  onViewAll?: () => void;
  onOfferPress?: (id: string) => void;
}

export function OffersSection({ onViewAll, onOfferPress }: Props) {
  const { copied, copy } = useCopyToClipboard();
  return (
    <View style={styles.wrap}>
      <View style={styles.pad}>
        <SectionHeader title="Offers for You" actionLabel="View all →" onActionPress={onViewAll} />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
        snapToInterval={300}
        decelerationRate="fast">
        {offers.map(o => (
          <Card key={o.id} style={styles.card}>
            <View style={styles.top}>
              <Badge label={o.badge} tone="soft" />
              <AppText size="xs" color={colors.textMuted}>
                {o.category}
              </AppText>
            </View>
            <AppText weight="bold" size="lg" style={styles.title}>
              {o.title}
            </AppText>
            <AppText size="sm" color={colors.textSecondary} style={styles.desc}>
              {o.description}
            </AppText>
            <AppText size="xs" color={colors.textMuted} style={styles.valid}>
              Valid till {o.validTill}
            </AppText>
            <View style={styles.codeRow}>
              <View style={styles.code}>
                <AppText size="sm" weight="bold" color={colors.primary} style={styles.codeText}>
                  {o.code}
                </AppText>
              </View>
              <AppText
                size="xs"
                weight="medium"
                color={colors.primary}
                style={styles.copy}
                onPress={() => copy(o.code)}>
                {copied === o.code ? 'Copied' : 'Copy'}
              </AppText>
            </View>
            <Button label={o.cta} onPress={() => onOfferPress?.(o.id)} />
          </Card>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { paddingTop: 40, gap: 16 },
  pad: { paddingHorizontal: 16 },
  list: { paddingHorizontal: 16, gap: 12, paddingBottom: 8 },
  card: { width: 288, padding: 20 },
  top: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { marginTop: 14 },
  desc: { marginTop: 8, lineHeight: 20 },
  valid: { marginTop: 10 },
  codeRow: { flexDirection: 'row', alignItems: 'center', gap: 12, marginVertical: 16 },
  code: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: radius.md,
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: colors.primaryLight,
    backgroundColor: colors.primaryTint,
  },
  codeText: { letterSpacing: 1 },
  copy: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: radius.md,
    backgroundColor: colors.primaryTint,
    overflow: 'hidden',
  },
});
