"use client";

import {
  Card,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Laptop,
  Phone,
  School,
  LampDesk,
  University,
  Sparkles,
  TrendingUp,
  TrendingDown,
  Crown,
} from "lucide-react";
import { Separator } from "./ui/separator";
import { experiences, education, type Experience, type Education } from "@/data";

// Icon mapping for companies
const companyIconMap: Record<string, React.ReactNode> = {
  "belva-digital": <Laptop className="w-4 h-4 text-white" aria-hidden="true" />,
  "paya-cto": <Crown className="w-4 h-4 text-white" aria-hidden="true" />,
  "paya-senior": <Phone className="w-4 h-4 text-white" aria-hidden="true" />,
  moringa: <School className="w-4 h-4 text-white" aria-hidden="true" />,
  weza: <LampDesk className="w-4 h-4 text-white" aria-hidden="true" />,
  "brance-backend": <Laptop className="w-4 h-4 text-white" aria-hidden="true" />,
  "brance-frontend": <Laptop className="w-4 h-4 text-white" aria-hidden="true" />,
};

const educationIconMap: Record<Education["icon"], React.ReactNode> = {
  university: <University className="w-4 h-4 text-white" aria-hidden="true" />,
  school: <School className="w-4 h-4 text-white" aria-hidden="true" />,
};

interface ExperienceCardProps {
  experience: Experience;
}

function ExperienceCard({ experience }: ExperienceCardProps) {
  const isCTO = experience.type === "CTO";

  return (
    <li className="mb-10 ms-6">
      <span
        className={`absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ${
          isCTO
            ? "bg-gradient-to-r from-primary to-yellow-500 ring-yellow-500/40"
            : "bg-primary ring-primary/40"
        } motion-safe:animate-bounce`}
      >
        {companyIconMap[experience.id] || <Laptop className="w-4 h-4 text-white" aria-hidden="true" />}
      </span>
      <Card className={`card-glassmorphism p-2 ${isCTO ? "border-primary/50" : ""}`}>
        <CardHeader>
          <CardDescription>
            {/* Company Name + CTO Badge */}
            <div className="flex items-center gap-2 flex-wrap">
              <p className="lg:text-lg font-bold text-primary">
                {experience.company}
              </p>
              {isCTO && (
                <Badge className="bg-gradient-to-r from-primary to-yellow-500 text-white">
                  <Sparkles className="w-3 h-3 mr-1" aria-hidden="true" />
                  CTO
                </Badge>
              )}
              {experience.featured && !isCTO && (
                <Badge variant="outline" className="border-primary text-primary">
                  Featured
                </Badge>
              )}
            </div>

            {/* Role + Date */}
            <p className="flex items-center justify-between my-5 font-semibold lg:text-lg text-xs">
              <span>{experience.role}</span>
              <time className="block text-sm text-primary/90">
                {experience.startDate} - {experience.endDate}
              </time>
            </p>

            {/* Tags */}
            {experience.tags && (
              <div className="flex flex-wrap gap-2 mb-4">
                {experience.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            <Separator className="my-5 bg-primary" />

            {/* Achievements with Metrics */}
            <ol className="list-none space-y-4">
              {experience.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary mt-1" aria-hidden="true">•</span>
                  <div className="flex-1">
                    <span className="text-gray-300 text-sm">
                      {achievement.text}
                    </span>
                    {achievement.metric && (
                      <Badge
                        variant="outline"
                        className="ml-2 border-green-500/50 text-green-400 text-xs"
                      >
                        {achievement.metricDirection === "up" ? (
                          <TrendingUp className="w-3 h-3 mr-1" aria-hidden="true" />
                        ) : (
                          <TrendingDown className="w-3 h-3 mr-1" aria-hidden="true" />
                        )}
                        {achievement.metric}
                      </Badge>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </CardDescription>
        </CardHeader>
      </Card>
    </li>
  );
}

interface EducationCardProps {
  edu: Education;
}

function EducationCard({ edu }: EducationCardProps) {
  return (
    <li className="mb-10 ms-6">
      <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 dark:ring-primary/40 bg-primary motion-safe:animate-bounce">
        {educationIconMap[edu.icon]}
      </span>
      <Card className="card-glassmorphism p-2">
        <CardHeader>
          <CardDescription>
            <p className="flex items-center lg:text-lg font-bold text-primary">
              {edu.institution}
            </p>
            <p className="flex items-center justify-between my-5 font-semibold lg:text-lg text-xs">
              <span>
                {edu.degree}
                {edu.field && (
                  <>
                    {" "}
                    <i>({edu.field})</i>
                  </>
                )}
              </span>
              <time className="block text-sm text-primary/90">
                {edu.startDate} - {edu.endDate}
              </time>
            </p>
            <Separator className="my-5 bg-primary" />
            <ol className="list-disc list-outside leading-8 ml-4 text-gray-300 text-sm">
              {edu.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ol>
          </CardDescription>
        </CardHeader>
      </Card>
    </li>
  );
}

export default function Experience() {
  return (
    <Tabs defaultValue="experience" className="w-full">
      <TabsList className="flex justify-between lg:py-10 py-4">
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
      </TabsList>
      <TabsContent value="experience">
        <div className="grid gap-5">
          <div className="p-5">
            <ol className="relative border-s-4 border-primary-foreground">
              {experiences.map((exp) => (
                <ExperienceCard key={exp.id} experience={exp} />
              ))}
            </ol>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="education">
        <div className="p-5">
          <ol className="relative border-s-4 border-primary-foreground">
            {education.map((edu) => (
              <EducationCard key={edu.id} edu={edu} />
            ))}
          </ol>
        </div>
      </TabsContent>
    </Tabs>
  );
}
