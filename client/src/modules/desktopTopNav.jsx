import React from 'react';
import { Box, HStack, Button } from '@chakra-ui/react';
import { Link } from 'react-scroll';

const DesktopTopNav = () => {
  return (
    <Box
      bg='white'
      position='sticky'
      top={0}
      zIndex={10}
      justifyContent='center'
      display={{ base: 'none', md: 'flex' }}
      paddingTop={15}
      paddingBottom={15}>
      <HStack spacing={10}>
        <Button borderRadius={10} background={'transparent'} size={'sm'}>
          <Link to='AboutSection' smooth='true' duration={500}>
            ABOUT
          </Link>
        </Button>
        <Button borderRadius={10} background={'transparent'} size={'sm'}>
          <Link to='ProjectsSection' smooth='true' duration={500}>
            PROJECTS
          </Link>
        </Button>
        <Button borderRadius={10} background={'transparent'} size={'sm'}>
          JOB HISTORY
        </Button>
        <Button borderRadius={10} background={'transparent'} size={'sm'}>
          CONTACT
        </Button>
      </HStack>
    </Box>
  );
};

export default DesktopTopNav;
