import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import MDXComponents from '@/components/MDX'
import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react';
import ReactGA from 'react-ga';

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  ReactGA.initialize('G-YZGEFEJ0PW');

  return (
    <Analytics id="G-YZGEFEJ0PW">
      <MDXProvider components={MDXComponents}>{getLayout(<Component {...pageProps} />)}</MDXProvider>
    </Analytics>
  )
}

export default MyApp
