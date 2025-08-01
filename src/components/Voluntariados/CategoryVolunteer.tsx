interface CategoryVolunteerProps {
  children: React.ReactNode,
  number: number,
  title: string
}

export default function CategoryVolunteer({ children, number, title }: CategoryVolunteerProps) {
  return (
    <button
      style={{ boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.25)" }}
      className="category-btn cursor-pointer flex gap-2 items-center border-[1px] border-black rounded-md px-5 py-2 bg-white shadow-2xl hover:text-white transition-all "
    >
      <div>
        {children}
      </div>
      <p className="font-semibold">{title}</p>
      <p className="text-st p-1 bg-[#d9f1e9] rounded-full w-8 h-8 font-bold hover:text-white hover:bg-white/20 transition-all duration-300">{number}</p>
    </button>
  )
}