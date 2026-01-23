import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FacebookIcon, InstagramIcon } from "lucide-react";

const ContactPage = ({
  personalInfo,
  contactFirstName,
  setContactFirstName,
  contactLastName,
  setContactLastName,
  contactEmail,
  setContactEmail,
  contactSubject,
  setContactSubject,
  contactMessage,
  setContactMessage,
  handleContactSubmit,
  isSending,
  contactStatus,
}) => {
  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Let's Connect
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
            and how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="text-gray-900 dark:text-gray-100">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
              Get In Touch
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 leading-relaxed">
              I'm always interested in hearing about new opportunities,
              interesting projects, or just having a conversation about
              technology and development. Feel free to reach out!
            </p>

            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-center">
                <div className="bg-blue-600 dark:bg-blue-500 rounded-full p-3 sm:p-4 mr-4 sm:mr-6 flex-shrink-0">
                  <Mail size={20} className="sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-base sm:text-lg mb-1">
                    Email
                  </h3>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors text-sm sm:text-base"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-600 dark:bg-blue-500 rounded-full p-3 sm:p-4 mr-4 sm:mr-6 flex-shrink-0">
                  <Phone size={20} className="sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-base sm:text-lg mb-1">
                    Phone
                  </h3>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors text-sm sm:text-base"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-600 dark:bg-blue-500 rounded-full p-3 sm:p-4 mr-4 sm:mr-6 flex-shrink-0">
                  <FaWhatsapp size={20} className="sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-base sm:text-lg mb-1">
                    WhatsApp
                  </h3>
                  <a
                    href={`tel:${personalInfo.whatsApp}`}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors text-sm sm:text-base"
                  >
                    {personalInfo.whatsApp}
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-600 dark:bg-blue-500 rounded-full p-3 sm:p-4 mr-4 sm:mr-6 flex-shrink-0">
                  <MapPin size={20} className="sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-base sm:text-lg mb-1">
                    Location
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 text-sm sm:text-base">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-12">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                Follow Me
              </h3>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href={personalInfo.github}
                  className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
                  title="GitHub"
                >
                  <Github size={24} className="text-white" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  className="bg-blue-600 hover:bg-blue-700 p-4 rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
                  title="LinkedIn"
                >
                  <Linkedin size={24} className="text-white" />
                </a>

                <a
                  href={personalInfo.facebook}
                  className="bg-blue-600 hover:bg-blue-700 p-4 rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
                  title="Facebook"
                >
                  <FacebookIcon size={24} className="text-white" />
                </a>
                <a
                  href={personalInfo.instagram}
                  className="bg-purple-500 hover:bg-purple-700 p-4 rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
                  title="Instagram"
                >
                  <InstagramIcon size={24} className="text-white" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl transition-colors duration-300">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send me a message
            </h3>
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={contactFirstName}
                    onChange={(e) => setContactFirstName(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={contactLastName}
                    onChange={(e) => setContactLastName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  value={contactSubject}
                  onChange={(e) => setContactSubject(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold transition-colors transform hover:scale-105 disabled:opacity-60"
                >
                  {isSending ? "Sending..." : "Send Message"}
                </button>
              </div>

              {contactStatus === "success" && (
                <div className="text-green-600 font-medium">
                  Message sent — thank you! I will reply soon.
                </div>
              )}
              {contactStatus === "error" && (
                <div className="text-red-600 font-medium">
                  Failed to send message. Please try again or email directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
