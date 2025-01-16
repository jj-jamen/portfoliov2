import React from 'react';
import { SimpleGrid, Box, Card, CardBody, Text, CardFooter, VStack, Badge, List, ListItem, ListIcon, Button, Flex } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { ReactComponent as CustomCrm } from '../assets/CustomCrm.svg';
import { FaGithub, FaCirclePlay } from 'react-icons/fa6';

const CustomCRM = () => {
  return (
    <SimpleGrid columns={2} spacing={'5vw'}>
      <Box bg={'transparent'} minW={'50vw'}>
        <CustomCrm style={{ width: '50vw', height: '50vh' }} />
      </Box>
      <Card margin={'1vw'}>
        <CardBody>
          <VStack>
            <Text fontFamily="'Montserrat', sans-serif" fontWeight='500' fontSize={'1.5vw'}>
              CUSTOM CRM
            </Text>
            <SimpleGrid columns={2} spacing={10} w={'full'}>
              <Box w={'full'}>
                <Text fontFamily="'Montserrat', sans-serif" fontWeight='300'>
                  This web application addresses the challenges of managing customers for a start-up mold consultation company in the US. Previously
                  relying on Intuit and Google Sheets, the system often faced lapses in appointment scheduling and payment tracking. The new CRM
                  simplifies operations by integrating customer data, streamlining scheduling, providing updates on payment statuses and laboratory
                  results.
                </Text>
              </Box>
              <Box w={'full'}>
                <Text fontFamily="'Montserrat', sans-serif" fontWeight='300'>
                  <List>
                    <ListItem>
                      <ListIcon as={CheckCircleIcon} color='#8c52ff' />
                      Better Customer Management
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckCircleIcon} color='#8c52ff' />
                      Easy Appointment Scheduling
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckCircleIcon} color='#8c52ff' />
                      Payment and Lab Result Tracking
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckCircleIcon} color='#8c52ff' />
                      User-Friendly Interface
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckCircleIcon} color='#8c52ff' />
                      O-Auth Secured
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckCircleIcon} color='#8c52ff' />
                      Scalable
                    </ListItem>
                  </List>
                </Text>
              </Box>
            </SimpleGrid>
          </VStack>
        </CardBody>
        <Box w={'full'} display={'flex'} justifyContent={'space-evenly'} alignItems={'center'}>
          <Button color={'white'} bg={'#8c52ff'} leftIcon={<FaGithub size={'1.3em'} />} size={'sm'}>
            View in Github
          </Button>
          <Button color={'white'} bg={'#8c52ff'} leftIcon={<FaCirclePlay size={'1.3em'} />} size={'sm'}>
            Watch demo
          </Button>
        </Box>
        <CardFooter bg={'gray.100'} marginTop={5}>
          <Flex wrap='wrap' gap={2}>
            <Badge variant='solid' colorScheme='blue' fontSize={'1.1vh'}>
              REACT JS
            </Badge>
            <Badge variant='solid' colorScheme='teal' fontSize={'1.1vh'}>
              CHAKRA UI V2
            </Badge>
            <Badge variant='solid' colorScheme='green' fontSize={'1.1vh'}>
              MONGO DB ATLAS
            </Badge>
            <Badge variant='solid' colorScheme='yellow' fontSize={'1.1vh'}>
              NODE JS
            </Badge>
            <Badge variant='solid' colorScheme='purple' fontSize={'1.1vh'}>
              EXPRESS JS
            </Badge>
            <Badge variant='solid' colorScheme='purple' fontSize={'1.1vh'}>
              AXIOS
            </Badge>
          </Flex>
        </CardFooter>
      </Card>
    </SimpleGrid>
  );
};

export default CustomCRM;
