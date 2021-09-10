import { Client } from '@notionhq/client'

export default async function(req, res) {
  const { query: { slug }} = req
  try {
    const notion = new Client({ auth: process.env.NOTION_API_KEY })
    const response = await notion.blocks.children.list({
      block_id: slug,
    })
    res.status(200).json({ ...response });
  } catch (error) {
    res.status(404).json({
      msg: `Error, recurso con id: ${slug} No existe`
    })
  }
}