import Image from 'next/image'
import Story from '@/(marketplace)/components/story'
import EventSection from '@/(marketplace)/components/eventSection'

const AboutPage = () => {
  const futureEvents: string[] = [
    "I framtiden siktar Elias Mattor på att bli en ledande kraft inom mattuftningsindustrin, där vi kombinerar traditionellt hantverk med modern innovation.",
    "Vi planerar att fördjupa vårt engagemang för hållbarhet, med fokus på att använda miljövänliga material och minska vår miljöpåverkan.",
    "Genom att samarbeta med lokala konstnärer och designers, hoppas vi att skapa unika mattkollektioner som kombinerar svensk tradition och samtida design.",
    "Vår vision inkluderar att utveckla en interaktiv online-plattform, vilket gör det möjligt för kunder att skapa egna mattor och engagera sig i vår hantverksprocess.",
    "På sikt ser vi fram emot att öppna ett showroom, som inte bara fungerar som en försäljningsplats, utan även som en plats för kreativa workshops och evenemang.",
  ];

  return (
    <div className="relative flex flex-col py-[130px] gap-y-[50px]">
      <p className="text-h1 font-semibold text-black max-w-3xl leading-[50px] mx-auto">
	Vi specialiserar oss på att skapa handtuftade mattor, varje stycke är ett unikt konstverk. Våra design inspireras av en värld av färg och kreativitet.
      </p>

      <div className="flex flex-col gap-y-[130px] pt-[130px]">
        <Story
	  image="/AboutImage1.jpg"
	  title="FÖRETAGSBAKGRUND"
	  description="Mitt företag tog sin början under en personlig prövningstid på sjukhuset, där jag nyligen hade diagnostiserats med diabetes. Denna period av osäkerhet och eftertanke ledde till en spontan idé: att skapa handtuftade mattor. Drivkraften bakom detta val var en strävan efter att skapa något äkta och varaktigt med mina egna händer. Genom att förena traditionell tuftningsteknik med en samtida estetik, föddes mitt företag med ambitionen att erbjuda unika konstverk i form av mattor, vilket reflekterar min personliga resa och passion för hantverket."
	/>

        <Story
	  image="/AboutImage2.jpg"
	  title="HANTVERKETS SKÖNHET"
	  description="Varje matta som lämnar vår ateljé är en hyllning till hantverkets skönhet och precision. I varje stygn och varje färgval finns en historia av dedikation och omsorg. Dessa mattor är inte bara inredningselement, de är konstverk som bär på vår personliga berättelse och kreativitet. Genom att kombinera traditionella tuftningstekniker med modern design, skapar vi mattor som är både tidlösa och samtida - ett perfekt komplement till varje hem och varje stil."
	  leftSideText

	/>

        <Story
	  image="/AboutImage3.jpg"
	  title="INNOVATION OCH INSPIRATION"
	  description="I varje ny matta vi skapar, införlivar vi en fusion av innovation och inspiration. Denna process är en kontinuerlig resa i utforskandet av nya mönster, texturer och färgkombinationer. Vi inspireras av allt omkring oss – naturens under, urbana landskap, samt konst och kultur från hela världen. Det är denna diversitet av influenser som ger våra mattor deras unika karaktär och liv. Varje design är ett äventyr, en möjlighet att bryta nya gränser och utforska det oupptäckta inom hantverk och estetik."

	/>
      </div>

      <div className="pt-[130px]">
	<EventSection
	  events={futureEvents}
	/>
      </div>

      <p className="pt-[130px] text-h1 text-black font-semibold max-w-3xl leading-[50px] mx-auto">
	Vårt mål är att erbjuda prisvärda, lekfulla och kreativt designade mattor som gör konstnärlig stil tillgänglig och njutbar för varje hem.
      </p>

      <div className="flex flex-col gap-y-8 font-semibold max-w-3xl mx-auto pt-[130px]">
	<p className="text-lg leading-8 text-black text-opacity-60">
	  Med diabetes som den ursprungliga drivkraften bakom företagets grundande, och med min personliga erfarenhet av att leva med sjukdomen, är mitt mål att aktivt bidra till utvecklingen av effektiva hjälpmedel och stödja relevant forskning. Detta engagemang kan ta sig olika uttryck:
	</p>

	<ul className="flex flex-col list-disc gap-y-4 max-w-[735px] mx-auto">
	  <li className="text-black text-opacity-60"><p className="font-semibold text-black text-opacity-100">Forskning och Utveckling:</p> Vårt företag kan investera i, eller samarbeta med, forskningsinstitut för att utveckla nya teknologier och behandlingar för diabetes. Detta kan innefatta allt från att förbättra blodsockermätare till att utforska nya terapeutiska metoder.</li>
	  <li className="text-black text-opacity-60"><p className="font-semibold text-black text-opacity-100">Advokatverksamhet och Medvetenhet:</p>Genom att öka medvetenheten om diabetes och dess utmaningar kan vi påverka politik och samhällsåsikter. Detta inkluderar att arbeta för bättre sjukvårdspolitik, stödja utbildningskampanjer och bidra till att minska stigmatiseringen kring sjukdomen.</li>
	  <li className="text-black text-opacity-60"><p className="font-semibold text-black text-opacity-100">Stöd till Diabetesgemenskapen:</p>Att skapa och stödja gemenskaper för de som lever med diabetes är viktigt. Detta kan innebära att erbjuda stödgrupper, informationsresurser och tillgång till expertis inom området.</li>
	  <li className="text-black text-opacity-60"><p className="font-semibold text-black text-opacity-100">Innovation inom Hjälpmedel:</p>Att utveckla och förbättra hjälpmedel som förenklar livet för personer med diabetes är centralt. Detta kan inkludera allt från användarvänliga blodsockermätare till avancerade insulinpumpar och appbaserade hälsoövervakningssystem.</li>
	</ul>
      </div>

      <p className="text-h1 text-black font-semibold max-w-3xl leading-[50px] mx-auto pt-[130px]">
	Anslut dig till vår resa och hjälp oss att bli pionjärer inom tuftbranschen, där vi förvandlar varje hem med våra prisvärda, kreativa mattor.
      </p>
    </div>
  )
}

export default AboutPage;
