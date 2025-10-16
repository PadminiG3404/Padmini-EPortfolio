import { ExperienceItem } from '@/types/ExperienceItem';

export const experienceData: ExperienceItem[] = [
  {
    title: 'ML & Full-Stack Intern',
    org: 'APTPath',
    date: 'Jun 2025 – Present',
    location: 'Remote',
    logo: '/logos/aptpath.png',
    type: 'Internship',
    skills: ['React', 'FastAPI', 'MongoDB', 'Python', 'Git'],
    description: 'Working on SweetSpot, a full-stack cake delivery platform.',
    highlights: [
      'Built frontend UI components in React',
      'Integrated backend logic in FastAPI',
      'Worked with MongoDB for scalable storage'
    ]
  },
  {
    title: 'Google Girls Hackathon 2025 – Semifinalist',
    org: 'Google',
    date: 'May 2025',
    logo: '/logos/google.png',
    type: 'Hackathon',
    skills: ['React', 'FastAPI', 'Ollama', 'OCR', 'NLP'],
    description: 'Built TaxMate — an AI-powered Tax Assistant with offline LLM + OCR.',
    highlights: ['OCR pipeline for PDFs', 'LLM integration with Ollama', 'Frontend with React']
  },
  {
    title: 'Research Paper Presenter',
    org: 'IEEE DELCON 2024',
    date: 'Feb 2024',
    logo: '/logos/ieee.png',
    type: 'Research',
    skills: ['NAS', 'Drug Response Prediction', 'PyTorch', 'Deep Learning'],
    description: 'Presented paper on NAS for predicting cancer drug response.',
    link: 'https://ieeexplore.ieee.org/',
  },
  {
    title: 'AI Art Battle Volunteer',
    org: 'Promethean 2K23',
    date: 'Nov 2023',
    logo: '/logos/promethean.png',
    type: 'Volunteering',
    skills: ['Teamwork', 'Event Management'],
    description: 'Assisted in organizing AI Art Battle event.',
  }
];
