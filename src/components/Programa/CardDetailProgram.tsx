import { Icon } from "@iconify/react";
interface CardDetailProgramProps {
  color: string;
  subcolor: string
  requirements?: string[]
  methodology?: string[]
  platforms?: string[]
}
export default function CardDetailProgram({ color, subcolor, requirements, methodology, platforms }: CardDetailProgramProps) {
  return (
    <article
      className="group flex flex-col gap-6 border-l-3 shadow-2xl bg-white w-full  py-10 px-5 relative overflow-hidden"
      style={{ borderColor: `#${color}` }}
    >
      <div
        className="absolute size-35 -top-30 -right-30 group-hover:-top-10 group-hover:-right-10 duration-500 rounded-full"
        style={{ backgroundColor: `#${subcolor}` }}

      ></div>
      <header className="flex gap-3 items-center">
        <div
          className={`flex jsutify-center items-center p-2 rounded-lg`}
          style={{ backgroundColor: `#${subcolor}` }}
        >
          <Icon
            className={`size-7`}
            icon="simple-line-icons:graduation"
            style={{ color: `#${color}` }}
          />
        </div>
        <p className="font-extrabold text-lg">Requisitos</p>
      </header>
      <div className="flex flex-col text-black/90">
        {requirements?.map((requirement, index) => (
          <p key={`req-${index}`}>{requirement}</p>
        ))}

        {methodology?.map((item, index) => (
          <p key={`met-${index}`}>{item}</p>
        ))}

        <div className="flex flex-wrap gap-2">
          {platforms?.map((platform, index) => (
            <p
              key={`pla-${index}`}
              className="border-1 border-black/30 px-2.5 py-1.9 rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-blue-500/50 hover:bg-blue-50 cursor-pointer"
            >
              {platform}
            </p>
          ))}
        </div>
      </div>
    </article>
  )
}