export const colors = {
  primary: '#1D39C0',
  primaryDark: '#1E329B',
  primaryLight: '#3B67F3',
  primaryTint: '#EEF4FF',
  success: '#00A05A',
  mint: '#5EE6B0',
  background: '#F6F8FC',
  surface: '#FFFFFF',
  border: '#E5E9F2',
  text: '#0F172A',
  textSecondary: '#475569',
  textMuted: '#64748B',
  white: '#FFFFFF',
  whiteSoft: 'rgba(255,255,255,0.85)',
  whiteGlass: 'rgba(255,255,255,0.12)',
  tileGreen: '#E8FBF2',
  tileBlue: '#EEF2FF',
  tileAmber: '#FFF4E0',
  tilePurple: '#F3EEFF',
  tileRose: '#FFEDEE',
  tileSky: '#E6F6FE',
} as const;

export const gradients = {
  hero: [colors.primaryDark, colors.primary, colors.primaryLight],
} as const;
