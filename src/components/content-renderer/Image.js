import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  width: 100%;
  height: auto;

`

function ImageBlock({ block }) {
  const { type, id } = block
  if(!block[type].file) return null
  const { url } = block[type].file
  return <Image src={url} alt={id}  />
}

export default ImageBlock
