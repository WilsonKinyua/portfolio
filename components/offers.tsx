"use client";

import { offers, type ServiceOffer } from "@/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Globe, Sparkles, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

const iconMap = {
  search: Search,
  globe: Globe,
  sparkles: Sparkles,
};

interface OfferCardProps {
  offer: ServiceOffer;
}

function OfferCard({ offer }: OfferCardProps) {
  const Icon = iconMap[offer.icon];

  return (
    <Card className="h-full flex flex-col transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-lg bg-primary/10">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          {offer.featured && (
            <Badge variant="default" className="bg-primary">
              Most Popular
            </Badge>
          )}
        </div>
        <CardTitle className="text-xl">{offer.title}</CardTitle>
        <CardDescription className="text-base">
          {offer.subtitle}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col">
        {/* For Who */}
        <div className="mb-4">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">For:</span> {offer.forWho}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4">
          {offer.description}
        </p>

        {/* Deliverables */}
        <div className="mb-6">
          <p className="text-sm font-medium mb-2">What you get:</p>
          <ul className="space-y-2">
            {offer.deliverables.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Timeline */}
        <div className="flex items-center gap-2 mb-6 text-sm">
          <Clock className="w-4 h-4 text-muted-foreground" />
          <span className="text-muted-foreground">Timeline: </span>
          <span className="font-medium">{offer.timeline}</span>
        </div>

        {/* CTA */}
        <div className="mt-auto">
          <Button asChild className="w-full" variant={offer.featured ? "default" : "outline"}>
            <a
              href={offer.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {offer.ctaText}
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Offers() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {offers.map((offer, index) => (
        <div key={offer.id} data-aos="fade-up" data-aos-delay={index * 100}>
          <OfferCard offer={offer} />
        </div>
      ))}
    </div>
  );
}
