"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "Blog backend",
        description:
            "Express, Express-validator; MongoDB/Mongoose; JWT; BCrypt; Multer",
        image: "/projectImgs/project-img1.png",
        gitUrl: "https://github.com/kayFley/backend-nodejs-kayFley",
        previewUrl: "https://github.com/kayFley/backend-nodejs-kayFley",
    },
    {
        id: 2,
        title: "React Portfolio",
        description: "React-bootstrap; CSS",
        image: "/projectImgs/portfolio-react.png",
        gitUrl: "https://github.com/kayFley/portfolio-react-kayFley",
        previewUrl: "https://kayfley.github.io/portfolio-react-kayFley/",
    },
    {
        id: 3,
        title: "React Portfolio Website",
        description: "Project 3 description",
        image: "/images/projects/3.png",
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 4,
        title: "React Portfolio Website",
        description: "Project 4 description",
        image: "/images/projects/4.png",
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 5,
        title: "React Portfolio Website",
        description: "Project 5 description",
        image: "/images/projects/5.png",
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 6,
        title: "React Portfolio Website",
        description: "Project 6 description",
        image: "/images/projects/6.png",
        gitUrl: "/",
        previewUrl: "/",
    },
];

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const Projects = projectsData;

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section ref={ref} id="projects">
            <h2 className="text-center text-2xl sm:text-2xl md:text-2xl lg:text-4xl font-semibold text-white mt-16 mb-8 md:mb-12">
                My Projects
            </h2>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {Projects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.2, delay: index * 0.2 }}
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

export default Projects;
