import React from 'react';
import AboutScreen, { getContent } from '../src/components/screens/AboutScreen';
import WebsitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

function AboutPage({ messages }) {
  return <AboutScreen messages={messages} />;
}

export async function getStaticProps() {
  const messages = await getContent();

  return {
    props: {
      messages,
    },
  };
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
