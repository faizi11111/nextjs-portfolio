"use client";
import { useState } from "react";

export const ContactSection = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("faizanfarooq993@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 text-white">
      <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>
      <div className="max-w-3xl mx-auto bg-slate-900 p-8 rounded-xl shadow-lg">
        <div className="text-center mb-6">
          <p className="text-xl mb-4">Feel free to reach out to me for collaboration or opportunities</p>
          <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-center md:space-y-0 md:space-x-4">
            <a
              href="mailto:faizanfarooq993@gmail.com"
              className="py-3 px-6 bg-gradient-to-r from-blue-500 to-red-400 rounded-full text-black font-medium"
            >
              Send Email
            </a>
            <button
              onClick={copyEmail}
              className="py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-500 rounded-full text-white font-medium"
            >
              {emailCopied ? "Email Copied!" : "Copy Email Address"}
            </button>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4 text-center">Connect With Me</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://linkedin.com/in/faizan-farooq" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <svg 
                className="w-8 h-8" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://github.com/faizanfarooq" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
              <svg 
                className="w-8 h-8" 
                fill="currentColor" 
                viewBox="0 0 24 24" 
                aria-hidden="true"
              >
                <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span className="sr-only">GitHub</span>
            </a>
            <a href="tel:+923096296233" className="hover:text-green-400 transition-colors">
              <svg 
                className="w-8 h-8" 
                fill="currentColor" 
                viewBox="0 0 24 24" 
                aria-hidden="true"
              >
                <path d="M21.384 17.752l-2.384-2.384c-.624-.624-1.736-.624-2.36 0l-1.248 1.248c-.184-.104-.4-.232-.648-.392-.968-.616-2.288-1.456-3.688-2.856s-2.24-2.72-2.856-3.688c-.16-.248-.288-.464-.392-.648l1.248-1.248.84-.84c.624-.624.624-1.736 0-2.36l-2.384-2.384c-.624-.624-1.736-.624-2.36 0l-1.448 1.448c-.44.44-.68 1.04-.68 1.664 0 1.696.608 4.088 3.036 6.992 2.904 3.488 5.928 4 7.496 4 .488 0 .84-.048 1.048-.08.624-.08 1.152-.408 1.544-.8l1.448-1.448c.624-.624.624-1.736 0-2.36z" />
              </svg>
              <span className="sr-only">Phone</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}; 