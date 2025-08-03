import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom'
export default function VolunteerDonateSection() {
  return (
    <section className="w-full text-white py-15 sm:py-15" style={{ background: 'var(--gradient-st)' }}>
      <div className='px-5 max-w-6xl m-auto flex flex-col gap-8 lg:gap-11 lg:px-0'>

        {/* Header de la sección */}
        <header className='flex flex-col gap-5 items-center'>
          <div>
            <Icon icon="lucide:hand-heart" width="100" height="100" />
          </div>
          <h2 className='title'>Haz que algo grande suceda</h2>
          <p className='description text-pretty'>
            Con tu ayuda, podemos transformar vidas a través de la educación tecnológica. <br />
            Ya sea como voluntario o donando, tú puedes hacer la diferencia.
          </p>
        </header>

        <section className='flex flex-row flex-wrap justify-center items-center gap-6 sm:gap-15'>
          <Link to="/voluntariados">
            <button className="w-50 font-semibold text-base bg-white text-st px-10 py-3 rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-white/40 hover:-translate-y-1">Ser voluntario</button>
          </Link>
          <Link to="donar">
            <button className="w-fit font-semibold text-base bg-white text-st px-10 py-3 rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-white/40 hover:-translate-y-1">Hacer Donación</button>
          </Link>
        </section>

      </div>
    </section>
  )
}