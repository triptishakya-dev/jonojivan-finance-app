import React from 'react';
import { Screen } from '../components/layout';
import {
  BillsSection,
  CtaBanner,
  FaqSection,
  HeroSection,
  HowItWorks,
  LoansSection,
  OffersSection,
  StatsSection,
} from '../features/home';
import { useAppNavigation } from '../navigation/useAppNavigation';
import { ServiceItem } from '../types';

const loanIds: Record<string, string> = { personal: 'personal', business: 'business', micro: 'micro' };

/** Composition only – every section reports taps; this screen decides where they go. */
export function HomeScreen() {
  const { openRecharge, openLoans, openApply, openEmi, openEligibility, openCategory, openLoan } = useAppNavigation();

  const onQuickAction = (item: ServiceItem) => {
    if (item.id === 'recharge') openRecharge();
    else if (item.id === 'loan') openApply();
    else if (item.id === 'emi') openEmi();
    else openEligibility();
  };

  return (
    <Screen>
      <HeroSection onApplyLoan={() => openApply()} onRecharge={openRecharge} onActionPress={onQuickAction} />
      <BillsSection onServicePress={s => openCategory(s.id)} onAllServices={openRecharge} onViewPlans={m => openCategory('mobile', m)} />
      <LoansSection onLoanPress={l => openLoan(loanIds[l.id])} onExplore={openLoans} onEligibility={openEligibility} onEmi={openEmi} />
      <OffersSection onViewAll={openRecharge} onOfferPress={id => (id === 'power5' ? openCategory('electricity') : id === 'dth50' ? openCategory('dth') : openCategory('mobile'))} />
      <HowItWorks />
      <StatsSection />
      <FaqSection />
      <CtaBanner onApplyLoan={() => openApply()} onRecharge={openRecharge} />
    </Screen>
  );
}
