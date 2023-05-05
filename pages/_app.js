import React, { useEffect } from 'react';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '@/components/MDX';
import '@/styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import ReactGA from 'react-ga';

// Replace 'YOUR_TRACKING_ID' with your Google Analytics Tracking ID
const trackingId = 'G-YZGEFEJ0PW';

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  useEffect(() => {
    if (typeof window !== 'undefined' && !window.GA_INITIALIZED) {
      ReactGA.initialize(trackingId);
      window.GA_INITIALIZED = true;
    }
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <MDXProvider components={MDXComponents}>
      {getLayout(<Component {...pageProps} />)}
    </MDXProvider>
  );
}

export default MyApp;
