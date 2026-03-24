import {
  ChevronRight,
  Code,
  Github,
  Linkedin,
  Mail,
  MousePointer2,
} from "lucide-react";
import { motion } from "framer-motion";

const HomePage = ({
  personalInfo,
  setCurrentPage,
  handleDownloadCV,
  handleViewCV,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Dynamic Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-brand-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-brand-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <motion.div
        className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left: Text Content */}
        <motion.div className="flex-1 text-center lg:text-left space-y-8">
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 shadow-sm"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Available for projects</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold tracking-in text-gray-900 dark:text-white leading-[1.1]">
              <span className="block">Hey, I'm</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent animate-gradient-x">
                {personalInfo.name.split(' ')[0]}
              </span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-light max-w-2xl mx-auto lg:mx-0">
              <span className="font-semibold text-brand-primary">Full Stack Developer</span> & <span className="font-semibold text-brand-secondary">UI/UX Designer</span> crafting digital experiences that blend <span className="italic">beauty</span> with <span className="italic">functionality</span>.
            </p>
          </motion.div>

          {/* Social Links & CTA */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6 pt-4 justify-center lg:justify-start">
            <button
              onClick={() => setCurrentPage("projects")}
              className="group relative px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-bold text-lg shadow-2xl hover:shadow-brand-primary/50 transition-all transform hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                Explore Work <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <div className="flex items-center gap-4">
              {[
                { href: personalInfo.github, icon: Github },
                { href: personalInfo.linkedin, icon: Linkedin },
                { href: "mailto:" + personalInfo.email, icon: Mail },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-brand-primary dark:hover:border-brand-primary text-gray-600 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-accent transition-all hover:scale-110 shadow-sm"
                >
                  <item.icon size={22} />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Modern Profile Visual */}
        <motion.div
          className="lg:flex-1 relative w-full max-w-[500px] lg:max-w-none aspect-square flex items-center justify-center p-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Abstract Shapes */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-gray-200 dark:border-white/5 rounded-full border-dashed"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-12 border border-brand-primary/20 rounded-full border-dashed"
          />

          {/* Main Image Container */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-b from-white/80 to-white/20 dark:from-white/10 dark:to-transparent backdrop-blur-sm border border-white/20 shadow-2xl">
            <div className="w-full h-full rounded-full overflow-hidden relative z-10">
              <img
                src={process.env.PUBLIC_URL + "/assets/dp_crop.jpg"}
                alt={personalInfo.name}
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
              />
            </div>

            {/* Floating Cards */}
            <motion.div
              className="absolute top-10 -right-6 glass px-4 py-3 rounded-xl border-l-4 border-brand-primary shadow-lg z-20 hidden sm:block"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-primary/10 rounded-lg text-brand-primary">
                  <Code size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-white font-semibold">Clean Code</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-black">Start to Finish</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-10 -left-6 glass px-4 py-3 rounded-xl border-l-4 border-brand-accent shadow-lg z-20 hidden sm:block"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-accent/10 rounded-lg text-brand-accent">
                  <MousePointer2 size={20} />
                </div>
                <div>
                  <p className="text-xs text-white dark:text-black font-semibold">Interactive</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">User Experience</p>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </motion.div>

      {/* Scrolling Tech Ticker - Optional but nice */}
      <div className="absolute bottom-0 w-full py-6 glass border-t border-white/10">
        <div className="overflow-hidden flex gap-8 whitespace-nowrap opacity-60">
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={i}
              className="flex gap-12 text-2xl font-bold text-gray-300 dark:text-gray-700 uppercase tracking-widest"
              animate={{ x: "-50%" }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <span>React</span> <span>•</span>
              <span>Node.js</span> <span>•</span>
              <span>TypeScript</span> <span>•</span>
              <span>Computer Science</span> <span>•</span>
              <span>UI Design</span> <span>•</span>
              <span>Machine Learning</span> <span>•</span>
              <span>php</span> <span>•</span>
              <span>Adobe Photoshop</span> <span>•</span>
              <span>Adobe Illustrator</span> <span>•</span>
              <span>Python</span> <span>•</span>
              <span>Frontend</span> <span>•</span>
              <span>Flutter</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
