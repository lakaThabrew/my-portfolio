import React from 'react';
import { render, screen } from '@testing-library/react';

// Import components
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ProjectPage from './ProjectPage';
import EducationPage from './EducationPage';
import ExperiencePage from './ExperiencePage';
import ContactPage from './ContactPage';
import NavBar from './NavBar';
import Footer from './Footer';

// Import Mock Data
import { 
  personalInfo, 
  projects, 
  skills, 
  education, 
  certifications, 
  experiences, 
  volunteering, 
  achievements, 
  publications 
} from '../data';

describe('UI Components Rendering Tests', () => {

  test('HomePage renders correctly', () => {
    const { container } = render(<HomePage personalInfo={personalInfo} setCurrentPage={jest.fn()} handleDownloadCV={jest.fn()} handleViewCV={jest.fn()} />);
    expect(container).toBeTruthy();
  });

  test('AboutPage renders correctly', () => {
    const { container } = render(<AboutPage personalInfo={personalInfo} skills={skills} />);
    expect(container).toBeTruthy();
    // Use a skill name which is likely rendered as a single text node
    expect(screen.getAllByText(new RegExp(skills.Programming[0].name, 'i')).length).toBeGreaterThan(0);
  });

  test('ProjectPage renders correctly and lists projects', () => {
    const { container } = render(<ProjectPage projects={projects} />);
    expect(container).toBeTruthy();
    expect(screen.getAllByText(new RegExp(projects[0].title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i')).length).toBeGreaterThan(0);
  });

  test('EducationPage renders correctly', () => {
    const { container } = render(<EducationPage skills={skills} education={education} certifications={certifications} personalInfo={personalInfo} />);
    expect(container).toBeTruthy();
    expect(screen.getAllByText(new RegExp(education[0].institution.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i')).length).toBeGreaterThan(0);
  });

  test('ExperiencePage renders correctly', () => {
    const { container } = render(<ExperiencePage experiences={experiences} volunteering={volunteering} achievements={achievements} publications={publications} />);
    expect(container).toBeTruthy();
    expect(screen.getAllByText(new RegExp(experiences[0].company.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i')).length).toBeGreaterThan(0);
  });

  test('ContactPage renders correctly', () => {
    const { container } = render(
      <ContactPage 
        personalInfo={personalInfo} 
        contactFirstName=""
        setContactFirstName={jest.fn()}
        contactLastName=""
        setContactLastName={jest.fn()}
        contactEmail=""
        setContactEmail={jest.fn()}
        contactSubject=""
        setContactSubject={jest.fn()}
        contactMessage=""
        setContactMessage={jest.fn()}
        handleContactSubmit={jest.fn()}
        isSending={false}
        contactStatus={null}
      />
    );
    expect(container).toBeTruthy();
    expect(screen.getAllByText(/Email/i).length).toBeGreaterThan(0);
  });

  test('NavBar renders correctly', () => {
    const navItems = [{ id: 'home', label: 'Home', icon: () => <svg /> }];
    const { container } = render(<NavBar personalInfo={personalInfo} navItems={navItems} currentPage="home" setCurrentPage={jest.fn()} isDarkMode={true} toggleDarkMode={jest.fn()} isMenuOpen={false} setIsMenuOpen={jest.fn()} />);
    expect(container).toBeTruthy();
    expect(screen.getAllByText(/Home/i).length).toBeGreaterThan(0);
  });

  test('Footer renders correctly', () => {
    const { container } = render(<Footer personalInfo={personalInfo} currentPage="home" setCurrentPage={jest.fn()} renderNavigation={() => null} renderCurrentPage={() => null} />);
    expect(container).toBeTruthy();
    expect(screen.getAllByText(new RegExp(personalInfo.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i')).length).toBeGreaterThan(0);
  });
});
