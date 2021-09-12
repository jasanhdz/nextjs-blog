import TYPES from '../components/content-renderer/types'

export function getNumberedList({ chunks = [], idx = 0}) {
  let lastPointer = 0
  const numberedList = []
  for (let i = idx; i < chunks.length; i++) {
    lastPointer = i
    if (chunks[i].type !== TYPES.NUMBERED_LIST) {
      i = chunks.length
    } else {
      numberedList.push(chunks[i])
    }
  }
  return {
    lastPointer,
    numberedList
  }
}

export function htmlString(block) {
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
  return content
}