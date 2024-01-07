import { FaArrowRight } from 'react-icons/fa'
import InputForm from '@/components/inputForm'

const SubscriptionForm = () => {
  return (
    <div className="flex flex-col gap-y-4">
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

	<div className="flex bg-black items-center justify-center px-6">
	  <FaArrowRight className="text-white" />
	</div>
      </div>
    </div>
  )
}

export default SubscriptionForm;
