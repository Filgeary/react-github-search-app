import { debounce } from 'lodash'
import { useEffect, useState } from 'react'

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    // initial state `undefined` for consistency on frontend & backend
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    const debouncedHandler = debounce(handleResize, 150)
    window.addEventListener('resize', debouncedHandler)

    // set initial window sizes
    handleResize()

    return () => window.removeEventListener('resize', debouncedHandler)
  }, [])

  return windowSize
}
