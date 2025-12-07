export const profile = {
  name: "Wilson Kinyua",
  title: "I fix slow, buggy frontends so your users stay.",
  tagline: "Senior Frontend Engineer for SaaS and fintech teams. 35% faster load times. 30% higher engagement. Ship with confidence.",
  aiStatement: "I leverage AI to ship 2-3x faster without sacrificing code quality.",
  availabilityStatement: "Open to select freelance projects and senior roles at remote-first companies.",

  // Key metrics for hero section
  metrics: [
    { label: "Faster Load Times", value: "35%" },
    { label: "Lower Churn", value: "15%" },
    { label: "Fewer Security Threats", value: "90%" },
  ],

  // Social proof stats
  stats: [
    { label: "Years Experience", value: "7+" },
    { label: "Students Mentored", value: "600+" },
    { label: "Users Supported", value: "10,000+" },
    // { label: "Former CTO", value: "Yes", isBadge: true },
  ],

  // Contact & links
  email: "wilsonkinyuam@gmail.com",
  phone: "+254717255460",
  location: "Nairobi, Kenya",
  calendlyUrl: "https://rebrand.ly/lbapecd",
  resumeUrl: "https://rebrand.ly/vsdb3se",

  // Social links
  social: {
    linkedin: "https://linkedin.com/in/wilsonkinyua",
    github: "https://github.com/Wilsonkinyua",
    figma: "https://figma.com/@wilsonkinyua",
    website: "https://wilsonkinyua.com",
  },

  // About section content
  about: {
    intro: "I'm a Senior Frontend Engineer who's shipped products for fintech, SaaS, and education companies over the past 7 years.",
    highlight: "Most recently, I served as CTO at Paya Finance, where I integrated AI-driven personalization and reduced security threats by 90%.",
    specializations: [
      "High-performance frontend applications (Next.js, Vue, TypeScript)",
      "AI feature integration that actually works",
      "Turning slow, buggy apps into fast, reliable products",
    ],
    aiApproach: "I use AI tools to ship 2-3x faster—not as a gimmick, but as genuine leverage that lets me deliver more value in less time.",
  },

  // Industries served
  industries: ["SaaS", "Fintech", "E-commerce", "Education", "Enterprise"],

  // Target audiences
  targetAudiences: {
    clients: {
      title: "Ready to Fix Your Frontend?",
      description: "I work with 2-3 clients at a time on focused engagements. If you're dealing with performance issues, UX problems, or need to ship faster, let's talk.",
      cta: "Book a 30-minute Call",
    },
    employers: {
      title: "Open to Opportunities",
      description: "I'm selectively exploring senior/staff frontend roles at remote-first product companies.",
      lookingFor: [
        "Remote-first or Kenya-friendly hours",
        "SaaS, fintech, or e-commerce product",
        "Technical challenges at scale",
        "Team that ships over meetings",
      ],
      cta: "View Resume",
    },
  },
};

export type Profile = typeof profile;
