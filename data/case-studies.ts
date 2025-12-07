export interface CaseStudy {
  id: string;
  company: string;
  role: string;
  roleType: 'CTO' | 'Senior Engineer' | 'Engineer';
  industry: string;
  duration: string;
  logo?: string;
  featured?: boolean;
  problem: string;
  solutions: string[];
  results: {
    metric: string;
    value: string;
    direction: 'up' | 'down';
  }[];
  techStack: string[];
  testimonial?: {
    quote: string;
    author: string;
    title: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'paya-finance',
    company: 'Paya Finance',
    role: 'Chief Technology Officer',
    roleType: 'CTO',
    industry: 'Fintech',
    duration: 'Jan 2024 - Jun 2024',
    featured: true,
    problem:
      "Paya's financial platform needed AI-driven personalization to boost engagement and comprehensive security hardening to protect user financial data. The mobile app also suffered from performance issues causing user churn.",
    solutions: [
      'Integrated AI-driven personalization features using machine learning algorithms and data analytics',
      'Implemented comprehensive security audits and penetration testing aligned with IT governance standards',
      'Led the adoption of Agile project management to optimize the software development lifecycle',
      'Established CI/CD pipelines to improve code quality and deployment efficiency',
      'Redesigned mobile app architecture to reduce crashes and improve reliability',
    ],
    results: [
      { metric: 'Customer Engagement', value: '30%', direction: 'up' },
      { metric: 'Security Threats', value: '90%', direction: 'down' },
      { metric: 'Customer Churn', value: '15%', direction: 'down' },
      { metric: 'System Downtime', value: '30%', direction: 'down' },
      { metric: 'App Crashes', value: '25%', direction: 'down' },
      { metric: 'Code Quality', value: '25%', direction: 'up' },
    ],
    techStack: [
      'React Native',
      'TypeScript',
      'Nest.js',
      'PostgreSQL',
      'AWS',
      'Digital Ocean',
      'Docker',
      'Git',
      'CI/CD',
    ],
  },
  {
    id: 'belva-digital',
    company: 'Belva Digital',
    role: 'Senior Frontend Developer',
    roleType: 'Senior Engineer',
    industry: 'Martech Agency',
    duration: 'Jan 2025 - Present',
    problem:
      'Client web applications were suffering from slow load times and poor Lighthouse scores, leading to decreased user engagement and lower search rankings.',
    solutions: [
      'Led development of scalable frontend applications using Next.js, Nuxt.js, and TypeScript',
      'Collaborated with UI/UX designers to convert Figma wireframes into high-performance interfaces',
      'Applied performance monitoring tools to identify and resolve bottlenecks',
      'Optimized frontend codebase for speed and accessibility',
    ],
    results: [
      { metric: 'Page Load Times', value: '35%', direction: 'down' },
      { metric: 'Lighthouse Scores', value: '25%', direction: 'up' },
    ],
    techStack: ['Next.js', 'Nuxt.js', 'TypeScript', 'Tailwind CSS', 'Figma'],
  },
  {
    id: 'moringa-school',
    company: 'Moringa School',
    role: 'Senior Software Engineer',
    roleType: 'Senior Engineer',
    industry: 'Education',
    duration: 'May 2022 - Sep 2023',
    problem:
      'The software development curriculum needed modernization to prepare students for real-world engineering challenges. Students lacked practical debugging skills and exposure to modern development practices.',
    solutions: [
      'Designed and conducted hands-on coding workshops for 600+ students',
      'Integrated debugging techniques, UI/UX principles, and CI/CD best practices into curriculum',
      'Implemented Agile methodologies to optimize project workflows',
      'Created real-world debugging scenarios and UI/UX-focused projects',
    ],
    results: [
      { metric: 'Student Satisfaction', value: '15%', direction: 'up' },
      { metric: 'Practical Skills', value: '40%', direction: 'up' },
      { metric: 'Problem-Solving Abilities', value: '50%', direction: 'up' },
      { metric: 'Project Timeline', value: '20%', direction: 'down' },
      { metric: 'Team Productivity', value: '15%', direction: 'up' },
    ],
    techStack: ['React.js', 'Node.js', 'Python', 'Django','Git', 'CI/CD', 'Agile'],
  },
  {
    id: 'weza-prosoft',
    company: 'Weza Prosoft Limited',
    role: 'Senior Software Engineer',
    roleType: 'Senior Engineer',
    industry: 'Enterprise Software',
    duration: 'Oct 2020 - Apr 2022',
    problem:
      'The internal procurement system had poor UX leading to low adoption rates. External client projects required cross-platform solutions that were taking too long to deliver.',
    solutions: [
      'Prioritized features using UI/UX design principles and user feedback',
      'Led development of cross-platform Snagging app for Windows, macOS, Android, and iOS',
      'Optimized deployment workflows and integrated rigorous testing processes',
      'Streamlined software development lifecycle using problem-solving methodologies',
    ],
    results: [
      { metric: 'User Satisfaction', value: '20%', direction: 'up' },
      { metric: 'Project Completion Time', value: '30%', direction: 'down' },
      { metric: 'Client Satisfaction', value: '40%', direction: 'up' },
      { metric: 'Time-to-Market', value: '30%', direction: 'down' },
    ],
    techStack: ['React.js', 'React Native', 'Node.js', 'PostgreSQL', 'Docker'],
  },
];

export const getFeaturedCaseStudy = () =>
  caseStudies.find((cs) => cs.featured) || caseStudies[0];

export const getCaseStudyById = (id: string) =>
  caseStudies.find((cs) => cs.id === id);
