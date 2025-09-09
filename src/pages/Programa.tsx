import { HeaderProgram, DescriptionProgram, SectionPhrase, SectionDetails } from '../components/Programa'
import { Footer } from '../components/ui'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import data from '../data/api-detail-programs.json'

export default function Programa() {
  const param = useParams()
  const detail = data.filter(item => item.id === param.title)[0]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!detail) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Programa no encontrado</h1>
          <p className="text-gray-600">El programa que buscas no existe.</p>
        </div>
      </div>
    )
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