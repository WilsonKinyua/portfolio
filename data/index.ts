// Central export for all data
export { profile } from "./profile";
export type { Profile } from "./profile";

export { caseStudies, getFeaturedCaseStudy, getCaseStudyById } from "./case-studies";
export type { CaseStudy } from "./case-studies";

export { testimonials, getFeaturedTestimonials } from "./testimonials";
export type { Testimonial } from "./testimonials";

export { offers, getFeaturedOffer } from "./offers";
export type { ServiceOffer } from "./offers";

export { experiences, getFeaturedExperience, getExperiencesByType } from "./experience";
export type { Experience } from "./experience";

export { companies, clientProjects } from "./companies";
export type { Company } from "./companies";

export { faqs, getClientFAQs, getEmployerFAQs, getAllFAQs } from "./faq";
export type { FAQ } from "./faq";

export { services, getServiceById } from "./services";
export type { Service } from "./services";

export { education, getEducationById } from "./education";
export type { Education } from "./education";
