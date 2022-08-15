import { FC } from 'react';

type Locale = {
  key: LocaleKey;
  isRtl: boolean;
  flag: FC;
};

export type LocaleKey = 'en' | 'ar' | 'fr';

export default Locale;
