import { getBooks } from '../services/posts'

function Index(props) {
  console.log(props)
  return (
    <div>
     <h1>Hello world</h1>
    </div>
  )
}

export default Index;

export async function getStaticProps() {
  const books = await getBooks()
  return {
    props: {
      books
    }
  }
}