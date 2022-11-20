import useContentByLanguage from '../hooks/utils';

export type Project = {
  name: string;
  details: string;
  technologies: Array<string>;
  img?: string;
  website?: string;
  github?: string;
};

const projectsEn: Array<Project> = [
  {
    name: 'Marrakech Invest',
    details:
      'It was a government project , they wanted to present the province of Marrakech-safi in the best possible way ... present every sector and convince good investors to take a look at this beautiful province and hopefully starting new projects in it. The project was built using Nuxtjs + tailwindcss in the front end , for the backend we have used Drupal as a headless CMS.I developed and created so many pages in this project , added new functionalities , linked it with Drupal , took care of hosting it , securing the server and adding SSL certificate and much more...',
    technologies: ['NuxtJS', 'Drupal', 'Vue js', 'Figma', 'JavaScript', 'GraphQL'],
    img: '/assets/projects/marrakechInvest.png',
    website: 'https://marrakechinvest.ma/',
  },
  {
    name: 'Novelis IO',
    details: "Development of a company's website. The technologies used are : Php, Wordpress , Elementor and Bootstrap. We didn't use an existing theme , we have created our own theme and plugins , using PHP and elementor custom widgets.",
    technologies: ['Wordpress', 'Elementor', 'Bootstrap', 'PHP', 'Adobe XD'],
    website: 'https://novelis.io/',
  },
  {
    name: 'Posters Gallery',
    details: 'Website to share posters (Full MERN Application) , ability to Sign in/up with Email or google OAuth, Add/update/delete posters and the website is Mobile responsive.',
    technologies: ['React', 'Material UI', 'OAuth2'],
    website: 'https://posters-app.netlify.app/',
    github: 'https://github.com/medabde/posters-gallery',
  },
  {
    name: 'Intaj',
    details: 'A platform for business-to-business transactions.',
    technologies: ['Laravel', 'Eloquent', 'Formik', 'React', 'Figma'],
    website: 'https://intajoriental.com/',
  },
  {
    name: 'Marrakech B2B',
    details:
      'Marrakech B2B is a business-to-business marketplace that connects sellers and other buyers with the aim of creating transparency in stock availability and levels, while allowing companies to internationalize their activities and reduce costs of marketing. The project was built using Nuxt js + tailwindcss in the frontend and Laravel in the backend. I was the responsible of this project from start (suggesting design , sketching...) to finish (development of various functionalities and pages , like auth system and data analytics , deployment of the front and the backend , and much more).',
    technologies: ['NuxtJS', 'Laravel', 'Vue js', 'Figma', 'Tailwind Css'],
    img: '/assets/projects/marrakechB2B.png',
    website: 'https://marrakechb2b.ma/',
  },
  {
    name: 'RenoshopBell',
    details: 'A simple and functionnal e-commerce website made with Symphony (with admin side).',
    technologies: ['Symfony', 'MySQL', 'PHP', 'HTML', 'CSS'],
    website: 'https://intajoriental.com/',
    github: 'https://github.com/medabde/renoshopBell_pfa_symfony',
  },
];
const projectsFR: Array<Project> = projectsEn;
const projectsAR: Array<Project> = projectsEn;

const useProjects = (): Array<Project> => useContentByLanguage(projectsEn, projectsFR, projectsAR);

export default useProjects;
