type TermProps = {
  title: string,
  description: string
};

const Term = ({ title, description }: TermProps) => {
  return (
    <div className="flex flex-col gap-y-4">
      <h2 className="lg:text-3xl text-2xl font-bold">
      	{title}
      </h2>

      <p className="lg:text-2xl text-xl">
	{description}
      </p>
    </div>
  )
}

export default Term;
