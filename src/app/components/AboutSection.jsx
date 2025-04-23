"use client";
import Image from "next/image";
import { useState, useTransition } from "react";
import { TabButton } from "./TabButton";

const tabData = [
  {
    title: "Skills",
    id: "Skills",
    content: (
      <ul className="pl-2 pt-4 text-sm">
        <li>
          <strong>Programming:</strong> JavaScript, TypeScript, Python, C++, Java
        </li>
        <li>
          <strong>Frontend:</strong> React, Next.js, React Native, Redux, TailwindCSS, MaterialUI
        </li>
        <li>
          <strong>Backend:</strong> Node.js, Express, GraphQL, AWS, Serverless
        </li>
        <li>
          <strong>Databases:</strong> PostgreSQL, MySQL, MongoDB, DynamoDB, Vector DBs
        </li>
        <li>
          <strong>Third-Party APIs:</strong> Facebook Graph API, Stripe, Shopify, Metamask, OpenAI
        </li>
        <li>
          <strong>Tools:</strong> Docker, GitHub Actions, Jest, Strapi, LangChain, LlamaIndex
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "Education",
    content: (
      <ul className="pl-2 pt-4 text-sm">
        <li>
          <strong>Bachelor of Computer Science</strong> - FAST NUCES
        </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "Experience",
    content: (
      <ul className="pl-2 pt-4 text-sm">
        <li>
          <h3 className="font-bold text-xl mt-2">
            Software Engineer at Ripeseed (2021 - Present)
          </h3>
          <ul className="list-disc ml-5">
            <li>
              Developed a full-stack security application for Bluewave Technology, leveraging 
              React, PostgreSQL, and AWS.
            </li>
            <li>
              Built scalable admin dashboards using React, Reactstrap, and Apollo Client.
            </li>
            <li>
              Architected backend systems using PostgreSQL, Hasura, and AWS Lambda, reducing 
              query latency by 30%.
            </li>
            <li>
              Integrated AWS Rekognition for real-time trespasser identification.
            </li>
            <li>
              Designed React Native mobile applications and optimized med-tech applications.
            </li>
          </ul>
        </li>
        <li>
          <h3 className="font-bold text-xl mt-2">Software Engineer at Foxtrax.io (2024)</h3>
          <ul className="list-disc ml-5">
            <li>
              Developed marketing applications with improved performance and scalability.
            </li>
            <li>
              Optimized PostgreSQL queries with TimescaleDB, reducing latency by 50%.
            </li>
            <li>
              Built GraphQL servers and integrated Facebook Marketing and Graph API.
            </li>
            <li>
              Designed responsive admin dashboards using React, XState, and Styled Components.
            </li>
          </ul>
        </li>
      </ul>
    ),
  },
];
export const AboutSection = () => {
  const [tab, setTab] = useState("Skills");
  const [isPending, startTransition] = useTransition();

  const handleChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section id="about">
      <div className="md:grid grid-cols-2 gap-8 items-center px-4 py-8 xl:gap-16 sm:py-16">
        <Image src="/about-me.png" height={500} width={500} alt="About Faizan Farooq" />
        <div className="mt-4 md:mt-0 flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-base lg:text-lg">
            Full-stack Software Engineer with expertise in React, Node.js, AWS, and GraphQL. 
            Skilled in building scalable web and mobile applications, optimizing databases, 
            and integrating third-party APIs. Passionate about writing clean code and mentoring developers.
            I've worked on security systems, healthcare applications, and marketing platforms,
            delivering high-performance solutions that meet client needs.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              active={tab === "Skills"}
              children={"Skills"}
              selectTab={() => handleChange("Skills")}
            />
            <TabButton
              active={tab === "Education"}
              children={"Education"}
              selectTab={() => handleChange("Education")}
            />
            <TabButton
              active={tab === "Experience"}
              children={"Experience"}
              selectTab={() => handleChange("Experience")}
            />
          </div>
          <div className="text-muted-foreground">
            {tabData.find((data) => data.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};
