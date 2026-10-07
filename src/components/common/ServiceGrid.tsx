import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ServiceItem } from '../../types';
import { ServiceTile } from './ServiceTile';

interface Props {
  items: ServiceItem[];
  columns: 2 | 3;
  onPress?: (item: ServiceItem) => void;
}

/** Lays items out in equal-width rows; pads the last row so tiles keep their size. */
export function ServiceGrid({ items, columns, onPress }: Props) {
  const rows: (ServiceItem | null)[][] = [];
  for (let i = 0; i < items.length; i += columns) {
    const row: (ServiceItem | null)[] = items.slice(i, i + columns);
    while (row.length < columns) row.push(null);
    rows.push(row);
  }
  return (
    <View style={styles.grid}>
      {rows.map((row, r) => (
        <View key={r} style={styles.row}>
          {row.map((item, c) =>
            item ? (
              <ServiceTile key={item.id} item={item} onPress={onPress} compact={columns === 3} />
            ) : (
              <View key={`empty-${c}`} style={styles.empty} />
            ),
          )}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: { gap: 12 },
  row: { flexDirection: 'row', gap: 12 },
  empty: { flex: 1 },
});
