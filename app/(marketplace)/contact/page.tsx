import { RiCustomerService2Line } from 'react-icons/ri'
import { IoChatbubblesOutline, IoBulbOutline } from 'react-icons/io5'
import Image from 'next/image'
import InputForm from '@/components/inputForm'
import Button from '@/components/button'

const ContactPage = () => {
  return (
    <div className="flex flex-col gap-y-16 justify-center h-screen -mt-[64px]">
      <div className="flex gap-x-16 pointer-events-none">
	<div className="flex flex-col mx-auto w-full py-6 items-center">
	  <div className="flex flex-col w-full h-full justify-center">
	    <div className="flex flex-col pointer-events-auto gap-y-8">
	      <div className="flex flex-col text-black gap-y-2 items-center">
		<h1 className="relative flex gap-x-3 lg:text-[40px] text-2xl text-center leading-tight">
		  <div className="relative flex items-center justify-center">
		    <div className="absolute w-[180px] h-[50px] -z-10">
		      <Image
			src="/TextBorder2.svg"
			fill
			style={{ objectFit: "contain" }}
			alt="Text Border"
		      />
		    </div>
		    Kontakta
		  </div>

		  <div className="relative flex w-fit">
		    <div className="absolute right-[-27%] w-[38px] h-[38px] -mt-[3px]">
		      <Image
			src="/Spark.svg"
			width={38}
			height={38}
			style={{ objectFit: "contain" }}
			alt="Spark"
		      />
		    </div>
		    Oss
		  </div>
		</h1>
	      </div>

	      <div className="flex flex-col gap-y-4">
		<div className="flex gap-x-8">
		  <InputForm
		    id="forename"
		    htmlFor="forname"
		    label="Förnamn"
		    type="text"
		    required
		  />

		  <InputForm
		    id="surname"
		    htmlFor="surname"
		    label="Efternamn"
		    type="text"
		  />
		</div>

		<InputForm
		  id="email"
		  htmlFor="email"
		  label="E-postaddress"
		  type="text"
		  required
		/>

		<InputForm
		  id="message"
		  htmlFor="message"
		  label="Meddelande"
		  type="textarea"
		  required
		/>
	      </div>

	      <Button
		actionText="Skicka"
		fill
		disabled
	      />
	    </div>
	  </div>
	</div>

	<div className="relative min-w-[500px] min-h-[500px]">
	  <Image
	    src="/Support.svg"
	    fill
	    style={{ objectFit: "contain" }}
	    alt="Support Illustration"
	  />
	</div>
      </div>

      <div className="flex justify-between text-black">
        <div className="flex gap-x-4">
	  <RiCustomerService2Line className="w-10 h-10" />
	  <div className="flex flex-col gap-y-2 max-w-[250px]">
	    <label className="font-semibold text-md">
	      Garanterad Snabb Svarstid
	    </label>
	    <label className="text-sm">
	      Vårt engagemang är att erbjuda snabba svar. Förvänta er ett personligt och professionellt svar inom 2-4 timmar, varje dag mellan 08:00 och 20:00.
	    </label>
	  </div>
	</div>

        <div className="flex gap-x-4">
	  <IoChatbubblesOutline className="w-10 h-10" />
	  <div className="flex flex-col gap-y-2 max-w-[250px]">
	    <label className="font-semibold text-md">
	      Personlig Kundservice
	    </label>
	    <label className="text-sm">
	      Vi är här för att erbjuda dig personlig och uppmärksam service. Varje förfrågan behandlas med omsorg och expertis, anpassad efter dina behov.
	    </label>
	  </div>
	</div>

        <div className="flex gap-x-4">
	  <IoBulbOutline className="w-10 h-10" />
	  <div className="flex flex-col gap-y-2 max-w-[250px]">
	    <label className="font-semibold text-md">
	      Expertis bakom Varje Svar
	    </label>
	    <label className="text-sm">
	      Vårt team, med djupgående kunskap och erfarenhet, garanterar välinformerade och noggranna svar på alla dina frågor.
	    </label>
	  </div>
	</div>
      </div>
    </div>
  )
}

export default ContactPage;
