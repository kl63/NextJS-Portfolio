import React, { useEffect } from 'react';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '@/components/MDX';
import '@/styles/globals.css';
import ReactGA from 'react-ga';
import { useRouter } from 'next/router';

// Access the tracking ID from the environment variable
const trackingId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID;

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  const router = useRouter();

  useEffect(() => {
    if (trackingId) {
      ReactGA.initialize(trackingId);
      const handleRouteChange = (url) => {
        ReactGA.pageview(url);
      };

      // Track pageviews when route changes
      router.events.on('routeChangeComplete', handleRouteChange);

      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    }
  }, [router.events, trackingId]);

  return (
    <MDXProvider components={MDXComponents}>{getLayout(<Component {...pageProps} />)}</MDXProvider>
  );
}

export default MyApp;
