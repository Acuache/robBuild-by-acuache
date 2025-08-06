import { useState, useEffect } from "react";
import { muniLima, democracia, upc } from "../../assets/images/support";
import { frontPageImages } from '../../assets/images/frontPage'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'


export default function FrontPage() {
  const images = frontPageImages
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [resetTimer, setResetTimer] = useState(0) // Para reiniciar el intervalo

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const { ref: refFooter, inView: inViewFooter } = useInView({
    threshold: 1,
    triggerOnce: true
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        )
      }, 200)
      setTimeout(() => {
        setIsAnimating(false)
      }, 800)

    }, 5000)

    return () => clearInterval(interval)
  }, [images.length, resetTimer]) // ← Agregué resetTimer como dependencia

  function handleClick() {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 200)
    setTimeout(() => {
      setIsAnimating(false)
    }, 800)

    setResetTimer(prev => prev + 1)
  }
  return (
    <main ref={ref} className="w-full mt-16 min-h-dvh flex flex-col" style={{ background: 'var(--gradient-st)' }}>
      <div className=" flex-1 basis-[90%] px-4 max-w-6xl m-auto text-white text-center flex flex-col gap-10 items-center py-10 pb-15 md:px-8 sm:py-30 sm:flex-row sm:text-left sm:gap-12 md:gap-18 lg:gap-25 xl:px-0">
        <div className="flex flex-col gap-8 sm:w-1/3 lg:w-1/3">
          <h1 className={`text-4xl font-bold sm:text-4xl md:text-5xl lg:text-6xl text-balance duration-1000 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`} style={{ textShadow: '0 0 1px currentColor, 1px 0 1px currentColor, 0 1px 1px currentColor, -1px 0 1px currentColor' }}>Tranformamos vidas con el poder de la educación</h1>
          <p className={`sm:text-base md:text-xl lg:text-xl duration-1000 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>Brindamos talleres gratuitos, cursos en nuestra aula virtual y proyectos educativos con impacto solial para estudiantes y docentes.</p>
          <div className="flex gap-5 w-fit m-auto sm:m-0 sm:relative sm:top-9 md:top-0">
            <Link to="donar">
              <button className={`group cursor-pointer whitespace-nowrap text-sm md:text-sm lg:text-lg border-2 border-white px-5 py-2 rounded-4xl bg-nd duration-1000 delay-300 hover:scale-105 hover:shadow-lg hover:shadow-nd/50 transition-all ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                <span className="relative z-10">Donar Ahora</span>
                <div className="absolute inset-0 rounded-4xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>
            <a href="https://aula.robbuild.com" className={`group cursor-pointer whitespace-nowrap text-sm md:text-sm lg:text-lg border-2 border-white px-5 py-2 rounded-4xl bg-st duration-1000 delay-600 hover:scale-105 hover:shadow-lg hover:shadow-st/50 transition-all ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <span className="relative z-10">Ir al Aula Virtual</span>
              <div className="absolute inset-0 rounded-4xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
        <div onClick={handleClick} className={`cursor-pointer p-3 rounded-3xl w-full h-100 sm:w-2/3 lg:w-2/3 relative z-2 transition-all duration-700 ease-out ${inView ? "opacity-100 -translate-x-0" : "opacity-0 translate-x-10"} ${isAnimating
          ? 'transform translate-y-3 rotate-1 scale-[0.98]'
          : 'transform translate-y-0 rotate-0 scale-100'
          }`}>
          {/* Marco de fondo */}
          <div className={`tranform scale-90 sm:scale-100 w-[calc(100%+12px)] h-[calc(100%+4px)] -top-3 -left-1 absolute sm:w-[calc(100%-10px)] sm:h-[calc(100%-10px)] bg-gray-200 sm:top-2 sm:-left-1 rounded-3xl -z-1 transition-all duration-700 ease-out ${isAnimating
            ? 'rotate-[8deg] translate-y-2'
            : 'rotate-[4deg] sm:rotate-[5deg] translate-y-0'
            }`}></div>

          {/* Imagen principal con animación */}
          <img
            className={`w-full h-full object-cover rounded-3xl transition-all duration-500 ease-out ${isAnimating ? 'brightness-90' : 'brightness-100'
              }`}
            src={images[currentImageIndex]}
            alt={`Imagen ${currentImageIndex + 1}`}
          />
        </div>
      </div>
      <footer ref={refFooter} className="basis-[10%] bg-white text-center text-black flex flex-col gap-5 py-5 sm:py-15">
        <p className="text-lg sm:text-xl">Reconocidos y apoyados por</p>
        <section className="flex flex-wrap justify-center items-center gap-10 md:gap-20 lg:gap-30">
          <article className={`duration-700 delay-0 ${inViewFooter ? "opacity-100 -translate-y-0" : "opacity-0 -translate-y-10"}`}>
            <img src={muniLima} alt="Logo de Municipalidad de Lima" className="h-12 w-auto" />
          </article>
          <article className={`duration-700 delay-500 ${inViewFooter ? "opacity-100 -translate-y-0" : "opacity-0 -translate-y-10"}`}>
            <img src={democracia} alt="Logo de Democracia Digital" className="h-12 w-auto" />
          </article>
          <article className={`duration-700 delay-1000 ${inViewFooter ? "opacity-100 -translate-x-0" : "opacity-0 -translate-y-10"}`}>
            <img src={upc} alt="Logo de UPC" className="h-12 w-auto" />
          </article>
        </section>
      </footer>
    </main>
  )
}