import ReactPlayer from 'react-player'

interface CardVideoProps {
  url: string,
  title: string
}

export default function CardVideo({ title, url }: CardVideoProps) {
  return (
    <article className='bg-amber-50'>
      <div>
        <ReactPlayer
          src={url}
        >

        </ReactPlayer>
      </div>
      <h4 className='text-black'>{title}</h4>
    </article>
  )
}