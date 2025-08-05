// import { Icon } from "@iconify/react";
// import {CategoryVideo} from './'
import videos from '../../data/api-videos.json'
import { CardVideo } from './'
export default function SectionVideos() {
  return (
    <section className="w-full text-white py-15 sm:py-15" >
      <div className='px-5 max-w-6xl m-auto flex flex-col gap-8 lg:gap-11 lg:px-0'>

        {/* <div>
          <CategoryVideo
            title="Programación"
          >
            <Icon icon="tabler:code" width="24" height="24" />
          </CategoryVideo>
        </div> */}

        <div className='flex flex-row flex-wrap justify-center items-center gap-6 sm:gap-15'>
          {
            videos.map((video, index) => (
              <CardVideo
                key={index}
                {...video}
              >

              </CardVideo>
            ))
          }
        </div>
      </div>
    </section>
  )
}