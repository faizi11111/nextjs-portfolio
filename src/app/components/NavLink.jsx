"use client";
import Link from "next/link"
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

export const Navlink = ({href, title}) => {
  const { theme } = useTheme();
  
  const handleClick = (e) => {
    e.preventDefault();
    
    // Get the target element
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Calculate the offset (navbar height + some padding)
      const navbarHeight = 80; // Approximate navbar height
      const offset = navbarHeight + 20; // Extra padding
      
      // Get the target position
      const targetPosition = targetElement.offsetTop - offset;
      
      // Smooth scroll to the target
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative"
    >
      <Link
        className="nav-link block py-2 relative"
        href={href}
        onClick={handleClick}
      >
        {title}
        <motion.span 
          className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-red-300"
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.2 }}
        />
      </Link>
    </motion.div>
  );
};
