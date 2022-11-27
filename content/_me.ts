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

const MeEN: ME = {
  name: 'Mohamed ABDELLAOUI',
  nickname: 'Med Abde',
  description: "I'm a Software Engineer",
  about: "<br>I am a Developer with Good understanding of the principles of programming and computer science in general (OOP, libraries, UI / UX, API's, Database ...).<br><br>I have Desire to learn new technologies to maximize development effectiveness and produce innovative applications.",
  ...meShared,
};
const MeFR: ME = {
  name: 'Mohamed ABDELLAOUI',
  nickname: 'Med Abde',
  description: 'Ingénieur Logiciel',
  about:
    "<br>Je suis un Développeur avec une bonne compréhension des principes de la programmation et de l'informatique en général (POO, bibliothèques, UI/UX, API's, Base de données...).<br><br>J'ai le désir d'apprendre de nouvelles technologies pour maximiser l'efficacité du développement et produire des applications innovantes.",
  ...meShared,
};
const MeAR: ME = {
  name: 'محمد عبد الاوي',
  nickname: 'محمد عبد الاوي',
  description: 'مهندس برمجيات',
  about: '<br>أنا مطور مع فهم جيد لمبادئ البرمجة وعلوم الكمبيوتر بشكل عام (OOP ، المكتبات ، UI / UX ، API ، قاعدة البيانات ...).<br><br>لدي الرغبة في تعلم تقنيات جديدة لتعظيم فعالية التنمية وإنتاج تطبيقات مبتكرة.',
  ...meShared,
};

const useMe = (): ME => useContentByLanguage(MeEN, MeFR, MeAR);

export default useMe;
