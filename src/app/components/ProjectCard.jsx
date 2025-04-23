"use client";
import Link from "next/link";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

export const ProjectCard = ({ title, imageUrl, description, codeLink, demoLink }) => {
  return (
    <div className="card mb-4">
      <div
        style={{ background: `url(${imageUrl})`, backgroundSize: "cover" }}
        className="h-52 md:h-72 rounded-t-xl relative group"
      >
        {" "}
        <div className="overlay absolute top-0 left-0 w-full h-full bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 justify-center items-center bg-card">
          <Link
            href={codeLink || "#"}
            className="icon-button mr-4"
          >
            <CodeBracketIcon className="h-8 w-8" />
          </Link>
          <Link
            href={demoLink || "#"}
            className="icon-button"
          >
            <EyeIcon className="h-8 w-8" />
          </Link>
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};
