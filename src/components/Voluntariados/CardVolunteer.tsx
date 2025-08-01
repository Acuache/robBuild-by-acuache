import { Icon } from "@iconify/react";
import { getVolunteerImage } from "../../utils/importImage";

interface CardVolunteerProps {
  specialty: string,
  name: string,
  profession: string
  img: string,
  location: string,
  linkedin: string,
  isAll: boolean
}

export default function CardVolunteer({ specialty, name, profession, img, location, linkedin, isAll }: CardVolunteerProps) {
  return (
    <article className={`group relative w-full max-w-[320px] h-100 rounded-md overflow-hidden duration-300`}>
      {
        isAll && (
          <div
            style={{ background: 'var(--gradient-st)' }}
            className="absolute text-white text-md px-3 rounded-full top-[3%] left-[5%] opacity-0 duration-300 group-hover:opacity-100"
          >{specialty}</div>
        )
      }

      {/* Effecto Circulo */}
      <a href={linkedin} target="black">
        <div className="absolute flex justify-center items-center text-white w-18 h-18 bg-[#33AA6F]/80 rounded-full  duration-500 opacity-0 -right-[30%] -top-[30%] group-hover:-right-[5%] group-hover:-top-[3%] group-hover:opacity-100">
          <Icon icon="bi:linkedin" width="28" height="28" />
        </div>
      </a>

      {/* Effecto Detalle */}
      <div
        style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)" }}
        className="z-3 absolute w-[70%] h-auto text-white text-sm bg-st bottom-12 flex  flex-col gap-1 justify-center pl-3 py-1 duration-500 -left-[100%] opacity-0 group-hover:-left-[0%] group-hover:opacity-100"
      >
        <p className="text-sm opacity-0 -translate-x-10 delay-500 duration-300 group-hover:opacity-100 group-hover:-translate-x-0">{profession}</p>
        <div className="flex opacity-0 -translate-x-10 delay-500 duration-300 group-hover:opacity-100 group-hover:-translate-x-0">
          <div className="">
            <Icon icon="mdi:location" width="22" height="22" />
          </div>
          <p>{location}</p>
        </div>
      </div>

      <img
        src={getVolunteerImage(img)}
        alt={name}
        className="w-full h-[100%] object-cover rounded-b-2xl"
      />

      <div className="absolute w-full bottom-0 bg-white h-12 flex justify-center items-center">
        <p className="font-medium text-gray-800">{name}</p>
      </div>

      {/* Effectos Complementarios */}
      <div
        style={{ clipPath: "polygon(0 0, 100% 0, 86% 100%, 0% 100%)" }}
        className="z-1 absolute w-[calc(70%+4px)] h-auto text-sm bg-white/90 bottom-12 flex flex-col gap-1 justify-center pl-3 py-1 duration-500 -left-[100%] opacity-0 group-hover:-left-[0%] group-hover:opacity-100"
      >
        {/* Para que se adapte */}
        <div className="opacity-0">
          <div className="">
            <Icon icon="mdi:location" width="22" height="22" />
          </div>
          <p>{location}</p>
        </div>
      </div>

    </article>
  )
}