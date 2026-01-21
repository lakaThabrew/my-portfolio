import React, { useState, useEffect } from 'react';
import {
  Menu, X, Github, Linkedin, Mail, Download, WhatsApp, Eye,
  User, Home, Briefcase, PenTool, FileText, Phone, ChevronRight, Calendar,
  MapPin, Award, Code, Database, Globe, Smartphone,
  FacebookIcon, UniversityIcon, InstagramIcon, MessageCircle, ExternalLink,
  Languages, Gavel, Settings, GraduationCapIcon, SearchIcon, Sun, Moon
} from 'lucide-react';

import { FaWhatsapp } from "react-icons/fa";

import HomePage from './components/HomePage.jsx';
import ProjectPage from './components/ProjectPage.jsx';
import DesignPage from './components/DesignPage.jsx';
import AboutPage from './components/AboutPage.jsx';
import EducationPage from './components/EducationPage.jsx';

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  // Contact form state
  const [contactFirstName, setContactFirstName] = useState('');
  const [contactLastName, setContactLastName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [contactStatus, setContactStatus] = useState(null); // 'success' | 'error'

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

  // Contact form submit handler
  const handleContactSubmit = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setIsSending(true);
    setContactStatus(null);

    const payload = {
      firstName: contactFirstName,
      lastName: contactLastName,
      email: contactEmail,
      subject: contactSubject,
      message: contactMessage,
    };

    const endpoint = 'https://formspree.io/f/xvzogzyd';

    try {
      const isFormspree = endpoint.includes('formspree.io');
      const bodyToSend = isFormspree
        ? JSON.stringify({
          email: contactEmail,
          name: `${contactFirstName} ${contactLastName}`.trim(),
          subject: contactSubject,
          message: contactMessage,
        })
        : JSON.stringify(payload);

      const headers = isFormspree
        ? { 'Content-Type': 'application/json', Accept: 'application/json' }
        : { 'Content-Type': 'application/json' };

      const res = await fetch(endpoint, {
        method: 'POST',
        headers,
        body: bodyToSend,
      });

      // Formspree returns 200/201/202 on success; treat any ok status as success
      if (res.ok) {
        setContactStatus('success');
        setContactFirstName('');
        setContactLastName('');
        setContactEmail('');
        setContactSubject('');
        setContactMessage('');
      } else {
        // read error from response body if available
        let errorText = 'Failed to send message';
        try {
          const data = await res.json();
          if (data && data.error) errorText = data.error;
        } catch (e) { }
        console.error('Contact submit error:', res.status, errorText);
        setContactStatus('error');
      }
    } catch (err) {
      console.error('Contact submit exception:', err);
      setContactStatus('error');
    } finally {
      setIsSending(false);
    }
  }

  // Enhanced personal information
  const personalInfo = {
    name: "Lakmana Thabrew",
    title_1: "Undergraduate Student",
    title_2: "Computer Science and Engineering",
    title_3: "University of Moratuwa, Sri Lanka",
    subtitle_1: "Programmer | Grapic Designer | Web Developer | Kaggle Competitor",
    subtitle_2: "Mobile App Dev | Entrepreneur | AI Enthusiast | Content Creator",
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
      tools: ["canva", 'Adobe Photoshop'],
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
      tools: ["canva", 'Adobe Photoshop'],
      year: "2025",
      type: "image"
    },
    {
      id: 17,
      title: "Mobile Legendes - Rule Booklet",
      client: "Trinity Showdown - Rotaract UOM",
      description: "A cover page of booklet containing rules of Mobile Legendes game",
      image: "/assets/Designs/6.png",
      tools: ["canva", 'Adobe Photoshop'],
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
      tools: ["canva", 'Adobe Photoshop'],
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
      tools: ["canva", 'Adobe Photoshop'],
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
      company: "General Knowledge Society, Dharmasoka College, Ambalangoda, Sri Lanka",
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
      name: "Introduction of Cyber Security",
      issuer: "Cisco Networking Academy",
      logo: "/assets/Logoes/cisco.png",
      date: "2026 Jan",
      credentialId: ""
    },
    {
      name: "Introduction of Google Cloud Platform",
      issuer: "Simplilearn",
      logo: "/assets/Logoes/simplilearn.jpg",
      date: "2026 Jan",
      credentialId: "9736809"
    },
    {
      name: "AI/ML Engineer - stage 2",
      issuer: "SLIIT Faculty of Computing",
      logo: "/assets/Logoes/SLIIT.png",
      date: "2025",
      credentialId: "crzphhqzgk"
    },
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
    <HomePage personalInfo={personalInfo}
      setCurrentPage={setCurrentPage}
      handleDownloadCV={handleDownloadCV}
      handleViewCV={handleViewCV} />
  );

  const renderProjectsPage = () => (
    <ProjectPage projects={projects} />
  );

  const renderDesignsPage = () => (
    <DesignPage
      graphicDesigns={graphicDesigns}
      isModalOpen={isModalOpen}
      setSelectedDesign={setSelectedDesign}
      selectedDesign={selectedDesign}
      setIsModalOpen={setIsModalOpen}
      openModal={openModal}
      closeModal={closeModal}
      X={X} />
  );

  const renderAboutPage = () => (
    <AboutPage personalInfo={personalInfo} skills={skills} />
  );

  const renderCVPage1 = () => (
    <EducationPage
      skills={skills}
      education={education}
      certifications={certifications}
      personalInfo={personalInfo} />
  );

  const renderCVPage2 = () => (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-20 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 lg:p-12 transition-colors duration-300">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Experiences & Volunteering</h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A detailed overview of my professional experiences and volunteering activities that have shaped my career and personal growth.
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
                <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 transition-colors duration-300 flex gap-4 items-start">
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
                    loading="lazy"
                    decoding="async"
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
                  <FaWhatsapp size={20} className="sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-base sm:text-lg mb-1">WhatsApp</h3>
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
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
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
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
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
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
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
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  value={contactSubject}
                  onChange={(e) => setContactSubject(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
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
                  {isSending ? 'Sending...' : 'Send Message'}
                </button>
              </div>

              {contactStatus === 'success' && <div className="text-green-600 font-medium">Message sent — thank you! I will reply soon.</div>}
              {contactStatus === 'error' && <div className="text-red-600 font-medium">Failed to send message. Please try again or email directly.</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNavigation = () => {
    const navItems = [
      { id: 'home', label: 'Home', icon: Home },
      { id: 'about', label: 'About', icon: User },
      { id: 'projects', label: 'Projects', icon: Briefcase },
      { id: 'designs', label: 'Designs', icon: PenTool },
      { id: 'experience', label: 'Experience', icon: Award },
      { id: 'cv1', label: 'Education', icon: FileText },
      { id: 'contact', label: 'Contact', icon: Phone }
    ];

    return (
      <nav className={`fixed w-full z-50 transition-all duration-300 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md `}>
        <div className="mx-auto px-4 sm:px-6 lg:px-8 w-fit">
          <div className="flex items-center justify-between h-16">

            <div className="flex items-center">
              <button onClick={() => setCurrentPage('home')} className={`text-lg sm:text-xl font-bold transition-colors text-black dark:text-white px-10`}>
                {personalInfo.name}
              </button>
            </div>

            {/* Centered nav links (desktop) */}
            <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6">
              {navItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setCurrentPage(id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md font-medium transition ${currentPage === id ? 'bg-purple-600 text-white' : 'text-black dark:text-white'}`}
                >
                  <Icon size={16} />
                  <span className="hidden sm:inline">{label}</span>
                </button>
              ))}
            </div>

            {/* Actions (right) */}
            <div className="flex items-center space-x-2 px-10">
              <button onClick={toggleDarkMode} className={`p-2 rounded-lg transition-colors text-black dark:text-white`} title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-800 border-t dark:border-gray-700 shadow-lg">
              {navItems.map(({ id, label }) => (
                <button key={id} onClick={() => { setCurrentPage(id); setIsMenuOpen(false); }} className={`w-full text-left px-4 py-3 border-b dark:border-gray-700 ${currentPage === id ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600' : 'text-gray-700 dark:text-gray-200'}`}>
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
    );
  };

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
      case 'experience':
        return renderCVPage2();
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
      <footer className="bg-gray-800 dark:bg-gray-900 text-white border-t border-gray-700 dark:border-gray-600 py-10 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            {/* Left: Brand / About */}
            <div className="md:w-1/3">
              <h3 className="text-2xl font-bold mb-2">{personalInfo.name}</h3>
              <p className="text-gray-300 dark:text-gray-400 mb-3">{personalInfo.title_1}</p>
              <p className="text-gray-400 text-sm">Creating thoughtful products through design and code.</p>
            </div>

            {/* Center: Quick Links */}
            <div className="md:w-1/3">
              <h4 className="text-lg font-semibold mb-3 text-center">Quick Links</h4>
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'About' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'designs', label: 'Designs' },
                  { id: 'cv1', label: 'Education' },
                  { id: 'cv2', label: 'Experience' },
                  { id: 'contact', label: 'Contact' }
                ].map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => setCurrentPage(id)}
                    className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors text-sm px-2 py-1"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Socials & Contact */}
            <div className="md:w-1/3">
              <h4 className="text-lg font-semibold mb-3 text-center">Connect</h4>
              <div className="flex items-center gap-3 mb-4 justify-center">
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">
                  <Github size={20} />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">
                  <Linkedin size={20} />
                </a>
                <a href={personalInfo.facebook} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">
                  <FacebookIcon size={20} />
                </a>
                <a href={personalInfo.instagram} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">
                  <InstagramIcon size={20} />
                </a>
                <a href={personalInfo.whatsApp} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">
                  <FaWhatsapp size={20} />
                </a>
                <a href={`mailto:${personalInfo.email}`} className="text-gray-300 hover:text-white">
                  <Mail size={20} />
                </a>
              </div>
              <p className="text-gray-400 text-sm flex justify-center">
                <MapPin size={16} className="inline mr-1" />
                {personalInfo.location}
              </p>
            </div>
          </div>

          {/* Copyright / Bottom */}
          <div className="border-t border-gray-700 dark:border-gray-600 mt-8 pt-6 text-center">
            <p className="text-gray-400 dark:text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Contact Footer - Only shown on Contact Page */}
      {currentPage === 'contact' && (
        <footer className="bg-gray-900 text-white py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:justify-between gap-6">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-2">{personalInfo.name}</h3>
                <p className="text-gray-400 mb-2">{personalInfo.title_1 + ' @ UoM'}</p>
                <p className="text-gray-400 flex items-center"><MapPin size={16} className="mr-2" />{personalInfo.location}</p>
              </div>

              <div className="md:w-1/2 flex items-center md:justify-end">
                <div className="flex gap-4">
                  <a href={personalInfo.whatsApp} className="text-gray-400 hover:text-white">
                    <MessageCircle size={22} />
                  </a>
                  <a href={personalInfo.github} className="text-gray-400 hover:text-white">
                    <Github size={22} />
                  </a>
                  <a href={personalInfo.linkedin} className="text-gray-400 hover:text-white">
                    <Linkedin size={22} />
                  </a>
                  <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-white">
                    <Mail size={22} />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Portfolio;