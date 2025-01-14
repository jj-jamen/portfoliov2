import React from 'react';
import Topnav from '../desktopComponents/topnav.jsx';
import AboutSection from '../desktopComponents/aboutSection.jsx';
import ProjectsSection from '../desktopComponents/projectsSection.jsx';
import ContactSection from '../desktopComponents/contactSection.jsx';
import JobsSection from '../desktopComponents/jobsSection.jsx';
import Maintenance from './maintenance.jsx';

const Home = () => {
  return (
    <>
      <Topnav />
      <AboutSection />
      <JobsSection />
      <ProjectsSection />
      <ContactSection />
      <Maintenance />
    </>
  );
};

export default Home;
