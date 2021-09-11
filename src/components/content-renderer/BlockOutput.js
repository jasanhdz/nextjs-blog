import TYPES from './types';
import PropTypes from 'prop-types'
import ParagraphBlock from './paragraph';
import HeaderBlock from './Header';
import VideoBlock from './Video';
import ListBlock from './List';
import ImageBlock from './Image';
import NumberedListBlock from './NumberedList';

function BlockOutput({ chunks }) {
  return chunks.map((block, idx) => {
    const { type } = block
    switch(type.toLowerCase()) {
      // case TYPES.CODE:
      //   return <CodeBlock key={idx} data={block.paragraph} />
      case TYPES.DELIMITER:
        return <hr />
      case TYPES.HEADER.H1:
        return <HeaderBlock key={idx} block={block} />
      case TYPES.HEADER.H2:
        return <HeaderBlock key={idx} block={block} />
      case TYPES.HEADER.H3:
        return <HeaderBlock key={idx} block={block} />
      case TYPES.PARAGRAPH:
        return <ParagraphBlock key={idx} data={block.paragraph.text} />
      case TYPES.VIDEO:
        return <VideoBlock key={idx} data={block.video} />
      case TYPES.BULLETED:
        return <ListBlock key={idx} block={block} />
      case TYPES.NUMBERED_LIST:
        return <NumberedListBlock key={idx} block={block} />
      case TYPES.IMAGE:
        return <ImageBlock key={idx} block={block} />
      default:
        return <div key={idx} />
    }
  })
}

BlockOutput.propTypes = {
  chunks: PropTypes.array.isRequired,
}

export default BlockOutput