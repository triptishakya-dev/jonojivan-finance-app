import React from 'react';
import { Pressable } from 'react-native';
import { colors } from '../../theme';
import { AppText } from '../ui';

export function BackLink({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} hitSlop={8}>
      <AppText size="sm" weight="semibold" color={colors.primary}>
        ← {label}
      </AppText>
    </Pressable>
  );
}
