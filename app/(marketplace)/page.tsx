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
import Achievements from '@/(marketplace)/components/achievements/index'

export default function Home() {
  return (
    <main className="flex flex-col gap-y-[50px]">
      <div className="flex flex-col">
	<HeroSection />
	<div className="pt-[140px]">
	  <Achievements />
	</div>
      </div>

      <div className="pt-[60px]">
	<TrustedBySection />
      </div>

      {/*
      <div className="pt-40">
	<ReadMoreSection
	  title="Beställning av Anpassade Mattor"
	  description="Här kan du läsa mer om hur du beställer din egen anpassade matta och ger ditt hem en personlig touch."
	/>
      </div>
      */}

      {/* <VisionSection /> */}
      <ServicesSection />

      {/* Content Showcase Section */}

      <div className="flex flex-col gap-y-16 pt-[130px]">
        <div className="flex flex-col gap-y-4 items-center">
	  <label className="font-semibold text-base text-center text-primary">
	    Varför Elias Mattor?
	  </label>

	  <label className="max-w-[480px] gap-y-1 px-4 font-bold lg:text-h1 text-3xl text-center text-black">
	    Tillsammans bygger vi framtidens mattor
	  </label>
	</div>

	<div className="flex flex-col gap-y-[130px]">
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
      </div>

      <CharitySection/>
      {/*
      <ReadMoreSection
        title="Hemdesign med Hjärta"
	description="Vi donerar 10% av alla intäkter till diabetesforskning. Läs mer om vårt engagemang och hur ditt köp gör skillnad på vår webbplats."
	rightDecoration
      />
      */}
      <ReviewsSection />
      <CollectionSection />
      <FAQSection />
    </main>
  )
}
