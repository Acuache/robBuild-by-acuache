import ReactPlayer from 'react-player'

interface CardVideoProps {
  url: string,
  title: string
}

export default function CardVideo({ title, url }: CardVideoProps) {
  return (
    <article className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full'>
      <div className='relative w-full aspect-video'>
        <ReactPlayer
          src={url}
          width="100%"
          height="100%"
          controls={true}
          light={true}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className='p-4 flex-1 flex flex-col justify-between'>
        <h4 className='text-black font-semibold text-sm sm:text-base lg:text-lg line-clamp-2'>{title}</h4>
      </div>
    </article>
  )
}