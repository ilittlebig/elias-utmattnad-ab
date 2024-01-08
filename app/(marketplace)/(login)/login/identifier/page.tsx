import Link from 'next/link'
import InputForm from '@/components/inputForm'
import Button from '@/components/button'

const LoginIdentifierPage = () => {
  return (
    <div className="flex flex-col h-screen max-w-sm mx-auto lg:min-w-[320px] w-full -mt-[64px] py-6 items-center pointer-events-none">
      <div className="flex flex-col w-full h-full justify-center">
        <div className="flex flex-col pointer-events-auto gap-y-8">
	  <div className="flex flex-col text-black gap-y-2 items-center">
	    <h1 className="lg:text-[40px] text-2xl text-center leading-tight">
	      Kul att se dig igen.
	    </h1>
	    <p className="text-sm text-center">
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

	  <div className="flex gap-x-2 justify-center">
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
  )
}

export default LoginIdentifierPage;
