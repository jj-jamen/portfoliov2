import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Box, Flex } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-scroll';

const MobileTopNav = () => {
  return (
    <Box bg='white' position='sticky' top={0} zIndex={10} justifyContent='center' display={{ base: 'flex-end', lg: 'none' }}>
      <Menu>
        <Flex justify='flex-end' p={4}>
          <MenuButton as={IconButton} aria-label='Options' icon={<HamburgerIcon />} bg={'transparent'} />
        </Flex>
        <MenuList>
          <MenuItem>
            <Link to='AboutSection' smooth='true' duration={300}>
              About
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to='ProjectsSection' smooth='true' duration={300}>
              Projects
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to='ContactSection' smooth='true' duration={300}>
              Contact
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default MobileTopNav;
