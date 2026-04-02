import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FacebookIcon, InstagramIcon } from "lucide-react";
import { motion } from "framer-motion";

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
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 min-h-screen bg-transparent transition-colors duration-300 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-3xl pointer-events-none opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-3xl pointer-events-none opacity-50"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center p-3 bg-brand-primary/10 rounded-full mb-4">
            <Mail size={24} className="text-brand-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">Connect</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your next project and how we can work together.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left: Contact Info */}
          <motion.div variants={itemVariants} className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm always interested in hearing about new opportunities,
                interesting projects, or just having a conversation about
                technology and development. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center group">
                <div className="w-14 h-14 flex items-center justify-center bg-brand-primary/10 dark:bg-brand-primary/20 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300 text-brand-primary dark:text-brand-accent">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">Email</h3>
                  <a href={`mailto:${personalInfo.email}`} className="text-gray-600 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-accent transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-14 h-14 flex items-center justify-center bg-brand-primary/10 dark:bg-brand-primary/20 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300 text-brand-primary dark:text-brand-accent">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">Phone</h3>
                  <a href={`tel:${personalInfo.phone}`} className="text-gray-600 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-accent transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-14 h-14 flex items-center justify-center bg-brand-primary/10 dark:bg-brand-primary/20 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300 text-brand-primary dark:text-brand-accent">
                  <FaWhatsapp size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">WhatsApp</h3>
                  <a href={`https://wa.me/${personalInfo.whatsApp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-accent transition-colors">
                    {personalInfo.whatsApp}
                  </a>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-14 h-14 flex items-center justify-center bg-brand-primary/10 dark:bg-brand-primary/20 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300 text-brand-primary dark:text-brand-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">Location</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Follow Me
              </h3>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: personalInfo.github },
                  { icon: Linkedin, href: personalInfo.linkedin },
                  { icon: FacebookIcon, href: personalInfo.facebook },
                  { icon: InstagramIcon, href: personalInfo.instagram },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-brand-primary hover:text-white dark:hover:bg-brand-primary dark:hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg"
                  >
                    <social.icon size={22} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="glass dark:glass-dark rounded-3xl p-8 sm:p-10 shadow-2xl border border-gray-100 dark:border-white/10 relative overflow-hidden">
              {/* Glow Effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/20 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none"></div>

              <form onSubmit={handleContactSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                    <input
                      type="text"
                      value={contactFirstName}
                      onChange={(e) => setContactFirstName(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                    <input
                      type="text"
                      value={contactLastName}
                      onChange={(e) => setContactLastName(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    value={contactSubject}
                    onChange={(e) => setContactSubject(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={4}
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full group relative overflow-hidden bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-4 px-6 rounded-xl font-bold text-lg shadow-xl hover:shadow-brand-primary/20 transition-all transform hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSending ? "Sending..." : "Send Message"}
                      {!isSending && <Send size={18} className="group-hover:translate-x-1 transition-transform" />}
                    </span>
                  </button>
                </div>

                {contactStatus === "success" && (
                  <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-600 dark:text-green-400 font-medium text-center">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                {contactStatus === "error" && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-600 dark:text-red-400 font-medium text-center">
                    Failed to send message. Please try again or email directly.
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
