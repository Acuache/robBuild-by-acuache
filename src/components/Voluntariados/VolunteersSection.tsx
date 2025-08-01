import volunteers from '../../data/api-volunteers.json'
import { CardVolunteer, CategoryVolunteer } from './'
import { Icon } from "@iconify/react";
export default function VolunteersSection() {
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
          >
            <Icon icon="formkit:people" width="25" height="25" />
          </CategoryVolunteer>
          <CategoryVolunteer
            title="Programación"
            number={50}
          >
            <Icon icon="fa:code" width="26" height="20" />
          </CategoryVolunteer>
          <CategoryVolunteer
            title="Marketing"
            number={50}
          >
            <Icon icon="mdi:megaphone" width="24" height="24" />
          </CategoryVolunteer>
          <CategoryVolunteer
            title="Electronica"
            number={50}
          >
            <Icon icon="mage:electricity-fill" width="24" height="24" />
          </CategoryVolunteer>
          <CategoryVolunteer
            title="Embajadores"
            number={50}
          >
            <Icon icon="fa-solid:handshake" width="25" height="20" />
          </CategoryVolunteer>
          <CategoryVolunteer
            title="Mecánica"
            number={50}
          >
            <Icon icon="bxs:wrench" width="24" height="24" />
          </CategoryVolunteer>
        </section>

        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8 justify-items-center'>
          {
            volunteers.map((volunteer, index) => (
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