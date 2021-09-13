import Error from 'next/error'
import { getBooks } from '../services/posts'
import Wrapper from '../components/common/Wrapper'
import ArticleList from '../components/blog/articles-list'

function Index({ statusCode, books }) {
  if (statusCode) {
    return <Error statusCode={statusCode} />
  }
  return (
    <Wrapper>
     <h1>Articulos ✍🏻</h1>
     <ArticleList articles={books} />
    </Wrapper>
  )
}

export default Index;

export async function getServerSideProps({ res }) {
  const { data: books, statusCode } = await getBooks()
  if(statusCode >= 400) {
    res.statusCode = statusCode
    return { props: { statusCode } }
  }
  return {
    props: {
      books: books.results,
    }
  }
}