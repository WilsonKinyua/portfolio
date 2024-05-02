"use client"
import AOS from 'aos';
import { Input } from "@/components/ui/input"
import SocialLinks from "@/components/social-links";
import { Button } from "@/components/ui/button";
import { ChevronRight, CircleCheck, Send } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Skills from '@/components/skills';
import Services from '@/components/services';
import Projects from '@/components/projects';
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast, useToast } from "@/components/ui/use-toast"

var ReactRotatingText = require('react-rotating-text');

export default function Home() {
  const [formState, setFormState] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    subject: '',
    message: '',
  });
  const [error, setError] = useState({
    fullName: false,
    emailAddress: false,
    message: false,
  });
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
      <section className="my-20">
        <div data-aos="fade-up">
          <p className="text-sm uppercase font-semibold tracking-wide text-center">Latest Works</p>
          <h4 className='text-center capitalize lg:text-4xl text-2xl my-5'>
            Explore My Popular <span className="text-primary">Projects</span>
          </h4>
        </div>
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
      <section
      // data-aos="fade-up"
      >
        <div
          className='grid lg:grid-cols-2 grid-cols-1 gap-20 my-20'
        >
          <div>
            <p className="text-sm uppercase font-semibold tracking-wide">
              Get In Touch
            </p>
            <h4 className='lg:text-4xl text-2xl my-5'>
              Let's Talk For your <span className="text-primary">Next Project(s)</span>
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
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!formState.fullName) {
                  setError({ ...error, fullName: true });
                  toast({
                    title: "Error",
                    description: "Please fill in your full name",
                    variant: "destructive",
                  });
                  return false;
                } else if (!formState.emailAddress) {
                  setError({ ...error, emailAddress: true });
                  toast({
                    title: "Error",
                    description: "Please fill in your email address",
                    variant: "destructive",
                  });
                  return false;
                } else if (!formState.message) {
                  setError({ ...error, message: true });
                  toast({
                    title: "Error",
                    description: "Please fill in your message",
                    variant: "destructive",
                  });
                  return false;
                }

                toast({
                  title: "Message Sent",
                  description: "Thank you for reaching out to me. I will get back to you as soon as possible.",
                })
              }}
            >
              <div className="grid lg:grid-cols-2 gap-5">
                <div className='space-y-4'>
                  <Label htmlFor="fullName" className='font-semibold'>Full Name{" "}<span className="text-primary">*</span></Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Tery Humfy D. Tawez"
                    onChange={(e) => {
                      setFormState({ ...formState, fullName: e.target.value });
                    }}
                    className={error.fullName ? 'border-primary' : ''}
                  />
                </div>
                <div className='space-y-4'>
                  <Label htmlFor="emailAddress" className='font-semibold'>Email Address{" "}<span className="text-primary">*</span></Label>
                  <Input
                    id="emailAddress"
                    type="email"
                    placeholder="tery@humfy.com"
                    onChange={(e) => {
                      setFormState({ ...formState, emailAddress: e.target.value });
                    }}
                    className={error.emailAddress ? 'border-primary' : ''}
                  />
                </div>
                <div className='space-y-4'>
                  <Label htmlFor="phoneNumber" className='font-semibold'>Phone Number</Label>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    placeholder="+254 712 345 678"
                    onChange={(e) => {
                      setFormState({ ...formState, phoneNumber: e.target.value });
                    }}
                  />
                </div>
                <div className='space-y-4'>
                  <Label htmlFor="subject" className='font-semibold'>Subject</Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="I have a project for you"
                    onChange={(e) => {
                      setFormState({ ...formState, subject: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div className='space-y-4 mt-4'>
                <Label htmlFor="message" className='font-semibold'>Message{" "}<span className="text-primary">*</span></Label>
                <Textarea
                  id="message"
                  placeholder="Write your message..."
                  onChange={(e) => {
                    setFormState({ ...formState, message: e.target.value });
                  }}
                  className={error.message ? 'border-primary' : ''}
                />
              </div>
              <Button
                variant={"default"}
                className="lg:w-auto w-full mt-10"
                type='submit'
              >
                Send Message <Send size={18} className="ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
