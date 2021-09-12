import ReactHtmlParser from 'react-html-parser'
import { htmlString } from '../../utils/block-util'
import TYPES from './types'

function HeaderBlock({ block }) {
  const content = htmlString(block)
  switch(block.type) {
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
