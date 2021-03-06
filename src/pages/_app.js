import 'nprogress/nprogress.css';
import '@/styles/globals.css';

import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import { ThemeProvider } from 'next-themes';

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
