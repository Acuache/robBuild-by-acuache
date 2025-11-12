import { FrontPageNoticia } from '../components/Noticias'
import { Footer } from '../components/ui'
import { useEffect } from 'react'
export default function Noticias() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <FrontPageNoticia />
      <Footer />
    </>
  )
}