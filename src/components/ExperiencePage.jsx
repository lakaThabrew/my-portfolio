import React from "react";
import { FileText, User } from "lucide-react";

const ExperiencePage = ({ experiences, volunteering }) => {
  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-20 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 lg:p-12 transition-colors duration-300">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Experiences & Volunteering
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A detailed overview of my professional experiences and
              volunteering activities that have shaped my career and personal
              growth.
            </p>
          </div>

          {/* Experiences */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <FileText className="mr-2" size={24} />
              Experiences
            </h2>
            <div className="space-y-6">
              {experiences.map((vol, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 transition-colors duration-300 flex gap-4 items-start"
                >
                  {vol.logo && (
                    <img
                      loading="lazy"
                      decoding="async"
                      src={process.env.PUBLIC_URL + vol.logo}
                      alt={vol.company}
                      className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {vol.title}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                      {vol.company}
                    </p>
                    <div className="flex items-center justify-between text-gray-600 dark:text-gray-400 mt-2">
                      <span>{vol.period}</span>
                      <span>{vol.location}</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                      Description: {vol.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Volunteering */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <User className="mr-2" size={24} />
              Volunteering
            </h2>
            <div className="space-y-6">
              {volunteering.map((v, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 flex gap-4 items-start transition-colors duration-300"
                >
                  <img
                    loading="lazy"
                    decoding="async"
                    src={process.env.PUBLIC_URL + v.logo}
                    alt={v.organizer}
                    className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {v.eventName}
                        </h3>
                        <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                          {v.position} • {v.organizer}
                        </p>
                      </div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm">
                        <span>{v.date}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                      Category:{" "}
                      <span className="font-medium">{v.category}</span>
                    </p>
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

export default ExperiencePage;
