"use client"
import AOS from 'aos';
import SocialLinks from "@/components/social-links";
import { Button } from "@/components/ui/button";
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";
import Skills from '@/components/skills';
import Services from '@/components/services';

var ReactRotatingText = require('react-rotating-text');

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <React.Fragment>
      {/* intro */}
      <section className="grid lg:grid-cols-2 grid-cols-1 items-center lg:text-left text-center">
        <div className="lg:order-1 order-2 lg:my-0 my-10">
          <p className="text-sm uppercase font-semibold tracking-wide">
            HELLO, I'M
          </p>
          <h1 className="lg:text-5xl text-2xl font-black tracking-[0.1rem] lg:my-5 my-2">
            <span className="text-primary">Wilson</span> Kinyua
          </h1>
          <p className="lg:text-4xl text-xl text-primary font-semibold tracking-wide">
            <ReactRotatingText items={['Software Engineer', 'Web developer', 'Frontend Developer', 'Backend Developer', 'Mobile apps Developer', 'UI/UX designer', 'Tech enthusiast']} />
          </p>
          <p className="lg:my-10 my-5 leading-10">
            From Nairobi, Kenya. I have more that <span className="text-primary">5 years</span> experience
            in development cycle for dynamic web projects,
            app development, and I am also proficient in
            UX/UI design.
          </p>
          <div className="lg:flex lg:gap-5 my-10 lg:space-y-0 space-y-3">
            <Button
              variant={"default"}
              className="lg:w-auto w-full"
            >
              Download Resume
            </Button>
            <Button
              variant={"outline"}
              className="lg:w-auto w-full"
            >
              Contact Me
            </Button>
          </div>
          <SocialLinks />
        </div>
        <Image
          src="/img/me.svg"
          alt="Wilson Kinyua"
          width={500}
          height={500}
          className="w-full lg:h-[45rem] h-96 object-contain lg:order-2 order-1"
        />
      </section>
      {/* about me */}
      <section
        className="grid lg:grid-cols-2 grid-cols-1 items-center gap-20 lg:my-20 my-5"
      >
        <Image
          src="/img/me-2.svg"
          alt="About Wilson Kinyua"
          width={500}
          height={500}
          className="w-full h-full rounded-lg border-t-4 border-b-4 border-primary-foreground transition duration-500 hover:border-primary shadow-2xl"
          data-aos="fade-up"
        />
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
      <section className="my-20" data-aos="fade-up">
        <p className="text-sm uppercase font-semibold tracking-wide text-center">I like to make things easy and fun</p>
        <h4 className='text-center lg:text-4xl text-2xl my-5'>
          My <span className="text-primary">Special Services</span> For your <br className="lg:block hidden" /> Business <span className="text-primary">Development</span>
        </h4>
        <Services />
      </section>
      {/* professional skills */}
      <section className="my-20" data-aos="fade-up">
        <p className="text-sm uppercase font-semibold tracking-wide text-center">My <span className="text-primary">Talent</span></p>
        <h4 className='text-center capitalize lg:text-4xl text-2xl my-5'>
          professional skills
        </h4>
        <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-5 my-10">
          <Skills />
        </div>
      </section>
      {/* Latest Works */}
      <section className="my-20" data-aos="fade-up">
        <p className="text-sm uppercase font-semibold tracking-wide text-center">Latest Works</p>
        <h4 className='text-center capitalize lg:text-4xl text-2xl my-5'>
          Explore My Popular <span className="text-primary">Projects</span>
        </h4>
      </section>
    </React.Fragment>
  );
}
