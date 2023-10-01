import Script from 'next/script'
import 'styles/global.css'

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
  <Script src="https://kit.fontawesome.com/b72dd95afc.js" crossOrigin="anonymous"></Script>
        <body>{children}</body>
      </html>
    )
  }