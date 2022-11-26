import useContentByLanguage from '../hooks/utils';

type ME = {
  name: string;
  description: string;
  about: string;
  email: string;
  github: string;
  linkedIn: string;
  resume: string;
};

const meShared: { email: string; github: string; linkedIn: string; resume: string } = {
  email: 'Medabde9@gmail.com',
  github: 'https://github.com/medabde',
  linkedIn: 'https://www.linkedin.com/in/med-abde',
  resume: 'https://drive.google.com/file/d/1mhsAWgishjdxX2sTxifg-jKnsB0vdjkg/view?usp=sharing',
};

const MeEN: ME = {
  name: 'Mohamed ABDELLAOUI',
  description: "I'm a Software Engineer",
  about: 'I am a software engineer with a passion for building software that is user-friendly and easy to use. I am a self-taught developer and I am always looking for new ways to improve my skills.',
  ...meShared,
};
const MeFR: ME = {
  name: 'Mohamed ABDELLAOUI',
  description: 'Ingénieur Logiciel',
  about: "Je suis un ingénieur logiciel passionné par la création de logiciels conviviaux et faciles à utiliser. Je suis un développeur autodidacte et je suis toujours à la recherche de nouvelles façons d'améliorer mes compétences.",
  ...meShared,
};
const MeAR: ME = {
  name: 'محمد عبد الاوي',
  description: 'مهندس برمجيات',
  about: 'أنا مهندس برمجيات ولدي شغف لبناء برامج سهلة الاستخدام وسهلة الاستخدام. أنا مطور علمي ذاتيًا وأبحث دائمًا عن طرق جديدة لتحسين مهاراتي.',
  ...meShared,
};

const useMe = (): ME => useContentByLanguage(MeEN, MeFR, MeAR);

export default useMe;
