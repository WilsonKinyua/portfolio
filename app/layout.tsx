import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.scss";
import { cn } from "@/lib/utils";

const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wilson Kinyua | Software Engineer",
  description: "Software Engineer | Lead Developer | Head of Tech | UI/UX Designer | Technical Trainer/Mentor | Frontend Engineer | Backend Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(poppins.className)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

