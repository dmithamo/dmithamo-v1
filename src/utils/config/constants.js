import placeholderScreen from '../../assets/temp-screenshot.png';
import budget from '../../assets/the-budget.png';
import timeline from '../../assets/the-timeline.png';

export default {
  smallLaptopBreakPoint: '1150px',
};

export const jobsHeld = [
  {
    title: 'Frontend Developer',
    company: 'Proto Energy',
    website: 'https://protoenergy.com',
    period: 'Nov 2020 - Present',
    description:
      'My teammates and I (the UI/UX team) design and develop cool and intutive UIs for diverse internal and customer-facing tools',
    roles: [
      'I write performant, testable and maintainable code, primarily in React, with Redux for state management',
      'I help design UIs for internal and customer-facing applications',
      'I document internal and customer-facing tools to facilitate stakeholder training on usage, as well as future developemnt and maintenance',
      'I mentor junior devs on the team towards helping build a truly capable and cohesive engineering team',
      '...(I am sure there will be more here)',
    ],
    techstack: [
      'javascript',
      'reactjs',
      'redux',
      'jest',
      'react-testing-library',
      'cypress',
    ],
    skills: [],
  },

  {
    title: 'Software Engineer',
    company: 'Novek',
    website: 'https://www.novek.io/',
    period: 'Oct 2019 - Oct 2020',
    description:
      'Owned UI development for the user interface of a web based dashboard designed to manage telemetry data collected from IoT devices',
    roles: [
      'Wrote robust UI code using the React library, with Redux for state managemennt',
      'Wrote unit tests using Jest, the React Testing Library and similar tools to guarantee code functions as expected',
      'Wrote e-2-e tests using Cypress to guarantee code meets design specifications',
      'Documented internal and client facing products to facilitate usage and future maintenance',
    ],
    techstack: [
      'javascript',
      'reactjs',
      'redux',
      'jest',
      'react-testing-library',
      'cypress',
    ],
    skills: [],
  },

  {
    title: 'Associate software engineer',
    company: 'Andela',
    website: 'https://andela.com/',
    period: 'Nov 2018 - Oct 2019',
    description:
      'Collaborated on the development of a web based tool designed to manage interaction between financial coaches and their clients',
    roles: [
      'Wrote robust UI code using the React library, with Redux for state management',
      'Wrote unit tests using Jest, Enzyme and similar libraries to guarantee code functions as expected',
      'Wrote e-2-e tests using Cypress to guarantee code meets design specifications',
    ],
    techstack: [
      'typescript',
      'javascript',
      'reactjs',
      'redux',
      'jest',
      'cypress',
      'enzyme',
    ],
    skills: [],
  },
];

export const projectsOnCourse = [
  {
    title: 'The Budget',
    description:
      "A native application designed to manage a user's expenses and budgets",
    website: '',
    repo: 'https://github.com/dmithamo/thebudget',
    screenshot: budget,
    techtack: [
      'javascript',
      'react-native',
      'redux',
      'html/css',
      'styled-components',
    ],
  },
  {
    title: 'The Timeline',
    description:
      "A web app designed to visualize a user's growth by reading their Git(Hub, Lab...) profile(s)",
    website: 'https://the-timeline.netlify.app',
    repo: 'https://github.com/dmithamo/the-timeline',
    screenshot: timeline,
    techtack: [
      'javascript',
      'typescript',
      'reactjs',
      'redux',
      'html/css',
      'styled-components',
    ],
  },

  {
    title: 'The Timeline (API)',
    description:
      "The API for a web app designed to visualize a user's growth by reading their Git(Hub,Lab...) profile(s)",
    website: '',
    repo: 'https://github.com/dmithamo/timelineapi',
    screenshot: placeholderScreen,
    techtack: ['go'],
  },

  {
    title: 'GitHub Stats',
    description:
      "A web app designed to offer an in-a-nutshell overview of a dev's profile on GitHub.",
    website: '',
    repo: 'https://github.com/dmithamo/github-stats',
    screenshot: placeholderScreen,
    techtack: [
      'javascript',
      'react-native',
      'redux',
      'html/css',
      'styled-components',
    ],
  },
];
