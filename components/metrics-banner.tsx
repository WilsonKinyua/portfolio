"use client";

import { TrendingDown, TrendingUp } from "lucide-react";

interface Metric {
  label: string;
  value: string;
  direction?: "up" | "down";
}

interface MetricsBannerProps {
  metrics: Metric[];
  variant?: "inline" | "cards";
  className?: string;
}

export default function MetricsBanner({
  metrics,
  variant = "inline",
  className = "",
}: MetricsBannerProps) {
  if (variant === "cards") {
    return (
      <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${className}`}>
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center"
          >
            <div className="flex items-center justify-center gap-1">
              <span className="text-2xl md:text-3xl font-bold text-primary">
                {metric.value}
              </span>
              {metric.direction === "up" && (
                <TrendingUp className="w-4 h-4 text-green-500" />
              )}
              {metric.direction === "down" && (
                <TrendingDown className="w-4 h-4 text-green-500" />
              )}
            </div>
            <p className="text-sm text-muted-foreground mt-1">{metric.label}</p>
          </div>
        ))}
      </div>
    );
  }

  // Inline variant (default)
  return (
    <div
      className={`flex flex-wrap items-center justify-center lg:justify-start gap-2 md:gap-4 text-sm md:text-base ${className}`}
    >
      {metrics.map((metric, index) => (
        <div key={index} className="flex items-center gap-2">
          <span className="font-semibold text-primary">{metric.value}</span>
          <span className="text-muted-foreground">{metric.label}</span>
          {index < metrics.length - 1 && (
            <span className="text-muted-foreground/50 hidden md:inline">|</span>
          )}
        </div>
      ))}
    </div>
  );
}
