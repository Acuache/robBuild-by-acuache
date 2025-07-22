import { Icon } from '@iconify/react';

interface CardImpactProps {
  title: string;
  number: number;
  children: React.ReactNode;
}

export default function CardImpact({ children, title, number }: CardImpactProps) {
  return (
    <article className='group flex flex-col items-center justify-center gap-3 bg-white/20 rounded-2xl py-10 cursor-pointer transition-all duration-500 ease-out backdrop-blur-sm border border-white/10 hover:bg-white/40 hover:shadow-2xl hover:shadow-st/20 hover:scale-105 hover:-translate-y-2 hover:border-white/30 sm:w-90 min-w-70'>

      <div className='w-18 h-18 rounded-full bg-[#7bc7aa] flex items-center justify-center transition-all duration-300 ease-out group-hover:bg-st group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-st/30'>
        <div className='transition-transform duration-300 group-hover:scale-110'>
          {children}
        </div>
      </div>

      <h3 className='text-4xl font-bold transition-all duration-300 group-hover:text-st group-hover:scale-105'>
        {number}
        <span className='text-5xl font-extrabold transition-all duration-500 group-hover:rotate-12 inline-block'>
          +
        </span>
      </h3>

      <p className='text-lg transition-all duration-300 group-hover:text-gray-700 group-hover:font-medium'>
        {title}
      </p>
    </article>
  )
}