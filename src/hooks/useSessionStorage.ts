import { useEffect, useState } from 'react'

export const useSessionStorage = <T>(key: string, initialValue: T) => {
  const [value, setValue] = useState<T>(() => {
    const item = sessionStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue
  })

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue] as const
}
