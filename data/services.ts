import {
  Zap,
  Heart,
  Shield,
  Link2,
  CreditCard,
  GraduationCap,
} from "lucide-react";

export interface Service {
  id: string;
  icon: "zap" | "heart" | "shield" | "link" | "credit-card" | "graduation-cap";
  title: string;
  outcome: string;
  description: string;
  metric?: string;
  forWho: string;
}

export const services: Service[] = [
  {
    id: "faster-load-times",
    icon: "zap",
    title: "Faster Load Times",
    outcome: "Better Conversions",
    description:
      "High-performance web applications built with Next.js and Vue.js that load fast and rank higher on search engines.",
    metric: "35% faster",
    forWho: "SaaS & marketing sites",
  },
  {
    id: "interfaces-users-love",
    icon: "heart",
    title: "Interfaces Users Love",
    outcome: "Higher Engagement",
    description:
      "Intuitive, accessible UI/UX design that reduces friction and keeps users coming back.",
    metric: "30% more engagement",
    forWho: "Product teams",
  },
  {
    id: "apps-that-dont-crash",
    icon: "shield",
    title: "Apps That Don't Crash",
    outcome: "Lower Churn",
    description:
      "Reliable mobile and web applications with robust error handling and monitoring built-in.",
    metric: "25% fewer crashes",
    forWho: "Fintech & SaaS",
  },
  {
    id: "seamless-integrations",
    icon: "link",
    title: "Seamless Integrations",
    outcome: "Faster Development",
    description:
      "Clean API architecture and third-party integrations that work reliably and scale with your business.",
    metric: "30% less downtime",
    forWho: "Enterprise apps",
  },
  {
    id: "checkout-flows",
    icon: "credit-card",
    title: "Checkout Flows That Convert",
    outcome: "More Revenue",
    description:
      "Payment integrations with Stripe, PayPal, M-Pesa, and more—optimized for trust and conversion.",
    metric: "Secure & fast",
    forWho: "E-commerce",
  },
  {
    id: "level-up-team",
    icon: "graduation-cap",
    title: "Level Up Your Team",
    outcome: "Better Code Quality",
    description:
      "Technical mentorship and code reviews that help your team ship better code faster.",
    metric: "600+ trained",
    forWho: "Engineering teams",
  },
];

export const getServiceById = (id: string) =>
  services.find((service) => service.id === id);
