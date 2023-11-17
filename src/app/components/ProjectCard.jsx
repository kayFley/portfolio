import React from "react";
import {
    CodeBracketIcon,
    LinkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
    return (
        <div>
            <div
                className="h-52 md:h-72 rounded-xl relative group"
                style={{
                    background: `url(${imgUrl})`,
                    backgroundSize: "cover",
                }}
            >
                <div className="overlay items-center flex justify-center absolute top-0 left-0 w-full h-full rounded-xl backdrop-blur-none bg-slate-800 bg-opacity-0 invisible group-hover:visible group-hover:bg-opacity-70 group-hover:backdrop-blur-sm transition-all duration-250 ">
                    <Link
                        href={gitUrl}
                        className="h-14 w-14 mr-2 border-2 relative rounded-full border-slate-500 hover:border-slate-200 group/link opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-250"
                    >
                        <CodeBracketIcon className="h-10 w-10 text-slate-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-slate-100" />
                    </Link>
                    <Link
                        href={previewUrl}
                        className="h-14 w-14 border-2 relative rounded-full border-slate-500 hover:border-slate-200 group/link opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-250"
                    >
                        <LinkIcon className="h-10 w-10 text-slate-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-slate-100" />
                    </Link>
                </div>
            </div>
            <div className="text-slate-200 rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
                <h5 className="text-xl font-semibold mb-2">{title}</h5>
                <p className="text-slate-400">{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
