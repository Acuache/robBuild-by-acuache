// Mejorar a futuro está barbaridad 5:55pm 10/09/2025 ¿Que tan grande seré a futuro?
import { useInView } from 'react-intersection-observer'
interface CardRigthImageDescriptionProps {
  imageName: string
  titleImage: string
  descriptionImage: string
}
import { getDetailProgramImage } from '../../utils/importImage'
export default function CardRigthImageDescription({ imageName, titleImage, descriptionImage }: CardRigthImageDescriptionProps) {
  const { ref, inView } = useInView({
    threshold: 0.3
  })
  return (
    <article ref={ref} className='w-full flex flex-col items-center lg:flex-row lg:relative  xl:px-0 lg:justify-end lg:-mt-25'>
      <div className={`z-2 hidden lg:flex flex-col justify-center items-center p-7 gap-4 bg-white lg:absolute lg:h-80 lg:left-0 lg:top-1/2 lg:-translate-y-1/4 sm:p-12 sm:max-w-115 sm:-mt-20 lg:flex-1/3 text-center lg:items-end lg:text-end transition-all duration-1000 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-80"}`}>
        <h3 className='text-2xl  font-semibold sm:text-3xl'>{titleImage}</h3>
        <p className='text-md  sm:text-lg'>{descriptionImage}</p>
      </div>

      <div className={`w-full h-100 sm:h-120 lg:flex-2/3 max-w-160  lg:h-150 transition-all duration-1000 overflow-hidden ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-80"}`}>
        <img className='w-full h-full object-cover' src={getDetailProgramImage(imageName)} alt="" />
      </div>

      <div className={`z-2 flex flex-col justify-center items-center p-7 gap-4 bg-white lg:absolute  lg:left-0 lg:top-1/2 lg:-translate-y-1/4 sm:p-12 sm:max-w-115 sm:-mt-20 lg:flex-1/3 text-center lg:text-end lg:items-end transition-all duration-1000 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-80"}`}>
        <h3 className='text-2xl  font-semibold sm:text-3xl'>{titleImage}</h3>
        <p className='text-md  sm:text-lg'>{descriptionImage}</p>
      </div>

    </article>
  )
}