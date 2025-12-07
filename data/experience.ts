export interface Experience {
  id: string;
  company: string;
  role: string;
  type: "CTO" | "Senior" | "Mid" | "Junior";
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
  achievements: {
    text: string;
    metric?: string;
    metricDirection?: "up" | "down";
  }[];
  tags?: string[];
  featured?: boolean;
}

export const experiences: Experience[] = [
  {
    id: "belva-digital",
    company: "Belva Digital",
    role: "Senior Frontend Developer",
    type: "Senior",
    location: "Remote",
    startDate: "Jan 2025",
    endDate: "Present",
    description:
      "Leading frontend development for scalable web applications using modern frameworks.",
    achievements: [
      {
        text: "Led development of scalable frontend applications using Next.js, Vue.js, TypeScript, and Tailwind CSS",
        metric: "35% faster load times",
        metricDirection: "down",
      },
      {
        text: "Collaborated with UI/UX designers to convert Figma wireframes into accessible, high-performance interfaces",
      },
      {
        text: "Optimized frontend codebase and applied performance monitoring tools",
        metric: "25% Lighthouse boost",
        metricDirection: "up",
      },
    ],
    tags: ["Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "paya-cto",
    company: "Paya Finance",
    role: "Chief Technology Officer",
    type: "CTO",
    location: "Remote",
    startDate: "Jan 2024",
    endDate: "Jun 2024",
    description:
      "Led technology strategy and engineering for a fintech mobile banking platform.",
    achievements: [
      {
        text: "Integrated AI-driven personalization features using machine learning algorithms and data analytics",
        metric: "30% engagement increase",
        metricDirection: "up",
      },
      {
        text: "Implemented security audits and penetration testing to enhance data protection",
        metric: "90% fewer security threats",
        metricDirection: "down",
      },
      {
        text: "Led Agile adoption to optimize IT operations and improve SDLC",
        metric: "25% code quality boost",
        metricDirection: "up",
      },
    ],
    tags: ["AI/ML", "Security", "Agile", "CI/CD", "Leadership"],
    featured: true,
  },
  {
    id: "paya-senior",
    company: "Paya Finance",
    role: "Senior Software Engineer",
    type: "Senior",
    location: "Remote",
    startDate: "Oct 2023",
    endDate: "Dec 2023",
    description:
      "Enhanced mobile app functionality and integrated financial partner APIs.",
    achievements: [
      {
        text: "Utilized user feedback and Agile to iteratively enhance mobile app functionality",
        metric: "15% churn decrease",
        metricDirection: "down",
      },
      {
        text: "Implemented API integration with 5 financial partners, improving system interoperability",
        metric: "30% less downtime",
        metricDirection: "down",
      },
      {
        text: "Collaborated with cross-functional teams to address bugs using root cause analysis",
        metric: "25% fewer crashes",
        metricDirection: "down",
      },
    ],
    tags: ["React Native", "API Integration", "Agile"],
  },
  {
    id: "moringa",
    company: "Moringa School",
    role: "Senior Software Engineer",
    type: "Senior",
    location: "Remote",
    startDate: "May 2022",
    endDate: "Sep 2023",
    description:
      "Enhanced software development curriculum and mentored 600+ students.",
    achievements: [
      {
        text: "Collaborated with cross-functional teams to enhance software development curriculum",
        metric: "15% student satisfaction increase",
        metricDirection: "up",
      },
      {
        text: "Designed and conducted hands-on coding workshops for 600+ students",
        metric: "40% practical skills boost",
        metricDirection: "up",
      },
      {
        text: "Implemented Agile methodologies to optimize project workflows",
        metric: "20% faster project timelines",
        metricDirection: "down",
      },
    ],
    tags: ["Mentorship", "Curriculum", "Agile", "600+ Students"],
  },
  {
    id: "weza",
    company: "Weza Prosoft Limited",
    role: "Senior Software Engineer",
    type: "Senior",
    location: "Remote",
    startDate: "Oct 2020",
    endDate: "Apr 2022",
    description:
      "Led development of enterprise procurement systems and cross-platform applications.",
    achievements: [
      {
        text: "Prioritized features for internal procurement system using UI/UX design principles",
        metric: "20% user satisfaction increase",
        metricDirection: "up",
      },
      {
        text: "Led development of cross-platform Snagging app for Windows, macOS, Android, iOS",
        metric: "30% faster delivery",
        metricDirection: "down",
      },
      {
        text: "Optimized deployment workflows integrating software testing strategies",
        metric: "30% faster time-to-market",
        metricDirection: "down",
      },
    ],
    tags: ["Cross-platform", "Enterprise", "React Native"],
  },
  {
    id: "brance-backend",
    company: "Brance Technologies",
    role: "Back End Engineer",
    type: "Mid",
    location: "Remote",
    startDate: "Aug 2018",
    endDate: "Jun 2020",
    description:
      "Developed scalable backend systems and inventory management solutions.",
    achievements: [
      {
        text: "Developed scalable PHP/Laravel web application using TDD to support 2,000+ users",
        metric: "30% engagement increase",
        metricDirection: "up",
      },
      {
        text: "Implemented monitoring tools to proactively track system performance",
        metric: "30% fewer incidents",
        metricDirection: "down",
      },
      {
        text: "Designed dynamic inventory management system using API-driven architecture",
        metric: "20% efficiency improvement",
        metricDirection: "up",
      },
    ],
    tags: ["PHP", "Laravel", "TDD", "API Design"],
  },
  {
    id: "brance-frontend",
    company: "Brance Technologies",
    role: "Frontend Engineer",
    type: "Junior",
    location: "Remote",
    startDate: "Feb 2018",
    endDate: "Jul 2018",
    description: "Developed responsive web interfaces and improved site performance.",
    achievements: [
      {
        text: "Developed responsive designs using HTML, CSS, and Bootstrap",
        metric: "40% engagement increase",
        metricDirection: "up",
      },
      {
        text: "Collaborated with UX designers to create visually appealing interfaces",
        metric: "15% bounce rate decrease",
        metricDirection: "down",
      },
      {
        text: "Utilized automated testing tools to conduct weekly code reviews",
        metric: "20% speed improvement",
        metricDirection: "up",
      },
    ],
    tags: ["HTML", "CSS", "Bootstrap", "Responsive Design"],
  },
];

export const getFeaturedExperience = () =>
  experiences.find((e) => e.featured) || experiences[0];

export const getExperiencesByType = (type: Experience["type"]) =>
  experiences.filter((e) => e.type === type);
