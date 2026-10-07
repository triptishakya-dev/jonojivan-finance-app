import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { colors } from '../../theme';
import { AppText, IconTile } from '../ui';
import { rechargeCategories } from '../../data/rechargeCategories';

interface Props {
  excludeId?: string;
  onPress: (id: string) => void;
}

export function OtherServices({ excludeId, onPress }: Props) {
  const items = rechargeCategories.filter(c => c.id !== excludeId);
  return (
    <View style={styles.wrap}>
      <AppText size="lg" weight="bold">
        Other services
      </AppText>
      <View style={styles.grid}>
        {items.map(c => (
          <Pressable key={c.id} style={styles.item} onPress={() => onPress(c.id)}>
            <IconTile icon={c.icon} tone="blue" size={48} />
            <AppText size="xs" weight="medium" color={colors.textSecondary}>
              {c.short}
            </AppText>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: 14 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', rowGap: 14 },
  item: { width: '25%', alignItems: 'center', gap: 6 },
});
