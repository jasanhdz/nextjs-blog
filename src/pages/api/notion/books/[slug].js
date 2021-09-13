import { Client } from '@notionhq/client'

export default async function(req, res) {
  const { query: { slug }} = req
  const slugString = slug.split('-').join(' ')
  try {
    const notion = new Client({ auth: process.env.NOTION_API_KEY  })
    const page = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      filter: {
        property: 'Slug',
        text: {
          equals: slugString,
        }
      },
      page_size: 1
    })
    if(!page.results.length) throw new Error()
    const block = await notion.blocks.children.list({
      block_id: page.results[0].id
    })
    res.status(200).json({ meta: page.results[0], ...block });
  } catch (error) {
    res.status(404).json({
      msg: `Error, recurso con slug: ${slug} No existe`
    })
  }
}