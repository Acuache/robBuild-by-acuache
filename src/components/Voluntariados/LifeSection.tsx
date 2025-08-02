import { Icon } from "@iconify/react";
import { CardLife } from './'
export default function LifeSection() {
  return (
    <section className="mb-15 w-full text-white py-15 sm:py-15" style={{ background: 'var(--gradient-st)' }}>
      <div className='px-5 max-w-6xl m-auto flex flex-col gap-8 lg:gap-11 xl:px-0'>

        {/* Header de la sección */}
        <header className='flex flex-col gap-5 items-center'>

          <h2 className='title'>Sé el mentor que cambie vidas</h2>
          <p className='description text-pretty'>Únete a profesionales apasionados construyendo el futuro STEM del Perú</p>
        </header>

        <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 '>
          <CardLife
            title="Aprende y crece"
            description='Aprende metodologías activas y usa herramientas digitales innovadoras.'
            colorBg="#eff6ff"
          >
            <Icon className="text-[#2563eb]" icon="uil:statistics" width="30" height="30" />
          </CardLife>
          <CardLife
            title="Horarios flexibles"
            description='Presencial, virtual o fines de semana. Tú decides cuándo participar.'
            colorBg="#f0fdf4"
          >
            <Icon className="text-[#16a34a]" icon="flowbite:clock-outline" width="30" height="30" />
          </CardLife>
          <CardLife
            title="Certificación oficial"
            description='Obtén un certificado válido para tu CV, LinkedIn y nuevas oportunidades.'
            colorBg="#faf5ff"
          >
            <Icon className="text-[#9333ea]" icon="iconoir:medal" width="30" height="30" />
          </CardLife>
          <CardLife
            title="Impacto real"
            description='Forma líderes del mañana con robótica educativa y enfoque STEAM.'
            colorBg="#fcf0f0"
          >
            <Icon className="text-[#dc2626]" icon="mdi:heart-outline" width="30" height="30" />
          </CardLife>
        </section>

        <button className=" cursor-pointer m-auto bg-white text-st flex w-fit items-center justify-center gap-3 px-5 py-3 rounded-lg">
          <span>
            <Icon icon="mdi:heart-outline" width="26" height="26" />
          </span>
          <span className="font-bold w-auto">
            !Quiero ser Voluntario¡
          </span>
          <span>
            <Icon icon="proicons:arrow-right" width="26" height="26" />
          </span>
        </button>
      </div>
    </section>
  )
}