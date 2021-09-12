import { createGlobalStyle } from 'styled-components'
import NProgressCSS from '../utils/nprogress'

const DefaultStyles = createGlobalStyle`
  :root {
    --primaryFont: ${({ theme }) => theme.primaryFont};
    --secondaryFont: ${({ theme }) => theme.secondaryFont};
    --primary: ${({ theme }) => theme.primary};
  }

  html {
    scroll-behavior: smooth;
  }

  /* a {
    text-decoration: none;
    color: black;
  } */
  .anchor {
    color: black;
    text-decoration: none;
  }

  body {
    font-family: var(--primaryFont);
    margin: 0;
  }
`

export default function BaseStyles({ theme }) {
  return (
    <>
      <DefaultStyles {...theme} />
      <NProgressCSS />
    </>
  )
}