interface CardRigthImageDescriptionProps {
  imageName: string
  titleImage: string
  descriptionImage: string
}
import { getDetailProgramImage } from '../../utils/importImage'
export default function CardRigthImageDescription({ imageName, titleImage, descriptionImage }: CardRigthImageDescriptionProps) {
  // Mejorar a futuro está barbaridad 5:55pm 10/09/2025 ¿Que tan grande seré a futuro?
  return (
    <article className='w-full flex flex-col items-center lg:flex-row lg:relative  lg:px-8 xl:px-0 lg:justify-end lg:-mt-25'>
      <div className='hidden lg:flex flex-col justify-center items-center p-7 gap-4 bg-red-700 lg:absolute lg:h-80 lg:left-0 lg:top-1/2 lg:-translate-1/2 lg:-translate-x-0 lg:mt-0 sm:p-12 sm:max-w-115 sm:-mt-20 lg:flex-1/3 text-center lg:text-start'>
        <h3 className='text-2xl  font-semibold sm:text-3xl'>{titleImage}</h3>
        <p className='text-md  sm:text-lg'>{descriptionImage}</p>
      </div>

      <div className='lg:flex-2/3 max-w-192 lg:h-165'>
        <img className='w-full h-full object-cover' src={getDetailProgramImage(imageName)} alt="" />
      </div>

      <div className='flex flex-col justify-center items-center p-7 gap-4 bg-white lg:absolute lg:h-80 lg:left-0 lg:top-1/2 lg:-translate-1/2 lg:-translate-x-0 lg:mt-0 sm:p-12 sm:max-w-115 sm:-mt-20 lg:flex-1/3 text-center lg:text-end'>
        <h3 className='text-2xl  font-semibold sm:text-3xl'>{titleImage}</h3>
        <p className='text-md  sm:text-lg'>{descriptionImage}</p>
      </div>

    </article>
  )
}