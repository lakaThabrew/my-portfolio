import React from 'react';
import { GraduationCapIcon, Calendar, MapPin, Award, Code } from  'lucide-react';

const EducationPage = ({
    skills,
    education,
    certifications,
    personalInfo,
}) => {
  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-20 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 lg:p-12 transition-colors duration-300">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Professional Summary
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {personalInfo.bio}
            </p>
          </div>

          {/* Education */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <GraduationCapIcon className="mr-2" size={24} />
              Education
            </h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-6 border-l-2 border-blue-200 dark:border-blue-600"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                      {edu.institution}
                    </p>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mt-1">
                      <Calendar size={16} className="mr-2" />
                      <span className="mr-4">{edu.period}</span>
                      <MapPin size={16} className="mr-2" />
                      <span>{edu.gpa}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {edu.specialization}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Award className="mr-2" size={24} />
              Certifications
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 transition-colors duration-300 flex gap-4 items-center"
                >
                  {cert.logo && (
                    <div className="w-16 h-16 flex items-center justify-center bg-white/60 dark:bg-gray-800/50 rounded-md p-1 flex-shrink-0">
                      <img
                        loading="lazy"
                        decoding="async"
                        src={process.env.PUBLIC_URL + cert.logo}
                        alt={cert.issuer}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white">
                      {cert.name}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">
                      {cert.issuer}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                      Issued: {cert.date}
                    </p>
                    {cert.credentialId && cert.credentialId !== "" && (
                      <p className="text-gray-500 dark:text-gray-500 text-xs">
                        ID: {cert.credentialId}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Skills */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Code className="mr-2" size={24} />
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-3 capitalize">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span
                        key={skill.name}
                        className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
