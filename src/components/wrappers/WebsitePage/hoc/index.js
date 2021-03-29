import React from 'react';
import WebsiteGlobalProvider from '../provider';
import WebsitePageWrapper from '..';

export default function WebsitePageHOC(
  PageComponent,
  { pageWrapperProps } = { pageWrapperProps: {} },
) {
  return props => (
    <WebsiteGlobalProvider>
      <WebsitePageWrapper {...pageWrapperProps} {...props.pageWrapperProps}>
        <PageComponent {...props} />
      </WebsitePageWrapper>
    </WebsiteGlobalProvider>
  );
}
