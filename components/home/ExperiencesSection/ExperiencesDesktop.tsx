import { useTranslation } from 'react-i18next';
import { LocaleKey } from '../../../types/locale';
import { classNames } from '../../../utils/helpers';
import { isRtl } from '../../../utils/locales';
import ScrollReveal from '../../transitions/ScrollReveal';
import TextBlock from './TextBlock';
const exps = [
  {
    title: 'title',
    description: 'description',
  },
  {
    title: 'title',
    description: 'description',
  },
  {
    title: 'title',
    description: 'description',
  },
  {
    title: 'title',
    description: 'description',
  },
  {
    title: 'title',
    description: 'description',
  },
];
const ExperiencesDesktop = () => {
  const { i18n } = useTranslation();
  const langKey = i18n.language as LocaleKey;
  const startRight = isRtl(langKey) ? 0 : 1;
  return (
    <div className="w-full flex-col items-center xl:flex hidden">
      {exps.map((exp, index) => {
        const isRight = index % 2 === startRight;
        const isEnd = index + 1 === exps.length;
        const isStart = index === 0;
        return (
          <ScrollReveal key={exp.title}>
            <div
              className={classNames(
                isRight ? '-translate-x-[17rem] rounded-l-xl' : 'translate-x-48 rounded-r-xl',
                isStart ? 'rounded-tl-xl shadow-md' : '',
                isStart && isRtl(langKey) ? 'rounded-tr-xl' : '',
                isEnd ? 'rounded-b-xl shadow-xl' : '',
                'rtl:flex-row-reverse bg-gray-200 dark:bg-gray-600 flex space-x-4 ',
              )}
            >
              {isRight && <TextBlock title="helllo" duration="duration" jobTitle="ttttttt" text="helo" technologies={['see']} />}
              <div className="px-6 relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className={classNames(isStart ? 'mt-6' : '', 'object-cover w-28 h-28 rounded-xl border-[6px] border-palette-light-primary dark:border-palette-dark-primary')} src="https://source.unsplash.com/random" alt="" srcSet="" />

                {!isRight
                  ? !isStart && (
                      <>
                        <div className="absolute w-10 h-10 bg-gray-200 dark:bg-gray-600 top-0 -left-10">
                          <hr className="w-10 h-10 bg-palette-light-primary dark:bg-palette-dark-primary rounded-tr-3xl border-0" />
                        </div>
                        <div className="absolute w-10 h-10 bg-gray-200 dark:bg-gray-600 -top-10 -right-10">
                          <hr className="w-10 h-10 bg-palette-light-primary dark:bg-palette-dark-primary rounded-bl-3xl border-0" />
                        </div>
                      </>
                    )
                  : !isStart && (
                      <>
                        <div className="absolute w-10 h-10 bg-gray-200 dark:bg-gray-600 -top-10 -left-10">
                          <hr className="w-10 h-10 bg-palette-light-primary dark:bg-palette-dark-primary rounded-br-3xl border-0" />
                        </div>
                        <div className="absolute w-10 h-10 bg-gray-200 dark:bg-gray-600 top-0 -right-10">
                          <hr className="w-10 h-10 bg-palette-light-primary dark:bg-palette-dark-primary rounded-tl-3xl border-0" />
                        </div>
                      </>
                    )}
                {!isEnd && (
                  <div className="flex h-full items-center justify-center">
                    <hr className="h-full border-0 bg-palette-light-primary dark:bg-palette-dark-primary w-1" />
                  </div>
                )}
              </div>
              {!isRight && <TextBlock title="helllo" duration="duration" jobTitle="ttttttt" text="helo" technologies={['see']} />}
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  );
};

export default ExperiencesDesktop;
