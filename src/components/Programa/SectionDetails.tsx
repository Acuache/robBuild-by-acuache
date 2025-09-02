import { CardDetailProgram } from './'
interface SectionDetailsProps {
  requirements: string[]
  methodology: string[]
  platforms: string[]
}
export default function SectionDetails({ requirements, methodology, platforms }: SectionDetailsProps) {
  return (
    <section className="w-full text-black py-15 sm:py-15">
      <div className='px-4 flex flex-col justify-stretch sm:flex-row max-w-6xl m-auto md:px-8 xl:px-0'>
        <CardDetailProgram
          color='33aa6f'
          subcolor="ebf8f1"
          requirements={requirements}
        />
        <CardDetailProgram
          color='ff9800'
          subcolor="fff4e5"
          methodology={methodology}
        />
        <CardDetailProgram
          color='2196f3'
          subcolor="e8f4fe"
          platforms={platforms}
        />
      </div>
    </section>
  )
}