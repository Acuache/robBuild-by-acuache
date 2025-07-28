import { CardImpact } from './';
import { Icon } from "@iconify/react";

export default function ImpactSection() {
  return (
    <section className="w-full text-white py-15 sm:py-15" style={{ background: 'var(--gradient-st)' }}>
      <div className='px-5 flex flex-col gap-8 md:px-8 lg:gap-11 max-w-6xl m-auto'>

        {/* Header de la sección */}
        <header className='flex flex-col gap-5'>
          <h2 className='title'>Nuestro Impacto</h2>
          <p className='description'>
            Conoce los números que reflejan nuestro compromiso con la educación STEM en el Perú.
          </p>
        </header>

        {/* Cards de impacto */}
        <section className='grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-10 transition-all duration-300'>
          <CardImpact title="Niños y jóvenes beneficiados" number={4500}>
            <Icon icon="formkit:people" width="38" height="38" />
          </CardImpact>

          <CardImpact title="Actividades realizadas" number={120}>
            <Icon icon="mdi:star-outline" width="50" height="50" />
          </CardImpact>

          <CardImpact title="Voluntarios movilizados" number={50}>
            <Icon icon="mdi:heart-outline" width="38" height="38" />
          </CardImpact>
        </section>

      </div>
    </section>
  )
} 