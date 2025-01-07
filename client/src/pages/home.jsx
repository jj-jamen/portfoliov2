import React from 'react';
import Topnav from '../modules/topnav';
import { SimpleGrid, Box } from '@chakra-ui/react';

const Home = () => {
  return (
    <>
      <Topnav />
      <SimpleGrid columns={2} spacing={10} marginTop={4}>
        <Box marginLeft={40} bg='tomato' height='80px' w={'50%'}></Box>
        <Box bg='tomato' height='80px'></Box>
      </SimpleGrid>
    </>
  );
};

export default Home;
