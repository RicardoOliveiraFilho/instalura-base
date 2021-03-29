import React from 'react';
import WebsitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

function LoginPage() {
  return <div>Página do Login</div>;
}

export default WebsitePageHOC(LoginPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Login',
    },
    pageBoxProps: {
      backgroundImage: 'url(/images/bubblesLight.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right',
    },
    menuProps: {
      display: false,
    },
  },
});
