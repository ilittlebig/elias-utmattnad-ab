import Link from 'next/link'
import InputForm from '@/components/inputForm'
import Button from '@/components/button'

const LoginSignUpPage = () => {
  return (
    <div className="flex flex-col h-screen max-w-sm mx-auto lg:min-w-[320px] w-full -mt-[64px] py-6 items-center pointer-events-none">
      <div className="flex flex-col w-full h-full justify-center">
        <div className="flex flex-col pointer-events-auto gap-y-8">
	  <h1 className="lg:text-3xl text-2xl text-center font-bold">
	    Skapa Ditt Konto
	  </h1>

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
	    <Link href="/login/identifier" className="font-medium text-lg text-center text-primary hover:underline">
	      Tillbaka Till Inloggning
	    </Link>
	  </div>
	</div>
      </div>
    </div>
  )
}

export default LoginSignUpPage;
