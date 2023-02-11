import type {
  Education,
  Honors,
  Interests,
  Project,
  Technology,
  Work,
} from './types'

export const fullVersionLink = 'https://resume.narze.live'
export const sourceLink = 'https://github.com/narze/resume'
export const ogImageUrl =
  'https://og-image.vercel.app/Resumette.png?theme=light&md=1&fontSize=200px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg'

export const introData = {
  name: 'Supakarn Laorattanakul',
  nickname: 'Prompt',
  phone: '',
  email: 'wearedprompt@gmail.com',
  github: 'iamprompt',
  linkedin: 'iamprompt',
  location: 'Bangkok, Thailand',
  website: '',
}

export const technologies: Array<Technology> = [
  {
    section: 'Languages',
    details: [
      'JavaScript',
      'NodeJS',
      'TypeScript',
      'SQL',
      'Python',
      'Java',
      'C',
    ],
  },
  {
    section: 'Frameworks',
    details: [
      'ReactJS',
      'NextJS',
      'TailwindCSS',
      'VueJS',
      'NuxtJS',
      'ExpressJS',
      'LINE Front-end Framework (LIFF)',
      'LINE Messaging API',
    ],
  },
  {
    section: 'Development Tools',
    details: [
      'Git',
      'Docker',
      'Firebase',
      'Vercel',
      'CloudFlare',
      'GitHub Actions',
      'GitLab CI/CD',
    ],
  },
  {
    section: 'Productivity Tools',
    details: [
      'Notion',
      'Figma',
      'Airtable',
      'Microsoft 365',
      'Google Workspace',
    ],
  },
]

export const educations: Array<Education> = [
  {
    head: 'B.Sc. Information and Communication Technology (Software Engineering)',
    details: 'Mahidol University, TH. Expected 2023 (GPA 3.79)',
  },
]

export const workExperiences: Array<Work> = [
  {
    position: 'Web Developer',
    company: 'Show No Limit',
    url: 'https://beartai.com',
    years: ['2022', 'Present'],
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
    years: ['2021'],
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
    years: ['2015', 'Present'],
    details: [
      'Wrote tips and tricks, tutorial, and technology-related articles for Beartai.com',
      'Summarized and translated interesting technology news for Thai readers',
    ],
  },
]

export const projects: Array<Project> = [
  {
    name: 'MUICT Open House 2022 Activity Web Application',
    details:
      'A website for MUICT Open House 2022 event registration using NextJS, TailwindCSS, NodeJS, ExpressJS, and LINE Front-end Framework (LIFF)',
    url: 'github.com/iamprompt/muict-openhouse-2022',
  },
  {
    name: 'Enhanced Disney+ Hotstar Chrome Extension',
    details:
      'A Chrome extension to enhance Disney+ Hotstar experience by changing subtitle style',
    url: 'chrome.google.com/webstore/detail/enhanced-disney+-hotstar/ggonogpephoeedoopcdnhnfdlaoeiben',
  },
]

export const honors: Array<Honors> = [
  {
    name: 'LINE Hack 2020 Winner (1st Place in Student Category)',
    details: [
      'Developed a LINE Chatbot to help group gathering using LINE Front-end Framework (LIFF) and LINE Messaging API with NuxtJS, NodeJS, and Firebase',
    ],
  },
]

export const interests: Array<Interests> = []
