import React from 'react';
import websitePageHOC from '../../../src/components/wrappers/WebsitePage/hoc';

function pageAppLogin() {
  return (
    <h1>
      Página de Login
    </h1>
  );
}

export default websitePageHOC(pageAppLogin, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Faça seu acesso',
    },
  },
});
