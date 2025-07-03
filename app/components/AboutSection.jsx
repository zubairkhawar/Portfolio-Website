"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="grid  grid-cols-1 md:grid-cols-3 gap-2 list-disc pl-4">
        <li>Python</li>
        <li>OpenAI</li>
        <li>LangChain</li>
        <li>LangGraph</li>
        <li>TensorFlow</li>
        <li>Django REST</li>
        <li>FastAPI</li>
        <li>Node.js</li>
        <li>Next.js</li>
        <li>TypeScript</li>
        <li>Tailwind</li>
        <li>Supabase</li>
        <li>AWS</li>
        <li>PostgreSQL</li>
        <li>Java</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Master's in Data Science and Analytics with concentration in Artificial Intelligence, 2027</li>
        <li>Old Dominion University, Virginia, United States</li>
        <br></br>
        <li>Bachelor of Computer Science, 2025</li>
        <li>FAST National University of Computer & Emerging Sciences, Pakistan </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Meta Front-End Developer Professional Certificate</li>
        <li>Google Data Analytics Professional Certificate</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/about-image.png" alt='about-img' width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a Python AI Developer with 2 years of experience building intelligent systems using Python, Django, and AI/ML frameworks (TensorFlow, PyTorch), specializing in NLP applications with LangChain and LangGraph for agent-based workflows. I develop both code-based solutions (custom AI models, API integrations) and no-code AI implementations (LLM orchestration platforms, AI workflow automation). Leveraging my full-stack background (Next, Node.js, TypeScript), I deploy scalable AI solutions from model development to production-ready web integration (FastAPI, Django REST). My expertise extends to cloud deployment (AWS/Supabase) and creating hybrid solutions that combine traditional programming with cutting-edge AI tools, always focused on delivering practical, maintainable systems that solve real-world problems.
          </p>
          <div className="flex flex-row justify-start mt-8 space-x-4">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
