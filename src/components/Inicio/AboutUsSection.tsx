import { Icon } from "@iconify/react";
import { SocialNetwork, SocialMedia } from './'
import { logoWhite } from '../../assets/images/logos'
export default function AboutUsSection() {
  return (
    <section className="w-full py-15 sm:py-30 bg-[#f4fbf8]">
      <div className='max-w-7xl m-auto px-5 flex flex-col rounded-4xl overflow-hidden sm:flex-row'>
        <div className="h-auto bg-white p-5 sm:basis-1/2 sm:p-10">
          <header className='flex flex-col gap-5'>
            <h2 className='text-xl font-semibold sm:text-4xl'>Conéctate con nosotros</h2>
            <p className='sm:text-base'>
              Síguenos en nuestras redes sociales para estar al dia con nuestras actividades, talleres y el impacto que estamos generando juntos.
            </p>
          </header>
          <section className="flex flex-wrap gap-3 sm:gap-6 justify-center mt-5">
            <SocialNetwork
              title="Facebook"
              description="Noticias y eventos"
            >
              <Icon icon="logos:facebook" width="42" height="42" />
            </SocialNetwork>
            <SocialNetwork
              title="Youtube"
              description="Clases grabadas"
            >
              <Icon icon="logos:youtube-icon" width="50" height="42" />
            </SocialNetwork>
            <SocialNetwork
              title="Instagram"
              description="Fotos y stories"
            >
              <Icon icon="skill-icons:instagram" width="42" height="42" />
            </SocialNetwork>
            <SocialNetwork
              title="LinkedIn"
              description="Red profesional"
            >
              <Icon icon="skill-icons:linkedin" width="42" height="42" />
            </SocialNetwork>
          </section>
        </div>
        <div className="min-h-125 px-5 flex flex-col justify-center items-center sm:basis-1/2 sm:px-10" style={{ background: 'var(--gradient-st)' }}>
          <div className="w-50 sm:w-50 md:w-65 lg:w-75">
            <img className="w-full h-full object-cover" src={logoWhite} alt="Logo de RobBuild" />
          </div>
          <section className="w-full flex flex-col gap-5">
            <SocialMedia
              title="Grupo de WhatsApp"
              description="Únete a nuestra comunidad activa para enterarte de todas nuestras actividades."
            >
              <Icon icon="logos:whatsapp-icon" width="35" height="35" />
            </SocialMedia>
            <SocialMedia
              title="Grupo de Telegram"
              description="Recibe notificaciones instantáneas de talleres, eventos y oportunidades."
            >
              <Icon icon="logos:telegram" width="35" height="35" />
            </SocialMedia>
          </section>
        </div>
      </div>
    </section>
  )
}