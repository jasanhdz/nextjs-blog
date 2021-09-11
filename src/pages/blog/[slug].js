import { getBooks, getPost } from '../../services/posts'
import BlockOutput from '../../components/content-renderer/BlockOutput'
import Wrapper from '../../components/common/Wrapper'

function Post({ post }) {
  return (
    <Wrapper>
      <BlockOutput chunks={post} />
    </Wrapper>
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
