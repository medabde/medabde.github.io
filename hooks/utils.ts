import { useTranslation } from 'react-i18next';
import { LocaleKey } from '../types/locale';

const useContentByLanguage = (enContent: any, frContent: any, arContent: any) => {
  const { i18n } = useTranslation();
  const currentlangKey = i18n.language as LocaleKey;

  switch (currentlangKey) {
    case 'en':
      return enContent;

    case 'fr':
      return frContent;

    case 'ar':
      return arContent;
  }
};
export default useContentByLanguage;
