import 'isomorphic-fetch'
const PATH = 'http://localhost:3000'

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