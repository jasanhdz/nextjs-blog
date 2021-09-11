import styled from "styled-components"
import { getRgbaWithOpacity } from '../../utils/colors'

const TagLitStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 5px 0;
`
const Tag = styled.p`
  margin: 0 5px 0 0;
  background-color: ${({ color }) => color || 'red' };
  padding: 2px 5px;
  border-radius: 8px;
  font-size: 14px;
`

function TagList({ tags }) {
  return (
    <TagLitStyled>
      {tags.map(({ id, name, color }) => <Tag key={id} color={getRgbaWithOpacity(color, 0.2)}>{name}</Tag>)}
    </TagLitStyled>
  )
}

export default TagList
