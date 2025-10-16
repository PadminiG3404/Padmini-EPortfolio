export type Skill = {
  name: string
  level?: 'Beginner' | 'Intermediate' | 'Proficient'
}

export type SkillCategory = {
  id: string
  title: string
  description: string
  skills: Skill[]
  color?: string
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: '🛠 Programming Languages',
    description: 'Core languages I use to architect logic and bring solutions to life.',
    color: 'gold',
    skills: [
      { name: 'Python', level: 'Proficient' },
      { name: 'Java', level: 'Proficient' },
      { name: 'JavaScript', level: 'Intermediate' },
      { name: 'R' },
      { name: 'Haskell', level: 'Beginner' },
      { name: 'SQL', level: 'Proficient' },
    ],
  },
  {
    id: 'aiml',
    title: '🧠 AI / ML Frameworks',
    description: 'My tools for building intelligent, data-driven systems.',
    color: 'rose',
    skills: [
      { name: 'TensorFlow' },
      { name: 'PyTorch' },
      { name: 'Scikit-learn' },
      { name: 'OpenAI API' },
      { name: 'CLIP' },
      { name: 'HuggingFace Transformers' },
      { name: 'RAG' },
      { name: 'Pinecone' },
    ],
  },
  {
    id: 'webdev',
    title: '💻 Web Development',
    description: 'Where design meets logic — full-stack power with elegant frontends.',
    color: 'blue',
    skills: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'FastAPI' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    id: 'tools',
    title: '🛠 Tools & Platforms',
    description: 'My daily workflow: Dev environments, version control, and deployment.',
    color: 'lilac',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'VS Code' },
      { name: 'Jupyter Notebook' },
      { name: 'Linux CLI' },
      { name: 'Google Colab' },
      { name: 'Docker' },
    ],
  },
  {
    id: 'softskills',
    title: '✨ Soft Skills & Mindset',
    description: 'What powers my projects beyond code.',
    color: 'green',
    skills: [
      { name: 'Problem Solving' },
      { name: 'Communication' },
      { name: 'Creativity' },
      { name: 'UI Thinking' },
      { name: 'Leadership' },
      { name: 'Time Management' },
    ],
  },
]
