import { Icon } from "@iconify/react";
import { SocialNetwork, SocialMedia } from './'
import { logoWhite } from '../../assets/images/logos'
export default function AboutUsSection() {
  return (
    <section className="w-full py-15  bg-[#f4fbf8]">
      <div className='max-w-6xl m-auto px-5 flex flex-col md:px-8 sm:flex-row xl:px-0 '>
        <div className="h-auto bg-white p-5 sm:basis-1/2 rounded-t-xl sm:p-10 sm:rounded-l-xl">
          <header className='flex flex-col gap-5'>
            <h2 className='text-xl font-semibold sm:text-4xl'>Conéctate con nosotros</h2>
            <p className='text-base'>
              Síguenos en nuestras redes sociales para estar al dia con nuestras actividades, talleres y el impacto que estamos generando juntos.
            </p>
          </header>
          <section className="flex flex-wrap gap-3 sm:gap-6 justify-center mt-5">
            <SocialNetwork
              title="Facebook"
              description="Noticias y eventos"
              link="https://www.facebook.com/RobbuildPeru"
            >
              <Icon icon="devicon:facebook" width="42" height="42" />
            </SocialNetwork>
            <SocialNetwork
              title="Youtube"
              description="Clases grabadas"
              link="https://www.youtube.com/@AulaRobbuild/videos"
            >
              <Icon icon="logos:youtube-icon" width="50" height="42" />

            </SocialNetwork>
            <SocialNetwork
              title="Instagram"
              description="Fotos y stories"
              link="https://www.instagram.com/robbuild.peru"
            >
              <Icon icon="skill-icons:instagram" width="42" height="42" />
            </SocialNetwork>
            <SocialNetwork
              title="LinkedIn"
              description="Red profesional"
              link="https://www.linkedin.com/company/69872519"
            >
              <Icon icon="skill-icons:linkedin" width="42" height="42" />
            </SocialNetwork>
          </section>
        </div>
        <div className="min-h-125 px-5 flex flex-col justify-center items-center rounded-b-xl sm:basis-1/2 sm:px-10 sm:rounded-r-xl" style={{ background: 'var(--gradient-st)' }}>
          <div className="w-50 sm:w-50 md:w-60 lg:w-70 mb-6">
            <img className="w-full h-full object-cover" src={logoWhite} alt="Logo de RobBuild" />
          </div>
          <section className="w-full flex flex-col gap-5">
            <SocialMedia
              title="Grupo de WhatsApp"
              description="Únete a nuestra comunidad activa para enterarte de todas nuestras actividades."
              link="https://chat.whatsapp.com/DByGEjnsTEs8OXD4sBmq1F"
            >
              <Icon icon="logos:whatsapp-icon" width="35" height="35" />
            </SocialMedia>
            <SocialMedia
              title="Grupo de Telegram"
              description="Recibe notificaciones instantáneas de talleres, eventos y oportunidades."
              link="https://t.me/+jrEF5JaskLtmMDYx"
            >
              <Icon icon="logos:telegram" width="35" height="35" />
            </SocialMedia>
          </section>
        </div>
      </div>
    </section>
  )
}