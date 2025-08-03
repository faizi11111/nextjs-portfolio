"use client";
import { Navlink } from "./NavLink";
import { motion, AnimatePresence } from "framer-motion";

export const MenuOverlay = ({ links, setOpen }) => {
  const handleClick = () => {
    setOpen(false);
  };

  return (
    <AnimatePresence>
      <motion.div 
        className="absolute left-0 top-[62px] w-full h-[calc(100vh-62px)] bg-card"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "calc(100vh - 62px)" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <motion.ul 
          className="h-full flex flex-col items-center justify-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, staggerChildren: 0.1, delayChildren: 0.3 }}
        >
          {links.map((link, index) => {
            return (
              <motion.li 
                key={index} 
                onClick={handleClick}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Navlink href={link.href} title={link.title} />
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>
    </AnimatePresence>
  );
};
