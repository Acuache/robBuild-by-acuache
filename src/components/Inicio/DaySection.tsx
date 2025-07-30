import { CardDay } from './'
import { Icon } from "@iconify/react";
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

export default function DaySection() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  useEffect(() => {
    if (inView) {
      for (let i = 0; i < 6; i++) {
        setTimeout(() => {
          setVisibleCards(prev => [...prev, i])
        }, i * 300) // 250ms entre cada card
      }
    }
  }, [inView])
  return (
    <section ref={ref} className="w-full py-15">
      <div className='px-5 flex flex-col gap-8 lg:gap-11 max-w-6xl m-auto xl:px-0'>

        {/* Header de la sección */}
        <header className='flex flex-col gap-5'>
          <h2 className='title text-black'>Lo que nos mueve cada día</h2>
          <p className='description max-w-4xl m-auto'>Estos principios guían cada paso que damos para transformar vidas a través de la educación.
          </p>
        </header>

        {/* Cards de impacto */}
        <section className='flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:justify-center sm:items-center lg:gap-3 transition-all duration-300 xl:gap-9'>
          <CardDay
            isView={visibleCards.includes(0)}
            title="Pasión por Enseñar"
            description="Creemos que cada clase puede abrir puertas, cambiar futuros y sembrar oportunidades."
          >
            <Icon icon="mdi:heart-outline" width="24" height="24" />
          </CardDay>
          <CardDay
            isView={visibleCards.includes(1)}
            title="Inclusión Total"
            description="Educación STEM gratuita y accesible para todos, sin importar de dónde vienen."
          >
            <Icon icon="formkit:people" width="24" height="24" />
          </CardDay>
          <CardDay
            isView={visibleCards.includes(2)}
            title="Innovación Constante"
            description="Metodologías educativas modernas para mantener a los niños curiosos y motivados."
          >
            <Icon icon="carbon:idea" width="24" height="24" />
          </CardDay>
          <CardDay
            isView={visibleCards.includes(3)}
            title="Resultados Medibles"
            description="Evaluamos nuestro impacto para asegurarnos de que cada estudiante crece con sentido."
          >
            <Icon icon="octicon:goal-24" width="24" height="24" />
          </CardDay>
          <CardDay
            isView={visibleCards.includes(4)}
            title="Alcance Nacional"
            description="Beneficiamos a todos, priorizando zonas rurales y comunidades
con menor acceso."
          >
            <Icon icon="tabler:world" width="24" height="24" />
          </CardDay>
          <CardDay
            isView={visibleCards.includes(5)}
            title="Aprendizaje Activo"
            description="80% práctica, 20% teoría:
aprender creando es más divertido, útil y duradero."
          >
            <Icon icon="iconoir:flash" width="26" height="26" />
          </CardDay>
        </section>

      </div>
    </section>
  )
}