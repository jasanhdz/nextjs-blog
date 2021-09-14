import { Client } from '@notionhq/client'
import { capitalize } from '../../../../utils/strings'

export default async function(req, res) {
  const args = { database_id: process.env.NOTION_DATABASE_ID }
  const { search = '' } = req.query
  try {
    const notion = new Client({ auth: process.env.NOTION_API_KEY })
    if(search) {
      const usersResponse = await notion.users.list({ page_size: 5 })
      const idUser = getUserIdByName(usersResponse.results, search)
      console.log(idUser)
      args.filter = getQueryByNameAndTag(search)
      if(idUser) args.filter.or.push({ property: 'user', people: { contains: idUser }})
    }
    const response = await notion.databases.query(args)
    res.status(200).json({ ...response });
  } catch (error) {
    console.log(error)
    res.status(503).json({ error });
  }
}

function getUserIdByName(users = [], name = '') {
  let idUser = null
  for(let i = 0; i < users.length; i++) {
    if(users[i].name.includes(name) || users[i].name.includes(capitalize(name))) {
      idUser = users[i].id
      i = users.length
    }
  }
  return idUser
}


const getQueryByNameAndTag = (search) => ({
  or: [
    {
      property: 'Name',
      text: {
        contains: search,
      },
    },
    {
      property: 'Name',
      text: {
        contains: capitalize(search),
      },
    },
    {
      property: 'Tags',
      multi_select: {
        contains: search
      }
    },
  ]
})
