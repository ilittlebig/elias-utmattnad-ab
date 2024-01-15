import Link from 'next/link'
import Image from 'next/image'
import InputForm from '@/components/inputForm'
import Button from '@/components/button'

const LoginIdentifierPage = () => {
  return (
    <div className="flex gap-x-16 items-center -mt-[70px] h-screen pointer-events-none">
      <div className="flex flex-col max-w-sm mx-auto lg:w-[400px] w-full py-6 items-center">
	<div className="flex flex-col w-full h-full justify-center">
	  <div className="flex flex-col pointer-events-auto gap-y-8">
	    <div className="flex flex-col font-semibold gap-y-2 items-center">
	      <h1 className="lg:text-[40px] text-black text-2xl text-center leading-tight">
		Kul att se dig igen.
	      </h1>
	      <p className="text-sm text-center text-black text-opacity-60">
		Vänligen logga in på ditt konto.
	      </p>
	    </div>

	    <InputForm
	      id="email"
	      htmlFor="email"
	      label="E-postaddress"
	      type="text"
	    />

	    <Button
	      actionText="Fortsätt"
	      fill
	    />

	    <div className="flex gap-x-2 justify-center font-semibold">
	      <p className="text-sm text-center text-black">
		Ingen Användare?
	      </p>
	      <Link href="/sign-up" className="text-sm text-center text-primary hover:underline">
		Klicka här
	      </Link>
	    </div>
	  </div>
	</div>
      </div>

      <div className="relative min-w-[600px] min-h-[600px]">
        <Image
	  src="/Login.svg"
	  fill
	  style={{ objectFit: "contain" }}
	  alt="Login Illustration"
	/>
      </div>
    </div>
  )
}

export default LoginIdentifierPage;
