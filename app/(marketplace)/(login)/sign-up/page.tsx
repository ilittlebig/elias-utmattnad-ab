import Link from 'next/link'
import Image from 'next/image'
import InputForm from '@/components/inputForm'
import Button from '@/components/button'

const SignUpPage = () => {
  return (
    <div className="flex gap-x-16 items-center -mt-[70px] h-screen pointer-events-none">
      <div className="flex flex-col max-w-sm mx-auto lg:w-[400px] w-full py-6 items-center">
	<div className="flex flex-col w-full h-full justify-center">
	  <div className="flex flex-col pointer-events-auto gap-y-8">
	    <div className="flex flex-col font-semibold gap-y-2 items-center">
	      <h1 className="lg:text-[40px] text-2xl text-black text-center leading-tight">
		Skapa Ditt Konto
	      </h1>
	      <p className="text-sm text-center max-w-[200px] text-black text-opacity-60">
		Slutför din registrering för att få din 10% rabatt.
	      </p>
	    </div>

	    <div className="flex flex-col gap-y-4">
	      <InputForm
		id="forename"
		htmlFor="forename"
		label="Förnamn"
		type="text"
	      />

	      <InputForm
		id="surname"
		htmlFor="surname"
		label="Efternamn"
		type="text"
	      />

	      <InputForm
		id="email"
		htmlFor="email"
		label="E-postaddress"
		type="text"
	      />

	      <InputForm
		id="password"
		htmlFor="password"
		label="Lösenord"
		type="password"
	      />

	      <InputForm
		id="confirm-password"
		htmlFor="confirm-password"
		label="Bekräfta Lösenord"
		type="password"
	      />
	    </div>

	    <Button
	      actionText="Fortsätt"
	      fill
	    />

	    <div className="flex gap-x-2 justify-center ">
	      <Link href="/login/identifier" className="text-black text-sm text-center text-primary hover:underline font-semibold">
		Tillbaka Till Inloggning
	      </Link>
	    </div>
	  </div>
	</div>
      </div>

      <div className="relative min-w-[600px] min-h-[600px]">
	<Image
	  src="/SignUp.png"
	  fill
	  style={{ objectFit: "contain" }}
	  alt="Sign Up Illustration"
	/>
      </div>
    </div>
  )
}

export default SignUpPage;
