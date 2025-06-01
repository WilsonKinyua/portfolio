import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
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
import Script from "next/script";
import SkipToContent from "@/components/skip-to-content";

export const metadata: Metadata = {
  title: {
    default: "Wilson Kinyua | Senior Software Engineer in Nairobi",
    template: "%s | Wilson Kinyua"
  },
  description: "Wilson Kinyua - Senior Software Engineer in Nairobi with 6+ years experience in React, Next.js, TypeScript & Python. Available for projects. View portfolio.",
  metadataBase: new URL("https://www.wilsonkinyua.com"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    // Primary keywords
    "Wilson Kinyua",
    "Software Engineer Nairobi",
    "Full Stack Developer Kenya",
    "Frontend Engineer React",
    "Backend Developer Python",
    // Skill-based keywords
    "React Developer",
    "Next.js Expert",
    "TypeScript Developer",
    "Python Engineer",
    "Laravel Developer",
    "Vue.js Developer",
    "Mobile App Developer",
    "UI/UX Designer",
    // Location + role combinations
    "Software Engineer Nairobi Kenya",
    "Frontend Developer Nairobi",
    "React Developer Kenya",
    "Freelance Developer Nairobi",
    // Portfolio related
    "Software Engineer Portfolio",
    "Developer Portfolio Kenya",
    "Tech Portfolio Nairobi"
  ].join(", "),
  authors: [{ name: "Wilson Kinyua", url: "https://www.wilsonkinyua.com" }],
  creator: "Wilson Kinyua",
  publisher: "Wilson Kinyua",
  category: "Technology",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-video-preview": -1,
    "max-snippet": -1,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.wilsonkinyua.com/",
    title: "Wilson Kinyua | Professional Software Engineer Portfolio",
    description: "Driven, innovative Software Engineer with 6+ years experience in frontend, backend, and mobile development. Expert in React, Next.js, TypeScript, Python, and UI/UX design.",
    siteName: "Wilson Kinyua Portfolio",
    images: [
      {
        url: "https://www.wilsonkinyua.com/img/me.png",
        width: 800,
        height: 600,
        alt: "Wilson Kinyua - Software Engineer",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wilson Kinyua | Professional Software Engineer Portfolio",
    description: "Driven, innovative Software Engineer with 6+ years experience in frontend, backend, and mobile development. Expert in React, Next.js, TypeScript, Python, and UI/UX design.",
    images: ["https://www.wilsonkinyua.com/img/me.png"],
    creator: "@wilsonkinyuam",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/img/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preload critical assets */}
        <link rel="preload" href="/img/me.png" as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.ipify.org" />
        <link rel="dns-prefetch" href="https://ipapi.co" />

        {/* Preloading key CSS files for faster rendering */}
        <link rel="preload" href="/styles/globals.scss" as="style" />

        {/* Location-specific metadata */}
        <meta name="geo.region" content="KE" />
        <meta name="geo.placename" content="Nairobi" />
        <meta name="geo.position" content="-1.2921;36.8219" />
        <meta name="ICBM" content="-1.2921, 36.8219" />
      </head>
      <body
        className={cn(montserrat.className)}
      >
        <SkipToContent />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <MouseCustomCursor />
          <Navbar />
          <main id="main-content" className="container mx-auto" role="main" tabIndex={-1}>
            {children}
          </main>
          <Footer />
          <Analytics />
        </ThemeProvider>
        <Toaster />
        <GoogleAnalytics gaId="G-95T62PEV34" />

        {/* Enhanced JSON-LD structured data for rich snippets */}
        <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Wilson Kinyua',
            url: 'https://www.wilsonkinyua.com',
            image: 'https://www.wilsonkinyua.com/img/me.png',
            jobTitle: 'Senior Frontend Developer',
            telephone: '+254717255460',
            email: 'wilsonkinyuam@gmail.com',
            worksFor: {
              '@type': 'Organization',
              name: 'Belva Digital'
            },
            alumniOf: {
              '@type': 'CollegeOrUniversity',
              name: 'Jomo Kenyatta University of Agriculture and Technology',
              sameAs: 'https://www.jkuat.ac.ke/',
              department: {
                '@type': 'Organization',
                name: 'Department of Information Technology'
              },
              award: 'Bachelor of Science in Information Technology'
            },
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Nairobi',
              addressRegion: 'Kenya',
              addressCountry: 'KE'
            },
            sameAs: [
              'https://github.com/Wilsonkinyua',
              'https://www.linkedin.com/in/wilsonkinyua/',
              'https://www.figma.com/@wilsonkinyua',
              'https://twitter.com/wilsonkinyuam'
            ],
            description: 'Driven, innovative Software Engineer with 7+ years experience in frontend, backend, and mobile development, located in Nairobi, Kenya.',
            knowsAbout: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Python', 'PHP', 'Laravel', 'UI/UX Design', 'Vue.js', 'Tailwind CSS', 'Agile methodologies', 'CI/CD', 'API Integration'],
            hasOccupation: {
              '@type': 'Occupation',
              name: 'Software Engineer',
              occupationLocation: {
                '@type': 'City',
                name: 'Nairobi, Kenya'
              },
              skills: 'React, Next.js, TypeScript, JavaScript, Python, PHP, Laravel, UI/UX Design, Vue.js, Tailwind CSS, Agile methodologies, CI/CD, API Integration'
            },
            workExperience: [
              {
                '@type': 'OrganizationRole',
                startDate: '2025-01',
                roleName: 'Senior Frontend Developer',
                worksFor: {
                  '@type': 'Organization',
                  name: 'Belva Digital'
                },
                description: 'Led the development of scalable and responsive frontend applications using Next.js, Vue.js, TypeScript, and Tailwind CSS, enhancing user experience and improving page load times by 35%.'
              },
              {
                '@type': 'OrganizationRole',
                startDate: '2024-01',
                endDate: '2024-06',
                roleName: 'Chief Technology Officer',
                worksFor: {
                  '@type': 'Organization',
                  name: 'Paya Finance'
                },
                description: 'Integrated AI-driven personalization features, improved security protocols, and led Agile project management implementation.'
              },
              {
                '@type': 'OrganizationRole',
                startDate: '2023-10',
                endDate: '2023-12',
                roleName: 'Senior Software Engineer',
                worksFor: {
                  '@type': 'Organization',
                  name: 'Paya Finance'
                },
                description: 'Utilized Agile methodologies for mobile app enhancement and implemented API integration with financial partners.'
              },
              {
                '@type': 'OrganizationRole',
                startDate: '2022-05',
                endDate: '2023-09',
                roleName: 'Senior Software Engineer',
                worksFor: {
                  '@type': 'Organization',
                  name: 'Moringa School'
                },
                description: 'Enhanced software development curriculum and conducted hands-on coding workshops for 100+ students.'
              },
              {
                '@type': 'OrganizationRole',
                startDate: '2020-10',
                endDate: '2022-04',
                roleName: 'Senior Software Engineer',
                worksFor: {
                  '@type': 'Organization',
                  name: 'Weza Prosoft Limited'
                },
                description: 'Led development of internal procurement systems and cross-platform Snagging app.'
              },
              {
                '@type': 'OrganizationRole',
                startDate: '2018-08',
                endDate: '2020-06',
                roleName: 'Back End Engineer',
                worksFor: {
                  '@type': 'Organization',
                  name: 'Brance Technologies'
                },
                description: 'Developed scalable PHP/Laravel applications and dynamic inventory management systems.'
              },
              {
                '@type': 'OrganizationRole',
                startDate: '2018-02',
                endDate: '2018-07',
                roleName: 'Frontend Engineer',
                worksFor: {
                  '@type': 'Organization',
                  name: 'Brance Technologies'
                },
                description: 'Implemented responsive design principles and collaborated with UX designers to enhance site functionality.'
              }
            ],
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://www.wilsonkinyua.com'
            }
          })
        }} />

        {/* Portfolio Projects Structured Data */}
        <Script id="projects-json-ld" type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: [
              {
                '@type': 'SoftwareSourceCode',
                position: 1,
                name: 'Mount Kenya Wildlife Conservancy',
                description: 'Mount Kenya Wildlife Conservancy web application that increased user retention by 20%',
                programmingLanguage: ['Next.js', 'TypeScript', 'Umbraco CMS'],
                codeRepository: 'https://github.com/Wilsonkinyua',
                image: 'https://www.wilsonkinyua.com/img/projects/1.png'
              },
              {
                '@type': 'SoftwareSourceCode',
                position: 2,
                name: '"Say NO" Campaign',
                description: 'This initiative emerges from a profound understanding of the urgent need to combat the growing trend of fake job scams that exploit the good name of reputable businesses to perpetrate human trafficking and other forms of illegal cross-border activities.',
                programmingLanguage: ['Next.js', 'TypeScript', 'Tailwind CSS'],
                codeRepository: 'https://github.com/Wilsonkinyua',
                image: 'https://www.wilsonkinyua.com/img/projects/2.png'
              },
              {
                '@type': 'SoftwareSourceCode',
                position: 3,
                name: 'The Third African Congress on Conservation Agriculture (3ACCA)',
                description: '3ACCA initiative is to facilitate diverse and open sharing of experiences and information on Conservation Agriculture (CA) and Sustainable Agricultural Mechanization (SAM) thereby fostering learning and widespread awareness and interest in the uptake and spread of CA and SAM.',
                programmingLanguage: ['Laravel', 'PHP', 'MySQL'],
                codeRepository: 'https://github.com/Wilsonkinyua',
                image: 'https://www.wilsonkinyua.com/img/projects/3.png'
              }
            ]
          })
        }} />

        {/* Professional Services Structured Data */}
        <Script id="services-json-ld" type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: [
              {
                '@type': 'Service',
                position: 1,
                name: 'Frontend Development',
                description: 'Building responsive, interactive user interfaces with Next.js, Vue.js, TypeScript, and Tailwind CSS',
                provider: {
                  '@type': 'Person',
                  name: 'Wilson Kinyua'
                },
                serviceType: 'Web Development'
              },
              {
                '@type': 'Service',
                position: 2,
                name: 'Backend Development',
                description: 'Creating robust API services and server-side applications with PHP/Laravel, Python, and Node.js',
                provider: {
                  '@type': 'Person',
                  name: 'Wilson Kinyua'
                },
                serviceType: 'Web Development'
              },
              {
                '@type': 'Service',
                position: 3,
                name: 'Mobile App Development',
                description: 'Developing cross-platform mobile applications with React Native',
                provider: {
                  '@type': 'Person',
                  name: 'Wilson Kinyua'
                },
                serviceType: 'App Development'
              },
              {
                '@type': 'Service',
                position: 4,
                name: 'UI/UX Design & Implementation',
                description: 'Designing and implementing user interfaces using Figma and modern frontend frameworks',
                provider: {
                  '@type': 'Person',
                  name: 'Wilson Kinyua'
                },
                serviceType: 'Design Services'
              },
              {
                '@type': 'Service',
                position: 5,
                name: 'Technical Leadership',
                description: 'Providing technical direction, mentorship, and implementing Agile methodologies',
                provider: {
                  '@type': 'Person',
                  name: 'Wilson Kinyua'
                },
                serviceType: 'Consulting Services'
              }
            ]
          })
        }} />

        {/* Local Business Schema */}
        <Script id="local-business-json-ld" type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Wilson Kinyua - Software Engineering Services',
            image: 'https://www.wilsonkinyua.com/img/me.png',
            '@id': 'https://www.wilsonkinyua.com',
            url: 'https://www.wilsonkinyua.com',
            telephone: '+254717255460',
            email: 'wilsonkinyuam@gmail.com',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Nairobi',
              addressRegion: 'Nairobi',
              addressCountry: 'KE'
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: -1.2921,
              longitude: 36.8219
            },
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: [
                'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
              ],
              opens: '00:00',
              closes: '23:59'
            },
            sameAs: [
              'https://github.com/Wilsonkinyua',
              'https://www.linkedin.com/in/wilsonkinyua/',
              'https://www.figma.com/@wilsonkinyua',
              'https://twitter.com/wilsonkinyuam'
            ],
            priceRange: '$$$',
            description: 'Professional software engineering services including frontend development, backend development, mobile app development, UI/UX design, and technical leadership. Available 24/7.'
          })
        }} />

        {/* Resume Structured Data */}
        <Script id="resume-json-ld" type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Dataset',
            name: 'Wilson Kinyua - Professional Resume',
            description: 'Professional resume of Wilson Kinyua, Software Engineer based in Nairobi, Kenya with experience in frontend, backend, and mobile development.',
            keywords: [
              'Software Engineer Resume',
              'Frontend Developer',
              'Backend Engineer',
              'Full Stack Developer',
              'Nairobi Kenya',
              'React Developer',
              'Next.js Developer',
              'Vue.js Developer',
              'Laravel Developer',
              'Wilson Kinyua Resume'
            ],
            creator: {
              '@type': 'Person',
              name: 'Wilson Kinyua'
            },
            license: 'https://creativecommons.org/licenses/by/4.0/',
            spatialCoverage: {
              '@type': 'Place',
              name: 'Nairobi, Kenya'
            }
          })
        }} />
      </body>
    </html>
  );
}

