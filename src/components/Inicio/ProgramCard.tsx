import { resultImages } from '../../assets/images/programs'
import { Icon } from "@iconify/react";

interface ProgramCardProps {
  id: number,
  title: string,
  description: string,
  informations: string[],
  img?: string
}

export default function ProgramCard({ id, title, description, informations }: ProgramCardProps) {
  return (
    <article className='overflow-hidden rounded-lg flex flex-col'>
      <div className='h-65'>
        <img className='w-full h-full object-cover' src={resultImages[id]} alt={title} />
      </div>
      <div className='bg-white p-4 flex flex-col items-center gap-2 flex-grow justify-between lg:p-4'>
        <div className='flex flex-col items-center gap-3 '>
          <h3 className='font-bold text-st text-2xl '>{title}</h3>
          <p className='text-base'>{description}</p>
          <div className='flex flex-col gap-3'>
            {
              informations.map((information) => (
                <div className='flex gap-3'>
                  <div className='text-st'>
                    <Icon icon="mynaui:check-circle-one-solid" width="25" height="25" />
                  </div>
                  <p className='text-base'>{information}</p>
                </div>
              ))
            }
          </div>
        </div>
        <button className='mt-3 text-white font-bold w-fit px-6 py-2 rounded-full transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl hover:shadow-st/30 hover:-translate-y-1 hover:brightness-110 active:scale-95' style={{ background: 'var(--gradient-st)' }}>Más información</button>
      </div>
    </article>
  )
}