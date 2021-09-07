import { createGlobalStyle } from 'styled-components'

const DefaultStyles = createGlobalStyle`
  :root {
    --primaryFont: ${({ theme }) => theme.primaryFont};
    --secondaryFont: ${({ theme }) => theme.secondaryFont};
    --primary: ${({ theme }) => theme.primary};
  }

  html {
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    color: black;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: var(--primaryFont);
    margin: 0;
    line-height: 1.5;
  }
`

export default function BaseStyles({ theme }) {
  return <DefaultStyles {...theme} />
}