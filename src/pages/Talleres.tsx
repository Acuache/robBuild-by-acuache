import { useEffect } from 'react'
import { FrontPageTalleres, SectionVideos, NewTallerSection } from '../components/Talleres'
import { Footer } from '../components'

export default function Talleres() {
  // Scroll al top cuando se monta el componente
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <FrontPageTalleres />
      <SectionVideos />
      <NewTallerSection />
      <Footer />
    </>
  )
}