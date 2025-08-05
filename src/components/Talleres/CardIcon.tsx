import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
interface CardIconProps {
  children: React.ReactNode,
  number: number,
  description: string
  isMayor500?: boolean
}
export default function CardIcon({ children, number, description, isMayor500 }: CardIconProps) {
  const counter = (isMayor500) ? 20 : 1
  const [accelerator, setAccelerator] = useState<number>(0)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setAccelerator(prev => {
          if (prev < number) {
            return prev + counter
          } else {
            clearInterval(interval)
            return prev
          }
        })
      }, 60)
      return () => clearInterval(interval)
    }
  }, [inView, accelerator])

  return (
    <article ref={ref} className="flex flex-col justify-between items-center gap-1 min-w-50 w-full max-w-70 p-4 rounded-xl transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-md hover:bg-white active:scale-102 active:shadow-md active:bg-white cursor-pointer group">
      <div className="bg-st flex items-center justify-center p-4 rounded-full text-white mb-3 h-18 w-18 transition-all duration-300 group-hover:scale-105 group-hover:rotate-3 group-active:scale-105 group-active:rotate-3">
        {children}
      </div>
      <h3 className="text-5xl font-bold transition-all duration-300 group-hover:text-st group-active:text-st">{accelerator}<span>+</span></h3>
      <p className="text-xl text-gray800 transition-all duration-300 group-hover:text-gray-600 group-active:text-gray-600">{description}</p>
    </article>
  )
}