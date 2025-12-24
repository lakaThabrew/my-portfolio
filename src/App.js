import React, { useState, useEffect } from 'react';
import {
  Menu, X, Github, Linkedin, Mail, Download,
  User, Briefcase, FileText, Phone, ChevronRight, Calendar,
  MapPin, Award, Code, Database, Globe, Smartphone,
  Home, PenTool, FacebookIcon, UniversityIcon,
  InstagramIcon, MessageCircle, ExternalLink,
  Languages, Gavel, Settings, GraduationCapIcon,
  SearchIcon, Sun, Moon
} from 'lucide-react';

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const openModal = (design) => {
    setIsModalOpen(true);
    setSelectedDesign(design)
  }
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDesign(null);
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  }

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
    whatsApp: "https://wa.me/94713278691",
    location: "Ambalangoda, Galle, Sri Lanka",
    facebook: "https://www.facebook.com/profile.php?id=100090132404413",
    instagram: "https://www.instagram.com/chulanka_lakmanath/",
    github: "https://github.com/lakaThabrew",
    linkedin: "https://linkedin.com/in/lakmana-thabrew",
    website: "https://lakaThabrew.dev",
    bio: "Computer Science Engineering undergraduate passionate about web development, AI, and data science, with strong programming skills and a drive to create impactful, innovative solutions while continuously learning emerging technologies."
  };

  // Enhanced projects with more details
  const projects = [
    {
      id: -1,
      title: "EduMentor AI – Agent-Based Educational Assistant",
      category: "AI & Education, Software Engineering",
      description: "An AI-powered educational assistant built using a multi-agent architecture to deliver personalized learning, real-time tutoring, adaptive quizzes, and intelligent study recommendations for students.",
      longDescription: "EduMentor AI is a sophisticated agent-based educational assistant designed to enhance personalized learning experiences. The system leverages multiple AI agents to handle tasks such as student query understanding, personalized tutoring, adaptive quiz generation, learning progress tracking, and memory-based recommendations. Using natural language processing, the assistant understands student questions in real time, while adaptive learning algorithms tailor content based on performance and learning behavior. The platform integrates educational resources, provides analytics-driven feedback, and supports continuous learning across multiple subjects.",
      image: "/assets/projects/Edumentor-ai.png",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "Python",
        "Large Language Models (LLMs)",
        "RESTful API",
        "Tailwind CSS"
      ],
      features: [
        "Multi-Agent AI Architecture",
        "Personalized Learning Paths",
        "Real-time AI Tutoring",
        "Adaptive Quiz Generation",
        "Student Progress Tracking",
        "Memory-Based Recommendations",
        "Natural Language Query Handling",
        "Learning Analytics Dashboard"
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/lakaThabrew/edumentor-ai",
      year: "2025"
    }
    ,
    {
      id: 0,
      title: "HealthSense – AI-Powered Health Monitoring System",
      category: "Healthcare Technology, AI & Software Engineering",
      description: "A smart health monitoring and analysis platform designed to track user health data, provide insights, and support proactive healthcare through intelligent data visualization and analysis.",
      longDescription: "HealthSense is a modern healthcare technology project focused on monitoring, analyzing, and visualizing personal health data to support better health awareness and decision-making. The system enables users to record and track vital health metrics, view trends over time, and gain meaningful insights through an intuitive dashboard. Designed with a scalable architecture and clean UI, HealthSense emphasizes usability, data clarity, and future extensibility toward AI-driven health predictions and personalized recommendations.",
      image: "/assets/projects/health.png",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "RESTful API",
        "Tailwind CSS",
        "Chart.js"
      ],
      features: [
        "Health Data Tracking",
        "Interactive Data Visualization",
        "User-Friendly Dashboard",
        "Secure Data Handling",
        "Trend Analysis of Health Metrics",
        "Scalable Backend Architecture",
        "Future-Ready AI Integration"
      ],
      liveUrl: "https://ai.studio/apps/drive/1MEdLXshwAW8p5g3b6CQ_g8k8iyZAiK87?fullscreenApplet=true",
      githubUrl: "https://github.com/lakaThabrew/HealthSense",
      year: "2025"
    }
    ,
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
      image: "/assets/projects/chatbot.png",
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
      image: "/assets/projects/clash.png",
      technologies: ["Java", "OOP", "Console Application", "Game Logic"],
      features: ["Turn-Based Combat", "Character Progression", "Elemental System", "Shop Management", "Story Mode"],
      liveUrl: "#",
      githubUrl: "https://github.com/lakaThabrew/Etherion_Clash_of_the_Realm",
      year: "2025"
    }
  ];

  const graphicDesigns = [
    {
      id: 0,
      title: "Awareness of Austim",
      client: "Rotaract UOM",
      description: "Attractive Animation",
      image: "/assets/Designs/White Elegant What You Need Facebook Post.mp4",
      tools: ["Canva"],
      year: "2025",
      type: "video"
    },

    {
      id: 1,
      title: "Catalyst 25",
      client: "Rotaract UOM",
      description: "Attractive Instagram Tile Poster",
      image: "/assets/Designs/catalyst25.png",
      tools: ["Canva"],
      year: "2025",
      type: "image"
    },

    {
      id: 2,
      title: "Binara Padura 25",
      client: "Rotaract UOM",
      description: "A singing Audition Happenning Now Video",
      image: "/assets/Designs/binarapadurahappeningnow.mp4",
      tools: ["canva", "Capcut"],
      year: "2025",
      type: "video"
    },

    {
      id: 3,
      title: "Bot Talk 3.0",
      client: "IEEE RAS UOM",
      description: "Attractive Flyer",
      image: "/assets/Designs/Bot Talk 3.0 - Flyers.png",
      tools: ["Canva"],
      year: "2025",
      type: "image"
    },

    {
      id: 4,
      title: "TECHNO 2025",
      client: "IESL UOM",
      description: "Attractive Small Video for Happening Now",
      image: "/assets/Designs/Gold Modern Wedding Event Happening Now WhatsApp Status_2.mp4",
      tools: ["Canva", "Capcut"],
      year: "2025",
      type: "video"
    },

    {
      id: 5,
      title: "Annual General Meeting",
      client: "IESL student Chapter UOM",
      description: "A professional sounier for Award",
      image: "/assets/Designs/sounier-AGM_IESL.png",
      tools: ["canva"],
      year: "2025",
      type: "image"
    },

    {
      id: 6,
      title: "Top Movies @ Aug 25",
      client: "Movies with DCLT",
      description: "An elegant thumbnail for tiktok video",
      image: "/assets/Designs/Heading.png",
      tools: ["canva", "photoshop"],
      year: "2025",
      type: "image"
    },

    {
      id: 7,
      title: "TECHNO 2025",
      client: "IESL UOM",
      description: "Attractive Small Video for Happening Now Day #2",
      image: "/assets/Designs/happening now day 2.mp4",
      tools: ["Canva", "Capcut"],
      year: "2025",
      type: "video"
    },

    {
      id: 8,
      title: "TECHNO 2025",
      client: "IESL UOM",
      description: "Attractive Flyer for Happening Today",
      image: "/assets/Designs/6.jpg",
      tools: ["Adobe Photoshop"],
      year: "2025",
      type: "image"
    },

    {
      id: 9,
      title: "The Elegant Frock Design",
      client: "The Looms Arcade",
      description: "Attractive Flyer for Marketing",
      image: "/assets/Designs/Looms Arcade.png",
      tools: ["Canva", "Adobe Photoshop"],
      year: "2025",
      type: "image"
    },

    {
      id: 10,
      title: "Christmas Wish Flyer",
      client: "CSE Student Society UOM",
      description: "A colourful merry chirtsmas flyer",
      image: "/assets/Designs/CSESS Flyers (2).png",
      tools: ["canva"],
      year: "2025",
      type: "image"
    },

    {
      id: 11,
      title: "Top Movies @ July 25",
      client: "Movies with DCLT",
      description: "A black and red Minimalist tiktok thumbnail",
      image: "/assets/Designs/White Photo Minimalist Fashion Poster.png",
      tools: ["canva"],
      year: "2025",
      type: "image"
    },

    {
      id: 12,
      title: "Top Movies @ Mar 25",
      client: "Movies with DCLT",
      description: "A elegant red and black minimalist tiktok thumbnail",
      image: "/assets/Designs/Red And Black Minimalist Mystery Movie Poster.png",
      tools: ["canva"],
      year: "2025",
      type: "image"
    },

    {
      id: 13,
      title: "Coming Soon - Trinity Showdown",
      client: "Trinity Showdown - Rotaract UOM",
      description: "A green and black themed coming soon flyer",
      image: "/assets/Designs/Trinity ShowDown Coming Soon-0602.png",
      tools: ["canva"],
      year: "2025",
      type: "image"
    },

    {
      id: 14,
      title: "Registration Open Now",
      client: "Trinity Showdown - Rotaract UOM",
      description: "A registration open now flyer",
      image: "/assets/Designs/Trinity ShowDown.png",
      tools: ["canva",'Adobe Photoshop'],
      year: "2025",
      type: "image"
    },

    {
      id: 15,
      title: "Christmas Flyer 2025",
      client: "Rotaract UOM",
      description: "Christmas Flyer Design",
      image: "/assets/Designs/Christmas - rotaract.png",
      tools: ["canva"],
      year: "2025",
      type: "image"
    },
    {
      id: 16,
      title: "PUBG - Rule Booklet",
      client: "Trinity Showdown - Rotaract UOM",
      description: "A cover page of booklet containing rules of PUBG game",
      image: "/assets/Designs/4.png",
      tools : ["canva",'Adobe Photoshop'],
      year: "2025",
      type: "image"
    },
    {
      id: 17,
      title: "Mobile Legendes - Rule Booklet",
      client: "Trinity Showdown - Rotaract UOM",
      description: "A cover page of booklet containing rules of Mobile Legendes game",
      image: "/assets/Designs/6.png",
      tools : ["canva",'Adobe Photoshop'],
      year: "2025",
      type: "image"
    }
    ,
    {
      id: 18,
      title: "Call of Duty Mobile - Rule Booklet",
      client: "Trinity Showdown - Rotaract UOM",
      description: "A cover page of booklet containing rules of Call of Duty Mobile game",
      image: "/assets/Designs/6.png",
      tools : ["canva",'Adobe Photoshop'],
      year: "2025",
      type: "image"
    }
    ,
    {
      id: 19,
      title: "Organizing Committee Submission Flyer",
      client: "Beyond the Frame - Rotaract UOM",
      description: "An attractive flyer to invite people to join the organizing committee",
      image: "/assets/Designs/OC Flyers.png",
      tools : ["canva",'Adobe Photoshop'],
      year: "2025",
      type: "image"
    }
  ];

  // Enhanced skills with proficiency levels
  const skills = {
    Programming: [
      { name: "Python", level: 95 },
      { name: "C", level: 85 },
      { name: "C++", level: 90 },
      { name: "Java", level: 90 },
      { name: "Dart", level: 80 }
    ],
    Softwares: [
      { name: "Adobe Photoshop", level: 85 },
      { name: "Premiere Pro", level: 90 },
      { name: "Adobe Illustrator", level: 95 },
      { name: "Corel Draw ", level: 90 },
      { name: "Canva", level: 95 }
    ],
    frontend: [
      { name: "React", level: 75 },
      { name: "HTML", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "CSS", level: 90 }
    ],
    backend: [
      { name: "Node.js", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 85 },
      { name: "REST APIs", level: 90 }
    ],
    database: [
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 85 }
    ],
    tools: [
      { name: "Flutter", level: 85 },
      { name: "Dart", level: 80 },
      { name: "Git", level: 95 },
      { name: "Vs Code", level: 95 },
      { name: "ubuntu", level: 85 },
      { name: "Figma", level: 85 },
    ]
  };

  // Experience data
  const experiences = [
    {
      title: "Public Relations Committee Member",
      company: "CSE Student Socity of University of Moratuwa",
      logo: "/assets/Logoes/csess.jpg",
      period: "2025 Nov - Present",
      location: "Moratuwa, Sri Lanka",
      description: "a member of an excellent team in creatng elegant, scalable grpahic Designs.",
    },
    {
      title: "PR Team Member",
      company: "Rotaract Club of University of Moratuwa",
      logo: "/assets/Logoes/Rota.jpg",
      period: "2025 Aug - Present",
      location: "Moratuwa, Sri Lanka",
      description: "a member of an excellent team in creatng elegant, scalable grpahic Designs.",
    },
    {
      title: "Member of Marketing Pillar",
      company: "IESL Student Chapter UOM",
      logo: "/assets/Logoes/iesl.jpg",
      period: "2025 Sep - Present",
      location: "Moratuwa, Sri Lanka",
      description: "a member of an excellent team in creatng elegant, scalable grpahic Designs.",

    },

    {
      title: "Member",
      company: "Maths Society, University of Moratuwa",
      logo: "/assets/Logoes/maths.png",
      period: "2024- Present",
      location: "Moratuwa, Sri Lanka",
      description: "",
    },
    {
      title: "Member",
      company: " General Knowledge Society, Dharmasoka College, Ambalangoda, Sri Lanka",
      logo: "/assets/Logoes/school.jpeg",
      period: "2018- 2021",
      location: "Ambalangoda, Sri Lanka",
      description: "",
    }

  ];

  // Volunteering data
  const volunteering = [
    {
      eventName: "GAMMADDATA IEEE API 4.0",
      position: "OC Member - Technical Committee",
      organizer: "IEEE of University of Moratuwa",
      date: "2025 Sep",
      logo: "/assets/Logoes/IEEE.jpeg",
      category: "Education and Technology"
    },
    {
      eventName: "Trinity ShowDown",
      position: "OC Member - Flyer Designing Committee",
      organizer: "Rotaract Club of University of Moratuwa",
      date: "2025 Dec",
      logo: "/assets/Logoes/Rota.jpg",
      category: "Gaming & Entertainment"
    },

    {
      eventName: "Binara Padura 25",
      position: "OC Member - Flyer Design Committee",
      organizer: "Rotaract Club of University of Moratuwa",
      date: "2025 Jul",
      logo: "/assets/Logoes/Rota.jpg",
      category: "Music & Entertainment"
    },
    {
      eventName: "Bot Talk 3.0",
      position: "Design & Marketing Committee Member",
      organizer: "IEEE RAS of University of Moratuwa",
      date: "2025 Oct",
      logo: "/assets/Logoes/RAS.png",
      category: "Science & Technology"
    },
    {
      eventName: "Open Hearts",
      position: "Flyer Designing & Video Editing Committee Member",
      organizer: "Rotaract Club of University of Moratuwa",
      date: "2025 Sep",
      logo: "/assets/Logoes/Rota.jpg",
      category: "Health"
    },

    {
      eventName: "Beyond the Frame",
      position: "Chair Person",
      organizer: "Rotaract Club of University of Moratuwa",
      date: "2025 Dec",
      logo: "/assets/Logoes/Rota.jpg",
      category: "Photography"
    }
  ];

  // Education data
  const education = [
    {
      degree: "Bachelor of Science Engineering(Hons)",
      institution: "University of Moratuwa, Sri Lanka",
      period: "2022 - present",
      gpa: "3.85/4.0",
      specialization: "Computer Science & Engineering"
    },
    {
      degree: "Secondary Education",
      institution: "G/ Dharmasoka College, Ambalangoda",
      period: "2013 - 2021",
      gpa: "2.8333",
      specialization: "Ordinary and Advanced Level"
    },
    {
      degree: "Primary Education",
      institution: "G/ Devananda College, Ambalangoda",
      period: "2007 - 2013",
      gpa: "",
      specialization: ""
    }
  ];

  // Certifications
  const certifications = [
    {
      name: "AgentX Bootcamp",
      issuer: "UoM Leos",
      logo: "/assets/Logoes/leo.jpeg",
      date: "2025",
      credentialId: ""
    },
    {
      name: "AI/ML Engineer - stage I",
      issuer: "SLIIT Faculty of Computing",
      logo: "/assets/Logoes/SLIIT.png",
      date: "2025",
      credentialId: "d3teugocul"
    },
    {
      name: "Fundermentals of Accerlerated Data Science",
      issuer: "NVIDIA",
      logo: "/assets/Logoes/nvidia.jpg",
      date: "2025 Dec",
      credentialId: "P7Hq1rEUS6OwvnVGGaNDow"
    },
    {
      name: "5 Day AI Agents Intensive course with Google",
      issuer: "Kaggle",
      logo: "/assets/Logoes/kaggle.png",
      Date: "2025 Dec",
      credentialId: ""
    },
    {
      name: "Python for Beginners",
      issuer: "Department of Computer Science & Engineering, University of Moratuwa",
      logo: "/assets/Logoes/cse_logo.png",
      date: "2023",
      credentialId: "iY4PHJGxqy"
    },
    {
      name: "Program Solving (Solve)",
      issuer: "HackerRank",
      date: "2025",
      logo: "/assets/Logoes/hackerrank-logo.jpg",
      credentialId: "2cada0a0c6e9"
    },
    {
      name: "AI in Data Analysis",
      issuer: "Sololearn",
      date: "2025",
      logo: "/assets/Logoes/sololearn.jpg",
      credentialId: "CC-LSNVYKQJ"
    },
    {
      name: "ML for beginners",
      issuer: "Sololearn",
      date: "2025",
      logo: "/assets/Logoes/sololearn.jpg",
      credentialId: "CC-QAVQM7IU"
    },
    {
      name: "Java Intermediate",
      issuer: "Sololearn",
      date: "2025",
      logo: "/assets/Logoes/sololearn.jpg",
      credentialId: "CC-6ZVSJRR8"
    },
    {
      name: "Introduction for C++",
      issuer: "Sololearn",
      logo: "/assets/Logoes/sololearn.jpg",
      date: "2024",
      credentialId: "CC-LD2L040J"
    },
    {
      name: "Introduction for Java",
      issuer: "Sololearn",
      logo: "/assets/Logoes/sololearn.jpg",
      date: "2024",
      credentialId: "CC-XYUXO4XP"
    },
    {
      name: "Data Visualization with Python",
      issuer: "Kaggle",
      logo: "/assets/Logoes/kaggle.png",
      date: "2025 Dec",
      credentialId: "CC-XYUXO4XP"
    },
    {
      name: "Feature Engineering",
      issuer: "Kaggle",
      logo: "/assets/Logoes/kaggle.png",
      date: "2025 Dec",
      credentialId: "CC-XYUXO4XP"
    },
    {
      name: "Intro to Machine Learning",
      issuer: "Kaggle",
      logo: "/assets/Logoes/kaggle.png",
      date: "2025 Dec",
      credentialId: "CC-XYUXO4XP"
    },
    {
      name: "Pandas",
      issuer: "Kaggle",
      logo: "/assets/Logoes/kaggle.png",
      date: "2025 Dec",
      credentialId: "CC-XYUXO4XP"
    },
    {
      name: "Intermediate ML",
      issuer: "Kaggle",
      logo: "/assets/Logoes/kaggle.png",
      date: "2025 Dec",
      credentialId: "CC-XYUXO4XP"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "https://drive.google.com/uc?export=download&id=1g5iK4EE1rtZm5fzQuncJ9fbeugCbbQs-";
    link.setAttribute("download", "My_CV.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewCV = () => {
    window.open(
      "https://drive.google.com/file/d/1g5iK4EE1rtZm5fzQuncJ9fbeugCbbQs-/view?usp=sharing",
      "_blank"
    );
  };


  const renderHomePage = () => (
    <div className="pt-20 sm:pt-24">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white px-4 sm:px-0">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Profile Image - Show on mobile first */}
            <div className="flex justify-center lg:justify-end lg:order-2 relative">
              <div className="relative inline-block">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
                  <img
                    src={process.env.PUBLIC_URL + "/assets/dp_crop.jpg"}
                    alt="Lakmana Thabrew"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-0 right-0 sm:top-2 sm:right-2 lg:top-4 lg:right-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg z-10">
                  <Code className="text-yellow-800" size={16} />
                </div>
                <div className="absolute bottom-0 left-0 sm:bottom-2 sm:left-2 lg:bottom-4 lg:left-4 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-green-400 rounded-full flex items-center justify-center shadow-lg z-10">
                  <Database className="text-green-800" size={14} />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center lg:text-left lg:order-1 lg:pr-8">
              <div></div>
              <div className="inline-flex items-center bg-blue-600/20 rounded-full px-3 py-2 sm:px-4 sm:py-2 mb-4 sm:mb-6">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-xs sm:text-sm lg:text-base">Available for Everything Belongs to My Path</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                {personalInfo.name}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-200 mb-3 sm:mb-4">
                {personalInfo.title_1} <br /> {personalInfo.title_2}
              </p>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-200 mb-3 sm:mb-4">
                {personalInfo.title_3}
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8">
                {personalInfo.subtitle_1} <br /> {personalInfo.subtitle_2}
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-400 mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0">
                {personalInfo.bio}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center lg:justify-start">
                <button
                  onClick={() => setCurrentPage('projects')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base lg:text-lg"
                >
                  View My Work <ChevronRight size={20} />
                </button>
                <button
                  onClick={handleDownloadCV}
                  className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-sm sm:text-base lg:text-lg"
                >
                  <Download size={20} /> Download CV
                </button>
              </div>
              <div className="flex gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-10 lg:mt-12 justify-center lg:justify-start">
                <a href={personalInfo.whatsApp} className="text-gray-300 hover:text-white transition-colors transform hover:scale-110">
                  <MessageCircle size={24} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                </a>
                <a href={personalInfo.github} className="text-gray-300 hover:text-white transition-colors transform hover:scale-110">
                  <Github size={24} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                </a>
                <a href={personalInfo.linkedin} className="text-gray-300 hover:text-white transition-colors transform hover:scale-110">
                  <Linkedin size={24} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                </a>
                <a href={`mailto:${personalInfo.email}`} className="text-gray-300 hover:text-white transition-colors transform hover:scale-110">
                  <Mail size={24} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                </a>
                <a href={personalInfo.facebook} className="text-gray-300 hover:text-white transition-colors transform hover:scale-110">
                  <FacebookIcon size={24} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                </a>
                <a href={personalInfo.instagram} className="text-gray-300 hover:text-white transition-colors transform hover:scale-110">
                  <InstagramIcon size={24} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">10+</div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Projects Completed</div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">1+</div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Years Experience</div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">10+</div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Technologies</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderProjectsPage = () => (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">My Projects</h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here's a showcase of some of my recent work. Each project represents a unique challenge
            and demonstrates different aspects of my technical expertise.
          </p>
        </div>

        <div className="grid gap-8 sm:gap-10 lg:gap-12">
          {projects.map((project, index) => (
            <div key={project.id} className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:flex transition-colors duration-300`}>
              <div className="lg:w-1/2">
                <img
                  src={process.env.PUBLIC_URL + project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-64 lg:h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-4 sm:p-6 lg:p-8 xl:p-12">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3 sm:mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    {project.category}
                  </span>
                  <span className="text-gray-500 text-sm">• {project.year}</span>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">{project.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">
                  {project.longDescription}
                </p>

                <div className="mb-4 sm:mb-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 text-sm sm:text-base">Key Features:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6 sm:mb-8">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 text-sm sm:text-base">Technologies Used:</h3>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href={project.liveUrl}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <Globe size={16} className="sm:w-4 sm:h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <Github size={16} className="sm:w-4 sm:h-4" />
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
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">My Creative Design Work</h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of my graphic design projects showcasing creativity, attention to detail,
            and design problem-solving across various mediums and industries.
          </p>
        </div>

        {/* Design Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {graphicDesigns.map((design) => (
            <div
              key={design.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <div className="relative overflow-hidden">
                  <div className="relative overflow-hidden flex items-center justify-center bg-gray-100">
                    {design.type === "image" ? (
                      <img
                        src={process.env.PUBLIC_URL + design.image}
                        alt={design.title}
                        className="w-full h-64 object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <video
                        src={process.env.PUBLIC_URL + design.image}
                        className="w-full h-64 object-contain transition-transform duration-500 group-hover:scale-105"
                        autoPlay
                        loop
                        muted
                        playsInline
                        alt={design.title}
                      />
                    )}
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                      </div>
                      <button
                        onClick={() => openModal(design)}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors flex items-center gap-2">
                        <ExternalLink size={16} />
                        View Design
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors flex-1">
                    {design.title}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-2 flex-shrink-0">{design.year}</span>
                </div>

                <p className="text-purple-600 dark:text-purple-400 font-semibold text-sm mb-3">
                  {design.client}
                </p>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {design.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {design.tools.map((tool) => (
                    <span
                      key={tool}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-md text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && selectedDesign && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <div
              className="relative max-w-6xl max-h-[90vh] w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
              >
                <X size={24} />
              </button>

              {/* Design Info */}
              <div className="absolute -top-16 left-0 text-white mb-4">
                <h3 className="text-xl font-bold">{selectedDesign.title}</h3>
                <p className="text-gray-300">{selectedDesign.client} • {selectedDesign.year}</p>
              </div>

              <div className="flex items-center justify-center bg-white rounded-lg overflow-hidden shadow-2xl">
                {selectedDesign.type === "video" ? (
                  <video
                    src={process.env.PUBLIC_URL + selectedDesign.image}
                    controls
                    autoPlay
                    className="max-h-[90vh] w-full object-contain"
                  />
                ) : (
                  <img
                    src={process.env.PUBLIC_URL + selectedDesign.image}
                    alt={selectedDesign.title}
                    className="max-h-[90vh] w-full object-contain"
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderAboutPage = () => (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 min-h-screen dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">About Me</h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get to know the person behind the code. My journey, experiences, and what drives my passion for development.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 xl:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 mb-12 sm:mb-16 lg:mb-20">
          <div className="lg:col-span-2 xl:col-span-1">
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-6 sm:p-8 lg:p-10 text-white mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6"><i>My Journey in Computer Science & Engineering</i></h2>
              <div>
                <h3 className="text-xl font-bold mb-6">The Spark That Started It All</h3>
                <p className="text-lg text-justify leading-relaxed mb-6">
                  My journey began at age 16 with a broken laptop everyone had given up on. After three days of YouTube tutorials and forums, I successfully recovered the corrupted hard drive. That moment of triumph ignited a passion that would define my path.
                </p>

                <h3 className="text-xl font-bold mb-6">From Curiosity to Competence</h3>
                <p className="text-lg text-justify leading-relaxed mb-6">
                  As a Second-year Computer Science student at University of Moratuwa, Sri Lanka, I've built solid foundations through coursework and hands-on projects.
                </p>

                <h3 className="text-xl font-bold mb-6">Embracing Challenges</h3>
                <p className="text-lg text-justify leading-relaxed mb-6">
                  My growth accelerated during my past two years, navigating legacy code with minimal documentation. This taught me "code archaeology" and I optimized their data pipeline by 40%, learning that elegant solutions come from deep problem understanding.
                </p>

                <h3 className="text-xl font-bold mb-6">Beyond the Code</h3>
                <p className="text-lg text-justify leading-relaxed mb-6">
                  I'm driven by technology's impact on people's lives—from campus systems saving organizers hours to mobile apps helping local businesses. As a teaching assistant for Introduction to Programming, I've learned that clear communication is as crucial as coding skills.
                </p>

                <h3 className="text-xl font-bold mb-6">Looking Forward</h3>
                <p className="text-lg text-justify leading-relaxed mb-6">
                  Preparing for my next two year, I'm excited about AI and user experience intersection. I'm exploring how machine learning can create intuitive interfaces and make AI tools accessible to non-technical users. I seek opportunities to grow as both a technical problem-solver and collaborative team member.
                </p>

                <h3 className="text-xl font-bold mb-6">Core Values</h3>
                <p className="text-lg text-justify leading-relaxed mb-6">
                  <strong>Continuous Learning:</strong> Embracing rapid technological evolution while building strong fundamentals.<br />
                  <strong>User-Centric Thinking:</strong> Creating solutions that genuinely improve people's experiences.<br />
                  <strong>Collaborative Growth:</strong> My best work happens through learning from others and team contribution.
                </p>

                <h3 className="text-xl font-bold mb-6">"The best way to predict the future is to create it. I'm excited to be part of building tomorrow's technological solutions."</h3>
              </div>

              <div className="grid grid-cols-1 gap-4 mt-8">
                <div className="flex items-center">
                  <MapPin size={20} className="mr-2 flex-shrink-0" />
                  <span className="text-sm sm:text-base">{personalInfo.location}</span>
                </div>
                <div className="flex items-center">
                  <Mail size={20} className="mr-2 flex-shrink-0" />
                  <span className="truncate text-sm sm:text-base">{personalInfo.email}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">Skills & Expertise</h2>
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 capitalize flex items-center">
                  {category === 'Programming' && <Languages className="mr-2" size={24} />}
                  {category === 'frontend' && <Smartphone className="mr-2" size={24} />}
                  {category === 'backend' && <Code className="mr-2" size={24} />}
                  {category === 'database' && <Database className="mr-2" size={24} />}
                  {category === 'tools' && <Gavel className="mr-2" size={24} />}
                  {category === 'Softwares' && <Settings className="mr-2" size={24} />}
                  {category}
                </h3>
                <div className="space-y-3">
                  {skillList.slice(0, 10).map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
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
      </div >
    </div >
  );

  const renderCVPage1 = () => (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-20 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 lg:p-12 transition-colors duration-300">
          {/* CV Header */}
          <div className="text-center border-b dark:border-gray-700 pb-8 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{personalInfo.name}</h1>
            <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">{personalInfo.title_1}<br></br>{personalInfo.title_2}<br></br>{personalInfo.title_3}</p>
            <div className="flex flex-wrap justify-center gap-6 text-gray-600 dark:text-gray-300">
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
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleViewCV}
                className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 mx-auto"
              >
                <SearchIcon size={18} />
                View PDF Version
              </button>
              <button
                onClick={handleDownloadCV}
                className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 mx-auto"
              >
                <Download size={18} />
                Download PDF Version
              </button>
            </div>
          </div>

          {/* Professional Summary */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <User className="mr-2" size={24} />
              Professional Summary
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              {personalInfo.bio}
            </p>
          </section>

          {/* Education */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <GraduationCapIcon className="mr-2" size={24} />
              Education
            </h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-blue-200 dark:border-blue-600">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">{edu.institution}</p>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mt-1">
                      <Calendar size={16} className="mr-2" />
                      <span className="mr-4">{edu.period}</span>
                      <MapPin size={16} className="mr-2" />
                      <span>{edu.gpa}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{edu.specialization}</p>
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
                <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 transition-colors duration-300 flex gap-4 items-center">
                  {cert.logo && (
                    <div className="w-16 h-16 flex items-center justify-center bg-white/60 dark:bg-gray-800/50 rounded-md p-1 flex-shrink-0">
                      <img src={process.env.PUBLIC_URL + cert.logo} alt={cert.issuer} className="max-w-full max-h-full object-contain" />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white">{cert.name}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">{cert.issuer}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Issued: {cert.date}</p>
                    <p className="text-gray-500 dark:text-gray-500 text-xs">ID: {cert.credentialId}</p>
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
                  <h3 className="font-bold text-gray-900 dark:text-white mb-3 capitalize">{category}</h3>
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

  const renderCVPage2 = () => (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-20 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 lg:p-12 transition-colors duration-300">
          {/* CV Header */}
          <div className="text-center border-b dark:border-gray-700 pb-8 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{personalInfo.name}</h1>
            <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">{personalInfo.title_1}<br></br>{personalInfo.title_2}<br></br>{personalInfo.title_3}</p>
            <div className="flex flex-wrap justify-center gap-6 text-gray-600 dark:text-gray-300">
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
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleViewCV}
                className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 mx-auto"
              >
                <SearchIcon size={18} />
                View PDF Version
              </button>
              <button
                onClick={handleDownloadCV}
                className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 mx-auto"
              >
                <Download size={18} />
                Download PDF Version
              </button>
            </div>
          </div>

          {/* Experiences */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <FileText className="mr-2" size={24} />
              Experiences
            </h2>
            <div className="space-y-6">
              {experiences.map((vol, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 transition-colors duration-300 flex gap-4 items-start">
                  {vol.logo && (
                    <img
                      src={process.env.PUBLIC_URL + vol.logo}
                      alt={vol.company}
                      className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{vol.title}</h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">{vol.company}</p>
                    <div className="flex items-center justify-between text-gray-600 dark:text-gray-400 mt-2">
                      <span>{vol.period}</span>
                      <span>{vol.location}</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">Description: {vol.description}</p>
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
                <div key={idx} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 flex gap-4 items-start transition-colors duration-300">
                  <img
                    src={process.env.PUBLIC_URL + v.logo}
                    alt={v.organizer}
                    className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{v.eventName}</h3>
                        <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">{v.position} • {v.organizer}</p>
                      </div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm">
                        <span>{v.date}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">Category: <span className="font-medium">{v.category}</span></p>
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
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Let's Connect</h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="text-gray-900 dark:text-gray-100">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Get In Touch</h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 leading-relaxed">
              I'm always interested in hearing about new opportunities, interesting projects,
              or just having a conversation about technology and development. Feel free to reach out!
            </p>

            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-center">
                <div className="bg-blue-600 dark:bg-blue-500 rounded-full p-3 sm:p-4 mr-4 sm:mr-6 flex-shrink-0">
                  <Mail size={20} className="sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-base sm:text-lg mb-1">Email</h3>
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
                  <h3 className="font-semibold text-gray-900 dark:text-white text-base sm:text-lg mb-1">Phone</h3>
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
                  <MapPin size={20} className="sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-base sm:text-lg mb-1">Location</h3>
                  <p className="text-blue-600 dark:text-blue-400 text-sm sm:text-base">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-12">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Follow Me</h3>
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
                  href={`mailto:${personalInfo.email}`}
                  className="bg-red-600 hover:bg-red-700 p-4 rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
                  title="Email"
                >
                  <Mail size={24} className="text-white" />
                </a>
                <a
                  href={personalInfo.whatsApp}
                  className="bg-green-500 hover:bg-green-700 p-4 rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
                  title="WhatsApp"
                >
                  <MessageCircle size={24} className="text-white" />
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
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send me a message</h3>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
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
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/98 dark:bg-gray-900/98 backdrop-blur-md shadow-lg' : 'bg-black/30 backdrop-blur-sm shadow-md'
      }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button
            onClick={() => setCurrentPage('home')}
            className={`text-xl sm:text-2xl font-bold transition-colors ${isScrolled || currentPage !== 'home' ? 'text-blue-600 dark:text-blue-400' : 'text-white drop-shadow-lg'
              }`}
          >
            {personalInfo.name}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {[
              { id: 'home', label: 'Home', icon: Home },
              { id: 'about', label: 'About', icon: User },
              { id: 'projects', label: 'Projects', icon: Briefcase },
              { id: 'designs', label: 'Designs', icon: PenTool },
              { id: 'cv1', label: 'Education', icon: FileText },
              { id: 'cv2', label: 'Exper&Volunt', icon: FileText },
              { id: 'contact', label: 'Contact', icon: Phone }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setCurrentPage(id)}
                className={`flex items-center gap-2 px-3 sm:px-4 lg:px-5 py-2 rounded-lg font-medium transition-all text-sm sm:text-base ${currentPage === id
                  ? 'bg-blue-600 text-white shadow-md'
                  : isScrolled || currentPage !== 'home'
                    ? 'text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                    : 'text-white drop-shadow-lg hover:text-blue-200 hover:bg-white/20'
                  }`}
              >
                <Icon size={18} />
                {label}
              </button>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-all ${isScrolled || currentPage !== 'home'
                ? 'text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                : 'text-white drop-shadow-lg hover:text-blue-200 hover:bg-white/20'
                }`}
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button and Dark Mode */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Dark Mode Toggle for Mobile */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-all ${isScrolled || currentPage !== 'home'
                ? 'text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                : 'text-white drop-shadow-lg hover:text-blue-200 hover:bg-white/20'
                }`}
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Menu Toggle Button */}
            <button
              className={`transition-colors ${isScrolled || currentPage !== 'home' ? 'text-gray-900 dark:text-gray-100' : 'text-white drop-shadow-lg'
                }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 border-t dark:border-gray-700 shadow-lg">
            {[
              { id: 'home', label: 'Home', icon: Home },
              { id: 'about', label: 'About', icon: User },
              { id: 'projects', label: 'Projects', icon: Briefcase },
              { id: 'designs', label: 'Designs', icon: PenTool },
              { id: 'cv1', label: 'Education', icon: FileText },
              { id: 'cv2', label: 'Exper&Volunt', icon: FileText },
              { id: 'contact', label: 'Contact', icon: Phone }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => {
                  setCurrentPage(id);
                  setIsMenuOpen(false);
                }}
                className={`flex items-center gap-3 w-full px-4 sm:px-6 py-3 sm:py-4 text-left font-medium transition-colors ${currentPage === id
                  ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 border-r-4 border-blue-600 dark:border-blue-400'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700'
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
      case 'designs':
        return renderDesignsPage();
      case 'cv1':
        return renderCVPage1();
      case 'cv2':
        return renderCVPage2();
      case 'contact':
        return renderContactPage();
      default:
        return renderHomePage();
    }
  };

  return (
    <div className="min-h-screen dark:bg-gray-900 transition-colors duration-300">
      {renderNavigation()}
      {renderCurrentPage()}

      {/* Main Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-white border-t border-gray-700 dark:border-gray-600 py-12 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-xl font-bold mb-4">{personalInfo.name}</h3>
              <p className="text-gray-300 dark:text-gray-400 mb-4">{personalInfo.title_1}</p>
              <p className="text-gray-400 dark:text-gray-500 text-sm">
                Passionate about creating innovative solutions and bringing ideas to life through code and design.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'About' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'designs', label: 'Designs' },
                  { id: 'cv1', label: 'CV — Education' },
                  { id: 'cv2', label: 'CV — Experience' },
                  { id: 'contact', label: 'Contact' }
                ].map(({ id, label }) => (
                  <li key={id}>
                    <button
                      onClick={() => setCurrentPage(id)}
                      className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media & Contact */}
            <div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <div className="grid grid-cols-3 gap-3 mb-4">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 p-3 rounded-lg text-white hover:bg-purple-700 transition-colors flex items-center justify-center"
                  title="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 p-3 rounded-lg text-white hover:bg-purple-700 transition-colors flex items-center justify-center"
                  title="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={personalInfo.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 p-3 rounded-lg text-white hover:bg-purple-700 transition-colors flex items-center justify-center"
                  title="Facebook"
                >
                  <FacebookIcon size={20} />
                </a>
                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 p-3 rounded-lg text-white hover:bg-purple-700 transition-colors flex items-center justify-center"
                  title="Instagram"
                >
                  <InstagramIcon size={20} />
                </a>
                <a
                  href={personalInfo.whatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 p-3 rounded-lg text-white hover:bg-purple-700 transition-colors flex items-center justify-center"
                  title="WhatsApp"
                >
                  <MessageCircle size={20} />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="bg-purple-600 p-3 rounded-lg text-white hover:bg-purple-700 transition-colors flex items-center justify-center"
                  title="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
              <p className="text-gray-400 text-sm">
                <MapPin size={16} className="inline mr-1" />
                {personalInfo.location}
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 dark:border-gray-600 mt-8 pt-8 text-center">
            <p className="text-gray-400 dark:text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Contact Footer - Only shown on Contact Page */}
      {currentPage === 'contact' && (
        <footer className="bg-gray-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl text-center font-bold mb-4">{personalInfo.name}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <UniversityIcon size={20} />
                  <p className="text-gray-400">{personalInfo.title_1 + " @ UoM"}</p>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={20} />
                  <p className="text-gray-400">{personalInfo.location}</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-center">Connect</h3>
                <div className="grid md:grid-cols-6 gap-8 text-center">
                  <a
                    href={personalInfo.whatsApp}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <MessageCircle size={24} />
                  </a>
                  <a
                    href={personalInfo.github}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Mail size={24} />
                  </a>
                  <a
                    href={personalInfo.facebook}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <FacebookIcon size={24} />
                  </a>
                  <a
                    href={personalInfo.instagram}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <InstagramIcon size={24} />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 {personalInfo.name}. All rights reserved.</p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Portfolio;