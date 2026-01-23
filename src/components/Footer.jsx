import React from "react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FacebookIcon, InstagramIcon } from "lucide-react";

const Footer = ({
  personalInfo,
  currentPage,
  setCurrentPage,
  renderNavigation,
  renderCurrentPage,
}) => {
  return (
    <div className="min-h-screen dark:bg-gray-900 transition-colors duration-300">
      {renderNavigation()}
      {renderCurrentPage()}

      {/* Main Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-white border-t border-gray-700 dark:border-gray-600 py-10 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            {/* Left: Brand / About */}
            <div className="md:w-1/3">
              <h3 className="text-2xl font-bold mb-2">{personalInfo.name}</h3>
              <p className="text-gray-300 dark:text-gray-400 mb-3">
                {personalInfo.title_1}
              </p>
              <p className="text-gray-400 text-sm">
                Creating thoughtful products through design and code.
              </p>
            </div>

            {/* Center: Quick Links */}
            <div className="md:w-1/3">
              <h4 className="text-lg font-semibold mb-3 text-center">
                Quick Links
              </h4>
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  { id: "home", label: "Home" },
                  { id: "about", label: "About" },
                  { id: "projects", label: "Projects" },
                  { id: "designs", label: "Designs" },
                  { id: "cv1", label: "Education" },
                  { id: "cv2", label: "Experience" },
                  { id: "contact", label: "Contact" },
                ].map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => setCurrentPage(id)}
                    className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors text-sm px-2 py-1"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Socials & Contact */}
            <div className="md:w-1/3">
              <h4 className="text-lg font-semibold mb-3 text-center">
                Connect
              </h4>
              <div className="flex items-center gap-3 mb-4 justify-center">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <Github size={20} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={personalInfo.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <FacebookIcon size={20} />
                </a>
                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <InstagramIcon size={20} />
                </a>
                <a
                  href={personalInfo.whatsApp}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <FaWhatsapp size={20} />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-gray-300 hover:text-white"
                >
                  <Mail size={20} />
                </a>
              </div>
              <p className="text-gray-400 text-sm flex justify-center">
                <MapPin size={16} className="inline mr-1" />
                {personalInfo.location}
              </p>
            </div>
          </div>

          {/* Copyright / Bottom */}
          <div className="border-t border-gray-700 dark:border-gray-600 mt-8 pt-6 text-center">
            <p className="text-gray-400 dark:text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} {personalInfo.name}. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
