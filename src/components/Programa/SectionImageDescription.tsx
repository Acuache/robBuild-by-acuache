import { CardLeftImageDescription, CardRigthImageDescription } from './'
interface CardImageDescriptionProps {
  imageName: string
  titleImage: string
  descriptionImage: string
}
interface SectionImageDescriptionProps {
  detailsImages: CardImageDescriptionProps[]
}
export default function SectionImageDescription({ detailsImages }: SectionImageDescriptionProps) {
  return (
    <div className='w-full py-15 pt-25 bg-[#f4fbf8]'>
      <section className='px-5 max-w-5xl m-auto flex flex-col gap-8  lg:gap-11 lg:px-0 '>

        {
          detailsImages.map((detail, index) => (
            (index % 2 === 0) ? (
              <CardLeftImageDescription {...detail} />
            ) : (
              <CardRigthImageDescription {...detail} />
            )
          ))
        }

      </section>
    </div>
  )
}