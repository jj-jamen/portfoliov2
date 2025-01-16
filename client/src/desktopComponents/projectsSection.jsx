import React from 'react';
import { SimpleGrid, Box, VStack, Text } from '@chakra-ui/react';
import CustomCRM from '../projectSectionContentsDesktop/customCRM';

const ProjectsSection = () => {
  return (
    <SimpleGrid display={{ base: 'none', lg: 'flex' }} bg={'transparent'} spacing={2} marginLeft={2.5} marginRight={2.5} minH='100vh'>
      <Box bg='transparent' minW={'full'}>
        <VStack>
          <Text paddingTop={'10vh'} paddingBottom={'10vh'} fontFamily="'Montserrat', sans-serif" fontWeight='900' fontSize={'2.5vw'}>
            MY WEB APPS
          </Text>
          <CustomCRM />
        </VStack>
      </Box>
    </SimpleGrid>
  );
};

export default ProjectsSection;
