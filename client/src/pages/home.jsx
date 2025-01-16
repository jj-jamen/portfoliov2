import React from 'react';
import Topnav from '../desktopComponents/topnav.jsx';
import AboutSection from '../desktopComponents/aboutSection.jsx';
import ProjectsSection from '../desktopComponents/projectsSection.jsx';
import ResourcesSection from '../desktopComponents/resourcesSection.jsx';
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
        <Box id='ResourcesSection' scrollSnapAlign='end'>
          <ResourcesSection />
        </Box>
        <Maintenance />
      </Box>
    </Box>
  );
};

export default Home;
