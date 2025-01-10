import React from 'react';
import { Box, Text, VStack, Divider } from '@chakra-ui/react';

const AboutSectionLeft = () => {
  return (
    <>
      <Box bg={'transparent'} display={{ base: 'none', md: 'flex' }} justifyContent='center' alignItems='center' minH={'100vh'}>
        <VStack spacing={'.1vh'}>
          <Text fontFamily="'Montserrat', sans-serif" fontStyle='italic' fontWeight='900' fontSize={'3vw'}>
            JOHN JEFFREY JAMEN
          </Text>
          <Divider borderColor={'#8c52ff'} />
          <Text fontFamily="'Montserrat', sans-serif" fontStyle='none' fontWeight='500' fontSize={'.92vw'}>
            {'WEB DEVELOPER \u00A0\u2022\u00A0 SHOPIFY SPECIALIST \u00A0\u2022\u00A0 BRANDING & CONTENT CREATOR'}
          </Text>
        </VStack>
      </Box>
    </>
  );
};

export default AboutSectionLeft;
