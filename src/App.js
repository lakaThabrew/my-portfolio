import React, { useState, useEffect } from 'react';
import {
  User, Home, Briefcase, PenTool, FileText, Phone,
  Award
} from 'lucide-react';

import HomePage from './components/HomePage.jsx';
import ProjectPage from './components/ProjectPage.jsx';
import DesignPage from './components/DesignPage.jsx';
import AboutPage from './components/AboutPage.jsx';
import EducationPage from './components/EducationPage.jsx';
import ExperiencePage from './components/ExperiencePage.jsx';
import ContactPage from './components/ContactPage.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';

// Import data from data files
import {
  personalInfo,
  projects,
  graphicDesigns,
  skills,
  experiences,
  volunteering,
  education,
  certifications
} from './data';

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
      closeModal={closeModal} />
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
    <ExperiencePage
      experiences={experiences}
      volunteering={volunteering}
    />
  );

  const renderContactPage = () => (
    <ContactPage
      personalInfo={personalInfo}
      contactFirstName={contactFirstName}
      setContactFirstName={setContactFirstName}
      contactLastName={contactLastName}
      setContactLastName={setContactLastName}
      contactEmail={contactEmail}
      setContactEmail={setContactEmail}
      contactSubject={contactSubject}
      setContactSubject={setContactSubject}
      contactMessage={contactMessage}
      setContactMessage={setContactMessage}
      handleContactSubmit={handleContactSubmit}
      isSending={isSending}
      contactStatus={contactStatus}
    />
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
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md' : 'bg-white/90 dark:bg-gray-900/90'}`}>
        <NavBar personalInfo={personalInfo}
          navItems={navItems}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen} />
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
    <Footer
      personalInfo={personalInfo}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      renderNavigation={renderNavigation}
      renderCurrentPage={renderCurrentPage} />
  );
};

export default Portfolio;