import { useEffect } from 'react'
import { Footer } from '../components'
import { FAQSection, FrontPage, ImpactSection, DaySection, VolunteerDonateSection, AboutUsSection, ResultsSection, ProgramsSections } from '../components/Inicio'

export default function Inicio() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <FrontPage />
      <ResultsSection />
      <ImpactSection />
      <ProgramsSections />
      <VolunteerDonateSection />
      <DaySection />
      <AboutUsSection />
      <FAQSection />
      <Footer />
    </>
  )
}             