import React from "react";
import {
  Github, Linkedin, Mail, MapPin,
  Phone, Heart,
  ChevronRight
} from "lucide-react";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const Footer = ({
  personalInfo,
  currentPage,
  setCurrentPage,
  renderNavigation,
  renderCurrentPage,
}) => {
  const exploreLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "designs", label: "Visual Design" },
    { id: "gallery", label: "Gallery" },
  ];

  const resumeLinks = [
    { id: "cv2", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "cv1", label: "Education" },
    { id: "contact", label: "Contact Me" },
  ];

  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: FaFacebookF, href: personalInfo.facebook, label: "Facebook" },
    { icon: FaInstagram, href: personalInfo.instagram, label: "Instagram" },
    {
      icon: FaWhatsapp,
      href: `https://wa.me/${personalInfo.whatsApp.replace(/[^0-9]/g, "")}`,
      label: "WhatsApp",
    },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
  ];

  const FooterLink = ({ item, onClick }) => (
    <li>
      <button
        onClick={onClick}
        className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 w-full py-1"
      >
        <span className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-brand-secondary opacity-0 -ml-8 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300">
          <ChevronRight size={14} />
        </span>
        <span className="text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
          {item.label}
        </span>
      </button>
    </li>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 flex flex-col font-sans">
      {/* Navigation (Sticky & Fixed logic handled in App.js usually, but we render it here as per existing structure) */}
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
      <footer className="bg-[#0f1115] text-white relative overflow-hidden pt-20 pb-10 border-t border-white/5">
        {/* Decorative background elements */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent"></div>
        <div className="absolute -top-[20%] right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-[20%] left-0 w-[400px] h-[400px] bg-brand-secondary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">



          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">

            {/* Brand Column (4 Cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white font-bold text-xl">
                  {personalInfo.name.charAt(0)}
                </div>
                <span className="text-2xl font-bold tracking-tight text-white">
                  {personalInfo.name.split(" ")[0]}
                </span>
              </div>

              <p className="text-gray-400 leading-relaxed pr-6">
                A passionate Full Stack Developer and UI/UX Designer crafting pixel-perfect, engaging, and accessible digital experiences.
              </p>

              <div className="flex flex-col gap-3 pt-2">
                <div className="flex items-center gap-3 text-gray-400 text-sm hover:text-brand-accent transition-colors">
                  <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-brand-primary">
                    <MapPin size={16} />
                  </span>
                  {personalInfo.location}
                </div>
                <div className="flex items-center gap-3 text-gray-400 text-sm hover:text-brand-accent transition-colors">
                  <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-brand-primary">
                    <Phone size={16} />
                  </span>
                  {personalInfo.phone}
                </div>
              </div>
            </div>

            {/* Spacer (1 Col) */}
            <div className="hidden lg:block lg:col-span-1"></div>

            {/* Navigation Columns (2 Cols each) */}
            <div className="lg:col-span-2">
              <h4 className="text-white font-bold text-lg mb-6 border-l-4 border-brand-primary pl-3">Explore</h4>
              <ul className="space-y-2">
                {exploreLinks.map((item) => (
                  <FooterLink
                    key={item.id}
                    item={item}
                    onClick={() => setCurrentPage(item.id)}
                  />
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-white font-bold text-lg mb-6 border-l-4 border-brand-secondary pl-3">Resume</h4>
              <ul className="space-y-2">
                {resumeLinks.map((item) => (
                  <FooterLink
                    key={item.id}
                    item={item}
                    onClick={() => setCurrentPage(item.id)}
                  />
                ))}
              </ul>
            </div>

            {/* Socials (3 Cols) */}
            <div className="lg:col-span-3">
              <h4 className="text-white font-bold text-lg mb-6 border-l-4 border-brand-accent pl-3">Connect</h4>
              <div className="grid grid-cols-4 gap-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="aspect-square rounded-xl bg-white/5 border border-white/5 hover:border-brand-primary/50 hover:bg-brand-primary/10 text-gray-400 hover:text-brand-primary flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-brand-primary/20"
                    title={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-gray-500 hover:text-white text-sm transition-colors">
                Back to Top
              </button>
              <div className="h-4 w-px bg-white/10"></div>
              <p className="text-gray-600 text-sm flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full">
                Made with <Heart size={12} className="text-red-500 fill-red-500 animate-pulse" /> by <span className="text-gray-300">{personalInfo.name.split(" ")[0]}</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
