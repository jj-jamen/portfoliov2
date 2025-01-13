import React from 'react';
import { Box, Text, VStack, Divider, HStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const AboutSectionLeft = () => {
  return (
    <>
      <Box bg={'transparent'} display={'flex'} justifyContent='center' alignItems='center' minH={'100vh'}>
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
          <HStack spacing={'4vw'} paddingTop={'10vh'}>
            <a href='https://www.facebook.com/codingwithjj' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faFacebook} size='2x' color='#8c52ff' />
            </a>
            <a href='https://github.com/jj-jamen' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faGithub} size='2x' color='#8c52ff' />
            </a>
            <a href='https://www.linkedin.com/in/jjjamen/' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faLinkedin} size='2x' color='#8c52ff' />
            </a>
          </HStack>
        </VStack>
      </Box>
    </>
  );
};

export default AboutSectionLeft;
