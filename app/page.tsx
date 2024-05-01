"use client"
import SocialLinks from "@/components/social-links";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

var ReactRotatingText = require('react-rotating-text');

export default function Home() {
  return (
    <React.Fragment>
      <section>
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center">
          <div className="lg:order-1 order-2">
            <p className="text-sm uppercase font-semibold tracking-wide">
              HELLO, I'M
            </p>
            <h1 className="lg:text-5xl text-2xl font-black tracking-[0.1rem] lg:my-5 my-2">
              <span className="text-primary">Wilson</span> Kinyua
            </h1>
            <p className="lg:text-4xl text-xl text-primary font-semibold tracking-wide">
              <ReactRotatingText items={['Software Engineer', 'Web developer', 'Frontend Developer', 'Backend Developer', 'Mobile apps Developer', 'UI/UX designer', 'Tech enthusiast']} />
            </p>
            <p className="lg:my-10 my-5">
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
            className="w-full lg:h-[85vh] h-[60vh] object-contain lg:order-2 order-1"
          />
        </div>
      </section>
    </React.Fragment>
  );
}
