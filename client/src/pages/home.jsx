import React from 'react';
import Topnav from '../modules/topnav';
import AboutSection from '../modules/aboutSection';
import ProjectsSection from '../modules/projectsSection';
import ContactSection from '../modules/contactSection';

const Home = () => {
  return (
    <>
      <Topnav />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
};

export default Home;
