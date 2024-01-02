import Link from 'next/link'
import InputForm from '@/components/inputForm'
import Button from '@/components/button'

const LoginIdentifierPage = () => {
  return (
    <div className="flex flex-col h-screen max-w-sm mx-auto lg:min-w-[320px] w-full -mt-[64px] py-6 items-center pointer-events-none">
      <div className="flex flex-col w-full h-full justify-center">
        <div className="flex flex-col pointer-events-auto gap-y-8">
	  <h1 className="lg:text-3xl text-2xl text-center font-bold">
	    Välkommen Tillbaka
	  </h1>

	  <InputForm
	    id="email"
	    htmlFor="email"
	    label="E-postaddress"
	    type="text"
	    invalid
	  />

	  <Button
	    actionText="Fortsätt"
	    fill
	  />

	  <div className="flex gap-x-2 justify-center">
	    <p className="text-lg text-center">
	      Ingen Användare?
	    </p>
	    <Link href="/sign-up" className="text-lg font-medium text-center text-primary hover:underline">
	      Klicka här
	    </Link>
	  </div>
	</div>
      </div>
    </div>
  )
}

export default LoginIdentifierPage;
