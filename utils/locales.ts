import i18n from '../i18n';
import Locale, { LocaleKey } from '../types/locale';
import { updateLocalStorageValue, getLocalStorageValue } from './localStorage';

const LANG_KEY_NAME = 'lang';

export const locales: Locale[] = [
  { key: 'en', isRtl: false },
  { key: 'fr', isRtl: false },
  { key: 'ar', isRtl: true },
];

export const isRtl = (key: LocaleKey): boolean => {
  const locale = locales.find(l => l.key === key);
  return locale ? locale.isRtl : false;
};

export const updateDefaultLang = (key: LocaleKey) => {
  i18n.changeLanguage(key);
  updateLocalStorageValue(LANG_KEY_NAME, key);
};

export const getDefaultLang = (): LocaleKey => {
  const defaultLocalStorageLang = getLocalStorageValue(LANG_KEY_NAME);
  if (!defaultLocalStorageLang) return 'en';

  return defaultLocalStorageLang as LocaleKey;
};

export const setUpInitialLang = (): void => {
  i18n.changeLanguage(getDefaultLang());
};
