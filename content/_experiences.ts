import useContentByLanguage from '../hooks/utils';

type Experience = {
  jobTitle: string;
  companyName: string;
  duration: string;
  details: string;
  technologies: Array<string>;
  image: string;
};

const expsEN: Array<Experience> = [
  {
    jobTitle: 'Full Stack Developer',
    companyName: 'Novelis',
    duration: 'From 20-12-2021 to Now',
    details: 'salam',
    technologies: [],
    image: '/assets/experience/novelis.png',
  },
];
const expsFR: Array<Experience> = [];
const expsAR: Array<Experience> = [];

const useExperiences = (): Array<Experience> => useContentByLanguage(expsEN, expsFR, expsAR);

export default useExperiences;
