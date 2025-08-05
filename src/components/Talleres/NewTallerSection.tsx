export default function NewTallerSection() {
  return (
    <section className="w-full text-white py-15 sm:py-15 mb-30" style={{ background: 'var(--gradient-st)' }}>
      <div className='px-5 max-w-6xl m-auto flex flex-col gap-8 lg:gap-11 xl:px-0'>

        {/* Header de la sección */}
        <header className='flex flex-col gap-5 items-center'>

          <h2 className='title'>Haz que algo grande suceda</h2>
          <p className='description text-pretty'>
            Con tu ayuda, podemos transformar vidas a través de la educación tecnológica. <br />
            Ya sea como voluntario o donando, tú puedes hacer la diferencia.
          </p>
        </header>

        <a
          href="https://www.youtube.com/@AulaRobbuild/videos"
          target="black"
          className="m-auto font-semibold bg-white text-st px-8 text-lg py-2 rounded-full text-center shadow-[0_4px_20px_rgba(255,255,255,0.3)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.5)] hover:-translate-y-1 transition-all duration-300 ease-out transform"
        >
          Ver talleres ahora
        </a>

      </div>
    </section>
  )
}