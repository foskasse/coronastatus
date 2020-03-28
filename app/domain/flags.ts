// Please keep locales sorted
export type Locale =
  | 'bd'
  | 'dk'
  | 'ca'
  | 'en'
  | 'en-AU'
  | 'en-MT'
  | 'en-SG'
  | 'en-US'
  | 'es-AR'
  | 'es-CL'
  | 'es-CO'
  | 'es-ES'
  | 'es-MX'
  | 'fr-FR'
  | 'it'
  | 'ms-MY'
  | 'nl'
  | 'no'
  | 'se'
  | 'sk'
  | 'tr'
  | 'ua';

type LocaleToFlagMap = {
  [locale in Locale]: string;
};

const localeToFlagMap: LocaleToFlagMap = {
  bd: 'bd',
  dk: 'dk',
  ca: 'ca',
  en: 'gb',
  'en-AU': 'au',
  'en-MT': 'gb',
  'en-SG': 'gb',
  'en-US': 'us',
  'es-AR': 'ar',
  'es-CL': 'cl',
  'es-CO': 'co',
  'es-ES': 'es',
  'es-MX': 'mx',
  'fr-FR': 'fr',
  it: 'it',
  'ms-MY': 'my',
  nl: 'nl',
  no: 'no',
  se: 'se',
  sk: 'sk',
  tr: 'tr',
  ua: 'ua'
};

export const localeToFlag = (locale: Locale): string => localeToFlagMap[locale];
