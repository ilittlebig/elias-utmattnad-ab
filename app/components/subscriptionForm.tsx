import { FaArrowRight } from 'react-icons/fa'
import InputForm from '@/components/inputForm'

const SubscriptionForm = () => {
  return (
    <div className="flex flex-col gap-y-8 max-w-[500px]">
      <label className="text-black text-2xl">
	Registrera dig för att få 10% rabatt på din första beställning.
      </label>

      <div className="flex">
	<InputForm
	  id="email"
	  htmlFor="email"
	  type="text"
	  label="E-postaddress"
	/>

	<div role="button" className="flex bg-black hover:bg-[#000000] items-center justify-center px-6">
	  <FaArrowRight className="text-white w-3 h-3" />
	</div>
      </div>
    </div>
  )
}

export default SubscriptionForm;
