import Link from 'next/link'
import InputForm from '@/components/inputForm'
import Button from '@/components/button'

const LoginPasswordPage = () => {
  return (
    <div className="flex flex-col h-screen max-w-sm mx-auto lg:min-w-[320px] w-full -mt-[64px] py-6 items-center pointer-events-none">
      <div className="flex flex-col w-full h-full justify-center">
        <div className="flex flex-col pointer-events-auto gap-y-8">
	  <div className="flex flex-col text-black gap-y-2 items-center">
	    <h1 className="lg:text-[40px] text-2xl text-center leading-tight">
	      Skriv Ditt Lösenord
	    </h1>
	    <p className="text-sm text-center">
	      Vänligen skriv ditt lösenord.
	    </p>
	  </div>

	  <div className="flex flex-col gap-y-4">
	    <InputForm
	      id="email"
	      htmlFor="email"
	      text="elias@jamee.se"
	      type="text"
	      linkText="Edit"
	      linkHref="/login/identifier"
	      disabled
	    />

	    <InputForm
	      id="Password"
	      htmlFor="Password"
	      label="Lösenord"
	      type="password"
	    />
	  </div>

	  <Button
	    actionText="Fortsätt"
	    fill
	  />

	  <div className="flex gap-x-2 justify-center ">
	    <p className="text-sm text-center">
	      Glömt Lösenordet?
	    </p>
	    <Link href="/forget-password" className="text-sm text-center text-primary hover:underline">
	      Klicka här
	    </Link>
	  </div>
	</div>
      </div>
    </div>
  )
}

export default LoginPasswordPage;
