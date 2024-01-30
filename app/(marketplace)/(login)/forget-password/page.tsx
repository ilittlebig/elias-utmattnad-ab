import Link from 'next/link'
import Image from 'next/image'
import InputForm from '@/components/inputForm'
import Button from '@/components/button'

const ForgetPasswordPage = () => {
  return (
    <div className="flex gap-x-16 items-center -mt-[70px] h-screen pointer-events-none">
      <div className="flex flex-col max-w-sm mx-auto lg:w-[400px] w-full py-6 items-center">
	<div className="flex flex-col w-full h-full justify-center">
	  <div className="flex flex-col pointer-events-auto gap-y-8">
	    <div className="flex flex-col font-semibold gap-y-2 items-center">
	      <h1 className="lg:text-[40px] text-2xl text-center text-black leading-tight">
		Återställ Lösenord
	      </h1>
	      <p className="text-sm max-w-[300px] text-center text-black text-opacity-60">
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
	      <Link href="/login/password" className="text-sm text-center text-primary font-semibold hover:underline">
		Tillbaka Till Inloggning
	      </Link>
	    </div>
	  </div>
	</div>
      </div>

      <div className="relative min-w-[600px] min-h-[600px]">
        <Image
	  src="/ForgetPassword.png"
	  fill
	  style={{ objectFit: "contain" }}
	  alt="Forget Password Illustration"
	/>
      </div>
    </div>
  )
}

export default ForgetPasswordPage;
