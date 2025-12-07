export interface Education {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  startDate: string;
  endDate: string;
  achievements: string[];
  icon: "university" | "school";
}

export const education: Education[] = [
  {
    id: "jkuat",
    institution: "Jomo Kenyatta University of Agriculture and Technology (JKUAT)",
    degree: "Bachelor of Science",
    field: "Information Technology",
    startDate: "Jan 2018",
    endDate: "Dec 2021",
    icon: "university",
    achievements: [
      "Specialized in software development and network systems, achieving a comprehensive understanding of IT infrastructures.",
      "Participated in various tech-driven group projects, enhancing collaborative skills and technical knowledge.",
      "Graduated with honors, demonstrating strong academic performance and a commitment to the field of technology.",
    ],
  },
  {
    id: "moringa",
    institution: "Moringa School",
    degree: "Software Development",
    field: "Advancing",
    startDate: "May 2021",
    endDate: "Dec 2021",
    icon: "school",
    achievements: [
      "Completed an intensive, project-based training program focusing on full-stack software development.",
      "Gained hands-on experience with modern web technologies and software engineering principles.",
      "Collaborated on multiple team projects, simulating real-world software development scenarios.",
    ],
  },
];

export const getEducationById = (id: string) =>
  education.find((edu) => edu.id === id);
