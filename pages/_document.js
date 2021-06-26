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
          <Main />
          <NextScript />
          <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js" />
        </body>
      </Html>
    )
  }
}

export default MyDocument
