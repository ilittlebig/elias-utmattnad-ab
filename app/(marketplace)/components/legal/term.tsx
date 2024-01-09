type TermProps = {
  title: string,
  description: string
};

const Term = ({ title, description }: TermProps) => {
  return (
    <div className="flex flex-col gap-y-4">
      <h2 className="text-[16px] font-semibold">
      	{title}
      </h2>

      <p className="text-sm whitespace-pre-wrap">
	{description}
      </p>
    </div>
  )
}

export default Term;
