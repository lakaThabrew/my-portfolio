import React from "react";
import { MapPin, Mail, Languages, Smartphone, Code, Database, Gavel, Settings } from "lucide-react";

const AboutPage = ({
    personalInfo, skills
}) => {
  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 min-h-screen dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            About Me
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get to know the person behind the code. My journey, experiences, and
            what drives my passion for development.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 xl:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 mb-12 sm:mb-16 lg:mb-20">
          <div className="lg:col-span-2 xl:col-span-1">
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-6 sm:p-8 lg:p-10 text-white mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                <i>My Journey in Computer Science & Engineering</i>
              </h2>
              <div>
                <h3 className="text-xl font-bold mb-6">
                  The Spark That Started It All
                </h3>
                <p className="text-lg text-justify leading-relaxed mb-6">
                  My journey began at age 16 with a broken laptop everyone had
                  given up on. After three days of YouTube tutorials and forums,
                  I successfully recovered the corrupted hard drive. That moment
                  of triumph ignited a passion that would define my path.
                </p>

                <h3 className="text-xl font-bold mb-6">
                  From Curiosity to Competence
                </h3>
                <p className="text-lg text-justify leading-relaxed mb-6">
                  As a Second-year Computer Science student at University of
                  Moratuwa, Sri Lanka, I've built solid foundations through
                  coursework and hands-on projects.
                </p>

                <h3 className="text-xl font-bold mb-6">Embracing Challenges</h3>
                <p className="text-lg text-justify leading-relaxed mb-6">
                  My growth accelerated during my past two years, navigating
                  legacy code with minimal documentation. This taught me "code
                  archaeology" and I optimized their data pipeline by 40%,
                  learning that elegant solutions come from deep problem
                  understanding.
                </p>

                <h3 className="text-xl font-bold mb-6">Beyond the Code</h3>
                <p className="text-lg text-justify leading-relaxed mb-6">
                  I'm driven by technology's impact on people's lives—from
                  campus systems saving organizers hours to mobile apps helping
                  local businesses. As a teaching assistant for Introduction to
                  Programming, I've learned that clear communication is as
                  crucial as coding skills.
                </p>

                <h3 className="text-xl font-bold mb-6">Looking Forward</h3>
                <p className="text-lg text-justify leading-relaxed mb-6">
                  Preparing for my next two year, I'm excited about AI and user
                  experience intersection. I'm exploring how machine learning
                  can create intuitive interfaces and make AI tools accessible
                  to non-technical users. I seek opportunities to grow as both a
                  technical problem-solver and collaborative team member.
                </p>

                <h3 className="text-xl font-bold mb-6">Core Values</h3>
                <p className="text-lg text-justify leading-relaxed mb-6">
                  <strong>Continuous Learning:</strong> Embracing rapid
                  technological evolution while building strong fundamentals.
                  <br />
                  <strong>User-Centric Thinking:</strong> Creating solutions
                  that genuinely improve people's experiences.
                  <br />
                  <strong>Collaborative Growth:</strong> My best work happens
                  through learning from others and team contribution.
                </p>

                <h3 className="text-xl font-bold mb-6">
                  "The best way to predict the future is to create it. I'm
                  excited to be part of building tomorrow's technological
                  solutions."
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-4 mt-8">
                <div className="flex items-center">
                  <MapPin size={20} className="mr-2 flex-shrink-0" />
                  <span className="text-sm sm:text-base">
                    {personalInfo.location}
                  </span>
                </div>
                <div className="flex items-center">
                  <Mail size={20} className="mr-2 flex-shrink-0" />
                  <span className="truncate text-sm sm:text-base">
                    {personalInfo.email}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
              Skills & Expertise
            </h2>
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 capitalize flex items-center">
                  {category === "Programming" && (
                    <Languages className="mr-2" size={24} />
                  )}
                  {category === "frontend" && (
                    <Smartphone className="mr-2" size={24} />
                  )}
                  {category === "backend" && (
                    <Code className="mr-2" size={24} />
                  )}
                  {category === "database" && (
                    <Database className="mr-2" size={24} />
                  )}
                  {category === "tools" && <Gavel className="mr-2" size={24} />}
                  {category === "Softwares" && (
                    <Settings className="mr-2" size={24} />
                  )}
                  {category}
                </h3>
                <div className="space-y-3">
                  {skillList.slice(0, 10).map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
