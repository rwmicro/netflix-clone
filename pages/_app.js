import "../styles/index.scss";
import "../styles/input.css";
import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return <>
  <Head>
      <link rel="shortcut icon" href="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico" />
  </Head>
  <Script src="https://kit.fontawesome.com/b72dd95afc.js" crossorigin="anonymous"></Script>

  <Component {...pageProps} />
  </>
}

export default MyApp
