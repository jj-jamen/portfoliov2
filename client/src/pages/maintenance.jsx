import { Box, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Maintenance = () => {
  return (
    <Box display={{ base: 'flex', lg: 'none' }} bg={'transparent'} minH={'100vh'} justifyContent={'center'}>
      <VStack display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Text>
          <strong>There was a problem loading this page.</strong>
        </Text>
        <Text>Your screen is too small to load the contents of this page.</Text>
      </VStack>
    </Box>
  );
};

export default Maintenance;
