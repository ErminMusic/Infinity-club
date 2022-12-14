import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

import { GA_TRACKING_ID } from '../lib/gtag'

export default function Document() {
  return (
    <Html>
      <Head>
        <Script
          id='google tags manager'
          dangerouslySetInnerHTML={{
          __html:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5ZBS58T');`,
          }}
        />
        <Script
          async src={`https://www.googlemanager.com/gtag/js?id=${GA_TRACKING_ID}`} 
        />
      </Head>
      <body>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5ZBS58T"
          height="0" width="0" style="display:none;visibility:hidden" />`,
        }}
        />
    
        <Main />
        <NextScript />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `,
          }}
        />
      </body>
    </Html>
  )
}