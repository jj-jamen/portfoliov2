import React from 'react';
import { SimpleGrid, Box, Text, VStack } from '@chakra-ui/react';
import { ReactComponent as KatiesBucklesLogo } from '../assets/KatiesBucklesLogo.svg';
import { ReactComponent as ShopifyLogo } from '../assets/ShopifyLogo.svg';
import { ReactComponent as AmazonLogo } from '../assets/AmazonLogo.svg';
import { ReactComponent as FrontierLogo } from '../assets/FrontierLogo.svg';
import { ReactComponent as AirbnbLogo } from '../assets/AirbnbLogo.svg';
import { ReactComponent as ComcastLogo } from '../assets/ComcastLogo.svg';
import { color } from 'framer-motion';

const JobsSection = () => {
  return (
    <SimpleGrid
      display={{ base: 'none', lg: 'block' }}
      columns={{ base: 1, md: 1 }}
      spacing={2}
      marginLeft={2.5}
      marginRight={2.5}
      minH={'100vh'}
      overflow='hidden'
      id='JobsSection'>
      <Box bg='transparent' display={'flex'} justifyContent={'center'} alignItems='middle'>
        <VStack>
          <Text fontFamily="'Montserrat', sans-serif" fontStyle='italic' fontWeight='900' fontSize={'2.5vw'} paddingTop={'18vh'}>
            WHERE I'VE WORKED
          </Text>
          <SimpleGrid columns={3} spacing={20} paddingTop={'18vh'}>
            <ShopifyLogo style={{ width: '20vw', height: '5vw', color: '#8c52ff' }} />
            <KatiesBucklesLogo style={{ width: '20vw', height: '5vw' }} />
            <AmazonLogo style={{ width: '20vw', height: '5vw' }} />
            <FrontierLogo style={{ width: '20vw', height: '5vw' }} />
            <AirbnbLogo style={{ width: '20vw', height: '5vw' }} />
            <ComcastLogo style={{ width: '20vw', height: '5vw' }} />
          </SimpleGrid>
        </VStack>
      </Box>
    </SimpleGrid>
  );
};

export default JobsSection;
