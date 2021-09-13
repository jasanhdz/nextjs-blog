import Error from 'next/error'
import { getPost } from '../../services/posts'
import BlockOutput from '../../components/content-renderer/BlockOutput'
import Wrapper from '../../components/common/Wrapper'
import Description from '../../components/blog/description'

function Post({ statusCode, post, meta }) {
  if (statusCode) {
    return <Error statusCode={statusCode} />
  }
  return (
    <Wrapper>
      <Description meta={meta} />
      <BlockOutput chunks={post} />      
    </Wrapper>
  )
}

export default Post

export async function getServerSideProps({ params: { slug }, res }) {
  const { data: post, statusCode } = await getPost(slug)
  if(statusCode >= 400) {
    res.statusCode = statusCode
    return { props: { statusCode } }
  }
  return {
    props: {
      post: post.results,
      meta: post.meta
    }
  }
}
