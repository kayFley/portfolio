"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const TabData = [
    {
        title: "Languages",
        id: "languages",
        content: (
            <ul className="list-disc pl-6 columns-1">
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Python</li>
            </ul>
        ),
    },
    {
        title: "Frontend",
        id: "frontend",
        content: (
            <ul className="list-disc pl-6 columns-2">
                <li>React</li>
                <li>React Native</li>
                <li>Redux</li>
                <li>NextJS</li>
                <li>HTML5 CSS3</li>
                <li>Tailwind</li>
                <li>Framer motion</li>
            </ul>
        ),
    },
    {
        title: "Backend",
        id: "backend",
        content: (
            <ul className="list-disc pl-6 columns-2">
                <li>Express</li>
                <li>NestJS</li>
                <li>JWT</li>
                <li>bcrypt</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>Django</li>
                <li>Flask</li>
            </ul>
        ),
    },
];

const About = () => {
    const [tab, setTab] = useState("languages");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 xl:gap-16 sm:py-16">
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <div className="flex flex-row justify-start text-xl sm:text-2xl md:text-sm lg:text-3xl font-semibold text-slate-100 mb-4">
                        <TabButton
                            selectTab={() => handleTabChange("languages")}
                            active={tab === "languages"}
                        >
                            {" "}
                            Languages{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("frontend")}
                            active={tab === "frontend"}
                        >
                            {" "}
                            Frontend{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("backend")}
                            active={tab === "backend"}
                        >
                            {" "}
                            Backend{" "}
                        </TabButton>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mt-1 text-lg mb-6 sm:text-lg md:text-xs lg:text-xl xl:text-xl text-slate-400"
                    >
                        {TabData.find((t) => t.id === tab).content}
                    </motion.div>
                </div>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-center lg:text-left text-2xl sm:text-2xl md:text-2xl lg:text-4xl font-semibold text-slate-100 mb-4">
                        About Me
                    </h2>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-lg mb-6 sm:text-lg md:text-xs lg:text-xl xl:text-xl text-slate-400"
                    >
                        <p>
                            I am proficient in a wide range of technologies for
                            web application development, including server-side
                            and client-side frameworks, databases, and
                            programming languages. This knowledge of web
                            application development and data management enables
                            the creation of scalable and efficient applications.
                        </p>
                        <br></br>
                        <p>
                            I have experience in creating user-friendly and
                            intuitive user interfaces, as well as optimizing the
                            performance of web applications.
                        </p>
                        <br></br>
                        <p>
                            I have experience in developing scalable and secure
                            server applications as well as working with
                            databases.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
