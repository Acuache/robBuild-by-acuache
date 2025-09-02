import { getDetailProgramImage } from '../../utils/importImage'
interface HeaderProgramProps {
  imgHeader: string;
  title: string;
  subtitle: string
}
export default function HeaderProgram({ imgHeader, title, subtitle }: HeaderProgramProps) {
  return (
    <section className="w-full h-55 sm:h-60 md:h-80 mt-16 relative">
      <img className="w-full h-full object-cover" src={getDetailProgramImage(imgHeader)} />
      <div className="absolute inset-0 bg-black/60 z-1"></div>
      <div className='text-white px-5 flex flex-col gap-2 max-w-6xl md:px-8 xl:px-0  absolute inset-x-0 m-auto  bottom-6 z-2'>
        <h1 className=" text-3xl font-extrabold sm:text-4xl md:text-5xl">{title}</h1>
        <p className="hidden sm:block sm:text-lg">{subtitle}</p>
      </div>
    </section>
  )
}