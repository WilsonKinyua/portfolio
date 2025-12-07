"use client";

import { profile, testimonials, companies } from "@/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, Star, Building2 } from "lucide-react";

// Stats Banner Component
export function StatsBanner() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4" data-aos="fade-up">
      {profile.stats.map((stat, index) => (
        <div
          key={index}
          className="text-center p-6 rounded-lg border transition-all duration-300 border-primary/20 hover:border-primary/50"
        >
          <>
            <p className="text-3xl md:text-4xl font-bold text-primary">
              {stat.value}
            </p>
            <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
          </>
        </div>
      ))}
    </div>
  );
}

// Company Logos Component
export function CompanyLogos() {
  return (
    <div className="my-10" data-aos="fade-up">
      <p className="text-center text-sm text-muted-foreground mb-6">
        Trusted by teams at
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {companies.map((company) => (
          <div
            key={company.id}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Building2 className="w-5 h-5" />
            <span className="font-medium">{company.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Testimonial Card Component
interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  company?: string;
}

function TestimonialCard({ quote, author, title, company }: TestimonialCardProps) {
  return (
    <Card className="h-full transition-all duration-300 hover:border-primary/50 flex flex-col">
      <CardContent className="pt-6 flex flex-col flex-1">
        <Quote className="w-8 h-8 text-primary/30 mb-4" />
        <p className="text-sm leading-relaxed mb-6 italic flex-1">
          &ldquo;{quote}&rdquo;
        </p>
        <div className="flex items-center gap-3 mt-auto">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-primary font-bold text-sm">
              {author.split(" ").map((n) => n[0]).join("")}
            </span>
          </div>
          <div>
            <p className="font-semibold text-sm">{author}</p>
            <p className="text-xs text-muted-foreground">
              {title}{company && `, ${company}`}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Testimonials Grid Component
export function Testimonials() {
  return (
    <div className="grid md:grid-cols-3 gap-6 my-10">
      {testimonials.map((testimonial, index) => (
        <div key={testimonial.id} data-aos="fade-up" data-aos-delay={index * 100}>
          <TestimonialCard
            quote={testimonial.quote}
            author={testimonial.author}
            title={testimonial.title}
            company={testimonial.company}
          />
        </div>
      ))}
    </div>
  );
}

// Full Social Proof Section
export default function SocialProof() {
  return (
    <div className="space-y-12">
      <StatsBanner />
      <CompanyLogos />
      <Testimonials />
    </div>
  );
}
