import useContentByLanguage from '../hooks/utils';

type SkillType = {
  title: string;
  skills: Array<string>;
};
type TypeFeaturedSkills = {
  name: string;
  img: string;
};

const skills: Array<SkillType> = [
  {
    title: 'Languages',
    skills: ['C', 'C#', 'Java', 'JavaScript', 'TypeScript', 'PHP', 'Bash'],
  },
  {
    title: 'Web',
    skills: ['HTML', 'CSS', 'BootStrap', 'JS', 'TS', 'React', 'Angular', 'Vue', 'Symfony', 'Laravel', 'NodeJs', 'Express', '.Net', 'Spring MVC'],
  },
  {
    title: 'Cloud',
    skills: ['Azure', 'Digital Ocean'],
  },
  {
    title: 'Mobile',
    skills: ['Android', 'Ionic', 'React Native'],
  },
  {
    title: 'Data bases',
    skills: ['SQL', 'PLSQl', 'MySQL', 'MongoDb', 'FireStore'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'Maven', 'Gradle'],
  },
  {
    title: 'CMS',
    skills: ['Drupal', 'Wordpress'],
  },
];

const featuredSkillsArray: Array<TypeFeaturedSkills> = [
  {
    name: 'React',
    img: '/assets/skills/react.png',
  },
  {
    name: 'Next JS',
    img: '/assets/skills/nextjs.png',
  },
  {
    name: 'Vue',
    img: '/assets/skills/vue.png',
  },
  {
    name: 'Nuxt JS',
    img: '/assets/skills/nuxtjs.png',
  },
  {
    name: 'Java',
    img: '/assets/skills/java.png',
  },
  {
    name: 'Spring',
    img: '/assets/skills/spring.png',
  },
  {
    name: 'Android',
    img: '/assets/skills/android.png',
  },
  {
    name: 'Docker',
    img: '/assets/skills/docker.png',
  },
  {
    name: 'Jenkins',
    img: '/assets/skills/jenkins.png',
  },
];

type DataReturned = {
  skills: Array<SkillType>;
  featuredSkills: Array<TypeFeaturedSkills>;
};

const data: DataReturned = { skills, featuredSkills: featuredSkillsArray };

const useSkillsSection = (): DataReturned => useContentByLanguage(data, data, data);
export default useSkillsSection;
