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
    <Box>
      <Topnav />
      <Box>
        <Box id='AboutSection' scrollSnapAlign='end'>
          <AboutSection />
        </Box>
        <Box id='JobsSection' scrollSnapAlign='end'>
          <JobsSection />
        </Box>
        <Box id='ProjectsSection' scrollSnapAlign='end'>
          <ProjectsSection />
        </Box>
        <Box id='ContactSection' scrollSnapAlign='end'>
          <ContactSection />
        </Box>
        <Maintenance />
      </Box>
    </Box>
  );
};

export default Home;
