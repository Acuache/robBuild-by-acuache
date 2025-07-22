import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom'
import { logoColor } from '../../assets/images/logos'
import { useState } from 'react'
export default function Header() {
  const [isActive, setIsActive] = useState(false)
  const handleClick = () => {
    setIsActive(!isActive)
  }
  return (
    <header className='w-full h-15 bg-white'>
      <div className='max-w-7xl h-15 m-auto px-4 flex justify-between items-center'>
        <div className='w-25 h-10 '>
          <img src={logoColor} alt="Logo de RobBuild" />
        </div>
        <nav className={`w-70 h-dvh p-5 fixed top-0 right-0 bg-white flex flex-col transition-all duration-300 ${isActive ? "translate-x-0" : "translate-x-full"} sm:translate-x-0 sm:static sm:flex sm:flex-row sm:w-auto sm:h-auto sm:p-0 z-8`}>
          <div className="cursor-pointer sm:hidden" onClick={handleClick}>
            <Icon icon="heroicons:x-mark" width="24" height="24" />
          </div>
          <ul className='flex flex-col sm:flex-row gap-3 transition-all duration-300 md:flex-row sm:gap-5 md:gap-8 lg:gap-12'>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/talleres">Talleres</Link>
            </li>
            <li>
              <Link to="/voluntariados">Voluntariados</Link>
            </li>
            <li>
              <Link to="/donar">Donar</Link>
            </li>
          </ul>
        </nav>
        <div className="flex justify-center items-center gap-3">
          <button className='bg-st text-white px-3 py-1'>Ir al Aula Virtual</button>
          <div className="cursor-pointer sm:hidden" onClick={handleClick}>
            <Icon icon="fe:bar" width="24" height="24" />
          </div>
        </div>
      </div>
    </header>
  )
}