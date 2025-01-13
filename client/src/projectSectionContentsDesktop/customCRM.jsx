import React from 'react';
import { SimpleGrid, Box, Card, CardBody } from '@chakra-ui/react';
import { ReactComponent as CustomCrm } from '../assets/CustomCrm.svg';

const CustomCRM = () => {
  return (
    <SimpleGrid columns={2} spacing={'5vw'}>
      <Box bg={'transparent'} minW={'50vw'}>
        <CustomCrm style={{ width: '50vw', height: '50vh' }} />
      </Box>
      <Card margin={'1vw'}>
        <CardBody>
          <Box minW={'20vw'} bg={'tomato'}>
            test
          </Box>
        </CardBody>
      </Card>
    </SimpleGrid>
  );
};

export default CustomCRM;
