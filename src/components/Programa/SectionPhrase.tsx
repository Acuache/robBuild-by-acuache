import { Icon } from "@iconify/react";
import { useInView } from 'react-intersection-observer'
import { Bubble } from "../ui";

export default function SectionPhrase() {
  const { ref, inView } = useInView({
    threshold: 0.1,
  })
  return (
    <section ref={ref} className="w-full text-white py-15 sm:py-15 relative overflow-hidden" style={{ background: 'var(--gradient-st)' }}>
      <Bubble isView={inView} />
      <div className='px-5 max-w-6xl m-auto flex flex-col gap-8 lg:gap-11 lg:px-0'>

        {/* Header de la sección */}
        <header className='flex flex-col gap-5 items-center'>
          <div>
            <Icon icon="ri:graduation-cap-fill" width="100" height="100" />
          </div>
          <h2 className='title'>Competencia 22 del Currículo Nacional</h2>
          <p className='description text-pretty'>
            Nuestros programas están alineados al <span className="font-bold">Currículo Nacional Peruano</span> <br />
            "Diseña y construye soluciones tecnológicas para resolver problemas de su entorno”
          </p>
        </header>
      </div>
    </section>
  )
}