import React from 'react';
import { SimpleGrid, Box, VStack, Text, Card, CardBody } from '@chakra-ui/react';
import { ReactComponent as CustomCrm } from '../assets/CustomCrm.svg';

const ProjectsSection = () => {
  return (
    <SimpleGrid
      display={{ base: 'none', lg: 'flex' }}
      bg={'transparent'}
      spacing={2}
      marginLeft={2.5}
      marginRight={2.5}
      minH='100vh'
      overflow='hidden'
      id='ProjectsSection'>
      <Box bg='transparent' minW={'full'}>
        <VStack>
          <Text paddingTop={'10vh'} fontFamily="'Montserrat', sans-serif" fontStyle='italic' fontWeight='900' fontSize={'2.5vw'}>
            PROJECTS
          </Text>
          <Card margin={'1vw'}>
            <CardBody>
              <SimpleGrid columns={2} spacing={'5vw'}>
                <Box bg={'transparent'} minW={'50vw'}>
                  <CustomCrm style={{ width: '50vw', height: '50vh' }} />
                </Box>
                <Box minW={'20vw'} bg={'tomato'}>
                  test
                </Box>
              </SimpleGrid>
            </CardBody>
          </Card>
        </VStack>
      </Box>
    </SimpleGrid>
  );
};

export default ProjectsSection;
