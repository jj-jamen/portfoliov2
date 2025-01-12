import React from 'react';
import { SimpleGrid, Box } from '@chakra-ui/react';

const ContactSection = () => {
  return (
    <SimpleGrid
      display={{ base: 'none', lg: 'flex' }}
      spacing={2}
      marginLeft={2.5}
      marginRight={2.5}
      minH='100vh'
      maxH='100vh'
      overflow='hidden'
      id='ContactSection'>
      <Box bg='teal' w={'full'}></Box>
    </SimpleGrid>
  );
};

export default ContactSection;