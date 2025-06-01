"use client"
import AOS from 'aos';
import SocialLinks from "@/components/social-links";
import { Button } from "@/components/ui/button";
import { ChevronRight, CircleCheck, Loader } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useTransition, useState } from "react";
import Skills from '@/components/skills';
import Services from '@/components/services';
import Projects from '@/components/projects';
import Contact from '@/components/forms/contact';
import Experience from '@/components/experience';
import Link from 'next/link';
import { sendResumeViewedEmail } from '@/lib/actions';
import FAQ from '@/components/faq';
import Breadcrumb from "@/components/breadcrumb";

var ReactRotatingText = require('react-rotating-text');

export default function Home() {
  const [transition, startTransition] = useTransition();
  const [userIp, setUserIp] = useState('');

  useEffect(() => {
    AOS.init({
      once: false,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });

    // Fetch the user's IP address on the client side
    const fetchUserIp = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        setUserIp(data.ip);
      } catch (error) {
      }
    };

    fetchUserIp();
  }, []);

  const handleResumeDownload = () => {
    startTransition(async () => {
      // Capture user agent information and IP address
      const userAgent = window.navigator.userAgent;

      // Get additional client information
      const screenWidth = window.screen.width;
      const screenHeight = window.screen.height;
      const language = window.navigator.language;
      const platform = window.navigator.platform;
      const referrer = document.referrer || 'Direct visit';

      // Create a visitor data object
      const visitorData = {
        userAgent,
        ip: userIp,
        screenSize: `${screenWidth}x${screenHeight}`,
        language,
        platform,
        referrer,
        visitedAt: new Date().toISOString(),
      };

      // Send the information to our server action
      await sendResumeViewedEmail(JSON.stringify(visitorData));

      // Open the resume in a new tab
      window.open('https://drive.google.com/file/d/1NC_D4W6pFaXRXrwu-zx7tRAOxiZoCKhM/view?usp=sharing', '_blank');
    });
  };

  const breadcrumbItems = [
    { name: "Home", url: "https://www.wilsonkinyua.com" },
    { name: "Portfolio", url: "https://www.wilsonkinyua.com#projects" }
  ];

  return (
    <React.Fragment>
      <div className="hidden">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* Hero Section - Main introduction */}
      <section className="grid lg:grid-cols-2 grid-cols-1 items-center lg:text-left text-center min-h-screen" id="home" aria-label="Hero section - Wilson Kinyua Introduction">
        <header className="lg:order-1 order-2 lg:my-0 my-10">
          <p className="text-sm uppercase font-semibold tracking-wide">
            HELLO, I&apos;M
          </p>
          <h1 className="lg:text-5xl text-2xl font-black tracking-[0.1rem] lg:my-5 my-2">
            <span className="text-primary">Wilson</span> Kinyua
          </h1>
          <p className="lg:text-4xl text-xl text-primary font-semibold tracking-wide" role="doc-subtitle">
            <ReactRotatingText items={['Senior Software Engineer', 'Full Stack Engineer', 'Frontend Engineer', 'Backend Engineer', 'Mobile Apps Engineer', 'Expert in UI/UX Design', 'Technical Lead']} />
          </p>
          <p className="lg:my-10 my-5 leading-10">
            Dynamic and results-oriented Software Engineer with over 6 years of experience specializing in architecting scalable solutions and leading transformative projects. Proven track record of diagnosing complex challenges, delivering innovative solutions, and fostering collaborative team environments.
          </p>
          <div className="lg:flex lg:gap-5 my-10 lg:space-y-0 space-y-3">
            <Button
              variant={"default"}
              className="lg:w-auto w-full"
              onClick={handleResumeDownload}
              disabled={transition}
              aria-label="Download Wilson Kinyua's Resume PDF"
            >
              Download Resume
              {transition && <Loader className="ml-3 animate-spin" aria-hidden="true" />}
            </Button>
            <Button
              variant={"outline"}
              className="lg:w-auto w-full"
              aria-label="Contact Wilson Kinyua"
              asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
          <SocialLinks />
        </header>
        <Image
          src="/img/me.png"
          alt="Wilson Kinyua - Professional Software Engineer portrait"
          width={500}
          height={500}
          className="w-full lg:h-[45rem] h-96 object-contain lg:order-2 order-1"
          unoptimized={true}
          priority={true}
          loading="eager"
        />
      </section>

      {/* About Section */}
      <section
        className="grid lg:grid-cols-2 grid-cols-1 items-center gap-20 lg:my-20 my-5"
        id='about'
        aria-labelledby="about-heading"
      >
        <div className="rounded-lg h-full border-t-4 border-b-4 border-primary-foreground transition duration-500 hover:border-primary">
          <Image
            src="/img/hold.png"
            alt="Wilson Kinyua - Professional software engineer working"
            width={500}
            height={500}
            className="w-full h-full object-cover grayscale"
            data-aos="fade-up"
            unoptimized={true}
            loading="lazy"
          />
        </div>
        <article data-aos="fade-up">
          <p className="text-sm uppercase font-semibold tracking-wide">
            About Me
          </p>
          <h2 id="about-heading" className="lg:text-4xl text-2xl my-5">
            <span className="text-primary">Driven,</span> Innovative
            <br className="lg:block hidden" />
            {" "}
            Software <span className="text-primary">Engineer</span>
          </h2>
          <p className="leading-10 my-5">
            With over 6 years of dynamic experience in software engineering,
            I&apos;ve led the development of scalable solutions such as a financial
            mobile app that increased customer retention by 20% and a web
            application that boosted system efficiency by 30%. My expertise
            spans frontend and backend development, UI/UX design, and strategic
            leadership, consistently driving innovation and excellence.
          </p>
          <ul className="space-y-4 mb-10">
            <li className="flex">
              <CircleCheck className="text-primary mr-3" aria-hidden="true" /> <span>Develop highly interactive Front end / User Interfaces for the web</span>
            </li>
            <li className="flex">
              <CircleCheck className="text-primary mr-3" aria-hidden="true" /> <span>Progressive Web Applications ( PWA ) in normal and SPA Stacks</span>
            </li>
            <li className="flex">
              <CircleCheck className="text-primary mr-3" aria-hidden="true" /> <span>Integration of third party services such as AWS / Digital Ocean</span>
            </li>
            <li className="flex">
              <CircleCheck className="text-primary mr-3" aria-hidden="true" /> <span>Integration of payment services such as M-Pesa and paypal etc</span>
            </li>
            <li className="flex">
              <CircleCheck className="text-primary mr-3" aria-hidden="true" /> <span>Develop highly interactive Mobile Applications</span>
            </li>
            <li className="flex">
              <CircleCheck className="text-primary mr-3" aria-hidden="true" /> <span>Develop highly interactive Backend / API services</span>
            </li>
          </ul>
          <SocialLinks />
        </article>
      </section>

      {/* Services Section */}
      <section className="my-20" id="services" data-aos="fade-up" aria-label="Services section">
        <p className="text-sm uppercase font-semibold tracking-wide text-center">I like to make things easy and fun</p>
        <h2 className='text-center lg:text-4xl text-2xl my-5'>
          My <span className="text-primary">Special Services</span> For your <br className="lg:block hidden" /> Business <span className="text-primary">Development</span>
        </h2>
        <Services />
      </section>

      {/* Experience Section */}
      <section className="my-20" id='resume' data-aos="fade-up" aria-label="Resume section">
        <p className="text-sm uppercase font-semibold tracking-wide text-center">My <span className="text-primary">Resume</span></p>
        <h2 className='text-center capitalize lg:text-4xl text-2xl my-5'>
          Real <span className="text-primary">Problem Solutions</span> Experience
        </h2>
        <div className="my-10">
          <Experience />
        </div>
      </section>

      {/* Skills Section */}
      <section className="my-20" id='skills' aria-label="Skills section">
        <p className="text-sm uppercase font-semibold tracking-wide text-center">My <span className="text-primary">Talent</span></p>
        <h2 className='text-center capitalize lg:text-4xl text-2xl my-5'>
          professional skills
        </h2>
        <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-5 my-10">
          <Skills />
        </div>
      </section>

      {/* Projects Section */}
      <section className="my-20" id='projects' aria-label="Projects section">
        <p className="text-sm uppercase font-semibold tracking-wide text-center">Latest Works</p>
        <h2 className='text-center capitalize lg:text-4xl text-2xl my-5'>
          Explore My Popular <span className="text-primary">Projects</span>
        </h2>
        <Projects />
        <a
          href="https://github.com/Wilsonkinyua"
          className="flex justify-center my-10"
          target='_blank'
          rel="noopener noreferrer"
          aria-label="View all projects on GitHub"
        >
          <Button
            variant={"default"}
            className="lg:w-auto w-full"
          >
            View All Projects <ChevronRight className="ml-3" aria-hidden="true" />
          </Button>
        </a>
      </section>

      {/* FAQ Section */}
      <section className="my-20" id='faq' aria-label="Frequently Asked Questions">
        <p className="text-sm uppercase font-semibold tracking-wide text-center">Questions & Answers</p>
        <h2 className='text-center capitalize lg:text-4xl text-2xl my-5'>
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>
        <p className="text-center mb-10 max-w-2xl mx-auto">
          Below are answers to some common questions about my services and expertise. If you have other questions, feel free to get in touch.
        </p>
        <FAQ />
      </section>

      {/* Contact Section */}
      <section id='contact' aria-label="Contact section">
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-20 my-20'>
          <div>
            <p className="text-sm uppercase font-semibold tracking-wide">
              Get In Touch
            </p>
            <h2 className='lg:text-4xl text-2xl my-5'>
              Let&apos;s Talk For your <span className="text-primary">Next Project(s)</span>
            </h2>
            <p className="leading-10 my-5">
              Discuss a project or just want to say hi? Connect with me via email or through a phone call.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex">
                <CircleCheck className="text-primary mr-3" aria-hidden="true" /> <span>6+ Years of Experience</span>
              </li>
              <li className="flex">
                <CircleCheck className="text-primary mr-3" aria-hidden="true" /> <span>Professional Web Designer</span>
              </li>
              <li className="flex">
                <CircleCheck className="text-primary mr-3" aria-hidden="true" /> <span>Mobile Apps Development</span>
              </li>
              <li className="flex">
                <CircleCheck className="text-primary mr-3" aria-hidden="true" /> <span>Technical Mentorship</span>
              </li>
              <li className="flex">
                <CircleCheck className="text-primary mr-3" aria-hidden="true" /> <span>Fullstack Developer</span>
              </li>
            </ul>
            <SocialLinks />
          </div>
          <div>
            <Contact />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
