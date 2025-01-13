import React from 'react';
import Topnav from '../desktopComponents/topnav.jsx';
import AboutSection from '../desktopComponents/aboutSection.jsx';
import ProjectsSection from '../desktopComponents/projectsSection.jsx';
import ContactSection from '../desktopComponents/contactSection.jsx';
import JobsSection from '../desktopComponents/jobsSection.jsx';

const Home = () => {
  return (
    <>
      <Topnav />
      <AboutSection />
      <JobsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
};

export default Home;
