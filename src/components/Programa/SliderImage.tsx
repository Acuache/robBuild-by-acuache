import { ImageEffect } from './index'
interface SliderImage {
  year: string
  map: string
  images: string[]
}

export default function SliderImage({ year, map, images }: SliderImage) {
  return (
    <section className="w-full text-black py-15 sm:py-15 relative overflow-hidden">
      <div className='px-5 max-w-6xl m-auto flex flex-col gap-8 lg:gap-11 lg:px-0'>
        <h3 className="title">{year} - {map}</h3>
        <ImageEffect images={images} />
      </div>
    </section>
  )
}