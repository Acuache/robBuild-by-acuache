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
    <header className='w-full h-16 bg-white z-10 fixed top-0 shadow-md'>
      <div className='max-w-6xl h-15 m-auto  flex justify-between items-center xl:px-0 px-6'>
        <Link to="/">
          <div className='w-25 h-10 '>
            <img src={logoColor} alt="Logo de RobBuild" />
          </div>
        </Link>
        <nav className={`w-70 h-dvh p-5 fixed top-0 right-0 bg-white flex flex-col transition-all duration-300 ${isActive ? "translate-x-0" : "translate-x-full"} sm:translate-x-0 sm:static sm:flex sm:flex-row sm:w-auto sm:h-auto sm:p-0 z-8`}>
          <div className="cursor-pointer sm:hidden" onClick={handleClick}>
            <Icon icon="heroicons:x-mark" width="24" height="24" />
          </div>
          <ul className='flex flex-col sm:flex-row gap-3 transition-all duration-300 md:flex-row sm:gap-3 sm:text-md md:gap-8 lg:gap-12'>
            <li className="relative group">
              <Link to="/" className="relative">
                Inicio
                <span className="absolute -bottom-[2px] left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-st transition-all duration-500 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="relative group">
              <Link to="/noticias" className="relative">
                Noticias
                <span className="absolute -bottom-[2px] left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-st transition-all duration-500 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="relative group">
              <Link to="/talleres" className="relative">
                Talleres
                <span className="absolute -bottom-[2px] left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-st transition-all duration-500 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="relative group">
              <Link to="/voluntarios" className="relative">
                Voluntarios
                <span className="absolute -bottom-[2px] left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-st transition-all duration-500 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="relative group">
              <Link to="/donar" className="relative">
                Donar
                <span className="absolute -bottom-[2px] left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-st transition-all duration-500 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex justify-center items-center gap-3">
          <button className='bg-st text-white px-3 py-1 text-sm rounded-md sm:text-base sm:rounded-md'>Ir al Aula Virtual</button>
          <div className="cursor-pointer sm:hidden" onClick={handleClick}>
            <Icon icon="fe:bar" width="24" height="24" />
          </div>
        </div>
      </div>
    </header>
  )
}