import { Icon } from "@iconify/react";
import { CardLife } from './'
export default function LifeSection() {
  return (
    <section className="w-full text-white py-15 sm:py-15" style={{ background: 'var(--gradient-st)' }}>
      <div className='px-5 max-w-6xl m-auto flex flex-col gap-8 lg:gap-11 lg:px-0'>

        {/* Header de la sección */}
        <header className='flex flex-col gap-5 items-center'>

          <h2 className='title'>Sé el mentor que cambie vidas</h2>
          <p className='description text-pretty'>Únete a profesionales apasionados construyendo el futuro STEM del Perú</p>
        </header>

        <section className=''>
          <CardLife
            title="Aprende y crece"
            description='Aprende metodologías activas y usa herramientas digitales innovadoras.'
          >
            <Icon icon="uil:statistics" width="24" height="24" />
          </CardLife>
          <CardLife
            title="Horarios flexibles"
            description='Presencial, virtual o fines de semana. Tú decides cuándo participar.'
          >
            <Icon icon="flowbite:clock-outline" width="24" height="24" />
          </CardLife>
          <CardLife
            title="Certificación oficial"
            description='Obtén un certificado válido para tu CV, LinkedIn y nuevas oportunidades.'
          >
            <Icon icon="iconoir:medal" width="24" height="24" />
          </CardLife>
          <CardLife
            title="Impacto real"
            description='Forma líderes del mañana con robótica educativa y enfoque STEAM.'
          >
            <Icon icon="mdi:heart-outline" width="24" height="24" />
          </CardLife>
        </section>

      </div>
    </section>
  )
}