import React, { useState, useEffect } from 'react';
import DesktopTopNav from './desktopTopNav';
import MobileTopNav from './mobileTopNav';

const Topnav = () => {
  return (
    <>
      <DesktopTopNav />
      <MobileTopNav />
    </>
  );
};

export default Topnav;
