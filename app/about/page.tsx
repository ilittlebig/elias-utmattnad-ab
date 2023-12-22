import Image from 'next/image'
import ShowcaseCard from '@/sections/showcase/card'
import TimelineEvent from '@/components/timelineEvent'

const AboutPage = () => {
  return (
    <div className="font-rockwell">
      {/* Hero Image */}
      <div className="h-[384px]">
	<div className="absolute left-0 w-screen h-[384px]">
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
	  Välkommen till Elias Utmattnad AB – där traditionell hantverkskonst möter modern design.
	</h2>
      </div>

      <h2 className="flex lg:text-5xl text-4xl text-center justify-center font-bold pt-40">
	Vår Nuvarande Position
      </h2>

      <div className="flex flex-col lg:gap-y-0 gap-y-8 items-center lg:pt-24 lg:pb-16 pt-12 pb-8">
      	<TimelineEvent
	  index={1}
	  text="Grundat 2023, Elias Utmattad AB började som en liten verkstad med en stor dröm om att förnya det traditionella mattuftningshantverket."
	  side="right"
	  selected
	/>
	<div className="hidden lg:block w-2 h-32 bg-gray-400" />
      	<TimelineEvent
	  index={2}
	  text="Genom att införa innovativ tuftningsteknik lyckades vi skapa anpassade mattor som kombinerar klassisk estetik med modern funktionalitet."
	  side="left"
	/>
	<div className="hidden lg:block w-2 h-32 bg-gray-400" />
      	<TimelineEvent
	  index={3}
	  text="Idag står vi som en ledande aktör inom branschen och våra skräddarsydda mattor pryder hem över hela Sverige."
	  side="right"
	/>
	<div className="hidden lg:block w-2 h-32 bg-gray-400" />
      	<TimelineEvent
	  index={4}
	  text="Vi strävar efter hållbarhet i varje stygn och är engagerade i att minska vår miljöpåverkan, för ett grönare och mjukare morgondag."
	  side="left"
	/>
      </div>

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

      <div className="flex flex-col lg:gap-y-0 gap-y-8 items-center lg:pt-24 lg:pb-44 pt-12 pb-24">
      	<TimelineEvent
	  index={5}
	  text="Grundat 2023, Elias Utmattad AB började som en liten verkstad med en stor dröm om att förnya det traditionella mattuftningshantverket."
	  side="right"
	/>
	<div className="hidden lg:block w-2 h-32 bg-gray-400" />
      	<TimelineEvent
	  index={6}
	  text="Genom att införa innovativ tuftningsteknik lyckades vi skapa anpassade mattor som kombinerar klassisk estetik med modern funktionalitet."
	  side="left"
	/>
	<div className="hidden lg:block w-2 h-32 bg-gray-400" />
      	<TimelineEvent
	  index={7}
	  text="Idag står vi som en ledande aktör inom branschen och våra skräddarsydda mattor pryder hem över hela Sverige."
	  side="right"
	/>
	<div className="hidden lg:block w-2 h-32 bg-gray-400" />
      	<TimelineEvent
	  index={8}
	  text="Vi strävar efter hållbarhet i varje stygn och är engagerade i att minska vår miljöpåverkan, för ett grönare och mjukare morgondag."
	  side="left"
	/>
      </div>
    </div>
  )
}

export default AboutPage;
