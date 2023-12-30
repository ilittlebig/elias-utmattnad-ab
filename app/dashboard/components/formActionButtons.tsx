import Button from '@/components/button'

type ActionButtonProps = {
  buttonText: string,
  href: string,
  disabled: boolean,
  isLoading: boolean,
  onClick: () => void
};

const FormActionButtons = ({
  buttonText, href, disabled,
  isLoading, onClick
}: ActionButtonProps) => {
  return (
    <div className="flex gap-x-2 h-[52px]">
      <Button
	actionText="Avbryt"
	className="text-lg px-6 py-3"
	href={href}
	noBackground
	instantAction
      />

      <Button
	actionText={buttonText}
	className="text-lg px-6 py-3"
	disabled={disabled}
	isLoading={isLoading}
	onClick={onClick}
      />
    </div>
  )
}

export default FormActionButtons;
