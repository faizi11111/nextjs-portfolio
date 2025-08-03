"use client";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export const AnimatedSection = ({ 
  children, 
  id, 
  className = "",
  animation = "fadeInUp" // Options: fadeInUp, fadeInLeft, fadeInRight, zoomIn, scale
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Animation variants
  const variants = {
    fadeInUp: {
      hidden: { opacity: 0, y: 75 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    },
    fadeInLeft: {
      hidden: { opacity: 0, x: -75 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    },
    fadeInRight: {
      hidden: { opacity: 0, x: 75 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    },
    zoomIn: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.5 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] } }
    }
  };

  const selectedVariant = variants[animation];

  return (
    <section id={id} ref={sectionRef} className={className}>
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={selectedVariant}
      >
        {children}
      </motion.div>
    </section>
  );
}; 