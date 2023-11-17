"use client";
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
    return (
        <section className="lg:py-16">
            <div className="grid grid-cols-1">
                <h1 className="text-white mb-4 text-2xl sm:text-2xl md:text-2xl lg:text-6xl lg:leading-normal font-semibold">
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
                    className="text-[#adb7be] text-lg mb-6 sm:text-lg md:text-xs lg:text-xl xl:text-xl"
                >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sit dolor, laboriosam voluptate dolore corporis vel
                    excepturi explicabo atque in impedit! Perspiciatis cum quae
                    neque! Facilis qui corrupti autem recusandae esse.
                </motion.p>
            </div>
        </section>
    );
};

export default Banner;
