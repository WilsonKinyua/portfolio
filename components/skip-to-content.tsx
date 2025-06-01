import React from 'react';

export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-md font-medium z-50 transition-all duration-200"
      role="navigation"
      aria-label="Skip to main content"
    >
      Skip to main content
    </a>
  );
} 