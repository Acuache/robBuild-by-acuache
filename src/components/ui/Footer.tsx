import { logoWhite } from '../../assets/images/logos'
import { Icon } from "@iconify/react";
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
export default function Footer() {
  const { ref, inView } = useInView({
    threshold: 0.1,
  })
  return (
    <footer ref={ref} className="w-full text-white py-15 bg-[#111827]">
      <div className='px-5 max-w-6xl m-auto flex flex-col gap-6 xl:px-0'>

        {/* Header de la sección */}
        <header className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='flex flex-col gap-5 lg:col-span-2'>
            <div className='w-35'>
              <img className='w-full h-full object-contain' src={logoWhite} alt="" />
            </div>
            <p>Incentivando a niños y jóvenes a optar por carreras STEAM a través de la robótica y tecnología.</p>
            <div className='flex gap-4'>
              <Link to="/donar">
                <button className='bg-white px-6 py-1 rounded-full text-[#111827] font-semibold transition-all duration-300 hover:bg-st hover:text-white hover:scale-105 hover:shadow-lg'>Donar</button>
              </Link>
              <a href='https://aula.robbuild.com' target='black' className='bg-white px-6 py-1 rounded-full text-[#111827] font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-st hover:to-nd hover:text-white hover:scale-105 hover:shadow-lg'>Aula Virtual</a>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <h5 className='font-bold text-st'>Enlaces rápidos</h5>
            <ul className='flex flex-col gap-3'>
              <Link to="/">
                <li className='group cursor-pointer flex items-center gap-2 transition-all duration-300'>
                  <div className="transition-colors duration-300 group-hover:text-st">
                    <Icon icon="ic:round-home" width="24" height="24" />
                  </div>
                  <p className="underline-animation">Inicio</p>
                </li>
              </Link>
              <Link to="/talleres">
                <li className='group cursor-pointer flex items-center gap-2 transition-all duration-300'>
                  <div className="transition-colors duration-300 group-hover:text-st">
                    <Icon icon="grommet-icons:workshop" width="24" height="24" />
                  </div>
                  <p className="underline-animation">Talleres</p>
                </li>
              </Link>
              <Link to="/voluntarios">
                <li className='group cursor-pointer flex items-center gap-2 transition-all duration-300'>
                  <div className="transition-colors duration-300 group-hover:text-st">
                    <Icon icon="formkit:people" width="24" height="24" />
                  </div>
                  <p className="underline-animation">Voluntarios</p>
                </li>
              </Link>
              <Link to="/noticias">
                <li className='group cursor-pointer flex items-center gap-2 transition-all duration-300'>
                  <div className="transition-colors duration-300 group-hover:text-st">
                    <Icon icon="material-symbols:news-outline" width="24" height="24" />
                  </div>
                  <p className="underline-animation">Noticias</p>
                </li>
              </Link>
            </ul>
          </div>
          <div className='flex flex-col gap-2'>
            <h5 className='font-bold text-st'>Contacto</h5>
            <ul className='flex flex-col gap-3'>
              <li className='group cursor-pointer flex items-center gap-2 transition-all duration-300'>
                <div className="transition-colors duration-300 group-hover:text-st">
                  <Icon icon="pepicons-pencil:letter" width="24" height="24" />
                </div>
                <p className="underline-animation">contacto@robbuild.com</p>
              </li>
              <li className=''>
                <a href="https://wa.me/51940686994" target='black' className='group cursor-pointer flex items-center gap-2 transition-all duration-300'>
                  <div className="transition-colors duration-300 group-hover:text-st">
                    <Icon icon="mdi-light:phone" width="24" height="24" />
                  </div>
                  <p className="underline-animation">+51 940686994</p>
                </a>
              </li>
              <li className='group cursor-pointer flex items-center gap-2 transition-all duration-300'>
                <div className="transition-colors duration-300 group-hover:text-st">
                  <Icon icon="ion:location-outline" width="24" height="24" />
                </div>
                <p className="underline-animation">Lima, Perú</p>
              </li>
            </ul>
          </div>
        </header>

        <div className='h-[1px] w-full bg-white'></div>

        <section className='m-auto'>
          <p className='flex flex-row flex-wrap text-center justify-center items-center'>
            <span className='mr-1'><Icon icon="mynaui:copyright" width="24" height="24" /></span>
            2025 Robbuild. Hecho con
            <span className={`text-st mx-1 drop-shadow-sm ${inView ? 'heart-beat-infinite' : ''}`}>
              <Icon icon="mdi:heart-outline" width="24" height="24" />
            </span>
            para el futuro STEAM del Perú.
          </p>
        </section>

      </div>
    </footer>
  )
}