import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { colors } from '../../theme';
import { AppHeader } from './AppHeader';

interface Props {
  children: React.ReactNode;
  header?: boolean;
}

export function Screen({ children, header = true }: Props) {
  return (
    <View style={styles.root}>
      {header && <AppHeader />}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        {children}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  content: { paddingBottom: 24 },
});
