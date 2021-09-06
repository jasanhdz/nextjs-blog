import { ThemeProvider } from 'styled-components'
import BaseStyles from '../components/base-styles'
import theme from '../theme'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <BaseStyles theme={{}} />
      <Component {...pageProps} />
      <div id="page-portal"></div>
    </ThemeProvider>
  )
}