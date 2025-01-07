import React from 'react';
import { Box, HStack, Button } from '@chakra-ui/react';

const Topnav = () => {
  return (
    <>
      <Box display='flex' justifyContent='center' marginTop={5}>
        <HStack spacing={6}>
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
    </>
  );
};

export default Topnav;
