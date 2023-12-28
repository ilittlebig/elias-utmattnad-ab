import Button from '@/components/button'
import BackArrow from '@/dashboard/components/backArrow'

type HeaderProps = {
  title: string,
  buttonText: string,
  buttonDisabled?: boolean,
  isLoading?: boolean,
  onClick: () => void
};

const FormHeader = ({ title, buttonText, buttonDisabled, isLoading, onClick }: HeaderProps) => {
  return (
    <div className="flex w-full justify-between">
      <div className="flex items-center gap-x-5">
	<BackArrow />

	<div className="text-3xl font-bold">
	  {title}
	</div>
      </div>

      <div className="flex gap-x-2">
	<Button
	  actionText="Avbryt"
	  className="text-lg px-6 py-3"
	  href="/dashboard/products"
	  noBackground
	/>

	<Button
	  actionText={buttonText}
	  className="text-lg px-6 py-3"
	  disabled={buttonDisabled}
	  isLoading={isLoading}
	  onClick={onClick}
	/>
      </div>
    </div>
  )
}

export default FormHeader;
