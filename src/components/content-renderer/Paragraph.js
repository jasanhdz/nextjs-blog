import ReactHtmlParser from 'react-html-parser'

function ParagraphBlock({ data = [] }) {
  if(!data.length) return null;
  let content = '';
  data.forEach(({ plain_text, href }) => {
    if (href) {
      content += `<a target="_blank" href='${href}'>${plain_text}</a> `
    } else {
      content += plain_text
    }
  })
  return <p>{ReactHtmlParser(content)}</p>
}

export default ParagraphBlock
