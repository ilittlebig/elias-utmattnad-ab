import Image from 'next/image'
import Link from 'next/link'
import FAQQuestion from '@/(marketplace)/components/faqQuestion'
import Button from '@/components/button'

const FAQSection = () => {
  const questions = [
    {
      question: "Vilka sorters mattor erbjuder ni?",
      answer: "Vi specialiserar oss på handtuftade mattor, skapade med kvalitetsmaterial. Vårt utbud inkluderar allt från moderna designmattor till anpassade mönster som du själv kan skapa.",
    },
    {
      question: "Hur beställer jag en anpassad matta?",
      answer: "För att beställa en anpassad matta, välj 'Skapa din egen design' på vår hemsida. Där kan du ladda upp din design och specificera önskade mått och färger. Vi tar sedan kontakt med dig för att diskutera detaljerna vidare."
    },
    {
      question: "Vilka betalningssätt accepterar ni?",
      answer: "Vi accepterar betalningar via kreditkort, Swish och banköverföring. Alla transaktioner är säkra och skyddade."
    },
    {
      question: "Hur lång är leveranstiden för en matta?",
      answer: "Leveranstiden för standardmattor är vanligtvis 2-3 veckor. För anpassade mattor, beroende på designens komplexitet, kan det ta 4-6 veckor."
    },
    {
      question: "Vad är er returpolicy?",
      answer: "Om du inte är nöjd med din matta, erbjuder vi en retur- eller utbytesrätt inom 14 dagar från mottagandet, förutsatt att mattan är i sitt ursprungliga skick."
    },
  ];

  return (
    <div className="flex flex-col pt-36 pb-36 gap-y-12">
      <div className="relative">
	<div className="absolute w-[70px] h-[70px] top-[150px] left-[-5%]">
	  <Image
	    src="/decorations/BlueArrow.svg"
	    fill
	    style={{ objectFit: "contain" }}
	    alt="Blue Arrow"
	  />
	</div>

	<div className="absolute w-[20px] h-[20px] top-[0px] right-[28%]">
	  <Image
	    src="/decorations/RedPlus.svg"
	    fill
	    style={{ objectFit: "contain" }}
	    alt="Red Plus"
	  />
	</div>

	<div className="absolute w-[30px] h-[30px] top-[400px] right-[-10%] rotate-[25deg]">
	  <Image
	    src="/decorations/GreenTriangle.svg"
	    fill
	    style={{ objectFit: "contain" }}
	    alt="Green Triangle"
	  />
	</div>

	<div className="absolute w-[20px] h-[20px] top-[950px] right-[20%]">
	  <Image
	    src="/decorations/RedPlus.svg"
	    fill
	    style={{ objectFit: "contain" }}
	    alt="Red Plus"
	  />
	</div>

	<div className="absolute w-[30px] h-[30px] top-[750px] right-[90%] rotate-[70deg]">
	  <Image
	    src="/decorations/OrangeSwirl.svg"
	    fill
	    style={{ objectFit: "contain" }}
	    alt="Orange Swirl"
	  />
	</div>
      </div>

      <div className="flex px-4 lg:px-0">
	<div className="flex flex-col text-black text-center mx-auto items-center gap-y-6">
	  <h1 className="relative lg:text-5xl text-4xl font-bold w-fit">
	    <div className="absolute right-[-36%] w-[70px] h-[70px] -mt-[30px] -z-10">
	      <Image
		src="/Spark.svg"
		width={70}
		height={70}
		style={{ objectFit: "contain" }}
		alt="Spark"
	      />
	    </div>
	    FAQ
	  </h1>

	  <h2 className="max-w-2xl lg:text-lg text-lg font-medium">
	    Få svar på vanliga frågor om våra produkter och tjänster i vår FAQ-sektion, där vi ger tydliga och kortfattade förklaringar.
	  </h2>
	</div>
      </div>

      <div className="flex flex-col gap-y-8 lg:w-[70%] mx-auto items-center lg:max-w-3xl px-4 lg:px-0">
        {questions.map((question, index) => (
	  <FAQQuestion
	    question={question.question}
	    answer={question.answer}
	    index={index + 1}
	  />
	))}
      </div>

      <div className="bg-green-50 text-center items-center max-w-lg rounded-2xl flex flex-col gap-y-4 w-fit mx-auto text-black px-12 py-8">
        <label className="font-semibold text-xl">
	  Har du fortfarande frågor?
	</label>
        <label className="text-lg">
	  Vi beklagar att vi inte kunde tillhandahålla de svar du sökte. Om du har ytterligare frågor eller behöver assistans, tveka inte att kontakta oss här.
	</label>

	<Button
	  actionText="Kontakta Oss"
	  href="/contact"
	/>
      </div>
    </div>
  )
}

export default FAQSection;
