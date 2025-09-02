import programs from '../../data/api-programs.json'
import { ProgramCard } from './'

export default function ProgramsSections() {
  return (
    <section className="w-full text-black py-15 sm:py-15 bg-[#f4fbf8]" >
      <div className='px-5 max-w-6xl m-auto flex flex-col gap-8 md:px-8 lg:gap-11 xl:px-0'>
        {/* Header de la sección */}
        <header className='flex flex-col gap-5 items-center'>
          <h2 className='title'> Nuestros Programas</h2>
          <p className='description text-pretty max-w-5xl'>Ofrecemos programas para diferentes edades y necesidades, todos con un enfoque práctico y divertido.
          </p>
        </header>

        <section className='flex flex-col gap-10 sm:flex-row sm:items-stretch lg:gap-25'>
          {
            programs.map((program, index) => (
              <ProgramCard key={index} {...program} />
            ))
          }
        </section>

      </div>
    </section>
  )
}