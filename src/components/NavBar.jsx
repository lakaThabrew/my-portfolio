import React from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { RandomLetterSwap } from "./ui/random-letter-swap";

const NavBar = ({
  personalInfo,
  navItems,
  currentPage,
  setCurrentPage,
  isDarkMode,
  toggleDarkMode,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex-shrink-0">
          <button
            onClick={() => setCurrentPage("home")}
            className="text-2xl font-black tracking-tighter text-gray-900 dark:text-white"
          >
            {personalInfo.name.split(' ')[0]}<span className="text-brand-primary">.</span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setCurrentPage(id)}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group flex items-center gap-2
                ${currentPage === id
                  ? "text-white"
                  : "text-gray-600 dark:text-gray-300 hover:text-brand-primary dark:hover:text-white"
                }`}
            >
              {currentPage === id && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-brand-primary rounded-full shadow-lg shadow-brand-primary/25"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Icon size={16} />
                <RandomLetterSwap label={label} />
              </span>
            </button>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-brand-primary hover:text-white dark:hover:bg-brand-primary dark:hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-primary/50"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-brand-primary hover:text-white transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-white/90 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800 rounded-b-2xl shadow-xl absolute left-0 right-0 px-4 pb-4 top-20 z-50 mx-4"
          >
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => {
                    setCurrentPage(id);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
                    ${currentPage === id
                      ? "bg-brand-primary text-white shadow-brand-primary/25 shadow-lg"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">
                    <RandomLetterSwap label={label} />
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
