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
    <article className="max-w-4xl">
      <header onClick={onToggle} className="flex justify-between items-center bg-white p-3 rounded-lg cursor-pointer gap-4">
        <h3>{title}</h3>
        <div>
          <Icon className="" icon="iconamoon:arrow-up-2-light" width="25" height="25" />
        </div>
      </header>
      <div className={`grid overflow-hidden transition-all duration-300 bg-white ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <div className="p-3">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </article>
  )
}
