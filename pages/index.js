import React from 'react';

import WebsitePageWrapper from '../src/components/wrappers/WebsitePage';
import Box from '../src/components/foundation/layout/Box';
import HomeScreen from '../src/components/screens/HomeScreen';

export default function Home() {
  return (
    <WebsitePageWrapper
      seoProps={{
        headTitle: 'Home',
      }}
      pageBoxProps={{
        backgroundImage: 'url(/images/bubblesLight.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom right',
      }}
      menuProps={{
        display: true,
      }}
    >
      <Box
        display="flex"
        flex="1"
        flexDirection="column"
      >
        <HomeScreen />
      </Box>
    </WebsitePageWrapper>
  );
}
