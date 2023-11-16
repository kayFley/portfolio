"use client";
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

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
                <motion.div
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{ duration: 0.5 }}
                    className="place-self-center text-left justify-self-start"
                >
                    <p className="text-[#adb7be] text-lg mb-6 sm:text-lg md:text-xs lg:text-xl xl:text-xl">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Sit dolor, laboriosam voluptate dolore corporis
                        vel excepturi explicabo atque in impedit! Perspiciatis
                        cum quae neque! Facilis qui corrupti autem recusandae
                        esse.
                    </p>
                    <div className="text-center lg:text-left xl:text-left">
                        <Link
                            href="/"
                            className="p-1 inline-block w-full sm:w-fit rounded-full text-[#adb7be] hover:text-white mt-3"
                        >
                            <u>Source code</u>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Banner;
