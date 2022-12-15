import type { AppProps } from 'next/app'
import Head from 'next/head';
import Navbar from '../components/Navbar';
import StatusBar from '../components/StatusBar';

import "../styles/styles.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bepro Network Demo</title>
        <link href="/favicon.ico" rel="shortcut icon" />
      </Head>

      <Navbar />

      <Component {...pageProps} />

      <StatusBar />
    </>
  );
}
