import styled from "styled-components"
import Link from 'next/link'

const menux = [
  {
    title: 'Artículos',
    url: '/'
  }
]

const MenuStyled = styled.div`
  padding: 1rem;
  .items {
    margin: 0;
    padding: 0;
    li, a {
      display: block;
    }
    /* li:hover {
      opacity: 0.5;
    } */
    a {
      position: relative;
    }
    a:hover:after {
      position: absolute;
      content: '';
      left: 0;
      right: 0;
      bottom: -2px;
      border-width: 0 0 2px;
      border-style: solid;
      border-color: #6c5cff;
    }
  }
`

function Menu({ className }) {
  return (
    <MenuStyled className={className}>
      <ul className="items">
        {menux.map(({ title, url }, idx) => (
          <li key={idx}>
            <Link href={url}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MenuStyled>
  )
}

export default Menu
