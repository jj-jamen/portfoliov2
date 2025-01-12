import React from 'react';
import { Box } from '@chakra-ui/react';
import { ReactComponent as Jjjamen } from '../assets/Jjjamen.svg';

const AboutSectionRight = () => {
  return (
    <Box bg={'transparent'} display={'flex'} justifyContent='center' alignItems='center' minH={'100vh'}>
      <Jjjamen style={{ width: '900px', height: '900px' }} />
    </Box>
  );
};

export default AboutSectionRight;
