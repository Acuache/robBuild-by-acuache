import { Icon } from "@iconify/react";
import { getDetailProgramImage } from "../../utils/importImage";
import { useInView } from 'react-intersection-observer'
import ReactPlayer from 'react-player'

interface DescriptionProgramProps {
  description: string;
  descriptionDetails: string[];
  imgDescription: string
  isActive?: boolean
}

export default function DescriptionProgram({ description, descriptionDetails, imgDescription, isActive = false }: DescriptionProgramProps) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })
  return (
    <main ref={ref} className="w-full text-black py-15 bg-[#f4fbf8]">
      <div className='px-4 flex flex-col gap-8 sm:flex-row lg:gap-11 max-w-6xl m-auto md:px-8 xl:px-0 justify-stretch'>
        <div className={`flex flex-col gap-3 sm:flex-1/2 text-lg duration-1500 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}>
          <p className="">
            {description}
          </p>
          <p>
            Entre sus principales características se destacan:
          </p>
          <ul className="flex flex-col gap-1.5">
            {descriptionDetails.map(((detail, index) => (
              <li key={index} className="flex items-center gap-1">
                <Icon className="text-st" icon="prime:check-circle" width="25" height="25" />
                <p>{detail}</p>
              </li>
            )))}
          </ul>
        </div>
        {
          isActive ? (
            <div className="sm:flex-1/2 h-77">
              <ReactPlayer
                src="https://www.youtube.com/watch?v=nDv7WWjiFM8"
                width="100%"
                height="100%"
                controls={true}
                light={true}
                style={{ objectFit: 'contain' }}
              />
            </div>
          ) : (
            <div className={`sm:flex-1/2 duration-1500 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}>
              <img className="w-full h-full object-cover" src={getDetailProgramImage(imgDescription)} loading="lazy" decoding="async" />
            </div>
          )
        }
      </div>
    </main>
  )
}