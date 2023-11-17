import React from "react";
import { motion } from "framer-motion";

const variants = {
    default: { width: 0 },
    active: { width: "calc(93% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active ? "text-white" : "text-[#676d71]";

    return (
        <button onClick={selectTab}>
            <p
                className={`mr-6 font-semibold hover:text-white ${buttonClasses}`}
            >
                {children}
            </p>
            <motion.div
                animate={active ? "active" : "default"}
                variants={variants}
                className="h-0.5 bg-white mt-1"
            ></motion.div>
        </button>
    );
};

export default TabButton;
