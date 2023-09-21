import Script from 'next/script'
import 'styles/global.css'

export default function MyApp({ Component, pageProps }) {
  return <>
  
  <Script src="https://kit.fontawesome.com/b72dd95afc.js" crossOrigin="anonymous"></Script>
  <Component {...pageProps} />
  </>
}

