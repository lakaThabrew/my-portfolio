import React, { useState } from 'react';
import { GraduationCapIcon, Calendar, Award, Code, BookOpen, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

const EducationPage = ({
  skills,
  education,
  certifications,
  personalInfo,
}) => {
  const [expandedCategories, setExpandedCategories] = useState({});

  const groupedCertifications = certifications.reduce((acc, cert) => {
    const category = cert.category || "Others";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(cert);
    return acc;
  }, {});

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-20 min-h-screen bg-transparent transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center p-3 bg-brand-primary/10 rounded-full mb-4">
            <BookOpen size={24} className="text-brand-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">Skills</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            My academic background, certifications, and technical proficiencies.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Education Timeline */}
          <section>
            <motion.h2 variants={itemVariants} className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <GraduationCapIcon className="text-brand-primary" size={28} />
              Academic Background
            </motion.h2>

            <div className="relative border-l-2 border-brand-primary/20 ml-3 sm:ml-6 space-y-12 pb-4">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-8 sm:pl-12"
                >
                  {/* Timeline Node */}
                  <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-brand-primary border-4 border-white dark:border-gray-900 shadow-lg"></div>

                  <div className="glass dark:glass-dark p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-brand-primary/10 transition-shadow duration-300 border-l-4 border-l-brand-primary">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                          {edu.degree}
                        </h3>
                        <p className="text-lg text-brand-primary font-semibold mt-1">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-3 text-sm font-medium">
                        <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full flex items-center gap-1">
                          <Calendar size={14} /> {edu.period}
                        </span>
                        <span className="px-3 py-1 bg-brand-secondary/10 text-brand-secondary rounded-full flex items-center gap-1">
                          <Award size={14} /> {edu.gpa}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {edu.specialization}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Certifications Grid */}
          <section>
            <motion.h2 variants={itemVariants} className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <Award className="text-brand-primary" size={28} />
              Certifications
            </motion.h2>

            <div className="space-y-4">
              {Object.entries(groupedCertifications).map(([category, certs]) => (
                <div key={category} className="glass dark:glass-dark rounded-2xl border border-gray-100 dark:border-white/5 overflow-hidden">
                  <button
                    onClick={() => toggleCategory(category)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors focus:outline-none"
                  >
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg sm:text-xl flex items-center gap-2">
                      {category} <span className="text-sm font-normal text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full ml-2">{certs.length}</span>
                    </h3>
                    <motion.div
                      animate={{ rotate: expandedCategories[category] ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="text-gray-500 dark:text-gray-400" size={24} />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {expandedCategories[category] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-100 dark:border-white/5 mt-2 pt-6">
                          {certs.map((cert, index) => (
                            <motion.div
                              key={index}
                              whileHover={{ y: -5 }}
                              className="glass dark:glass-dark p-6 rounded-2xl shadow-md border border-gray-100 dark:border-white/5 flex items-start gap-4 hover:border-brand-primary/30 transition-all duration-300 bg-white/40 dark:bg-black/20"
                            >
                              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-white dark:bg-white/5 rounded-xl p-2 shadow-sm flex-shrink-0">
                                {cert.logo && (
                                  <img
                                    src={process.env.PUBLIC_URL + cert.logo}
                                    alt={cert.issuer}
                                    className="max-w-full max-h-full object-contain"
                                  />
                                )}
                              </div>
                              <div className="flex-1">
                                <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-tight mb-1">
                                  {cert.name}
                                </h3>
                                <p className="text-brand-primary text-sm font-semibold mb-2">
                                  {cert.issuer}
                                </p>
                                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                                  <span>{cert.date}</span>
                                  {cert.credentialId && (
                                    <span className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">ID: {cert.credentialId}</span>
                                  )}
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Cloud */}
          <section>
            <motion.h2 variants={itemVariants} className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <Code className="text-brand-primary" size={28} />
              Technical Proficiency
            </motion.h2>

            <div className="glass dark:glass-dark rounded-3xl p-8 border border-gray-100 dark:border-white/5">
              <div className="grid md:grid-cols-2 gap-8">
                {Object.entries(skills).map(([category, skillList]) => (
                  <motion.div key={category} variants={itemVariants}>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-4 capitalize flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-brand-secondary rounded-full"></span>
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <motion.span
                          key={skill.name}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1.5 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:border-brand-primary dark:hover:border-brand-accent hover:text-brand-primary dark:hover:text-brand-accent transition-colors cursor-default shadow-sm"
                        >
                          {skill.name}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

        </motion.div>
      </div>
    </div>
  );
};

export default EducationPage;
