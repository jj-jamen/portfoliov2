import React from 'react';
import { SimpleGrid, Box, VStack, Text } from '@chakra-ui/react';

const ProjectsSection = () => {
  return (
    <SimpleGrid
      bg={'transparent'}
      columns={{ base: 1, md: 1 }}
      spacing={2}
      marginLeft={2.5}
      marginRight={2.5}
      minH='100vh'
      overflow='hidden'
      id='ProjectsSection'
      display={{ base: 'none', md: 'flex' }}>
      <Box bg='gray.100' minW={'full'}>
        <VStack>
          <Text paddingTop={'10vh'} fontFamily="'Montserrat', sans-serif" fontStyle='italic' fontWeight='900' fontSize={'2.5vw'}>
            WHAT I BUILD
          </Text>
        </VStack>
      </Box>
    </SimpleGrid>
  );
};

export default ProjectsSection;
