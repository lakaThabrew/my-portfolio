import React from "react";
import { User, Briefcase, Calendar, MapPin, Award } from "lucide-react";
import { motion } from "framer-motion";

const ExperiencePage = ({ experiences, volunteering }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
            <Briefcase size={24} className="text-brand-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">Experience</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A detailed overview of my professional journey and community contributions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Experiences Timeline */}
          <section>
            <div className="relative border-l-2 border-brand-primary/20 ml-3 sm:ml-6 space-y-12 pb-4">
              {experiences.map((vol, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-8 sm:pl-12"
                >
                  {/* Timeline Node */}
                  <div className="absolute -left-[9px] top-6 w-5 h-5 rounded-full bg-brand-primary border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>

                  <div className="glass dark:glass-dark rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-brand-primary/10 transition-all duration-300 group border-l-4 border-l-brand-primary">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      {vol.logo && (
                        <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 bg-white dark:bg-white/5 rounded-xl p-2 shadow-sm border border-gray-100 dark:border-white/10 group-hover:scale-105 transition-transform duration-300">
                          <img
                            loading="lazy"
                            decoding="async"
                            src={process.env.PUBLIC_URL + vol.logo}
                            alt={vol.company}
                            className="w-full h-full object-contain rounded-md"
                          />
                        </div>
                      )}

                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-brand-primary transition-colors">
                              {vol.title}
                            </h3>
                            <p className="text-xl text-brand-secondary font-semibold">
                              {vol.company}
                            </p>
                          </div>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-primary/10 text-brand-primary text-sm font-semibold rounded-full whitespace-nowrap">
                            <Calendar size={14} /> {vol.period}
                          </span>
                        </div>

                        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
                          <MapPin size={16} className="mr-1" />
                          {vol.location}
                        </div>

                        <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                          <p>{vol.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Volunteering Grid */}
          <section>
            <motion.h2 variants={itemVariants} className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <User className="text-brand-primary" size={28} />
              Volunteering & Community
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {volunteering.map((v, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative bg-white dark:bg-gray-800/40 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-white/5 hover:border-brand-primary/40 transition-all duration-300"
                >
                  <div className="flex flex-col h-full gap-5">
                    <div className="flex items-center gap-4">
                      <div className="relative flex-shrink-0">
                        <div className="absolute -inset-1 bg-gradient-to-tr from-brand-primary to-brand-accent rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
                        <img
                          loading="lazy"
                          decoding="async"
                          src={process.env.PUBLIC_URL + v.logo}
                          alt={v.organizer}
                          className="relative w-16 h-16 object-cover rounded-2xl bg-white p-1.5 shadow-sm border border-gray-100 dark:border-gray-700"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-tight mb-1 group-hover:text-brand-primary transition-colors line-clamp-2">
                          {v.eventName}
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 text-xs font-semibold truncate">
                           {v.organizer}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col flex-1 space-y-3">
                      <div className="flex items-start gap-2.5">
                        <div className="p-1.5 bg-brand-secondary/10 rounded-lg text-brand-secondary flex-shrink-0">
                           <Award size={14} />
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 font-medium leading-snug">
                          {v.position}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-white/5 mt-auto">
                        <div className="flex items-center gap-1.5 text-xs text-brand-primary font-bold">
                           <Calendar size={14} />
                           {v.date}
                        </div>
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-[10px] font-bold rounded-md uppercase tracking-wider">
                           {v.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

        </motion.div>
      </div>
    </div>
  );
};

export default ExperiencePage;
