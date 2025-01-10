import React from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';

const AboutSectionRight = () => {
  return (
    <>
      <Box bg={'transparent'} display={{ base: 'none', md: 'flex' }} justifyContent='center' alignItems='center' minH={'100vh'}>
        <VStack spacing={1}>
          <Text fontFamily="'Montserrat', sans-serif" fontStyle='italic' fontWeight='900' fontSize={'3vw'}>
            JOHN JEFFREY JAMEN
          </Text>
          <Text fontFamily="'Montserrat', sans-serif" fontStyle='none' fontWeight='350' fontSize={'1.5vw'}>
            WEB DEVELOPER | SHOPIFY SPECIALIST
          </Text>
        </VStack>
      </Box>
    </>
  );
};

export default AboutSectionRight;
