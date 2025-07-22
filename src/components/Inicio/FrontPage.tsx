import { useState, useEffect } from "react";
import { muniLima, democracia, upc } from "../../assets/images/support";
import { frontPageImages } from '../../assets/images/frontPage'


export default function FrontPage() {
  const images = frontPageImages
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Auto-rotate images every 4 seconds with drop animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)

      // After animation starts, change image
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        )
      }, 200) // Small delay to start drop animation

      // Reset animation state
      setTimeout(() => {
        setIsAnimating(false)
      }, 800) // Reset after animation completes

    }, 4000) // Every 4 seconds

    return () => clearInterval(interval)
  }, [images.length])
  return (
    <main className="w-full  min-h-dvh " style={{ background: 'var(--gradient-st)' }}>
      <div className="h-9/10 px-4 max-w-7xl m-auto text-white text-center flex flex-col gap-10 items-center py-5 sm:py-30 sm:flex-row sm:text-left sm:gap-20">
        <div className="flex flex-col gap-8 sm:w-4/10 md:1/2 lg:w-6/10">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">Tranformamos vidas con el poder de la educación</h1>
          <p className="sm:text-xl lg:text-2xl">Brindamos talleres gratuitos, cursos en nuestra aula virtual y proyectos educativos con impacto solial para estudiantes y docentes.</p>
          <div className="flex gap-5 w-fit m-auto sm:m-0">
            <button className="border-2 border-white px-5 py-2 rounded-4xl bg-nd">Donar Ahora</button>
            <button className="border-2 border-white px-5 py-2 rounded-4xl bg-st">Ir al Aula Virtual</button>
          </div>
        </div>
        <div className={` rounded-3xl min-w-75 max-w-120 h-100 sm:w-6/10 md:1/2 lg:4/10 relative z-2 transition-all duration-700 ease-out ${isAnimating
          ? 'transform translate-y-3 rotate-1 scale-[0.98]'
          : 'transform translate-y-0 rotate-0 scale-100'
          }`}>
          {/* Marco de fondo - también se anima */}
          <div className={`w-full h-full -top-1 -left-3 absolute sm:w-[calc(100%+10px)] sm:h-[calc(100%+10px)] bg-gray-200 sm:-top-3 sm:-left-6 rounded-3xl -z-1 transition-all duration-700 ease-out ${isAnimating
            ? 'rotate-[8deg] translate-y-2'
            : 'rotate-[5deg] translate-y-0'
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
      <footer className="h-1/10 bg-white text-center text-black flex flex-col gap-5 py-5 sm:py-15">
        <p className="text-lg sm:text-xl">Reconocidos y apoyados por</p>
        <section className="flex flex-wrap justify-center items-center gap-10">
          <article>
            <img src={muniLima} alt="Logo de Municipalidad de Lima" className="h-12 w-auto" />
          </article>
          <article>
            <img src={democracia} alt="Logo de Democracia Digital" className="h-12 w-auto" />
          </article>
          <article>
            <img src={upc} alt="Logo de UPC" className="h-12 w-auto" />
          </article>
        </section>
      </footer>
    </main>
  )
}   