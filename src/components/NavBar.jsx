import { Sun, Moon } from "lucide-react";

const NavBar = ({
  personalInfo,
  navItems,
  currentPage,
  setCurrentPage,
  isDarkMode,
  toggleDarkMode,
  isMenuOpen,
  setIsMenuOpen,
  setIsScrolled,
}) => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 w-fit">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <button
            onClick={() => setCurrentPage("home")}
            className={`text-lg sm:text-xl font-bold transition-colors text-black dark:text-white px-10`}
          >
            {personalInfo.name}
          </button>
        </div>

        {/* Centered nav links (desktop) */}
        <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setCurrentPage(id)}
              className={`flex items-center gap-2 px-3 py-2 rounded-md font-medium transition ${currentPage === id ? "bg-purple-600 text-white" : "text-black dark:text-white"}`}
            >
              <Icon size={16} />
              <span className="hidden sm:inline">{label}</span>
            </button>
          ))}
        </div>

        {/* Actions (right) */}
        <div className="flex items-center space-x-2 px-10">
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg transition-colors text-black dark:text-white`}
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t dark:border-gray-700 shadow-lg">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => {
                setCurrentPage(id);
                setIsMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-3 border-b dark:border-gray-700 ${currentPage === id ? "bg-blue-50 dark:bg-blue-900/50 text-blue-600" : "text-gray-700 dark:text-gray-200"}`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBar;
