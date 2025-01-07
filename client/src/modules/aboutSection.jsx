import React from 'react';
import { SimpleGrid, Box } from '@chakra-ui/react';

const AboutSection = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 1 }} spacing={2} margin={2.5} minH={'100vh'}>
      <Box bg='gray'></Box>
    </SimpleGrid>
  );
};

export default AboutSection;
