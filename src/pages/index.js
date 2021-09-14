import Error from 'next/error'
import { getBooks } from '../services/posts'
import Wrapper from '../components/common/Wrapper'
import ArticleList from '../components/blog/articles-list'
import Search from '../components/common/search'

function Index({ statusCode, books, query }) {
  if (statusCode) {
    return <Error statusCode={statusCode} />
  }
  return (
    <Wrapper>
      <Search initialValue={query} />
      <h1>Articulos ✍🏻</h1>
      <ArticleList articles={books} />
    </Wrapper>
  )
}

export default Index;

export async function getServerSideProps({ res, query: { search } }) {
  const { data: books, statusCode } = await getBooks(search)
  if(statusCode >= 400) {
    res.statusCode = statusCode
    return { props: { statusCode } }
  }
  return {
    props: {
      books: books.results,
      query: search || ''
    }
  }
}