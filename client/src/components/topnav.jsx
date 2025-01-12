import React from 'react';
import DesktopTopNav from './desktopTopNav';
import MobileTopNav from '../mobileComponents/mobileTopNav';

const Topnav = () => {
  return (
    <>
      <DesktopTopNav />
      <MobileTopNav />
    </>
  );
};

export default Topnav;
