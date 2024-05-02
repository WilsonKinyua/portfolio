import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import { Montserrat } from "next/font/google";
import 'aos/dist/aos.css';
import "../styles/globals.scss";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import MouseCustomCursor from "@/components/mouse-custom-cursor";

const montserrat = Montserrat({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });

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
        className={cn(montserrat.className)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <MouseCustomCursor />
          <main className="container mx-auto">
            <Navbar />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

