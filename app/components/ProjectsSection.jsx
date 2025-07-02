"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Sentivel: Simplify your care home journey",
    description: "Django Next.js PostgreSQL LLM Application",
    image: "/projects/Senti.png",
    tag: ["All", "Python AI"],
    gitUrl: "https://sentivel.com/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "PakistanLaw AI",
    description: "Next.js LangChain Application",
    image: "/projects/PL.png",
    tag: ["All", "Python AI"],
    gitUrl: "https://www.pakistanlaw.ai/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "IR Course Creator",
    description: "Next.js LangChain Application",
    image: "/projects/IRCC.png",
    tag: ["All", "Python AI"],
    gitUrl: "https://course-factory-frontend.vercel.app/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Natural Language Processing Langchain PDF Application",
    description: "Python Next.js Django Application",
    image: "/projects/PDFAI.png",
    tag: ["All", "Python AI"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Haramain Abrasives",
    description: "React Industrial Website",
    image: "/projects/HA.png",
    tag: ["All", "Web"],
    gitUrl: "https://haramainabrasives.com/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Industrial Website",
    description: "React Industry Website",
    image: "/projects/SI.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.naturalsaltlamps.com/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "AI Image Recognition System",
    description: "Python Deep Learning Application",
    image: "/projects/IRS.png",
    tag: ["All", "Python AI"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Machine Learning Data Analysis",
    description: "Python ML Analytics Tool",
    image: "/projects/ML.png",
    tag: ["All", "Python AI"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Little Lemon Restaurant App",
    description: "React JS Application",
    image: "/projects/LL.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },

  {
    id: 10,
    title: "Furniture Haven",
    description: "React MongoDB Furniture App",
    image: "/projects/FH.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  
  {
    id: 11,
    title: "Food Ordering Application",
    description: "React Food Application",
    image: "/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 12,
    title: "Chatify App",
    description: "Java Android App",
    image: "/projects/Chatify.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Python AI"
          isSelected={tag === "Python AI"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
