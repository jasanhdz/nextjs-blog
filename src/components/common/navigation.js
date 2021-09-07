import styled from 'styled-components'
import Menu from './menu'
import Container from './wrapper'
import Link from 'next/link'

const MenuStyled = styled(Menu)``

const Wrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavigationStyled = styled.div`
  background: white;
  box-shadow: 0 4px 12px 0 rgb(0 0 0 / 5%);
  a {
    display: block;
  }
  .checkbox {
    display: none;
  }
  .logo {
    padding: 0.4rem 1rem;
    background-color: var(--primary);
    color: white;
  }
`

function Navigation() {
  return (
    <NavigationStyled>
      <Wrapper>
        <input className="checkbox" type="checkbox" id="toogle-button" name="active" />
        <Link href="/">
          <a className="logo">BlogDev</a>
        </Link>
        <MenuStyled />
      </Wrapper>
    </NavigationStyled>
  )
}

export default Navigation
