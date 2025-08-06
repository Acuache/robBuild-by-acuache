import news from '../../data/api-news.json'
import { CardNoticia } from './'
export default function FrontPageNoticia() {
  return (
    <section className="w-full py-15 mt-16 bg-[#f4fbf8]">
      <div className='px-5 max-w-6xl m-auto flex flex-col gap-8 lg:gap-11 xl:px-0'>

        {/* Header de la sección */}
        <header className='flex flex-col gap-5 items-center'>
          <h2 className='title'>Últimas Noticias de RobBuild</h2>
          <p className='description text-pretty'>Descubre los logros más recientes, nuevos programas y eventos especiales de nuestra comunidad educativa.</p>
        </header>

        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 justify-items-center'>
          {
            news.map((noticia, index) => (
              <CardNoticia
                {...noticia}
                key={index}
              />
            ))
          }
        </section>

      </div>
    </section>
  )
}