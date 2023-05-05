import React, { useEffect } from 'react';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '@/components/MDX';
import '@/styles/globals.css';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  const router = useRouter();

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID) {
      const handleRouteChange = (url) => {
        window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID, {
          page_path: url,
        });
      };

      // Track pageviews when route changes
      router.events.on('routeChangeComplete', handleRouteChange);

      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    }
  }, [router.events]);

  return (
    <MDXProvider components={MDXComponents}>{getLayout(<Component {...pageProps} />)}</MDXProvider>
  );
}

export default MyApp;
