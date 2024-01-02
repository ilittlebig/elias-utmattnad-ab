import FormActionButtons from '@/dashboard/components/formActionButtons'
import BackArrow from '@/dashboard/components/backArrow'

type HeaderProps = {
  title: string,
  buttonText: string,
  buttonDisabled?: boolean,
  href: string,
  isLoading?: boolean,
  onClick: () => void
};

const FormHeader = ({
  title, buttonText, buttonDisabled,
  href, isLoading, onClick
}: HeaderProps) => {
  return (
    <div className="flex w-full justify-between justify-center items-center">
      <div className="flex items-center gap-x-5">
	<BackArrow />

	<div className="text-3xl font-bold">
	  {title}
	</div>
      </div>

      <FormActionButtons
	buttonText={buttonText}
	href={href}
	disabled={buttonDisabled ?? false}
	isLoading={isLoading ?? false}
	onClick={onClick}
      />
    </div>
  )
}

export default FormHeader;
