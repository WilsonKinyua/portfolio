"use client"
import AOS from 'aos';
import SocialLinks from "@/components/social-links";
import { Button } from "@/components/ui/button";
import { ChevronRight, CircleCheck } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";
import Skills from '@/components/skills';
import Services from '@/components/services';
import Projects from '@/components/projects';
import Contact from '@/components/forms/contact';
import Experience from '@/components/experience';
import Link from 'next/link';

var ReactRotatingText = require('react-rotating-text');

export default function Home() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <React.Fragment>
      {/* intro */}
      <section className="grid lg:grid-cols-2 grid-cols-1 items-center lg:text-left text-center">
        <div className="lg:order-1 order-2 lg:my-0 my-10">
          <p className="text-sm uppercase font-semibold tracking-wide">
            HELLO, I&apos;M
          </p>
          <h1 className="lg:text-5xl text-2xl font-black tracking-[0.1rem] lg:my-5 my-2">
            <span className="text-primary">Wilson</span> Kinyua
          </h1>
          <p className="lg:text-4xl text-xl text-primary font-semibold tracking-wide">
            <ReactRotatingText items={['Software Engineer', 'Web developer', 'Frontend Developer', 'Backend Developer', 'Mobile apps Developer', 'UI/UX designer', 'Tech enthusiast']} />
          </p>
          <p className="lg:my-10 my-5 leading-10">
            From Nairobi, Kenya. I have more than <span className="text-primary">5 years</span> experience
            in development cycle for dynamic web projects,
            app development, and I am also proficient in
            UX/UI design.
          </p>
          <div className="lg:flex lg:gap-5 my-10 lg:space-y-0 space-y-3">
            <Button
              variant={"default"}
              className="lg:w-auto w-full"
              onClick={() => {
                window.open('https://drive.google.com/file/d/1ULybJIrMYilUrdxzONjkiPeswp4mD0N7/view?usp=sharing', '_blank');
              }}
            >
              Download Resume
            </Button>
            <Button
              variant={"outline"}
              className="lg:w-auto w-full"
              asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>

          </div>
          <SocialLinks />
        </div>
        <Image
          src="/img/me.png"
          alt="Wilson Kinyua"
          width={500}
          height={500}
          className="w-full lg:h-[45rem] h-96 object-contain lg:order-2 order-1"
          unoptimized={true}
        />
      </section>
      {/* about me */}
      <section
        className="grid lg:grid-cols-2 grid-cols-1 items-center gap-20 lg:my-20 my-5"
        id='about'
      >
        <div className="rounded-lg h-full border-t-4 border-b-4 border-primary-foreground transition duration-500 hover:border-primary">
          <Image
            src="/img/hold.png"
            alt="About Wilson Kinyua"
            width={500}
            height={500}
            className="w-full h-full object-cover grayscale"
            data-aos="fade-up"
            unoptimized={true}
          />
        </div>
        <div
          data-aos="fade-up"
        >
          <p className="text-sm uppercase font-semibold tracking-wide">
            About Me
          </p>
          <h2 className="lg:text-4xl text-2xl my-5">
            <span className="text-primary">Driven,</span> Innovative
            <br
              className="lg:block hidden"
            />
            {" "}
            Software <span className="text-primary">Engineer</span>
          </h2>
          <p className="leading-10 my-5">
            More than 5 years Experience in the development of software and solutions. A conscientious person who pays attention to details. Very passionate about software development, always willing and ready to learn new things/concepts. Proven leader with the ability to streamline development processes to drive the achievement of organisational objectives.
          </p>
          <ul className="space-y-4 mb-10">
            <li className="flex">
              <CircleCheck className="text-primary mr-3" /> Develop highly interactive Front end / User Interfaces for the web
            </li>
            <li className="flex">
              <CircleCheck className="text-primary mr-3" /> Progressive Web Applications ( PWA ) in normal and SPA Stacks
            </li>
            <li className="flex">
              <CircleCheck className="text-primary mr-3" /> Integration of third party services such as AWS / Digital Ocean
            </li>
            <li className="flex">
              <CircleCheck className="text-primary mr-3" /> Integration of payment services such as M-Pesa and paypal etc
            </li>
            <li className="flex">
              <CircleCheck className="text-primary mr-3" /> Develop highly interactive Mobile Applications
            </li>
            <li className="flex">
              <CircleCheck className="text-primary mr-3" /> Develop highly interactive Backend / API services
            </li>
          </ul>
          <SocialLinks />
        </div>
      </section>
      {/* services */}
      <section className="my-20" id="services" data-aos="fade-up">
        <p className="text-sm uppercase font-semibold tracking-wide text-center">I like to make things easy and fun</p>
        <h4 className='text-center lg:text-4xl text-2xl my-5'>
          My <span className="text-primary">Special Services</span> For your <br className="lg:block hidden" /> Business <span className="text-primary">Development</span>
        </h4>
        <Services />
      </section>
      {/* experiences/education */}
      <section className="my-20" id='resume' data-aos="fade-up">
        <p className="text-sm uppercase font-semibold tracking-wide text-center">My <span className="text-primary">Resume</span></p>
        <h4 className='text-center capitalize lg:text-4xl text-2xl my-5'>
          Real <span className="text-primary">Problem Solutions</span> Experience
        </h4>
        <div className="my-10">
          <Experience />
        </div>
      </section>
      {/* professional skills */}
      <section className="my-20" id='skills'>
        <p className="text-sm uppercase font-semibold tracking-wide text-center">My <span className="text-primary">Talent</span></p>
        <h4 className='text-center capitalize lg:text-4xl text-2xl my-5'>
          professional skills
        </h4>
        <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-5 my-10">
          <Skills />
        </div>
      </section>
      {/* Latest Works */}
      <section className="my-20" data-aos="fade-up" id='projects'>
        <p className="text-sm uppercase font-semibold tracking-wide text-center">Latest Works</p>
        <h4 className='text-center capitalize lg:text-4xl text-2xl my-5'>
          Explore My Popular <span className="text-primary">Projects</span>
        </h4>
        <Projects />
        <a
          href="https://github.com/Wilsonkinyua"
          className="flex justify-center my-10"
          target='_blank'
        >
          <Button
            variant={"default"}
            className="lg:w-auto w-full"
          >
            View All Projects <ChevronRight className="ml-3" />
          </Button>
        </a>
      </section>
      {/* contact form */}
      <section id='contact'>
        <div
          className='grid lg:grid-cols-2 grid-cols-1 gap-20 my-20'
        >
          <div>
            <p className="text-sm uppercase font-semibold tracking-wide">
              Get In Touch
            </p>
            <h4 className='lg:text-4xl text-2xl my-5'>
              Let&apos;s Talk For your <span className="text-primary">Next Project(s)</span>
            </h4>
            <p className="leading-10 my-5">
              Discuss a project or just want to say hi? Connect with me via email or through a phone call.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex">
                <CircleCheck className="text-primary mr-3" /> 5+ Years of Experience
              </li>
              <li className="flex">
                <CircleCheck className="text-primary mr-3" /> Professional Web Designer
              </li>
              <li className="flex">
                <CircleCheck className="text-primary mr-3" /> Mobile Apps Development
              </li>
              <li className="flex">
                <CircleCheck className="text-primary mr-3" /> Technical Mentorship
              </li>
              <li className="flex">
                <CircleCheck className="text-primary mr-3" /> Fullstack Developer
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
