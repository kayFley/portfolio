"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const TabData = [
    {
        title: "Languages",
        id: "languages",
        content: (
            <ul className="list-disc pl-2">
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Python</li>
                <li>SQL</li>
            </ul>
        ),
    },
    {
        title: "Frontend",
        id: "frontend",
        content: (
            <ul className="list-disc pl-2">
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
            <ul className="list-disc pl-2">
                <li>Express</li>
                <li>NestJS</li>
                <li>Django</li>
                <li>JWT</li>
                <li>bcrypt</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
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
        <section className="text-white" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src={''} width={500} height={500} />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                        <h2 className="text-4xl font-semibold text-white mb-4">
                            About Me
                        </h2>
                        <p className="text-base lg:text-lg text-[#adb7be]">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Libero perferendis, illo cupiditate, labore
                            reiciendis doloremque adipisci iure necessitatibus
                            quisquam eligendi aliquid et delectus repellat
                            excepturi corporis tempora rerum aspernatur!
                            Veritatis?
                        </p>
                        <div className="flex flex-row justify-start mt-8">
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
                        <div className="mt-8">
                            {TabData.find((t) => t.id === tab).content}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;