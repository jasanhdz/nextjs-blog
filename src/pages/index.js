import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Wrapper from '../components/common/wrapper'
import ArticleList from '../components/home/article-list'

function Index({ posts }) {
  return (
    <Wrapper>
     <h1>Articulos ✍🏻</h1>
     <ArticleList articles={posts} />
    </Wrapper>
  )
}

export default Index;

export async function getStaticProps() {
  const root = path.join(process.cwd(), 'src', 'posts')
  const files = fs.readdirSync(root)
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '')
    const markdownWithMeta = fs.readFileSync(path.join(root, filename), 'utf-8')
    const { data: frontmatter } = matter(markdownWithMeta)
    return { slug, frontmatter }
  })
  return {
    props: {
      posts
    }
  }
}
