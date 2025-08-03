import { Icon } from "@iconify/react";
interface CardImpactProps {
  title: string;
  number: number;
  children: React.ReactNode;
  isView: boolean;
}

export default function CardImpact({ children, title, number, isView }: CardImpactProps) {
  return (
    <article
      className={`
    group flex flex-col items-center justify-center gap-3 
    bg-white/20 rounded-2xl py-10 cursor-pointer backdrop-blur-sm 
    border border-white/10 px-4 h-full transition-all duration-500 ease-out
    hover:bg-white/40 hover:shadow-2xl hover:shadow-st/20 
    hover:scale-105 hover:-translate-y-2 hover:border-white/30
    active:bg-white/40 active:shadow-2xl active:shadow-st/20 
    active:scale-105 active:-translate-y-2 active:border-white/30
    touch-action-none select-none
    ${isView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}
  `}
    >

      <div className='w-18 h-18 rounded-full bg-[#7bc7aa] flex items-center justify-center transition-all duration-300 ease-out group-hover:bg-st group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-st/30 group-active:bg-st group-active:scale-110 group-active:shadow-lg group-active:shadow-st/30'>
        <div className='transition-transform duration-300 group-hover:scale-110 group-active:scale-110'>
          {children}
        </div>
      </div>

      <h3 className='text-4xl font-bold transition-all duration-300 group-hover:text-st group-hover:scale-105 group-active:text-st group-active:scale-105 flex items-center justify-center '>
        {number}
        <span className='text-4xl font-extrabold transition-all duration-500 group-hover:rotate-12 group-active:rotate-12 inline-block'>
          <Icon icon="tabler:plus" width="40" height="40" />
        </span>
      </h3>

      <p className='text-lg transition-all duration-300 group-hover:text-gray-700 group-hover:font-medium group-active:text-gray-700 group-active:font-medium text-center'>
        {title}
      </p>
    </article>
  )
}