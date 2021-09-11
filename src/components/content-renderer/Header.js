import ReactHtmlParser from 'react-html-parser'
import TYPES from './types'

function HeaderBlock({ block }) {
  const { type } = block
  if(!block[type].text.length) return null
  let content = ''
  block[type].text.forEach(({ plain_text, href }) => {
    if (href) {
      content += `<a target="_blank" href='${href}'>${plain_text}</a> `
    } else {
      content += plain_text
    }
  })
  switch(type) {
    case TYPES.HEADER.H1:
      return <h1>{ReactHtmlParser(content)}</h1>
    case TYPES.HEADER.H2:
      return <h2>{ReactHtmlParser(content)}</h2>
    case TYPES.HEADER.H3:
      return <h3>{ReactHtmlParser(content)}</h3>
    default:
      return null
  }
}

export default HeaderBlock
