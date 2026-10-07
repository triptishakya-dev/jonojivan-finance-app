import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { colors } from '../../theme';
import { ServiceItem } from '../../types';
import { AppText, Card, IconTile } from '../ui';

interface Props {
  item: ServiceItem;
  onPress?: (item: ServiceItem) => void;
  compact?: boolean;
}

export function ServiceTile({ item, onPress, compact }: Props) {
  return (
    <Pressable style={styles.wrap} onPress={() => onPress?.(item)}>
      <Card style={[styles.card, compact && styles.compact]}>
        <IconTile icon={item.icon} tone={item.tone} size={compact ? 48 : 56} />
        <AppText weight="semibold" size={compact ? 'sm' : 'base'} style={styles.title}>
          {item.title}
        </AppText>
        <AppText size="xs" color={colors.textMuted} numberOfLines={1}>
          {item.subtitle}
        </AppText>
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1 },
  card: { padding: 16, gap: 2 },
  compact: { padding: 12, alignItems: 'flex-start' },
  title: { marginTop: 12 },
});
