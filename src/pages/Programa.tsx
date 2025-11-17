import { HeaderProgram, DescriptionProgram, SectionPhrase, SectionDetails, SectionImageDescription, SliderImage } from '../components/Programa'
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
      {
        detail.id !== "chocolatada-steam" && (
          <>
            <SectionDetails
              requirements={detail.requirements}
              methodology={detail.methodology}
              platforms={detail.platforms}
            />
            <SectionImageDescription detailsImages={detail.imagesDescriptions} />
          </>
        )
      }

      {
        detail.id === "chocolatada-steam" && (
          detail.years!.map((year, index) => (
            <SliderImage {...year} key={`${index}-${year}`} />
          ))
        )
      }
      <Footer />
    </>
  )
}