import { Icon } from "@iconify/react";
import { getDetailProgramImage } from "../../utils/importImage";

interface DescriptionProgramProps {
  description: string;
  descriptionDetails: string[];
  imgDescription: string
}

export default function DescriptionProgram({ description, descriptionDetails, imgDescription }: DescriptionProgramProps) {
  return (
    <section className="w-full text-black py-15 ">
      <div className='px-4 flex flex-col gap-8 sm:flex-row lg:gap-11 max-w-6xl m-auto md:px-8 xl:px-0 justify-stretch'>
        <div className="flex flex-col gap-3 sm:flex-1/2 text-lg ">
          <p className="">
            {description}
          </p>
          <p>
            Entre sus principales características se destacan:
          </p>
          <ul className="flex flex-col gap-1.5">
            {descriptionDetails.map(((detail, index) => (
              <li key={index} className="flex">
                <Icon className="text-st" icon="prime:check-circle" width="24" height="24" />
                <p>{detail}</p>
              </li>
            )))}
          </ul>
        </div>
        <div className=" sm:flex-1/2 bg-red-400">
          <img className="w-full h-full object-cover" src={getDetailProgramImage(imgDescription)} />
        </div>
      </div>
    </section>
  )
}