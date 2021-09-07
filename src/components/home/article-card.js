import React from 'react'
import ProptTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'next/link'

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
`

function ArticleCard({ article }) {
  const { frontmatter, slug } = article
  const { cover_image, title, excerpt } = frontmatter
  return (
    <Link href={`/blog/${slug}`}>
      <a>
        <CardStyled>
          <div className="hero">
            <img src={cover_image} alt={title} />
         </div>
          <h3 className="title">{title}</h3>
          <p className="description">{excerpt}</p>
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
