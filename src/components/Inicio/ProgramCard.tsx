import { resultImages } from '../../assets/images/programs'
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom'

interface ProgramCardProps {
  id: number,
  title: string,
  description: string,
  informations: string[],
  img?: string
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Elimina tildes
    .replace(/[^a-z0-9\s-]/g, '') // Elimina caracteres especiales
    .trim()
    .replace(/\s+/g, '-') // Reemplaza espacios con guiones
    .replace(/-+/g, '-'); // Elimina guiones duplicados
}

export default function ProgramCard({ id, title, description, informations }: ProgramCardProps) {
  const idProgram = slugify(title)

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
        <Link to={`/programa/${idProgram}`}>
          <button className='mt-3 text-white font-bold w-fit px-6 py-2 rounded-full transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-st/20 hover:-translate-y-1 hover:brightness-110 active:scale-95' style={{ background: 'var(--gradient-st)' }}>Más información</button>
        </Link>
      </div>
    </article>
  )
}