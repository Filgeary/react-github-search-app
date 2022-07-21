export const formatWebsiteUrl = (url: string): string => {
  let formattedUrl: string
  const regexp = /^(http|https)/

  if (regexp.test(url)) {
    formattedUrl = url
  } else {
    formattedUrl = 'https://' + url.replace(/^(http|https):\/\//, '')
  }

  return formattedUrl
}

export const formatTwitterUrl = (user: string): string => 'https://twitter.com/' + user
