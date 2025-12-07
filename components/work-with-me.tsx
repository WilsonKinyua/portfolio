"use client";

import { profile } from "@/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calendar, FileText, Linkedin, CheckCircle2, Briefcase, Users } from "lucide-react";

export default function WorkWithMe() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* For Clients */}
      <Card className="border-primary/30 bg-primary/5" data-aos="fade-up">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto p-3 rounded-full bg-primary/10 w-fit mb-4">
            <Briefcase className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-2xl">
            {profile.targetAudiences.clients.title}
          </CardTitle>
          <CardDescription className="text-base">
            {profile.targetAudiences.clients.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <Button asChild size="lg" className="w-full md:w-auto">
            <a
              href={profile.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar className="mr-2 h-5 w-5" />
              {profile.targetAudiences.clients.cta}
            </a>
          </Button>
        </CardContent>
      </Card>

      {/* For Employers */}
      <Card data-aos="fade-up" data-aos-delay="100">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto p-3 rounded-full bg-muted w-fit mb-4">
            <Users className="w-8 h-8 text-muted-foreground" />
          </div>
          <CardTitle className="text-2xl">
            {profile.targetAudiences.employers.title}
          </CardTitle>
          <CardDescription className="text-base">
            {profile.targetAudiences.employers.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* What I'm Looking For */}
          <div className="mb-6">
            <p className="text-sm font-medium mb-3 text-center">What I&apos;m looking for:</p>
            <ul className="space-y-2">
              {profile.targetAudiences.employers.lookingFor.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild variant="outline">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="mr-2 h-4 w-4" />
                {profile.targetAudiences.employers.cta}
              </a>
            </Button>
            <Button asChild variant="outline">
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>

          {/* Or schedule a chat */}
          <div className="mt-4 text-center">
            <p className="text-sm text-muted-foreground mb-2">
              Or reach out directly:
            </p>
            <Button asChild variant="ghost" size="sm">
              <a
                href={profile.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Schedule a Chat
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
