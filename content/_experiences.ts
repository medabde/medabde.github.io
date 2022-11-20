import useContentByLanguage from '../hooks/utils';

type Experience = {
  jobTitle: string;
  companyName: string;
  duration: string;
  details: Array<string>;
  technologies: Array<string>;
  image: string;
  projectsWorkedOn?: Array<Project>;
};
export type Project = {
  link: string;
  comment?: string;
};

const expsEN: Array<Experience> = [
  {
    jobTitle: 'Full Stack Developer',
    companyName: 'Novelis',
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
    technologies: ['NextJS', 'React', 'Material UI', 'Wordpress', 'Elementor', 'PHP', 'Java', 'Spring', 'Jenkins', 'Docker'],
    image: '/assets/experience/novelis.png',
    projectsWorkedOn: [{ link: 'https://www.intencial.fr/accueil', comment: '(Client - APICIL)' }, { link: 'https://novelis.io' }, { link: 'https://novy.novelis.io', comment: '(Internal Project)' }],
  },
  {
    jobTitle: 'Web Developer',
    companyName: 'Digital Butterfly',
    duration: 'From 01-05-2021 to 20-12-2021',
    details: [
      'Working on big national projects (Intaj Oriental, CRI Marrakech ...).',
      'Integration of HTML5 / CSS3 content.',
      'Creation of custom templates (front/back) from existing Figma models.',
      'Making pages content dynamic using Drupal and GraphQL.',
      'Development of new pages and features in Laravel / React / Vue.js projects.',
      'Using Git/Github as our version control system.',
    ],
    technologies: ['NuxtJS', 'Vue', 'Wordpress', 'Laravel', 'PHP', 'Digital Ocean', 'Tailwind Css'],
    image: '/assets/experience/digital-butterfly.png',
    projectsWorkedOn: [{ link: 'https://marrakechb2b.ma' }, { link: 'https://marrakechinvest.ma' }, { link: 'https://intajoriental.com' }],
  },
  {
    jobTitle: 'Freelance',
    companyName: 'Mostaql',
    duration: 'From 01-10-2020 to 1-03-2021',
    details: ['Creating and updating mobile apps.', 'Riskin Android apps.', 'Native Android application development using Android Studio.'],
    technologies: ['Android', 'Java', 'Android Studio'],
    image: '/assets/experience/mostaql.png',
  },
  {
    jobTitle: 'Intern Web Developer',
    companyName: 'Novelis',
    duration: 'From 01-07-2020 to 1-09-2020',
    details: ['Creation of a responsive dashboard page using React.', 'Development of a backend solution using Spring boot and JHipster.', 'Using Git/Gitlab as our version control system.'],
    technologies: ['React', 'Jhipster', 'Java', 'Spring', 'Material UI'],
    image: '/assets/experience/novelis.png',
    projectsWorkedOn: [{ link: 'https://novy.novelis.io', comment: '(Internal Project)' }],
  },
  {
    jobTitle: 'Intern Mobile Developer',
    companyName: 'FCPO',
    duration: 'From 01-09-2019 to 1-10-2019',
    details: ['Creation of an android/java text recognition application.', 'Creation of a dashboard using php to better visualize the data coming from the application.'],
    technologies: ['Android', 'Java', 'Android Studio', 'PHP', 'HTML', 'CSS'],
    image: '/assets/experience/fcpo.png',
  },
];
const expsFR: Array<Experience> = expsEN;
const expsAR: Array<Experience> = expsEN;

const useExperiences = (): Array<Experience> => useContentByLanguage(expsEN, expsFR, expsAR);

export default useExperiences;
