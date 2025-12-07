import { Search, Globe, Sparkles } from "lucide-react";

export interface ServiceOffer {
  id: string;
  title: string;
  subtitle: string;
  icon: "search" | "globe" | "sparkles";
  forWho: string;
  description: string;
  deliverables: string[];
  timeline: string;
  ctaText: string;
  ctaUrl: string;
  featured?: boolean;
}

export const offers: ServiceOffer[] = [
  {
    id: "performance-audit",
    title: "Frontend Performance Audit",
    subtitle: "Find out what's slowing you down",
    icon: "search",
    forWho: "SaaS/fintech teams with slow, underperforming apps",
    description:
      "I'll analyze your web application and identify exactly what's slowing it down and costing you users. You'll get a prioritized roadmap to fix it.",
    deliverables: [
      "30-minute video walkthrough of issues",
      "Prioritized fix list with effort estimates",
      "Core Web Vitals baseline report",
      "Quick wins implementation guide",
    ],
    timeline: "5 business days",
    ctaText: "Let's Talk",
    ctaUrl: "https://rebrand.ly/lbapecd",
    featured: true,
  },
  {
    id: "marketing-site",
    title: "SaaS Marketing Site Build",
    subtitle: "Launch with a site that converts",
    icon: "globe",
    forWho: "Startups launching or redesigning their marketing site",
    description:
      "A high-converting marketing site built with Next.js, optimized for performance, SEO, and lead capture. Perfect for launches or redesigns.",
    deliverables: [
      "Fully responsive Next.js site",
      "CMS integration (Sanity or Contentful)",
      "Analytics & conversion tracking setup",
      "SEO optimization & meta tags",
      "2 rounds of revisions",
    ],
    timeline: "4 weeks",
    ctaText: "Get a Quote",
    ctaUrl: "https://rebrand.ly/lbapecd",
  },
  {
    id: "ai-integration",
    title: "AI Feature Integration",
    subtitle: "Add AI that actually works",
    icon: "sparkles",
    forWho: "Teams wanting to add AI-powered features to their product",
    description:
      "Add AI-powered features to your existing product—smart search, recommendations, chat interfaces, or automation—without disrupting your codebase.",
    deliverables: [
      "Working AI feature integrated into your app",
      "Documentation & architecture decisions",
      "Team handoff session",
      "30 days of bug fix support",
    ],
    timeline: "2-3 weeks",
    ctaText: "Discuss Your Idea",
    ctaUrl: "https://rebrand.ly/lbapecd",
  },
];

export const getFeaturedOffer = () =>
  offers.find((o) => o.featured) || offers[0];
