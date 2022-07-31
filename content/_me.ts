import useContentByLanguage from '../hooks/utils';

type ME = {
  name: string;
  description: string;
  about: string;
};

const MeEN: ME = {
  name: 'Mohamed ABDELLAOUI',
  description: "I'm a Software Engineer",
  about: 'I am a software engineer with a passion for building software that is user-friendly and easy to use. I am a self-taught developer and I am always looking for new ways to improve my skills.',
};
const MeFR: ME = {
  name: 'Mohamed ABDELLAOUI',
  description: 'Ingénieur Logiciel',
  about: "Je suis un ingénieur logiciel passionné par la création de logiciels conviviaux et faciles à utiliser. Je suis un développeur autodidacte et je suis toujours à la recherche de nouvelles façons d'améliorer mes compétences.",
};
const MeAR: ME = {
  name: 'محمد عبد الاوي',
  description: 'مهندس برمجيات',
  about: 'أنا مهندس برمجيات ولدي شغف لبناء برامج سهلة الاستخدام وسهلة الاستخدام. أنا مطور علمي ذاتيًا وأبحث دائمًا عن طرق جديدة لتحسين مهاراتي.',
};

const useMe = (): ME => useContentByLanguage(MeEN, MeFR, MeAR);

export default useMe;
