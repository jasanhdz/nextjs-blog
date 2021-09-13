import { getBooks, getPost } from '../../services/posts'
import BlockOutput from '../../components/content-renderer/BlockOutput'
import Wrapper from '../../components/common/Wrapper'
import Description from '../../components/blog/description'
// import slugify from 'slugify'

function Post({ post, meta }) {
  return (
    <Wrapper>
      <Description meta={meta} />
      <BlockOutput chunks={post} />      
    </Wrapper>
  )
}

export default Post

// export async function getStaticPaths() {
//   const { results } = await getBooks()
//   const paths = results.map((book) => ({
//     params: { slug: slugify(book.properties.Name.title[0].plain_text).toLowerCase() }
//   }))
//   return { paths, fallback: false }
// }

export async function getServerSideProps({ params: { slug } }, res) {
  const post = await getPost(slug)
  return {
    props: {
      post: post.results,
      meta: post.meta
    }
  }
}
