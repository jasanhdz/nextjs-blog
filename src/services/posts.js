import 'isomorphic-fetch'
const PATH = 'https://blog-jasanhdz.vercel.app'

export async function getBooks() {
  try {
    const response = await fetch(`${PATH}/api/notion/books`)
    const data = await response.json()
    return data
  } catch (error) {
    return {
      error,
      results: []
    }
  }
}

export async function getPost(id) {
  try {
    const response = await fetch(`${PATH}/api/notion/books/${id}`)
    const data = await response.json()
    return data
  } catch (error) {
    return {
      error,
      results: []
    }
  }
}