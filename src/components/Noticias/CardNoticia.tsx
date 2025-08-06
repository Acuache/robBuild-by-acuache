import { getVolunteerImage } from "../../utils/importImagesNews";

interface CardNoticiaProps {
  "url": string,
  "title": string,
  "description": string,
  "tag": string,
  "img": string,
}
export default function CardNoticia({ url, title, description, tag, img }: CardNoticiaProps) {
  return (
    <article className="bg-white flex flex-col h-full overflow-hidden rounded-xl relative">
      <div className="absolute bg-st text-white top-3 left-5  px-3 rounded-full">
        {tag}
      </div>
      <div className="h-65">
        <img className="w-full h-full object-cover" src={getVolunteerImage(img)} alt={title} />
      </div>
      <div className="flex flex-col flex-1 gap-2 p-5">
        <h3 className="font-bold text-lg line-clamp-2">{title}</h3>
        <p className="text-md text-gray800 line-clamp-4 mb-3">{description}</p>
        <div className="flex justify-between items-center mt-auto">
          <p className="text-gray800">15 Oct. 2021</p>
          <a
            href={url}
            target="black"
            className="text-st font-semibold"
          >
            Ver más
          </a>
        </div>
      </div>
    </article>
  )
}