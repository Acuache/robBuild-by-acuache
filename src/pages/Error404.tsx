import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../components'
import { Icon } from '@iconify/react'

export default function Error404() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <main className="min-h-[calc(100dvh-4rem)] pt-24 pb-12 flex flex-col items-center justify-center bg-[var(--color-bg-st)] px-6 text-center">
        <div className="max-w-2xl w-full flex flex-col items-center gap-6">
          <div className="flex items-center justify-center gap-3 text-st">
            <Icon icon="ph:compass-duotone" width="42" height="42" />
            <span className="uppercase tracking-wide font-semibold">Error</span>
          </div>

          <h1 className="title">Página no encontrada</h1>
          <p className="description text-gray-600">
            El enlace que buscas no existe, fue movido o es temporalmente inaccesible.
          </p>

          <div className="text-[5.5rem] sm:text-[7rem] font-extrabold leading-none text-st select-none">404</div>

          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <Link to="/" className="bg-st text-white px-5 py-2 rounded-md font-medium shadow hover:opacity-90 transition">
              Volver al inicio
            </Link>
            <Link to="/talleres" className="px-5 py-2 rounded-md font-medium border border-st text-st hover:bg-st hover:text-white transition">
              Ver talleres
            </Link>
          </div>

          <div className="mt-6 text-sm text-gray-700">
            <p>También puedes visitar:</p>
            <div className="mt-2 flex flex-wrap gap-3 justify-center">
              <Link to="/noticias" className="underline-animation group">Noticias</Link>
              <Link to="/voluntarios" className="underline-animation group">Voluntarios</Link>
              <Link to="/donar" className="underline-animation group">Donar</Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}