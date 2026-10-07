import React from 'react';
import { Image, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../../theme';
import { AppText, Card } from '../../components/ui';

interface Props {
  title: string;
  subtitle: string;
  onBack: () => void;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

/** Shared frame for Login / Register: logo bar, "Back to home", centred card. */
export function AuthLayout({ title, subtitle, onBack, children, footer }: Props) {
  const insets = useSafeAreaInsets();
  return (
    <KeyboardAvoidingView style={styles.root} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={[styles.content, { paddingTop: insets.top + 16, paddingBottom: insets.bottom + 24 }]}>
        <View style={styles.bar}>
          <View style={styles.brand}>
            <Image source={require('../../assets/images/logo.png')} style={styles.logo} resizeMode="contain" />
            <AppText weight="bold" size="lg">
              Jonojivan Finance
            </AppText>
          </View>
          <Pressable onPress={onBack} hitSlop={8}>
            <AppText size="sm" color={colors.textSecondary}>
              ← Back to home
            </AppText>
          </Pressable>
        </View>
        <Card style={styles.card}>
          <View>
            <AppText size="2xl" weight="bold">
              {title}
            </AppText>
            <AppText size="sm" color={colors.textSecondary} style={styles.sub}>
              {subtitle}
            </AppText>
          </View>
          {children}
        </Card>
        {footer}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#EEF3FF' },
  content: { paddingHorizontal: 16, gap: 24 },
  bar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  brand: { flexDirection: 'row', alignItems: 'center', gap: 8, flex: 1 },
  logo: { width: 36, height: 36 },
  card: { padding: 24, gap: 20 },
  sub: { marginTop: 6 },
});
