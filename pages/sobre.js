import React from 'react';
import WebsitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

function AboutPage() {
  return <div>Página Sobre</div>;
}

export default WebsitePageHOC(AboutPage, {
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
