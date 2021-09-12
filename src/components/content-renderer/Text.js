import ReactHtmlParser from 'react-html-parser'
import { htmlString } from '../../utils/block-util'

export function ParagraphBlock({ block }) {
  const content = htmlString(block)
  return <p>{ReactHtmlParser(content)}</p>
}

export function ListBlock({ block }) {
  const content = htmlString(block)
  return <li>{ReactHtmlParser(content)}</li>
}

export function NumberedList({ blocks }) {
  return (
    <ol>
      {blocks.map((block) => <ItemBlock key={block.id} block={block} /> )}
    </ol>
  )
}

export function ItemBlock({ block }) {
  const content = htmlString(block)
  return <li>{ReactHtmlParser(content)}</li>
}