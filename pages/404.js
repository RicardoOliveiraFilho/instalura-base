import React from 'react';
import WebsitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

function NotFoundPage() {
  return <div>Página 404</div>;
}

export default WebsitePageHOC(NotFoundPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Not Found',
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
