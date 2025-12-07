"use client";

import { caseStudies, type CaseStudy } from "@/data";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Sparkles, Building2, Briefcase } from "lucide-react";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  featured?: boolean;
}

function CaseStudyCard({ caseStudy, featured = false }: CaseStudyCardProps) {
  return (
    <Card
      className={`overflow-hidden transition-all duration-300 hover:border-primary/50 ${featured ? "border-primary/30 bg-primary/5" : ""
        }`}
    >
      <CardHeader className="pb-4">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {caseStudy.roleType === "CTO" && (
            <Badge variant="default" className="bg-primary">
              <Sparkles className="w-3 h-3 mr-1" />
              CTO
            </Badge>
          )}
          <Badge variant="secondary">{caseStudy.industry}</Badge>
          {featured && (
            <Badge variant="outline" className="border-primary text-primary">
              Featured
            </Badge>
          )}
        </div>

        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-2xl font-bold">{caseStudy.company}</h3>
            <p className="text-muted-foreground flex items-center gap-2 mt-1">
              <Briefcase className="w-4 h-4" />
              {caseStudy.role}
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              {caseStudy.duration}
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Problem */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">
            The Challenge
          </h4>
          <p className="text-sm leading-relaxed">{caseStudy.problem}</p>
        </div>

        {/* Solution */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">
            What I Did
          </h4>
          <ul className="space-y-2">
            {caseStudy.solutions.slice(0, 3).map((solution, index) => (
              <li key={index} className="text-sm flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{solution}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Results */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">
            Results
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {caseStudy.results.slice(0, 6).map((result, index) => (
              <div
                key={index}
                className="border border-primary/50 hover:border-primary/100 duration-500 rounded-lg p-3 text-center"
              >
                <div className="flex items-center justify-center gap-1">
                  <span className="text-xl font-bold text-primary">
                    {result.value}
                  </span>
                  {result.direction === "up" ? (
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-green-500" />
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {result.metric}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {caseStudy.techStack.map((tech, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

interface CaseStudiesProps {
  showAll?: boolean;
  limit?: number;
}

export default function CaseStudies({ showAll = false, limit = 4 }: CaseStudiesProps) {
  const displayStudies = showAll ? caseStudies : caseStudies.slice(0, limit);
  const featuredStudy = caseStudies.find((cs) => cs.featured);

  return (
    <div className="space-y-8">
      {/* Featured Case Study */}
      {featuredStudy && (
        <div data-aos="fade-up">
          <CaseStudyCard caseStudy={featuredStudy} featured />
        </div>
      )}

      {/* Other Case Studies */}
      <div className="grid md:grid-cols-2 gap-6">
        {displayStudies
          .filter((cs) => !cs.featured)
          .map((caseStudy, index) => (
            <CaseStudyCard caseStudy={caseStudy} key={caseStudy.id} data-aos="fade-up" data-aos-delay={index * 100} />
          ))}
      </div>
    </div>
  );
}
