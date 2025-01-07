import React from 'react';
import { Box, HStack, Button } from '@chakra-ui/react';

const DesktopTopNav = () => {
  return (
    <Box justifyContent='center' marginTop={5} display={{ base: 'none', md: 'flex' }}>
      <HStack spacing={3}>
        <Button borderRadius={10} background={'transparent'} border={'0.5px gray solid'} size={'sm'}>
          ABOUT
        </Button>
        <Button borderRadius={10} background={'transparent'} border={'1px gray solid'} size={'sm'}>
          PROJECTS
        </Button>
        <Button borderRadius={10} background={'transparent'} border={'1px gray solid'} size={'sm'}>
          PAST JOBS
        </Button>
        <Button borderRadius={10} background={'transparent'} border={'1px gray solid'} size={'sm'}>
          CONTACT
        </Button>
      </HStack>
    </Box>
  );
};

export default DesktopTopNav;
