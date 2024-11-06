import type {
  Education,
  Honors,
  Interests,
  Intro,
  Project,
  Technology,
  Work,
} from './types'

export const fullVersionLink = 'https://resume.narze.live'
export const sourceLink = 'https://github.com/narze/resume'
export const ogImageUrl =
  'https://og-image.vercel.app/Resumette.png?theme=light&md=1&fontSize=200px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg'

export const introData: Intro = {
  name: 'Supakarn Laorattanakul',
  nickname: 'Prompt',
  phone: '',
  email: 'wearedprompt@gmail.com',
  location: 'Bangkok, Thailand',
  links: [
    ['GitHub', 'https://github.com/iamprompt'],
    ['LinkedIn', 'https://linkedin.com/in/iamprompt'],
    // ['Website', 'https://iamprompt.me'],
    ['Medium', 'https://iamprompt.medium.com'],
  ],
} as const

export const technologies: Array<Technology> = [
  {
    section: 'Languages',
    details: [
      'TypeScript',
      'JavaScript',
      'NodeJS',
      'Python',
      'SQL',
      'Java',
      'C',
    ],
  },
  {
    section: 'Frameworks',
    details: [
      'LINE Front-end Framework (LIFF)',
      'LINE Messaging API',
      'Next.js',
      'React.js',
      'TailwindCSS',
      'NestJS',
      'ElysiaJS',
      'NuxtJS',
      'VueJS',
      'ExpressJS',
    ],
  },
  {
    section: 'Development Tools',
    details: [
      'Git',
      'Docker',
      'Firebase',
      'Vercel',
      'Cloudflare',
      'GitHub Actions',
      'GitLab CI/CD',
      'Google Cloud Build',
    ],
  },
  {
    section: 'Testing Tools',
    details: ['Cypress', 'Jest', 'Playwright', 'Puppeteer'],
  },
  {
    section: 'Productivity Tools',
    details: [
      'Notion',
      'Figma',
      'Airtable',
      'Jira',
      'Microsoft 365 (Word, Excel, PowerPoint)',
      'Google Workspace (Docs, Sheets, Slides)',
    ],
  },
]

export const educations: Array<Education> = [
  {
    head: 'B.Sc. Information and Communication Technology (Software Engineering)',
    details: 'Mahidol University, TH (GPA 3.80 - First Class Honors)',
  },
]

export const workExperiences: Array<Work> = [
  {
    position: 'Full-stack Developer',
    company: 'Abbon Corporation',
    url: 'https://abbon.co.th',
    years: ['Apr 2023', 'Present'],
    details: [
      'Developed a web application integrated with LINE Front-end Framework (LIFF) for LINE Connect service registration with ReactJS, TailwindCSS, and ViteJS',
      'Built a marketing platform focused on LINE Beacon service, LINE Official Notifications, and LINE Messaging API with NextJS, TailwindCSS, NestJS, Firebase, and PostgreSQL',
    ],
  },
  {
    position: 'Web Developer',
    company: 'Show No Limit',
    url: 'https://beartai.com',
    years: ['Mar 2022', 'Apr 2023'],
    details: [
      'Developed a movie catalog website using NextJS, TailwindCSS, NodeJS, ExpressJS, and PayloadCMS',
      'Created a WordPress plugin to customize RSS feed and REST API to integrate with other services',
      'Developed a LINE Front-end Framework (LIFF) application for event registration',
    ],
  },
  {
    position: 'Intern Software Engineer',
    company: 'Skooldio',
    url: 'https://skooldio.com',
    years: ['Jun 2021', 'Jul 2021'],
    details: [
      'Developed a website for course recommendation system using ViteJS with ReactJS, Material UI, and NestJS',
      'Migrated project to specific project monorepo with NX and CI/CD pipeline in Google Cloud Build',
      'Implemented Kaniko to build Docker images in Google Cloud Build with less build time',
    ],
  },
  {
    position: 'Freelance Technology Content Writer',
    company: 'Show No Limit',
    url: 'https://beartai.com',
    years: ['Oct 2015', 'Present'],
    details: [
      'Wrote tips and tricks, tutorial, and technology-related articles for Beartai.com',
      'Summarized and translated interesting technology news for Thai readers',
    ],
  },
]

export const projects: Array<Project> = [
  {
    name: 'Flex Render',
    tagline: 'NPM Package for rendering LINE Flex Message in HTML',
    links: [
      ['GitHub', 'https://github.com/iamprompt/flex-render'],
      ['Medium', 'https://medium.com/linedevth/03f7b2610203'],
    ],
  },
  {
    name: 'Sawasdee Studio',
    tagline: 'LIFF App for sending custom LINE Flex Message to friends',
    links: [
      ['GitHub', 'https://github.com/iamprompt/line-sawasdee'],
      ['Medium', 'https://medium.com/linedevth/0a53ab1b781c'],
      ['App', 'https://line-sawasdee.iamprompt.me'],
    ],
  },
  {
    name: 'MUICT Open House 2022',
    tagline: 'LINE Integration for Open House Attendee Registration',
    details:
      'MUICT Open House 2022 Event Registration LIFF Application using NextJS, TailwindCSS, NodeJS, ExpressJS, LINE Messaging API, and LINE Front-end Framework (LIFF)',
    links: [
      ['GitHub', 'https://github.com/iamprompt/muict-openhouse-2022'],
      ['Medium', 'https://iamprompt.medium.com/bfd676c1feb7'],
    ],
  },
  {
    name: 'Enhanced Disney+ Hotstar Chrome Extension',
    details:
      'A Chrome extension to enhance Disney+ Hotstar experience by changing subtitle style',
    links: [
      ['GitHub', 'https://github.com/iamprompt/enhanced-dhs-chrome-ext'],
      [
        'Chrome Web Store',
        'https://chromewebstore.google.com/detail/ggonogpephoeedoopcdnhnfdlaoeiben',
      ],
    ],
  },
]

export const honors: Array<Honors> = [
  {
    name: 'LINE API Expert',
    issuer: 'LY Corporation (formerly LINE Corporation)',
    years: ['2023', 'Present'],
    details: [
      'Support the LINE Developers Community in Thailand by sharing knowledge and experience in LINE API and services',
    ],
  },
  {
    name: 'LINE Hack 2020 Winner (1st Place in Student Category)',
    issuer: 'LINE Thailand',
    details: [
      'Developed a LINE Chatbot to help group gathering using LINE Front-end Framework (LIFF) and LINE Messaging API with NuxtJS, NodeJS, and Firebase',
    ],
  },
]

export const interests: Array<Interests> = []
