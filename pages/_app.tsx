import "../styles/index.scss";
import "../styles/input.css";
import Head from 'next/head'
import Script from 'next/script'

export default function MyApp({ Component, pageProps }) {
  return <>
  <Head>
      <link rel="shortcut icon" href="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
  </Head>
  <Script src="https://kit.fontawesome.com/b72dd95afc.js" crossOrigin="anonymous"></Script>

  <Component {...pageProps} />
  </>
}

