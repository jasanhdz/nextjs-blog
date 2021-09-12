import { getBooks } from '../services/posts'
import Wrapper from '../components/common/Wrapper'
import ArticleList from '../components/blog/articles-list'

function Index({ books }) {
  // console.log(books)
  return (
    <Wrapper>
     <h1>Articulos ✍🏻</h1>
     <ArticleList articles={books} />
    </Wrapper>
  )
}

export default Index;

export async function getServerSideProps() {
  const books = await getBooks()
  return {
    props: {
      books: books.results,
    }
  }
}