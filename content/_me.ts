import useContentByLanguage from '../hooks/utils';

type ME = {
  name: string;
  description: string;
  about: string;
  email: string;
  github: string;
  linkedIn: string;
  resume: string;
  nickname: string;
};

const meShared: { email: string; github: string; linkedIn: string; resume: string } = {
  email: 'Medabde9@gmail.com',
  github: 'https://github.com/medabde',
  linkedIn: 'https://www.linkedin.com/in/med-abde',
  resume: 'https://drive.google.com/file/d/1mhsAWgishjdxX2sTxifg-jKnsB0vdjkg/view?usp=sharing',
};

const getAboutHTML = (about: string): string => {
  return about.replaceAll ? about.replaceAll(':b', '<br>') : '';
};

const MeEN: ME = {
  name: 'Mohamed ABDELLAOUI',
  nickname: 'Med Abde',
  description: "I'm a Software Engineer",
  about: getAboutHTML(
    ":b:bI am a Developer with Good understanding of the principles of programming and computer science in general (OOP, libraries, UI / UX, API's, Database ...).:b:bI have Desire to learn new technologies to maximize development effectiveness and produce innovative applications.:b:bI enjoy building everything from small business sites to rich interactive web apps or mobile apps.",
  ),
  ...meShared,
};
const MeFR: ME = {
  name: 'Mohamed ABDELLAOUI',
  nickname: 'Med Abde',
  description: 'Ingénieur Logiciel',
  about: getAboutHTML(
    ":b:bJe suis un Développeur avec une bonne compréhension des principes de la programmation et de l'informatique en général (POO, bibliothèques, UI/UX, API's, Base de données...).:b:bJ'ai le désir d'apprendre de nouvelles technologies pour maximiser l'efficacité du développement et produire des applications innovantes.:b:bJ'aime tout créer, des sites de petites entreprises aux applications Web interactives riches ou aux applications mobiles.",
  ),
  ...meShared,
};
const MeAR: ME = {
  name: 'محمد عبد الاوي',
  nickname: 'محمد عبد الاوي',
  description: 'مهندس برمجيات',
  about: getAboutHTML(
    ':b:bأنا مطور مع فهم جيد لمبادئ البرمجة وعلوم الكمبيوتر بشكل عام (OOP ، المكتبات ، UI / UX ، API ، قاعدة البيانات ...).:b:bلدي الرغبة في تعلم تقنيات جديدة لتعظيم فعالية التنمية وإنتاج تطبيقات مبتكرة.:b:bأستمتع ببناء كل شيء من مواقع الأعمال الصغيرة إلى تطبيقات الويب التفاعلية الغنية أو تطبيقات الأجهزة المحمولة.',
  ),
  ...meShared,
};

const useMe = (): ME => useContentByLanguage(MeEN, MeFR, MeAR);

export default useMe;
