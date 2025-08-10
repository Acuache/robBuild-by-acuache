import { Icon } from "@iconify/react";
import results from '../../data/api-results.json'
import { resultImages } from '../../assets/images/results'
import { useEffect, useState } from 'react'


export default function ResultsSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [isAnimating, setIsAnimating] = useState<boolean>(false)
  const [isTextAnimating, setIsTextAnimating] = useState<boolean>(false)
  const result = results[currentIndex]
  function handleClick(index: number) {
    if (index == currentIndex) return
    setIsAnimating(true)
    setIsTextAnimating(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setIsAnimating(false)
    }, 50)
    setTimeout(() => {
      setIsTextAnimating(false)
    }, 400)
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true)
      setIsTextAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (
          prev === results.length - 1 ? 0 : prev + 1
        ))
        setIsAnimating(false)
      }, 50)
      setTimeout(() => {
        setIsTextAnimating(false)
      }, 400)
    }, 8300)
    return () => clearTimeout(timer)
  }, [currentIndex])
  return (
    <section className="w-full text-black py-15 sm:py-15 bg-[#f4fbf8]">
      <div className='px-4 flex flex-col gap-8 lg:gap-11 max-w-6xl m-auto md:px-8 xl:px-0'>

        <header className='flex flex-col gap-5'>
          <h2 className='title'>Resultados que Hablan</h2>
          <p className='description max-w-4xl m-auto'>
            Reconocimientos que respaldan el compromiso de Robbuild con la innovación educativa, <br /> el desarrollo STEAM y el futuro de miles de niños y jóvenes.
          </p>
        </header>

        <section className=''>
          <article className="flex flex-col rounded-xl md:flex-row md:h-163 lg:h-128 overflow-hidden md:rounded-2xl">
            <div className={`h-100 md:basis-1/2  overflow-hidden bg-white md:h-full bg-center bg-no-repeat bg-[length:60%]`}>
              <img
                src={resultImages[currentIndex]}
                alt={result.title}
                className={`w-full h-full duration-50 object-center object-cover  ${isAnimating ? "opacity-0" : "opacity-100"}`}
                style={{
                  objectPosition: currentIndex === 0 ? "70% center" : "center"
                }}
              />
            </div>
            <div className="flex flex-col justify-between gap-5 bg-white p-5 py-10 md:gap-6  md:basis-1/2 md:p-7 ">
              <header className={`duration-200 delay-50 ${isTextAnimating ? "opacity-0 translate-x-10" : "opacity-100 translate-x-0"} `}>
                <h3 className="text-nd text-center text-2xl font-bold sm:text-3xl">{result.title}</h3>
              </header>
              <div className={`flex flex-col gap-4 `}>
                {/* Sección de descripcion */}
                <div className={`flex flex-col gap-1 duration-200 delay-0 ${isTextAnimating ? "opacity-0 translate-x-10" : "opacity-100 translate-x-0"}`}>
                  <div className={`text-st text-lg flex items-center font-semibold gap-3`}>
                    <div>
                      <Icon icon="carbon:idea" width="28" height="28" />
                    </div>
                    <p className="text-lg">Descripción</p>
                  </div>
                  <p className="text-base/5">{result.description}</p>
                </div>

                {/* Sección de Impacto */}
                <div className={`flex flex-col gap-2 duration-200 delay-100 ${isTextAnimating ? "opacity-0 translate-x-10" : "opacity-100 translate-x-0"}`}>
                  <div className="text-st text-lg flex items-center font-semibold gap-3">
                    <div>
                      <Icon icon="mdi-light:heart" width="28" height="28" />
                    </div>
                    <p className="text-lg">Impacto</p>
                  </div>
                  <p className="text-base/5">{result.impact}</p>
                </div>

                {/* Sección de logros */}
                <div className={`flex flex-col gap-2 duration-200 delay-200 ${isTextAnimating ? "opacity-0 translate-x-10" : "opacity-100 translate-x-0"}`}>
                  <div className="text-st text-lg flex items-center font-semibold gap-3">
                    <div>
                      <Icon icon="iconoir:medal" width="28" height="28" />
                    </div>
                    <p className="text-lg">Logros</p>
                  </div>
                  <p className="text-base/5">{result.victories}</p>
                </div>
              </div>
              <div className="flex gap-2">
                {
                  results.map((_, index) => (
                    <button
                      className={`w-3.5 h-3.5 rounded-full cursor-pointer transition-colors ${index === currentIndex ? "bg-st mx-1.5 animate-heartbeat" : "bg-[#c9cbcc]"}`}
                      key={index}
                      onClick={() => handleClick(index)}
                    />

                  ))
                }
              </div>
            </div>
          </article>
        </section>

      </div>
    </section>
  )
}