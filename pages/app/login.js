import WebsitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';
import LoginScreen from '../../src/components/screens/app/LoginScreen';

export default WebsitePageHOC(LoginScreen, {
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
