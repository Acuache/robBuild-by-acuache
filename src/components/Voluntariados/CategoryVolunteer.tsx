interface CategoryVolunteerProps {
  children: React.ReactNode,
  number: number,
  title: string,
  onClick: () => void,
  isActive: boolean
}

export default function CategoryVolunteer({ children, number, title, onClick, isActive }: CategoryVolunteerProps) {
  return (
    <button
      onClick={onClick}
      style={{ boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.25)" }}
      className={`category-btn cursor-pointer flex gap-2 items-center border-[1px] rounded-md px-5 py-2 shadow-2xl transition-all ${isActive
        ? 'bg-gradient-to-r from-[#33AA6F] to-[#2AA099] text-white border-transparent'
        : 'bg-white border-gray-200 hover:text-white'
        }`}
    >
      <div>
        {children}
      </div>
      <p className="font-semibold">{title}</p>
      <p className={`p-1 rounded-full w-8 h-8 font-bold transition-all duration-300 ${isActive
        ? 'text-white bg-white/20'
        : 'text-st bg-[#d9f1e9] hover:text-white hover:bg-white/20'
        }`}>{number}</p>
    </button>
  )
}