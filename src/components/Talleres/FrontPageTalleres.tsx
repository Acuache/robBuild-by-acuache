import { Icon } from "@iconify/react";
import { CardIcon } from './'
export default function FrontPageTalleres() {
  return (
    <section className="mt-16 w-full py-15 pb-0">
      <div className='px-5 max-w-6xl m-auto flex flex-col gap-8 lg:gap-11 lg:px-0'>

        {/* Header de la sección */}
        <header className='flex flex-col gap-5 items-center'>
          <h2 className='title'>Aprende a tu ritmo con
            nuestros talleres grabados</h2>
          <p className='description text-pretty'>
            Con tu ayuda, podemos transformar vidas a través de la educación tecnológica. <br />
            Ya sea como voluntario o donando, tú puedes hacer la diferencia.
          </p>
        </header>

        <section className='flex flex-row flex-wrap justify-center items-center gap-6 sm:gap-15'>
          <CardIcon
            number={20}
            description="Talleres Grabados"
            isMayor500={false}
          >
            <Icon icon="humbleicons:camera-video" width={45} height={45} />
          </CardIcon>
          <CardIcon
            number={1000}
            description="Suscriptores Beneficiados"
            isMayor500={true}
          >
            <Icon icon="formkit:people" width={40} height={40} />
          </CardIcon>
          <CardIcon
            number={3}
            description="Talleres Grabados"
            isMayor500={false}
          >
            <Icon icon="mdi:book-open-page-variant" width={35} height={35} />
          </CardIcon>
        </section>

      </div>
    </section>
  )
}