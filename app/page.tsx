"use client"
import AOS from 'aos';
import SocialLinks from "@/components/social-links";
import { CircleCheck, Sparkles } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";
import Skills from '@/components/skills';
import Services from '@/components/services';
import Contact from '@/components/forms/contact';
import Experience from '@/components/experience';
import Link from 'next/link';
import FAQ from '@/components/faq';
import Breadcrumb from "@/components/breadcrumb";
import MetricsBanner from '@/components/metrics-banner';
import CaseStudies from '@/components/case-studies';
import Offers from '@/components/offers';
import { StatsBanner, Testimonials, CompanyLogos } from '@/components/social-proof';
import WorkWithMe from '@/components/work-with-me';
import { profile } from '@/data';
import { BookCallButton, ViewResumeButton } from '@/components/cta';

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: false,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  }, []);

  const breadcrumbItems = [
    { name: "Home", url: "https://www.wilsonkinyua.com" },
    { name: "About", url: "https://www.wilsonkinyua.com#about" },
    { name: "Services", url: "https://www.wilsonkinyua.com#services" },
    { name: "Case Studies", url: "https://www.wilsonkinyua.com#case-studies" },
    { name: "Resume", url: "https://www.wilsonkinyua.com#resume" },
    { name: "Contact", url: "https://www.wilsonkinyua.com#contact" }
  ];

  return (
    <React.Fragment>
      <div className="hidden">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* Hero Section - Main introduction */}
      <section className="grid lg:grid-cols-2 grid-cols-1 items-center lg:text-left text-center min-h-screen" id="home" aria-label="Hero section - Wilson Kinyua Introduction">
        <header className="lg:order-1 order-2 lg:my-0 my-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-muted-foreground">Available for projects & opportunities</span>
          </div>

          <h1 className="lg:text-5xl text-3xl font-black tracking-tight lg:my-5 my-2">
            {profile.title}
          </h1>
          <p className="text-lg font-medium text-foreground/80 mb-2">
            {profile.name} — Former CTO at Paya Finance
          </p>

          <p className="lg:text-xl text-lg text-muted-foreground leading-relaxed my-4" role="doc-subtitle">
            {profile.tagline}
          </p>

          {/* Metrics Banner */}
          <MetricsBanner
            metrics={profile.metrics}
            className="my-6"
          />

          {/* Hero Testimonial - Social Proof */}
          <div className="my-6 p-4 border-l-4 border-primary bg-primary/5 max-w-xl lg:mx-0 mx-auto rounded-r-lg">
            <p className="text-sm italic text-foreground/90">
              &ldquo;Wilson delivered a week early, and our conversion rate doubled.&rdquo;
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              — Nelson K., Head of Product Weza Prosoft
            </p>
          </div>

          {/* AI Leverage Statement */}
          <div className="flex items-center gap-2 my-6 lg:justify-start justify-center">
            <Sparkles className="w-4 h-4 text-primary" />
            <p className="text-sm text-muted-foreground">
              {profile.aiStatement}
            </p>
          </div>

          {/* Dual CTAs */}
          <div className="lg:flex lg:gap-4 my-8 lg:space-y-0 space-y-3">
            <BookCallButton className="lg:w-auto w-full" />
            <ViewResumeButton className="lg:w-auto w-full" />
          </div>

          {/* Availability Statement */}
          <p className="text-sm text-muted-foreground mb-6">
            {profile.availabilityStatement}
          </p>

          <SocialLinks />
        </header>
        <Image
          src="/img/me.png"
          alt="Wilson Kinyua - Professional Software Engineer portrait"
          width={500}
          height={500}
          className="w-full lg:h-[45rem] h-96 object-contain lg:order-2 order-1"
          priority
        />
      </section>

      {/* Trusted By - Logo Bar */}
      <section className="my-10" aria-label="Trusted by companies">
        <CompanyLogos />
      </section>

      {/* Social Proof - Stats */}
      <section className="mt-16" aria-label="Social proof stats">
        <StatsBanner />
      </section>

      {/* Testimonials Section */}
      <section className="my-20" id="testimonials" aria-label="Client testimonials">
        <p className="text-sm uppercase font-semibold tracking-wide text-center">
          What People Say
        </p>
        <h2 className="text-center lg:text-4xl text-2xl my-5">
          Client <span className="text-primary">Testimonials</span>
        </h2>
        <Testimonials />
      </section>

      {/* Case Studies Section */}
      <section className="my-20" id="case-studies" data-aos="fade-up" aria-label="Case studies">
        <p className="text-sm uppercase font-semibold tracking-wide text-center">
          Proven Results
        </p>
        <h2 className="text-center lg:text-4xl text-2xl my-5">
          Featured <span className="text-primary">Case Studies</span>
        </h2>
        <p className="text-center mb-10 max-w-3xl mx-auto text-muted-foreground">
          Real projects with measurable outcomes. See how I&apos;ve helped teams improve performance,
          reduce churn, and ship faster.
        </p>
        <CaseStudies limit={4} />

        {/* CTA After Case Studies */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Ready to see these results for your project?</p>
          <BookCallButton size="lg">
            Book a Free Strategy Call
          </BookCallButton>
        </div>
      </section>

      {/* Productized Offers Section */}
      <section className="my-20" id="offers" data-aos="fade-up" aria-label="Service offers">
        <p className="text-sm uppercase font-semibold tracking-wide text-center">
          How I Can Help
        </p>
        <h2 className="text-center lg:text-4xl text-2xl my-5">
          <span className="text-primary">Productized</span> Services
        </h2>
        <p className="text-center mb-10 max-w-3xl mx-auto text-muted-foreground">
          Clear deliverables, fixed timelines. Choose the engagement that fits your needs.
        </p>
        <Offers />
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
            loading="lazy"
          />
        </div>
        <article data-aos="fade-up">
          <p className="text-sm uppercase font-semibold tracking-wide">
            About Me
          </p>
          <h2 id="about-heading" className="lg:text-4xl text-2xl my-5">
            <span className="text-primary">Former CTO,</span> Senior
            <br className="lg:block hidden" />
            {" "}
            Frontend <span className="text-primary">Engineer</span>
          </h2>
          <p className="leading-8 my-5">
            {profile.about.intro}
          </p>
          <p className="leading-8 my-5 text-primary font-medium">
            {profile.about.highlight}
          </p>
          <p className="text-sm uppercase font-semibold tracking-wide mt-8 mb-4">
            I specialize in:
          </p>
          <ul className="space-y-4 mb-8">
            {profile.about.specializations.map((item, index) => (
              <li key={index} className="flex items-start">
                <CircleCheck className="text-primary mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex items-start gap-2 p-4 rounded-lg bg-primary/5 border border-primary/20 mb-8">
            <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <p className="text-sm">
              {profile.about.aiApproach}
            </p>
          </div>
          <SocialLinks />
        </article>
      </section>

      {/* Services Section */}
      <section className="my-20" id="services" data-aos="fade-up" aria-label="Services section">
        <p className="text-sm uppercase font-semibold tracking-wide text-center">Why Senior Engineering Matters</p>
        <h2 className='text-center lg:text-4xl text-2xl my-5'>
          <span className="text-primary">Outcomes</span> I Deliver, <br className="lg:block hidden" /> Not Just <span className="text-primary">Code</span>
        </h2>
        <p className="text-center mb-8 max-w-3xl mx-auto text-muted-foreground">
          Every engagement focuses on business impact: faster load times, fewer bugs, better user experiences.
        </p>
        <Services />
      </section>

      {/* Experience Section */}
      <section className="my-20" id='resume' data-aos="fade-up" aria-label="Resume section">
        <p className="text-sm uppercase font-semibold tracking-wide text-center">Professional <span className="text-primary">Background</span></p>
        <h2 className='text-center lg:text-4xl text-2xl my-5'>
          Career <span className="text-primary">History</span>
        </h2>
        <p className="text-center mb-8 max-w-3xl mx-auto text-muted-foreground">
          7+ years building products for fintech, SaaS, and education companies.
          Interested in working together? <Link href="#contact" className="text-primary hover:underline ml-1">Get in touch</Link>.
        </p>
        <div className="my-10">
          <Experience />
        </div>
      </section>

      {/* Skills Section - Collapsible */}
      <section className="my-20" id='skills' aria-label="Skills section">
        <p className="text-sm uppercase font-semibold tracking-wide text-center">Technical <span className="text-primary">Foundation</span></p>
        <h2 className='text-center lg:text-4xl text-2xl my-5'>
          The <span className="text-primary">Tech Stack</span> I Use
        </h2>
        <details className="max-w-4xl mx-auto">
          <summary className="cursor-pointer text-center text-primary hover:underline mb-6">
            View full tech stack →
          </summary>
          <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-5 my-10">
            <Skills />
          </div>
        </details>
      </section>

      {/* Work With Me Section - Dual CTA */}
      <section className="my-20" id="work-with-me" data-aos="fade-up" aria-label="Work with me">
        <p className="text-sm uppercase font-semibold tracking-wide text-center">
          Let&apos;s Connect
        </p>
        <h2 className="text-center lg:text-4xl text-2xl my-5">
          <span className="text-primary">Work</span> With Me
        </h2>
        <p className="text-center mb-10 max-w-2xl mx-auto text-muted-foreground">
          Whether you need a freelance engineer for your project or you&apos;re hiring for your team,
          I&apos;d love to hear from you.
        </p>
        <WorkWithMe />
      </section>

      {/* FAQ Section */}
      <section className="my-20" id='faq' aria-label="Frequently Asked Questions">
        <p className="text-sm uppercase font-semibold tracking-wide text-center">Questions & Answers</p>
        <h2 className='text-center capitalize lg:text-4xl text-2xl my-5'>
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>
        <p className="text-center mb-10 max-w-2xl mx-auto text-muted-foreground">
          Common questions about my services, availability, and how I work.
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
              Review my <Link href="#case-studies" className="text-primary hover:underline">case studies</Link>,
              explore my <Link href="#services" className="text-primary hover:underline ml-1">services</Link>, or
              check my <Link href="#resume" className="text-primary hover:underline ml-1">professional background</Link>.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex">
                <CircleCheck className="text-primary mr-3" aria-hidden="true" /> <span>Former CTO at Paya Finance (fintech)</span>
              </li>
              <li className="flex">
                <CircleCheck className="text-primary mr-3" aria-hidden="true" /> <span>Trained 600+ developers at Moringa School</span>
              </li>
              <li className="flex">
                <CircleCheck className="text-primary mr-3" aria-hidden="true" /> <span>Clients see 35% faster load times on average</span>
              </li>
              <li className="flex">
                <CircleCheck className="text-primary mr-3" aria-hidden="true" /> <span>2-3 week turnaround on most projects</span>
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
