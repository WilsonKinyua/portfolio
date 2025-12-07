"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  Heart,
  Shield,
  Link2,
  CreditCard,
  GraduationCap,
  TrendingUp,
} from "lucide-react";
import { services, type Service } from "@/data";

const iconMap: Record<Service["icon"], React.ReactNode> = {
  zap: <Zap size={40} className="text-primary" aria-hidden="true" />,
  heart: <Heart size={40} className="text-primary" aria-hidden="true" />,
  shield: <Shield size={40} className="text-primary" aria-hidden="true" />,
  link: <Link2 size={40} className="text-primary" aria-hidden="true" />,
  "credit-card": <CreditCard size={40} className="text-primary" aria-hidden="true" />,
  "graduation-cap": <GraduationCap size={40} className="text-primary" aria-hidden="true" />,
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <Card
      className="text-center transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
      data-aos="fade-up"
      data-aos-delay={index * 50}
    >
      <CardHeader>
        <CardTitle className="flex justify-center">
          {iconMap[service.icon]}
        </CardTitle>
        <CardDescription className="space-y-2 pt-4">
          <span className="block text-foreground uppercase font-bold text-sm">
            {service.title}
          </span>
          <span className="block text-primary font-medium">
            {service.outcome}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{service.description}</p>
        <div className="flex flex-wrap justify-center gap-2">
          {service.metric && (
            <Badge variant="secondary" className="text-xs">
              <TrendingUp className="w-3 h-3 mr-1" aria-hidden="true" />
              {service.metric}
            </Badge>
          )}
          <Badge variant="outline" className="text-xs">
            {service.forWho}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Services() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-10">
      {services.map((service, index) => (
        <ServiceCard key={service.id} service={service} index={index} />
      ))}
    </div>
  );
}
