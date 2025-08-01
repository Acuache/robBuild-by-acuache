import { useState } from 'react';
import volunteers from '../../data/api-volunteers.json'
import { CardVolunteer, CategoryVolunteer } from './'
import { Icon } from "@iconify/react";

export default function VolunteersSection() {
  const [category, setCategory] = useState<string>("Todos")

  // Función para randomizar array 
  const shuffleArray = (array: any[]) => {
    const newArray = [...array]
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    return newArray
  }

  const filterCategory = () => {
    let filtered
    if (category === "Todos") {
      filtered = volunteers
    } else {
      filtered = volunteers.filter((volunteer) => volunteer.specialty === category)
    }

    return shuffleArray(filtered)
  }

  // Volunters de manera Aleatorio
  const filterVolunteer = filterCategory()

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
            filterVolunteer.map((volunteer, index) => (
              <CardVolunteer
                {...volunteer}
                key={index}
              />
            ))
          }
        </section>

      </div>
    </section>
  )
}