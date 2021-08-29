import HomeScreen from '../src/components/screens/Home';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

export default websitePageHOC(HomeScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home',
    },
    pageBoxProps: {
      cssinline: {
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        backgroundImage: 'url(/images/bubbles.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: {
          xs: 'center right',
          md: 'bottom right',
        },
      },
    },
  },
});
