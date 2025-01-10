import React from 'react';
import { Box, Text, VStack, Divider } from '@chakra-ui/react';

const AboutSectionLeft = () => {
  return (
    <>
      <Box bg={'transparent'} display={{ base: 'none', md: 'flex' }} justifyContent='center' alignItems='center' minH={'100vh'}>
        <VStack>
          <Text fontFamily="'Montserrat', sans-serif" fontStyle='italic' fontWeight='900' fontSize={'3vw'}>
            JOHN JEFFREY JAMEN
          </Text>
          <Divider border={'1px solid #8c52ff'} />
          <Text fontFamily="'Montserrat', sans-serif" fontStyle='none' fontWeight='500' fontSize={'.88vw'}>
            {'WEB DEVELOPER \u00A0\u2022\u00A0 SHOPIFY SPECIALIST \u00A0\u2022\u00A0 BRANDING & CONTENT CREATOR'}
          </Text>
          <Text fontFamily="'Montserrat', sans-serif" fontStyle='none' fontWeight='500' fontSize={'.88vw'}>
            {'CUSTOMER SERVICE REPRESENTATIVE & TECHNICAL SUPPORT'}
          </Text>
        </VStack>
      </Box>
    </>
  );
};

export default AboutSectionLeft;
