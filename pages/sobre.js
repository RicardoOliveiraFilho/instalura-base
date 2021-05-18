import React from 'react';
import AboutScreen from '../src/components/screens/AboutScreen';
import WebsitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

export default WebsitePageHOC(AboutScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Sobre',
    },
    pageBoxProps: {
      backgroundImage: 'url(/images/bubblesLight.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right',
    },
    menuProps: {
      display: true,
    },
  },
});
