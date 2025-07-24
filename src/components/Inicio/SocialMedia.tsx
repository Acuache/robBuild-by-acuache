import { Icon } from "@iconify/react";
interface SocialMediaProps {
  title: string;
  description: string;
  children: React.ReactNode;
}
export default function SocialMedia({ title, description, children }: SocialMediaProps) {
  return (
    <article className="flex gap-2 bg-white items-center px-3 py-2 rounded-lg sm:px-5 sm:py-4">
      <div className="">
        {children}
      </div>
      <div className="w-full flex flex-col sm:gap-1">
        <header className="flex items-center justify-between py-2 ">
          <h4 className="font-semibold">{title}</h4>
          <Icon icon="majesticons:arrow-right-line" width="20" height="20" />
        </header>
        <p className="text-sm leading-5 text-gray800 sm:text-base">
          {description}
        </p>
      </div>
    </article>
  )
}