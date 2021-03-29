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
    menuProps: {
      display: true,
    },
  },
});
