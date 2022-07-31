import { useTranslation } from 'react-i18next';
import ButtonBase from '../../../components/global/ButtonBase';
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

  return <ButtonBase onClick={() => changeLang(getNextLangKey())}>{getNextLangKey()}</ButtonBase>;
}
