import Document, { Html, Head, Main, NextScript } from 'next/document';
import { config } from '../theme.config';

class MyDocument extends Document {
  render() {
    return (
      <Html lang={config.dateLocale} className="relative scroll-smooth antialiased">
        <Head>
          <meta name="theme-color" content="#27272a" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-5.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-5.png" />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link rel="alternate" type="application/rss+xml" href="/feed/blog/feed.xml" />
          
          {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID && (
            <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID}`}></script>
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
                }}
              />
            </>
          )}
        </Head>
        <body className="scrollbar-thin scrollbar-thumb-omega-500 hover:scrollbar-thumb-omega-600">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
