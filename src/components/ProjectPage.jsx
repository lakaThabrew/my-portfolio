import React from 'react';
import { Globe, Github } from "lucide-react";

const ProjectPage = ({
    projects
}) => {
  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            My Projects
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here's a showcase of some of my recent work. Each project represents
            a unique challenge and demonstrates different aspects of my
            technical expertise.
          </p>
        </div>

        <div className="grid gap-8 sm:gap-10 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden ${index % 2 === 1 ? "lg:flex-row-reverse" : ""} lg:flex transition-colors duration-300`}
            >
              <div className="lg:w-1/2">
                <img
                  loading="lazy"
                  decoding="async"
                  src={process.env.PUBLIC_URL + project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-64 lg:h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-4 sm:p-6 lg:p-8 xl:p-12">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3 sm:mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    {project.category}
                  </span>
                  <span className="text-gray-500 text-sm">
                    • {project.year}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">
                  {project.longDescription}
                </p>

                <div className="mb-4 sm:mb-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 text-sm sm:text-base">
                    Key Features:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
                    {project.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center text-gray-600 dark:text-gray-300 text-xs sm:text-sm"
                      >
                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6 sm:mb-8">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 text-sm sm:text-base">
                    Technologies Used:
                  </h3>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href={project.liveUrl}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <Globe size={16} className="sm:w-4 sm:h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <Github size={16} className="sm:w-4 sm:h-4" />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
