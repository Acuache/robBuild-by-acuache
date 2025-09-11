import { useInView } from 'react-intersection-observer'
import { getDetailProgramImage } from '../../utils/importImage'
interface CardLeftImageDescriptionProps {
  imageName: string
  titleImage: string
  descriptionImage: string
}
export default function CardLeftImageDescription({ imageName, titleImage, descriptionImage }: CardLeftImageDescriptionProps) {
  const { ref, inView } = useInView({
    threshold: 0.3,
  })
  return (
    <article ref={ref} className='w-full flex flex-col items-center lg:flex-row lg:relative  lg:px-8 xl:px-0 lg:-mt-25'>
      <div className={`lg:flex-2/3 max-w-160 lg:h-165 transition-all duration-1000 ${inView ? "opacity-100 -translate-x-0" : "opacity-0 -translate-x-80"}`}>
        <img className='w-full h-full object-cover' src={getDetailProgramImage(imageName)} alt="" />
      </div>
      <div className={`flex flex-col justify-center items-center p-7 gap-4 bg-white lg:absolute  lg:right-0 lg:top-1/2 lg:-translate-y-1/4 sm:p-12 sm:max-w-115 sm:-mt-20 lg:flex-1/3 text-center lg:text-start transition-all duration-1000 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-80"}`}>
        <h3 className='text-2xl  font-semibold sm:text-3xl'>{titleImage}</h3>
        <p className='text-md  sm:text-lg'>{descriptionImage}</p>
      </div>
    </article>
  )
}