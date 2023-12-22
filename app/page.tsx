import HeroSection from '@/sections/hero/index'
import ReviewsSection from '@/sections/reviews/index'
import ServicesSection from '@/sections/services/index'
import VisionSection from '@/sections/vision/index'
import CollectionSection from '@/sections/collection/index'
import FAQSection from '@/sections/FAQ/index'

import ShowcaseCard from '@/sections/showcase/card'

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <VisionSection />
      <ServicesSection />

      {/* Content Showcase Section */}

      <div className="flex flex-col pt-[1000px] gap-y-32 lg:pt-32 lg:pb-12 font-rockwell">
        <div className="flex flex-col gap-y-6 text-center items-center">
	  <h1 className="lg:text-5xl text-4xl font-bold">
	    Vår Process
	  </h1>

	  <h2 className="max-w-4xl lg:text-2xl text-xl">
	    Här beskriver vi stegen från beställning till leverans av din unika matta. Vi tar hand om allt från design till tillverkning, för att skapa en matta som speglar just din stil.
	  </h2>
	</div>

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
      </div>

      <ReviewsSection />
      <CollectionSection />
      <FAQSection />
    </main>
  )
}
