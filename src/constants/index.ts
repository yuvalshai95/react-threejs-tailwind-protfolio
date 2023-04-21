import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  fibonatix,
  zoominfo,
  carrent,
  jobit,
  tripguide,
  threejs,
  angular,
  nest,
  jest,
} from '../assets';

// TODO: move to interfaces folder

export interface INavLink {
  id: string;
  title: string;
}

export interface IService {
  title: string;
  icon: string;
}

export interface ITechnology {
  name: string;
  icon: string;
}

export interface IExperience {
  title: string;
  companyName: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

export interface ITestimonial {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}

export interface IProject {
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  sourceCodeLink: string;
}

export const navLinks: INavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services: IService[] = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Angular/React Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Problem Solving',
    icon: creator,
  },
];

const technologies: ITechnology[] = [
  {
    name: 'Angular',
    icon: angular,
  },
  {
    name: 'Nest',
    icon: nest,
  },
  {
    name: 'Jest',
    icon: jest,
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  // {
  //   name: 'Three JS',
  //   icon: threejs,
  // },
  {
    name: 'git',
    icon: git,
  },
  // {
  //   name: 'figma',
  //   icon: figma,
  // },
  // {
  //   name: 'docker',
  //   icon: docker,
  // },
];

const experiences: IExperience[] = [
  {
    title: 'Angular Full Stack Software Engineer',
    companyName: 'ZoomInfo',
    icon: zoominfo,
    iconBg: '#E6DEDD',
    date: 'June 2022 - Present',
    points: [
      'Build connectors for external CRMs using Angular, Nest.js, Express.js and other related technologies.',
      "Develop and maintain admin portal integration's platform",
      'Optimize portal performance for improved scalability and maintainability.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality features and products.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'React Developer',
    companyName: 'Fibonatix',
    icon: fibonatix,
    iconBg: '#383E56',
    date: 'April 2022 - June 2022',
    points: [
      'Developing and maintaining payment processing back office platform using React.js + Typescript and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality features and products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
];

const testimonials: ITestimonial[] = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects: IProject[] = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    sourceCodeLink: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    sourceCodeLink: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    sourceCodeLink: 'https://github.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };
