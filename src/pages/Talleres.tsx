import { useEffect } from 'react'

export default function Talleres() {
  // Scroll al top cuando se monta el componente
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>Talleres</div>
  )
}