import { logoWhite } from '../../assets/images/logos'
import { Icon } from "@iconify/react";
export default function Footer() {
  return (
    <footer className="w-full text-white py-15 bg-[#111827]">
      <div className='px-5 max-w-6xl m-auto flex flex-col gap-6 lg:px-0'>

        {/* Header de la sección */}
        <header className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='flex flex-col gap-5 lg:col-span-2'>
            <div className='w-35'>
              <img className='w-full h-full object-contain' src={logoWhite} alt="" />
            </div>
            <p>Incentivando a niños y jóvenes a optar por carreras STEAM a través de la robótica y tecnología.</p>
            <div className='flex gap-4'>
              <button className='bg-white px-6 py-1 rounded-full text-st font-semibold transition-all duration-300 hover:bg-st hover:text-white hover:scale-105 hover:shadow-lg'>Donar</button>
              <button className='bg-white px-6 py-1 rounded-full text-st font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-st hover:to-nd hover:text-white hover:scale-105 hover:shadow-lg'>Aula Virtual</button>
            </div>
          </div>
          <div className=''>
            <h5 className='font-bold text-st'>Enlaces rápidos</h5>
            <ul className='flex flex-col gap-3'>
              <li className='flex items-center gap-2'>
                <div>
                  <Icon icon="ic:round-home" width="24" height="24" />
                </div>
                <p>Home</p>
              </li>
              <li className='flex items-center gap-2'>
                <div>
                  <Icon icon="grommet-icons:workshop" width="24" height="24" />
                </div>
                <p>Talleres</p>
              </li>
              <li className='flex items-center gap-2'>
                <div>
                  <Icon icon="ic:round-laptop" width="24" height="24" />
                </div>
                <p>Aula Virtual</p>
              </li>
            </ul>
          </div>
          <div>
            <h5 className='font-bold text-st'>Contacto</h5>
            <ul className='flex flex-col gap-3'>
              <li className='flex items-center gap-2'>
                <div>
                  <Icon icon="pepicons-pencil:letter" width="24" height="24" />
                </div>
                <p>ingo@robbuild.com</p>
              </li>
              <li className='flex items-center gap-2'>
                <div>
                  <Icon icon="mdi-light:phone" width="24" height="24" />
                </div>
                <p>+51 987654321</p>
              </li>
              <li className='flex items-center gap-2'>
                <div>
                  <Icon icon="ion:location-outline" width="24" height="24" />
                </div>
                <p>Lima, Perú</p>
              </li>
            </ul>
          </div>
        </header>

        <div className='h-[1px] w-full bg-white'></div>

        <section className='m-auto'>
          <p className='flex flex-row flex-wrap text-center justify-center items-center'>
            <span className='mr-1'><Icon icon="mynaui:copyright" width="24" height="24" /></span>
            2025 Robbuild. Hecho con
            <span className='text-st mx-1'><Icon icon="mdi:heart-outline" width="24" height="24" /></span>
            para el futuro STEAM del Perú.
          </p>
        </section>

      </div>
    </footer>
  )
}