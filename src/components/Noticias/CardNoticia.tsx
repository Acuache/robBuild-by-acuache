import { getVolunteerImage } from "../../utils/importImagesNews";

interface CardNoticiaProps {
  "url": string,
  "title": string,
  "img": string,
  "date": string,
  isVisible: boolean
}

export default function CardNoticia({ url, title, img, date, isVisible }: CardNoticiaProps) {
  const img__ciplima = (img === "ciplima.png") ? "w-[75%]" : "w-[55%]"
  return (
    <article className={`bg-white flex flex-col h-full overflow-hidden rounded-xl relative transition-all duration-700 ease-out transform hover:shadow-lg hover:shadow-gray-300/50 hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}>
      <div className="h-40 bg-gray-100 flex items-center justify-center">
        <img className={`${img__ciplima} h-full object-contain`} src={getVolunteerImage(img)} alt={title} />
      </div>
      <div className="flex flex-col flex-1 gap-2 p-5">
        <h3 className="font-bold text-lg line-clamp-3">{title}</h3>
        <div className="flex justify-between items-center mt-auto">
          <p className="text-gray800">{date}</p>
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