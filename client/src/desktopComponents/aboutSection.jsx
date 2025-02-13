import React from 'react';
import { SimpleGrid, Box } from '@chakra-ui/react';
import AboutSectionLeft from './aboutSectionLeft';
import AboutSectionRight from './aboutSectionRight';

const AboutSection = () => {
  return (
    <SimpleGrid
      display={{ base: 'none', lg: 'flex' }}
      columns={{ base: 1, md: 1 }}
      spacing={2}
      marginLeft={2.5}
      marginRight={2.5}
      minH='100vh'
      overflow='hidden'>
      <Box>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={1}>
          <Box bg='transparent' w={'full'} minH='100vh' overflow='hidden'>
            <AboutSectionLeft />{' '}
          </Box>
          <Box bg='transparent' w={'full'} minH='100vh' overflow='hidden'>
            <AboutSectionRight />
          </Box>
        </SimpleGrid>
      </Box>
    </SimpleGrid>
  );
};

export default AboutSection;
