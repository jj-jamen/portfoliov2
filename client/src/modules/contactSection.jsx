import React from 'react';
import { SimpleGrid, Box } from '@chakra-ui/react';

const ContactSection = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 1 }} spacing={2} margin={2.5} minH={'100vh'} id='AboutSection'>
      <Box bg='teal'></Box>
    </SimpleGrid>
  );
};

export default ContactSection;
