"use client";
import Link from "next/link"
import { useTheme } from "../context/ThemeContext";

export const Navlink = ({href, title}) => {
  const { theme } = useTheme();
  
  return (
    <Link
      className="nav-link"
      href={href}
    >
      {title}
    </Link>
  );
};
