import {
  AboutSection,
  BuySection,
  ContentSection,
  DexSection,
  FaqSection
} from '@/containers'
import CommunitySection from '@/containers/CommunitySection'

export default function Home() {
  return (
    <>
      <ContentSection />
      <AboutSection />
      <DexSection />
      <CommunitySection />
      <BuySection />
      <FaqSection />
    </>
  )
}
