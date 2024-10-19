export const getUrl = (url: string | null | undefined) => {
  if (!url) return null
  return url.startsWith('http') ? url : `https://${url}`
}

export const getUrlText = (url: string | null | undefined) => {
  if (!url) return null
  return url.replace(/(^\w+:|^)\/\//, '')
}
