import Image from 'next/image'
import ShowcaseCard from '@/sections/showcase/card'
import EventSection from '@/components/eventSection'

const AboutPage = () => {
  const currentEvents = [
    {
      text: "Välkommen till Elias Utmattad AB, vårt nystartade företag i mattuftning. Även om vi precis har börjat, är vår verkstad redan en kreativ källa där traditionella tekniker möter modern design.",
      side: "right"
    },
    {
      text: "Vi fokuserar på hållbarhet och kvalitet, vilket genomsyrar vårt urval av material. Varje matta vi skapar är inte bara en produkt, utan ett hantverk som återspeglar vår omsorg och precision.",
      side: "left"
    },
    {
      text: "Som nya inom branschen är vi i en ständig läroprocess, ivriga att förbättra och utveckla våra färdigheter i mattuftning. Vi är fast beslutna att växa och göra ett namn för oss själva.",
      side: "right"
    },
    {
      text: "Våra första projekt är små men ambitiösa, varje matta är unik och tuftad med personlig prägel. Vi ser fram emot att utveckla vår portfolio och dela vårt hantverk med världen.",
      side: "left"
    },
    {
      text: "Trots att vi är i början av vår resa, drömmer vi stort. Vår vision är att bli en framträdande aktör inom mattuftningsindustrin, kända för vårt engagemang för kvalitet och estetisk innovation.",
      side: "right"
    },
  ];

  const futureEvents = [
    {
      text: "I framtiden siktar Elias Utmattad AB på att bli en ledande kraft inom mattuftningsindustrin, där vi kombinerar traditionellt hantverk med modern innovation.",
      side: "right"
    },
    {
      text: "Vi planerar att fördjupa vårt engagemang för hållbarhet, med fokus på att använda miljövänliga material och minska vår miljöpåverkan.",
      side: "left"
    },
    {
      text: "Genom att samarbeta med lokala konstnärer och designers, hoppas vi att skapa unika mattkollektioner som kombinerar svensk tradition och samtida design.",
      side: "right"
    },
    {
      text: "Vår vision inkluderar att utveckla en interaktiv online-plattform, vilket gör det möjligt för kunder att skapa egna mattor och engagera sig i vår hantverksprocess.",
      side: "left"
    },
    {
      text: "På sikt ser vi fram emot att öppna ett showroom, som inte bara fungerar som en försäljningsplats, utan även som en plats för kreativa workshops och evenemang.",
      side: "right"
    },
  ];

  return (
    <div className="font-rockwell">
      {/* Hero Image */}
      <div className="h-[250px] lg:h-[384px]">
	<div className="absolute left-0 w-screen h-[250px] lg:h-[384px]">
	  <Image
	    src="/hero.png"
	    layout="fill"
	    objectFit="cover"
	    alt="Hero"
	  />
	</div>
      </div>

      <div className="flex flex-col max-w-2xl pt-32 mx-auto px-4 lg:px-0 items-center text-center gap-y-5">
	<h1 className="lg:text-5xl text-4xl font-bold">Om Oss</h1>
	<h2 className="lg:text-2xl text-xl">
	  Välkommen till Elias Utmattad AB – där traditionell hantverkskonst möter modern design.
	</h2>
      </div>

      <h2 className="flex lg:text-5xl text-4xl text-center justify-center font-bold pt-40">
	Vår Nuvarande Position
      </h2>

      <EventSection
        events={currentEvents}
      />

      <div className="flex flex-col gap-y-32 pt-32">
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

      <h2 className="flex lg:text-5xl text-4xl text-center justify-center font-rockwell font-bold pt-40">
      	Framtida Planer
      </h2>

      <EventSection
        events={futureEvents}
      />
    </div>
  )
}

export default AboutPage;
