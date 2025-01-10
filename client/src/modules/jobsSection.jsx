import React from 'react';
import { SimpleGrid, Box, Text, VStack } from '@chakra-ui/react';

const JobsSection = () => {
  return (
    <SimpleGrid
      display={{ base: 'none', md: 'block' }}
      columns={{ base: 1, md: 1 }}
      spacing={2}
      marginLeft={2.5}
      marginRight={2.5}
      minH={'100vh'}
      overflow='hidden'
      id='JobsSection'>
      <Box bg='gray.200' display={'flex'} justifyContent={'center'} alignItems='middle'>
        <VStack>
          <Text fontFamily="'Montserrat', sans-serif" fontStyle='italic' fontWeight='900' fontSize={'3vw'} paddingTop={20}>
            WHERE I'VE WORKED
          </Text>
          <SimpleGrid columns={4} spacing={10} paddingTop={10}>
            <Box bg={'tomato'} w={'20vw'}>
              Test
            </Box>
            <Box bg={'tomato'} w={'20vw'}>
              Test
            </Box>
            <Box bg={'tomato'} w={'20vw'}>
              Test
            </Box>
            <Box bg={'tomato'} w={'20vw'}>
              Test
            </Box>
          </SimpleGrid>
        </VStack>
      </Box>
    </SimpleGrid>
  );
};

export default JobsSection;
