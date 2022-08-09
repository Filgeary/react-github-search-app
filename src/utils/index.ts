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

const localStorageHelperFn = () => {
  return {
    get(key: string): unknown {
      const value = localStorage.getItem(key)
      return value ? JSON.parse(value) : null
    },
    add<T>(key: string, data: T): void {
      const value = this.get(key)
      let newValue: T[] | undefined

      if (value && Array.isArray(value)) {
        newValue = [...value]
      } else {
        newValue = []
      }
      newValue.push(data)
      localStorage.setItem(key, JSON.stringify(newValue))
    },
    remove<T>(key: string, data?: T): void {
      if (!data) {
        localStorage.removeItem(key)
        return
      }

      const value = this.get(key)
      let newValue: T[] | undefined

      if (value && Array.isArray(value) && value.length > 0) {
        if (typeof data === 'string' || typeof data === 'number') {
          newValue = value.filter(x => x !== data)
          if (newValue.length !== 0) {
            localStorage.setItem(key, JSON.stringify(newValue))
          } else {
            localStorage.removeItem(key)
          }
        } else if (typeof data === 'object') {
          const key = Object.keys(data)[0]
          newValue = value.filter(x => Object.keys(x)[0] !== key)
          localStorage.setItem(key, JSON.stringify(newValue))
        } else {
          throw new Error(`Not implemented yet for ${typeof data} type!`)
        }
      } else {
        throw new Error(`On ${key} key, value is Empty`)
      }
    },
    clear(): void {
      localStorage.clear()
    },
  }
}
export const localStorageHelper = localStorageHelperFn()
