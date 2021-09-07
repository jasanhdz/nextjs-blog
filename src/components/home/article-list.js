import React from 'react'
import PropTypes from 'prop-types'
import ArticleCard from './article-card'
import styled from 'styled-components'

const GridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`

function ArticleList({ articles }) {
  return (
    <GridStyled>
      {articles.map((article, idx) => <ArticleCard article={article} key={idx} />)}
    </GridStyled>
  )
}

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
}

export default ArticleList
