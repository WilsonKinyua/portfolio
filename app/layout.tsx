import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "@/components/theme-provider"
import 'aos/dist/aos.css';
import "../styles/globals.scss";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import MouseCustomCursor from "@/components/mouse-custom-cursor";
import { Toaster } from "@/components/ui/toaster"
import Footer from "@/components/footer";
import { montserrat } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Wilson Kinyua | Software Engineer | Frontend Engineer | Backend Engineer",
  description: "Driven, innovative Software Engineer with experience in the development of software and solutions. A conscientious person who pays attention to details. Very passionate about software development, always willing and ready to learn new things/concepts. Proven leader with the ability to streamline development processes to drive the achievement of organizational objectives. An ambitious and generally curious professional who strives for greatness and is driven to grow himself and those around oneself through collaboration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Wilson Kinyua | Software Engineer | Frontend Engineer</title>
        <meta name="title" content="Wilson Kinyua | Software Engineer | Backend Engineer" />
        <meta name="description" content="Driven, innovative Software Engineer with experience in the development of software and solutions. A conscientious person who pays attention to details. Very passionate about software development, always willing and ready to learn new things/concepts. Proven leader with the ability to streamline development processes to drive the achievement of organizational objectives. An ambitious and generally curious professional who strives for greatness and is driven to grow himself and those around oneself through collaboration." />
        <meta name="keywords" content="Software Engineer | Lead Developer | Head of Tech | UI/UX Designer | Technical Trainer/Mentor | Frontend Engineer | Backend Engineer" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.wilsonkinyua.com/" />
        <meta property="og:title" content="Wilson Kinyua | Software Engineer | Backend Engineer" />
        <meta property="og:description" content="Driven, innovative Software Engineer with experience in the development of software and solutions. A conscientious person who pays attention to details. Very passionate about software development, always willing and ready to learn new things/concepts. Proven leader with the ability to streamline development processes to drive the achievement of organizational objectives. An ambitious and generally curious professional who strives for greatness and is driven to grow himself and those around oneself through collaboration." />
        <meta property="og:image" content="/img/me.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.wilsonkinyua.com/" />
        <meta property="twitter:title" content="Wilson Kinyua | Software Engineer | Backend Engineer" />
        <meta property="twitter:description" content="Driven, innovative Software Engineer with experience in the development of software and solutions. A conscientious person who pays attention to details. Very passionate about software development, always willing and ready to learn new things/concepts. Proven leader with the ability to streamline development processes to drive the achievement of organizational objectives. An ambitious and generally curious professional who strives for greatness and is driven to grow himself and those around oneself through collaboration." />
        <meta property="twitter:image" content="/img/me.png" />

        <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />

      </head>
      <body
        className={cn(montserrat.className)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <MouseCustomCursor />
          <Navbar />
          <main className="container mx-auto">
            {children}
          </main>
          <Footer />
          <Analytics />
        </ThemeProvider>
        <Toaster
        />
      </body>
    </html>
  );
}

