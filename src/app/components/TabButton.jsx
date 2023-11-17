"use client";
import React from "react";
import { motion } from "framer-motion";

const variants = {
    default: { width: 0 },
    active: { width: "calc(93% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active ? "text-slate-100" : "text-slate-500";

    return (
        <button onClick={selectTab}>
            <p
                className={`mr-6 font-semibold hover:text-slate-100 ${buttonClasses}`}
            >
                {children}
            </p>
            <motion.div
                animate={active ? "active" : "default"}
                variants={variants}
                className="h-0.5 bg-slate-100 mt-1"
            ></motion.div>
        </button>
    );
};

export default TabButton;
