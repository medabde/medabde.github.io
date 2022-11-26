import useContentByLanguage from '../hooks/utils';

export type Project = {
  name?: string;
  details?: string;
  technologies?: Array<string>;
  img?: string;
  website?: string;
  github?: string;
};

const marrakechInvestShared: Project = {
  name: 'Marrakech Invest',
  technologies: ['NuxtJS', 'Drupal', 'Vue js', 'Figma', 'JavaScript', 'GraphQL'],
  img: '/assets/projects/marrakechInvest.png',
  website: 'https://marrakechinvest.ma/',
};
const novelisIOShared: Project = {
  name: 'Novelis IO',
  technologies: ['Wordpress', 'Elementor', 'Bootstrap', 'PHP', 'Adobe XD'],
  website: 'https://novelis.io/',
};
const postersGalleryShared: Project = {
  name: 'Posters Gallery',
  technologies: ['React', 'Material UI', 'OAuth2'],
  website: 'https://posters-app.netlify.app/',
  github: 'https://github.com/medabde/posters-gallery',
};
const intajShared: Project = {
  name: 'Intaj',
  technologies: ['Laravel', 'Eloquent', 'Formik', 'React', 'Figma'],
  website: 'https://intajoriental.com/',
};
const marrakechB2BShared: Project = {
  name: 'Marrakech B2B',
  technologies: ['NuxtJS', 'Laravel', 'Vue js', 'Figma', 'Tailwind Css'],
  img: '/assets/projects/marrakechB2B.png',
  website: 'https://marrakechb2b.ma/',
};
const renoshobBellShared: Project = {
  name: 'RenoshopBell',
  technologies: ['Symfony', 'MySQL', 'PHP', 'HTML', 'CSS'],
  github: 'https://github.com/medabde/renoshopBell_pfa_symfony',
};

const projectsEn: Array<Project> = [
  {
    details:
      'It was a government project , they wanted to present the province of Marrakech-safi in the best possible way ... present every sector and convince good investors to take a look at this beautiful province and hopefully starting new projects in it. The project was built using Nuxtjs + tailwindcss in the front end , for the backend we have used Drupal as a headless CMS.I developed and created so many pages in this project , added new functionalities , linked it with Drupal , took care of hosting it , securing the server and adding SSL certificate and much more...',
    ...marrakechInvestShared,
  },
  {
    details: "Development of a company's website. The technologies used are : Php, Wordpress , Elementor and Bootstrap. We didn't use an existing theme , we have created our own theme and plugins , using PHP and elementor custom widgets.",
    ...novelisIOShared,
  },
  {
    details: 'Website to share posters (Full MERN Application) , ability to Sign in/up with Email or google OAuth, Add/update/delete posters and the website is Mobile responsive.',
    ...postersGalleryShared,
  },
  {
    details: 'A platform for business-to-business transactions.',
    ...intajShared,
  },
  {
    details:
      'Marrakech B2B is a business-to-business marketplace that connects sellers and other buyers with the aim of creating transparency in stock availability and levels, while allowing companies to internationalize their activities and reduce costs of marketing. The project was built using Nuxt js + tailwindcss in the frontend and Laravel in the backend. I was the responsible of this project from start (suggesting design , sketching...) to finish (development of various functionalities and pages , like auth system and data analytics , deployment of the front and the backend , and much more).',
    ...marrakechB2BShared,
  },
  {
    details: 'A simple and functionnal e-commerce website made with Symphony (with admin side).',
    ...renoshobBellShared,
  },
];

const projectsFR: Array<Project> = [
  {
    details:
      "C'était un projet gouvernemental, ils voulaient présenter la province de Marrakech-safi de la meilleure façon possible ... présenter chaque secteur et convaincre de bons investisseurs de jeter un coup d'œil sur cette belle province et, espérons-le, d'y lancer de nouveaux projets. Le projet a été construit en utilisant Nuxtjs + tailwindcss en front-end, pour le backend nous avons utilisé Drupal comme CMS sans tête. , sécurisation du serveur et ajout de certificat SSL et bien plus encore...",
    ...marrakechInvestShared,
  },
  {
    details: "Développement du site internet d'une entreprise. Les technologies utilisées sont : Php, Wordpress, Elementor et Bootstrap. Nous n'avons pas utilisé de thème existant, nous avons créé notre propre thème et plugins, en utilisant PHP et des widgets personnalisés elementor.",
    ...novelisIOShared,
  },
  {
    details: "Site Web pour partager des affiches (application MERN complète), possibilité de se connecter/s'inscrire avec un e-mail ou Google OAuth, d'ajouter/mettre à jour/supprimer des affiches et le site Web est adapté aux mobiles.",
    ...postersGalleryShared,
  },
  {
    details: 'Une plate-forme pour les transactions interentreprises.',
    ...intajShared,
  },
  {
    details:
      "Marrakech B2B est une place de marché interentreprises qui met en relation des vendeurs et d'autres acheteurs dans le but de créer une transparence dans la disponibilité et les niveaux des stocks, tout en permettant aux entreprises d'internationaliser leurs activités et de réduire les coûts de commercialisation. Le projet a été construit en utilisant Nuxt js + tailwindcss en frontend et Laravel en backend. J'étais le responsable de ce projet du début (suggestion de conception, croquis...) à la fin (développement de diverses fonctionnalités et pages, comme le système d'authentification et l'analyse de données, déploiement du front et du backend, et bien plus encore).",
    ...marrakechB2BShared,
  },
  {
    details: 'Un site ecommerce simple et fonctionnel réalisé avec Symphony (avec côté admin).',
    ...renoshobBellShared,
  },
];

const projectsAR: Array<Project> = [
  {
    details:
      'لقد كان مشروعًا حكوميًا ، فقد أرادوا تقديم مقاطعة مراكش آسفي بأفضل طريقة ممكنة ... تقديم كل قطاع وإقناع المستثمرين الجيدين بإلقاء نظرة على هذه المقاطعة الجميلة ونأمل أن يبدأوا مشاريع جديدة فيها. تم إنشاء المشروع باستخدام Nuxtjs + tailwindcss في الواجهة الأمامية ، بالنسبة للواجهة الخلفية ، استخدمنا دروبال كنظام إدارة محتوى بدون رأس ، لقد طورت وأنشأت العديد من الصفحات في هذا المشروع ، وأضفت وظائف جديدة ، وربطتها بدروبال ، وتهتمت باستضافتها وتأمين الخادم واضافة شهادة SSL والمزيد ...',
    ...marrakechInvestShared,
  },
  {
    details: 'تطوير موقع الشركة. التقنيات المستخدمة هي: Php و Wordpress و Elementor و Bootstrap. لم نستخدم سمة موجودة ، لقد أنشأنا السمة والإضافات الخاصة بنا ، باستخدام عناصر واجهة مستخدم PHP و elementor المخصصة.',
    ...novelisIOShared,
  },
  {
    details: 'موقع ويب لمشاركة الملصقات (تطبيق MERN الكامل) ، والقدرة على تسجيل الدخول / الاشتراك بالبريد الإلكتروني أو google OAuth ، وإضافة / تحديث / حذف الملصقات والموقع الإلكتروني يستجيب للجوال.',
    ...postersGalleryShared,
  },
  {
    details: 'منصة للمعاملات بين الشركات.',
    ...intajShared,
  },
  {
    details:
      'مراكش B2B هو سوق للأعمال التجارية يربط البائعين والمشترين الآخرين بهدف خلق شفافية في توافر المخزون ومستوياته ، مع السماح للشركات بتدويل أنشطتها وتقليل تكاليف التسويق. تم بناء المشروع باستخدام Nuxt js + tailwindcss في الواجهة الأمامية و Laravel في الواجهة الخلفية. كنت مسؤولاً عن هذا المشروع من البداية (اقتراح التصميم ، والرسم ...) حتى النهاية (تطوير وظائف وصفحات مختلفة ، مثل نظام المصادقة وتحليلات البيانات ، ونشر الواجهة الأمامية والخلفية ، وغير ذلك الكثير).',
    ...marrakechB2BShared,
  },
  {
    details: 'موقع إلكتروني بسيط وعملي للتجارة الإلكترونية تم إنشاؤه باستخدام Symphony (بجانب المسؤول).',
    ...marrakechB2BShared,
  },
];
const useProjects = (): Array<Project> => useContentByLanguage(projectsEn, projectsFR, projectsAR);

export default useProjects;
