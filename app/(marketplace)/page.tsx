import HeroSection from '@/(marketplace)/sections/hero/index'
import ReviewsSection from '@/(marketplace)/sections/reviews/index'
import ServicesSection from '@/(marketplace)/sections/services/index'
import ReadMoreSection from '@/(marketplace)/sections/readMore/index'
import CharitySection from '@/(marketplace)/sections/charity/index'
import TrustedBySection from '@/(marketplace)/sections/trustedBy/index'
import VisionSection from '@/(marketplace)/sections/vision/index'
import CollectionSection from '@/(marketplace)/sections/collection/index'
import FAQSection from '@/(marketplace)/sections/FAQ/index'

import ShowcaseCard from '@/(marketplace)/sections/showcase/card'

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <ReadMoreSection />
      <TrustedBySection />
      {/* <VisionSection /> */}
      <ServicesSection />

      {/* Content Showcase Section */}

      <div className="flex flex-col pt-[928px] gap-y-36 lg:pt-[135px]">
      	<ShowcaseCard
	  title="Innovativ Tufting"
	  description="Med precision och omsorg använder vi modern tuftingteknik för att förvandla dina idéer till verklighet. Vår tuftingpistol gör det möjligt att skapa detaljerade och varaktiga mönster som speglar din personliga stil."
	  imagePath="/tufting.jpg"
	  subTexts={[
	    "This is something about the image",
	    "Another thing about something",
	    "Even another thing about a service",
	    "Maybe, maybe not...",
	  ]}
	/>

      	<ShowcaseCard
	  title="Skapad för Fantasi"
	  description="Dina visioner är vår canvas. Från abstrakta konstverk till naturtrogna avbildningar – vi tuftar ditt önskemotiv med liv och känsla. Upptäck en värld av möjligheter där endast fantasin sätter gränserna."
	  imagePath="/tufting2.jpg"
	  way="left"
	  subTexts={[
	    "This is something about the image",
	    "Another thing about something",
	    "Even another thing about a service",
	    "Maybe, maybe not...",
	  ]}
	/>

      	<ShowcaseCard
	  title="Innovativ Tufting"
	  description="Med precision och omsorg använder vi modern tuftingteknik för att förvandla dina idéer till verklighet. Vår tuftingpistol gör det möjligt att skapa detaljerade och varaktiga mönster som speglar din personliga stil."
	  imagePath="/tufting.jpg"
	  subTexts={[
	    "This is something about the image",
	    "Another thing about something",
	    "Even another thing about a service",
	    "Maybe, maybe not...",
	  ]}
	/>
      </div>

      <CharitySection />
      <ReviewsSection />
      <CollectionSection />
      <FAQSection />
    </main>
  )
}
