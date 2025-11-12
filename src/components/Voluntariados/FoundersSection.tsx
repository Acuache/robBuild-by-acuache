import { CardFounder } from './'
import { founder1, founder2 } from '../../assets/images/founders'

export default function FoundersSection() {
  return (
    <section className="mt-16 w-full  py-15  bg-[#f4fbf8]">
      <div className='px-5 max-w-6xl m-auto flex flex-col gap-8 lg:gap-11 lg:px-0'>

        {/* Header de la sección */}
        <header className='flex flex-col gap-5 items-center'>
          <h2 className='title'>Fundadores que iniciaron <br /><span
            className="bg-clip-text text-transparent bg-gradient-to-r"
            style={{ backgroundImage: 'var(--gradient-st)' }}
          >está REVOLUCIÓN</span></h2>
          <p className='description text-pretty'>Dos personas extraordinarias que decidieron que el futuro tecnológico del Perú no podía esperar más.</p>
        </header>

        <section className='flex flex-row flex-wrap gap-5 justify-center items-center md:gap-8'>
          <CardFounder
            name="Maycoll Gamarra Chura"
            job="Director General"
            img={founder1}
            url="https://www.linkedin.com/in/maycoll-gamarra-chura-a721b7156/"
          />
          <CardFounder
            name="Diego Vargas Triveño"
            job="Director de Proyectos"
            img={founder2}
            url="https://www.youtube.com/"
          />
        </section>

      </div>
    </section>
  )
}