interface SocialNetworkProps {
  title: string;
  description: string;
  link: string;
  children: React.ReactNode;
}
export default function SocialNetwork({ title, description, link, children }: SocialNetworkProps) {
  return (
    <a className="group cursor-pointer flex gap-3 border-1 border-gray600 p-2 py-3 rounded-xl min-w-48 flex-1 sm:max-w-[calc(50%-0.75rem)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out" href={link} target="black">
      <div className="flex justify-center items-center w-15 text-gray-800 grayscale-100 group-hover:grayscale-0 duration-300">
        {children}
      </div>
      <div className="flex flex-col justify-between h-full">
        <h4 className="text-base font-semibold">{title}</h4>
        <p className="text-xs text-gray800">{description}</p>
      </div>
    </a>
  )
}