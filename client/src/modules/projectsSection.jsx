import React from 'react';
import { SimpleGrid, Box } from '@chakra-ui/react';

const ProjectsSection = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 1 }} spacing={2} margin={2.5} minH={'100vh'} id='ProjectsSection'>
      <Box bg='red'></Box>
    </SimpleGrid>
  );
};

export default ProjectsSection;
