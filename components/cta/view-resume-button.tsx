"use client";

import { Button } from "@/components/ui/button";
import { FileText, Loader } from "lucide-react";
import { profile } from "@/data";
import { useTransition } from "react";

interface ViewResumeButtonProps {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  className?: string;
  children?: React.ReactNode;
  showIcon?: boolean;
}

export default function ViewResumeButton({
  variant = "outline",
  size = "default",
  className = "",
  children,
  showIcon = true,
}: ViewResumeButtonProps) {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(async () => {
      window.open(profile.resumeUrl, "_blank");
    });
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={handleClick}
      disabled={isPending}
      aria-label="View Wilson Kinyua's Resume"
    >
      {showIcon && <FileText className="mr-2 h-4 w-4" aria-hidden="true" />}
      {children || "View Resume"}
      {isPending && (
        <Loader className="ml-2 h-4 w-4 animate-spin" aria-hidden="true" />
      )}
    </Button>
  );
}
