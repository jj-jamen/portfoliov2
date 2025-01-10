import React from 'react';
import { Box, HStack, Button } from '@chakra-ui/react';
import { Link } from 'react-scroll';

const DesktopTopNav = () => {
  return (
    <Box
      bg='#c1ff72'
      position='sticky'
      top={0}
      zIndex={10}
      justifyContent='center'
      display={{ base: 'none', md: 'flex' }}
      paddingTop={15}
      paddingBottom={15}>
      <HStack spacing={10}>
        <Button
          borderRadius={10}
          background={'transparent'}
          size={'sm'}
          variant='unstyled'
          position='relative'
          _after={{
            content: '""',
            position: 'absolute',
            width: '0',
            height: '5px',
            bottom: '0',
            left: '0',
            bg: '#8c52ff',
            transition: 'width 0.1s ease',
          }}
          _hover={{
            _after: {
              width: '100%',
            },
          }}>
          <Link to='AboutSection' smooth='true' duration={300}>
            ABOUT
          </Link>
        </Button>
        <Button
          borderRadius={10}
          background={'transparent'}
          size={'sm'}
          variant='unstyled'
          position='relative'
          _after={{
            content: '""',
            position: 'absolute',
            width: '0',
            height: '5px',
            bottom: '0',
            left: '0',
            bg: '#8c52ff',
            transition: 'width 0.1s ease',
          }}
          _hover={{
            _after: {
              width: '100%',
            },
          }}>
          <Link to='JobsSection' smooth='true' duration={300}>
            PAST EMPLOYERS
          </Link>
        </Button>
        <Button
          borderRadius={10}
          background={'transparent'}
          size={'sm'}
          variant='unstyled'
          position='relative'
          _after={{
            content: '""',
            position: 'absolute',
            width: '0',
            height: '5px',
            bottom: '0',
            left: '0',
            bg: '#8c52ff',
            transition: 'width 0.1s ease',
          }}
          _hover={{
            _after: {
              width: '100%',
            },
          }}>
          <Link to='ProjectsSection' smooth='true' duration={300}>
            PROJECTS
          </Link>
        </Button>
        <Button
          borderRadius={10}
          background={'transparent'}
          size={'sm'}
          variant='unstyled'
          position='relative'
          _after={{
            content: '""',
            position: 'absolute',
            width: '0',
            height: '5px',
            bottom: '0',
            left: '0',
            bg: '#8c52ff',
            transition: 'width 0.1s ease',
          }}
          _hover={{
            _after: {
              width: '100%',
            },
          }}>
          <Link to='ContactSection' smooth='true' duration={300}>
            CONTACT
          </Link>
        </Button>
      </HStack>
    </Box>
  );
};

export default DesktopTopNav;
