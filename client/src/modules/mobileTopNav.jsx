import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Box, Flex } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const MobileTopNav = () => {
  return (
    <Box bg={'transparent'} display={{ base: 'flex-end', md: 'none' }}>
      <Menu>
        <Flex justify='flex-end' p={4}>
          <MenuButton as={IconButton} aria-label='Options' icon={<HamburgerIcon />} bg={'transparent'} />
        </Flex>
        <MenuList>
          <MenuItem>New Tab</MenuItem>
          <MenuItem>New Tab</MenuItem>
          <MenuItem>New Tab</MenuItem>
          <MenuItem>New Tab</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default MobileTopNav;
