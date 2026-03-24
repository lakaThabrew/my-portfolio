import React from "react";
import { Globe, Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const ProjectPage = ({ projects }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">
              Projects
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A selection of projects that showcase my passion for building
            digital experiences.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-12 sm:gap-16 lg:gap-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`group flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-center`}
            >
              <div className="lg:w-1/2 w-full">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl glass-dark group-hover:shadow-brand-primary/20 transition-all duration-500">
                  <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img
                    src={process.env.PUBLIC_URL + project.image}
                    alt={project.title}
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              <div className="lg:w-1/2 w-full space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 bg-brand-primary/10 dark:bg-brand-primary/20 text-brand-primary dark:text-brand-accent rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    {project.year}
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  {project.longDescription}
                </p>

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <ExternalLink size={18} className="text-brand-secondary" />{" "}
                    Key Features
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start text-gray-600 dark:text-gray-400 text-sm"
                      >
                        <span className="w-1.5 h-1.5 bg-brand-secondary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-brand-accent text-sm font-medium rounded-lg border border-gray-200 dark:border-gray-700 hover:border-brand-secondary/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href={project.liveUrl}
                    className="px-6 py-3 bg-brand-dark dark:bg-white text-white dark:text-brand-dark rounded-lg font-semibold hover:bg-brand-primary dark:hover:bg-brand-accent transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300"
                  >
                    <Globe size={18} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white rounded-lg font-semibold hover:bg-brand-primary/5 dark:hover:bg-brand-secondary/10 transition-colors flex items-center gap-2"
                  >
                    <Github size={18} />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectPage;
