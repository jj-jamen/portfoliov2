import React from 'react';
import Topnav from '../desktopComponents/topnav.jsx';
import AboutSection from '../desktopComponents/aboutSection.jsx';
import ProjectsSection from '../desktopComponents/projectsSection.jsx';
import ContactSection from '../desktopComponents/contactSection.jsx';
import JobsSection from '../desktopComponents/jobsSection.jsx';
import Maintenance from './maintenance.jsx';
import { Box } from '@chakra-ui/react';

const Home = () => {
  return (
    <>
      <Topnav />
      <Box>
        <Box id='AboutSection'>
          <AboutSection />
        </Box>
        <Box id='JobsSection'>
          <JobsSection />
        </Box>
        <Box id='ProjectsSection'>
          <ProjectsSection />
        </Box>
        <Box id='ContactSection'>
          <ContactSection />
        </Box>
        <Maintenance />
      </Box>
    </>
  );
};

export default Home;
