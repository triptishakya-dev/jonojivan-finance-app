import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../../theme';
import { useAppNavigation } from '../../navigation/useAppNavigation';
import { AppText } from '../ui';

interface Props {
  onLoginPress?: () => void;
  onMenuPress?: () => void;
}

export function AppHeader({ onLoginPress, onMenuPress }: Props) {
  const { openLogin } = useAppNavigation();
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.wrap, { paddingTop: insets.top }]}>
      <View style={styles.row}>
        <View style={styles.brand}>
          <Image source={require('../../assets/images/logo.png')} style={styles.logo} resizeMode="contain" />
          <AppText weight="bold" size="lg" style={styles.name}>
            Jonojivan Finance
          </AppText>
        </View>
        <Pressable onPress={onLoginPress ?? openLogin} hitSlop={8}>
          <AppText size="sm" weight="semibold" color={colors.textSecondary}>
            Login
          </AppText>
        </Pressable>
        <Pressable onPress={onMenuPress} hitSlop={8} style={styles.menu}>
          <View style={styles.bar} />
          <View style={styles.bar} />
          <View style={styles.bar} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { backgroundColor: 'rgba(255,255,255,0.97)', borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: colors.border },
  row: { height: 56, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, gap: 20 },
  brand: { flex: 1, flexDirection: 'row', alignItems: 'center', gap: 10 },
  logo: { width: 40, height: 40 },
  name: { letterSpacing: -0.3 },
  menu: { gap: 4, padding: 4 },
  bar: { width: 20, height: 2, borderRadius: 1, backgroundColor: colors.primary },
});
