interface CategoryVideoProps {
  children: React.ReactNode,
  title: string,
  onClick: () => void,
  isActive: boolean
}

export default function CategoryVideo({ children, title, onClick, isActive }: CategoryVideoProps) {
  return (
    <button
      onClick={onClick}
      style={{ boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.25)" }}
      className={`category-btn cursor-pointer flex gap-2 items-center border-[1px] rounded-md px-5 py-2 shadow-2xl transition-all text-black ${isActive
        ? 'bg-gradient-to-r from-[#33AA6F] to-[#2AA099] text-white border-transparent'
        : 'bg-white border-gray-200 hover:text-white'
        }`}
    >
      <div>
        {children}
      </div>
      <p className="font-semibold">{title}</p>
    </button>
  )
}