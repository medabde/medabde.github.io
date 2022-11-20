import useContentByLanguage from '../hooks/utils';

type WhatIdo = {
  whatIdo: string;
  explanation: string;
  bulletPoints?: Array<string>;
};

const whatIdoEN: Array<WhatIdo> = [
  {
    whatIdo: 'Front-end Development',
    explanation: 'Develop advanced web applications with modern technologies and frameworks such as NextJs, NuxtJs, React and Vue.',
    bulletPoints: ['Develop single page applications (SPA) using native JS/TS or a specific library.', 'Creation of custom templates from existing Figma/Adobe XD designs.'],
  },
  {
    whatIdo: 'Back-end Development',
    explanation: 'Develop advanced, secure and reliable APIs using Java/Spring.',
    bulletPoints: ['Development of new Web Services and functionalities.', 'Creating/Working on microservices projects', 'Creating new templates/plugins for a Wordpress website using PHP'],
  },
  {
    whatIdo: 'DevOps',
    explanation: 'Introduce processes, tools, and methodologies to balance needs throughout the software development life cycle, from coding and deployment, to maintenance and updates.',
    bulletPoints: ['Using Jenkins, Docker for CI/CD.', 'Handling production problems.', 'Deploying web applications in a remote server (such as a Droplet in Digital Ocean).'],
  },
  {
    whatIdo: 'Solving Problems',
    explanation: 'Keeping my brain sharp by challenging my self each day and improve my ability to solve all kinds of problems.',
    bulletPoints: ['Solving Algorithm problems in websites such as LeetCode.', 'Participating in multiple algorithm/coding challenges (ACPC).', 'Solving 3 algorithms of the Google Foobar challenge.'],
  },
  {
    whatIdo: 'Mobile Development',
    explanation: 'Creating apps using Android Studio and Java.',
    bulletPoints: ['Adding new functionalities  to an existing app.', 'Creating and managing an Android App.'],
  },
];

const whatIdoFR: Array<WhatIdo> = [
  {
    whatIdo: 'Development Front-end',
    explanation: 'Développer des applications Web avancées avec des technologies et des cadres modernes tels que NextJs, NuxtJs, React et Vue.',
    bulletPoints: ['Développer des applications monopage (SPA) en utilisant JS/TS natif ou une bibliothèque spécifique.', 'Développement des sites web à partir des maquettes Figma/Adobe XD existantes.'],
  },
  {
    whatIdo: 'Development Back-end',
    explanation: "Développez des API avancées, sécurisées et fiables à l'aide de Java/Spring.",
    bulletPoints: ['Développement de nouveaux Web Services et fonctionnalités.', 'Créer/Travailler sur des projets microservices.', "Création de nouveaux modèles/plugins pour un site Web Wordpress à l'aide de PHP."],
  },
  {
    whatIdo: 'DevOps',
    explanation: 'Introduire des processus, des outils et des méthodologies pour équilibrer les besoins tout au long du cycle de vie du développement logiciel, du codage et du déploiement à la maintenance et aux mises à jour.',
    bulletPoints: ['Utilisation de Jenkins, Docker pour CI/CD.', 'Gestion des problèmes de MEP.', 'Déployer des applications Web sur un serveur distant (comme un Droplet dans Digital Ocean).'],
  },
  {
    whatIdo: 'Résoudre les problèmes',
    explanation: 'Garder mon cerveau vif en me mettant au défi chaque jour et en améliorant ma capacité à résoudre toutes sortes de problèmes.',
    bulletPoints: ["Résoudre les problèmes d'algorithme sur des sites Web tels que LeetCode.", "Participer à de multiples défis d'algorithme/codage (ACPC).", 'Résoudre 3 algorithmes du défi Google Foobar.'],
  },
  {
    whatIdo: 'Développement mobile',
    explanation: "Création d'applications avec Android Studio et Java.",
    bulletPoints: ['Ajouter de nouvelles fonctionnalités à une application existante.', "Création et gestion d'une application Android."],
  },
];

const whatIdoAR: Array<WhatIdo> = [
  {
    whatIdo: 'تطوير الواجهة الأمامية',
    explanation: 'طوّر تطبيقات ويب متقدمة بتقنيات وأطر عمل حديثة مثل NextJs و NuxtJs و React و Vue.',
    bulletPoints: ['بتطوير تطبيقات صفحة واحدة (SPA) باستخدام JS / TS الأصلي أو مكتبة معينة.', 'إنشاء قوالب مخصصة من تصميمات Figma / Adobe XD .'],
  },
  {
    whatIdo: 'تطوير الخلفية',
    explanation: 'تطوير واجهات برمجة تطبيقات متقدمة وآمنة وموثوقة باستخدام Java / Spring.',
    bulletPoints: ['تطوير خدمات ووظائف ويب جديدة.', 'إنشاء / العمل على مشاريع الخدمات المصغرة', 'إنشاء قوالب / ملحقات جديدة لموقع Wordpress باستخدام PHP'],
  },
  {
    whatIdo: 'DevOps',
    explanation: 'تقديم العمليات والأدوات والمنهجيات لموازنة الاحتياجات طوال دورة حياة تطوير البرامج ، من الترميز والنشر إلى الصيانة والتحديثات.',
    bulletPoints: ['استخدام Jenkins ، Docker لـ CI / CD.', 'معالجة مشاكل الإنتاج.', 'نشر تطبيقات الويب في خادم بعيد (مثل Droplet في Digital Ocean).'],
  },
  {
    whatIdo: 'حل المشاكل',
    explanation: 'الحفاظ على دماغي حادًا من خلال تحدي نفسي كل يوم وتحسين قدرتي على حل جميع أنواع المشاكل.',
    bulletPoints: ['حل مشاكل الخوارزمية في مواقع الويب مثل LeetCode.', 'المشاركة في تحديات الخوارزميات / الترميز المتعددة (ACPC).', 'حل 3 خوارزميات لتحدي Google Foobar.'],
  },
  {
    whatIdo: 'تطوير موبايل',
    explanation: 'إنشاء تطبيقات باستخدام Android Studio و Java.',
    bulletPoints: ['إضافة وظائف جديدة إلى تطبيق موجود.', 'إنشاء وإدارة تطبيق Android.'],
  },
];

const useWhatIDo = (): Array<WhatIdo> => useContentByLanguage(whatIdoEN, whatIdoFR, whatIdoAR);

export default useWhatIDo;
