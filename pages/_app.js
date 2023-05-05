import React, { useEffect } from 'react';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '@/components/MDX';
import '@/styles/globals.css';
import { useRouter } from 'next/router';
import CookieConsent from 'react-cookie-consent';

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
    <>
      <MDXProvider components={MDXComponents}>{getLayout(<Component {...pageProps} />)}</MDXProvider>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="user-consent"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        declineButtonStyle={{ fontSize: "13px" }}
        expires={150}
        enableDeclineButton
      >
        This website uses cookies to enhance the user experience.{' '}
       
        <a href="/privacy" style={{ marginLeft: '4px', color: 'white', textDecoration: 'underline' }}>Privacy Policy</a>
      </CookieConsent>
    </>
  );
}

export default MyApp;
