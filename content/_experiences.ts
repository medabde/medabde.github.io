import useContentByLanguage from '../hooks/utils';

type Experience = {
  jobTitle?: string;
  companyName?: string;
  duration?: string;
  details?: Array<string>;
  technologies?: Array<string>;
  image?: string;
  projectsWorkedOn?: Array<Project>;
};
export type Project = {
  link: string;
  comment?: string;
};

const APICIL_LINK = 'https://www.intencial.fr/accueil';
const NOVELIS_LINK = 'https://novelis.io';
const NOVY_LINK = 'https://novy.novelis.io';

const marrakechB2BLink = 'https://marrakechb2b.ma';
const marrakechInvestLink = 'https://marrakechinvest.ma';
const intajOrientalLink = 'https://intajoriental.com';

const novelisExpShared: Experience = {
  companyName: 'Novelis',
  technologies: ['NextJS', 'React', 'Material UI', 'Wordpress', 'Elementor', 'PHP', 'Java', 'Spring', 'Jenkins', 'Docker'],
  image: '/assets/experience/novelis.png',
};

const butterflyExpShared: Experience = {
  companyName: 'Digital Butterfly',
  technologies: ['NuxtJS', 'Vue', 'Wordpress', 'Laravel', 'PHP', 'Digital Ocean', 'Tailwind Css'],
  image: '/assets/experience/digital-butterfly.png',
  projectsWorkedOn: [{ link: marrakechB2BLink }, { link: marrakechInvestLink }, { link: intajOrientalLink }],
};

const mostaqlExperienceShared: Experience = {
  companyName: 'Mostaql',
  technologies: ['Android', 'Java', 'Android Studio'],
  image: '/assets/experience/mostaql.png',
};

const internNovelisShared: Experience = {
  companyName: 'Novelis',
  technologies: ['React', 'Jhipster', 'Java', 'Spring', 'Material UI'],
  image: '/assets/experience/novelis.png',
};

const fcpoInternShared: Experience = {
  companyName: 'FCPO',
  technologies: ['Android', 'Java', 'Android Studio', 'PHP', 'HTML', 'CSS'],
  image: '/assets/experience/fcpo.png',
};

const expsEN: Array<Experience> = [
  {
    jobTitle: 'Full Stack Developer',
    duration: 'From 20-12-2021 to Now',
    details: [
      'Development of websites (front / back) from Adobe XD designs.',
      'Development of new pages and features in React / Nextjs.',
      'Development of new Web Services and functionalities using Java and Spring boot.',
      'Work on microservices projects.',
      'Agile methodologies, Scrum, DevOps.',
      'Using Jenkins, Docker for CI/CD.',
      'Development of new pages and functionalities in a Wordpress project (use of several plugins: WPML, WPForms, Elementor).',
      'Creation of custom Wordpress plugins and custom Elementor widgets.',
      'Using Git/Gitlab as a version control system.',
    ],
    projectsWorkedOn: [{ link: APICIL_LINK, comment: '(Client - APICIL)' }, { link: NOVELIS_LINK }, { link: NOVY_LINK, comment: '(Internal Project)' }],
    ...novelisExpShared,
  },
  {
    jobTitle: 'Web Developer',
    duration: 'From 01-05-2021 to 20-12-2021',
    details: [
      'Working on big national projects (Intaj Oriental, CRI Marrakech ...).',
      'Integration of HTML5 / CSS3 content.',
      'Creation of custom templates (front/back) from existing Figma models.',
      'Making pages content dynamic using Drupal and GraphQL.',
      'Development of new pages and features in Laravel / React / Vue.js projects.',
      'Using Git/Github as our version control system.',
    ],
    ...butterflyExpShared,
  },
  {
    jobTitle: 'Freelance',
    duration: 'From 01-10-2020 to 1-03-2021',
    details: ['Creating and updating mobile apps.', 'Riskin Android apps.', 'Native Android application development using Android Studio.'],
    ...mostaqlExperienceShared,
  },
  {
    jobTitle: 'Intern Web Developer',
    duration: 'From 01-07-2020 to 1-09-2020',
    details: ['Creation of a responsive dashboard page using React.', 'Development of a backend solution using Spring boot and JHipster.', 'Using Git/Gitlab as our version control system.'],
    projectsWorkedOn: [{ link: 'https://novy.novelis.io', comment: '(Internal Project)' }],
    ...internNovelisShared,
  },
  {
    jobTitle: 'Intern Mobile Developer',
    duration: 'From 01-09-2019 to 1-10-2019',
    details: ['Creation of an android/java text recognition application.', 'Creation of a dashboard using php to better visualize the data coming from the application.'],
    ...fcpoInternShared,
  },
];

const expsFR: Array<Experience> = [
  {
    jobTitle: 'Développeur Full Stack',
    duration: 'Du 20-12-2021 à Maintenant',
    details: [
      'Développement de sites web (recto/verso) à partir de designs Adobe XD.',
      'Développement de nouvelles pages et fonctionnalités en React / Nextjs.',
      'Développement de nouveaux Web Services et fonctionnalités en utilisant Java et Spring boot.',
      'Travailler sur des projets de microservices.',
      'Méthodologies agiles, Scrum, DevOps.',
      'Utilisation de Jenkins, Docker pour CI/CD.',
      'Développement de nouvelles pages et fonctionnalités dans un projet Wordpress (utilisation de plusieurs plugins : WPML, WPForms, Elementor).',
      'Création de plugins Wordpress personnalisés et de widgets Elementor personnalisés.',
      'Utilisation de Git/Gitlab comme système de contrôle de version.',
    ],
    projectsWorkedOn: [{ link: APICIL_LINK, comment: '(Client - APICIL)' }, { link: NOVELIS_LINK }, { link: NOVY_LINK, comment: '(Projet interne)' }],
    ...novelisExpShared,
  },
  {
    jobTitle: 'Développeur web',
    duration: 'Du 01-05-2021 au 20-12-2021',
    details: [
      'Travail sur de grands projets nationaux (Intaj Oriental, CRI Marrakech...).',
      'Intégration de contenu HTML5 / CSS3.',
      'Création de gabarits personnalisés (recto/verso) à partir de modèles Figma existants.',
      'Rendre le contenu des pages dynamique en utilisant Drupal et GraphQL.',
      'Développement de nouvelles pages et fonctionnalités dans les projets Laravel / React / Vue.js.',
      'Utiliser Git/Github comme système de contrôle de version.',
    ],
    ...butterflyExpShared,
  },
  {
    jobTitle: 'Freelance',
    duration: 'Du 01-10-2020 au 1-03-2021',
    details: ["Création et mise à jour d'applications mobiles.", 'Applications Android risquées.', "Développement d'applications Android natives avec Android Studio."],
    ...mostaqlExperienceShared,
  },
  {
    jobTitle: 'Développeur Web stagiaire',
    duration: 'Du 01-07-2020 au 1-09-2020',
    details: ["Création d'une page de tableau de bord responsive en utilisant React.", "Développement d'une solution backend utilisant Spring boot et JHipster.", 'Utiliser Git/Gitlab comme système de contrôle de version.'],
    projectsWorkedOn: [{ link: NOVY_LINK, comment: '(Projet interne)' }],
    ...internNovelisShared,
  },
  {
    jobTitle: 'Développeur mobile stagiaire',
    duration: 'Du 01-09-2019 au 1-10-2019',
    details: ["Création d'une application android/java de reconnaissance de texte.", "Création d'un tableau de bord en php pour mieux visualiser les données provenant de l'application."],
    ...fcpoInternShared,
  },
];

const expsAR: Array<Experience> = [
  {
    jobTitle: 'مطور',
    duration: 'من 20-12-2021 إلى الآن',
    details: [
      'تطوير مواقع الويب (الأمامية / الخلفية) من تصميمات Adobe XD.',
      'تطوير صفحات ووظائف جديدة في React / Nextjs.',
      'تطوير خدمات ووظائف ويب جديدة باستخدام Java و Spring boot.',
      'العمل في مشاريع الخدمات المصغرة.',
      'منهجيات Agile ، Scrum ، DevOps.',
      'باستخدام Jenkins ، Docker لـ CI / CD.',
      'تطوير صفحات ووظائف جديدة في مشروع Wordpress (استخدام عدة ملحقات: WPML و WPForms و Elementor).',
      'إنشاء ملحقات Wordpress مخصصة وعناصر واجهة مستخدم مخصصة.',
      'استخدام Git / Gitlab كنظام للتحكم في الإصدار.',
    ],
    projectsWorkedOn: [{ link: APICIL_LINK, comment: '(العميل - APICIL)' }, { link: NOVELIS_LINK }, { link: NOVY_LINK, comment: '(مشروع داخلي)' }],
    ...novelisExpShared,
  },
  {
    jobTitle: 'مطور ويب',
    duration: 'من 2021-05-01 إلى 2021-12-20',
    details: [
      'العمل في مشاريع وطنية كبرى (إنتاج أورينتال ، سي آر آي مراكش ...).',
      'تكامل محتوى HTML5 / CSS3.',
      'إنشاء قوالب مخصصة (أمامي / خلفي) من نماذج Figma الحالية.',
      'اجعل محتوى الصفحة ديناميكيًا باستخدام دروبال و GraphQL.',
      'تطوير صفحات وميزات جديدة في مشاريع Laravel / React / Vue.js.',
      'استخدم Git / Github كنظام تحكم في الإصدار.',
    ],
    ...butterflyExpShared,
  },
  {
    jobTitle: 'مستقل',
    duration: 'من 01-10-2020 إلى 1-03-2021',
    details: ['إنشاء وتحديث تطبيقات الجوال.', 'تطبيقات Android المحفوفة بالمخاطر.', 'تطوير تطبيقات Android الأصلية باستخدام Android Studio.'],
    ...mostaqlExperienceShared,
  },
  {
    jobTitle: 'مطور ويب متدرب',
    duration: 'من 01-07-2020 إلى 1-09-2020',
    details: ['إنشاء صفحة لوحة تحكم سريعة الاستجابة باستخدام React.', 'تطوير حل الواجهة الخلفية باستخدام Spring Boot و JHipster.', 'استخدم Git / Gitlab كنظام للتحكم في الإصدار.'],
    projectsWorkedOn: [{ link: NOVY_LINK, comment: '(مشروع داخلي)' }],
    ...internNovelisShared,
  },
  {
    jobTitle: 'مطور موبايل متدرب',
    duration: 'من 01-09-2019 إلي 1-10-2019',
    details: ['إنشاء تطبيق التعرف على نص android / java.', 'إنشاء لوحة معلومات في php لتصور البيانات القادمة من التطبيق بشكل أفضل.'],
    ...fcpoInternShared,
  },
];

const useExperiences = (): Array<Experience> => useContentByLanguage(expsEN, expsFR, expsAR);

export default useExperiences;
