interface ImageEffectProps {
  images: string[]
}
import { getDetailProgramImage } from '../../utils/importImage'

export default function ImageEffect({ images }: ImageEffectProps) {
  const resolvedImages = images.map((name) => getDetailProgramImage(name))
  const loopImages = [...resolvedImages, ...resolvedImages]

  return (
    <div className="w-full">
      {/* Fila 1: Derecha -> Izquierda */}
      <div className="overflow-hidden marquee-mask">
        <div className="marquee-rtl items-center gap-6 sm:gap-8">
          {
            loopImages.map((src, index) => (
              <img
                key={`row1-img-${index}`}
                src={src}
                alt={`imagen-${index}`}
                decoding="async"
                className="h-44 sm:h-56 md:h-64 lg:h-72  object-cover rounded-xl flex-shrink-0"
              />
            ))
          }
        </div>
      </div>

      {/* Espaciado entre filas */}
      <div className="h-6 sm:h-8"></div>

      {/* Fila 2: Izquierda -> Derecha */}
      <div className="overflow-hidden marquee-mask">
        <div className="marquee-ltr items-center gap-6 sm:gap-8">
          {
            loopImages.map((src, index) => (
              <img
                key={`row2-img-${index}`}
                src={src}
                alt={`imagen-${index}`}
                decoding="async"
                className="h-44 sm:h-56 md:h-64 lg:h-72  object-cover rounded-xl flex-shrink-0"
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}