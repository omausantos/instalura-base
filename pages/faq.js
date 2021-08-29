import React from 'react';
import FAQScreen from '../src/components/screens/FAQ';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

function FAQpage(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FAQScreen {...props} />
  );
}

export default websitePageHOC(FAQpage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Perguntas Frequentes',
    },
  },
});

export async function getStaticProps() {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq').then(async (res) => {
    const response = await res.json();
    return response.data;
  });

  // Falar sobre tamanho da página aqui e tomar cuidado com recursos extras que vão pra página
  return {
    props: {
      faqCategories,
    },
  };
}
