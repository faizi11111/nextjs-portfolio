"use client";
import Link from "next/link";
import { Navlink } from "./NavLink";
import { useState } from "react";
import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";
import XmarkIcon from "@heroicons/react/24/outline/XMarkIcon";
import { MenuOverlay } from "./MenuOverlay";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { title: "Home", href: "#hero" },
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-20 bg-card bg-opacity-90 backdrop-blur-3xl">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 md:px-8 py-3">
        <Link className="text-4xl font-semibold gradient-text" href={"/"}>
          Faizan F.
        </Link>
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          {open ? (
            <button
              onClick={() => setOpen(false)}
              className="p-2 flex items-center justify-center transition-colors cursor-pointer text-muted-foreground hover:text-foreground"
            >
              <XmarkIcon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setOpen(true)}
              className="p-2 flex items-center justify-center transition-colors cursor-pointer text-muted-foreground hover:text-foreground"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="hidden md:flex md:items-center md:w-auto gap-4">
          <ul className="flex md:flex-row p-4 space-x-4">
            {navLinks.map((link, index) => {
              return (
                <li key={index}>
                  <Navlink href={link.href} title={link.title} />
                </li>
              );
            })}
          </ul>
          <ThemeToggle />
        </div>
      </div>
      {open ? <MenuOverlay links={navLinks} setOpen={setOpen} /> : null}
    </nav>
  );
};

export default Navbar;
