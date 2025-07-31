import { Icon } from "@iconify/react";

interface CardFounderProps {
  name: string;
  job: string;
  img: string;
}

export default function CardFounder({ name, job, img }: CardFounderProps) {
  return (
    <article className="relative h-110 py-10 rounded-2xl px-5 max-w-80 w-full " style={{ background: 'var(--gradient-st)' }}>
      <img className="w-full h-full object-contain" src={img} alt={name} />
      <div className="absolute flex items-center justify-between bg-white w-[80%] bottom-6 left-1/2 -translate-x-1/2 rounded-xl px-3 py-2">
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-gray800 text-sm">{job}</p>
        </div>
        <div className="bg-amber-200">
          <Icon icon="devicon:linkedin" width="32" height="32" />
        </div>
      </div>
    </article>
  )
} 