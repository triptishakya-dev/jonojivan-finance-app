import React from 'react';
import { StyleSheet, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Screen } from '../components/layout';
import { BackLink } from '../components/common/BackLink';
import { OfferBanner } from '../components/common/OfferBanner';
import { OtherServices } from '../components/common/OtherServices';
import { StepList } from '../components/common/StepList';
import { AppText, Card, IconTile } from '../components/ui';
import { getCategory } from '../data/rechargeCategories';
import { BillForm, MobileRechargeForm } from '../features/recharge';
import { RootStackParamList } from '../navigation/types';
import { useAppNavigation } from '../navigation/useAppNavigation';
import { colors } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'RechargeCategory'>;

export function RechargeCategoryScreen({ route }: Props) {
  const { goBack, openCategory } = useAppNavigation();
  const category = getCategory(route.params.id);
  if (!category) return null;

  return (
    <Screen>
      <View style={styles.body}>
        <BackLink label="Recharge & Bills" onPress={goBack} />
        <View style={styles.title}>
          <IconTile icon={category.icon} tone="blue" size={56} />
          <View style={styles.flex}>
            <AppText size="2xl" weight="bold">
              {category.title}
            </AppText>
            <AppText size="sm" color={colors.textSecondary}>
              {category.description}
            </AppText>
          </View>
        </View>

        {category.id === 'mobile' ? <MobileRechargeForm initialNumber={route.params.mobile} /> : <BillForm category={category} />}

        <Card style={styles.how}>
          <AppText size="lg" weight="bold">
            How it works
          </AppText>
          <StepList steps={category.steps} />
        </Card>
        <OfferBanner title={category.offer.title} code={category.offer.code} />
        <OtherServices excludeId={category.id} onPress={openCategory} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  body: { padding: 16, gap: 20 },
  title: { flexDirection: 'row', gap: 14, alignItems: 'center' },
  flex: { flex: 1 },
  how: { gap: 16 },
});
