import { Icon } from "@iconify/react";
import results from '../../data/api-results.json'
import { resultImages } from '../../assets/images/results'
import { useEffect, useState } from 'react'

import { logoColor } from '../../assets/images/logos'

export default function ResultsSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [isAnimating, setIsAnimating] = useState<boolean>(false)
  const result = results[currentIndex]
  function handleClick(index: number) {
    if (index == currentIndex) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setIsAnimating(false)
    }, 300)
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (
          prev === results.length - 1 ? 0 : prev + 1
        ))
        setIsAnimating(false)
      }, 300)
    }, 3000)
    return () => clearTimeout(timer)
  }, [currentIndex])
  return (
    <section className="w-full text-black py-15 sm:py-30 bg-[#f4fbf8]">
      <div className='px-5 flex flex-col gap-8 lg:gap-11 max-w-7xl m-auto'>

        <header className='flex flex-col gap-5'>
          <h2 className='title'>Resultados que Hablan</h2>
          <p className='description'>
            Reconocimientos que respaldan el compromiso de Robbuild con la innovación educativa, el desarrollo STEAM y el futuro de miles de niños y jóvenes.
          </p>
        </header>

        <section className=''>
          <article className="flex flex-col rounded-xl md:flex-row md:h-200 lg:h-170 overflow-hidden md:rounded-2xl">
            <div className={`h-120 md:basis-1/2  overflow-hidden bg-green-200 md:h-full bg-center bg-no-repeat bg-[length:60%]`} style={{
              backgroundImage: `url(${logoColor})`
            }}>
              <img
                src={resultImages[currentIndex]}
                alt={result.title}
                className={`w-full h-full object-cover duration-300 ${isAnimating ? "opacity-0" : "opacity-100"} `}
              />
            </div>
            <div className="flex flex-col justify-between gap-10 bg-white p-5 py-10 md:basis-1/2 md:p-7 ">
              <header className={`duration-150 ${isAnimating ? "opacity-0" : "opacity-100"} `}>
                <h3 className="text-nd text-center text-2xl font-bold sm:text-3xl">{result.title}</h3>
              </header>
              <div className={`flex flex-col gap-6 duration-300 ${isAnimating ? "opacity-0" : "opacity-100"}`}>
                {/* Una descripcion */}
                <div className="flex flex-col gap-1">
                  <div className="text-st text-lg flex items-center font-semibold gap-3">
                    <div>
                      <Icon icon="carbon:idea" width="28" height="28" />
                    </div>
                    <p className="text-xl">Descripción</p>
                  </div>
                  <p className="text-base/5 sm:text-lg/5">{result.description}</p>
                </div>

                {/* Otra descipsion */}
                <div className="flex flex-col gap-2">
                  <div className="text-st text-lg flex items-center font-semibold gap-3">
                    <div>
                      <Icon icon="mdi-light:heart" width="28" height="28" />
                    </div>
                    <p className="text-xl">Impacto</p>
                  </div>
                  <p className="text-base/5 sm:text-lg/5">{result.impact}</p>
                </div>

                {/* Otra descipsion */}
                <div className="flex flex-col gap-2">
                  <div className="text-st text-lg flex items-center font-semibold gap-3">
                    <div>
                      <Icon icon="iconoir:medal" width="28" height="28" />
                    </div>
                    <p className="text-xl">Logros</p>
                  </div>
                  <p className="text-base/5 sm:text-lg/5">{result.victories}</p>
                </div>

                {/* Otra descipsion */}
                <div className="flex flex-col gap-2">
                  <div className="text-lg flex items-center font-semibold gap-3">
                    <p className="font-bold text-black text-xl">Habilidades Desarrolladas</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {
                      result.skills.map((skill, index) => (
                        <span
                          className="text-sm bg-[#d1fae5] text-nd font-semibold px-5 py-1 rounded-full"
                          key={index}
                        >
                          {skill}
                        </span>
                      ))
                    }
                  </div>
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