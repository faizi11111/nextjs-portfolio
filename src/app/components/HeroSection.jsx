"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section id="hero">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-12 md:col-span-7 place-self-center md:text-left text-center">
          <h1 className="mb-4 text-4xl md:text-6xl font-extrabold">
            <span className="gradient-text">
              Hello, I'm
            </span>
            <br />
            <div>
              <TypeAnimation
                sequence={[
                  "Faizan.",
                  1000,
                  "Full-stack Engineer.",
                  1000,
                  "React Developer.",
                  1000,
                  "AWS Cloud Expert.",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </h1>
          <p className="text-muted-foreground md:text-xl text-lg mb-6">
            Full-stack Software Engineer with expertise in React, Node.js, AWS, and GraphQL. 
            Skilled in building scalable web and mobile applications, optimizing databases, 
            and integrating third-party APIs.
          </p>
          <div>
            <a href="mailto:faizanfarooq993@gmail.com">
              <button className="px-6 py-3 rounded-full w-full md:w-fit mr-4 bg-gradient-to-r from-blue-400 to-red-300 hover:bg-slate-200 text-black">
                Hire Me
              </button>
            </a>
            <button className="p-[1px] rounded-full w-full md:w-fit mr-4 bg-gradient-to-r from-blue-400 to-red-300 hover:bg-slate-800 text-white mt-4">
              <span className="px-6 py-3 rounded-full block bg-card text-card">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 flex justify-center items-center">
          <div className="h-[250px] w-[250px] md:h-[300px] md:w-[300px] rounded-full relative mt-8 md:mt-0 bg-avatar">
            <Image
              src="/avatar.png"
              width={300}
              height={300}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Faizan Farooq"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
