import TYPES from './types';
import PropTypes from 'prop-types'
import HeaderBlock from './Header';
import VideoBlock from './Video';
import ImageBlock from './Image';
import { ItemBlock, ListBlock, NumberedList, ParagraphBlock } from './Text';
import { getNumberedList } from '../../utils/block-util';

function BlockOutput({ chunks = [] }) {
  let pointer = 0
  return chunks.map((block, idx) => {
    const { type } = block
    switch(type.toLowerCase()) {
      // case TYPES.CODE:
      //   return <CodeBlock key={idx} data={block.paragraph} />
      case TYPES.DELIMITER:
        return <hr key={idx} />
      case TYPES.HEADER.H1:
        return <HeaderBlock key={idx} block={block} />
      case TYPES.HEADER.H2:
        return <HeaderBlock key={idx} block={block} />
      case TYPES.HEADER.H3:
        return <HeaderBlock key={idx} block={block} />
      case TYPES.PARAGRAPH:
        return <ParagraphBlock key={idx} block={block} />
      case TYPES.VIDEO:
        return <VideoBlock key={idx} data={block.video} />
      case TYPES.BULLETED:
        return <ListBlock key={idx} block={block} />
      case TYPES.NUMBERED_LIST:
        if (pointer === 0 || pointer < idx) {
          const { numberedList, lastPointer } = getNumberedList({ chunks, idx })
          pointer = lastPointer
          return <NumberedList key={idx} blocks={numberedList} />
        }
        return null
      case TYPES.IMAGE:
        return <ImageBlock key={idx} block={block} />
      default:
        return null
    }
  })
}

BlockOutput.propTypes = {
  chunks: PropTypes.array.isRequired,
}

export default BlockOutput