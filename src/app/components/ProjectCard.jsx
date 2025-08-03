"use client";
import Link from "next/link";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export const ProjectCard = ({ title, imageUrl, description, codeLink, demoLink }) => {
  return (
    <motion.div 
      className="card mb-4"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div
        style={{ background: `url(${imageUrl})`, backgroundSize: "cover" }}
        className="h-52 md:h-72 rounded-t-xl relative group"
      >
        <motion.div 
          className="overlay absolute top-0 left-0 w-full h-full bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-60 transition-all duration-500 justify-center items-center bg-black"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link
              href={codeLink || "#"}
              className="icon-button mr-4"
            >
              <CodeBracketIcon className="h-8 w-8" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link
              href={demoLink || "#"}
              className="icon-button"
            >
              <EyeIcon className="h-8 w-8" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <motion.div 
        className="card-body"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
      >
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </motion.div>
    </motion.div>
  );
};
