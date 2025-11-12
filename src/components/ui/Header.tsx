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
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <div className='w-25 h-10'>
            <img src={logoColor} alt="Logo de RobBuild" />
          </div>
        </Link>
        {
          isActive && (
            <div className="fixed inset-0 w-screen h-dvh backdrop-blur-xs z-19 bg-black/2 sm:hidden" onClick={handleClick}></div>
          )
        }
        <nav className={`w-70 h-dvh p-5 fixed top-0 right-0 bg-white flex flex-col transition-all duration-300 ${isActive ? "translate-x-0" : "translate-x-full"} md:translate-x-0 md:static md:flex md:flex-row md:w-auto md:h-auto md:p-0 z-20`}>
          <div className="cursor-pointer md:hidden  flex justify-end items-end pr-1" onClick={handleClick}>
            <Icon icon="heroicons:x-mark" width="24" height="24" />
          </div>
          <ul className='flex flex-col gap-3 transition-all duration-300 md:flex-row sm:gap-3 md:text-md md:gap-6 lg:gap-12'>
            <li className="relative group">
              <Link to="/" className="relative" onClick={handleClick}>
                Inicio
                <span className="absolute -bottom-[2px] left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-st transition-all duration-500 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="relative group flex flex-col">
              <p className="">Proyectos</p>

              {/* Submenu Mobile */}
              <div className="md:hidden pl-5 py-2 flex flex-col gap-2">
                <div className="group/submenu">
                  <Link to={`/programa/robotica-para-todos-con-enfoque-steam`} className="relative" onClick={handleClick}>
                    Robótica STEAM
                    <span className="absolute -bottom-[2px] left-0 transform w-0 h-0.5 bg-st transition-all duration-500 group-hover/submenu:w-full"></span>
                  </Link>
                </div>
                <div className="group/submenu">
                  <Link to={`/programa/robotica-para-un-futuro-sin-brechas`} className="relative" onClick={handleClick}>
                    Robótica sin brechas
                    <span className="absolute -bottom-[2px] left-0 transform w-0 h-0.5 bg-st transition-all duration-500 group-hover/submenu:w-full"></span>
                  </Link>
                </div>
              </div>
              {/* Submenu desktop*/}
              <div className="absolute top-full hidden md:block">
                <div className="absolute md:w-55 bg-white md:top-full p-5 flex flex-col gap-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out">
                  <div className="group/submenu">
                    <Link to={`/programa/robotica-para-todos-con-enfoque-steam`} className="relative" onClick={handleClick}>
                      Robótica STEAM
                      <span className="absolute -bottom-[2px] left-0 transform w-0 h-0.5 bg-st transition-all duration-500 group-hover/submenu:w-full"></span>
                    </Link>
                  </div>
                  <div className="group/submenu">
                    <Link to={`/programa/robotica-para-un-futuro-sin-brechas`} className="relative" onClick={handleClick}>
                      Robótica sin brechas
                      <span className="absolute -bottom-[2px] left-0 transform w-0 h-0.5 bg-st transition-all duration-500 group-hover/submenu:w-full"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative group">
              <Link to="/talleres" className="relative" onClick={handleClick}>
                Talleres
                <span className="absolute -bottom-[2px] left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-st transition-all duration-500 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="relative group">
              <Link to="/voluntarios" className="relative" onClick={handleClick}>
                Voluntarios
                <span className="absolute -bottom-[2px] left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-st transition-all duration-500 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="relative group">
              <Link to="/noticias" className="relative" onClick={handleClick}>
                Noticias
                <span className="absolute -bottom-[2px] left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-st transition-all duration-500 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="relative group">
              <Link to="/donar" className="relative" onClick={handleClick}>
                Donar
                <span className="absolute -bottom-[2px] left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-st transition-all duration-500 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex justify-center items-center gap-3">
          <a href="https://aula.robbuild.com" className='bg-st text-white font-bold scale-100 md:scale-85 px-3 py-1 text-sm rounded-md sm:text-base sm:rounded-md lg:scale-100 text-center md:text-center'>Ir al Aula Virtual</a>
          <div className="cursor-pointer md:hidden" onClick={handleClick}>
            <Icon icon="fe:bar" width="24" height="24" />
          </div>
        </div>
      </div>
    </header>
  )
}