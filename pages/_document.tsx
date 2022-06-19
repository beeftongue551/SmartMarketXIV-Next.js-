import {Head, Html, Main, NextScript} from "next/document";
import {GA_TRACKING_ID} from '../lib/gtag'

const Document = () => {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=M+PLUS+1p" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet"
              href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@beeftongue_ff14" />
        <meta property="og:url" content="http://beeftongue551.top/" />
        <meta property="og:title" content="SmartMarketXIV" />
        <meta property="og:description" content="あなたのFF14生活のために アイテムの値段がだいたいわかるサイトSmartMarketXIV" />
        <meta property="og:image" content="/twitter_card_image.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
    </Html>
  )
}

export default Document