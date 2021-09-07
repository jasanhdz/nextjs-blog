import fs from 'fs'
import path from 'path'
import Wrapper from '../../components/common/wrapper'
import matter from 'gray-matter'
import Hero from '../../components/blog/hero'
import marked from 'marked'
import Navigation from '../../components/common/navigation'

function Post({ frontmatter, content }) {
  return (
    <>
      <Navigation />
      <Hero frontmatter={frontmatter} />
      <Wrapper>
        <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
      </Wrapper>
    </>
  )
}

export default Post

export async function getStaticPaths() {
  const root = path.join(process.cwd(), 'src', 'posts')
  const files = fs.readdirSync(root)
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', '')
    }
  }))
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { slug } }) {
  const root = path.join(process.cwd(), 'src', 'posts')
  const markdownWithMeta = fs.readFileSync(path.join(root, `${slug}.md`), 'utf-8')
  const { data: frontmatter, content } = matter(markdownWithMeta)
  return {
    props: {
      slug,
      content,
      frontmatter,
    }
  }
}
