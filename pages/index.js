import WebsitePageHOC from '../src/components/wrappers/WebsitePage/hoc';
import HomeScreen from '../src/components/screens/HomeScreen';

export default WebsitePageHOC(HomeScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home',
    },
    pageBoxProps: {
      backgroundImage: 'url(/images/bubblesLight.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right',
    },
  },
});
