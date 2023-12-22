import Image from 'next/image'
import Link from 'next/link'
import FAQQuestion from '@/components/faqQuestion'

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
    <div className="flex flex-col py-48 gap-y-12">
      <div className="flex px-4 lg:px-0">
	<div className="flex flex-col text-center mx-auto font-rockwell gap-y-6">
	  <h1 className="lg:text-5xl text-4xl font-bold">
	    FAQ
	  </h1>

	  <h2 className="max-w-4xl lg:text-2xl text-xl">
	    Få svar på vanliga frågor om våra produkter och tjänster i vår FAQ-sektion, där vi ger tydliga och kortfattade förklaringar.
	  </h2>
	</div>
      </div>

      <div className="flex flex-col gap-y-6 font-rockwell lg:w-[70%] mx-auto items-center lg:max-w-3xl px-4 lg:px-0">
        {questions.map((question) => (
	  <FAQQuestion
	    question={question.question}
	    answer={question.answer}
	  />
	))}
      </div>
    </div>
  )
}

export default FAQSection;
