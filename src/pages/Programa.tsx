import { HeaderProgram, DescriptionProgram, SectionPhrase, SectionDetails, SectionImageDescription } from '../components/Programa'
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

  // Si no encuentra el programa (por si acaso)
  // if (!detail) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       <div className="text-center">
  //         <h1 className="text-2xl font-bold">Programa no encontrado</h1>
  //         <p className="text-gray-600 mt-2">El programa que buscas no existe.</p>
  //       </div>
  //     </div>
  //   )
  // }

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
      <SectionImageDescription detailsImages={detail.imagesDescriptions} />
      <SectionDetails
        requirements={detail.requirements}
        methodology={detail.methodology}
        platforms={detail.platforms}
      />
      <Footer />
    </>
  )
}