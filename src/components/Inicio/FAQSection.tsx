import FAQItem from './FAQItem'
import { useState } from 'react'
import faq from '../../data/faq.json'
export default function FAQSection() {
  const faqInformation = faq;
  const [openItemId, setOpenItemId] = useState<number | null>(null)
  function handleToggle(itemID: number) {
    setOpenItemId(prev => prev === itemID ? null : itemID)
  }
  return (
    <section className="w-full text-black py-15 sm:py-30 bg-[#f4fbf8]">
      <div className='max-w-7x px-5 flex flex-col items-center gap-8 lg:gap-11'>
        {/* Header de la sección */}
        <header className='flex flex-col gap-5'>
          <h2 className='title'>Preguntas Frecuentes</h2>
        </header>

        {/* Cards de FAQ */}
        <section className='flex flex-col justify-center items-center gap-8 lg:gap-10 '>
          {
            faqInformation.map((faqItem, index) => (
              <FAQItem {...faqItem} key={index} isOpen={openItemId === faqItem.id} onToggle={() => handleToggle(faqItem.id)} />
            ))
          }
        </section>

      </div>
    </section>
  )
}