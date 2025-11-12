import './Bubble.css'
import { bubleRobBuild } from '../../assets/images/logos'
interface BubbleProps {
  isView: boolean
}
export default function Bubble({ isView }: BubbleProps) {
  return (
    <section className={`absolute inset-0 ${!isView ? 'paused invisible' : ''}`}>
      <article className="absolute size-20 rounded-full bg-white/15 shape1 overflow-hidden opacity-50">
        <img className='w-full h-full object-cover opacity-30' src={bubleRobBuild} alt="Bubble number 1" />
      </article>
      <article className="absolute size-15 rounded-full bg-white/10 shape2 overflow-hidden opacity-50">
        <img className='w-full h-full object-cover opacity-30' src={bubleRobBuild} alt="Bubble number 2" />
      </article>
      <article className="absolute size-5 rounded-full bg-white/20 shape3 overflow-hidden opacity-50">
        <img className='w-full h-full object-cover opacity-30 ' src={bubleRobBuild} alt="Bubble number 3" />
      </article>
      <article className="absolute size-15 rounded-full bg-white/20 shape4 overflow-hidden opacity-50">
        <img className='w-full h-full object-cover opacity-30 ' src={bubleRobBuild} alt="Bubble number 4" />
      </article>
      <article className="absolute size-8 rounded-full bg-white/20 shape5 overflow-hidden opacity-50">
        <img className='w-full h-full object-cover opacity-30' src={bubleRobBuild} alt="Bubble number 5" />
      </article>
    </section>
  )
}