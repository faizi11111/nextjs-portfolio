"use client";
import Link from "next/link";
import { Navlink } from "./NavLink";
import { useState } from "react";
import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";
import XmarkIcon from "@heroicons/react/24/outline/XMarkIcon";
import { MenuOverlay } from "./MenuOverlay";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Projects", href: "/projects" },
  { title: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-20 bg-black bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-8">
        <Link className="text-5xl font-semibold text-white" href={"/"}>
          LOGO
        </Link>
        <div className="block md:hidden">
          {open ? (
            <button
              onClick={() => setOpen(false)}
              className="flex items-center text-slate-300 hover:text-white border border-slate-300 hover:border-white px-3 py-2 rounded-lg"
            >
              <XmarkIcon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setOpen(true)}
              className="flex items-center text-slate-300 hover:text-white border border-slate-300 hover:border-white px-3 py-2 rounded-lg"
            >
              <Bars3Icon className="h-5 w-5 " />
            </button>
          )}
        </div>
        <div className="hidden md:block md:w-auto">
          <ul className="flex md:flex-row p-4 space-x-4">
            {navLinks.map((link) => {
              return (
                <li>
                  <Navlink href={link.href} title={link.title} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {open ? <MenuOverlay links={navLinks} /> : <></>}
    </nav>
  );
};

export default Navbar;
