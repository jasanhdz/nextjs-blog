import { ServerStyleSheet as ServerStyleSheetStyledComponents } from 'styled-components'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default  class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#3f51b5" />
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap" rel="stylesheet" />  
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const styledComponentsSheet = new ServerStyleSheetStyledComponents()
  const originalRenderPage = ctx.renderPage
  try {
    ctx.renderPage = () => originalRenderPage({
      enhanceApp: App => props => styledComponentsSheet.collectStyles(<App {...props} />),
    })
    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {styledComponentsSheet.getStyleElement()}
        </>
      )
    }
  } finally {
    styledComponentsSheet.seal()
  }
}