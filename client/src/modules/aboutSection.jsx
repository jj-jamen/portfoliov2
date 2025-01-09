import React from 'react';
import { SimpleGrid, Box } from '@chakra-ui/react';

const AboutSection = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 1 }}
      spacing={2}
      marginLeft={2.5}
      marginRight={2.5}
      minH='100vh'
      maxH='100vh'
      overflow='hidden'
      id='AboutSection'>
      <Box bg='gray'>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={1}>
          <Box bg='white' w={'full'} minH='100vh' maxH='100vh' overflow='hidden'></Box>
          <Box bg='white' w={'full'} minH='100vh' maxH='100vh' overflow='hidden'></Box>
        </SimpleGrid>
      </Box>
    </SimpleGrid>
  );
};

export default AboutSection;
