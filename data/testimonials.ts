export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  company?: string;
  avatar?: string;
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 'oliver-k',
    quote:
      "Wilson transformed our mobile app performance. Load times dropped by 35% and our users finally stopped complaining about crashes. He also brought AI expertise we didn't know we needed—our engagement metrics are up 30% since he integrated personalization features.",
    author: 'Oliver K.',
    title: 'Cheif Operating Officer',
    company: 'Paya Finance',
    featured: true,
  },
  {
    id: 'sarah-k',
    quote:
      "We hired Wilson to rebuild our marketing site before a major launch. He delivered a week early, and the site scores 95+ on Lighthouse. More importantly, our conversion rate doubled. He's now our go-to for any frontend work.",
    author: 'Sarah K.',
    title: 'Founder & CEO',
    featured: true,
  },
  {
    id: 'nelson-k',
    quote:
      "I've worked with many senior engineers, but Wilson stands out. He doesn't just write code—he thinks about the business impact. When he joined our team, bug reports dropped 25% and we shipped features 30% faster.",
    author: 'Nelson K.',
    title: 'Head of Product',
    company: 'Weza Prosoft',
    featured: true,
  },
];

export const getFeaturedTestimonials = () =>
  testimonials.filter((t) => t.featured);
