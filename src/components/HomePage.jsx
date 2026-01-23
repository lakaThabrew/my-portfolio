import {
  ChevronRight,
  Download,
  Eye,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const HomePage = ({
  personalInfo,
  setCurrentPage,
  handleDownloadCV,
  handleViewCV,
}) => {
  return (
    <div className="pt-8 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Hero Section - Two Column: Image Left, Text Right */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white px-4 sm:px-6">
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16">
          {/* Left: Stylized Image */}
          <div className="relative flex items-center justify-center px-4 lg:px-0">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px]">
              <div className="absolute -left-6 -top-6 w-full h-full bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 rounded-3xl transform -rotate-6 shadow-2xl opacity-90"></div>
              <div className="absolute right-0 bottom-0 w-full h-full bg-gradient-to-br from-white/10 to-black/10 rounded-3xl overflow-hidden transform rotate-3 shadow-2xl">
                <img
                  loading="lazy"
                  decoding="async"
                  src={process.env.PUBLIC_URL + "/assets/dp_crop.jpg"}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-center rounded-3xl filter contrast-105"
                />
              </div>
              <div className="absolute -right-8 -bottom-8 w-28 h-28 bg-white/6 rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="px-4 lg:px-0 text-left">
            <div className="inline-flex items-center bg-white/10 backdrop-blur rounded-full px-3 py-2 mb-4">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-xs sm:text-sm text-white/90">
                Available for new opportunities
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
              {personalInfo.name}
            </h1>

            <p className="text-lg sm:text-xl text-blue-200 mb-2 font-semibold">
              {personalInfo.title_1} @ {personalInfo.title_2}
            </p>
            <p className="text-base sm:text-lg text-blue-200 mb-6 max-w-2xl">
              {personalInfo.title_3}
            </p>

            <p className="text-lg sm:text-base text-gray-200 mb-6 max-w-2xl text-justify">
              {personalInfo.bio}
            </p>

            <p className="text-lg sm:text-xl text-blue-400 mb-6 max-w-3xl">
              {personalInfo.subtitle_1}
              <br></br>
              {personalInfo.subtitle_2}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6">
              <button
                onClick={() => setCurrentPage("projects")}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 transform transition px-6 py-3 rounded-lg font-semibold shadow-lg"
              >
                View My Work <ChevronRight size={18} />
              </button>
              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center gap-2 border-2 border-white/30 hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition"
              >
                <Download size={18} /> Download CV
              </button>
              <button
                onClick={handleViewCV}
                className="inline-flex items-center gap-2 border-2 border-white/30 hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition"
              >
                <Eye size={18} /> View CV
              </button>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={personalInfo.github}
                className="text-gray-200 hover:text-white transition-colors"
              >
                <Github size={40} />
              </a>
              <a
                href={personalInfo.linkedin}
                className="text-gray-200 hover:text-white transition-colors"
              >
                <Linkedin size={40} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-gray-200 hover:text-white transition-colors"
              >
                <Mail size={40} />
              </a>
              <a
                href={personalInfo.whatsApp}
                className="text-gray-200 hover:text-white transition-colors"
              >
                <FaWhatsapp size={40} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
