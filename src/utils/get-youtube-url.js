export function getYoutubeURL(url) {
  if (url.includes('https://youtu.be')) {
    const id = url.split('https://youtu.be/')[1]
    return id
  }
  const params = new URLSearchParams(url)
  return params.has('v') ? params.get('v') : 'no_exist'
}