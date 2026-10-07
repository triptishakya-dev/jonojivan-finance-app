# Jonojivan Finance – Frontend Replication Plan

Goal: rebuild https://jonojivan-finance-recharge-loan.vercel.app/ (mobile view) as a pixel-faithful React Native app. **Frontend only** – no backend, no API calls; all data is local mock data.

## Findings

- Repo is a bare **React Native 0.87 + TypeScript** app (`App.tsx` is still the template). The reference site is a Next.js/Tailwind web app; we replicate its mobile layout.
- `public/` is empty. The logo is `logo.png` in the repo root (untracked) → move to `src/assets/images/logo.png` (RN doesn't use `public/`).
- Font on site: **Geist**. Brand blue `#1D39C0`, gradient `#1E329B → #1D39C0 → #3B67F3` (diagonal), CTA green ≈ `#00A05A`, accent mint ≈ `#5EE6B0`, page bg `#F6F8FC`, active-nav tint `#EEF4FF`, card radius 16, button radius 16, chip radius 12.
- Site routes (each becomes a screen): `/`, `/recharge` (+ mobile, dth, electricity, broadband, fastag, gas, water, landline, insurance), `/loans` (+ apply, personal-loan, business-loan, micro-finance-loan, eligibility, emi-calculator), `/offers`, `/transactions`, `/support`, `/faq`, `/about`, `/contact`, `/login`, `/register`.
- Mobile chrome: top header (logo + "Jonojivan Finance", Login, hamburger) and bottom tabs **Home / Recharge / Loans / More**.

## Home screen sections (top → bottom)

1. Hero (gradient, pill badge, headline w/ mint second line, 2 CTAs)
2. Quick-action grid 2×2 (Recharge, Apply Loan, EMI Calc, Eligibility)
3. Recharge & Pay Bills header + "All services →"
4. Quick Recharge card (+91 input, View Plans, popular plans ₹299/349/399)
5. Service grid 3×3 (Mobile, DTH, Electricity, Broadband, FASTag, Gas, Water, Landline, Insurance)
6. Loans: Personal / Business / Micro Finance cards + "Plan before you borrow" banner
7. Offers (horizontal cards with coupon code + Copy)
8. How it works – 5 steps
9. Stats row (9+, 100+, ₹25L, 24×7)
10. FAQ accordion
11. Final CTA + footer

## Dependencies to add (no backend)

`@react-navigation/native`, `@react-navigation/native-stack`, `@react-navigation/bottom-tabs`, `react-native-screens`, `react-native-linear-gradient`, `react-native-svg` (icons), `@react-native-clipboard/clipboard`. Geist font files linked via `react-native.config.js`.

## File structure

```
src/
├── assets/
│   ├── images/logo.png
│   └── fonts/Geist-*.ttf
├── theme/            colors.ts · typography.ts · spacing.ts · index.ts   (design tokens)
├── navigation/       RootNavigator.tsx · TabNavigator.tsx · types.ts · routes.ts
├── components/
│   ├── ui/           Button · Card · Badge · Input · Accordion · SectionHeader · Chip · IconTile
│   ├── layout/       Screen · AppHeader · Footer · Container
│   └── common/       ServiceTile · PlanChip · StatItem
├── features/
│   ├── home/         HeroSection · QuickActions · QuickRecharge · ServiceGrid · LoansSection
│   │                 · OffersSection · HowItWorks · StatsSection · FaqSection · CtaBanner
│   ├── recharge/     RechargeForm · PlanList · OperatorPicker
│   ├── loans/        LoanCard · LoanApplyForm · EmiCalculator · EligibilityForm
│   ├── offers/       OfferCard
│   ├── auth/         LoginForm · RegisterForm
│   └── support/      ContactForm · FaqList
├── screens/          HomeScreen · RechargeScreen · RechargeCategoryScreen · LoansScreen
│                     · LoanDetailScreen · LoanApplyScreen · EmiCalculatorScreen · EligibilityScreen
│                     · OffersScreen · TransactionsScreen · MoreScreen · SupportScreen
│                     · FaqScreen · AboutScreen · ContactScreen · LoginScreen · RegisterScreen
├── data/             services.ts · loans.ts · offers.ts · plans.ts · faqs.ts · steps.ts · stats.ts  (mock content)
├── hooks/            useEmi.ts · useCopyToClipboard.ts
├── utils/            format.ts (₹ / lakh) · emi.ts · validators.ts
└── types/            index.ts
App.tsx               → providers + RootNavigator only
```

Rules: screens only compose feature components; features own their section UI; `components/ui` has zero business logic; all copy/numbers live in `data/`; all colours/sizes come from `theme/`.

## Phases

1. **Foundation** – install deps, move logo, theme tokens, fonts, navigation shell, `Screen`, `AppHeader`, bottom tabs.
2. **UI kit** – Button, Card, Badge, Input, Accordion, SectionHeader, IconTile, gradient wrapper.
3. **Home screen** – all 11 sections above, driven by `data/`.
4. **Recharge flow** – category screens, mobile recharge form, plans list.
5. **Loans flow** – list, detail pages, apply form, EMI calculator (local calc), eligibility.
6. **Remaining screens** – offers, transactions (empty/mock), support, FAQ, about, contact, login, register, More menu.
7. **Polish & verify** – side-by-side screenshot comparison with the live site at 375px, safe areas, Android + iOS, lint/tsc/jest.

## Out of scope

Backend, real auth, payments, API integration, native config beyond what libraries require.

## Open questions (assumptions in bold)

- Platform target: **Android first**, iOS second.
- Emoji icons as on site (📱💰🧮…) vs. SVG icons: **use the same emojis for 1:1 look**; tab-bar icons as SVG.
- Fonts: **bundle Geist**.
