import React, { useState, useEffect } from 'react';
import {
  Menu, X, Github, Linkedin, Mail, ExternalLink, Download,
  User, Briefcase, FileText, Phone, ChevronRight, Calendar,
  MapPin, Award, Code, Database, Globe, Smartphone,
  Home, Eye, Heart, Share2, LucideDecimalsArrowLeft,
  PenTool
} from 'lucide-react';

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Enhanced personal information
  const personalInfo = {
    name: "Lakmana Thabrew",
    title_1: "Undergraduate Student",
    title_2: "Computer Science and Engineering",
    title_3: "University of Moratuwa, Sri Lanka",
    subtitle_1: "Programmer | Grapic Designer | Web Developer",
    subtitle_2: "Mobile App Developer | Entrepreneur",
    email: "lakmanathabrew123@gmail.com",
    phone: "0713278691",
    location: "Ambalangoda, Galle, Sri Lanka",
    github: "https://github.com/lakaThabrew",
    linkedin: "https://linkedin.com/in/lakmana-thabrew",
    website: "https://lakaThabrew.dev",
    bio: "Computer Science Engineering undergraduate passionate about web development, AI, and data science, with strong programming skills and a drive to create impactful, innovative solutions while continuously learning emerging technologies."
  };

  // Enhanced projects with more details
  const projects = [
    {
      id: 1,
      title: "BrightBuy Online Retail Management System",
      category: "E-Commerce & Inventory Management",
      description: "A comprehensive web-based retail inventory and online order management system for consumer electronics retail chain. Features multi-role user access, variant-based inventory control, and real-time order processing.",
      longDescription: "Built a full-stack e-commerce solution from scratch supporting BrightBuy's digital transformation. The platform includes advanced inventory management with product variants, secure payment processing, delivery estimation, role-based admin dashboards, and comprehensive business reporting with PDF export capabilities.",
      image: "/assets/projects/brightbuy.jpg",
      technologies: ["React", "Node.js", "MySQL", "Tailwind CSS", "RESTful API"],
      features: ["Multi-Role User System", "Variant-Based Inventory", "Payment Integration", "Business Analytics", "Real-time Stock Management", "PDF Report Generation"],
      liveUrl: "#",
      githubUrl: "#",
      year: "2025"
    },

    {
      id: 2,
      title: "CineAI",
      category: "AI & Machine Learning",
      description: "AI-powered movie recommendation web application that provides personalized film suggestions based on user preferences and viewing history using advanced machine learning algorithms.",
      longDescription: "Developed a sophisticated movie recommendation system leveraging AI algorithms to analyze user preferences, viewing patterns, and movie metadata. Features include intelligent filtering, personalized recommendations, user rating system, and responsive web interface for seamless movie discovery experience.",
      image: "/assets/projects/cineAI.jpg",
      technologies: ["React", "Node.js", "JavaScript", "AI/ML APIs", "CSS3"],
      features: ["AI Recommendations", "User Preferences", "Movie Database", "Responsive Design", "Real-time Filtering"],
      liveUrl: "#",
      githubUrl: "https://github.com/lakaThabrew/CineAI",
      year: "2025"
    },
    {
      id: 3,
      title: "GPS Alarm WebApp",
      category: "Location-Based Services",
      description: "A web-based GPS alarm system that triggers location-based alerts, helping users get notified when reaching or approaching their chosen destinations with precise geolocation tracking.",
      longDescription: "Built a location-aware web application using GPS technology to provide proximity-based notifications. The system tracks user location in real-time and triggers customizable alarms when approaching predefined destinations, perfect for commuters and travelers who need location-based reminders.",
      image: "/assets/projects/gps.jpg",
      technologies: ["JavaScript", "HTML5", "CSS3", "Geolocation API", "Web APIs"],
      features: ["GPS Tracking", "Location Alerts", "Custom Destinations", "Real-time Monitoring", "Responsive Interface"],
      liveUrl: "https://lakathabrew.github.io/GPS_Alarm_WebApp",
      githubUrl: "https://github.com/lakaThabrew/GPS_Alarm_WebApp",
      year: "2025"
    },
    {
      id: 4,
      title: "Steamnoodles Feedback AI Agent System",
      category: "AI & Natural Language Processing",
      description: "Intelligent customer feedback analysis system using LangChain and LLMs to automate sentiment analysis, generate contextual responses, and create dynamic sentiment visualization reports for restaurant chains.",
      longDescription: "Built a comprehensive AI-powered feedback management system for SteamNoodles restaurant chain featuring dual AI agents. The system automatically analyzes customer review sentiments, generates polite contextual responses, and creates dynamic sentiment distribution plots based on date ranges using advanced NLP techniques.",
      image: "/assets/projects/steam.jpg",
      technologies: ["Python", "LangChain", "HuggingFace Transformers", "Pandas", "Matplotlib", "Plotly", "OpenAI API"],
      features: ["Sentiment Analysis", "Automated Responses", "Dynamic Plotting", "Date Range Filtering", "Context-Aware Replies", "Restaurant Analytics"],
      liveUrl: "#",
      githubUrl: "https://github.com/lakaThabrew/Steamnoodles-Feedback-Agent-LakmanaThabrew",
      year: "2025"
    },
    {
      id: 5,
      title: "CHaT-BoT Groq",
      category: "Mobile AI Assistant",
      description: "A Flutter mobile chatbot powered by Groq LLM, delivering fast, smart, and context-aware conversational AI directly on mobile devices with advanced natural language processing.",
      longDescription: "Developed a cross-platform mobile chatbot application using Flutter and Dart, integrated with Groq's large language model for lightning-fast AI responses. Features context-aware conversations, offline capabilities, and optimized performance for mobile devices.",
      image: "/assets/projects/chatbot.jpg",
      technologies: ["Flutter", "Dart", "Groq LLM", "C++", "Mobile APIs"],
      features: ["AI Conversations", "Context Awareness", "Fast Responses", "Cross-Platform", "Mobile Optimized"],
      liveUrl: "#",
      githubUrl: "https://github.com/lakaThabrew/CHaT-BoT_groq",
      year: "2025"
    },

    {
      id: 6,
      title: "Nano Processor Version I,II & III",
      category: "Computer Architecture",
      description: "An optimized 4-bit nanoprocessor implementation in VHDL for BASYS 3 FPGA, featuring enhanced instruction decoder, ROM modules, and improved performance for embedded systems.",
      longDescription: "Designed and optimized a 4-bit nanoprocessor using VHDL for University of Moratuwa CS1050 course. This version includes performance optimizations, enhanced instruction set, improved timing, and comprehensive test programs. Demonstrates advanced digital design and FPGA programming skills.",
      image: "/assets/projects/processor.jpg",
      technologies: ["VHDL", "FPGA", "BASYS 3", "Digital Design", "Computer Architecture"],
      features: ["4-bit Architecture", "Instruction Decoder", "ROM Integration", "FPGA Implementation", "Performance Optimized"],
      liveUrl: "#",
      githubUrl: "https://github.com/lakaThabrew/Nano_processor_Version_3",
      year: "2025"
    },

    {
      id: 7,
      title: "Etherion: Clash of Realms",
      category: "Game Development",
      description: "A command-line RPG game built in Java featuring elemental battles, character progression, shop system, and immersive fantasy gameplay with strategic combat mechanics.",
      longDescription: "Created my first complete RPG game using Java with object-oriented programming principles. Features include turn-based combat system, character leveling, elemental magic system, inventory management, and shop mechanics. Demonstrates game logic, data structures, and user interaction design.",
      image: "/assets/projects/game.jpg",
      technologies: ["Java", "OOP", "Console Application", "Game Logic"],
      features: ["Turn-Based Combat", "Character Progression", "Elemental System", "Shop Management", "Story Mode"],
      liveUrl: "#",
      githubUrl: "https://github.com/lakaThabrew/Etherion_Clash_of_the_Realm",
      year: "2025"
    }
  ];

  const graphicDesigns = [
    {
      id: 1,
      title: "",
      category: "",
      description: "",
      longDescription: "",
      image: "",
      tools: [""],
      year: ""
    },

    {
      id: 2,
      title: "",
      category: "",
      description: "",
      longDescription: "",
      image: "",
      tools: [""],
      year: ""
    },

    {
      id: 3,
      title: "",
      category: "",
      description: "",
      longDescription: "",
      image: "",
      tools: [""],
      features: [""],
      year: ""
    },

    {
      id: 4,
      title: "",
      category: "",
      description: "",
      longDescription: "",
      image: "",
      tools: [""],
      features: [""],
      year: ""
    },

    {
      id: 5,
      title: "",
      category: "",
      description: "",
      longDescription: "",
      image: "",
      tools: [""],
      features: [""],
      year: ""
    },

    {
      id: 6,
      title: "",
      category: "",
      description: "",
      longDescription: "",
      image: "",
      toolls: [""],
      features: [""],
      year: ""
    }
  ];

  // Enhanced skills with proficiency levels
  const skills = {
    frontend: [
      { name: "React", level: 95, years: 4 },
      { name: "Next.js", level: 90, years: 3 },
      { name: "Vue.js", level: 85, years: 2 },
      { name: "TypeScript", level: 90, years: 3 },
      { name: "Tailwind CSS", level: 95, years: 3 },
      { name: "React Native", level: 80, years: 2 }
    ],
    backend: [
      { name: "Node.js", level: 95, years: 5 },
      { name: "Express.js", level: 90, years: 4 },
      { name: "Python", level: 85, years: 3 },
      { name: "Django", level: 80, years: 2 },
      { name: "GraphQL", level: 85, years: 2 },
      { name: "REST APIs", level: 95, years: 5 }
    ],
    database: [
      { name: "MongoDB", level: 90, years: 4 },
      { name: "PostgreSQL", level: 85, years: 3 },
      { name: "Redis", level: 80, years: 2 },
      { name: "MySQL", level: 85, years: 4 }
    ],
    tools: [
      { name: "AWS", level: 85, years: 3 },
      { name: "Docker", level: 80, years: 2 },
      { name: "Git", level: 95, years: 5 },
      { name: "Jenkins", level: 75, years: 2 }
    ]
  };

  // Experience data
  const experience = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description: "Lead a team of 5 developers in building scalable web applications. Responsible for architecture decisions, code reviews, and mentoring junior developers.",
      achievements: [
        "Improved application performance by 40% through optimization",
        "Led migration to microservices architecture",
        "Implemented CI/CD pipelines reducing deployment time by 60%"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      location: "Remote",
      description: "Developed and maintained multiple client projects using React, Node.js, and various databases. Collaborated with design teams to implement pixel-perfect UIs.",
      achievements: [
        "Built 10+ client projects from conception to deployment",
        "Reduced bug reports by 50% through comprehensive testing",
        "Mentored 3 junior developers"
      ]
    },
    {
      title: "Frontend Developer",
      company: "WebDesign Co",
      period: "2019 - 2020",
      location: "New York, NY",
      description: "Focused on creating responsive web applications and improving user experience. Worked closely with UX designers to implement modern web interfaces.",
      achievements: [
        "Improved website loading speed by 35%",
        "Implemented responsive design for 20+ websites",
        "Collaborated with cross-functional teams of 15+ members"
      ]
    }
  ];

  // Education data
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      period: "2017 - 2019",
      gpa: "3.8/4.0",
      specialization: "Software Engineering & AI"
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "UC Berkeley",
      period: "2013 - 2017",
      gpa: "3.6/4.0",
      specialization: "Web Development & Database Systems"
    }
  ];

  // Certifications
  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-SAA-123456"
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022",
      credentialId: "GCP-PD-789012"
    },
    {
      name: "MongoDB Certified Developer",
      issuer: "MongoDB Inc.",
      date: "2021",
      credentialId: "MDB-DEV-345678"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadCV = () => {
    // In a real app, this would trigger a download of your actual CV
    alert('CV download would start here. Replace with actual CV file.');
  };

  const renderHomePage = () => (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-8 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-600/20 rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm">Available for Everything Belongs to My Path</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                {personalInfo.name}
              </h1>
              <p className="text-2xl md:text-3xl text-blue-200 mb-4">
                {personalInfo.title_1} <br /> {personalInfo.title_2}
              </p>
              <p className="text-xl md:text-2xl text-blue-200 mb-4">
                {personalInfo.title_3}
              </p>
              <p className="text-xl md:text-xl text-gray-200 mb-8">
                {personalInfo.subtitle_1} <br /> {personalInfo.subtitle_2}
              </p>
              <p className="text-lg text-gray-400 mb-10 max-w-xl">
                {personalInfo.bio}
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setCurrentPage('projects')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2"
                >
                  View My Work <ChevronRight size={20} />
                </button>
                <button
                  onClick={handleDownloadCV}
                  className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all flex items-center gap-2"
                >
                  <Download size={20} /> Download CV
                </button>
              </div>
              <div className="flex gap-6 mt-10">
                <a href={personalInfo.github} className="text-gray-300 hover:text-white transition-colors">
                  <Github size={28} />
                </a>
                <a href={personalInfo.linkedin} className="text-gray-300 hover:text-white transition-colors">
                  <Linkedin size={28} />
                </a>
                <a href={`mailto:${personalInfo.email}`} className="text-gray-300 hover:text-white transition-colors">
                  <Mail size={28} />
                </a>
              </div>
            </div>
            <div className="lg:flex justify-left hidden">
              <div className="relative">
                <div className="w-100 h-100 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                  <img
                    src="/assets/dp_crop.jpg"
                    alt="Lakmana Thabrew"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Code className="text-yellow-800" size={32} />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center">
                  <Database className="text-green-800" size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">1+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">10+</div>
              <div className="text-gray-600">Technologies</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderProjectsPage = () => (
    <div className="pt-32 pb-20 min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">My Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here's a showcase of some of my recent work. Each project represents a unique challenge
            and demonstrates different aspects of my technical expertise.
          </p>
        </div>

        <div className="grid gap-12">
          {projects.map((project, index) => (
            <div key={project.id} className={`bg-white rounded-2xl shadow-lg overflow-hidden ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:flex`}>
              <div className="lg:w-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                  <span className="text-gray-500">• {project.year}</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h2>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {project.longDescription}
                </p>

                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="font-semibold text-gray-900 mb-3">Technologies Used:</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
                  >
                    <Globe size={18} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderDesignsPage = () => (
    <div className="pt-32 pb-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">My Creative Design Work</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of my graphic design projects showcasing creativity, attention to detail,
            and design problem-solving across various mediums and industries.
          </p>
        </div>

        {/* Design Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {graphicDesigns.map((design) => (
            <div
              key={design.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <button className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors">
                          <Eye className="text-white" size={20} />
                        </button>
                        <button className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors">
                          <Heart className="text-white" size={20} />
                        </button>
                        <button className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors">
                          <Share2 className="text-white" size={20} />
                        </button>
                      </div>
                      <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors flex items-center gap-2">
                        <ExternalLink size={16} />
                        View Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors flex-1">
                    {design.title}
                  </h3>
                  <span className="text-sm text-gray-500 ml-2 flex-shrink-0">{design.year}</span>
                </div>

                <p className="text-purple-600 font-semibold text-sm mb-3">
                  {design.client}
                </p>

                <p className="text-gray-600 leading-relaxed">
                  {design.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAboutPage = () => (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Me</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get to know the person behind the code. My journey, experiences, and what drives my passion for development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 text-white mb-8">
              <h2 className="text-3xl font-bold mb-6">My Story</h2>
              <p className="text-lg leading-relaxed mb-6">
                {personalInfo.bio}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <MapPin size={20} className="mr-2" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center">
                  <Mail size={20} className="mr-2" />
                  <span className="truncate">{personalInfo.email}</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills & Expertise</h2>
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 capitalize flex items-center">
                  {category === 'frontend' && <Smartphone className="mr-2" size={24} />}
                  {category === 'backend' && <Code className="mr-2" size={24} />}
                  {category === 'database' && <Database className="mr-2" size={24} />}
                  {category === 'tools' && <Globe className="mr-2" size={24} />}
                  {category}
                </h3>
                <div className="space-y-3">
                  {skillList.slice(0, 4).map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.years}y exp</span>
                      </div>
                      <div className="bg-gray-200 rounded-full h-2">
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

  const renderCVPage = () => (
    <div className="pt-32 pb-20 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          {/* CV Header */}
          <div className="text-center border-b pb-8 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{personalInfo.name}</h1>
            <p className="text-xl text-blue-600 font-semibold mb-4">{personalInfo.title}</p>
            <div className="flex flex-wrap justify-center gap-6 text-gray-600">
              <div className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
            <button
              onClick={handleDownloadCV}
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 mx-auto"
            >
              <Download size={18} />
              Download PDF Version
            </button>
          </div>

          {/* Professional Summary */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <User className="mr-2" size={24} />
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {personalInfo.bio}
            </p>
          </section>

          {/* Experience */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Briefcase className="mr-2" size={24} />
              Professional Experience
            </h2>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-blue-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                    <div className="flex items-center text-gray-600 mt-1">
                      <Calendar size={16} className="mr-2" />
                      <span className="mr-4">{exp.period}</span>
                      <MapPin size={16} className="mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{exp.description}</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <FileText className="mr-2" size={24} />
              Education
            </h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                  <p className="text-lg text-blue-600 font-semibold">{edu.institution}</p>
                  <div className="flex items-center justify-between text-gray-600 mt-2">
                    <span>{edu.period}</span>
                    <span>GPA: {edu.gpa}</span>
                  </div>
                  <p className="text-gray-700 mt-2">Specialization: {edu.specialization}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Award className="mr-2" size={24} />
              Certifications
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900">{cert.name}</h3>
                  <p className="text-blue-600 font-semibold">{cert.issuer}</p>
                  <p className="text-gray-600 text-sm mt-1">Issued: {cert.date}</p>
                  <p className="text-gray-500 text-xs">ID: {cert.credentialId}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Skills Summary */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Code className="mr-2" size={24} />
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <h3 className="font-bold text-gray-900 mb-3 capitalize">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span
                        key={skill.name}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
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

  const renderContactPage = () => (
    <div className="pt-32 pb-20 min-h-screen bg-gradient-to-br from-white to-black-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-black mb-6">Let's Connect</h1>
          <p className="text-xl text-blue-900 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            <p className="text-lg text-blue-800 mb-12 leading-relaxed">
              I'm always interested in hearing about new opportunities, interesting projects,
              or just having a conversation about technology and development. Feel free to reach out!
            </p>

            <div className="space-y-8">
              <div className="flex items-center">
                <div className="bg-blue-600 rounded-full p-4 mr-6">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-purple-500 text-lg mb-1">Email</h3>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-blue-800 hover:text-black transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-600 rounded-full p-4 mr-6">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-purple-500 text-lg mb-1">Phone</h3>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-blue-800 hover:text-white transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-600 rounded-full p-4 mr-6">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-purple-500 text-lg mb-1">Location</h3>
                  <p className="text-blue-800">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6">Follow Me</h3>
              <div className="flex space-x-6">
                <a
                  href={personalInfo.github}
                  className="bg-gray-800 hover:bg-gray-700 p-4 rounded-full transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  className="bg-blue-600 hover:bg-blue-700 p-4 rounded-full transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="bg-red-600 hover:bg-red-700 p-4 rounded-full transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send me a message</h3>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Project Inquiry"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                onClick={() => window.open(`mailto:${personalInfo.email}`, '_blank')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold transition-colors transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNavigation = () => (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button
            onClick={() => setCurrentPage('home')}
            className={`text-2xl font-bold transition-colors ${isScrolled || currentPage !== 'home' ? 'text-Blue-200' : 'text-Purple-200 '
              }`}
          >
            {personalInfo.name}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {[
              { id: 'home', label: 'Home', icon: Home },
              { id: 'about', label: 'About', icon: User },
              { id: 'projects', label: 'Projects', icon: Briefcase },
              { id: 'Designs', label: 'Designs', icon: PenTool },
              { id: 'cv', label: 'CV', icon: FileText },
              { id: 'contact', label: 'Contact', icon: Phone }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setCurrentPage(id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${currentPage === id
                  ? 'bg-blue-600 text-white shadow-md'
                  : isScrolled || currentPage !== 'home'
                    ? 'text-gray-600 hover:text-Black-900 hover:bg-gray-800'
                    : 'text-purple-800 hover:text-blue-800 hover:bg-white/10'
                  }`}
              >
                <Icon size={18} />
                {label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors ${isScrolled || currentPage !== 'home' ? 'text-gray-900' : 'text-white'
              }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            {[
              { id: 'home', label: 'Home', icon: User },
              { id: 'about', label: 'About', icon: User },
              { id: 'projects', label: 'Projects', icon: Briefcase },
              { id: 'cv', label: 'CV', icon: FileText },
              { id: 'contact', label: 'Contact', icon: Phone }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => {
                  setCurrentPage(id);
                  setIsMenuOpen(false);
                }}
                className={`flex items-center gap-3 w-full px-6 py-4 text-left font-medium transition-colors ${currentPage === id
                  ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
              >
                <Icon size={18} />
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return renderHomePage();
      case 'about':
        return renderAboutPage();
      case 'projects':
        return renderProjectsPage();
      case 'Designs':
        return renderDesignsPage();
      case 'cv':
        return renderCVPage();
      case 'contact':
        return renderContactPage();
      default:
        return renderHomePage();
    }
  };

  return (
    <div className="min-h-screen">
      {renderNavigation()}
      {renderCurrentPage()}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">{personalInfo.name}</h3>
              <p className="text-gray-400 mb-4">{personalInfo.title_1}</p>
              <p className="text-gray-400">{personalInfo.location}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <a
                  href={personalInfo.github}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={24} />Github
                </a>
                <a
                  href={personalInfo.linkedin}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin size={24} /> Linkedin
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Mail size={24} /> Gmail
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 {personalInfo.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;