import { useTranslation } from 'react-i18next';

export type SectionInfo = {
  title: string;
  id: string;
};

export type SectionsInfo = {
  whatIDo: SectionInfo;
  experiences: SectionInfo;
  projects: SectionInfo;
  skills: SectionInfo;
  contact: SectionInfo;
};

const useSectionsInfo = (): SectionsInfo => {
  const { t } = useTranslation();

  return {
    whatIDo: {
      title: t('what-i-do-section-title'),
      id: 'whatido',
    },
    experiences: {
      title: t('experiences-section-title'),
      id: 'experiences',
    },
    projects: {
      title: t('projects-section-title'),
      id: 'projects',
    },
    skills: {
      title: t('skills-section-titile'),
      id: 'skills',
    },
    contact: {
      title: t('contact-section-title'),
      id: 'contact',
    },
  };
};

export default useSectionsInfo;
