import React from "react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const Footer = ({
  personalInfo,
  currentPage,
  setCurrentPage,
  renderNavigation,
  renderCurrentPage,
}) => {
  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: FaFacebookF, href: personalInfo.facebook, label: "Facebook" },
    { icon: FaInstagram, href: personalInfo.instagram, label: "Instagram" },
    { icon: FaWhatsapp, href: `https://wa.me/${personalInfo.whatsApp.replace(/[^0-9]/g, '')}`, label: "WhatsApp" },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 flex flex-col font-sans">
      {renderNavigation()}

      <main className="flex-grow pt-0 relative z-0">
        {/* Page Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {renderCurrentPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Main Footer */}
      <footer className="bg-gray-900 text-white relative overflow-hidden pt-16 pb-8 border-t border-white/5">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand / About */}
            <div className="col-span-1 lg:col-span-1">
              <h3 className="text-2xl font-black mb-4 tracking-tight">
                {personalInfo.name.split(' ')[0]}<span className="text-brand-primary">.</span>
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Crafting pixel-perfect, engaging, and accessible digital experiences.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <MapPin size={16} className="text-brand-primary" />
                {personalInfo.location}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Explore</h4>
              <ul className="space-y-3">
                {[
                  { id: "home", label: "Home" },
                  { id: "about", label: "About" },
                  { id: "projects", label: "Projects" },
                  { id: "designs", label: "Visual Design" },
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => setCurrentPage(item.id)}
                      className="text-gray-400 hover:text-brand-primary transition-colors text-sm font-medium flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/0 group-hover:bg-brand-primary transition-colors"></span>
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* More Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Resume</h4>
              <ul className="space-y-3">
                {[
                  { id: "cv2", label: "Experience" },
                  { id: "cv1", label: "Education" },
                  { id: "contact", label: "Contact Me" },
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => setCurrentPage(item.id)}
                      className="text-gray-400 hover:text-brand-primary transition-colors text-sm font-medium flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/0 group-hover:bg-brand-primary transition-colors"></span>
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Connect</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/5 hover:bg-brand-primary text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                    title={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs flex items-center gap-1">
              Designed & Built with <span className="text-red-500">♥</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
