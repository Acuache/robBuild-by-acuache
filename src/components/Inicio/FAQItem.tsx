import { Icon } from "@iconify/react";
interface FAQItemProps {
  title: string;
  description: string;
  id?: number;
  isOpen: boolean;
  onToggle: () => void
}
export default function FAQItem({ title, description, isOpen, onToggle }: FAQItemProps) {
  return (
    <article className="max-w-6xl w-full">
      <header onClick={onToggle} className={`h-auto flex justify-between items-center bg-white p-3 cursor-pointer gap-4 px-6 ${isOpen ? " rounded-t-lg" : "rounded-lg"}`}>
        <h3 className="font-semibold">{title}</h3>
        <div className="transition-all duration-300">
          {
            isOpen ? (
              <Icon icon="ic:round-minus" width="22" height="22" />
            ) : (
              <Icon icon="tabler:plus" width="22" height="22" />
            )
          }
        </div>
      </header>
      <div className={`grid overflow-hidden transition-all duration-300 bg-white ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <div className="p-3 px-6">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </article>
  )
}
