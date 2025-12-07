export interface FAQ {
  id: string;
  question: string;
  answer: string;
  audience: "client" | "employer" | "both";
  category: "services" | "process" | "availability" | "technical";
}

export const faqs: FAQ[] = [
  // Client-focused questions
  {
    id: "industries",
    question: "What industries do you specialize in?",
    answer:
      "I specialize in SaaS, fintech, and e-commerce products. Most of my work involves building high-performance frontend applications for startups and growth-stage companies. I've also worked extensively in education (training 600+ developers) and enterprise software.",
    audience: "client",
    category: "services",
  },
  {
    id: "ai-work",
    question: "How do you use AI in your work?",
    answer:
      "I use AI as a force multiplier, not a replacement for engineering judgment. AI helps me with research, scaffolding, code review, and testing—allowing me to ship 2-3x faster without sacrificing quality. At Paya Finance, I also integrated AI-driven personalization features that increased customer engagement by 30%.",
    audience: "both",
    category: "technical",
  },
  {
    id: "engagement",
    question: "What's your typical engagement look like?",
    answer:
      "I work with 2-3 clients at a time on focused engagements. Most projects are 2-8 weeks depending on scope. I offer three main services: Performance Audits (1 week), Marketing Site Builds (4 weeks), and AI Feature Integrations (2-3 weeks). Every engagement starts with a 30-minute discovery call.",
    audience: "client",
    category: "process",
  },
  {
    id: "startups-enterprises",
    question: "Do you work with startups or enterprises?",
    answer:
      "Both. I've served as CTO for a fintech startup and built enterprise procurement systems. For startups, I bring speed and pragmatism. For enterprises, I bring process discipline and scalable architecture. The common thread is shipping high-quality work that drives measurable results.",
    audience: "client",
    category: "services",
  },
  {
    id: "timezone",
    question: "What timezone are you in?",
    answer:
      "I'm based in Nairobi, Kenya (EAT, UTC+3). I have extensive experience working with remote teams across US, European, and African timezones. I'm flexible with meeting times and prioritize async communication for day-to-day collaboration.",
    audience: "both",
    category: "availability",
  },
  // Employer-focused questions
  {
    id: "fulltime",
    question: "Are you open to full-time roles?",
    answer:
      "Yes, I'm selectively exploring senior or staff-level frontend engineering roles at remote-first product companies. I'm looking for interesting technical challenges, a team that ships, and competitive compensation. I'm particularly interested in SaaS, fintech, and e-commerce products.",
    audience: "employer",
    category: "availability",
  },
  {
    id: "company-type",
    question: "What kind of companies are you looking for?",
    answer:
      "I'm looking for remote-first or Kenya-friendly companies building SaaS, fintech, or e-commerce products. I value teams that ship over teams that meet, technical challenges at scale, and cultures that trust senior engineers to own outcomes. I'm not interested in roles that are primarily managerial with no coding.",
    audience: "employer",
    category: "availability",
  },
  // General questions
  {
    id: "technologies",
    question: "What technologies do you specialize in?",
    answer:
      "Frontend: React.js, Next.js, Vue.js, Nuxt.js, TypeScript, Tailwind CSS. Backend: Node.js, NestJS, PostgreSQL, MongoDB. DevOps: AWS, Docker. I'm framework-agnostic and choose tools based on the problem. My strongest work is in Next.js and TypeScript for complex frontend applications.",
    audience: "both",
    category: "technical",
  },
  {
    id: "fullstack",
    question: "Can you handle both frontend and backend?",
    answer:
      "Yes, I'm a full-stack engineer with expertise in both. However, my deepest expertise and passion is in frontend development—building fast, accessible, delightful user interfaces. I'm comfortable architecting complete solutions from database design to UI, but I position myself as a frontend specialist.",
    audience: "both",
    category: "technical",
  },
  {
    id: "support",
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes. All my projects include a support period (30 days for AI integrations, 2 weeks for other projects). For clients who need ongoing support, I offer retainer arrangements. I believe in building long-term relationships, and many of my clients come back for multiple projects.",
    audience: "client",
    category: "process",
  },
];

export const getClientFAQs = () =>
  faqs.filter((f) => f.audience === "client" || f.audience === "both");

export const getEmployerFAQs = () =>
  faqs.filter((f) => f.audience === "employer" || f.audience === "both");

export const getAllFAQs = () => faqs;
