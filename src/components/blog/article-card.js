import React from 'react'
import ProptTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'next/link'
import TagList from './tag-list'
import PropertyList from './property-list'
import slugify from 'slugify'

const CardStyled = styled.div`
  &:hover {
    .title {
      color: #6c5cff;
    }
  }
  .hero {
    img {
      object-fit: cover;
      max-width: 100%;
      height: auto;
    }
  }
  .title {
    margin: 10px 0 10px 0;
  }
  .description {
    margin: 0;
    color: #767676;
  }
  .date {
    background-color: #e6e6e6;
    width: fit-content;
    padding: 4px 6px;
    border-radius: 6px;
    font-size: 14px;
  }
`

function getAllProperties(properties) {
  delete properties.Date
  const propertyList = []
  Object
    .values(properties)
    .forEach((property) => property[property.type].length && propertyList.push(property[property.type][0]))
  return propertyList
}

function ArticleCard({ article }) {
  const { created_time, properties, cover } = article
  const { Name, Tags, ...otherProperties } = properties
  const { multi_select: tagList  } = Tags
  const title = Name.title.length ? Name.title[0].plain_text : null
  const propertiesAll = getAllProperties(otherProperties)
  const slug = slugify(title).toLowerCase()
  return (
    <Link href={`/blog/${slug}`}>
      <a className="anchor">
        <CardStyled>
          {cover.hasOwnProperty('external') && (
            <div className="hero">
              <img src={cover.external.url} alt={title} />
            </div>
          )}
          <p className="date">{new Intl.DateTimeFormat('es', {day: 'numeric', month: 'long', year: 'numeric'}).format(new Date(created_time))}</p>
          <h3 className="title">{title}</h3>
          <TagList tags={tagList} />
          <PropertyList propertyList={propertiesAll} />
        </CardStyled>
      </a>
    </Link>
  )
}

ArticleCard.propTypes = {
  article: ProptTypes.shape({
    slug: ProptTypes.string,
    frontmatter: ProptTypes.shape({
      cover_image: ProptTypes.string,
      date: ProptTypes.string,
      excerpt: ProptTypes.string,
      title: ProptTypes.string
    })
  })
}

export default ArticleCard