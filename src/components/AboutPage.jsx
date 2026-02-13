import React from "react";
import { MapPin, Mail, Languages, Smartphone, Code, Database, Gavel, Settings, User } from "lucide-react";
import { motion } from "framer-motion";

const AboutPage = ({ personalInfo, skills }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-20 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center p-3 bg-brand-primary/10 rounded-full mb-4">
            <User size={24} className="text-brand-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">Me</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Get to know the person behind the code. My journey, experiences, and what drives my passion for development.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-12 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Story Column - Spans 7 columns */}
          <motion.div className="lg:col-span-7 space-y-8" variants={itemVariants}>
            <div className="glass dark:glass-dark rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden group hover:border-brand-primary/30 transition-colors duration-500">
              {/* Decorative Gradient Background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full filter blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 relative z-10">
                My Journey in <span className="text-brand-primary">Computer Science</span>
              </h2>

              <div className="space-y-8 relative z-10 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                <section>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="w-2 h-8 bg-brand-accent rounded-full mb-1"></span>
                    The Spark
                  </h3>
                  <p>
                    My journey began at age 16 with a broken laptop everyone had given up on. After three days of YouTube tutorials and forums, I successfully recovered the corrupted hard drive. That moment of triumph ignited a passion that would define my path.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="w-2 h-8 bg-brand-primary rounded-full mb-1"></span>
                    From Curiosity to Competence
                  </h3>
                  <p>
                    As a Second-year Computer Science student at University of Moratuwa, Sri Lanka, I've built solid foundations through coursework and hands-on projects.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="w-2 h-8 bg-brand-secondary rounded-full mb-1"></span>
                    Embracing Challenges
                  </h3>
                  <p>
                    My growth accelerated during my past two years, navigating legacy code with minimal documentation. This taught me "code archaeology" and I optimized their data pipeline by 40%, learning that elegant solutions come from deep problem understanding.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="w-2 h-8 bg-brand-dark rounded-full mb-1"></span>
                    Looking Forward
                  </h3>
                  <p>
                    I'm driven by technology's impact on people's lives. Preparing for my next two years, I'm excited about the intersection of AI and user experience. I seek opportunities to grow as both a technical problem-solver and collaborative team member.
                  </p>
                </section>

                <blockquote className="p-6 bg-brand-primary/5 border-l-4 border-brand-accent italic text-gray-700 dark:text-gray-300 rounded-r-xl">
                  "The best way to predict the future is to create it. I'm excited to be part of building tomorrow's technological solutions."
                </blockquote>
              </div>

              {/* Contact Info Footer within Card */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700/50 flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <MapPin className="text-brand-primary" size={20} />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Mail className="text-brand-primary" size={20} />
                  <span>{personalInfo.email}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Skills Column - Spans 5 columns */}
          <motion.div className="lg:col-span-5 space-y-6" variants={itemVariants}>
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Skills & Expertise</h3>

              <div className="space-y-8">
                {Object.entries(skills).map(([category, skillList], idx) => (
                  <div key={category}>
                    <h4 className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white mb-4 capitalize">
                      {category === "Programming" && <Languages size={20} className="text-brand-secondary" />}
                      {category === "frontend" && <Smartphone size={20} className="text-brand-secondary" />}
                      {category === "backend" && <Code size={20} className="text-brand-secondary" />}
                      {category === "database" && <Database size={20} className="text-brand-secondary" />}
                      {category === "tools" && <Gavel size={20} className="text-brand-secondary" />}
                      {category === "Softwares" && <Settings size={20} className="text-brand-secondary" />}
                      {category}
                    </h4>

                    <div className="grid grid-cols-1 gap-3">
                      {skillList.slice(0, 10).map((skill) => (
                        <div key={skill.name} className="group">
                          <div className="flex justify-between text-sm mb-1.5">
                            <span className="text-gray-600 dark:text-gray-400 font-medium group-hover:text-brand-primary transition-colors">{skill.name}</span>
                            <span className="text-gray-400 dark:text-gray-500">{skill.level}%</span>
                          </div>
                          <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-brand-primary to-brand-accent"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.2 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
