"use client";
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
    return (
        <section className="lg:py-16">
            <div className="grid grid-cols-1">
                <h1 className=" text-slate-100 mb-4 text-2xl sm:text-2xl md:text-2xl lg:text-6xl lg:leading-normal font-semibold">
                    <br></br>
                    <TypeAnimation
                        sequence={[
                            "Frontend Developer ",
                            3000,
                            "Backend Developer ",
                            3000,
                            "Fullstack Developer ",
                            3000,
                        ]}
                        speed={50}
                        repeat={0}
                        deletionSpeed={90}
                    />
                </h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className=" text-slate-400 text-lg mb-6 lg:pr-96 sm:text-lg md:text-xs lg:text-xl xl:text-xl"
                >
                    Hi, my name is kayFley and I am a fullstack developer. I
                    specialize in building high quality web applications using
                    various technologies and programming languages.
                </motion.p>
            </div>
        </section>
    );
};

export default Banner;
