import ReactHtmlParser from 'react-html-parser'

function NumberedListBlock({ block }) {
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
  return <li>{ReactHtmlParser(content)}</li>
}

export default NumberedListBlock