import { useState, useEffect } from 'react';
import volunteers from '../../data/api-volunteers.json'
import { CardVolunteer, CategoryVolunteer } from './'
import { Icon } from "@iconify/react";

export default function VolunteersSection() {
  // LOGICA DE LOS FILTROS
  const [category, setCategory] = useState<string>("Todos")

  const [displayedVolunteers, setDisplayedVolunteers] = useState<any[]>([]) // Array acumulativo

  // Resetear cuando cambia la categoría
  useEffect(() => {
    const filtered = getFilteredVolunteers()
    setDisplayedVolunteers(filtered.slice(0, 8)) // Solo los primeros 8
  }, [category])

  // Función simple para filtrar voluntarios
  const getFilteredVolunteers = () => {
    if (category === "Todos") {
      return volunteers
    } else {
      return volunteers.filter((volunteer) => volunteer.specialty === category)
    }
  }

  const allVolunteers = getFilteredVolunteers()

  // Función para agregar 8 más
  const handleShowMore = () => {
    const currentCount = displayedVolunteers.length
    const nextBatch = allVolunteers.slice(currentCount, currentCount + 8) // Solo los siguientes 8
    setDisplayedVolunteers(prev => [...prev, ...nextBatch]) // Agregar solo los nuevos
  }

  return (
    <section className="w-full  py-15  bg-[#f4fbf8]">
      <div className='px-5 max-w-6xl m-auto flex flex-col gap-8 lg:gap-11 lg:px-0'>

        {/* Header de la sección */}
        <header className='flex flex-col gap-5 items-center'>
          <h2 className='title'>Voluntarios Especialistas</h2>
          <p className='description text-pretty'>Explora a nuestros expertos por área de conocimiento</p>
        </header>

        <section className='flex flex-row flex-wrap justify-center items-center gap-5'>
          <CategoryVolunteer
            title="Todos los voluntarios"
            number={50}
            onClick={() => setCategory("Todos")}
            isActive={category === "Todos"}
          >
            <Icon icon="formkit:people" width="25" height="25" />
          </CategoryVolunteer>
          <CategoryVolunteer
            title="Programación"
            number={12}
            onClick={() => setCategory("Programación")}
            isActive={category === "Programación"}

          >
            <Icon icon="fa:code" width="26" height="20" />
          </CategoryVolunteer>
          <CategoryVolunteer
            title="Marketing"
            number={8}
            onClick={() => setCategory("Marketing")}
            isActive={category === "Marketing"}
          >
            <Icon icon="mdi:megaphone" width="24" height="24" />
          </CategoryVolunteer>
          <CategoryVolunteer
            title="Electrónica"
            number={17}
            onClick={() => setCategory("Electrónica")}
            isActive={category === "Electrónica"}
          >
            <Icon icon="mage:electricity-fill" width="24" height="24" />
          </CategoryVolunteer>
          <CategoryVolunteer
            title="Embajadores"
            number={3}
            onClick={() => setCategory("Embajadores")}
            isActive={category === "Embajadores"}
          >
            <Icon icon="fa-solid:handshake" width="25" height="20" />
          </CategoryVolunteer>
          <CategoryVolunteer
            title="Mecánica"
            number={10}
            onClick={() => setCategory("Mecánica")}
            isActive={category === "Mecánica"}
          >
            <Icon icon="bxs:wrench" width="24" height="24" />
          </CategoryVolunteer>
        </section>

        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8 justify-items-center'>
          {
            displayedVolunteers.map((volunteer, index) => (
              <CardVolunteer
                {...volunteer}
                key={`${category}-${index}`}
                isAll={category === "Todos"}

              />
            ))
          }
        </section>

        {/* Botón Ver más - solo mostrar si hay más elementos */}
        {displayedVolunteers.length < allVolunteers.length && (
          <button
            onClick={handleShowMore}
            style={{ background: 'var(--gradient-st)' }}
            className='cursor-pointer m-auto w-fit font-bold text-lg text-white px-8 py-1 rounded-full hover:opacity-90 transition-opacity'
          >
            Ver más ({allVolunteers.length - displayedVolunteers.length} restantes)
          </button>
        )}

      </div>
    </section>
  )
}