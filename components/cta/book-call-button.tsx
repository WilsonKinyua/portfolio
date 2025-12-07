"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { profile } from "@/data";

interface BookCallButtonProps {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  className?: string;
  children?: React.ReactNode;
  showIcon?: boolean;
}

export default function BookCallButton({
  variant = "default",
  size = "default",
  className = "",
  children,
  showIcon = true,
}: BookCallButtonProps) {
  return (
    <Button variant={variant} size={size} className={className} asChild>
      <a
        href={profile.calendlyUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book a 30-minute call with Wilson Kinyua"
      >
        {showIcon && <Calendar className="mr-2 h-4 w-4" aria-hidden="true" />}
        {children || "Book a 30-min Call"}
      </a>
    </Button>
  );
}
