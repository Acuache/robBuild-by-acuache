interface CardDayProps {
  title: string;
  description: string;
  children: React.ReactNode;
}
export default function CardDay({ title, description, children }: CardDayProps) {
  return (
    <article className='group flex flex-col items-center justify-center gap-3 border-1 border-gray700 rounded-2xl py-10 px-4 sm:w-90 min-w-70 h-62 transition-all duration-400 hover:shadow-lg hover:shadow-gray-400/20 hover:-translate-y-1 hover:bg-gradient-to-br hover:from-gray-50/80 hover:to-white hover:border-gray-500 cursor-pointer'>

      <div className='w-12 h-12 rounded-xl bg-[#E8F6F5] flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:bg-gradient-to-br group-hover:from-[#E8F6F5] group-hover:to-[#D0F2EF] group-hover:shadow-md group-hover:shadow-[#E8F6F5]/50'>
        <div className='transition-transform duration-300 group-hover:scale-110 text-st'>
          {children}
        </div>
      </div>

      <h3 className='text-base font-bold text-black transition-all duration-300 group-hover:text-gray-800 group-hover:scale-105'>
        {title}
      </h3>

      <p className='text-sm text-center text-gray800 transition-all duration-300 group-hover:text-gray-600'>
        {description}
      </p>
    </article>
  )
}