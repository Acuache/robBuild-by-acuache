interface SocialNetworkProps {
  title: string;
  description: string;
  children: React.ReactNode;
}
export default function SocialNetwork({ title, description, children }: SocialNetworkProps) {
  return (
    <article className="flex gap-3 border-1 border-gray600 p-2 py-3 rounded-xl min-w-48 flex-1 sm:max-w-[calc(50%-0.75rem)]">
      <div className="flex justify-center items-center w-15">
        {children}
      </div>
      <div className="flex flex-col justify-between h-full">
        <h4 className="text-base font-semibold">{title}</h4>
        <p className="text-xs text-gray800">{description}</p>
      </div>
    </article>
  )
}