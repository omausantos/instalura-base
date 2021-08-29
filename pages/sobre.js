import React from 'react';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

function pageSobre() {
  return (
    <h1>
      Sobre
    </h1>
  );
}

export default websitePageHOC(pageSobre, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Sobre',
    },
  },
});
