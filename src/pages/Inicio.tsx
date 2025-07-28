import { Footer } from '../components'
import { FAQSection, FrontPage, ImpactSection, DaySection, VolunteerDonateSection, AboutUsSection, ResultsSection, ProgramsSections } from '../components/Inicio'

export default function Inicio() {
  return (
    <>
      <FrontPage />
      <ResultsSection />
      <ImpactSection />
      <ProgramsSections />
      <DaySection />
      <VolunteerDonateSection />
      <AboutUsSection />
      <FAQSection />
      <Footer />
    </>
  )
}             