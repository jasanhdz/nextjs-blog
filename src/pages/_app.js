import NProgress from 'nprogress'
import Router from 'next/router'
import { ThemeProvider } from 'styled-components'
import BaseStyles from '../components/base-styles'
import theme from '../theme'

Router.onRouteChangeStart = () => {
  NProgress.start()
}

Router.onRouteChangeComplete = () => {
  NProgress.done()
}
Router.onRouteChangeError = () => {
  NProgress.done()
}

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <BaseStyles theme={{}} />
      <Component {...pageProps} />
      <div id="page-portal"></div>
    </ThemeProvider>
  )
}