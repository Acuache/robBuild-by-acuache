import { useEffect } from 'react'
import { Footer } from '../components/ui/'
import { FoundersSection, VolunteersSection, LifeSection } from '../components/Voluntariados'

export default function Voluntariados() {
  // Scroll al top cuando se monta el componente
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <FoundersSection />
      <VolunteersSection />
      <LifeSection />
      <Footer />
    </>
  )
}