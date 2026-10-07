import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { colors } from '../../theme';
import { AppText } from './AppText';
import { Card } from './Card';

interface Props {
  title: string;
  children: string;
}

export function Accordion({ title, children }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <Card style={styles.card}>
      <Pressable onPress={() => setOpen(o => !o)} style={styles.head}>
        <AppText weight="semibold" style={styles.title}>
          {title}
        </AppText>
        <AppText size="xl" color={colors.primary}>
          {open ? '−' : '+'}
        </AppText>
      </Pressable>
      {open && (
        <View style={styles.body}>
          <AppText size="sm" color={colors.textSecondary} style={styles.answer}>
            {children}
          </AppText>
        </View>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { padding: 0, borderRadius: 16 },
  head: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16, gap: 12 },
  title: { flex: 1 },
  body: { paddingHorizontal: 16, paddingBottom: 16 },
  answer: { lineHeight: 21 },
});
