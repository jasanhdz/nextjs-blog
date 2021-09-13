import React from 'react'
import { getAllProperties } from '../../utils/block-util'
import { getTimeAgo } from '../../utils/get-time'
import PropertyList from './property-list'

function Description({ meta }) {
  const { properties, created_time } = meta
  const { Name, ...otherProperties } = properties
  const title = Name.title.length ? Name.title[0].plain_text : null
  const propertiesAll = getAllProperties(otherProperties)
  const date = getTimeAgo(new Date(created_time).getTime())
  return (
    <div>
      <h1>{title}</h1>
      <PropertyList date={date} propertyList={propertiesAll} />
      <hr />
    </div>
  )
}

export default Description
