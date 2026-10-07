# Plan: Recharge & Loans (Phases 4–5)

Frontend only. All data is local mock data; no API calls. Builds on the existing `theme/`, `components/ui`, `components/common`, `data/`, `features/` structure.

## 1. Screens to build (from the live site)

### Recharge stack
| Route (site) | Screen | Content |
|---|---|---|
| `/recharge` | `RechargeScreen` (tab) | Gradient title "Recharge & Pay Bills" · 9-service grid · Quick Recharge card · Recent payments (3 rows w/ status chip) · Supported operators (Jio, Airtel, Vi, BSNL, MTNL) |
| `/recharge/mobile` | `RechargeCategoryScreen` (mobile) | Back link · Prepaid/Postpaid toggle · Mobile number (+91) · Operator select · Circle select · View Plans · How it works (3 steps) · Offer banner (JJFIRST30) · Other services |
| `/recharge/dth, electricity, broadband, fastag, gas, water, landline, insurance` | same `RechargeCategoryScreen`, driven by config | Provider/board select + account/consumer-number field (with hint text, e.g. "6–14 digits…") + "Fetch Bill" · How it works · Offer · Other services |

One reusable screen + a `categoryConfig` in `data/` replaces 9 near-identical pages (fields, labels, button text, steps, offer per category).

### Loans stack
| Route | Screen | Content |
|---|---|---|
| `/loans` | `LoansScreen` (tab) | Hero + Apply / Check Eligibility · 3 loan cards · "Why borrow" (5 benefits) · 5-step process · Eligibility + EMI cards · Apply CTA |
| `/loans/personal-loan`, `/business-loan`, `/micro-finance-loan` | `LoanDetailScreen` (config-driven) | Hero + 2 CTAs · 4 key facts (amount, tenure, rate, fee) · What is it · Eligibility checklist · Required documents (3 groups) · Benefits (4) · Embedded EMI calculator · Application process · Loan FAQs · Final CTA |
| `/loans/apply` | `LoanApplyScreen` | 6-step wizard with progress dots; step 1 Personal Info (name, mobile, email, DOB, gender, PIN, city); encrypted-info note |
| `/loans/emi-calculator` | `EmiCalculatorScreen` | 3 sliders (amount ₹10k–50L, rate 8–30%, tenure 6–84 mo) · result card (EMI, principal, interest, total) · Apply button · "About EMI" accordion |
| `/loans/eligibility` | `EligibilityScreen` | Monthly income · employment type (3 options) · loan amount · existing EMI · age · result panel |

## 2. File plan

```
src/
├── data/
│   ├── rechargeCategories.ts   config per category (fields, steps, offer id)
│   ├── operators.ts            operators, circles, electricity boards, DTH providers…
│   ├── recentPayments.ts
│   ├── loanDetails.ts          config per loan (facts, eligibility, docs, benefits, FAQs)
│   ├── loanBenefits.ts
│   └── loanApplySteps.ts
├── types/                      + RechargeCategory, FieldConfig, Payment, LoanDetail, ApplyStep
├── utils/
│   ├── emi.ts                  calcEmi(P, annualRate, months) → {emi, interest, total}
│   ├── eligibility.ts          local estimate (FOIR rule, age/income checks)
│   └── validators.ts           mobile (10 digits), consumer no., email, PIN (6), PAN-style name
├── hooks/                      useEmi · useStepper · useForm (light, no extra lib)
├── components/
│   ├── ui/       + Select (bottom-sheet picker) · Segmented (Prepaid/Postpaid) · Slider-field
│   │               · TextField (label, prefix, hint, error) · ProgressDots · StatusChip · Checklist
│   └── common/   + BackLink · InfoRow · StepList · OfferBanner · OtherServices
├── features/
│   ├── recharge/ RechargeForm · MobileRechargeForm · BillFetchForm · RecentPayments
│   │             · OperatorLogos · HowItWorksList
│   └── loans/    LoanCard · LoanHero · LoanFacts · EligibilityList · DocumentsList
│                 · BenefitsGrid · EmiCalculator · EmiResult · ApplyWizard (+ steps/*) · EligibilityForm
├── navigation/   RechargeStack · LoansStack (inside tabs), types updated
└── screens/      RechargeScreen · RechargeCategoryScreen · LoansScreen · LoanDetailScreen
                  · LoanApplyScreen · EmiCalculatorScreen · EligibilityScreen
```

Rules unchanged: screens compose only; forms hold local state; copy/config in `data/`; maths in `utils/` (unit-tested).

## 3. Dependencies

- `@react-native-community/slider` for the EMI sliders (native module → rebuild).
- No form library (small local `useForm`), no backend.

## 4. Work order

1. **Navigation** – `RechargeStack`/`LoansStack` nested in tabs; wire existing Home buttons/tiles/cards (Apply Loan, Recharge Now, service tiles, Learn More, offers CTAs, All services, Explore loans).
2. **Shared UI** – TextField, Select, Segmented, Slider-field, ProgressDots, StatusChip, BackLink, StepList, OfferBanner.
3. **Recharge** – config + RechargeScreen → mobile form → generic bill form for the other 8 categories.
4. **EMI core** – `emi.ts` + tests, `EmiCalculator` component (reused in EMI screen and loan details).
5. **Loans** – LoansScreen → LoanDetailScreen (3 products via config) → EmiCalculatorScreen → EligibilityScreen.
6. **Apply wizard** – stepper + step 1; steps 2–6 are read from the live form by walking through it (titles/fields not visible until valid input is entered), then built the same way.
7. **Verify** – tsc, eslint, jest (emi/eligibility/validators), side-by-side screenshots against the live site at 375px.

## 5. Mock behaviour (no backend)

- View Plans / Fetch Bill: validate input, then show a local mock result or plans sheet ("demo data").
- Apply wizard: validate each step, keep state locally, finish on a local success screen.
- Eligibility: computed on-device; EMI exactly matches the site's formula (check: ₹2,00,000 @ 8%? / 24 mo → ₹9,415 — verified against site defaults during build).

## 6. Open points (defaults chosen)

- Copy for Business/Micro detail pages and FAQ answers isn't visible yet – I'll read those pages before building them.
- Apply steps 2–6 contents come from walking the live form (see 4.6).
- Native picker UI: custom bottom-sheet Select for a consistent look.
