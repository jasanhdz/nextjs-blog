import { Client } from '@notionhq/client'
import slugify from 'slugify'

export default async function(req, res) {
  const { query: { slug }} = req
  try {
    const notion = new Client({ auth: process.env.NOTION_API_KEY  })
    const books = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID
    })
    const book = books.results.filter((result) => {
      const slugItem = slugify(result.properties.Name.title[0].plain_text).toLowerCase()
      if(slug === slugItem) return result
    })
    if(!book[0].id) throw new Error('Id no existe')
    const response = await notion.blocks.children.list({
      block_id: book[0].id,
    })
    res.status(200).json({ ...response, meta: book[0] });
  } catch (error) {
    res.status(404).json({
      msg: `Error, recurso con id: ${slug} No existe`
    })
  }
}