import React from 'react';
import Topnav from '../components/topnav';
import AboutSection from '../components/aboutSection';
import ProjectsSection from '../components/projectsSection';
import ContactSection from '../components/contactSection';
import JobsSection from '../components/jobsSection';

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
