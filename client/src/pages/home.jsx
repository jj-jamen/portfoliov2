import React from 'react';
import Topnav from '../modules/topnav';
import AboutSection from '../modules/aboutSection';
import ProjectsSection from '../modules/projectsSection';
import ContactSection from '../modules/contactSection';
import JobsSection from '../modules/jobsSection';

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
