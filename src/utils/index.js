/**
 * @param {string} url
 */
export const formatWebsiteUrl = url => {
  let formattedUrl
  const regexp = /^(http|https)/

  if (regexp.test(url)) {
    formattedUrl = url
  } else {
    formattedUrl = 'https://' + url.replace(/^(http|https):\/\//, '')
  }

  return formattedUrl
}

/**
 * @param {string} user
 */
export const formatTwitterUrl = user => 'https://twitter.com/' + user
