import { Icon } from "@iconify/react";
interface SocialMediaProps {
  title: string;
  description: string;
  link: string;
  children: React.ReactNode;
}
export default function SocialMedia({ title, description, link, children }: SocialMediaProps) {
  return (
    <a className="group cursor-pointer flex gap-2 bg-white items-center px-3 py-2 rounded-lg sm:px-5 sm:py-4 hover:shadow-md transition-shadow duration-300" href={link} target="black">
      <div className="mr-1" >
        {children}
      </div>
      <div className="w-full flex flex-col ">
        <header className="flex items-center justify-between py-2 ">
          <h4 className="duration-300 font-semibold group-hover:font-bold">{title}</h4>
          <div className="relative -translate-x-3 group-hover:text-st">
            <Icon
              icon="majesticons:arrow-right-line"
              width="20"
              height="20"
              className="arrow-slide"
            />
          </div>
        </header>
        <p className="text-sm leading-5 text-gray800 sm:text-base">
          {description}
        </p>
      </div>
    </a>
  )
}