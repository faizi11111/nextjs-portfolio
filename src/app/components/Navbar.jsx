"use client";
import Link from "next/link";
import { Navlink } from "./NavLink";
import { useState } from "react";
import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";
import XmarkIcon from "@heroicons/react/24/outline/XMarkIcon";
import { MenuOverlay } from "./MenuOverlay";
import { ThemeToggle } from "./ThemeToggle";
import { motion } from "framer-motion";

const navLinks = [
  { title: "Home", href: "#hero" },
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-20 bg-card bg-opacity-90 backdrop-blur-3xl"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 md:px-8 py-3">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <Link className="text-4xl font-semibold gradient-text" href={"/"}>
            Faizan F.
          </Link>
        </motion.div>
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <motion.button
            onClick={() => setOpen(!open)}
            className="p-2 flex items-center justify-center transition-colors cursor-pointer text-muted-foreground hover:text-foreground"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {open ? <XmarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
          </motion.button>
        </div>
        <div className="hidden md:flex md:items-center md:w-auto gap-4">
          <motion.ul 
            className="flex md:flex-row p-4 space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.1, delayChildren: 0.2 }}
          >
            {navLinks.map((link, index) => {
              return (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -3 }}
                >
                  <Navlink href={link.href} title={link.title} />
                </motion.li>
              );
            })}
          </motion.ul>
          <ThemeToggle />
        </div>
      </div>
      {open && (
        <MenuOverlay links={navLinks} setOpen={setOpen} />
      )}
    </motion.nav>
  );
};

export default Navbar;
