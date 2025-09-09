import { HeaderProgram, DescriptionProgram, SectionPhrase, SectionDetails } from '../components/Programa'
import { Footer } from '../components/ui'
import { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import data from '../data/api-detail-programs.json'

export default function Programa() {
  const param = useParams()
  const detail = data.filter(item => item.id === param.title)[0]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Si no se encuentra el programa, redirigir a 404
  if (!detail) {
    return <Navigate to="/404" replace />
  }

  return (
    <>
      <HeaderProgram
        imgHeader={detail.imgHeader}
        title={detail.title}
        subtitle={detail.subtitle}
      />
      <DescriptionProgram
        description={detail.description}
        descriptionDetails={detail.descriptionDetails}
        imgDescription={detail.imgDescription}
      />
      <SectionPhrase />
      <SectionDetails
        requirements={detail.requirements}
        methodology={detail.methodology}
        platforms={detail.platforms}
      />
      <Footer />
    </>
  )
}