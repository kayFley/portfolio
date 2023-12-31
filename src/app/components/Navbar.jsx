"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    },
    {
        title: "View site code",
        path: "https://github.com/kayFley/portfolio",
    },
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-[#121212] backdrop-blur shadow-xl shadow-[#121212] bg-blend-overlay bg-opacity-80 lg:bg-opacity-75">
            <div className="flex container lg:py-2 flex-wrap items-center justify-between mx-auto px-4 py-1">
                <Link
                    href={"/"}
                    className="text-2xl md:text-2xl text-slate-100 font-mono"
                >
                    kayFley
                </Link>
                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                        <button
                            onClick={() => setNavbarOpen(true)}
                            className="flex items-center px-3 py-2 text-slate-400 hover:text-slate-100"
                        >
                            <Bars3Icon className="h-8 w-8" />
                        </button>
                    ) : (
                        <button
                            onClick={() => setNavbarOpen(false)}
                            className="flex items-center px-3 py-2 text-slate-400 hover:text-slate-100"
                        >
                            <XMarkIcon className="h-8 w-8" />
                        </button>
                    )}
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    );
};

export default Navbar;
