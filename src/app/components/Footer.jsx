"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useTheme } from "../context/ThemeContext";

// Footer section data
const footerData = [
  {
    id: "quickLinks",
    title: "QUICK LINKS",
    items: [
      { name: "Home", href: "#hero" },
      { name: "About", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "Contact", href: "#contact" },
    ],
  },
  {
    id: "contactInfo",
    title: "CONTACT INFORMATION",
    items: [
      { name: "+92 309 6296233", href: "tel:+923096296233", icon: "📱" },
      { name: "faizanfarooq993@gmail.com", href: "mailto:faizanfarooq993@gmail.com", icon: "✉️" },
      { name: "Pakistan", href: null, icon: "🌐" },
    ],
  },
];

// Social media data
const socialLinks = [
  { 
    name: "LinkedIn", 
    href: "https://linkedin.com/in/faizan-farooq", 
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
      </svg>
    )
  },
  { 
    name: "GitHub", 
    href: "https://github.com/faizanfarooq", 
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    )
  }
];

// Accordion component for mobile view
const AccordionSection = ({ section, isOpen, toggleAccordion }) => {
  return (
    <div className="border-b border-theme py-4 md:border-none">
      <div 
        className="flex justify-between items-center cursor-pointer md:cursor-default"
        onClick={toggleAccordion}
      >
        <h3 className="text-xl font-bold">{section.title}</h3>
        <button className="md:hidden transition-transform duration-300 ease-in-out transform">
          {isOpen ? (
            <ChevronUpIcon className="h-5 w-5" />
          ) : (
            <ChevronDownIcon className="h-5 w-5" />
          )}
        </button>
      </div>
      
      {/* Mobile Accordion Content (Hidden by default) */}
      <div 
        className="overflow-hidden transition-all duration-300 ease-in-out md:hidden"
        style={{
          maxHeight: isOpen ? '500px' : '0',
          opacity: isOpen ? 1 : 0,
          marginTop: isOpen ? '1rem' : '0',
        }}
      >
        <ul className="space-y-4">
          {section.items.map((item, index) => (
            <li key={index} className={item.icon ? "flex items-center" : ""}>
              {item.icon && <span className="mr-2">{item.icon}</span>}
              {item.href ? (
                <Link 
                  href={item.href} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <span className="text-muted-foreground">{item.name}</span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Content (Always Visible) */}
      <div className="hidden md:block mt-6">
        <ul className="space-y-4">
          {section.items.map((item, index) => (
            <li key={index} className={item.icon ? "flex items-center" : ""}>
              {item.icon && <span className="mr-2">{item.icon}</span>}
              {item.href ? (
                <Link 
                  href={item.href} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <span className="text-muted-foreground">{item.name}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const Footer = () => {
  const [openSections, setOpenSections] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const { theme } = useTheme();

  // Check for mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    checkMobile();

    // Add event listener for resize
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const toggleSection = (sectionId) => {
    if (isMobile) {
      setOpenSections(prev => ({
        ...prev,
        [sectionId]: !prev[sectionId]
      }));
    }
  };

  return (
    <footer id="contact" className="py-16 border-t border-theme bg-card">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description Section */}
          <div className="mb-8 md:mb-0 md:block hidden">
            <Link href="/" className="text-3xl font-semibold gradient-text">
              Faizan Farooq
            </Link>
            <p className="mt-4 text-muted-foreground text-sm max-w-md">
              Full-stack Software Engineer with expertise in React, Node.js, AWS, and GraphQL. 
              Passionate about building high-performance applications that solve real problems.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Dynamic Sections */}
          {footerData.map((section) => (
            <AccordionSection
              key={section.id}
              section={section}
              isOpen={openSections[section.id] || false}
              toggleAccordion={() => toggleSection(section.id)}
            />
          ))}
        </div>
        
        {/* Copyright Section */}
        <div className="mt-16 pt-8 border-t border-theme flex flex-col md:flex-row md:justify-between text-muted text-sm">
          <p>© {new Date().getFullYear()} Faizan Farooq. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <span>|</span>
            <Link href="#" className="hover:text-primary">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}; 