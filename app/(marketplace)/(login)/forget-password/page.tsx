import Link from 'next/link'
import InputForm from '@/components/inputForm'
import Button from '@/components/button'

const LoginForgetPasswordPage = () => {
  return (
    <div className="flex flex-col h-screen max-w-sm mx-auto lg:min-w-[320px] w-full -mt-[64px] py-6 items-center pointer-events-none">
      <div className="flex flex-col w-full h-full justify-center">
        <div className="flex flex-col pointer-events-auto gap-y-8">
	  <div className="flex flex-col gap-y-2">
	    <h1 className="lg:text-3xl text-2xl text-center font-bold">
	      Återställ Lösenordet
	    </h1>
	    <p className="lg:text-lg text-md text-center">
	      Skriv din e-postaddress, sen skickar vi instruktioner för att återställa ditt lösenord.
	    </p>
	  </div>

	  <div className="flex flex-col gap-y-4">
	    <InputForm
	      id="email"
	      htmlFor="email"
	      label="E-postaddress"
	      type="text"
	    />
	  </div>

	  <Button
	    actionText="Fortsätt"
	    fill
	  />

	  <div className="flex gap-x-2 justify-center ">
	    <Link href="/login/password" className="text-lg text-center text-primary hover:underline">
	      Tillbaka Till Inloggning
	    </Link>
	  </div>
	</div>
      </div>
    </div>
  )
}

export default LoginForgetPasswordPage;
