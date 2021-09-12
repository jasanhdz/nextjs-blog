import { Client } from '@notionhq/client'
import slugify from 'slugify'

export default async function(req, res) {
  const { query: { slug }} = req
  let id = null
  try {
    const notion = new Client({ auth: process.env.NOTION_API_KEY  })
    const books = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID
    })
    books.results.forEach((result) => {
      const slugItem = slugify(result.properties.Name.title[0].plain_text).toLowerCase()
      if(slug === slugItem) id = result.id
    })
    if(!id) throw new Error('Id no existe')
    const response = await notion.blocks.children.list({
      block_id: id,
    })
    res.status(200).json({ ...response });
  } catch (error) {
    res.status(404).json({
      msg: `Error, recurso con id: ${slug} No existe`
    })
  }
}