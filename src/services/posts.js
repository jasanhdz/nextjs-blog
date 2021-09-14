import 'isomorphic-fetch'
const PATH = 'https://blog-jasanhdz.vercel.app'
// const PATH = 'http://localhost:3000'

export async function getBooks(query) {
  const baseUrl = `${PATH}/api/notion/books`
  const url = query ? baseUrl.concat(`?search=${query}`) : baseUrl
  try {
    const response = await fetch(url)
    if (response.status >= 400) return { statusCode: response.status }
    const data = await response.json()
    return { data, statusCode: response.status }
  } catch (error) {
    return { statusCode: 503 }
  }
}

export async function getPost(slug) {
  try {
    const response = await fetch(`${PATH}/api/notion/books/${slug}`)
    if (response.status >= 400) return { statusCode: response.status }
    const data = await response.json()
    return { data, statusCode: response.status }
  } catch (error) {
    return { statusCode: 503 }
  }
}