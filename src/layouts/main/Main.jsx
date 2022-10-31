import { useEffect, useState } from 'react'
import { MainCnt } from './MainStyle'

export default function Main({ children }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const detectSize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize)

    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowWidth])

  return (
    <MainCnt windowWidth={`${windowWidth}`}>
        {children}
    </MainCnt>
  )
}
