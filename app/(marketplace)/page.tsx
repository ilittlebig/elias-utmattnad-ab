import HeroSection from '@/(marketplace)/sections/hero/index'
import ReviewsSection from '@/(marketplace)/sections/reviews/index'
import ServicesSection from '@/(marketplace)/sections/services/index'
import TrustedBySection from '@/(marketplace)/sections/trustedBy/index'
import VisionSection from '@/(marketplace)/sections/vision/index'
import CollectionSection from '@/(marketplace)/sections/collection/index'
import FAQSection from '@/(marketplace)/sections/FAQ/index'

import ShowcaseCard from '@/(marketplace)/sections/showcase/card'

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <VisionSection />
      <ServicesSection />
      <TrustedBySection />

      {/* Content Showcase Section */}

      <div className="flex flex-col pt-[928px] gap-y-32 lg:pt-[280px] lg:pb-12">
      	<ShowcaseCard
	  title="Innovativ Tufting"
	  description="Med precision och omsorg använder vi modern tuftingteknik för att förvandla dina idéer till verklighet. Vår tuftingpistol gör det möjligt att skapa detaljerade och varaktiga mönster som speglar din personliga stil."
	  imagePath="/tufting.jpg"
	/>

      	<ShowcaseCard
	  title="Skapad för Fantasi"
	  description="Dina visioner är vår canvas. Från abstrakta konstverk till naturtrogna avbildningar – vi tuftar ditt önskemotiv med liv och känsla. Upptäck en värld av möjligheter där endast fantasin sätter gränserna."
	  imagePath="/tufting2.jpg"
	  way="left"
	/>

      	<ShowcaseCard
	  title="Innovativ Tufting"
	  description="Med precision och omsorg använder vi modern tuftingteknik för att förvandla dina idéer till verklighet. Vår tuftingpistol gör det möjligt att skapa detaljerade och varaktiga mönster som speglar din personliga stil."
	  imagePath="/tufting.jpg"
	/>
      </div>

      <ReviewsSection />
      <CollectionSection />
      <FAQSection />
    </main>
  )
}
