interface CardLifeProps {
  title: string,
  description: string,
  children: React.ReactNode
}
export default function CardLife({ title, description, children }: CardLifeProps) {
  return (
    <article className="flex flex-col">
      <div>
        {children}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}