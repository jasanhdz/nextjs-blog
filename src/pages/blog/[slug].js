import { getBooks, getPost } from '../../services/posts'

function Post(props) {
  console.log(props)
  return (
    <div>
      <h1>Hello World SLUG</h1>
    </div>
  )
}

export default Post

export async function getStaticPaths() {
  const { results } = await getBooks()
  const paths = results.map((book) => ({
    params: { slug: book.id }
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params: { slug } }) {
  const post = await getPost(slug)
  return {
    props: {
      post: post.results
    }
  }
}
