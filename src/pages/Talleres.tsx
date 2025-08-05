import { useEffect } from 'react'
import { FrontPageTalleres } from '../components/Talleres'

export default function Talleres() {
  // Scroll al top cuando se monta el componente
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <FrontPageTalleres />
    </>
  )
}