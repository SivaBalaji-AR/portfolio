import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  return (
<section className="container max-w-6xl w-full mx-auto px-12 py-16 bg-gray-100 rounded-xl shadow-md transition hover:shadow-lg hover:scale-105">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Connect</h2>
      <div className="container mx-auto flex flex-col items-center space-y-4">
              {/* Social Icons */}
              <div className="flex space-x-6">
                <a
                  href="https://github.com/SivaBalaji-AR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-black text-2xl transition"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/siva-balaji-a-r-582628255"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-black text-2xl transition"
                >
                  <FaLinkedin />
                </a>
              </div>
      
              {/* Footer Text */}
              <p className="text-gray-400 text-sm text-center">
                © {new Date().getFullYear()} Siva Balaji . All Rights Reserved.
              </p>
            </div>
    </section>
  );
};

export default ContactSection;
