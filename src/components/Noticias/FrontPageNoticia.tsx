import { useEffect, useState } from 'react'
import news from '../../data/api-news.json'
import { CardNoticia } from './'
import { useInView } from 'react-intersection-observer'

export default function FrontPageNoticia() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })
  const [visibleCards, setVisibleCards] = useState([] as number[])

  useEffect(() => {
    if (inView) {
      for (let i = 0; i < news.length; i++) {
        setTimeout(() => {
          setVisibleCards(prev => [...prev, i])
        }, i * 300)
      }
    }
  }, [inView])

  return (
    <section className="w-full py-15 mt-16 bg-[#f4fbf8]">
      <div className='px-5 max-w-6xl m-auto flex flex-col gap-8 lg:gap-11 xl:px-0'>

        {/* Header de la sección */}
        <header ref={ref} className='flex flex-col gap-5 items-center'>
          <h2 className='title'>Últimas Noticias de RobBuild</h2>
          <p className='description text-pretty'>Descubre los logros más recientes, nuevos programas y eventos especiales de nuestra comunidad educativa.</p>
        </header>

        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 justify-items-center'>
          {
            news.map((noticia, index) => (
              <CardNoticia
                {...noticia}
                key={index}
                isVisible={visibleCards.includes(index)}
              />
            ))
          }
        </section>

      </div>
    </section>
  )
}