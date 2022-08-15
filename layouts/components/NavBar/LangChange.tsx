import { useTranslation } from 'react-i18next';
import Locale, { LocaleKey } from '../../../types/locale';
import { locales, updateDefaultLang } from '../../../utils/locales';

export default function LangChange() {
  const { i18n } = useTranslation();
  const changeLang = (key: LocaleKey) => {
    updateDefaultLang(key);
  };

  const getNextLangKey = () => {
    const currentlangKey = i18n.language as LocaleKey;
    let nextIndex = locales.indexOf(locales.find(l => l.key === currentlangKey) as Locale) + 1;
    return locales[nextIndex] ? locales[nextIndex].key : locales[0].key;
  };

  const getNextFlagLanguage = () => {
    const currentlangKey = i18n.language as LocaleKey;
    let nextIndex = locales.indexOf(locales.find(l => l.key === currentlangKey) as Locale) + 1;
    return locales[nextIndex] ? locales[nextIndex].flag : locales[0].flag;
  };

  const CurrentFlag = getNextFlagLanguage();

  return (
    <button className="w-8 h-8" onClick={() => changeLang(getNextLangKey())}>
      <CurrentFlag />
    </button>
  );
}
