import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors, radius } from '../../theme';
import { AppText } from '../ui';

export function OfferBanner({ title, code }: { title: string; code?: string }) {
  return (
    <View style={styles.box}>
      <AppText size="xs" weight="bold" color={colors.success} style={styles.tag}>
        OFFER
      </AppText>
      <AppText weight="semibold">{title}</AppText>
      {code && (
        <View style={styles.code}>
          <AppText size="sm" weight="bold" color={colors.primary} style={styles.codeText}>
            {code}
          </AppText>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  box: { backgroundColor: colors.tileGreen, borderRadius: 20, padding: 16, gap: 6 },
  tag: { letterSpacing: 1.2 },
  code: { alignSelf: 'flex-start', marginTop: 6, backgroundColor: colors.white, borderRadius: radius.md, paddingHorizontal: 12, paddingVertical: 6, borderWidth: 1.5, borderStyle: 'dashed', borderColor: colors.primaryLight },
  codeText: { letterSpacing: 1 },
});
