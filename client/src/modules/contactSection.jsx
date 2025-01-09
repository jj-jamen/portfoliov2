import React from 'react';
import { SimpleGrid, Box } from '@chakra-ui/react';

const ContactSection = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 1 }}
      spacing={2}
      marginLeft={2.5}
      marginRight={2.5}
      minH='100vh'
      maxH='100vh'
      overflow='hidden'
      id='ContactSection'>
      <Box bg='teal'></Box>
    </SimpleGrid>
  );
};

export default ContactSection;
