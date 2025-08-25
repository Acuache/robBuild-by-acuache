import './Bubble.css'

interface BubbleProps {
  isView: boolean
}
export default function Bubble({ isView }: BubbleProps) {
  return (
    <section className={`absolute inset-0 ${!isView ? 'paused invisible' : ''}`}>
      <article className="absolute size-20 rounded-full bg-white/15 shape1" />
      <article className="absolute size-15 rounded-full bg-white/10 shape2" />
      <article className="absolute size-5 rounded-full bg-white/20 shape3" />
    </section>
  )
}