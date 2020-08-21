import Document, { Html, Head, Main, NextScript } from "next/document"
import config from "../src/reactpress/services/publicConfig"

class MyDocument extends Document {

  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0" />

          <script dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KBWXL2Z');`
          }}></script>

          <link
            rel="icon"
            type="image/x-icon"
            href={config.site.favicon} />

          <link
            rel="stylesheet"
            type="text/css"
            href={`${config.assetPrefix}/static/css/styles.css`} />
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N3G3555" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
            }}
          ></noscript>
          <Main />
          <NextScript />
          <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js" />
        </body>
      </Html>
    )
  }
}

export default MyDocument
