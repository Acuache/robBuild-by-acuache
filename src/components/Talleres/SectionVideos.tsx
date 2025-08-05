import { Icon } from "@iconify/react";
import { CategoryVideo } from './'
import videos from '../../data/api-videos.json'
import { CardVideo } from './'
import { useState, useEffect } from 'react'

export default function SectionVideos() {
  // --- Logica del filtro ---
  const [filter, setFilter] = useState<string>("Todos")

  // Función para mezclar array aleatoriamente
  function shuffleArray(array: any[]) {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  function activateFilter() {
    if (filter === "Todos") return shuffleArray(videos)
    return videos.filter((video) => video.category === filter)
  }
  const videoFilter = activateFilter()

  // --- Logica para mostrar 6 primeros ---
  const [displayedVideos, setDisplayedVideos] = useState<any[]>([]) // Array acumulativo
  // Resetear cuando cambia la categoría
  useEffect(() => {
    const filtered = activateFilter()
    setDisplayedVideos(filtered.slice(0, 6)) // Solo los primeros 8
  }, [filter])
  // Función para agregar 8 más
  const handleShowMore = () => {
    const currentCount = displayedVideos.length
    const nextBatch = videoFilter.slice(currentCount, currentCount + 6) // Solo los siguientes 8
    setDisplayedVideos(prev => [...prev, ...nextBatch]) // Agregar solo los nuevos
  }

  return (
    <section className="w-full text-white py-15 sm:py-15 " >
      <div className='px-5 max-w-6xl m-auto flex flex-col gap-8 lg:gap-11 xl:px-0'>

        <div className="flex flex-wrap justify-center items-center gap-6">
          <CategoryVideo
            title="Todos"
            onClick={() => setFilter("Todos")}
            isActive={filter === "Todos"}
          >
            <Icon icon="mdi:apps" width="24" height="24" />
          </CategoryVideo>
          <CategoryVideo
            title="Programación"
            onClick={() => setFilter("Programacion")}
            isActive={filter === "Programacion"}
          >
            <Icon icon="tabler:code" width="24" height="24" />
          </CategoryVideo>
          <CategoryVideo
            title="Mecánica"
            onClick={() => setFilter("Mecanica")}
            isActive={filter === "Mecanica"}
          >
            <Icon icon="bxs:wrench" width="24" height="24" />
          </CategoryVideo>
          <CategoryVideo
            title="Electrónica"
            onClick={() => setFilter("Electronica")}
            isActive={filter === "Electronica"}
          >
            <Icon icon="mage:electricity-fill" width="24" height="24" />
          </CategoryVideo>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 '>
          {
            displayedVideos.map((video, index) => (
              <CardVideo
                key={index}
                {...video}
              >

              </CardVideo>
            ))
          }
        </div>

        {displayedVideos.length < videoFilter.length && (
          <button
            onClick={handleShowMore}
            style={{ background: 'var(--gradient-st)' }}
            className='cursor-pointer m-auto w-fit font-bold text-lg text-white px-8 py-1 rounded-full hover:opacity-90 transition-opacity'
          >
            Ver más ({videoFilter.length - displayedVideos.length} restantes)
          </button>
        )}
      </div>
    </section>
  )
}