import Link from 'next/link'
import Image from 'next/image'
import InputForm from '@/components/inputForm'
import Button from '@/components/button'

const LoginForgetPasswordPage = () => {
  return (
    <div className="flex gap-x-16 items-center -mt-[64px] h-screen pointer-events-none">
      <div className="flex flex-col max-w-sm mx-auto lg:w-[400px] w-full py-6 items-center">
	<div className="flex flex-col w-full h-full justify-center">
	  <div className="flex flex-col pointer-events-auto gap-y-8">
	    <div className="flex flex-col text-black gap-y-2 items-center">
	      <h1 className="lg:text-[40px] text-2xl text-center leading-tight">
		Återställ Lösenordet
	      </h1>
	      <p className="text-sm max-w-[300px] text-center">
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
	      <Link href="/login/password" className="text-sm text-center text-primary hover:underline">
		Tillbaka Till Inloggning
	      </Link>
	    </div>
	  </div>
	</div>
      </div>

      <div className="relative min-w-[600px] min-h-[600px]">
        <Image
	  src="/ForgetPassword.svg"
	  fill
	  style={{ objectFit: "contain" }}
	  alt="Login Illustration"
	/>
      </div>
    </div>
  )
}

export default LoginForgetPasswordPage;
