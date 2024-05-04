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
          <strong>TypeScript</strong>
        </li>
        <li>
          <strong>Node.js</strong>
        </li>
        <li>
          <strong>React.js</strong>
        </li>
        <li>
          <strong>Next.js</strong>
        </li>
        <li>
          <strong>Facebook Graph API</strong>
        </li>
        <li>
          <strong>XState</strong>
        </li>
        <li>
          <strong>Docker</strong>
        </li>
        <li>
          <strong>AWS</strong>
        </li>
        <li>
          <strong>Databases (SQL and NoSQL)</strong>
        </li>
        <li>
          <strong>Jest</strong>
        </li>
        <li>
          <strong>GraphQL</strong>
        </li>
        <li>
          <strong>REST APIs</strong>
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
          <strong>A Levels</strong>
        </li>
        <li>
          <strong>Bachelor's in Computer Science from FAST-NUCES</strong>
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
              Develop and maintain <strong>scalable software solutions</strong>{" "}
              catering to dynamic client needs.
            </li>
            <li>
              Implement features and enhancements that{" "}
              <strong>improve user engagement</strong> and system efficiency.
            </li>
            <li>
              Collaborate with cross-functional teams to{" "}
              <strong>define, design, and ship new features</strong>.
            </li>
            <li>
              Utilize modern technologies and practices to ensure{" "}
              <strong>high-quality software performance</strong>.
            </li>
          </ul>
        </li>
        <li>
          <h3 className="font-bold text-xl mt-2">Teaching Assistant (2021)</h3>
          <ul className="list-disc ml-5">
            <li>
              Assisted in the preparation and delivery of lectures and
              coursework for{" "}
              <strong>undergraduate computer science courses</strong>.
            </li>
            <li>
              Provided tutoring and support to students, enhancing their
              understanding of <strong>complex technical concepts</strong>.
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
    <section className="text-white">
      <div className="md:grid grid-cols-2 gap-8 items-center px-4 py-8 xl:gap-16 sm:py-16">
        <Image src="/about-me.png" height={500} width={500} alt="" />
        <div className="mt-4 md:mt-0 flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis impedit eveniet non omnis! Cupiditate, in numquam unde
            distinctio dolor officia veniam atque quo corrupti? Sapiente
            molestias ut sequi nemo ipsam!
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
          <div>{tabData.find((data) => data.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};
