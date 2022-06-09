import { useEffect, useState } from 'react'

export const useSessionStorage = (key, fallbackState) => {
  const [value, setValue] = useState(
    JSON.parse(sessionStorage.getItem(key)) ?? fallbackState,
  )

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}
