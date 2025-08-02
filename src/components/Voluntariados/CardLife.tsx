interface CardLifeProps {
  title: string,
  description: string,
  children: React.ReactNode
  colorBg: string,
}
export default function CardLife({ title, description, children, colorBg }: CardLifeProps) {
  return (
    <article className=" group bg-white backdrop-blur-sm rounded-lg p-6 flex flex-col gap-4 text-black w-full items-center justify-center h-55 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 cursor-pointer"
      style={{ '--hover-bg': colorBg } as React.CSSProperties & { '--hover-bg': string }}>
      <div style={{ backgroundColor: colorBg }} className="rounded-lg flex justify-center items-center p-3 transition-all duration-300">
        {children}
      </div>
      <h3 className="text-center text-xl font-bold">{title}</h3>
      <p className="text-sm opacity-90 text-center">{description}</p>
    </article>
  )
}